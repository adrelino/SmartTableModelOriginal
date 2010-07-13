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
  
  // overridden
  construct : function(dm, custom)
  {
    if (! custom)
    {
      custom = {};
    }

    // Unless the user provides a special selection manager...
    if (! custom.selectionManager)
    {
      // ... use our own.
      custom.selectionManager =
        function(obj)
        {
          return new smart.selection.Manager(obj);
        };
    }
      
    // Unless the user provides a special row renderer...
    if (! custom.dataRowRenderer)
    {
      // ... use the one from TreeVirtual.
      custom.dataRowRenderer =
        new qx.ui.treevirtual.SimpleTreeDataRowRenderer();
    }
    
    // Call the superclass
    this.base(arguments, dm, custom);
    
    // Get the column model
    var columnModel = this.getTableColumnModel();
    
    // Get notified when the scroller wants to apply its normal sorting
    var scrollerArr = this._getPaneScrollerArr();
    for (var i = 0; i < scrollerArr.length; i++) 
    {
      scrollerArr[i].addListener("beforeSort", this.__onHeaderClick, this);
    }
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
    },
    
    /** The abbreviation of the view to be shown */
    viewAbbreviation :
    {
      check : "String",
      init  : null,
      apply : "_applyView"
    },

    /**
     * A map containing information on which columns show which view
     * selections.
     *
     * The map contains column numbers for keys.
     *
     * The value of each entry in the map is an array of maps, each
     * corresponding to a menu entry for selection of a view. These maps each
     * contain the following members: 'view' contains the view number; 'caption'
     * is what to display in the menu; 'icon' is the resolved path of an icon to
     * display, corresponding to that menu item selection.
     */
    viewSelection :
    {
      init : null,
      apply : "_applyViewSelection"
    },
    
    showAbbreviations :
    {
      check : "Boolean",
      init  : true
    }
  },

  members :
  {
    __viewAbbreviations : null,

    /**
     * Return the data model for this tree.
     *
     * @return {qx.ui.table.ITableModel} The data model.
     */
    getDataModel : function()
    {
      return this.getTableModel();
    },


    handleHeaderClick : function(col, e)
    {
      // Get the table colum model so we can retrieve the header cell widgets
      var tcm = this.getTableColumnModel();

      // Get the header cell renderer for this column
      var hcr = tcm.getHeaderCellRenderer(col);

      // Get the header cell widget for this column
      var widget = hcr.getWidget(col);
      
      // Simulate a press on the view button, if it's visible, but open the
      // menu near where the mouse was clicked.
      var menuButton = widget.getChildControl("menu-view-button");
      if (menuButton.isVisible())
      {
        var menu = menuButton.getMenu();
//        menu.setOpener(widget);
        menu.open();
      }
    },

    // property apply method
    _applyView : function(value, old)
    {
      // Is the null view selected?
      if (value === null)
      {
        // Yup. Select the primal view
        this.getDataModel().setView(0);
      }

      // Retrieve view data from the abbreviations map, given the abbreviation
      var viewData = this.__viewAbbreviationMap[value];

      // Determine if we're displaying view abbreviations
      var bShowAbbreviations = this.getShowAbbreviations();

      // For each column...
      for (col in this.__columnViewButtonMap)
      {
        // Retrieve the menu button for this column
        var menuButton = this.__columnViewButtonMap[col];
        
        // If this is the column containing the view being selected...
        if (viewData && col == viewData.__col)
        {
          // ... then set the menu button label and icon to the appropriate one
          menuButton.setLabel(bShowAbbreviations ? viewData.abbrev : "");
          menuButton.setIcon(viewData.icon);

          // Switch to this view
          this.getDataModel().setView(viewData.view);
        }
        else
        {
          // Otherwise, make the menu button invisible (but still active)
          menuButton.setLabel("");
          menuButton.setIcon("");
        }
      }
    },

    _createViewButtonMenu : function(col, widget)
    {
      // Get the view selection data
      var viewSelectionData = this.getViewSelection();

      // If there's no view selection, or none for this column...
      if (! viewSelectionData || ! viewSelectionData[col])
      {
        // ... then there's nothing to do yet
        widget._excludeChildControl("menu-view-button");
        return;
      }
      
      // Retrieve the view button widget
      var menuButton = widget._showChildControl("menu-view-button");

      // Create a menu for this column's view selections
      var menu = new qx.ui.menu.Menu();

      // For each view to be available from this column...
      for (var i = 0; i < viewSelectionData[col].length; i++)
      {
        // ... create its menu
        var viewData = viewSelectionData[col][i];
        
        // Validate some input
        this.assertNumber(viewData.view);
        this.assertString(viewData.abbrev);

        // Create the menu button
        var viewButton = new qx.ui.menu.Button(viewData.caption);

        // Save the viewData object in the view button's user data
        viewButton.setUserData("viewData", viewData);

        // Get called when this menu button is selected
        viewButton.addListener(
          "execute",
          function(e)
          {
            // Retrieve the saved view id
            var viewButton = e.getTarget();
            var viewData = viewButton.getUserData("viewData");
            
            // Use that view now.
            this.setViewAbbreviation(viewData.abbrev);
          },
          this);

        // Add the button to the menu
        menu.add(viewButton);
        
        // Add this view to the abbreviation map: maps to view id
        this.__viewAbbreviationMap[viewData.abbrev] = viewData;

        // Also keep track of the menu button corresponding to a column number
        this.__columnViewButtonMap[col] = menuButton;

        // Save the column number locally in this view data
        viewData.__col = col;
      }

      // Establish this new menu
      menuButton.resetEnabled();
      menuButton.setMenu(menu);
      
      // Switch to the selected view
      this._applyView(this.getViewAbbreviation());
    },

    // property apply method
    _applyViewSelection : function(value, old)
    {
      // If the view selection map is being removed...
      if (! value)
      {
        // ... then use an empty map
        value = { };
      }
      
      // (Re-)Create the view abbreviation map
      this.__viewAbbreviationMap = { };
      
      // Ditto for the column button map
      this.__columnViewButtonMap = { };
      
      // Get the table column model so we can retrieve the header cell widgets
      var tcm = this.getTableColumnModel();

      // For each column...
      for (var col in value)
      {
        // Convert the string col to integer column
        var column = col - 0;

        // Get the header cell renderer for this column
        var hcr = tcm.getHeaderCellRenderer(column);

        // If the header cell widget has not been created...
        var widget = hcr.getWidget(column);
        if (! widget)
        {
          // ... then we'll get called again when it is.
          return;
        }

        // Create the view selection button menu
        this._createViewButtonMenu(col, widget);
      }
    },


    /**
     * Event handler. Called when a key was pressed.
     *
     * We handle the Enter key to toggle opened/closed tree state.  All
     * other keydown events are passed to our superclass.
     *
     * @param evt {Map}
     *   The event.
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
    },
    
    /**
     * Event Handler. Called when the header is clicked. This is a private
     * method that simply ensures that the default action (sorting as a normal
     * table does) is prevented. It then calls the overridable method
     * handleHeaderClick() method.
     *
     * @param e {qx.event.type.Data}
     *   The data event. The data provided is an object containing a member
     *   'column' indicating in which colunn the header was clicked, and a
     *   member 'ascending' which is irrelevant in this tree.
     */
    __onHeaderClick : function(e)
    {
      var eventData = e.getData();
      this.handleHeaderClick(eventData.column, e);
      
      // Prevent the default "sort" action
      e.preventDefault();
    }    
  },
  
  defer : function()
  {
    // Ensure that we use our MultiView header renderer instead of the default
    qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER =
      smart.headerrenderer.MultiView;
  }
});

