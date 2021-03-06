/* ************************************************************************

    qooxdoo - the new era of web development

    http://qooxdoo.org

    Copyright:
      (c) 2010 by Arcode Corporation
      (c) 2010 by Derrell Lipman

     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.

    Authors:
      * Derrell Lipman

************************************************************************ */


/**
 * A selection manager. This is a helper class that handles all selection
 * related events and updates a SelectionModel.
 * <p>
 * This Selection Manager differs from its superclass in that we do not want
 * rows to be selected when moving around with the keyboard.
 */
qx.Class.define("smart.selection.Manager",
{
  extend : qx.ui.table.selection.Manager,


  /**
   * @param table {qx.ui.table.Table}
   *    The table whose selections are being managed
   */
  construct : function(table)
  {
    this.base(arguments);

    this.__table = table;
  },

  events : {
    "cellTapOnAtom" : "qx.event.type.Data"
  },



  members :
  {
    __table : null,


    /**
     * Getter for the table being managed
     *
     * @return {qx.ui.table.Table}
     *   Table being managed
     */
    getTable : function()
    {
      return this.__table;
    },


    /**
     * Handles a select event.  First we determine if the click was on the
     * open/close button and toggle the opened/closed state as necessary.
     * Then, if the click was not on the open/close button or if the table's
     * "openCloseClickSelectsRow" property so indicates, call our superclass to
     * handle the actual row selection.
     *
     * @param index {Integer}
     *   The index the event is pointing at.
     *
     * @param evt {Map}
     *   The mouse event.
     */
    _handleSelectEvent : function(index, evt)
    {
      // Call our local method to toggle the open/close state, if necessary
      var bNoSelect = this.__handleButtonClick(this.__table, index, evt);

      // If we haven't been told not to do the selection...
      if (!bNoSelect)
      {
        // then call the superclass to handle it.
        this.base(arguments, index, evt);
      }
    },

    /**
     * Handle a mouse click event that is not normally handled by the simple
     * tree.  This is intended for more sophisticated trees where clicks in
     * different places, e.g. on various icons or on the label itself, should
     * be handled specially.
     *
     * @param tree {qx.ui.treevirtual.TreeVirtual}
     *   The tree on which the event has occurred.
     *
     * @param evt {Map}
     *   The mouse event.  Of particular interest is evt.getViewportLeft()
     *   which is the horizontal offset from the left border of the click.
     *
     * @param node {Map}
     *   The node which the tree row is displaying
     *
     * @param left {Integer}
     *   The offset from the left, of the beginning of the tree column.
     *
     * @return {Boolean}
     *   <i>true</i> if the row should be prevented from being selected;
     *   <i>false</i> otherwise.
     */
    _handleExtendedClick : function(tree, evt, node, left)
    {
      this.fireDataEvent("cellTapOnAtom",node);
      return false;
    },
    

    /**
     * Handle a button click (whether by mouse click or keyboard entry) on a
     * table row. The location of a mouse click is ascertained, and certain
     * locations produce special behavior. A click on the open/close icon of a
     * tree row opens or closes that branch. Similarly, pressing "Enter"
     * toggles the open state of a branch, and pressing "Space" selects the
     * row.
     *
     * @param tree {qx.ui.treevirtual.TreeVirtual}
     *   The tree on which the event has occurred.
     *
     * @param index {Integer} 
     *   The index the event is pointing at.
     *
     * @param evt {Map}
     *   The mouse event.  Of particular interest is evt.getViewportLeft()
     *   which is the horizontal offset from the left border of the click.
     */
    __handleButtonClick : function(tree, index, evt)
    {
      // Get the data model
      var dataModel = tree.getDataModel();

      // Determine the column containing the tree
      var treeCol = dataModel.getTreeColumn();

      // Get the focused column
      var focusedCol = tree.getFocusedColumn();

      // If the click is not in the tree column, ...
      if (focusedCol != treeCol)
      {
        // ... then let the Table selection manager deal with it
        return false;
      }

      // If the cell hasn't been focused automatically...
      if (evt instanceof qx.event.type.Mouse)
      {
        if (! tree.getFocusCellOnPointerMove())
        {
          // ... then focus it now so we can determine the node to open/close
          var scrollers = tree._getPaneScrollerArr();

          for (var i=0; i<scrollers.length; i++)
          {
            scrollers[i]._focusCellAtPagePos(evt.getViewportLeft(),
                                             evt.getViewportTop());
          }
        }
      }

      // Get the node to which this event applies
      var node = dataModel.getNode(tree.getFocusedRow());

      if (!node) 
      {
        return false;
      }

      // Was this a mouse event?
      if (evt instanceof qx.event.type.Mouse)
      {
        // Yup.  Get the order of the columns
        var tcm = tree.getTableColumnModel();
        var columnPositions = tcm._getColToXPosMap();

        // Calculate the position of the beginning of the tree column
        var left = qx.bom.element.Location.getLeft(
          tree.getContentElement().getDomElement());

        for (var i=0; i<columnPositions[treeCol].visX; i++) 
        {
          left += tcm.getColumnWidth(columnPositions[i].visX);
        }

        // Was the click on the open/close button?  That button begins at
        // (node.level - 1) * 19 + 2 (the latter for padding), and has width
        // 19.  We add a bit of latitude to that.
        var x = evt.getViewportLeft();
        var latitude = 2;

        var buttonPos = left + 19 + (node.level - 1) * 31;

        this.debug("buttonPos",x,buttonPos,x<buttonPos);


        if (/*x >= buttonPos - latitude &&*/ x <= buttonPos)// + 19 + latitude)
        {
          this.debug("click on tree open/close");
          evt.stopPropagation();

          // Yup.  Toggle the opened state for this node.
          dataModel.setState(node, { bOpened : ! node.bOpened });
          return tree.getOpenCloseClickSelectsRow() ? false : true;
        }
        else
        {
          this.debug("click on tree icon/label");
          return this._handleExtendedClick(tree, evt, node, left);
        }
      }
      else
      {
        // See which key generated the event
        var identifier = evt.getKeyIdentifier();

        switch(identifier)
        {
          case "Space":
            // This should only select the row, not toggle the opened state
            return false;

          case "Enter":
            // Toggle the open state if open/close is allowed
            if (!node.bHideOpenClose) 
            {
              dataModel.setState(node, { bOpened : ! node.bOpened });
            }

            return tree.getOpenCloseClickSelectsRow() ? false : true;

          default:
            // Unrecognized key.  Ignore it.
            return true;
        }
      }
    }
  },

  destruct : function() 
  {
    this.__table = null;
  }
});
