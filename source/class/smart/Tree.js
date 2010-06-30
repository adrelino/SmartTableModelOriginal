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
  extend : qx.ui.treevirtual.TreeVirtual,
  
  members :
  {
    // overridden
    _calculateSelectedNodes : function()
    {
      // We have no selected nodes in this implementation
      return [];
    }    
  }
});
