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

  statics :
  {
    toDate : function(dateStr)
    {
      var format = /(\d+)-(\d+)-(\d+)\s(\d+):(\d+)/;
      var result = dateStr.match(format);
      if (result)
      {
        var seconds = Math.floor(Math.random() * 60);
        return new Date(result[1], result[2], result[3],
                        result[4], result[5], seconds);
      }
      
      throw new Error("Could not parse date " + dateStr);
    }
  },

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
        if (viewData.sort) 
        {
          advanced = 
            {
              fSort : viewData.sort
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
                 smart.demo.Application.toDate("2010-06-09 11:53"),
                 1,
                 true,
                 {
                   inReplyTo : null
                 }
               ],
               [
                 "Re: [qooxdoo-devel] break on error in Firebug in func gecko()",
                 "thron7",
                 smart.demo.Application.toDate("2010-06-09 14:28"),
                 2,
                 true,
                 {
                   inReplyTo : 1
                 }
               ],
               [
                 "Re: [qooxdoo-devel] break on error in Firebug in func gecko()",
                 "Derrell Lipman",
                 smart.demo.Application.toDate("2010-06-09 14:32"),
                 3,
                 false,
                 {
                   inReplyTo : 2
                 }
               ],
               [
                 "[qooxdoo-devel] scrolling experience",
                 "Tobias Oetiker",
                 smart.demo.Application.toDate("2010-06-08 07:56"),
                 4,
                 true,
                 {
                   inReplyTo : null
                 }
               ],
               [
                 "Re: [qooxdoo-devel] scrolling experience",
                 "MartinWitteman",
                 smart.demo.Application.toDate("2010-06-09 12:53"),
                 5,
                 true,
                 {
                   inReplyTo : 4
                 }
               ],
               [
                 "Re: [qooxdoo-devel] scrolling experience",
                 "Tobias Oetiker",
                 smart.demo.Application.toDate("2010-06-09 13:42"),
                 6,
                 true,
                 {
                   inReplyTo : 5
                 }
               ],
               [
                 "Re: [qooxdoo-devel] scrolling experience",
                 "MartinWitteman",
                 smart.demo.Application.toDate("2010-06-09 14:28"),
                 7,
                 false,
                 {
                   inReplyTo : 6
                 }
               ],
               [
                 "[qooxdoo-devel] How to patch static methods/members? (qooxdoo 1.2-pre)",
                 "Peter Schneider",
                 smart.demo.Application.toDate("2010-06-09 09:18"),
                 8,
                 false,
                 {
                   inReplyTo : null
                 }
               ],
               [
                 "Re: [qooxdoo-devel] How to patch static methods/members? (qooxdoo 1.2-pre)",
                 "Derrell Lipman",
                 smart.demo.Application.toDate("2010-06-09 13:59"),
                 9,
                 false,
                 {
                   inReplyTo : 8
                 }
               ],
               [
                 "Re: [qooxdoo-devel] How to patch static methods/members? (qooxdoo 1.2-pre)",
                 "Peter Schneider",
                 smart.demo.Application.toDate("2010-06-09 13:59"),
                 10,
                 false,
                 {
                   inReplyTo : 9
                 }
               ],
               [
                 "Re: [qooxdoo-devel] How to patch static methods/members? (qooxdoo 1.2-pre)",
                 "Derrell LIpman",
                 smart.demo.Application.toDate("2010-06-09 14:04"),
                 11,
                 false,
                 {
                   inReplyTo : 10
                 }
               ],
               [
                 "[qooxdoo-devel] mo better qooxlisp",
                 "Kenneth Tilton",
                 smart.demo.Application.toDate("2010-06-05 23:40"),
                 12,
                 true,
                 {
                   inReplyTo : null
                 }
               ],
               [
                 "Re: [qooxdoo-devel][Lisp] mo better qooxlisp",
                 "Ken Tilton",
                 smart.demo.Application.toDate("2010-06-09 13:11"),
                 13,
                 true,
                 {
                   inReplyTo : 12
                 }
               ],
               [
                 "Re: [qooxdoo-devel][Lisp] mo better qooxlisp",
                 "Joubert Nel",
                 smart.demo.Application.toDate("2010-06-09 13:24"),
                 14,
                 true,
                 {
                   inReplyTo : 13
                 }
               ],
               [
                 "Re: [qooxdoo-devel][Lisp] mo better qooxlisp",
                 "Kenneth Tilton",
                 smart.demo.Application.toDate("2010-06-09 13:40"),
                 15,
                 true,
                 {
                   inReplyTo : 14
                 }
               ],
               [
                 "[qooxdoo-devel] a jqPlot qooxdoo integration widget contrib",
                 "Tobias Oetiker",
                 smart.demo.Application.toDate("2010-06-08 10:59"),
                 16,
                 false,
                 {
                   inReplyTo : null
                 }
               ],
               [
                 "Re: [qooxdoo-devel] a jqPlot qooxdoo integration widget contrib",
                 "panyasan",
                 smart.demo.Application.toDate("2010-06-09 07:48"),
                 17,
                 false,
                 {
                   inReplyTo : 16
                 }
               ],
               [
                 "Re: [qooxdoo-devel] a jqPlot qooxdoo integration widget contrib",
                 "Tobi Oetiker",
                 smart.demo.Application.toDate("2010-06-09 13:24"),
                 18,
                 false,
                 {
                   inReplyTo : 16
                 }
               ],
               [
                 "[qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "panyasan",
                 smart.demo.Application.toDate("2010-06-09 07:48"),
                 19,
                 false,
                 {
                   inReplyTo : null
                 }
               ],
               [
                 "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "thron7",
                 smart.demo.Application.toDate("2010-06-09 11:42"),
                 20,
                 false,
                 {
                   inReplyTo : 19
                 }
               ],
               [
                 "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "panyasan",
                 smart.demo.Application.toDate("2010-06-09 12:16"),
                 21,
                 false,
                 {
                   inReplyTo : 20
                 }
               ],
               [
                 "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "hkalyoncu",
                 smart.demo.Application.toDate("2010-06-09 12:57"),
                 22,
                 false,
                 {
                   inReplyTo : 21
                 }
               ],
               [
                 "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "Fritz Zaucker",
                 smart.demo.Application.toDate("2010-06-09 12:58"),
                 23,
                 false,
                 {
                   inReplyTo : 21
                 }
               ],
               [
                 "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "panyasan",
                 smart.demo.Application.toDate("2010-06-09 13:05"),
                 24,
                 false,
                 {
                   inReplyTo : 23
                 }
               ],
               [
                 "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
                 "thron7",
                 smart.demo.Application.toDate("2010-06-09 13:18"),
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
