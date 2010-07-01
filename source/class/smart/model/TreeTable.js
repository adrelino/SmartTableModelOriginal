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

qx.Class.define("smart.model.TreeTable",
{
  extend : smart.model.Default,
  
  // We'll make use of the tree-building code from treevirtual
  include : qx.ui.treevirtual.MTreePrimitive,

  members :
  {
    __tree : null,

    /**
     * Create an initial node list for a new tree.
     *
     * @return {Array}
     *   An array containing a single "root" node which can be used as the
     *   parent of additional nodes added to the tree.
     */
    initTree : function(view)
    {
      var nodeArr = [ qx.ui.treevirtual.MTreePrimitive._getEmptyTree() ];
      var rowArray = this.getRowArray(view, false);
      
      // Save the initial tree array as a property of the row array
      rowArray.nodeArr = nodeArr;
      
      return nodeArr;
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

    buildTableFromTree : function(view)
    {
      var srcRowArr = this.getRowArray(view, false);
      var nodeArr = srcRowArr.nodeArr;
      var destRowArr = this.getRowArray(view, true);

      // Remove everything from the row array
      destRowArr.length = 0;
      
      // Create an array to hold the nodes added to the destination row array
      var destNodeArr = destRowArr.nodeArr = [];
      
      // Begin in-order traversal of the tree from the root to regenerate a
      // displayable rowArr.
      this.__inorder(nodeArr, srcRowArr, destNodeArr, destRowArr, 0, 1);
    },
    

    /**
     * Returns the node object specific to a currently visible row. In this
     * simple tree data model, that's the same as retrieving the value of the
     * tree column of the specified row.
     *
     * @throws {Error}
     *   Thrown if the row index is out of bounds.
     *   
     * @param rowIndex {Integer}
     *   The index of the row.
     *   
     * @param view {Integer ?}
     *   Which model view this operation should apply to. If this parameter is
     *   omitted, it defaults to the value of the {@link #view} property.
     *
     * @return {Object|null}
     *   The node object associated with the specified row.
     */
    getNode : function(rowIndex, view)
    {
      if (view === undefined)
      {
        view = this.getView();
      }
      
      // Retrieve the node array associated with the primary or alternate row
      // array.
      var nodeArr = this.getRowArray(view).nodeArr;
      if (! nodeArr)
      {
        // It hasn't been built yet.
        return null;
      }

      // Give 'em what they came for.
      return nodeArr[rowIndex];
    },

    /*
     * Set the tree object for which this data model is used.
     *
     * @param tree {qx.ui.treevirtual.TreeVirtual}
     *    The tree used to render the data in this model.
     */
    setTree : function(tree)
    {
      this.__tree = tree;
    },

    /**
     * Get the tree object for which this data model is used.
     *
     * @return {qx.ui.treevirtual.TreeVirtual}
     */
    getTree : function()
    {
      return this.__tree;
    },

    /**
     * Sorts the model by a column.
     *
     * @param columnIndex {Integer} the column to sort by.
     * @param ascending {Boolean} whether to sort ascending.
     * @throws {Error} If one tries to sort the tree by column
     */
    sortByColumn : function(columnIndex, ascending)
    {
      throw new Error("Trees can not be sorted by column");
    },


    /**
     * Returns the column index the model is sorted by. This model is never
     * sorted, so -1 is returned.
     *
     * @return {Integer}
     *   -1, to indicate that the model is not sorted.
     */
    getSortColumnIndex : function()
    {
      return -1;
    },


    /**
     * Specifies which column the tree is to be displayed in.  The tree is
     * displayed using the SimpleTreeDataCellRenderer.  Other columns may be
     * provided which use different cell renderers.
     *
     * @param columnIndex {Integer}
     *   The index of the column in which the tree should be displayed.
     */
    setTreeColumn : function(col)
    {
      if (col == 0)
      {
        return;
      }
      
      throw new Error("The tree is always in column 0 in this implementation.");
    },
    
    getTreeColumn : function()
    {
      return 0;
    },
    
    /**
     * Set state attributes of a node.
     *
     * @param nodeReference {Object | Integer}
     *   The node to have its attributes set.  The node can be represented
     *   either by the node object, or the node id (as would have been
     *   returned by addBranch(), addLeaf(), etc.)
     *
     * @param attributes {Map}
     *   Each property name in the map may correspond to the property names of
     *   a node which are specified as <i>USER-PROVIDED ATTRIBUTES</i> in
     *   {@link SimpleTreeDataModel}.  Each property value will be assigned
     *   to the corresponding property of the node specified by nodeId.
     *
     * @throws {Error} If the node object or id is not valid.
     * @return {void}
     */
    setState : function(nodeReference, attributes, view)
    {
      var node;
      var nodeId;

      if (typeof(nodeReference) == "object")
      {
        node = nodeReference;
        nodeId = node.nodeId;
      }
      else if (typeof(nodeReference) == "number")
      {
        nodeId = nodeReference;
        node = this._nodeArr[nodeId];
      }
      else
      {
        throw new Error("Expected node object or node id");
      }

      for (var attribute in attributes)
      {
        // Do any attribute-specific processing
        switch(attribute)
        {
        case "bSelected":
          throw new Error("Selections are maintained by superclass");
          break;

        case "bOpened":
          // Don't do anything if the requested state is the same as the
          // current state.
          if (attributes[attribute] == node.bOpened)
          {
            break;
          }

          // Get the tree to which this data model is attached
          var tree = this.__tree;

/*
          // Are we opening or closing?
          if (node.bOpened)
          {
            // We're closing.  If there are listeners, generate a treeClose
            // event.
            tree.fireDataEvent("treeClose", node);
          }
          else
          {
            // We're opening.  Are there any children?
            if (node.children.length > 0)
            {
              // Yup.  If there any listeners, generate a "treeOpenWithContent"
              // event.
              tree.fireDataEvent("treeOpenWithContent", node);
            }
            else
            {
              // No children.  If there are listeners, generate a
              // "treeOpenWhileEmpty" event.
              tree.fireDataEvent("treeOpenWhileEmpty", node);
            }
          }
*/

          // Event handler may have modified the opened state.  Check before
          // toggling.
          if (!node.bHideOpenClose)
          {
            // It's still boolean.  Toggle the state
            node.bOpened = !node.bOpened;
          }

          // Rebuild the table since formerly visible rows may now be
          // invisible, or vice versa.
          this.buildTableFromTree(view);
          break;

        default:
          // no attribute-specific processing required
          break;
        }

        // Set the new attribute value
        node[attribute] = attributes[attribute];
      }
    },
    
    _clearSelections : function()
    {
      this.__clearSelection();
    }
  }
});
