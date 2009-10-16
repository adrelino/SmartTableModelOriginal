/* ************************************************************************

   Copyright: Fritz Zaucker

   License: LGPL and EPL

   Authors: Fritz Zaucker <fritz.zaucker@oetiker.ch>

************************************************************************ */

/**
 * Search as you type filter implementation with SmartTableModel
 */
qx.Class.define("smart.searchAsYouType.Application",
{
  extend : qx.application.Standalone,

  members :
  {
      table:                null,
      views:                null,
      __searchFilter:       '', // initial value for SearchAsYouType filter (don't filter)
      __searchTimer:        null,
      __searchTimeout: 250, // timeout after which SearchAsYouType view is updated
      
	  // Define our columns. 
      // Each column name maps to its position in the table.
	  //
	  columns: {
		  "Col0":    0,
		  "Name":    1,
		  "Col2":    2
	  },  
      __searchColumn:  1,  // filter column for SearchAsYouType (numeric for performance)

	  // Define our views. 
      // These are subsets of the table rows defined in terms 
      // of filter functions.
	  //
	  views: {
		  "All": {
		      // All rows visible
		  },  
		  "SearchAsYouType": {
		      // All rows matching search string are visible
		      filters: function (rowdata) { 
                  // case sensitive search
                  // return (rowdata[this.__searchColumn].indexOf(this.__searchFilter) != -1);

                  // case insensitive search
                  // Note: it would be better to move the toLowerCase() call on this.__searchFilter to the
                  //       input handler (called only once).  		
                  return (rowdata[this.__searchColumn].toLowerCase().indexOf(this.__searchFilter.toLowerCase()) != -1);
              }   
          }   
	  },


      /**
       * This method contains the initial application code and gets called 
       * during startup of the application
       */
      main : function()
      {
          // Call super class
          this.base(arguments);

          // Enable logging in debug variant
          if (qx.core.Variant.isSet("qx.debug", "on")) {
              // support native logging capabilities, e.g. Firebug for Firefox
              qx.log.appender.Native;
              // support additional cross-browser console. Press F7 to toggle visibility
              qx.log.appender.Console;
          }

		  // Create a smart table model
		  var tm = new smart.Smart();

		  // Set the columns
		  var column_names = [];
		  for (key in this.columns) {
		      column_names[this.columns[key]] = key;
          }
		  tm.setColumns(column_names);

		  // Create a table using the model
		  this.table = new qx.ui.table.Table(tm);

		  var id = 0;
		  for (var view in this.views) {
		      if (view == 'All') {
			      this.views[view].id = 0;
			      continue;
		      }   
		      this.views[view].id = ++id;
		      tm.addView(this.views[view].filters,
			             this,
			             this.views[view].conjunction);
		  }

          var filter = new qx.ui.form.TextField();
          filter.addListener('input', function(e) {
              this.__searchFilter = e.getData();
              this.__searchTimer.restart();
          }, this);

          this.__searchTimer = new qx.event.Timer(this.__searchTimeout);
          this.__searchTimer.addListener('interval', function(e) { 
          // TBD: you might want to make sure that this function
          //      has finished before it is started again.
              this.__searchTimer.stop();
              if(this.__searchFilter == ""){
                  this.debug("Empty search field, showing all rows ...");
                  tm.updateView(this.views["All"].id); // needed?
                  tm.setView(this.views["All"].id);
              } 
              else {
                  this.debug("Showing rows matching search field ...");
                  tm.updateView(this.views["SearchAsYouType"].id);
                  tm.setView(this.views["SearchAsYouType"].id);
              }
          }, this);
          
          // Document is the application root
          var doc = this.getRoot();
			
          // Add filter and table to document at fixed coordinates
		  doc.add(filter,     {left: 100, top: 50});
          doc.add(this.table, {left: 100, top: 75});
          var data = [];
          var i;
          for (i=0; i<30000; i++) {
              data.push([ '', 'tag'+i, '']);
          }
          this.__searchFilter = '';
          tm.setData(data);
      }
  }
});
