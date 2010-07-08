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
 * A header cell renderer that allows view selection from a menu
 *
 * @appearance table-header-cell {qx.ui.basic.Atom}
 * @state hovered {table-header-cell}
 */
qx.Class.define("smart.headerrenderer.MultiView",
{
  extend : qx.ui.table.headerrenderer.Default,


  statics :
  {
    /**
     * {String} The state which will be set for header cells of sorted columns.
     */
    STATE_SORTED           : "sorted",


    /**
     * {String} The state which will be set when sorting is ascending.
     */
    STATE_SORTED_ASCENDING : "sortedAscending"
  },


  members :
  {
    __widget : null,

    /**
     * Get the header cell widget that contains the menu
     *
     * @return {smart.headerrenderer.HeaderCellWithMenu}
     */
    getWidget : function()
    {
      return this.__widget;
    },

    // overridden
    createHeaderCell : function(cellInfo)
    {
      // Instantiate the header cell which includes a menu
      this.__widget = new smart.headerrenderer.HeaderCellWithMenu();
      
      // Update it now, using the given cell information
      this.updateHeaderCell(cellInfo, this.__widget);

      return this.__widget;
    },


    // overridden
    updateHeaderCell : function(cellInfo, cellWidget)
    {
      var This = this.self(arguments);

      // check for localization [BUG #2699]
      if (cellInfo.name && cellInfo.name.translate) {
        cellWidget.setLabel(cellInfo.name.translate());
      } else {
        cellWidget.setLabel(cellInfo.name);
      }

      // Set image tooltip if given
      var widgetToolTip = cellWidget.getToolTip();
      if (this.getToolTip() != null)
      {
        if (widgetToolTip == null)
        {
          // We have no tooltip yet -> Create one
          widgetToolTip = new qx.ui.tooltip.ToolTip(this.getToolTip());
          cellWidget.setToolTip(widgetToolTip);
          // Link disposer to cellwidget to prevent memory leak
          qx.util.DisposeUtil.disposeTriggeredBy(widgetToolTip, cellWidget);
        }
        else
        {
          // Update tooltip text
          widgetToolTip.setLabel(this.getToolTip());
        }
      }

      cellInfo.sorted ?
        cellWidget.addState(This.STATE_SORTED) :
        cellWidget.removeState(This.STATE_SORTED);

      cellInfo.sortedAscending ?
        cellWidget.addState(This.STATE_SORTED_ASCENDING) :
        cellWidget.removeState(This.STATE_SORTED_ASCENDING);
    }
  }
});
