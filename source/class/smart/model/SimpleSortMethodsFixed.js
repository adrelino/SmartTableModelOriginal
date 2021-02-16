/**
 * Static sort methods copied and modified from qx.ui.table.model.Simple that handle null and undefined properly.
 * 
 * Also see https://github.com/qooxdoo/qooxdoo/issues/10014
 */
qx.Class.define("smart.model.SimpleSortMethodsFixed",
{
  statics :
  {
    /**
     * Default ascending sort method to use if no custom method has been
     * provided.
     *
     * @param row1 {var} first row
     * @param row2 {var} second row
     * @param columnIndex {Integer} the column to be sorted
     * @return {Integer} 1 of row1 is > row2, -1 if row1 is < row2, 0 if row1 == row2
     */
    _defaultSortComparatorAscending : function(row1, row2, columnIndex)
    {
      var obj1 = row1[columnIndex];
      var obj2 = row2[columnIndex];
      if (qx.lang.Type.isNumber(obj1) && qx.lang.Type.isNumber(obj2)) {
        var result = isNaN(obj1) ? isNaN(obj2) ?  0 : 1 : isNaN(obj2) ? -1 : null;
        if (result != null) {
          return result;
        }
      }
      if(obj1==null && obj2!==null) return -1;
      if(obj2==null && obj1!==null) return 1;
      var ret = (obj1 > obj2) ? 1 : ((obj1 == obj2) ? 0 : -1);
      //console.log("asc",obj1,obj2,ret);
      return ret;
    },


    /**
     * Same as the Default ascending sort method but using case insensitivity
     *
     * @param row1 {var} first row
     * @param row2 {var} second row
     * @param columnIndex {Integer} the column to be sorted
     * @return {Integer} 1 of row1 is > row2, -1 if row1 is < row2, 0 if row1 == row2
     */
    _defaultSortComparatorInsensitiveAscending : function(row1, row2, columnIndex)
    {
      var obj1 = row1[columnIndex];
      var obj2 = row2[columnIndex];
      if(obj1==null && obj2!==null) return -1;
      if(obj2==null && obj1!==null) return 1;
      if(obj2==null && obj1==null) return 0;
      if (qx.lang.Type.isNumber(obj1) && qx.lang.Type.isNumber(obj2)) {
        var result = isNaN(obj1) ? isNaN(obj2) ?  0 : 1 : isNaN(obj2) ? -1 : null;
        if (result != null) {
          return result;
        }
      }
      obj1 = obj1.toLowerCase ? obj1.toLowerCase() : obj1;
      obj2 = obj2.toLowerCase ? obj2.toLowerCase() : obj2;
      return (obj1 > obj2) ? 1 : ((obj1 == obj2) ? 0 : -1);
    },


    /**
     * Default descending sort method to use if no custom method has been
     * provided.
     *
     * @param row1 {var} first row
     * @param row2 {var} second row
     * @param columnIndex {Integer} the column to be sorted
     * @return {Integer} 1 of row1 is > row2, -1 if row1 is < row2, 0 if row1 == row2
     */
    _defaultSortComparatorDescending : function(row1, row2, columnIndex)
    {
      var obj1 = row1[columnIndex];
      var obj2 = row2[columnIndex];
      if (qx.lang.Type.isNumber(obj1) && qx.lang.Type.isNumber(obj2)) {
        var result = isNaN(obj1) ? isNaN(obj2) ?  0 : 1 : isNaN(obj2) ? -1 : null;
        if (result != null) {
          return result;
        }
      }
      if(obj1==null && obj2!==null) return 1;
      if(obj2==null && obj1!==null) return -1;
      var ret = (obj1 < obj2) ? 1 : ((obj1 == obj2) ? 0 : -1);
      //console.log("des",obj1,obj2,ret);
      return ret;
    },


    /**
     * Same as the Default descending sort method but using case insensitivity
     *
     * @param row1 {var} first row
     * @param row2 {var} second row
     * @param columnIndex {Integer} the column to be sorted
     * @return {Integer} 1 of row1 is > row2, -1 if row1 is < row2, 0 if row1 == row2
     */
    _defaultSortComparatorInsensitiveDescending : function(row1, row2, columnIndex)
    {
      var obj1 = row1[columnIndex];
      var obj2 = row2[columnIndex];
      if(obj1==null && obj2!==null) return 1;
      if(obj2==null && obj1!==null) return -1;
      if(obj2==null && obj1==null) return 0;
      if (qx.lang.Type.isNumber(obj1) && qx.lang.Type.isNumber(obj2)) {
        var result = isNaN(obj1) ? isNaN(obj2) ?  0 : 1 : isNaN(obj2) ? -1 : null;
        if (result != null) {
          return result;
        }
      }
      obj1 = obj1.toLowerCase ? obj1.toLowerCase() : obj1;
      obj2 = obj2.toLowerCase ? obj2.toLowerCase() : obj2;
      return (obj1 < obj2) ? 1 : ((obj1 == obj2) ? 0 : -1);
    }
  }
});
