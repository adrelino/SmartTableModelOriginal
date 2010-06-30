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

qx.Class.define("smart.Tree",
{
  extend : qx.ui.table.Table,
  
  construct : function(dm, custom)
  {
    if (! custom)
    {
      custom = {};
    }

/*
    if (! custom.selectionManager)
    {
      custom.selectionManager =
        function(obj)
        {
          return new qx.ui.treevirtual.SelectionManager(obj);
        };
    }
*/
      
    if (! custom.dataRowRenderer)
    {
      custom.dataRowRenderer =
        new qx.ui.treevirtual.SimpleTreeDataRowRenderer();
    }
    
    this.base(arguments, dm, custom);
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
    }


/*
    _onSelectionChanged : function(evt)
    {
      this.warn("_onSelectionChanged");

      this.base(arguments, evt);
    },

    // overridden
    _calculateSelectedNodes : function()
    {
      // We have no selected nodes in this implementation
      return [];
    }    
*/
  }
});
