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
 * A header cell widget that uses a menu to select the view instead of the
 * typical, but more difficult to use with multiple views, toggling effect.
 *
 * @appearance table-header-cell {qx.ui.basic.Atom}
 * @state hovered {table-header-cell}
 */
qx.Class.define("smart.headerrenderer.HeaderCellWithMenu",
{
  extend : qx.ui.table.headerrenderer.HeaderCell,
  
  members :
  {
    // overridden
    _applySortIcon : function(value, old)
    {
      if (value) {
        this._showChildControl("sort-icon").setSource(value);
      } else {
        this._excludeChildControl("sort-icon");
      }
    },
    
    // overridden
    _createChildControlImpl : function(id)
    {
      var control;

      switch(id)
      {
        case "sort-icon":
          var iconPath = "icon/22/apps/internet-web-browser.png";
          control = new qx.ui.form.MenuControl("", iconPath);
          control.setIconPosition("right");
          control._excludeChildControl("label");
          var doc = this.getRoot();
          doc.add(control,
          {
            right : 10,
            top  : 50
          });

          var menu = new qx.ui.menu.Menu();
          var view1 = new qx.ui.menu.Control("View 1");
          var view2 = new qx.ui.menu.Control("View 2");
          var view3 = new qx.ui.menu.Control("View 3");
          menu.add(view1);
          menu.add(view2);
          menu.add(view3);


          control.resetEnabled();
          control.setMenu(menu);

          this._add(control, {row: 0, column: 2});
          break;
      }

      return control || this.base(arguments, id);
    }
  }
});
