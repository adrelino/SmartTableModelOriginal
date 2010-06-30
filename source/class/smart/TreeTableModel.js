/* ************************************************************************

    qooxdoo - the new era of web development

    http://qooxdoo.org

    Copyright:
      (c) 2009-2010 by Arcode Corporation
      (c) 2010 by Derrell Lipman

     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.

    Authors:
      * Derrell Lipman

************************************************************************ */

qx.Class.define("smart.TreeTableModel",
{
  extend : smart.TableModel,
  
  // We'll make use of the tree-building code from treevirtual
  include : qx.ui.treevirtual.MTreePrimitive,

  members :
  {
    /**
     * Create an initial node list for a new tree.
     *
     * @return {Array}
     *   An array containing a single "root" node which can be used as the
     *   parent of additional nodes added to the tree.
     */
    initTree : function()
    {
      return [ qx.ui.treevirtual.MTreePrimitive._getEmptyTree() ];
    },

    /**
     * Add a branch to the tree.
     *
     * @param nodeArr {Array}
     *   The array to which new nodes are to be added
     *
     * @param rowIndex {Integer}
     *   Index in row array of this node
     *
     * @param parentNodeId {Integer}
     *   The node id of the parent of the node being added
     *
     * @param label {String}
     *   The string to display as the label for this node
     *
     * @param bOpened {Boolean}
     *   <i>True</i> if the branch should be rendered in its opened state;
     *   <i>false</i> otherwise.
     *
     * @param bHideOpenCloseButton {Boolean}
     *   <i>True</i> if the open/close button should not be displayed;
     *   <i>false</i> if the open/close button should be displayed
     *
     * @param icon {String}
     *   The relative (subject to alias expansion) or full path of the icon to
     *   display for this node when it is not a selected node.
     *
     * @param iconSelected {String}
     *   The relative (subject to alias expansion) or full path of the icon to
     *   display for this node when it is a selected node.
     *
     * @return {Integer}
     *   The node id of the newly-added branch.
     */
    addBranch : function(nodeArr,
                         rowIndex,
                         parentNodeId,
                         label,
                         bOpened,
                         bHideOpenCloseButton,
                         bHeader,
                         icon)
    {
      // Create a new node.
      var nodeId =
        qx.ui.treevirtual.MTreePrimitive._addNode(
          nodeArr,
          parentNodeId,
          label,
          bOpened,
          bHideOpenCloseButton,
          qx.ui.treevirtual.MTreePrimitive.Type.BRANCH,
          icon);
      
      var node = nodeArr[nodeId];

      // Save the row index
      node.__rowIndex = rowIndex;

      // If this is a header node...
      if (bHeader)
      {
        // ... then mark it as such
        node.__bHeader = true;
      }
      
      return nodeId;
    },


    /**
     * Add a leaf to the tree.
     *
     * @param nodeArr {Array}
     *   The array to which new nodes are to be added
     *
     * @param rowIndex {Integer}
     *   Index in row array of this node
     *
     * @param parentNodeId {Integer}
     *   The node id of the parent of the node being added
     *
     * @param label {String}
     *   The string to display as the label for this node
     *
     * @param icon {String}
     *   The relative (subject to alias expansion) or full path of the icon to
     *   display for this node when it is not a selected node.
     *
     * @param iconSelected {String}
     *   The relative (subject to alias expansion) or full path of the icon to
     *   display for this node when it is a selected node.
     *
     * @return {Integer} The node id of the newly-added leaf.
     */
    addLeaf : function(nodeArr,
                       rowIndex,
                       parentNodeId,
                       label,
                       icon)
    {
      var nodeId =
        qx.ui.treevirtual.MTreePrimitive._addNode(
          nodeArr,
          parentNodeId,
          label,
          false,
          false,
          qx.ui.treevirtual.MTreePrimitive.Type.LEAF,
          icon);

      // Save the row index
      nodeArr[nodeId].__rowIndex = rowIndex;
      
      return nodeId;
    },
    
    __inorder : function(srcNodeArr, srcRowArr, 
                         destNodeArr, destRowArr,
                         nodeId, level)
    {
      var child = null;
      var childNodeId;
      var node = srcNodeArr[nodeId];
      
      // For each child of the specified node...
      var numChildren = srcNodeArr[nodeId].children.length;

      for (var i=0; i<numChildren; i++)
      {
        // Determine the node id of this child
        childNodeId = srcNodeArr[nodeId].children[i];

        // Get the child node
        child = srcNodeArr[childNodeId];

        // Skip deleted nodes
        if (child == null)
        {
          continue;
        }

        // (Re-)assign this node's level
        child.level = level;

        // Determine if we're the first child of our parent
        child.bFirstChild = (i == 0);

        // Determine if we're the last child of our parent
        child.lastChild = [ i == numChildren - 1 ];

        // Get our parent.
        var parent = srcNodeArr[child.parentNodeId];

        // For each parent node, determine if it is a last child
        while (parent.nodeId)
        {
          var bLast = parent.lastChild[parent.lastChild.length - 1];
          child.lastChild.unshift(bLast);
          parent = srcNodeArr[parent.parentNodeId];
        }

        // Retrieve the source row index
        var srcRowIndex = child.__rowIndex;

        // Add this child to the row data array
        destRowArr.push(srcRowArr[srcRowIndex]);
        
        // Reassign to store the destination row index
        child.__rowIndex = destRowArr.length;

        // Track the node that goes with it, too
        destNodeArr.push(child);

        // If this child is opened, ...
        if (child.bOpened)
        {
          // ... then add its children too.
          this.__inorder(srcNodeArr, srcRowArr, 
                         destNodeArr, destRowArr,
                         childNodeId, level + 1);
        }
      }
    },

    buildTableFromTree : function(nodeArr, srcRowArr, destRowArr)
    {
      // Remove everything from the row array
      destRowArr.length = 0;
      
      // Create an array to hold the nodes added to the destination row array
      var destNodeArr = destRowArr.nodeArr = [];
      
      // Begin in-order traversal of the tree from the root to regenerate a
      // displayable rowArr.
      this.__inorder(nodeArr, srcRowArr, destNodeArr, destRowArr, 0, 1);
    }
  }
});
