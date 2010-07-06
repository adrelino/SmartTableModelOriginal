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

qx.Class.define("smart.addons.Tree",
{
  extend : qx.ui.table.Table,
  
  construct : function(dm, custom)
  {
    if (! custom)
    {
      custom = {};
    }

    if (! custom.selectionManager)
    {
      custom.selectionManager =
        function(obj)
        {
          return new smart.selection.Manager(obj);
        };
    }
      
    if (! custom.dataRowRenderer)
    {
      custom.dataRowRenderer =
        new qx.ui.treevirtual.SimpleTreeDataRowRenderer();
    }
    
    this.base(arguments, dm, custom);
  },

  properties :
  {
    /**
     * Whether a click on the open/close button should also cause selection of
     * the row.
     */
    openCloseClickSelectsRow :
    {
      check : "Boolean",
      init : false
    }
  },

  members :
  {
    /**
     * Return the data model for this tree.
     *
     * @return {qx.ui.table.ITableModel} The data model.
     */
    getDataModel : function()
    {
      return this.getTableModel();
    },


    /**
     * Event handler. Called when a key was pressed.
     *
     * We handle the Enter key to toggle opened/closed tree state.  All
     * other keydown events are passed to our superclass.
     *
     * @param evt {Map}
     *   The event.
     *
     * @return {void}
     */
    _onKeyPress : function(evt)
    {
      var dm;


      if (! this.getEnabled())
      {
        return;
      }

      var identifier = evt.getKeyIdentifier();

      var consumed = false;
      var modifiers = evt.getModifiers();

      if (modifiers == 0)
      {
        switch(identifier)
        {
          case "Enter":
            // Get the data model
            var dm = this.getDataModel();

            var focusedCol = this.getFocusedColumn();
            var treeCol = dm.getTreeColumn();

            if (focusedCol == treeCol)
            {
              // Get the focused node
              var focusedRow = this.getFocusedRow();
              var node = dm.getNode(focusedRow);

              if (! node.bHideOpenClose)
              {
                dm.setState(node, { bOpened : ! node.bOpened });
              }

              consumed = true;
            }
            break;

          case "Left":
            this.moveFocusedCell(-1, 0);
            break;

          case "Right":
            this.moveFocusedCell(1, 0);
            break;
        }
      }
      else if (modifiers == qx.event.type.Dom.CTRL_MASK)
      {
        switch(identifier)
        {
          case "Left":
            // Get the data model
            dm = this.getDataModel();

            // Get the focused node
            var focusedRow = this.getFocusedRow();
            var treeCol = dm.getTreeColumn();
            var node = dm.getNode(focusedRow);

            // If it's an open branch and open/close is allowed...
            if ((node.type == qx.ui.treevirtual.MTreePrimitive.BRANCH) &&
                ! node.bHideOpenClose &&
                node.bOpened)
            {
              // ... then close it
              dm.setState(node, { bOpened : ! node.bOpened });
            }

            // Reset the focus to the current node
            this.setFocusedCell(treeCol, focusedRow, true);

            consumed = true;
            break;

          case "Right":
            // Get the data model
            dm = this.getDataModel();

            // Get the focused node
            focusedRow = this.getFocusedRow();
            treeCol = dm.getTreeColumn();
            node = dm.getNode(focusedRow);

            // If it's a closed branch and open/close is allowed...
            if ((node.type == qx.ui.treevirtual.MTreePrimitive.BRANCH) &&
                ! node.bHideOpenClose &&
                ! node.bOpened)
            {
              // ... then open it
              dm.setState(node, { bOpened : ! node.bOpened });
            }

            // Reset the focus to the current node
            this.setFocusedCell(treeCol, focusedRow, true);

            consumed = true;
            break;
        }
      }
      else if (modifiers == qx.event.type.Dom.SHIFT_MASK)
      {
        switch(identifier)
        {
          case "Left":
            // Get the data model
            dm = this.getDataModel();

            // Get the focused node
            var focusedRow = this.getFocusedRow();
            var treeCol = dm.getTreeColumn();
            var node = dm.getNode(focusedRow);

            // If we're not at the top-level already...
            if (node.parentNodeId != 0)
            {
              // Find out what rendered row our parent node is at
              var rowIndex = dm.getRowFromNodeId(node.parentNodeId);

              // Set the focus to our parent
              this.setFocusedCell(this._focusedCol, rowIndex, true);
            }

            consumed = true;
            break;

          case "Right":
            // Get the data model
            dm = this.getDataModel();

            // Get the focused node
            focusedRow = this.getFocusedRow();
            treeCol = dm.getTreeColumn();
            node = dm.getNode(focusedRow);

            // If we're on a branch and open/close is allowed...
            if ((node.type == qx.ui.treevirtual.MTreePrimitive.BRANCH) &&
                ! node.bHideOpenClose)
            {
              // ... then first ensure the branch is open
              if (! node.bOpened)
              {
                dm.setState(node, { bOpened : ! node.bOpened });
              }

              // If this node has children...
              if (node.children.length > 0)
              {
                // ... then move the focus to the first child
                this.moveFocusedCell(0, 1);
              }
            }

            consumed = true;
            break;
        }
      }

      // Was this one of the events that we handle?
      if (consumed)
      {
        // Yup.  Don't propagate it.
        evt.preventDefault();
        evt.stopPropagation();
      }
      else
      {
        // It's not one of ours.  Let our superclass handle this event
        this.base(arguments, evt);
      }
    }
  }
});
