/* ************************************************************************

    qooxdoo - the new era of web development

    http://qooxdoo.org

    Copyright:
      (c) 2010 by Derrell Lipman
      (c) 2010 by Arcode Corporation

     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.

    Authors:
      * Derrell Lipman
      * Dave Baggett


#asset(smart.demo/*)

************************************************************************ */

/**
 * Smart demo: a tree
 */
qx.Class.define("smart.demo.Application", 
{
  extend : qx.application.Standalone,

  members: 
  {
    table: null,
    orders: -1,

    //
    // Define our columns. Each column name maps to its position in the table.
    //
    columns: 
    {
      "Subject"    : 0,
      "Sender"     : 1,
      "Date"       : 2,
      "Message Id" : 3,
      "Extra"      : 4
    },

    // The maximum column number that's displayed in the table. Other columns
    // are for filtering, sorting, and tree creation purposes.
    maxDisplayedColumn : 2,

    //
    // Define our views. These are subsets of the table rows defined in terms
    // of filter functions. Each view can have a single filter function or a
    // list of functions conjoined by either 'and' or 'or' operators.
    views: 
    {
      "All Orders": 
      {
	// All orders visible
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
      // Define data model properties
      //

      // Create the data model
      var dm = new smart.Smart();

      // Set the columns
      var key, column_names = [];
      for (key in this.columns)
      {
        if (this.columns[key] <= this.maxDisplayedColumn)
        {
          column_names[this.columns[key]] = key;
        }
      }
      dm.setColumns(column_names);

      // Create a table using the model
      this.table = new qx.ui.table.Table(dm);
      this.getRoot().add(this.table, { edge : 10 });

      // Set up column renderers
      var tcm = this.table.getTableColumnModel();

      tcm.setDataCellRenderer(this.columns["Date"],
                              new qx.ui.table.cellrenderer.Date());

      tcm.setColumnWidth(this.columns["Subject"], 600);
      tcm.setColumnWidth(this.columns["Sender"], 200);
      tcm.setColumnWidth(this.columns["Date"], 150);

/*
      // Change the date format for the "Order Date" column
      var dr = tcm.getDataCellRenderer(this.columns["Date"]);
      dr.setDateFormat(new qx.util.format.DateFormat("yyyy-MM-dd HH:mm:ss"));
*/

/*
      // Disable the focus row. We only want selection highlighting.
      this.table.getPaneScroller(0).setShowCellFocusIndicator(false);
      this.table.getDataRowRenderer().setHighlightFocusRow(false);
*/

      // Set the initial data
      dm.setData(this.testData);
    },
    
    testData :
      // Generate a static data model for a series of email messages.
      // Each row consists, first, of the displayed column data, and finally
      // the message id and then a map of additional information which may be
      // used to build a tree from the data.
    [
      [
        "[qooxdoo-devel] break on error in Firebug in func gecko()",
        "Werner Thie",
        "2010-06-09 11:53",
        1,
        {
          inReplyTo : null
        }
      ],
      [
        "Re: [qooxdoo-devel] break on error in Firebug in func gecko()",
        "thron7",
        "2010-06-09 14:28",
        2,
        {
          inReplyTo : 1
        }
      ],
      [
        "Re: [qooxdoo-devel] break on error in Firebug in func gecko()",
        "Derrell Lipman",
        "2010-06-09 14:32",
        3,
        {
          inReplyTo : 2
        }
      ],
      [
        "[qooxdoo-devel] scrolling experience",
        "Tobias Oetiker",
        "2010-06-08 07:56",
        4,
        {
          inReplyTo : null
        }
      ],
      [
        "Re: [qooxdoo-devel] scrolling experience",
        "MartinWitteman",
        "2010-06-09 12:53",
        5,
        {
          inReplyTo : 4
        }
      ],
      [
        "Re: [qooxdoo-devel] scrolling experience",
        "Tobias Oetiker",
        "2010-06-09 13:42",
        6,
        {
          inReplyTo : 5
        }
      ],
      [
        "Re: [qooxdoo-devel] scrolling experience",
        "MartinWitteman",
        "2010-06-09 14:28",
        7,
        {
          inReplyTo : 6
        }
      ],
      [
        "[qooxdoo-devel] How to patch static methods/members? (qooxdoo 1.2-pre)",
        "Peter Schneider",
        "2010-06-09 09:18",
        8,
        {
          inReplyTo : null
        }
      ],
      [
        "Re: [qooxdoo-devel] How to patch static methods/members? (qooxdoo 1.2-pre)",
        "Derrell Lipman",
        "2010-06-09 13:59",
        9,
        {
          inReplyTo : 8
        }
      ],
      [
        "Re: [qooxdoo-devel] How to patch static methods/members? (qooxdoo 1.2-pre)",
        "Peter Schneider",
        "2010-06-09 13:59",
        10,
        {
          inReplyTo : 9
        }
      ],
      [
        "Re: [qooxdoo-devel] How to patch static methods/members? (qooxdoo 1.2-pre)",
        "Derrell LIpman",
        "2010-06-09 14:04",
        11,
        {
          inReplyTo : 10
        }
      ],
      [
        "[qooxdoo-devel] mo better qooxlisp",
        "Kenneth Tilton",
        "2010-06-05 23:40",
        12,
        {
          inReplyTo : null
        }
      ],
      [
        "Re: [qooxdoo-devel][Lisp] mo better qooxlisp",
        "Ken Tilton",
        "2010-06-09 13:11",
        13,
        {
          inReplyTo : 12
        }
      ],
      [
        "Re: [qooxdoo-devel][Lisp] mo better qooxlisp",
        "Joubert Nel",
        "2010-06-09 13:24",
        14,
        {
          inReplyTo : 13
        }
      ],
      [
        "Re: [qooxdoo-devel][Lisp] mo better qooxlisp",
        "Kenneth Tilton",
        "2010-06-09 13:40",
        15,
        {
          inReplyTo : 14
        }
      ],
      [
        "[qooxdoo-devel] a jqPlot qooxdoo integration widget contrib",
        "Tobias Oetiker",
        "2010-06-08 10:59",
        16,
        {
          inReplyTo : null
        }
      ],
      [
        "Re: [qooxdoo-devel] a jqPlot qooxdoo integration widget contrib",
        "panyasan",
        "2010-06-09 07:48",
        17,
        {
          inReplyTo : 16
        }
      ],
      [
        "Re: [qooxdoo-devel] a jqPlot qooxdoo integration widget contrib",
        "Tobi Oetiker",
        "2010-06-09 13:24",
        18,
        {
          inReplyTo : 16
        }
      ],
      [
        "[qooxdoo-devel] Extending application to native window (my favorite bug)",
        "panyasan",
        "2010-06-09 07:48",
        19,
        {
          inReplyTo : null
        }
      ],
      [
        "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
        "thron7",
        "2010-06-09 11:42",
        20,
        {
          inReplyTo : 19
        }
      ],
      [
        "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
        "panyasan",
        "2010-06-09 12:16",
        21,
        {
          inReplyTo : 20
        }
      ],
      [
        "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
        "hkalyoncu",
        "2010-06-09 12:57",
        22,
        {
          inReplyTo : 21
        }
      ],
      [
        "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
        "Fritz Zaucker",
        "2010-06-09 12:58",
        23,
        {
          inReplyTo : 21
        }
      ],
      [
        "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
        "panyasan",
        "2010-06-09 13:05",
        24,
        {
          inReplyTo : 23
        }
      ],
      [
        "Re: [qooxdoo-devel] Extending application to native window (my favorite bug)",
        "thron7",
        "2010-06-09 13:18",
        25,
        {
          inReplyTo : 21
        }
      ]
    ]
  }
});
