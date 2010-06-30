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
                         parentNodeId,
                         label,
                         bOpened,
                         bHideOpenCloseButton,
                         bHeader,
                         icon,
                         iconSelected)
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
          icon,
          iconSelected);
      
      // If this is a header node...
      if (bHeader)
      {
        // ... then mark it as such
        nodeArr[nodeId].__bHeader = true;
      }
      
      return nodeId;
    },


    /**
     * Add a leaf to the tree.
     *
     * @param nodeArr {Array}
     *   The array to which new nodes are to be added
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
                       parentNodeId,
                       label,
                       icon,
                       iconSelected)
    {
      return qx.ui.treevirtual.MTreePrimitive._addNode(
        nodeArr,
        parentNodeId,
        label,
        false,
        false,
        qx.ui.treevirtual.MTreePrimitive.Type.LEAF,
        icon,
        iconSelected);
    },
    
    __inorder : function(srcNodeArr, srcRowArr, 
                         destNodeArr, destRowArr,
                         nodeId, level)
    {
      var child = null;
      var childNodeId;

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

        // Track the destRowArr index for each node so we can handle selections.
        child.__rowIndex = destRowArr.length;

        // Add this child to the row data array
        destRowArr.push(srcRowArr[child.__rowIndex]);
        
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

    render : function(nodeArr, srcRowArr, destRowArr)
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
