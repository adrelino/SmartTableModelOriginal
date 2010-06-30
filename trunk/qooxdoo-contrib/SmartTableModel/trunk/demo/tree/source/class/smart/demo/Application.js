/* ************************************************************************

    qooxdoo - the new era of web development

    http://qooxdoo.org

    Copyright:
      (c) 2009 by Arcode Corporation
      (c) 2010 by Derrell Lipman

     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.

    Authors:
      * Dave Baggett
      * Derrell Lipman

#asset(smart.demo/*)

************************************************************************ */

/**
 * Smart table model demo: customer service order tracker.
 */
qx.Class.define("smart.demo.Application", 
{
  extend : qx.application.Standalone,

  members: 
  {
    table: null,
    orders: -1,

    // Define our columns. Each column name maps to its position in the table.
    columns: 
    {
      "Subject"   : 0,
      "Sender"    : 1,
      "Date"      : 2,
      "MessageId" : 3,
      "Read?"     : 4,
      "Extra"     : 5
    },

    // Define our views. These are subsets of the table rows defined
    // in terms of filter functions. Each view can have a single
    // filter function or a list of functions conjoined by either
    // 'and' or 'or' operators.
    views: 
    {
      "All Messages": 
      {
	// All orders visible
      },
      "Unread": 
      {
	// All rows with false in the Processed column are visible
        filter: function (rowdata)
        {
          return !rowdata[this.columns["Read?"]];
        }
      },
      "Grouped By Date":
      {
        // When rows are about to be inserted, add date header rows
        preInsertRows : function(existingRows, newRows, dm)
        {
          // Obtain a date formatting object
          var dateFormat = new qx.util.format.DateFormat("dd MMM yyyy");

          // Get the date today
          var todayObj = new timezonedate.TimezoneDate();

          // We want the beginning of the day. Set the time to midnight.
          todayObj.setHours(0, 0, 0, 0);
          
          // Get the time value for the beginning of today
          var today = todayObj.getTime();
          
          // The number of milliseconds in a day
          var msDay = 1000 * 60 * 60 * 24;

          // Calculate the time value for the beginning of yesterday too
          var yesterday = today - msDay;

          // Get (or create) a map of used dates (unique to the day).
          var uniqueDates = dm.getUserData("GroupByDate");

          // If we hadn't previously created it...
          if (! uniqueDates)
          {
            // ... then create it now.
            uniqueDates = {};
            dm.setUserData("GroupByDate", uniqueDates);
          }

          // We'll be adding header rows: one for each unique day in the new
          // Date field of the new rows. Add them all, once, at the end.
          var headerRows = [];

          // For each new row...
          for (var i = 0; i < newRows.length; i++)
          {
            // Get the Date field from this row, converted to ms since epoch
            var columnDate = 
              newRows[i][this.columns["Date"]].getTime();
            
            // Truncate to only contain the date (no time), converted to UTC
            var dayOfDateObj = new timezonedate.TimezoneDate(columnDate);
            dayOfDateObj.setHours(0, 0, 0, 0);
            var dayOfDate = dayOfDateObj.getTime();

            // Do we already have entries for this day?
            if (uniqueDates[dayOfDate] === undefined)
            {
              // Nope. Add a header row
              var headerRow = [ "", "", "", "", "", { header : true } ];
              
              if (dayOfDate == today)
              {
                headerRow[this.columns["Subject"]] = "Today";
              }
              else if (dayOfDate == yesterday)
              {
                headerRow[this.columns["Subject"]] = "Yesterday";
              }
              else
              {
                headerRow[this.columns["Subject"]] =
                  dateFormat.format(dayOfDateObj);
              }

              // Save the date object too, for sorting on
              headerRow[this.columns["Date"]] = dayOfDateObj;
              
              // Save this new header row to insert later
              headerRows.push(headerRow);
              
              // This date is now available
              uniqueDates[dayOfDate] = columnDate;
            }
          }
          
          // Now that we've created all of the header rows, append them to the
          // newRows array.
          for (i = 0; i < headerRows.length; i++)
          {
            newRows.push(headerRows[i]);
          }
        },

        // Sort by date, with header rows sorted before non-header rows
        sort : function(row1, row2)
        {
          // Retrieve the two date values and convert to ms since epoch
          var date1 = row1[this.columns["Date"]].getTime();
          var date2 = row2[this.columns["Date"]].getTime();

          // Earlier dates sort before later dates
          if (date1 != date2)
          {
            return (date1 < date2 ? -1 : 1);
          }
          
          // Ensure that header rows sort before non-header rows
          var extra1 = row1[this.columns["Extra"]];
          var extra2 = row2[this.columns["Extra"]];
          
          // There won't be two rows with the same date that are both header
          // rows, so we can exclude testing for that.
          if (extra1 && extra1.header)
          {
            // row1 is a header, so row1 sorts earlier than row2
            return -1;
          }
          if (extra2 && extra2.header)
          {
            // row2 is a header, so row1 sorts later than row2
            return 1;
          }
          
          // The two dates are the same (and neither is a header)
          return 0;
        }
      }
    },

    // The main entry point for the demo
    main: function() 
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Variant.isSet("qx.debug", "on")) 
      {
        var appender;
	appender = qx.log.appender.Native;
	appender = qx.log.appender.Console;
      }

      //
      // Define table model properties
      //

      // Create the table model
      var tm = new smart.Smart();

      // Set the columns
      var key, column_names = [];
      for (key in this.columns)
      {
        if (key == "Extra")
        {
          break;
        }
	column_names[this.columns[key]] = key;
      }
      tm.setColumns(column_names);

      // Create a table using the model
      this.table = new qx.ui.table.Table(tm);

      // Every row will have a unique Order Number so we'll use that column as
      // an index. The index will allow us to instantly find any order in the
      // table using its order number.
      tm.addIndex(this.columns["MessageId"]);

      // Add additional views (the unfiltered view is always present, as view
      // zero).
      var id = 0;
      for (var view in this.views) 
      {
	if (view == 'All Messages') 
        {
	  this.views[view].id = 0;
	  continue;
	}
        var viewData = this.views[view];
	viewData.id = ++id;
        var advanced = null;
        if (viewData.sort || viewData.preInsertRows) 
        {
          advanced = 
            {
              fSort          : viewData.sort,
              fPreInsertRows : viewData.preInsertRows
            };
        }
        tm.newView(this.views[view].filter, this, advanced);
      }
      tm.setView(this.views["All Messages"].id);

      // Add some static data
      tm.setData(this.testData());

      // Enable indexed selection by Order Number. This will cause the model
      // to automatically preserve the selection across table modifications,
      // using the Order Number index.
      //
      // This means we don't have to do any work to maintain the selection
      // when we add or delete rows, or re-sort the table.
      var sm = this.table.getSelectionModel();
      sm.setSelectionMode(
        qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
      tm.indexedSelection(this.columns["Order Number"], sm);

      // Set up column renderers
      var tcm = this.table.getTableColumnModel();
      tcm.setDataCellRenderer(this.columns["Read?"],
                              new qx.ui.table.cellrenderer.Boolean());
      tcm.setDataCellRenderer(this.columns["Date"],
                              new qx.ui.table.cellrenderer.Date());
      tcm.setColumnWidth(this.columns["Subject"], 600);
      tcm.setColumnWidth(this.columns["Sender"], 150);
      tcm.setColumnWidth(this.columns["Date"], 150);

      // Change the date format for the "Date" column
      var dr = tcm.getDataCellRenderer(this.columns["Date"]);
      dr.setDateFormat(new qx.util.format.DateFormat("yyyy-MM-dd HH:mm:ss"));

      // Disable the focus row. We only want selection highlighting.
      this.table.setShowCellFocusIndicator(false);
      this.table.highlightFocusedRow(false);

      // Create a view control so the user can select which view to, er...,
      // view.
      id = 0;
      var view_control = new qx.ui.form.SelectBox();
      view_control.set({ width: 300 });
      var items = [];
      for (view in this.views) 
      {
	var info = this.views[view];
	var li = new qx.ui.form.ListItem(view);
	items[info.id] = li;
	li.setUserData("id", info.id);
      }
      for (var i = 0; i < items.length; i++)
      {
	view_control.add(items[i]);
      }

      // Listen to the changeSelection event and update the view accordingly.
      view_control.addListener("changeSelection",
                               function (e) 
                               {
				 var listitem = e.getData()[0];
				 var id = listitem.getUserData("id");
				 this.setView(id);
			       },
			       this.table.getTableModel());

      // Add widgets to root canvas
      var root = this.getRoot();
      root.add(view_control, { left: 100, top: 10});
      root.add(this.table, { edge : 10, top : 40 });
    },
	    
    testData : function()
    {
      // Generate a static data model for a series of email messages.
      // Each row consists, first, of the displayed column data, and finally
      // the message id and then a map of additional information which may be
      // used to build a tree from the data.
      return [
               [
                 "[qooxdoo-devel] break on error in Firebug in func gecko()",
                 "Werner Thie",
                 new timezonedate.TimezoneDate("2010-06-09T11:53"),
                 1,
                 true,
                 {
                   inReplyTo : null
                 }
               ],
               [
                 "Re: [qooxdoo-devel] break on error in Firebug in func gecko()",
                 "thron7",
                 new timezonedate.TimezoneDate("2010-06-09T14:28"),
                 2,
                 true,
                 {
                   inReplyTo : 1
                 }
               ],
               [
                 "Re: [qooxdoo-devel] break on error in Firebug in func gecko()",
                 "Derrell Lipman",
                 new timezonedate.TimezoneDate("2010-06-09T14:32"),
                 3,
                 false,
                 {
                   inReplyTo : 2
                 }
               ],
               [
                 "[qooxdoo-devel] scrolling experience",
                 "Tobias Oetiker",
                 new timezonedate.TimezoneDate("2010-06-08T07:56"),
                 4,
                 true,
                 {
                   inReplyTo : null
                 }
               ],
               [
                 "Re: [qooxdoo-devel] scrolling experience",
                 "MartinWitteman",
                 new timezonedate.TimezoneDate("2010-06-09T12:53"),
                 5,
                 true,
                 {
                   inReplyTo : 4
                 }
               ],
               [
                 "Re: [qooxdoo-devel] scrolling experience",
                 "Tobias Oetiker",
                 new timezonedate.TimezoneDate("2010-06-09T13:42"),
                 6,
                 true,
                 {
                   inReplyTo : 5
                 }
               ],
               [
                 "Re: [qooxdoo-devel] scrolling experience",
                 "MartinWitteman",
                 new timezonedate.TimezoneDate("2010-06-09T14:28"),
                 7,
                 false,
                 {
                   inReplyTo : 6
                 }
               ],
               [
                 "[qooxdoo-devel] How to patch static methods/members? (qooxdoo 1.2-pre)",
                 "Peter Schneider",
                 new timezonedate.TimezoneDate("2010-06-09T09:18"),
                 8,
                 false,
                 {
                   inReplyTo : null
                 }
               ],
               [
                 "Re: [qooxdoo-devel] How to patch static methods/members? (qooxdoo 1.2-pre)",
                 "Derrell Lipman",
                 new timezonedate.TimezoneDate("2010-06-09T13:59"),
                 9,
                 false,
                 {
                   inReplyTo : 8
                 }
               ],
               [
                 "Re: [qooxdoo-devel] How to patch static methods/members? (qooxdoo 1.2-pre)",
                 "Peter Schneider",
                 new timezonedate.TimezoneDate("2010-06-09T13:59"),
                 10,
                 false,
                 {
                   inReplyTo : 9
                 }
               ],
               [
                 "Re: [qooxdoo-devel] How to patch static methods/members? (qooxdoo 1.2-pre)",
                 "Derrell LIpman",
                 new timezonedate.TimezoneDate("2010-06-09T14:04"),
                 11,
                 false,
                 {
                   inReplyTo : 10
                 }
               ],
               [
                 "[qooxdoo-devel] mo better qooxlisp",
                 "Kenneth Tilton",
                 new timezonedate.TimezoneDate("2010-06-05T23:40"),
                 12,
                 true,
                 {
                   inReplyTo : null
                 }
               ],
               [
                 "Re: [qooxdoo-devel][Lisp] mo better qooxlisp",
                 "Ken Tilton",
                 new timezonedate.TimezoneDate("2010-06-09T13:11"),
                 13,
                 true,
                 {
                   inReplyTo : 12
                 }
               ],
               [
                 "Re: [qooxdoo-devel][Lisp] mo better qooxlisp",
                 "Joubert Nel",
                 new timezonedate.TimezoneDate("2010-06-09T13:24"),
                 14,
                 true,
                 {
                   inReplyTo : 13
                 }
               ],
               [
                 "Re: [qooxdoo-devel][Lisp] mo better qooxlisp",
                 "Kenneth Tilton",
                 new timezonedate.TimezoneDate("2010-06-09T13:40"),
                 15,
                 true,
                 {
                   inReplyTo : 14
                 }
               ],
               [
                 "[qooxdoo-devel] a jqPlot qooxdoo integration widget contrib",
                 "Tobias Oetiker",
                 new timezonedate.TimezoneDate("2010-06-08T10:59"),
                 16,
                 false,
                 {
                   inReplyTo : null
                 }
               ],
               [
                 "Re: [qooxdoo-devel] a jqPlot qooxdoo integration widget contrib",
                 "panyasan",
                 new timezonedate.TimezoneDate("2010-06-09T07:48"),
                 17,
                 false,
                 {
                   inReplyTo : 16
                 }
               ],
               [
                 "Re: [qooxdoo-devel] a jqPlot qooxdoo integration widget contrib",
                 "Tobi Oetiker",
                 new timezonedate.TimezoneDate("2010-06-09T13:24"),
                 18,
                 false,
                 {
                   inReplyTo : 16
                 }
               ],
               [
                 "[qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "panyasan",
                 new timezonedate.TimezoneDate("2010-06-09T07:48"),
                 19,
                 false,
                 {
                   inReplyTo : null
                 }
               ],
               [
                 "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "thron7",
                 new timezonedate.TimezoneDate("2010-06-09T11:42"),
                 20,
                 false,
                 {
                   inReplyTo : 19
                 }
               ],
               [
                 "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "panyasan",
                 new timezonedate.TimezoneDate("2010-06-09T12:16"),
                 21,
                 false,
                 {
                   inReplyTo : 20
                 }
               ],
               [
                 "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "hkalyoncu",
                 new timezonedate.TimezoneDate("2010-06-09T12:57"),
                 22,
                 false,
                 {
                   inReplyTo : 21
                 }
               ],
               [
                 "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "Fritz Zaucker",
                 new timezonedate.TimezoneDate("2010-06-09T12:58"),
                 23,
                 false,
                 {
                   inReplyTo : 21
                 }
               ],
               [
                 "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "panyasan",
                 new timezonedate.TimezoneDate("2010-06-09T13:05"),
                 24,
                 false,
                 {
                   inReplyTo : 23
                 }
               ],
               [
                 "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "thron7",
                 new timezonedate.TimezoneDate("2010-06-09T13:18"),
                 25,
                 false,
                 {
                   inReplyTo : 21
                 }
               ]
             ];
   } 
  }
});
