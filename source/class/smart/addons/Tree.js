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
    }
  }
});
