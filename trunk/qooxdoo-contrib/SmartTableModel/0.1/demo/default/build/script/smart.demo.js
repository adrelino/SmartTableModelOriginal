(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"smart.demo.Application","qx.theme":"smart.demo.theme.Theme","qx.version":"1.0.1"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.0.1"},"smart":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"smart.demo":{"resourceUri":"resource","sourceUri":"script","version":"trunk"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":{},"en":{}};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["smart.demo:smart.demo.js"]],
  urisBefore : [],
  packageHashes : {"0":"356afb239050"},
  boot : "boot",
  bootIsInline : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
}

qx.$$loader.signalStartup = function () {
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash]);
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['356afb239050']={"resources":{"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]}};
(function(){var x="toString",w=".",v="default",u="Object",t='"',s="Array",r="()",q="String",p="Function",o=".prototype",V="function",U="Boolean",T="Error",S="RegExp",R="warn",Q="hasOwnProperty",P="string",O="toLocaleString",N='\", "',M="info",E="BROKEN_IE",F="isPrototypeOf",C="Date",D="",A="qx.Bootstrap",B="]",y="Class",z="error",G="[Class ",H="valueOf",J="Number",I="count",L="debug",K="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return G+this.classname+B;
},createNamespace:function(name,bb){var bd=name.split(w);
var parent=window;
var bc=bd[0];

for(var i=0,be=bd.length-1;i<be;i++,bc=bd[i]){if(!parent[bc]){parent=parent[bc]={};
}else{parent=parent[bc];
}}parent[bc]=bb;
return bc;
},setDisplayName:function(bw,bx,name){bw.displayName=bx+w+name+r;
},setDisplayNames:function(bJ,bK){for(var name in bJ){var bL=bJ[name];

if(bL instanceof Function){bL.displayName=bK+w+name+r;
}}},define:function(name,bn){if(!bn){var bn={statics:{}};
}var bs;
var bq=null;
qx.Bootstrap.setDisplayNames(bn.statics,name);

if(bn.members){qx.Bootstrap.setDisplayNames(bn.members,name+o);
bs=bn.construct||new Function;
var bo=bn.statics;

for(var bp in bo){bs[bp]=bo[bp];
}bq=bs.prototype;
var bt=bn.members;

for(var bp in bt){bq[bp]=bt[bp];
}}else{bs=bn.statics||{};
}var br=this.createNamespace(name,bs);
bs.name=bs.classname=name;
bs.basename=br;
bs.$$type=y;
if(!bs.hasOwnProperty(x)){bs.toString=this.genericToString;
}if(bn.defer){bn.defer(bs,bq);
}qx.Bootstrap.$$registry[name]=bn.statics;
return bs;
}};
qx.Bootstrap.define(A,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bv){return bv.__count__;
},"default":function(e){var length=0;

for(var f in e){length++;
}return length;
}})[(({}).__count__==0)?I:v],objectMergeWith:function(bE,bF,bG){if(bG===undefined){bG=true;
}
for(var bH in bF){if(bG||bE[bH]===undefined){bE[bH]=bF[bH];
}}return bE;
},__shadowedKeys:[F,Q,O,x,H],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bz){var bA=[];

for(var bD in bz){bA.push(bD);
}var bB=qx.Bootstrap.__shadowedKeys;
var bC=Object.prototype.hasOwnProperty;

for(var i=0,a=bB,l=a.length;i<l;i++){if(bC.call(bz,a[i])){bA.push(a[i]);
}}return bA;
},"default":function(bP){var bQ=[];

for(var bR in bP){bQ.push(bR);
}return bQ;
}})[typeof (Object.keys)==
V?K:
(function(){for(var bl in {toString:1}){return bl;
}})()!==x?E:v],getKeysAsString:function(bf){var bg=qx.Bootstrap.getKeys(bf);

if(bg.length==0){return D;
}return t+bg.join(N)+t;
},__classToTypeMap:{"[object String]":q,"[object Array]":s,"[object Object]":u,"[object RegExp]":S,"[object Number]":J,"[object Boolean]":U,"[object Date]":C,"[object Function]":p,"[object Error]":T},firstUp:function(bN){return bN.charAt(0).toUpperCase()+bN.substr(1);
},firstLow:function(bI){return bI.charAt(0).toLowerCase()+bI.substr(1);
},getClass:function(g){var h=Object.prototype.toString.call(g);
return (qx.Bootstrap.__classToTypeMap[h]||h.slice(8,-1));
},isString:function(bO){return (bO!==null&&(typeof bO===P||qx.Bootstrap.getClass(bO)==q||bO instanceof String||(!!bO&&!!bO.$$isString)));
},isArray:function(bu){return (bu!==null&&(bu instanceof Array||(bu&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bu.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bu)==s||(!!bu&&!!bu.$$isArray)));
},isObject:function(bV){return (bV!==undefined&&bV!==null&&qx.Bootstrap.getClass(bV)==u);
},isFunction:function(by){return qx.Bootstrap.getClass(by)==p;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(b,name){while(b){if(b.$$properties&&b.$$properties[name]){return b.$$properties[name];
}b=b.superclass;
}return null;
},hasProperty:function(bm,name){return !!qx.Bootstrap.getPropertyDefinition(bm,name);
},getEventType:function(bS,name){var bS=bS.constructor;

while(bS.superclass){if(bS.$$events&&bS.$$events[name]!==undefined){return bS.$$events[name];
}bS=bS.superclass;
}return null;
},supportsEvent:function(bM,name){return !!qx.Bootstrap.getEventType(bM,name);
},getByInterface:function(W,X){var Y,i,l;

while(W){if(W.$$implements){Y=W.$$flatImplements;

for(i=0,l=Y.length;i<l;i++){if(Y[i]===X){return W;
}}}W=W.superclass;
}return null;
},hasInterface:function(bh,bi){return !!qx.Bootstrap.getByInterface(bh,bi);
},getMixins:function(m){var n=[];

while(m){if(m.$$includes){n.push.apply(n,m.$$flatIncludes);
}m=m.superclass;
}return n;
},$$logs:[],debug:function(bj,bk){qx.Bootstrap.$$logs.push([L,arguments]);
},info:function(j,k){qx.Bootstrap.$$logs.push([M,arguments]);
},warn:function(c,d){qx.Bootstrap.$$logs.push([R,arguments]);
},error:function(bT,bU){qx.Bootstrap.$$logs.push([z,arguments]);
},trace:function(ba){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__settings:{},define:function(k,l){if(l===undefined){throw new Error('Default value of setting "'+k+'" must be defined!');
}
if(!this.__settings[k]){this.__settings[k]={};
}else if(this.__settings[k].defaultValue!==undefined){throw new Error('Setting "'+k+'" is already defined!');
}this.__settings[k].defaultValue=l;
},get:function(p){var q=this.__settings[p];

if(q===undefined){throw new Error('Setting "'+p+'" is not defined.');
}
if(q.value!==undefined){return q.value;
}return q.defaultValue;
},set:function(n,o){if((n.split(a)).length<2){throw new Error('Malformed settings key "'+n+'". Must be following the schema "namespace.key".');
}
if(!this.__settings[n]){this.__settings[n]={};
}this.__settings[n].value=o;
},__init:function(){if(window.qxsettings){for(var m in window.qxsettings){this.set(m,window.qxsettings[m]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(r){}this.__loadUrlSettings();
}},__loadUrlSettings:function(){if(this.get(h)!=true){return;
}var t=document.location.search.slice(1).split(g);

for(var i=0;i<t.length;i++){var s=t[i].split(b);

if(s.length!=3||s[0]!=c){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(j){j.define(h,false);
j.define(e,false);
j.define(d,0);
j.__init();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__init:function(){var t=d;
var x=e;
var w=window.navigator.userAgent;
var z=false;
var v=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){t=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(w)){x=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){x+=q+RegExp.$3;
}}else{v=true;
x=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){t=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(w)){x=RegExp.$1;
var y=RegExp(n).exec(x);

if(y){x=x.slice(0,y.index);
}}else{v=true;
x=m;
}}else if(window.controllers&&window.navigator.product===c){t=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(w)){x=RegExp.$1;
}else{v=true;
x=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(w)){t=k;
x=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(x<8&&/Trident\/([^\);]+)(\)|;)/.test(w)){if(RegExp.$1===g){x=h;
}}this.MSHTML=true;
}else{var u=window.qxFail;

if(u&&typeof u===o){var t=u();

if(t.NAME&&t.FULLVERSION){t=t.NAME;
this[t.toUpperCase()]=true;
x=t.FULLVERSION;
}}else{z=true;
v=true;
x=r;
t=s;
this.GECKO=true;
window.alert("Unsupported client: "+w+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=z;
this.UNKNOWN_VERSION=v;
this.NAME=t;
this.FULLVERSION=x;
this.VERSION=parseFloat(x);
}},defer:function(A){A.__init();
}});
})();
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__variants:{},__cache:{},compilerIsSet:function(){return true;
},define:function(F,G,H){{};

if(!this.__variants[F]){this.__variants[F]={};
}else{}this.__variants[F].allowedValues=G;
this.__variants[F].defaultValue=H;
},get:function(O){var P=this.__variants[O];
{};

if(P.value!==undefined){return P.value;
}return P.defaultValue;
},__init:function(){if(window.qxvariants){for(var Q in qxvariants){{};

if(!this.__variants[Q]){this.__variants[Q]={};
}this.__variants[Q].value=qxvariants[Q];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(w){}this.__loadUrlVariants(this.__variants);
}},__loadUrlVariants:function(){if(qx.core.Setting.get(m)!=true){return;
}var L=document.location.search.slice(1).split(p);

for(var i=0;i<L.length;i++){var M=L[i].split(f);

if(M.length!=3||M[0]!=c){continue;
}var N=M[1];

if(!this.__variants[N]){this.__variants[N]={};
}this.__variants[N].value=decodeURIComponent(M[2]);
}},select:function(x,y){{};

for(var z in y){if(this.isSet(x,z)){return y[z];
}}
if(y[r]!==undefined){return y[r];
}{};
},isSet:function(A,B){var C=A+n+B;

if(this.__cache[C]!==undefined){return this.__cache[C];
}var E=false;
if(B.indexOf(s)<0){E=this.get(A)===B;
}else{var D=B.split(s);

for(var i=0,l=D.length;i<l;i++){if(this.get(A)===D[i]){E=true;
break;
}}}this.__cache[C]=E;
return E;
},__isValidArray:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__isValidObject:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__arrayContains:function(J,K){for(var i=0,l=J.length;i<l;i++){if(J[i]==K){return true;
}}return false;
}},defer:function(I){I.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
I.define(k,[u,t],u);
I.define(o,[u,t],t);
I.define(j,[u,t],u);
I.__init();
}});
})();
(function(){var s="other",r="widgets",q="fonts",p="appearances",o="qx.Theme",n="]",m="[Theme ",k="colors",j="decorations",h="Theme",e="meta",g="borders",f="icons";
qx.Bootstrap.define(o,{statics:{define:function(name,P){if(!P){var P={};
}P.include=this.__normalizeArray(P.include);
P.patch=this.__normalizeArray(P.patch);
{};
var Q={$$type:h,name:name,title:P.title,toString:this.genericToString};
if(P.extend){Q.supertheme=P.extend;
}Q.basename=qx.Bootstrap.createNamespace(name,Q);
this.__convert(Q,P);
this.__initializeAliases(Q,P);
this.$$registry[name]=Q;
for(var i=0,a=P.include,l=a.length;i<l;i++){this.include(Q,a[i]);
}
for(var i=0,a=P.patch,l=a.length;i<l;i++){this.patch(Q,a[i]);
}},__normalizeArray:function(O){if(!O){return [];
}
if(qx.Bootstrap.isArray(O)){return O;
}else{return [O];
}},__initializeAliases:function(b,c){var d=c.aliases||{};

if(c.extend&&c.extend.aliases){qx.Bootstrap.objectMergeWith(d,c.extend.aliases,false);
}b.aliases=d;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return m+this.name+n;
},__extractType:function(t){for(var i=0,u=this.__inheritableKeys,l=u.length;i<l;i++){if(t[u[i]]){return u[i];
}}},__convert:function(H,I){var L=this.__extractType(I);
if(I.extend&&!L){L=I.extend.type;
}H.type=L||s;
if(!L){return;
}var N=function(){};
if(I.extend){N.prototype=new I.extend.$$clazz;
}var M=N.prototype;
var K=I[L];
for(var J in K){M[J]=K[J];
if(M[J].base){{};
M[J].base=I.extend;
}}H.$$clazz=N;
H[L]=new N;
},$$registry:{},__inheritableKeys:[k,g,j,q,f,r,p,e],__allowedKeys:null,__metaKeys:null,__validateConfig:function(){},patch:function(B,C){var E=this.__extractType(C);

if(E!==this.__extractType(B)){throw new Error("The mixins '"+B.name+"' are not compatible '"+C.name+"'!");
}var D=C[E];
var F=B.$$clazz.prototype;

for(var G in D){F[G]=D[G];
}},include:function(v,w){var y=w.type;

if(y!==v.type){throw new Error("The mixins '"+v.name+"' are not compatible '"+w.name+"'!");
}var x=w[y];
var z=v.$$clazz.prototype;

for(var A in x){if(z[A]!==undefined){continue;
}z[A]=x[A];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var a="smart.demo.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,u){if(u){if(u.extend&&!(u.extend instanceof Array)){u.extend=[u.extend];
}{};
var v=u.statics?u.statics:{};
if(u.extend){v.$$extends=u.extend;
}
if(u.properties){v.$$properties=u.properties;
}
if(u.members){v.$$members=u.members;
}
if(u.events){v.$$events=u.events;
}}else{var v={};
}v.$$type=c;
v.name=name;
v.toString=this.genericToString;
v.basename=qx.Bootstrap.createNamespace(name,v);
qx.Interface.$$registry[name]=v;
return v;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(j){if(!j){return [];
}var k=j.concat();

for(var i=0,l=j.length;i<l;i++){if(j[i].$$extends){k.push.apply(k,this.flatten(j[i].$$extends));
}}return k;
},__assertMembers:function(w,x,y,z){var D=y.$$members;

if(D){for(var C in D){if(qx.Bootstrap.isFunction(D[C])){var B=this.__isPropertyMethod(x,C);
var A=B||qx.Bootstrap.isFunction(w[C]);

if(!A){throw new Error('Implementation of method "'+C+'" is missing in class "'+x.classname+'" required by interface "'+y.name+'"');
}var E=z===true&&!B&&!qx.Bootstrap.hasInterface(x,y);

if(E){w[C]=this.__wrapInterfaceMember(y,w[C],C,D[C]);
}}else{if(typeof w[C]===undefined){if(typeof w[C]!==h){throw new Error('Implementation of member "'+C+'" is missing in class "'+x.classname+'" required by interface "'+y.name+'"');
}}}}}},__isPropertyMethod:function(F,G){var K=G.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!K){return false;
}var H=qx.Bootstrap.firstLow(K[2]);
var I=qx.Bootstrap.getPropertyDefinition(F,H);

if(!I){return false;
}var J=K[0]==b||K[0]==d;

if(J){return qx.Bootstrap.getPropertyDefinition(F,H).check==g;
}return true;
},__assertProperties:function(L,M){if(M.$$properties){for(var N in M.$$properties){if(!qx.Bootstrap.getPropertyDefinition(L,N)){throw new Error('The property "'+N+'" is not supported by Class "'+L.classname+'"!');
}}}},__assertEvents:function(O,P){if(P.$$events){for(var Q in P.$$events){if(!qx.Bootstrap.supportsEvent(O,Q)){throw new Error('The event "'+Q+'" is not supported by Class "'+O.classname+'"!');
}}}},assertObject:function(m,n){var p=m.constructor;
this.__assertMembers(m,p,n,false);
this.__assertProperties(p,n);
this.__assertEvents(p,n);
var o=n.$$extends;

if(o){for(var i=0,l=o.length;i<l;i++){this.assertObject(m,o[i]);
}}},assert:function(q,r,s){this.__assertMembers(q.prototype,q,r,s);
this.__assertProperties(q,r);
this.__assertEvents(q,r);
var t=r.$$extends;

if(t){for(var i=0,l=t.length;i<l;i++){this.assert(q,t[i],s);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__wrapInterfaceMember:function(){},__allowedKeys:null,__validateConfig:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,h){if(h){if(h.include&&!(h.include instanceof Array)){h.include=[h.include];
}{};
var k=h.statics?h.statics:{};
qx.Bootstrap.setDisplayNames(k,name);

for(var j in k){if(k[j] instanceof Function){k[j].$$mixin=k;
}}if(h.construct){k.$$constructor=h.construct;
qx.Bootstrap.setDisplayName(h.construct,name,e);
}
if(h.include){k.$$includes=h.include;
}
if(h.properties){k.$$properties=h.properties;
}
if(h.members){k.$$members=h.members;
qx.Bootstrap.setDisplayNames(h.members,name+f);
}
for(var j in k.$$members){if(k.$$members[j] instanceof Function){k.$$members[j].$$mixin=k;
}}
if(h.events){k.$$events=h.events;
}
if(h.destruct){k.$$destructor=h.destruct;
qx.Bootstrap.setDisplayName(h.destruct,name,b);
}}else{var k={};
}k.$$type=a;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
this.$$registry[name]=k;
return k;
},checkCompatibility:function(r){var u=this.flatten(r);
var v=u.length;

if(v<2){return true;
}var y={};
var x={};
var w={};
var t;

for(var i=0;i<v;i++){t=u[i];

for(var s in t.events){if(w[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+w[s]+'" in member "'+s+'"!');
}w[s]=t.name;
}
for(var s in t.properties){if(y[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+y[s]+'" in property "'+s+'"!');
}y[s]=t.name;
}
for(var s in t.members){if(x[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+x[s]+'" in member "'+s+'"!');
}x[s]=t.name;
}}return true;
},isCompatible:function(o,p){var q=qx.Bootstrap.getMixins(p);
q.push(o);
return qx.Mixin.checkCompatibility(q);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$includes){n.push.apply(n,this.flatten(m[i].$$includes));
}}return n;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__allowedKeys:null,__validateConfig:function(){}}});
})();
(function(){var dr=';',dq='computed=this.',dp='=value;',dn='this.',dm="set",dl="setThemed",dk="setRuntime",dj="init",di='if(this.',dh='delete this.',cr='!==undefined)',cq='}',cp="resetThemed",co='else if(this.',cn="string",cm='return this.',cl="reset",ck="boolean",cj="resetRuntime",ci='!==undefined){',dy="refresh",dz='=true;',dw="",dx="this.",du='old=this.',dv="();",ds='else ',dt='if(old===undefined)old=this.',dA='old=computed=this.',dB="return this.",cP="get",cO='(value);',cR=";",cQ="(a[",cT='if(old===computed)return value;',cS='if(old===undefined)old=null;',cV=' of an instance of ',cU=' is not (yet) ready!");',cN="]);",cM='!==inherit){',Y='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',ba='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bb='value !== null && value.nodeType === 9 && value.documentElement',bc='===value)return value;',bd='value !== null && value.$$type === "Mixin"',be='return init;',bf='var init=this.',bg='value !== null && value.nodeType === 1 && value.attributes',bh="Error in property ",bi='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',dN="property",dM='.validate.call(this, value);',dL='qx.core.Assert.assertInstance(value, Date, msg) || true',dK='else{',dR=" in method ",dQ='qx.core.Assert.assertInstance(value, Error, msg) || true',dP='=computed;',dO='Undefined value is not allowed!',dT='(backup);',dS='if(computed===inherit){',bH="inherit",bI='Is invalid!',bF='if(value===undefined)prop.error(this,2,"',bG='var computed, old=this.',bL='else if(computed===undefined)',bM="': ",bJ=" of class ",bK='value !== null && value.nodeType !== undefined',bD='===undefined)return;',bE='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bq="')){",bp='qx.core.Assert.assertPositiveInteger(value, msg) || true',bs='else this.',br='value=this.',bm='","',bl='if(init==qx.core.Property.$$inherit)init=null;',bo='value !== null && value.$$type === "Interface"',bn='var inherit=prop.$$inherit;',bk="', qx.event.type.Data, [computed, old]",bj="$$useinit_",bR='computed=undefined;delete this.',bS='",value);',bT='computed=value;',bU=".",bN="$$runtime_",bO='Requires exactly one argument!',bP=';}',bQ="$$user_",bV='){',bW='qx.core.Assert.assertArray(value, msg) || true',bA='if(computed===undefined||computed===inherit){',bz='qx.core.Assert.assertPositiveNumber(value, msg) || true',by=".prototype",bx="Boolean",bw=")}",bv='(computed, old, "',bu='return value;',bt='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bC='}else{',bB="if(reg.hasListener(this, '",bX='Does not allow any arguments!',bY=')a[i].',ca="()",cb="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cc='.$$properties.',cd='value !== null && value.$$type === "Theme"',ce="var reg=qx.event.Registration;",cf="())",cg='return null;',ch='qx.core.Assert.assertObject(value, msg) || true',cv='");',cu='qx.core.Assert.assertString(value, msg) || true',ct='var pa=this.getLayoutParent();if(pa)computed=pa.',cs='value !== null && value.$$type === "Class"',cz='qx.core.Assert.assertFunction(value, msg) || true',cy='!==undefined&&',cx='var computed, old;',cw='var backup=computed;',cB="on",cA="object",cI="$$init_",cJ="$$theme_",cG='if(computed===undefined)computed=null;',cH='qx.core.Assert.assertMap(value, msg) || true',cE="qx.aspects",cF='qx.core.Assert.assertNumber(value, msg) || true',cC='if((computed===undefined||computed===inherit)&&',cD="reg.fireEvent(this, '",cK='Null value is not allowed!',cL='qx.core.Assert.assertInteger(value, msg) || true',da="value",cY="shorthand",dc='qx.core.Assert.assertInstance(value, RegExp, msg) || true',db='value !== null && value.type !== undefined',de='value !== null && value.document',dd='throw new Error("Property ',dg="(!this.",df='qx.core.Assert.assertBoolean(value, msg) || true',cX='if(a[i].',cW="toggle",dG="$$inherit_",dH='var prop=qx.core.Property;',dI=" with incoming value '",dJ="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",dC='if(computed===undefined||computed==inherit)computed=null;',dD="qx.core.Property",dE="is",dF='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(dD,{statics:{__checks:{"Boolean":df,"String":cu,"Number":cF,"Integer":cL,"PositiveNumber":bz,"PositiveInteger":bp,"Error":dQ,"RegExp":dc,"Object":ch,"Array":bW,"Map":cH,"Function":cz,"Date":dL,"Node":bK,"Element":bg,"Document":bb,"Window":de,"Event":db,"Class":cs,"Mixin":bd,"Interface":bo,"Theme":cd,"Color":Y,"Decorator":bE,"Font":ba},__dispose:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bH,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cn,dispose:ck,inheritable:ck,nullable:ck,themeable:ck,refine:ck,init:null,apply:cn,event:cn,check:null,transform:cn,deferredInit:ck,validate:null},$$allowedGroupKeys:{name:cn,group:cA,mode:cn,themeable:ck},$$inheritable:{},refresh:function(ex){var parent=ex.getLayoutParent();

if(parent){var eA=ex.constructor;
var eC=this.$$store.inherit;
var eB=this.$$store.init;
var ez=this.$$method.refresh;
var eD;
var ey;
{};

while(eA){eD=eA.$$properties;

if(eD){for(var name in this.$$inheritable){if(eD[name]&&ex[ez[name]]){ey=parent[eC[name]];

if(ey===undefined){ey=parent[eB[name]];
}{};
ex[ez[name]](ey);
}}}eA=eA.superclass;
}}},attach:function(dU){var dV=dU.$$properties;

if(dV){for(var name in dV){this.attachMethods(dU,name,dV[name]);
}}dU.$$propertiesAttached=true;
},attachMethods:function(L,name,M){M.group?this.__attachGroupMethods(L,M,name):this.__attachPropertyMethods(L,M,name);
},__attachGroupMethods:function(N,O,name){var V=qx.Bootstrap.firstUp(name);
var U=N.prototype;
var W=O.themeable===true;
{};
var X=[];
var R=[];

if(W){var P=[];
var T=[];
}var S=cb;
X.push(S);

if(W){P.push(S);
}
if(O.mode==cY){var Q=dJ;
X.push(Q);

if(W){P.push(Q);
}}
for(var i=0,a=O.group,l=a.length;i<l;i++){{};
X.push(dx,this.$$method.set[a[i]],cQ,i,cN);
R.push(dx,this.$$method.reset[a[i]],dv);

if(W){{};
P.push(dx,this.$$method.setThemed[a[i]],cQ,i,cN);
T.push(dx,this.$$method.resetThemed[a[i]],dv);
}}this.$$method.set[name]=dm+V;
U[this.$$method.set[name]]=new Function(X.join(dw));
this.$$method.reset[name]=cl+V;
U[this.$$method.reset[name]]=new Function(R.join(dw));

if(W){this.$$method.setThemed[name]=dl+V;
U[this.$$method.setThemed[name]]=new Function(P.join(dw));
this.$$method.resetThemed[name]=cp+V;
U[this.$$method.resetThemed[name]]=new Function(T.join(dw));
}},__attachPropertyMethods:function(en,eo,name){var eq=qx.Bootstrap.firstUp(name);
var es=en.prototype;
{};
if(eo.dispose===undefined&&typeof eo.check===cn){eo.dispose=this.__dispose[eo.check]||qx.Bootstrap.classIsDefined(eo.check)||(qx.Interface&&qx.Interface.isDefined(eo.check));
}var er=this.$$method;
var ep=this.$$store;
ep.runtime[name]=bN+name;
ep.user[name]=bQ+name;
ep.theme[name]=cJ+name;
ep.init[name]=cI+name;
ep.inherit[name]=dG+name;
ep.useinit[name]=bj+name;
er.get[name]=cP+eq;
es[er.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,en,name,cP);
};
er.set[name]=dm+eq;
es[er.set[name]]=function(dW){return qx.core.Property.executeOptimizedSetter(this,en,name,dm,arguments);
};
er.reset[name]=cl+eq;
es[er.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,en,name,cl);
};

if(eo.inheritable||eo.apply||eo.event||eo.deferredInit){er.init[name]=dj+eq;
es[er.init[name]]=function(ew){return qx.core.Property.executeOptimizedSetter(this,en,name,dj,arguments);
};
}
if(eo.inheritable){er.refresh[name]=dy+eq;
es[er.refresh[name]]=function(ec){return qx.core.Property.executeOptimizedSetter(this,en,name,dy,arguments);
};
}er.setRuntime[name]=dk+eq;
es[er.setRuntime[name]]=function(eM){return qx.core.Property.executeOptimizedSetter(this,en,name,dk,arguments);
};
er.resetRuntime[name]=cj+eq;
es[er.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,en,name,cj);
};

if(eo.themeable){er.setThemed[name]=dl+eq;
es[er.setThemed[name]]=function(C){return qx.core.Property.executeOptimizedSetter(this,en,name,dl,arguments);
};
er.resetThemed[name]=cp+eq;
es[er.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,en,name,cp);
};
}
if(eo.check===bx){es[cW+eq]=new Function(dB+er.set[name]+dg+er.get[name]+cf);
es[dE+eq]=new Function(dB+er.get[name]+ca);
}},__errors:{0:dF,1:bO,2:dO,3:bX,4:cK,5:bI},error:function(E,F,G,H,I){var J=E.constructor.classname;
var K=bh+G+bJ+J+dR+this.$$method[H][G]+dI+I+bM;
throw new Error(K+(this.__errors[F]||"Unknown reason: "+F));
},__unwrapFunctionFromCode:function(eh,ei,name,ej,ek,el){var em=this.$$method[ej][name];
{ei[em]=new Function(da,ek.join(dw));
};
if(qx.core.Variant.isSet(cE,cB)){ei[em]=qx.core.Aspect.wrap(eh.classname+bU+em,ei[em],dN);
}qx.Bootstrap.setDisplayName(ei[em],eh.classname+by,em);
if(el===undefined){return eh[em]();
}else{return eh[em](el[0]);
}},executeOptimizedGetter:function(e,f,name,g){var j=f.$$properties[name];
var m=f.prototype;
var h=[];
var k=this.$$store;
h.push(di,k.runtime[name],cr);
h.push(cm,k.runtime[name],dr);

if(j.inheritable){h.push(co,k.inherit[name],cr);
h.push(cm,k.inherit[name],dr);
h.push(ds);
}h.push(di,k.user[name],cr);
h.push(cm,k.user[name],dr);

if(j.themeable){h.push(co,k.theme[name],cr);
h.push(cm,k.theme[name],dr);
}
if(j.deferredInit&&j.init===undefined){h.push(co,k.init[name],cr);
h.push(cm,k.init[name],dr);
}h.push(ds);

if(j.init!==undefined){if(j.inheritable){h.push(bf,k.init[name],dr);

if(j.nullable){h.push(bl);
}else if(j.init!==undefined){h.push(cm,k.init[name],dr);
}else{h.push(bt,name,cV,f.classname,cU);
}h.push(be);
}else{h.push(cm,k.init[name],dr);
}}else if(j.inheritable||j.nullable){h.push(cg);
}else{h.push(dd,name,cV,f.classname,cU);
}return this.__unwrapFunctionFromCode(e,m,name,g,h);
},executeOptimizedSetter:function(q,r,name,s,t){var y=r.$$properties[name];
var x=r.prototype;
var v=[];
var u=s===dm||s===dl||s===dk||(s===dj&&y.init===undefined);
var w=y.apply||y.event||y.inheritable;
var z=this.__getStore(s,name);
this.__emitSetterPreConditions(v,y,name,s,u);

if(u){this.__emitIncomingValueTransformation(v,r,y,name);
}
if(w){this.__emitOldNewComparison(v,u,z,s);
}
if(y.inheritable){v.push(bn);
}{};

if(!w){this.__emitStoreValue(v,name,s,u);
}else{this.__emitStoreComputedAndOldValue(v,y,name,s,u);
}
if(y.inheritable){this.__emitStoreInheritedPropertyValue(v,y,name,s);
}else if(w){this.__emitNormalizeUndefinedValues(v,y,name,s);
}
if(w){this.__emitCallCallback(v,y,name);
if(y.inheritable&&x._getChildren){this.__emitRefreshChildrenValue(v,name);
}}if(u){v.push(bu);
}return this.__unwrapFunctionFromCode(q,x,name,s,v,t);
},__getStore:function(A,name){if(A===dk||A===cj){var B=this.$$store.runtime[name];
}else if(A===dl||A===cp){B=this.$$store.theme[name];
}else if(A===dj){B=this.$$store.init[name];
}else{B=this.$$store.user[name];
}return B;
},__emitSetterPreConditions:function(dX,dY,name,ea,eb){{if(!dY.nullable||dY.check||dY.inheritable){dX.push(dH);
}if(ea===dm){dX.push(bF,name,bm,ea,bS);
}};
},__emitIncomingValueTransformation:function(b,c,d,name){if(d.transform){b.push(br,d.transform,cO);
}if(d.validate){if(typeof d.validate===cn){b.push(dn,d.validate,cO);
}else if(d.validate instanceof Function){b.push(c.classname,cc,name);
b.push(dM);
}}},__emitOldNewComparison:function(eH,eI,eJ,eK){var eL=(eK===cl||eK===cp||eK===cj);

if(eI){eH.push(di,eJ,bc);
}else if(eL){eH.push(di,eJ,bD);
}},__emitIncomingValueValidation:undefined,__emitStoreValue:function(n,name,o,p){if(o===dk){n.push(dn,this.$$store.runtime[name],dp);
}else if(o===cj){n.push(di,this.$$store.runtime[name],cr);
n.push(dh,this.$$store.runtime[name],dr);
}else if(o===dm){n.push(dn,this.$$store.user[name],dp);
}else if(o===cl){n.push(di,this.$$store.user[name],cr);
n.push(dh,this.$$store.user[name],dr);
}else if(o===dl){n.push(dn,this.$$store.theme[name],dp);
}else if(o===cp){n.push(di,this.$$store.theme[name],cr);
n.push(dh,this.$$store.theme[name],dr);
}else if(o===dj&&p){n.push(dn,this.$$store.init[name],dp);
}},__emitStoreComputedAndOldValue:function(ed,ee,name,ef,eg){if(ee.inheritable){ed.push(bG,this.$$store.inherit[name],dr);
}else{ed.push(cx);
}ed.push(di,this.$$store.runtime[name],ci);

if(ef===dk){ed.push(dq,this.$$store.runtime[name],dp);
}else if(ef===cj){ed.push(dh,this.$$store.runtime[name],dr);
ed.push(di,this.$$store.user[name],cr);
ed.push(dq,this.$$store.user[name],dr);
ed.push(co,this.$$store.theme[name],cr);
ed.push(dq,this.$$store.theme[name],dr);
ed.push(co,this.$$store.init[name],ci);
ed.push(dq,this.$$store.init[name],dr);
ed.push(dn,this.$$store.useinit[name],dz);
ed.push(cq);
}else{ed.push(dA,this.$$store.runtime[name],dr);
if(ef===dm){ed.push(dn,this.$$store.user[name],dp);
}else if(ef===cl){ed.push(dh,this.$$store.user[name],dr);
}else if(ef===dl){ed.push(dn,this.$$store.theme[name],dp);
}else if(ef===cp){ed.push(dh,this.$$store.theme[name],dr);
}else if(ef===dj&&eg){ed.push(dn,this.$$store.init[name],dp);
}}ed.push(cq);
ed.push(co,this.$$store.user[name],ci);

if(ef===dm){if(!ee.inheritable){ed.push(du,this.$$store.user[name],dr);
}ed.push(dq,this.$$store.user[name],dp);
}else if(ef===cl){if(!ee.inheritable){ed.push(du,this.$$store.user[name],dr);
}ed.push(dh,this.$$store.user[name],dr);
ed.push(di,this.$$store.runtime[name],cr);
ed.push(dq,this.$$store.runtime[name],dr);
ed.push(di,this.$$store.theme[name],cr);
ed.push(dq,this.$$store.theme[name],dr);
ed.push(co,this.$$store.init[name],ci);
ed.push(dq,this.$$store.init[name],dr);
ed.push(dn,this.$$store.useinit[name],dz);
ed.push(cq);
}else{if(ef===dk){ed.push(dq,this.$$store.runtime[name],dp);
}else if(ee.inheritable){ed.push(dq,this.$$store.user[name],dr);
}else{ed.push(dA,this.$$store.user[name],dr);
}if(ef===dl){ed.push(dn,this.$$store.theme[name],dp);
}else if(ef===cp){ed.push(dh,this.$$store.theme[name],dr);
}else if(ef===dj&&eg){ed.push(dn,this.$$store.init[name],dp);
}}ed.push(cq);
if(ee.themeable){ed.push(co,this.$$store.theme[name],ci);

if(!ee.inheritable){ed.push(du,this.$$store.theme[name],dr);
}
if(ef===dk){ed.push(dq,this.$$store.runtime[name],dp);
}else if(ef===dm){ed.push(dq,this.$$store.user[name],dp);
}else if(ef===dl){ed.push(dq,this.$$store.theme[name],dp);
}else if(ef===cp){ed.push(dh,this.$$store.theme[name],dr);
ed.push(di,this.$$store.init[name],ci);
ed.push(dq,this.$$store.init[name],dr);
ed.push(dn,this.$$store.useinit[name],dz);
ed.push(cq);
}else if(ef===dj){if(eg){ed.push(dn,this.$$store.init[name],dp);
}ed.push(dq,this.$$store.theme[name],dr);
}else if(ef===dy){ed.push(dq,this.$$store.theme[name],dr);
}ed.push(cq);
}ed.push(co,this.$$store.useinit[name],bV);

if(!ee.inheritable){ed.push(du,this.$$store.init[name],dr);
}
if(ef===dj){if(eg){ed.push(dq,this.$$store.init[name],dp);
}else{ed.push(dq,this.$$store.init[name],dr);
}}else if(ef===dm||ef===dk||ef===dl||ef===dy){ed.push(dh,this.$$store.useinit[name],dr);

if(ef===dk){ed.push(dq,this.$$store.runtime[name],dp);
}else if(ef===dm){ed.push(dq,this.$$store.user[name],dp);
}else if(ef===dl){ed.push(dq,this.$$store.theme[name],dp);
}else if(ef===dy){ed.push(dq,this.$$store.init[name],dr);
}}ed.push(cq);
if(ef===dm||ef===dk||ef===dl||ef===dj){ed.push(dK);

if(ef===dk){ed.push(dq,this.$$store.runtime[name],dp);
}else if(ef===dm){ed.push(dq,this.$$store.user[name],dp);
}else if(ef===dl){ed.push(dq,this.$$store.theme[name],dp);
}else if(ef===dj){if(eg){ed.push(dq,this.$$store.init[name],dp);
}else{ed.push(dq,this.$$store.init[name],dr);
}ed.push(dn,this.$$store.useinit[name],dz);
}ed.push(cq);
}},__emitStoreInheritedPropertyValue:function(eE,eF,name,eG){eE.push(bA);

if(eG===dy){eE.push(bT);
}else{eE.push(ct,this.$$store.inherit[name],dr);
}eE.push(cC);
eE.push(dn,this.$$store.init[name],cy);
eE.push(dn,this.$$store.init[name],cM);
eE.push(dq,this.$$store.init[name],dr);
eE.push(dn,this.$$store.useinit[name],dz);
eE.push(bC);
eE.push(dh,this.$$store.useinit[name],bP);
eE.push(cq);
eE.push(cT);
eE.push(dS);
eE.push(bR,this.$$store.inherit[name],dr);
eE.push(cq);
eE.push(bL);
eE.push(dh,this.$$store.inherit[name],dr);
eE.push(bs,this.$$store.inherit[name],dP);
eE.push(cw);
if(eF.init!==undefined&&eG!==dj){eE.push(dt,this.$$store.init[name],cR);
}else{eE.push(cS);
}eE.push(dC);
},__emitNormalizeUndefinedValues:function(et,eu,name,ev){if(ev!==dm&&ev!==dk&&ev!==dl){et.push(cG);
}et.push(cT);
if(eu.init!==undefined&&ev!==dj){et.push(dt,this.$$store.init[name],cR);
}else{et.push(cS);
}},__emitCallCallback:function(eN,eO,name){if(eO.apply){eN.push(dn,eO.apply,bv,name,cv);
}if(eO.event){eN.push(ce,bB,eO.event,bq,cD,eO.event,bk,bw);
}},__emitRefreshChildrenValue:function(D,name){D.push(bi);
D.push(cX,this.$$method.refresh[name],bY,this.$$method.refresh[name],dT);
D.push(cq);
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__registry:[],wrap:function(h,j,k){var p=[];
var l=[];
var o=this.__registry;
var n;

for(var i=0;i<o.length;i++){n=o[i];

if((n.type==null||k==n.type||n.type==b)&&(n.name==null||h.match(n.name))){n.pos==-1?p.push(n.fcn):l.push(n.fcn);
}}
if(p.length===0&&l.length===0){return j;
}var m=function(){for(var i=0;i<p.length;i++){p[i].call(this,h,j,k,arguments);
}var q=j.apply(this,arguments);

for(var i=0;i<l.length;i++){l[i].call(this,h,j,k,arguments,q);
}return q;
};

if(k!==a){m.self=j.self;
m.base=j.base;
}j.wrapper=m;
m.original=j;
return m;
},addAdvice:function(e,f,g,name){this.__registry.push({fcn:e,pos:f===c?-1:1,type:g,name:name});
}}});
})();
(function(){var bu="qx.aspects",bt="on",bs=".",br="static",bq="constructor",bp="[Class ",bo="]",bn="toString",bm="member",bl="$$init_",bf=".prototype",bk="destructor",bi="extend",be="destruct",bd="Class",bh="off",bg="qx.Class",bj="singleton",bc="qx.event.type.Data";
qx.Bootstrap.define(bg,{statics:{define:function(name,e){if(!e){var e={};
}if(e.include&&!(e.include instanceof Array)){e.include=[e.include];
}if(e.implement&&!(e.implement instanceof Array)){e.implement=[e.implement];
}if(!e.hasOwnProperty(bi)&&!e.type){e.type=br;
}{};
var g=this.__createClass(name,e.type,e.extend,e.statics,e.construct,e.destruct);
if(e.extend){if(e.properties){this.__addProperties(g,e.properties,true);
}if(e.members){this.__addMembers(g,e.members,true,true,false);
}if(e.events){this.__addEvents(g,e.events,true);
}if(e.include){for(var i=0,l=e.include.length;i<l;i++){this.__addMixin(g,e.include[i],false);
}}}if(e.settings){for(var f in e.settings){qx.core.Setting.define(f,e.settings[f]);
}}if(e.variants){for(var f in e.variants){qx.core.Variant.define(f,e.variants[f].allowedValues,e.variants[f].defaultValue);
}}if(e.implement){for(var i=0,l=e.implement.length;i<l;i++){this.__addInterface(g,e.implement[i]);
}}{};
if(e.defer){e.defer.self=g;
e.defer(g,g.prototype,{add:function(name,v){var w={};
w[name]=v;
qx.Class.__addProperties(g,w,true);
}});
}return g;
},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(o,p){{};
qx.Class.__addMixin(o,p,false);
},patch:function(bV,bW){{};
qx.Class.__addMixin(bV,bW,true);
},isSubClassOf:function(bz,bA){if(!bz){return false;
}
if(bz==bA){return true;
}
if(bz.prototype instanceof bA){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(h){var j=[];

while(h){if(h.$$properties){j.push.apply(j,qx.Bootstrap.getKeys(h.$$properties));
}h=h.superclass;
}return j;
},getByProperty:function(bB,name){while(bB){if(bB.$$properties&&bB.$$properties[name]){return bB;
}bB=bB.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(N,O){return N.$$includes&&N.$$includes.indexOf(O)!==-1;
},getByMixin:function(bw,bx){var by,i,l;

while(bw){if(bw.$$includes){by=bw.$$flatIncludes;

for(i=0,l=by.length;i<l;i++){if(by[i]===bx){return bw;
}}}bw=bw.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(b,c){return !!this.getByMixin(b,c);
},hasOwnInterface:function(bT,bU){return bT.$$implements&&bT.$$implements.indexOf(bU)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(z){var A=[];

while(z){if(z.$$implements){A.push.apply(A,z.$$flatImplements);
}z=z.superclass;
}return A;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(k,m){var n=k.constructor;

if(this.hasInterface(n,m)){return true;
}
try{qx.Interface.assertObject(k,m);
return true;
}catch(B){}
try{qx.Interface.assert(n,m,false);
return true;
}catch(bv){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bp+this.classname+bo;
},$$registry:qx.Bootstrap.$$registry,__allowedKeys:null,__staticAllowedKeys:null,__validateConfig:function(){},__validateAbstractInterfaces:function(){},__createClass:function(name,P,Q,R,S,T){var Y;

if(!Q&&qx.core.Variant.isSet(bu,bh)){Y=R||{};
qx.Bootstrap.setDisplayNames(Y,name);
}else{Y={};

if(Q){if(!S){S=this.__createDefaultConstructor();
}Y=this.__wrapConstructor(S,name,P);
qx.Bootstrap.setDisplayName(S,name,bq);
}if(R){qx.Bootstrap.setDisplayNames(R,name);
var ba;

for(var i=0,a=qx.Bootstrap.getKeys(R),l=a.length;i<l;i++){ba=a[i];
var V=R[ba];

if(qx.core.Variant.isSet(bu,bt)){if(V instanceof Function){V=qx.core.Aspect.wrap(name+bs+ba,V,br);
}Y[ba]=V;
}else{Y[ba]=V;
}}}}var X=qx.Bootstrap.createNamespace(name,Y,false);
Y.name=Y.classname=name;
Y.basename=X;
Y.$$type=bd;

if(P){Y.$$classtype=P;
}if(!Y.hasOwnProperty(bn)){Y.toString=this.genericToString;
}
if(Q){var bb=Q.prototype;
var U=this.__createEmptyFunction();
U.prototype=bb;
var W=new U;
Y.prototype=W;
W.name=W.classname=name;
W.basename=X;
S.base=Y.superclass=Q;
S.self=Y.constructor=W.constructor=Y;
if(T){if(qx.core.Variant.isSet(bu,bt)){T=qx.core.Aspect.wrap(name,T,bk);
}Y.$$destructor=T;
qx.Bootstrap.setDisplayName(T,name,be);
}}this.$$registry[name]=Y;
return Y;
},__addEvents:function(bH,bI,bJ){var bK,bK;
{};

if(bH.$$events){for(var bK in bI){bH.$$events[bK]=bI[bK];
}}else{bH.$$events=bI;
}},__addProperties:function(q,r,s){var u;

if(s===undefined){s=false;
}var t=!!q.$$propertiesAttached;

for(var name in r){u=r[name];
{};
u.name=name;
if(!u.refine){if(q.$$properties===undefined){q.$$properties={};
}q.$$properties[name]=u;
}if(u.init!==undefined){q.prototype[bl+name]=u.init;
}if(u.event!==undefined){var event={};
event[u.event]=bc;
this.__addEvents(q,event,s);
}if(u.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(t){qx.core.Property.attachMethods(q,name,u);
}}},__validateProperty:null,__addMembers:function(C,D,E,F,G){var H=C.prototype;
var J,I;
qx.Bootstrap.setDisplayNames(D,C.classname+bf);

for(var i=0,a=qx.Bootstrap.getKeys(D),l=a.length;i<l;i++){J=a[i];
I=D[J];
{};
if(F!==false&&I instanceof Function&&I.$$type==null){if(G==true){I=this.__mixinMemberWrapper(I,H[J]);
}else{if(H[J]){I.base=H[J];
}I.self=C;
}
if(qx.core.Variant.isSet(bu,bt)){I=qx.core.Aspect.wrap(C.classname+bs+J,I,bm);
}}H[J]=I;
}},__mixinMemberWrapper:function(x,y){if(y){return function(){var bM=x.base;
x.base=y;
var bL=x.apply(this,arguments);
x.base=bM;
return bL;
};
}else{return x;
}},__addInterface:function(K,L){{};
var M=qx.Interface.flatten([L]);

if(K.$$implements){K.$$implements.push(L);
K.$$flatImplements.push.apply(K.$$flatImplements,M);
}else{K.$$implements=[L];
K.$$flatImplements=M;
}},__addMixin:function(bC,bD,bE){{};

if(this.hasMixin(bC,bD)){return;
}var bG=qx.Mixin.flatten([bD]);
var bF;

for(var i=0,l=bG.length;i<l;i++){bF=bG[i];
if(bF.$$events){this.__addEvents(bC,bF.$$events,bE);
}if(bF.$$properties){this.__addProperties(bC,bF.$$properties,bE);
}if(bF.$$members){this.__addMembers(bC,bF.$$members,bE,bE,bE);
}}if(bC.$$includes){bC.$$includes.push(bD);
bC.$$flatIncludes.push.apply(bC.$$flatIncludes,bG);
}else{bC.$$includes=[bD];
bC.$$flatIncludes=bG;
}},__createDefaultConstructor:function(){function d(){arguments.callee.base.apply(this,arguments);
}return d;
},__createEmptyFunction:function(){return function(){};
},__wrapConstructor:function(bX,name,bY){var cb=function(){var bP=arguments.callee.constructor;
{};
if(!bP.$$propertiesAttached){qx.core.Property.attach(bP);
}var bO=bP.$$original.apply(this,arguments);
if(bP.$$includes){var bN=bP.$$flatIncludes;

for(var i=0,l=bN.length;i<l;i++){if(bN[i].$$constructor){bN[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return bO;
};

if(qx.core.Variant.isSet(bu,bt)){var ca=qx.core.Aspect.wrap(name,cb,bq);
cb.$$original=bX;
cb.constructor=ca;
cb=ca;
}if(bY===bj){cb.getInstance=this.getInstance;
}cb.$$original=bX;
bX.wrapper=cb;
return cb;
}},defer:function(){if(qx.core.Variant.isSet(bu,bt)){for(var bQ in qx.Bootstrap.$$registry){var bR=qx.Bootstrap.$$registry[bQ];

for(var bS in bR){if(bR[bS] instanceof Function){bR[bS]=qx.core.Aspect.wrap(bQ+bs+bS,bR[bS],br);
}}}}}});
})();
(function(){var d="$$hash",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__registry:{},__nextHash:0,__freeHashes:[],register:function(r){var u=this.__registry;

if(!u){return;
}var t=r.$$hash;

if(t==null){var s=this.__freeHashes;

if(s.length>0){t=s.pop();
}else{t=(this.__nextHash++).toString(36);
}r.$$hash=t;
}{};
u[t]=r;
},unregister:function(k){var m=k.$$hash;

if(m==null){return;
}var n=this.__registry;

if(n&&n[m]){delete n[m];
this.__freeHashes.push(m);
}try{delete k.$$hash;
}catch(z){if(k.removeAttribute){k.removeAttribute(d);
}}},toHashCode:function(v){{};
var x=v.$$hash;

if(x!=null){return x;
}var w=this.__freeHashes;

if(w.length>0){x=w.pop();
}else{x=(this.__nextHash++).toString(36);
}return v.$$hash=x;
},clearHashCode:function(o){{};
var p=o.$$hash;

if(p!=null){this.__freeHashes.push(p);
try{delete o.$$hash;
}catch(y){if(o.removeAttribute){o.removeAttribute(d);
}}}},fromHashCode:function(j){return this.__registry[j]||null;
},shutdown:function(){this.inShutDown=true;
var f=this.__registry;
var h=[];

for(var g in f){h.push(g);
}h.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var e,i=0,l=h.length;

while(true){try{for(;i<l;i++){g=h[i];
e=f[g];

if(e&&e.dispose){e.dispose();
}}}catch(q){qx.Bootstrap.error(this,"Could not dispose object "+e.toString()+": "+q);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__registry;
},getRegistry:function(){return this.__registry;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var j="qx.client",i="on",h="function",g="mousedown",f="qx.bom.Event",d="return;",c="mouseover",b="HTMLEvents";
qx.Class.define(f,{statics:{addNativeListener:qx.core.Variant.select(j,{"mshtml":function(x,y,z){x.attachEvent(i+y,z);
},"default":function(A,B,C){A.addEventListener(B,C,false);
}}),removeNativeListener:qx.core.Variant.select(j,{"mshtml":function(u,v,w){try{u.detachEvent(i+v,w);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(m,n,o){m.removeEventListener(n,o,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(j,{"mshtml":function(e){if(e.type===c){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(j,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==g&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(t){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(a){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(D,E){if(document.createEventObject){var F=document.createEventObject();
return D.fireEvent(i+E,F);
}else{var F=document.createEvent(b);
F.initEvent(E,true,true);
return !D.dispatchEvent(F);
}},supportsEvent:qx.core.Variant.select(j,{"webkit":function(k,l){return k.hasOwnProperty(i+l);
},"default":function(p,q){var r=i+q;
var s=(r in p);

if(!s){s=typeof p[r]==h;

if(!s&&p.setAttribute){p.setAttribute(r,d);
s=typeof p[r]==h;
p.removeAttribute(r);
}}return s;
}})}});
})();
(function(){var D="|bubble",C="|capture",B="|",A="_",z="unload",y="__dispatchers",x="UNKNOWN_",w="DOM_",v="c",u="__handlers",r="WIN_",t="capture",s="qx.event.Manager",q="QX_";
qx.Class.define(s,{extend:Object,construct:function(bJ,bK){this.__window=bJ;
this.__windowId=qx.core.ObjectRegistry.toHashCode(bJ);
this.__registration=bK;
if(bJ.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bJ,z,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bJ,z,arguments.callee);
self.dispose();
}));
}this.__listeners={};
this.__handlers={};
this.__dispatchers={};
this.__handlerCache={};
},statics:{__lastUnique:0,getNextUniqueId:function(){return (this.__lastUnique++).toString(36);
}},members:{__registration:null,__listeners:null,__dispatchers:null,__disposeWrapper:null,__handlers:null,__handlerCache:null,__window:null,__windowId:null,getWindow:function(){return this.__window;
},getWindowId:function(){return this.__windowId;
},getHandler:function(U){var V=this.__handlers[U.classname];

if(V){return V;
}return this.__handlers[U.classname]=new U(this);
},getDispatcher:function(ct){var cu=this.__dispatchers[ct.classname];

if(cu){return cu;
}return this.__dispatchers[ct.classname]=new ct(this,this.__registration);
},getListeners:function(a,b,c){var d=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var f=this.__listeners[d];

if(!f){return null;
}var g=b+(c?C:D);
var e=f[g];
return e?e.concat():null;
},serializeListeners:function(bk){var br=bk.$$hash||qx.core.ObjectRegistry.toHashCode(bk);
var bt=this.__listeners[br];
var bp=[];

if(bt){var bn,bs,bl,bo,bq;

for(var bm in bt){bn=bm.indexOf(B);
bs=bm.substring(0,bn);
bl=bm.charAt(bn+1)==v;
bo=bt[bm];

for(var i=0,l=bo.length;i<l;i++){bq=bo[i];
bp.push({self:bq.context,handler:bq.handler,type:bs,capture:bl});
}}}return bp;
},toggleAttachedEvents:function(E,F){var K=E.$$hash||qx.core.ObjectRegistry.toHashCode(E);
var M=this.__listeners[K];

if(M){var H,L,G,I;

for(var J in M){H=J.indexOf(B);
L=J.substring(0,H);
G=J.charCodeAt(H+1)===99;
I=M[J];

if(F){this.__registerAtHandler(E,L,G);
}else{this.__unregisterAtHandler(E,L,G);
}}}},hasListener:function(bC,bD,bE){{};
var bF=bC.$$hash||qx.core.ObjectRegistry.toHashCode(bC);
var bH=this.__listeners[bF];

if(!bH){return false;
}var bI=bD+(bE?C:D);
var bG=bH[bI];
return bG&&bG.length>0;
},importListeners:function(cv,cw){{};
var cC=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);
var cD=this.__listeners[cC]={};
var cz=qx.event.Manager;

for(var cx in cw){var cA=cw[cx];
var cB=cA.type+(cA.capture?C:D);
var cy=cD[cB];

if(!cy){cy=cD[cB]=[];
this.__registerAtHandler(cv,cA.type,cA.capture);
}cy.push({handler:cA.listener,context:cA.self,unique:cA.unique||(cz.__lastUnique++).toString(36)});
}},addListener:function(bX,bY,ca,self,cb){var cf;
{};
var cg=bX.$$hash||qx.core.ObjectRegistry.toHashCode(bX);
var ci=this.__listeners[cg];

if(!ci){ci=this.__listeners[cg]={};
}var ce=bY+(cb?C:D);
var cd=ci[ce];

if(!cd){cd=ci[ce]=[];
}if(cd.length===0){this.__registerAtHandler(bX,bY,cb);
}var ch=(qx.event.Manager.__lastUnique++).toString(36);
var cc={handler:ca,context:self,unique:ch};
cd.push(cc);
return ce+B+ch;
},findHandler:function(W,X){var bi=false,bb=false,bj=false;
var bh;

if(W.nodeType===1){bi=true;
bh=w+W.tagName.toLowerCase()+A+X;
}else if(W==this.__window){bb=true;
bh=r+X;
}else if(W.classname){bj=true;
bh=q+W.classname+A+X;
}else{bh=x+W+A+X;
}var bd=this.__handlerCache;

if(bd[bh]){return bd[bh];
}var bg=this.__registration.getHandlers();
var bc=qx.event.IEventHandler;
var be,bf,ba,Y;

for(var i=0,l=bg.length;i<l;i++){be=bg[i];
ba=be.SUPPORTED_TYPES;

if(ba&&!ba[X]){continue;
}Y=be.TARGET_CHECK;

if(Y){if(!bi&&Y===bc.TARGET_DOMNODE){continue;
}else if(!bb&&Y===bc.TARGET_WINDOW){continue;
}else if(!bj&&Y===bc.TARGET_OBJECT){continue;
}}bf=this.getHandler(bg[i]);

if(be.IGNORE_CAN_HANDLE||bf.canHandleEvent(W,X)){bd[bh]=bf;
return bf;
}}return null;
},__registerAtHandler:function(bu,bv,bw){var bx=this.findHandler(bu,bv);

if(bx){bx.registerEvent(bu,bv,bw);
return;
}{};
},removeListener:function(cj,ck,cl,self,cm){var cq;
{};
var cr=cj.$$hash||qx.core.ObjectRegistry.toHashCode(cj);
var cs=this.__listeners[cr];

if(!cs){return false;
}var cn=ck+(cm?C:D);
var co=cs[cn];

if(!co){return false;
}var cp;

for(var i=0,l=co.length;i<l;i++){cp=co[i];

if(cp.handler===cl&&cp.context===self){qx.lang.Array.removeAt(co,i);

if(co.length==0){this.__unregisterAtHandler(cj,ck,cm);
}return true;
}}return false;
},removeListenerById:function(bL,bM){var bS;
{};
var bQ=bM.split(B);
var bV=bQ[0];
var bN=bQ[1].charCodeAt(0)==99;
var bU=bQ[2];
var bT=bL.$$hash||qx.core.ObjectRegistry.toHashCode(bL);
var bW=this.__listeners[bT];

if(!bW){return false;
}var bR=bV+(bN?C:D);
var bP=bW[bR];

if(!bP){return false;
}var bO;

for(var i=0,l=bP.length;i<l;i++){bO=bP[i];

if(bO.unique===bU){qx.lang.Array.removeAt(bP,i);

if(bP.length==0){this.__unregisterAtHandler(bL,bV,bN);
}return true;
}}return false;
},removeAllListeners:function(h){var n=h.$$hash||qx.core.ObjectRegistry.toHashCode(h);
var p=this.__listeners[n];

if(!p){return false;
}var k,o,j;

for(var m in p){if(p[m].length>0){k=m.split(B);
o=k[0];
j=k[1]===t;
this.__unregisterAtHandler(h,o,j);
}}delete this.__listeners[n];
return true;
},__unregisterAtHandler:function(by,bz,bA){var bB=this.findHandler(by,bz);

if(bB){bB.unregisterEvent(by,bz,bA);
return;
}{};
},dispatchEvent:function(N,event){var S;
{};
var T=event.getType();

if(!event.getBubbles()&&!this.hasListener(N,T)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(N);
}var R=this.__registration.getDispatchers();
var Q;
var P=false;

for(var i=0,l=R.length;i<l;i++){Q=this.getDispatcher(R[i]);
if(Q.canDispatchEvent(N,event,T)){Q.dispatchEvent(N,event,T);
P=true;
break;
}}
if(!P){qx.log.Logger.error(this,"No dispatcher can handle event of type "+T+" on "+N);
return true;
}var O=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !O;
},dispose:function(){this.__registration.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,u);
qx.util.DisposeUtil.disposeMap(this,y);
this.__listeners=this.__window=this.__disposeWrapper=null;
this.__registration=this.__handlerCache=null;
}}});
})();
(function(){var d="qx.dom.Node",c="qx.client",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(l){return l.nodeType===
this.DOCUMENT?l:
l.ownerDocument||l.document;
},getWindow:qx.core.Variant.select(c,{"mshtml":function(j){if(j.nodeType==null){return j;
}if(j.nodeType!==this.DOCUMENT){j=j.ownerDocument;
}return j.parentWindow;
},"default":function(s){if(s.nodeType==null){return s;
}if(s.nodeType!==this.DOCUMENT){s=s.ownerDocument;
}return s.defaultView;
}}),getDocumentElement:function(k){return this.getDocument(k).documentElement;
},getBodyElement:function(q){return this.getDocument(q).body;
},isNode:function(r){return !!(r&&r.nodeType!=null);
},isElement:function(n){return !!(n&&n.nodeType===this.ELEMENT);
},isDocument:function(f){return !!(f&&f.nodeType===this.DOCUMENT);
},isText:function(m){return !!(m&&m.nodeType===this.TEXT);
},isWindow:function(e){return !!(e&&e.history&&e.location&&e.document);
},isNodeName:function(o,p){if(!p||!o||!o.nodeName){return false;
}return p.toLowerCase()==qx.dom.Node.getName(o);
},getName:function(t){if(!t||!t.nodeName){return null;
}return t.nodeName.toLowerCase();
},getText:function(g){if(!g||!g.nodeType){return null;
}
switch(g.nodeType){case 1:var i,a=[],h=g.childNodes,length=h.length;

for(i=0;i<length;i++){a[i]=this.getText(h[i]);
}return a.join(b);
case 2:return g.nodeValue;
break;
case 3:return g.nodeValue;
break;
}return null;
}}});
})();
(function(){var bk="mshtml",bj="qx.client",bi="[object Array]",bh="qx.lang.Array",bg="qx",bf="number",be="string";
qx.Class.define(bh,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(c,d,e){if(c.constructor===d){return c;
}
if(qx.Class.hasInterface(c,qx.data.IListData)){var c=c.toArray();
}var f=new d;
if(qx.core.Variant.isSet(bj,bk)){if(c.item){for(var i=e||0,l=c.length;i<l;i++){f.push(c[i]);
}return f;
}}if(Object.prototype.toString.call(c)===bi&&e==null){f.push.apply(f,c);
}else{f.push.apply(f,Array.prototype.slice.call(c,e||0));
}return f;
},fromArguments:function(N,O){return Array.prototype.slice.call(N,O||0);
},fromCollection:function(C){if(qx.core.Variant.isSet(bj,bk)){if(C.item){var D=[];

for(var i=0,l=C.length;i<l;i++){D[i]=C[i];
}return D;
}}return Array.prototype.slice.call(C,0);
},fromShortHand:function(bo){var bq=bo.length;
var bp=qx.lang.Array.clone(bo);
switch(bq){case 1:bp[1]=bp[2]=bp[3]=bp[0];
break;
case 2:bp[2]=bp[0];
case 3:bp[3]=bp[1];
}return bp;
},clone:function(g){return g.concat();
},insertAt:function(w,x,i){w.splice(i,0,x);
return w;
},insertBefore:function(bl,bm,bn){var i=bl.indexOf(bn);

if(i==-1){bl.push(bm);
}else{bl.splice(i,0,bm);
}return bl;
},insertAfter:function(K,L,M){var i=K.indexOf(M);

if(i==-1||i==(K.length-1)){K.push(L);
}else{K.splice(i+1,0,L);
}return K;
},removeAt:function(b,i){return b.splice(i,1)[0];
},removeAll:function(y){y.length=0;
return this;
},append:function(u,v){{};
Array.prototype.push.apply(u,v);
return u;
},exclude:function(G,H){{};

for(var i=0,J=H.length,I;i<J;i++){I=G.indexOf(H[i]);

if(I!=-1){G.splice(I,1);
}}return G;
},remove:function(k,m){var i=k.indexOf(m);

if(i!=-1){k.splice(i,1);
return m;
}},contains:function(n,o){return n.indexOf(o)!==-1;
},equals:function(p,q){var length=p.length;

if(length!==q.length){return false;
}
for(var i=0;i<length;i++){if(p[i]!==q[i]){return false;
}}return true;
},sum:function(E){var F=0;

for(var i=0,l=E.length;i<l;i++){F+=E[i];
}return F;
},max:function(z){{};
var i,B=z.length,A=z[0];

for(i=1;i<B;i++){if(z[i]>A){A=z[i];
}}return A===undefined?null:A;
},min:function(r){{};
var i,t=r.length,s=r[0];

for(i=1;i<t;i++){if(r[i]<s){s=r[i];
}}return s===undefined?null:s;
},unique:function(P){var ba=[],R={},U={},W={};
var V,Q=0;
var bb=bg+qx.lang.Date.now();
var S=false,Y=false,bc=false;
for(var i=0,X=P.length;i<X;i++){V=P[i];
if(V===null){if(!S){S=true;
ba.push(V);
}}else if(V===undefined){}else if(V===false){if(!Y){Y=true;
ba.push(V);
}}else if(V===true){if(!bc){bc=true;
ba.push(V);
}}else if(typeof V===be){if(!R[V]){R[V]=1;
ba.push(V);
}}else if(typeof V===bf){if(!U[V]){U[V]=1;
ba.push(V);
}}else{T=V[bb];

if(T==null){T=V[bb]=Q++;
}
if(!W[T]){W[T]=V;
ba.push(V);
}}}for(var T in W){try{delete W[T][bb];
}catch(bd){try{W[T][bb]=null;
}catch(a){throw new Error("Cannot clean-up map entry doneObjects["+T+"]["+bb+"]");
}}}return ba;
}}});
})();
(function(){var D="()",C=".",B=".prototype.",A='anonymous()',z="qx.lang.Function",y=".constructor()";
qx.Class.define(z,{statics:{getCaller:function(x){return x.caller?x.caller.callee:x.callee.caller;
},getName:function(q){if(q.displayName){return q.displayName;
}
if(q.$$original||q.wrapper||q.classname){return q.classname+y;
}
if(q.$$mixin){for(var s in q.$$mixin.$$members){if(q.$$mixin.$$members[s]==q){return q.$$mixin.name+B+s+D;
}}for(var s in q.$$mixin){if(q.$$mixin[s]==q){return q.$$mixin.name+C+s+D;
}}}
if(q.self){var t=q.self.constructor;

if(t){for(var s in t.prototype){if(t.prototype[s]==q){return t.classname+B+s+D;
}}for(var s in t){if(t[s]==q){return t.classname+C+s+D;
}}}}var r=q.toString().match(/function\s*(\w*)\s*\(.*/);

if(r&&r.length>=1&&r[1]){return r[1]+D;
}return A;
},globalEval:function(u){if(window.execScript){return window.execScript(u);
}else{return eval.call(window,u);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(o,p){{};
if(!p){return o;
}if(!(p.self||p.args||p.delay!=null||p.periodical!=null||p.attempt)){return o;
}return function(event){{};
var k=qx.lang.Array.fromArguments(arguments);
if(p.args){k=p.args.concat(k);
}
if(p.delay||p.periodical){var j=qx.event.GlobalError.observeMethod(function(){return o.apply(p.self||this,k);
});

if(p.delay){return window.setTimeout(j,p.delay);
}
if(p.periodical){return window.setInterval(j,p.periodical);
}}else if(p.attempt){var l=false;

try{l=o.apply(p.self||this,k);
}catch(H){}return l;
}else{return o.apply(p.self||this,k);
}};
},bind:function(v,self,w){return this.create(v,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(e,f){return this.create(e,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(g,self,h){if(arguments.length<3){return function(event){return g.call(self||this,event||window.event);
};
}else{var i=qx.lang.Array.fromArguments(arguments,2);
return function(event){var d=[event||window.event];
d.push.apply(d,i);
g.apply(self||this,d);
};
}},attempt:function(m,self,n){return this.create(m,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(E,F,self,G){return this.create(E,{delay:F,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(a,b,self,c){return this.create(a,{periodical:b,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__managers:{},getManager:function(p){if(p==null){{};
p=window;
}else if(p.nodeType){p=qx.dom.Node.getWindow(p);
}else if(!qx.dom.Node.isWindow(p)){p=window;
}var r=p.$$hash||qx.core.ObjectRegistry.toHashCode(p);
var q=this.__managers[r];

if(!q){q=new qx.event.Manager(p,this);
this.__managers[r]=q;
}return q;
},removeManager:function(O){var P=O.getWindowId();
delete this.__managers[P];
},addListener:function(F,G,H,self,I){return this.getManager(F).addListener(F,G,H,self,I);
},removeListener:function(K,L,M,self,N){return this.getManager(K).removeListener(K,L,M,self,N);
},removeListenerById:function(k,l){return this.getManager(k).removeListenerById(k,l);
},removeAllListeners:function(j){return this.getManager(j).removeAllListeners(j);
},hasListener:function(m,n,o){return this.getManager(m).hasListener(m,n,o);
},serializeListeners:function(s){return this.getManager(s).serializeListeners(s);
},createEvent:function(z,A,B){{};
if(A==null){A=qx.event.type.Event;
}var C=qx.event.Pool.getInstance().getObject(A);

if(!C){return;
}B?C.init.apply(C,B):C.init();
if(z){C.setType(z);
}return C;
},dispatchEvent:function(J,event){return this.getManager(J).dispatchEvent(J,event);
},fireEvent:function(t,u,v,w){var x;
{};
var y=this.createEvent(u,v||null,w);
return this.getManager(t).dispatchEvent(t,y);
},fireNonBubblingEvent:function(d,e,f,g){{};
var h=this.getManager(d);

if(!h.hasListener(d,e,false)){return true;
}var i=this.createEvent(e,f||null,g);
return h.dispatchEvent(d,i);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__handlers:[],addHandler:function(Q){{};
this.__handlers.push(Q);
this.__handlers.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__handlers;
},__dispatchers:[],addDispatcher:function(D,E){{};
this.__dispatchers.push(D);
this.__dispatchers.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__dispatchers;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.__history=[];
this.setMaxMessages(b||50);
},members:{__nextIndexToStoreTo:0,__history:null,__maxMessages:50,setMaxMessages:function(i){this.__maxMessages=i;
this.clearHistory();
},getMaxMessages:function(){return this.__maxMessages;
},process:function(g){var h=this.getMaxMessages();

if(this.__history.length<h){this.__history.push(g);
}else{this.__history[this.__nextIndexToStoreTo++]=g;

if(this.__nextIndexToStoreTo>=h){this.__nextIndexToStoreTo=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(c){if(c>this.__history.length){c=this.__history.length;
}
if(this.__history.length==this.getMaxMessages()){var e=this.__nextIndexToStoreTo-1;
}else{e=this.__history.length-1;
}var d=e-c+1;

if(d<0){d+=this.__history.length;
}var f;

if(d<=e){f=this.__history.slice(d,e+1);
}else{f=this.__history.slice(d,this.__history.length).concat(this.__history.slice(0,e+1));
}return f;
},clearHistory:function(){this.__history=[];
this.__nextIndexToStoreTo=0;
}}});
})();
(function(){var p="node",o="error",n="...(+",m="array",k=")",j="info",h="instance",g="string",f="null",e="class",K="number",J="stringify",I="]",H="unknown",G="function",F="boolean",E="debug",D="map",C="undefined",B="qx.log.Logger",w=")}",x="#",u="warn",v="document",s="{...(",t="[",q="text[",r="[...(",y="\n",z=")]",A="object";
qx.Class.define(B,{statics:{__level:E,setLevel:function(L){this.__level=L;
},getLevel:function(){return this.__level;
},setTreshold:function(bK){this.__buffer.setMaxMessages(bK);
},getTreshold:function(){return this.__buffer.getMaxMessages();
},__appender:{},__id:0,register:function(X){if(X.$$id){return;
}var Y=this.__id++;
this.__appender[Y]=X;
X.$$id=Y;
var ba=this.__buffer.getAllLogEvents();

for(var i=0,l=ba.length;i<l;i++){X.process(ba[i]);
}},unregister:function(bb){var bc=bb.$$id;

if(bc==null){return;
}delete this.__appender[bc];
delete bb.$$id;
},debug:function(bC,bD){qx.log.Logger.__log(E,arguments);
},info:function(c,d){qx.log.Logger.__log(j,arguments);
},warn:function(M,N){qx.log.Logger.__log(u,arguments);
},error:function(bE,bF){qx.log.Logger.__log(o,arguments);
},trace:function(bG){qx.log.Logger.__log(j,[bG,qx.dev.StackTrace.getStackTrace().join(y)]);
},deprecatedMethodWarning:function(bm,bn){var bo;
{};
},deprecatedClassWarning:function(bj,bk){var bl;
{};
},deprecatedEventWarning:function(bz,event,bA){var bB;
{};
},deprecatedMixinWarning:function(bH,bI){var bJ;
{};
},deprecatedConstantWarning:function(bf,bg,bh){var self,bi;
{};
},clear:function(){this.__buffer.clearHistory();
},__buffer:new qx.log.appender.RingBuffer(50),__levels:{debug:0,info:1,warn:2,error:3},__log:function(bp,bq){var bv=this.__levels;

if(bv[bp]<bv[this.__level]){return;
}var bs=bq.length<2?null:bq[0];
var bu=bs?1:0;
var br=[];

for(var i=bu,l=bq.length;i<l;i++){br.push(this.__serialize(bq[i],true));
}var bw=new Date;
var bx={time:bw,offset:bw-qx.Bootstrap.LOADSTART,level:bp,items:br,win:window};
if(bs){if(bs instanceof qx.core.Object){bx.object=bs.$$hash;
}else if(bs.$$type){bx.clazz=bs;
}}this.__buffer.process(bx);
var by=this.__appender;

for(var bt in by){by[bt].process(bx);
}},__detect:function(bd){if(bd===undefined){return C;
}else if(bd===null){return f;
}
if(bd.$$type){return e;
}var be=typeof bd;

if(be===G||be==g||be===K||be===F){return be;
}else if(be===A){if(bd.nodeType){return p;
}else if(bd.classname){return h;
}else if(bd instanceof Array){return m;
}else if(bd instanceof Error){return o;
}else{return D;
}}
if(bd.toString){return J;
}return H;
},__serialize:function(O,P){var W=this.__detect(O);
var S=H;
var R=[];

switch(W){case f:case C:S=W;
break;
case g:case K:case F:S=O;
break;
case p:if(O.nodeType===9){S=v;
}else if(O.nodeType===3){S=q+O.nodeValue+I;
}else if(O.nodeType===1){S=O.nodeName.toLowerCase();

if(O.id){S+=x+O.id;
}}else{S=p;
}break;
case G:S=qx.lang.Function.getName(O)||W;
break;
case h:S=O.basename+t+O.$$hash+I;
break;
case e:case J:S=O.toString();
break;
case o:R=qx.dev.StackTrace.getStackTraceFromError(O);
S=O.toString();
break;
case m:if(P){S=[];

for(var i=0,l=O.length;i<l;i++){if(S.length>20){S.push(n+(l-i)+k);
break;
}S.push(this.__serialize(O[i],false));
}}else{S=r+O.length+z;
}break;
case D:if(P){var Q;
var V=[];

for(var U in O){V.push(U);
}V.sort();
S=[];

for(var i=0,l=V.length;i<l;i++){if(S.length>20){S.push(n+(l-i)+k);
break;
}U=V[i];
Q=this.__serialize(O[U],false);
Q.key=U;
S.push(Q);
}}else{var T=0;

for(var U in O){T++;
}S=s+T+w;
}break;
}return {type:W,text:S,trace:R};
}},defer:function(a){var b=qx.Bootstrap.$$logs;

for(var i=0;i<b.length;i++){this.__log(b[i][0],b[i][1]);
}qx.Bootstrap.debug=a.debug;
qx.Bootstrap.info=a.info;
qx.Bootstrap.warn=a.warn;
qx.Bootstrap.error=a.error;
qx.Bootstrap.trace=a.trace;
}});
})();
(function(){var bq="set",bp="get",bo="reset",bn="qx.core.Object",bm="]",bl="[",bk="$$user_",bj="Object";
qx.Class.define(bn,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bj},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bl+this.$$hash+bm;
},base:function(Y,ba){{};

if(arguments.length===1){return Y.callee.base.call(this);
}else{return Y.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(Q){return Q.callee.self;
},clone:function(){var p=this.constructor;
var o=new p;
var r=qx.Class.getProperties(p);
var q=qx.core.Property.$$store.user;
var s=qx.core.Property.$$method.set;
var name;
for(var i=0,l=r.length;i<l;i++){name=r[i];

if(this.hasOwnProperty(q[name])){o[s[name]](this[q[name]]);
}}return o;
},set:function(br,bs){var bu=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(br)){if(!this[bu[br]]){if(this[bq+qx.Bootstrap.firstUp(br)]!=undefined){this[bq+qx.Bootstrap.firstUp(br)](bs);
return;
}{};
}return this[bu[br]](bs);
}else{for(var bt in br){if(!this[bu[bt]]){if(this[bq+qx.Bootstrap.firstUp(bt)]!=undefined){this[bq+qx.Bootstrap.firstUp(bt)](br[bt]);
continue;
}{};
}this[bu[bt]](br[bt]);
}return this;
}},get:function(I){var J=qx.core.Property.$$method.get;

if(!this[J[I]]){if(this[bp+qx.Bootstrap.firstUp(I)]!=undefined){return this[bp+qx.Bootstrap.firstUp(I)]();
}{};
}return this[J[I]]();
},reset:function(b){var c=qx.core.Property.$$method.reset;

if(!this[c[b]]){if(this[bo+qx.Bootstrap.firstUp(b)]!=undefined){this[bo+qx.Bootstrap.firstUp(b)]();
return;
}{};
}this[c[b]]();
},__Registration:qx.event.Registration,addListener:function(U,V,self,W){if(!this.$$disposed){return this.__Registration.addListener(this,U,V,self,W);
}return null;
},addListenerOnce:function(bv,bw,self,bx){var by=function(e){bw.call(self||this,e);
this.removeListener(bv,by,this,bx);
};
return this.addListener(bv,by,this,bx);
},removeListener:function(C,D,self,E){if(!this.$$disposed){return this.__Registration.removeListener(this,C,D,self,E);
}return false;
},removeListenerById:function(bi){if(!this.$$disposed){return this.__Registration.removeListenerById(this,bi);
}return false;
},hasListener:function(m,n){return this.__Registration.hasListener(this,m,n);
},dispatchEvent:function(bb){if(!this.$$disposed){return this.__Registration.dispatchEvent(this,bb);
}return true;
},fireEvent:function(R,S,T){if(!this.$$disposed){return this.__Registration.fireEvent(this,R,S,T);
}return true;
},fireNonBubblingEvent:function(F,G,H){if(!this.$$disposed){return this.__Registration.fireNonBubblingEvent(this,F,G,H);
}return true;
},fireDataEvent:function(d,f,g,h){if(!this.$$disposed){if(g===undefined){g=null;
}return this.__Registration.fireNonBubblingEvent(this,d,qx.event.type.Data,[f,g,!!h]);
}return true;
},__userData:null,setUserData:function(K,L){if(!this.__userData){this.__userData={};
}this.__userData[K]=L;
},getUserData:function(M){if(!this.__userData){return null;
}var N=this.__userData[M];
return N===undefined?null:N;
},__Logger:qx.log.Logger,debug:function(B){this.__Logger.debug(this,B);
},info:function(j){this.__Logger.info(this,j);
},warn:function(a){this.__Logger.warn(this,a);
},error:function(O){this.__Logger.error(this,O);
},trace:function(){this.__Logger.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bg,be;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var bf=this.constructor;
var bd;

while(bf.superclass){if(bf.$$destructor){bf.$$destructor.call(this);
}if(bf.$$includes){bd=bf.$$flatIncludes;

for(var i=0,l=bd.length;i<l;i++){if(bd[i].$$destructor){bd[i].$$destructor.call(this);
}}}bf=bf.superclass;
}var bh=qx.Class.getProperties(this.constructor);

for(var i=0,l=bh.length;i<l;i++){delete this[bk+bh[i]];
}{};
},_disposeFields:function(bc){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(k){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(bz){qx.util.DisposeUtil.disposeArray(this,bz);
},_disposeMap:function(X){qx.util.DisposeUtil.disposeMap(this,X);
}},settings:{"qx.disposerDebugLevel":0},defer:function(P){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__userData=null;
var v=this.constructor;
var z;
var A=qx.core.Property.$$store;
var x=A.user;
var y=A.theme;
var t=A.inherit;
var w=A.useinit;
var u=A.init;

while(v){z=v.$$properties;

if(z){for(var name in z){if(z[name].dispose){this[x[name]]=this[y[name]]=this[t[name]]=this[w[name]]=this[u[name]]=undefined;
}}}v=v.superclass;
}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__insets:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__insets=null;
},getInsets:function(){if(this.__insets){return this.__insets;
}var j=this._getDefaultInsets();
return this.__insets={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__insets=null;
}},destruct:function(){this.__insets=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){{};
var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var o="_applyStyle",n="Color",m="px",l="solid",k="dotted",j="double",i="dashed",h="",g="_applyWidth",f="qx.ui.decoration.Uniform",c="px ",e=" ",d="scale",b="PositiveInteger",a="absolute";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(q,r,s){arguments.callee.base.call(this);
if(q!=null){this.setWidth(q);
}
if(r!=null){this.setStyle(r);
}
if(s!=null){this.setColor(s);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[l,k,i,j],init:l,apply:o},color:{nullable:true,check:n,apply:o},backgroundColor:{check:n,nullable:true,apply:o}},members:{__markup:null,_getDefaultInsets:function(){var p=this.getWidth();
return {top:p,right:p,bottom:p,left:p};
},_isInitialized:function(){return !!this.__markup;
},getMarkup:function(){if(this.__markup){return this.__markup;
}var B={position:a,top:0,left:0};
var C=this.getWidth();
{};
var E=qx.theme.manager.Color.getInstance();
B.border=C+c+this.getStyle()+e+E.resolve(this.getColor());
var D=this._generateBackgroundMarkup(B);
return this.__markup=D;
},resize:function(w,x,y){var A=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(A||qx.bom.client.Feature.CONTENT_BOX){var z=this.getWidth()*2;
x-=z;
y-=z;
if(x<0){x=0;
}
if(y<0){y=0;
}}w.style.width=x+m;
w.style.height=y+m;
},tint:function(t,u){var v=qx.theme.manager.Color.getInstance();

if(u==null){u=this.getBackgroundColor();
}t.style.backgroundColor=v.resolve(u)||h;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__markup=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(o){arguments.callee.base.call(this);

if(o!=null){this.setBackgroundColor(o);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__markup:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__markup;
},getMarkup:function(){if(this.__markup){return this.__markup;
}var j={position:a,top:0,left:0};
var k=this._generateBackgroundMarkup(j);
return this.__markup=k;
},resize:function(g,h,i){g.style.width=h+f;
g.style.height=i+f;
},tint:function(l,m){var n=qx.theme.manager.Color.getInstance();

if(m==null){m=this.getBackgroundColor();
}l.style.backgroundColor=n.resolve(m)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__markup=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="double",f="px ",e="dotted",d="_applyWidth",c="dashed",b="Number",a=" ",F="shorthand",E="px",D="widthTop",C="styleRight",B="styleLeft",A="widthLeft",z="widthBottom",y="styleTop",x="colorBottom",w="styleBottom",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="scale",n="border-top",k="border-left",l="border-right",s="qx.ui.decoration.Single",t="",v="border-bottom",u="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(G,H,I){arguments.callee.base.call(this);
if(G!=null){this.setWidth(G);
}
if(H!=null){this.setStyle(H);
}
if(I!=null){this.setColor(I);
}},properties:{widthTop:{check:b,init:0,apply:d},widthRight:{check:b,init:0,apply:d},widthBottom:{check:b,init:0,apply:d},widthLeft:{check:b,init:0,apply:d},styleTop:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleRight:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleBottom:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleLeft:{nullable:true,check:[i,e,c,g],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[A,B,r]},right:{group:[q,C,o]},top:{group:[D,y,p]},bottom:{group:[z,w,x]},width:{group:[D,q,z,A],mode:F},style:{group:[y,C,w,B],mode:F},color:{group:[p,o,x,r],mode:F}},members:{__markup:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__markup;
},getMarkup:function(J){if(this.__markup){return this.__markup;
}var K=qx.theme.manager.Color.getInstance();
var L={};
var N=this.getWidthTop();

if(N>0){L[n]=N+f+this.getStyleTop()+a+K.resolve(this.getColorTop());
}var N=this.getWidthRight();

if(N>0){L[l]=N+f+this.getStyleRight()+a+K.resolve(this.getColorRight());
}var N=this.getWidthBottom();

if(N>0){L[v]=N+f+this.getStyleBottom()+a+K.resolve(this.getColorBottom());
}var N=this.getWidthLeft();

if(N>0){L[k]=N+f+this.getStyleLeft()+a+K.resolve(this.getColorLeft());
}{};
L.position=u;
L.top=0;
L.left=0;
var M=this._generateBackgroundMarkup(L);
return this.__markup=M;
},resize:function(O,P,Q){var S=this.getBackgroundImage()&&this.getBackgroundRepeat()==m;

if(S||qx.bom.client.Feature.CONTENT_BOX){var R=this.getInsets();
P-=R.left+R.right;
Q-=R.top+R.bottom;
if(P<0){P=0;
}
if(Q<0){Q=0;
}}O.style.width=P+E;
O.style.height=Q+E;
},tint:function(T,U){var V=qx.theme.manager.Color.getInstance();

if(U==null){U=this.getBackgroundColor();
}T.style.backgroundColor=V.resolve(U)||t;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__markup=null;
}});
})();
(function(){var l="px",k="0px",j="-1px",i="no-repeat",h="scale-x",g="scale-y",f="-tr",e="-l",d='</div>',c="scale",z="qx.client",y="-br",x="-t",w="-tl",v="-r",u='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',t="_applyBaseImage",s="-b",r="String",q="",o="-bl",p="-c",m="mshtml",n="qx.ui.decoration.Grid";
qx.Class.define(n,{extend:qx.ui.decoration.Abstract,construct:function(P,Q){arguments.callee.base.call(this);
if(P!=null){this.setBaseImage(P);
}
if(Q!=null){this.setInsets(Q);
}},properties:{baseImage:{check:r,nullable:true,apply:t}},members:{__markup:null,__images:null,__edges:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__markup;
},getMarkup:function(){if(this.__markup){return this.__markup;
}var L=qx.bom.element.Decoration;
var M=this.__images;
var N=this.__edges;
var O=[];
O.push(u);
O.push(L.create(M.tl,i,{top:0,left:0}));
O.push(L.create(M.t,h,{top:0,left:N.left+l}));
O.push(L.create(M.tr,i,{top:0,right:0}));
O.push(L.create(M.bl,i,{bottom:0,left:0}));
O.push(L.create(M.b,h,{bottom:0,left:N.left+l}));
O.push(L.create(M.br,i,{bottom:0,right:0}));
O.push(L.create(M.l,g,{top:N.top+l,left:0}));
O.push(L.create(M.c,c,{top:N.top+l,left:N.left+l}));
O.push(L.create(M.r,g,{top:N.top+l,right:0}));
O.push(d);
return this.__markup=O.join(q);
},resize:function(A,B,C){var D=this.__edges;
var innerWidth=B-D.left-D.right;
var innerHeight=C-D.top-D.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}A.style.width=B+l;
A.style.height=C+l;
A.childNodes[1].style.width=innerWidth+l;
A.childNodes[4].style.width=innerWidth+l;
A.childNodes[7].style.width=innerWidth+l;
A.childNodes[6].style.height=innerHeight+l;
A.childNodes[7].style.height=innerHeight+l;
A.childNodes[8].style.height=innerHeight+l;

if(qx.core.Variant.isSet(z,m)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(B%2==1){A.childNodes[2].style.marginRight=j;
A.childNodes[5].style.marginRight=j;
A.childNodes[8].style.marginRight=j;
}else{A.childNodes[2].style.marginRight=k;
A.childNodes[5].style.marginRight=k;
A.childNodes[8].style.marginRight=k;
}
if(C%2==1){A.childNodes[3].style.marginBottom=j;
A.childNodes[4].style.marginBottom=j;
A.childNodes[5].style.marginBottom=j;
}else{A.childNodes[3].style.marginBottom=k;
A.childNodes[4].style.marginBottom=k;
A.childNodes[5].style.marginBottom=k;
}}}},tint:function(a,b){},_applyBaseImage:function(E,F){{};

if(E){var J=this._resolveImageUrl(E);
var K=/(.*)(\.[a-z]+)$/.exec(J);
var I=K[1];
var H=K[2];
var G=this.__images={tl:I+w+H,t:I+x+H,tr:I+f+H,bl:I+o+H,b:I+s+H,br:I+y+H,l:I+e+H,c:I+p+H,r:I+v+H};
this.__edges=this._computeEdgeSizes(G);
}},_resolveImageUrl:function(R){return qx.util.AliasManager.getInstance().resolve(R);
},_computeEdgeSizes:function(S){var T=qx.util.ResourceManager.getInstance();
return {top:T.getImageHeight(S.t),bottom:T.getImageHeight(S.b),left:T.getImageWidth(S.l),right:T.getImageWidth(S.r)};
}},destruct:function(){this.__markup=this.__images=this.__edges=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(B,C,D){arguments.callee.base.call(this);
if(B!=null){this.setOuterColor(B);
}
if(C!=null){this.setInnerColor(C);
}
if(D!=null){this.setInnerOpacity(D);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__markup:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__markup;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__markup){return this.__markup;
}var w=qx.theme.manager.Color.getInstance();
var x=[];
var A=d+w.resolve(this.getOuterColor())+b;
var z=d+w.resolve(this.getInnerColor())+b;
x.push(k);
x.push(f);
x.push(e,A);
x.push(qx.bom.element.Opacity.compile(0.35));
x.push(i);
x.push(n);
x.push(q,A);
x.push(r,A);
x.push(i);
x.push(f);
x.push(m);
x.push(p,A);
x.push(s,A);
x.push(i);
var y={position:l,top:g,left:g};
x.push(this._generateBackgroundMarkup(y));
x.push(t);
x.push(e,z);
x.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
x.push(i);
x.push(v);
return this.__markup=x.join(c);
},resize:function(H,I,J){if(I<4){I=4;
}
if(J<4){J=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=I-2;
var outerHeight=J-2;
var P=outerWidth;
var O=outerHeight;
var innerWidth=I-4;
var innerHeight=J-4;
}else{var outerWidth=I;
var outerHeight=J;
var P=I-2;
var O=J-2;
var innerWidth=P;
var innerHeight=O;
}var R=a;
var N=H.childNodes[0].style;
N.width=outerWidth+R;
N.height=outerHeight+R;
var M=H.childNodes[1].style;
M.width=outerWidth+R;
M.height=O+R;
var L=H.childNodes[2].style;
L.width=P+R;
L.height=outerHeight+R;
var K=H.childNodes[3].style;
K.width=P+R;
K.height=O+R;
var Q=H.childNodes[4].style;
Q.width=innerWidth+R;
Q.height=innerHeight+R;
},tint:function(E,F){var G=qx.theme.manager.Color.getInstance();

if(F==null){F=this.getBackgroundColor();
}E.childNodes[3].style.backgroundColor=G.resolve(F)||c;
}},destruct:function(){this.__markup=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var a="smart.demo.theme.Decoration";
qx.Theme.define(a,{extend:qx.theme.modern.Decoration,decorations:{}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__init:function(){var o=navigator.platform;
if(o==null||o===k){o=navigator.userAgent;
}
if(o.indexOf(e)!=-1||o.indexOf(l)!=-1||o.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(g)!=-1||o.indexOf(b)!=-1||o.indexOf(c)!=-1||o.indexOf(m)!=-1||o.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(a)!=-1||o.indexOf(i)!=-1||o.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(n){n.__init();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__ids:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__init:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__ids){K.push(J);
}var M=new RegExp(l+K.join(C).replace(/\./g,r)+H,u);

if(!M.test(L)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__ids[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__init();
}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var a="smart.demo.theme.Font";
qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var hp="button-frame",ho="atom",hn="widget",hm="main",hl="button",hk="text-selected",hj="image",hi="bold",hh="middle",hg="background-light",fS="text-disabled",fR="groupbox",fQ="decoration/arrows/down.png",fP="cell",fO="selected",fN="border-invalid",fM="input",fL="input-disabled",fK="menu-button",fJ="input-focused-invalid",hw="toolbar-button",hx="spinner",hu="input-focused",hv="popup",hs="tooltip",ht="list",hq="tree-item",hr="treevirtual-contract",hy="scrollbar",hz="datechooser/nav-button",gO="text-hovered",gN="center",gQ="treevirtual-expand",gP="textfield",gS="label",gR="decoration/arrows/right.png",gU="background-application",gT="radiobutton",gM="white",gL="invalid",dO="combobox",dP="right-top",dQ="checkbox",dR="text-title",dS="qx/static/blank.gif",dT="scrollbar/button",dU="right",dV="combobox/button",dW="icon/16/places/folder.png",dX="text-label",hN="decoration/tree/closed.png",hM="scrollbar-slider-horizontal",hL="decoration/arrows/left.png",hK="button-focused",hR="text-light",hQ="menu-slidebar-button",hP="text-input",hO="slidebar/button-forward",hT="background-splitpane",hS=".png",eQ="decoration/tree/open.png",eR="default",eO="decoration/arrows/down-small.png",eP="datechooser",eU="slidebar/button-backward",eV="selectbox",eS="treevirtual-folder",eT="shadow-popup",eM="icon/16/mimetypes/office-document.png",eN="background-medium",es="table",er="decoration/arrows/up.png",eu="decoration/form/",et="",eo="-invalid",en="icon/16/places/folder-open.png",eq="button-checked",ep="decoration/window/maximize-active-hovered.png",em="radiobutton-hovered",el="decoration/cursors/",fc="slidebar",fd="tooltip-error-arrow",fe="table-scroller-focus-indicator",ff="move-frame",eX="nodrop",eY="decoration/table/boolean-true.png",fa="table-header-cell",fb="menu",fg="app-header",fh="row-layer",eF="text-inactive",eE="move",eD="radiobutton-checked-focused",eC="decoration/window/restore-active-hovered.png",eB="shadow-window",eA="table-column-button",ez="right.png",ey="tabview-page-button-bottom-inactive",eJ="tooltip-error",eI="window-statusbar",fi="button-hovered",fj="decoration/scrollbar/scrollbar-",fk="background-tip",fl="scrollbar-slider-horizontal-disabled",fm="table-scroller-header",fn="radiobutton-disabled",fo="button-pressed",fp="table-pane",fq="decoration/window/close-active.png",fr="native",gb="checkbox-hovered",ga="button-invalid-shadow",fY="checkbox-checked",fX="decoration/window/minimize-active-hovered.png",gf="menubar",ge="icon/16/actions/dialog-cancel.png",gd="tabview-page-button-top-inactive",gc="tabview-page-button-left-inactive",gj="menu-slidebar",gi="toolbar-button-checked",gG="decoration/tree/open-selected.png",gH="radiobutton-checked",gE="decoration/window/minimize-inactive.png",gF="icon/16/apps/office-calendar.png",gC="group",gD="tabview-page-button-right-inactive",gA="decoration/window/minimize-active.png",gB="decoration/window/restore-inactive.png",gI="checkbox-checked-focused",gJ="splitpane",gY="combobox/textfield",gX="button-preselected-focused",hb="decoration/window/close-active-hovered.png",ha="qx/icon/Tango/16/actions/window-close.png",hd="checkbox-pressed",hc="button-disabled",hf="selected-dragover",he="border-separator",gW="decoration/window/maximize-inactive.png",gV="dragover",hG="scrollarea",hH="scrollbar-vertical",hI="decoration/menu/checkbox-invert.gif",hJ="decoration/toolbar/toolbar-handle-knob.gif",hC="icon/22/mimetypes/office-document.png",hD="button-preselected",hE="button-checked-focused",hF="up.png",hA="best-fit",hB="decoration/tree/closed-selected.png",dN="qx.theme.modern.Appearance",dM="text-active",dL="checkbox-disabled",dK="toolbar-button-hovered",dJ="progressive-table-header",dI="decoration/table/select-column-order.png",dH="decoration/menu/radiobutton.gif",dG="decoration/arrows/forward.png",dF="decoration/table/descending.png",dE="window-captionbar-active",eb="checkbox-checked-hovered",ec="scrollbar-slider-vertical",dY="toolbar",ea="alias",ef="decoration/window/restore-active.png",eg="decoration/table/boolean-false.png",ed="checkbox-checked-disabled",ee="icon/32/mimetypes/office-document.png",ei="radiobutton-checked-disabled",ej="tabview-pane",gn="decoration/arrows/rewind.png",gh="checkbox-focused",gu="top",gq="#EEE",fV="icon/16/actions/dialog-ok.png",fT="radiobutton-checked-hovered",ew="table-header-cell-hovered",fW="window",eH="text-gray",eG="decoration/menu/radiobutton-invert.gif",fB="text-placeholder",fC="slider",fD="keep-align",fE="down.png",fF="tabview-page-button-top-active",fG="icon/32/places/folder-open.png",fH="icon/22/places/folder.png",fI="decoration/window/maximize-active.png",fy="checkbox-checked-pressed",fz="decoration/window/close-inactive.png",fU="tabview-page-button-left-active",gt="toolbar-part",gs="decoration/splitpane/knob-vertical.png",gr=".gif",gy="icon/22/places/folder-open.png",gx="radiobutton-checked-pressed",gw="table-statusbar",gv="radiobutton-pressed",gp="window-captionbar-inactive",go="copy",eh="radiobutton-focused",eL="decoration/arrows/down-invert.png",eK="decoration/menu/checkbox.gif",gg="decoration/splitpane/knob-horizontal.png",eW="icon/32/places/folder.png",gm="toolbar-separator",gl="tabview-page-button-bottom-active",gk="decoration/arrows/up-small.png",ev="decoration/table/ascending.png",gz="decoration/arrows/up-invert.png",ek="small",ex="tabview-page-button-right-active",fs="-disabled",ft="scrollbar-horizontal",fu="progressive-table-header-cell",fv="menu-separator",fw="pane",fx="decoration/arrows/right-invert.png",gK="left.png",fA="icon/16/actions/view-refresh.png";
qx.Theme.define(dN,{appearances:{"widget":{},"root":{style:function(g){return {backgroundColor:gU,textColor:dX,font:eR};
}},"label":{style:function(hW){return {textColor:hW.disabled?fS:undefined};
}},"move-frame":{style:function(cI){return {decorator:hm};
}},"resize-frame":ff,"dragdrop-cursor":{style:function(bf){var bg=eX;

if(bf.copy){bg=go;
}else if(bf.move){bg=eE;
}else if(bf.alias){bg=ea;
}return {source:el+bg+gr,position:dP,offset:[2,16,2,6]};
}},"image":{style:function(hY){return {opacity:!hY.replacement&&hY.disabled?0.3:1};
}},"atom":{},"atom/label":gS,"atom/icon":hj,"popup":{style:function(dn){return {decorator:hm,backgroundColor:hg,shadow:eT};
}},"button-frame":{alias:ho,style:function(bG){var bI,bH;

if(bG.checked&&bG.focused&&!bG.inner){bI=hE;
bH=undefined;
}else if(bG.disabled){bI=hc;
bH=undefined;
}else if(bG.pressed){bI=fo;
bH=gO;
}else if(bG.checked){bI=eq;
bH=undefined;
}else if(bG.hovered){bI=fi;
bH=gO;
}else if(bG.preselected&&bG.focused&&!bG.inner){bI=gX;
bH=gO;
}else if(bG.preselected){bI=hD;
bH=gO;
}else if(bG.focused&&!bG.inner){bI=hK;
bH=undefined;
}else{bI=hl;
bH=undefined;
}return {decorator:bI,textColor:bH,shadow:bG.invalid&&!bG.disabled?ga:undefined};
}},"button-frame/image":{style:function(cM){return {opacity:!cM.replacement&&cM.disabled?0.5:1};
}},"button":{alias:hp,include:hp,style:function(cL){return {padding:[2,8],center:true};
}},"hover-button":{alias:ho,include:ho,style:function(dp){return {decorator:dp.hovered?fO:undefined,textColor:dp.hovered?hk:undefined};
}},"splitbutton":{},"splitbutton/button":hl,"splitbutton/arrow":{alias:hl,include:hl,style:function(cy){return {icon:fQ,padding:2,marginLeft:1};
}},"checkbox":{alias:ho,style:function(bt){var bv;

if(bt.checked&&bt.focused){bv=gI;
}else if(bt.checked&&bt.disabled){bv=ed;
}else if(bt.checked&&bt.pressed){bv=fy;
}else if(bt.checked&&bt.hovered){bv=eb;
}else if(bt.checked){bv=fY;
}else if(bt.disabled){bv=dL;
}else if(bt.focused){bv=gh;
}else if(bt.pressed){bv=hd;
}else if(bt.hovered){bv=gb;
}else{bv=dQ;
}var bu=bt.invalid&&!bt.disabled?eo:et;
return {icon:eu+bv+bu+hS,gap:6};
}},"radiobutton":{alias:ho,style:function(cO){var cQ;

if(cO.checked&&cO.focused){cQ=eD;
}else if(cO.checked&&cO.disabled){cQ=ei;
}else if(cO.checked&&cO.pressed){cQ=gx;
}else if(cO.checked&&cO.hovered){cQ=fT;
}else if(cO.checked){cQ=gH;
}else if(cO.disabled){cQ=fn;
}else if(cO.focused){cQ=eh;
}else if(cO.pressed){cQ=gv;
}else if(cO.hovered){cQ=em;
}else{cQ=gT;
}var cP=cO.invalid&&!cO.disabled?eo:et;
return {icon:eu+cQ+cP+hS,gap:6};
}},"textfield":{style:function(cS){var cX;
var cV=!!cS.focused;
var cW=!!cS.invalid;
var cT=!!cS.disabled;

if(cV&&cW&&!cT){cX=fJ;
}else if(cV&&!cW&&!cT){cX=hu;
}else if(cT){cX=fL;
}else if(!cV&&cW&&!cT){cX=fN;
}else{cX=fM;
}var cU;

if(cS.disabled){cU=fS;
}else if(cS.showingPlaceholder){cU=fB;
}else{cU=hP;
}return {decorator:cX,padding:[2,4,1],textColor:cU};
}},"textarea":{include:gP,style:function(m){return {padding:4};
}},"spinner":{style:function(cl){var cp;
var cn=!!cl.focused;
var co=!!cl.invalid;
var cm=!!cl.disabled;

if(cn&&co&&!cm){cp=fJ;
}else if(cn&&!co&&!cm){cp=hu;
}else if(cm){cp=fL;
}else if(!cn&&co&&!cm){cp=fN;
}else{cp=fM;
}return {decorator:cp};
}},"spinner/textfield":{style:function(b){return {marginRight:2,padding:[2,4,1],textColor:b.disabled?fS:hP};
}},"spinner/upbutton":{alias:hp,include:hp,style:function(cK){return {icon:gk,padding:cK.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:hp,include:hp,style:function(k){return {icon:eO,padding:k.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":dO,"datefield/button":{alias:dV,include:dV,style:function(L){return {icon:gF,padding:[0,3],decorator:undefined};
}},"datefield/textfield":gY,"datefield/list":{alias:eP,include:eP,style:function(E){return {decorator:undefined};
}},"groupbox":{style:function(df){return {legendPosition:gu};
}},"groupbox/legend":{alias:ho,style:function(dq){return {padding:[1,0,1,4],textColor:dq.invalid?gL:dR,font:hi};
}},"groupbox/frame":{style:function(r){return {padding:12,decorator:gC};
}},"check-groupbox":fR,"check-groupbox/legend":{alias:dQ,include:dQ,style:function(h){return {padding:[1,0,1,4],textColor:h.invalid?gL:dR,font:hi};
}},"radio-groupbox":fR,"radio-groupbox/legend":{alias:gT,include:gT,style:function(bx){return {padding:[1,0,1,4],textColor:bx.invalid?gL:dR,font:hi};
}},"scrollarea":{style:function(cx){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(bP){return {backgroundColor:gU};
}},"scrollarea/pane":hn,"scrollarea/scrollbar-x":hy,"scrollarea/scrollbar-y":hy,"scrollbar":{style:function(dx){if(dx[fr]){return {};
}return {width:dx.horizontal?undefined:16,height:dx.horizontal?16:undefined,decorator:dx.horizontal?ft:hH,padding:1};
}},"scrollbar/slider":{alias:fC,style:function(dl){return {padding:dl.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:hp,style:function(B){var C=B.horizontal?hM:ec;

if(B.disabled){C+=fs;
}return {decorator:C,minHeight:B.horizontal?undefined:9,minWidth:B.horizontal?9:undefined};
}},"scrollbar/button":{alias:hp,include:hp,style:function(du){var dv=fj;

if(du.left){dv+=gK;
}else if(du.right){dv+=ez;
}else if(du.up){dv+=hF;
}else{dv+=fE;
}
if(du.left||du.right){return {padding:[0,0,0,du.left?3:4],icon:dv,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:dv,width:14,height:15};
}}},"scrollbar/button-begin":dT,"scrollbar/button-end":dT,"slider":{style:function(s){var w;
var u=!!s.focused;
var v=!!s.invalid;
var t=!!s.disabled;

if(u&&v&&!t){w=fJ;
}else if(u&&!v&&!t){w=hu;
}else if(t){w=fL;
}else if(!u&&v&&!t){w=fN;
}else{w=fM;
}return {decorator:w};
}},"slider/knob":{include:hp,style:function(cw){return {decorator:cw.disabled?fl:hM,shadow:undefined,height:14,width:14};
}},"list":{alias:hG,style:function(bT){var bX;
var bV=!!bT.focused;
var bW=!!bT.invalid;
var bU=!!bT.disabled;

if(bV&&bW&&!bU){bX=fJ;
}else if(bV&&!bW&&!bU){bX=hu;
}else if(bU){bX=fL;
}else if(!bV&&bW&&!bU){bX=fN;
}else{bX=fM;
}return {backgroundColor:hg,decorator:bX};
}},"list/pane":hn,"listitem":{alias:ho,style:function(db){var dc;

if(db.dragover){dc=db.selected?hf:gV;
}else{dc=db.selected?fO:undefined;
}return {padding:db.dragover?[4,4,2,4]:4,textColor:db.selected?hk:undefined,decorator:dc};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:hp,include:hp,style:function(dw){return {padding:5,center:true,icon:dw.vertical?fQ:gR};
}},"slidebar/button-backward":{alias:hp,include:hp,style:function(ic){return {padding:5,center:true,icon:ic.vertical?er:hL};
}},"tabview":{style:function(cr){return {contentPadding:16};
}},"tabview/bar":{alias:fc,style:function(cs){var ct={marginBottom:cs.barTop?-1:0,marginTop:cs.barBottom?-4:0,marginLeft:cs.barRight?-3:0,marginRight:cs.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(cs.barTop||cs.barBottom){ct.paddingLeft=5;
ct.paddingRight=7;
}else{ct.paddingTop=5;
ct.paddingBottom=7;
}return ct;
}},"tabview/bar/button-forward":{include:hO,alias:hO,style:function(l){if(l.barTop||l.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:eU,alias:eU,style:function(Y){if(Y.barTop||Y.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(hX){return {decorator:ej,minHeight:100,marginBottom:hX.barBottom?-1:0,marginTop:hX.barTop?-1:0,marginLeft:hX.barLeft?-1:0,marginRight:hX.barRight?-1:0};
}},"tabview-page":hn,"tabview-page/button":{alias:ho,style:function(cd){var cj,cf=0;
var ci=0,ce=0,cg=0,ch=0;

if(cd.checked){if(cd.barTop){cj=fF;
cf=[6,14];
cg=cd.firstTab?0:-5;
ch=cd.lastTab?0:-5;
}else if(cd.barBottom){cj=gl;
cf=[6,14];
cg=cd.firstTab?0:-5;
ch=cd.lastTab?0:-5;
}else if(cd.barRight){cj=ex;
cf=[6,13];
ci=cd.firstTab?0:-5;
ce=cd.lastTab?0:-5;
}else{cj=fU;
cf=[6,13];
ci=cd.firstTab?0:-5;
ce=cd.lastTab?0:-5;
}}else{if(cd.barTop){cj=gd;
cf=[4,10];
ci=4;
cg=cd.firstTab?5:1;
ch=1;
}else if(cd.barBottom){cj=ey;
cf=[4,10];
ce=4;
cg=cd.firstTab?5:1;
ch=1;
}else if(cd.barRight){cj=gD;
cf=[4,10];
ch=5;
ci=cd.firstTab?5:1;
ce=1;
cg=1;
}else{cj=gc;
cf=[4,10];
cg=5;
ci=cd.firstTab?5:1;
ce=1;
ch=1;
}}return {zIndex:cd.checked?10:5,decorator:cj,padding:cf,marginTop:ci,marginBottom:ce,marginLeft:cg,marginRight:ch,textColor:cd.checked?dM:eF};
}},"tabview-page/button/close-button":{alias:ho,style:function(F){return {icon:ha};
}},"toolbar":{style:function(be){return {decorator:dY,spacing:2};
}},"toolbar/part":{style:function(dC){return {decorator:gt,spacing:2};
}},"toolbar/part/container":{style:function(cG){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(bw){return {source:hJ,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:ho,style:function(bd){return {marginTop:2,marginBottom:2,padding:(bd.pressed||bd.checked||bd.hovered)&&!bd.disabled||(bd.disabled&&bd.checked)?3:5,decorator:bd.pressed||(bd.checked&&!bd.hovered)||(bd.checked&&bd.disabled)?gi:bd.hovered&&!bd.disabled?dK:undefined};
}},"toolbar-menubutton":{alias:hw,include:hw,style:function(bE){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:hj,include:hj,style:function(bD){return {source:eO};
}},"toolbar-splitbutton":{style:function(by){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:hw,include:hw,style:function(A){return {icon:fQ,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:hw,include:hw,style:function(cC){return {padding:cC.pressed||cC.checked?1:cC.hovered?1:3,icon:fQ,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(bB){return {decorator:gm,margin:7};
}},"tree":ht,"tree-item":{style:function(cE){return {padding:[2,6],textColor:cE.selected?hk:undefined,decorator:cE.selected?fO:undefined};
}},"tree-item/icon":{include:hj,style:function(br){return {paddingRight:5};
}},"tree-item/label":gS,"tree-item/open":{include:hj,style:function(W){var X;

if(W.selected&&W.opened){X=gG;
}else if(W.selected&&!W.opened){X=hB;
}else if(W.opened){X=eQ;
}else{X=hN;
}return {padding:[0,5,0,2],source:X};
}},"tree-folder":{include:hq,alias:hq,style:function(U){var V;

if(U.small){V=U.opened?en:dW;
}else if(U.large){V=U.opened?fG:eW;
}else{V=U.opened?gy:fH;
}return {icon:V};
}},"tree-file":{include:hq,alias:hq,style:function(M){return {icon:M.small?eM:M.large?ee:hC};
}},"treevirtual":es,"treevirtual-folder":{style:function(bY){return {icon:bY.opened?en:dW};
}},"treevirtual-file":{include:eS,alias:eS,style:function(z){return {icon:eM};
}},"treevirtual-line":{style:function(bN){return {icon:dS};
}},"treevirtual-contract":{style:function(bq){return {icon:eQ,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(q){return {icon:hN,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":hr,"treevirtual-only-expand":gQ,"treevirtual-start-contract":hr,"treevirtual-start-expand":gQ,"treevirtual-end-contract":hr,"treevirtual-end-expand":gQ,"treevirtual-cross-contract":hr,"treevirtual-cross-expand":gQ,"treevirtual-end":{style:function(ds){return {icon:dS};
}},"treevirtual-cross":{style:function(bF){return {icon:dS};
}},"tooltip":{include:hv,style:function(bl){return {backgroundColor:fk,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":ho,"tooltip-error":{include:hs,style:function(f){return {textColor:hk,placeMethod:hn,offset:[0,0,0,14],marginTop:-2,position:dP,showTimeout:100,hideTimeout:10000,decorator:eJ,shadow:fd,font:hi};
}},"tooltip-error/atom":ho,"window":{style:function(ca){return {shadow:eB,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(bh){return {decorator:fW};
}},"window/captionbar":{style:function(e){return {decorator:e.active?dE:gp,textColor:e.active?gM:eH,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(dD){return {margin:[5,0,3,6]};
}},"window/title":{style:function(dB){return {alignY:hh,font:hi,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:ho,style:function(dz){return {icon:dz.active?dz.hovered?fX:gA:gE,margin:[4,8,2,0]};
}},"window/restore-button":{alias:ho,style:function(o){return {icon:o.active?o.hovered?eC:ef:gB,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:ho,style:function(bK){return {icon:bK.active?bK.hovered?ep:fI:gW,margin:[4,8,2,0]};
}},"window/close-button":{alias:ho,style:function(dy){return {icon:dy.active?dy.hovered?hb:fq:fz,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(bA){return {padding:[2,6],decorator:eI,minHeight:18};
}},"window/statusbar-text":{style:function(cv){return {font:ek};
}},"iframe":{style:function(bj){return {decorator:hm};
}},"resizer":{style:function(cu){return {decorator:fw};
}},"splitpane":{style:function(y){return {decorator:gJ};
}},"splitpane/splitter":{style:function(ck){return {width:ck.horizontal?3:undefined,height:ck.vertical?3:undefined,backgroundColor:hT};
}},"splitpane/splitter/knob":{style:function(D){return {source:D.horizontal?gg:gs};
}},"splitpane/slider":{style:function(cD){return {width:cD.horizontal?3:undefined,height:cD.vertical?3:undefined,backgroundColor:hT};
}},"selectbox":{alias:hp,include:hp,style:function(bi){return {padding:[2,8]};
}},"selectbox/atom":ho,"selectbox/popup":hv,"selectbox/list":{alias:ht},"selectbox/arrow":{include:hj,style:function(bs){return {source:fQ,paddingLeft:5};
}},"datechooser":{style:function(dg){var dk;
var di=!!dg.focused;
var dj=!!dg.invalid;
var dh=!!dg.disabled;

if(di&&dj&&!dh){dk=fJ;
}else if(di&&!dj&&!dh){dk=hu;
}else if(dh){dk=fL;
}else if(!di&&dj&&!dh){dk=fN;
}else{dk=fM;
}return {padding:2,decorator:dk,backgroundColor:hg};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:hp,alias:hp,style:function(bL){var bM={padding:[2,4],shadow:undefined};

if(bL.lastYear){bM.icon=gn;
bM.marginRight=1;
}else if(bL.lastMonth){bM.icon=hL;
}else if(bL.nextYear){bM.icon=dG;
bM.marginLeft=1;
}else if(bL.nextMonth){bM.icon=gR;
}return bM;
}},"datechooser/last-year-button-tooltip":hs,"datechooser/last-month-button-tooltip":hs,"datechooser/next-year-button-tooltip":hs,"datechooser/next-month-button-tooltip":hs,"datechooser/last-year-button":hz,"datechooser/last-month-button":hz,"datechooser/next-month-button":hz,"datechooser/next-year-button":hz,"datechooser/month-year-label":{style:function(x){return {font:hi,textAlign:gN,textColor:x.disabled?fS:undefined};
}},"datechooser/date-pane":{style:function(bp){return {textColor:bp.disabled?fS:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(id){return {textColor:id.disabled?fS:id.weekend?hR:undefined,textAlign:gN,paddingTop:2,backgroundColor:eN};
}},"datechooser/week":{style:function(p){return {textAlign:gN,padding:[2,4],backgroundColor:eN};
}},"datechooser/day":{style:function(n){return {textAlign:gN,decorator:n.disabled?undefined:n.selected?fO:undefined,textColor:n.disabled?fS:n.selected?hk:n.otherMonth?hR:undefined,font:n.today?hi:undefined,padding:[2,4]};
}},"combobox":{style:function(G){var K;
var I=!!G.focused;
var J=!!G.invalid;
var H=!!G.disabled;

if(I&&J&&!H){K=fJ;
}else if(I&&!J&&!H){K=hu;
}else if(H){K=fL;
}else if(!I&&J&&!H){K=fN;
}else{K=fM;
}return {decorator:K};
}},"combobox/popup":hv,"combobox/list":{alias:ht},"combobox/button":{include:hp,alias:hp,style:function(cb){var cc={icon:fQ,padding:2};

if(cb.selected){cc.decorator=hK;
}return cc;
}},"combobox/textfield":{include:gP,style:function(da){return {decorator:undefined};
}},"menu":{style:function(cA){var cB={decorator:fb,shadow:eT,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:cA.submenu||cA.contextmenu?hA:fD};

if(cA.submenu){cB.position=dP;
cB.offset=[-2,-3];
}return cB;
}},"menu/slidebar":gj,"menu-slidebar":hn,"menu-slidebar-button":{style:function(bb){return {decorator:bb.hovered?fO:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:hQ,style:function(bC){return {icon:bC.hovered?gz:er};
}},"menu-slidebar/button-forward":{include:hQ,style:function(dd){return {icon:dd.hovered?eL:fQ};
}},"menu-separator":{style:function(bQ){return {height:0,decorator:fv,margin:[4,2]};
}},"menu-button":{alias:ho,style:function(O){return {decorator:O.selected?fO:undefined,textColor:O.selected?hk:undefined,padding:[4,6]};
}},"menu-button/icon":{include:hj,style:function(ig){return {alignY:hh};
}},"menu-button/label":{include:gS,style:function(dm){return {alignY:hh,padding:1};
}},"menu-button/shortcut":{include:gS,style:function(bk){return {alignY:hh,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:hj,style:function(cz){return {source:cz.selected?fx:gR,alignY:hh};
}},"menu-checkbox":{alias:fK,include:fK,style:function(bn){return {icon:!bn.checked?undefined:bn.selected?hI:eK};
}},"menu-radiobutton":{alias:fK,include:fK,style:function(ib){return {icon:!ib.checked?undefined:ib.selected?eG:dH};
}},"menubar":{style:function(bO){return {decorator:gf};
}},"menubar-button":{alias:ho,style:function(ia){return {decorator:ia.pressed||ia.hovered?fO:undefined,textColor:ia.pressed||ia.hovered?hk:undefined,padding:[3,8]};
}},"colorselector":hn,"colorselector/control-bar":hn,"colorselector/control-pane":hn,"colorselector/visual-pane":fR,"colorselector/preset-grid":hn,"colorselector/colorbucket":{style:function(de){return {decorator:hm,width:16,height:16};
}},"colorselector/preset-field-set":fR,"colorselector/input-field-set":fR,"colorselector/preview-field-set":fR,"colorselector/hex-field-composite":hn,"colorselector/hex-field":gP,"colorselector/rgb-spinner-composite":hn,"colorselector/rgb-spinner-red":hx,"colorselector/rgb-spinner-green":hx,"colorselector/rgb-spinner-blue":hx,"colorselector/hsb-spinner-composite":hn,"colorselector/hsb-spinner-hue":hx,"colorselector/hsb-spinner-saturation":hx,"colorselector/hsb-spinner-brightness":hx,"colorselector/preview-content-old":{style:function(dr){return {decorator:hm,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(bc){return {decorator:hm,backgroundColor:hg,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(i){return {decorator:hm,margin:5};
}},"colorselector/brightness-field":{style:function(j){return {decorator:hm,margin:[5,7]};
}},"colorselector/hue-saturation-pane":hn,"colorselector/hue-saturation-handle":hn,"colorselector/brightness-pane":hn,"colorselector/brightness-handle":hn,"colorpopup":{alias:hv,include:hv,style:function(d){return {padding:5,backgroundColor:gU};
}},"colorpopup/field":{style:function(bz){return {decorator:hm,margin:2,width:14,height:14,backgroundColor:hg};
}},"colorpopup/selector-button":hl,"colorpopup/auto-button":hl,"colorpopup/preview-pane":fR,"colorpopup/current-preview":{style:function(S){return {height:20,padding:4,marginLeft:4,decorator:hm,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(bR){return {height:20,padding:4,marginRight:4,decorator:hm,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:hl,include:hl,style:function(dA){return {icon:fV};
}},"colorpopup/colorselector-cancelbutton":{alias:hl,include:hl,style:function(R){return {icon:ge};
}},"table":{alias:hn,style:function(bm){return {decorator:es};
}},"table-header":{},"table/statusbar":{style:function(cJ){return {decorator:gw,padding:[0,2]};
}},"table/column-button":{alias:hp,style:function(bJ){return {decorator:eA,padding:3,icon:dI};
}},"table-column-reset-button":{include:fK,alias:fK,style:function(){return {icon:fA};
}},"table-scroller":hn,"table-scroller/scrollbar-x":hy,"table-scroller/scrollbar-y":hy,"table-scroller/header":{style:function(cY){return {decorator:fm};
}},"table-scroller/pane":{style:function(T){return {backgroundColor:fp};
}},"table-scroller/focus-indicator":{style:function(cq){return {decorator:fe};
}},"table-scroller/resize-line":{style:function(dt){return {backgroundColor:he,width:2};
}},"table-header-cell":{alias:ho,style:function(ie){return {minWidth:13,minHeight:20,padding:ie.hovered?[3,4,2,4]:[3,4],decorator:ie.hovered?ew:fa,sortIcon:ie.sorted?(ie.sortedAscending?ev:dF):undefined};
}},"table-header-cell/label":{style:function(N){return {minWidth:0,alignY:hh,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(bo){return {alignY:hh,alignX:dU};
}},"table-header-cell/icon":{style:function(hU){return {minWidth:0,alignY:hh,paddingRight:5};
}},"table-editor-textfield":{include:gP,style:function(cR){return {decorator:undefined,padding:[2,2],backgroundColor:hg};
}},"table-editor-selectbox":{include:eV,alias:eV,style:function(ba){return {padding:[0,2],backgroundColor:hg};
}},"table-editor-combobox":{include:dO,alias:dO,style:function(P){return {decorator:undefined,backgroundColor:hg};
}},"progressive-table-header":{alias:hn,style:function(cN){return {decorator:dJ};
}},"progressive-table-header-cell":{alias:ho,style:function(cF){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:fu};
}},"app-header":{style:function(a){return {font:hi,textColor:hk,padding:[8,12],decorator:fg};
}},"virtual-list":ht,"virtual-list/row-layer":fh,"row-layer":{style:function(c){return {colorEven:gM,colorOdd:gq};
}},"column-layer":hn,"cell":{style:function(hV){return {textColor:hV.selected?hk:dX,padding:[3,6],font:eR};
}},"cell-string":fP,"cell-number":{include:fP,style:function(Q){return {textAlign:dU};
}},"cell-image":fP,"cell-boolean":{include:fP,style:function(cH){return {iconTrue:eY,iconFalse:eg};
}},"cell-atom":fP,"cell-date":fP,"cell-html":fP,"htmlarea":{"include":hn,style:function(bS){return {backgroundColor:gM};
}}}});
})();
(function(){var a="smart.demo.theme.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});
})();
(function(){var a="smart.demo.theme.Theme";
qx.Theme.define(a,{meta:{color:smart.demo.theme.Color,decoration:smart.demo.theme.Decoration,font:smart.demo.theme.Font,icon:qx.theme.icon.Tango,appearance:smart.demo.theme.Appearance}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__init:function(){this.QUIRKS_MODE=this.__isQuirksMode();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__isQuirksMode:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__init();
}});
})();
(function(){var d="qx.lang.Object";
qx.Class.define(d,{statics:{empty:function(g){{};

for(var h in g){if(g.hasOwnProperty(h)){delete g[h];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(y){{};
return y.__count__===0;
}:
function(F){{};

for(var G in F){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(n,o){{};
return n.__count__>=o;
}:
function(H,I){{};

if(I<=0){return true;
}var length=0;

for(var J in H){if((++length)>=I){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(v){{};
var x=[];
var w=this.getKeys(v);

for(var i=0,l=w.length;i<l;i++){x.push(v[w[i]]);
}return x;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(r,s){{};
return qx.lang.Object.mergeWith(r,s,false);
},merge:function(z,A){{};
var B=arguments.length;

for(var i=1;i<B;i++){qx.lang.Object.mergeWith(z,arguments[i]);
}return z;
},clone:function(j){{};
var k={};

for(var m in j){k[m]=j[m];
}return k;
},invert:function(C){{};
var D={};

for(var E in C){D[C[E].toString()]=E;
}return D;
},getKeyFromValue:function(a,b){{};

for(var c in a){if(a.hasOwnProperty(c)&&a[c]===b){return c;
}}return null;
},contains:function(e,f){{};
return this.getKeyFromValue(e,f)!==null;
},select:function(t,u){{};
return u[t];
},fromArray:function(p){{};
var q={};

for(var i=0,l=p.length;i<l;i++){{};
q[p[i].toString()]=true;
}return q;
}}});
})();
(function(){var m="emulated",k="native",j='"',h="qx.lang.Core",g="\\\\",f="\\\"",e="[object Error]";
qx.Class.define(h,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==e)?m:k,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?k:m,{"native":Array.prototype.indexOf,"emulated":function(z,A){if(A==null){A=0;
}else if(A<0){A=Math.max(0,this.length+A);
}
for(var i=A;i<this.length;i++){if(this[i]===z){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?k:m,{"native":Array.prototype.lastIndexOf,"emulated":function(n,o){if(o==null){o=this.length-1;
}else if(o<0){o=Math.max(0,this.length+o);
}
for(var i=o;i>=0;i--){if(this[i]===n){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?k:m,{"native":Array.prototype.forEach,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){B.call(C||window,D,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?k:m,{"native":Array.prototype.filter,"emulated":function(s,t){var u=[];
var l=this.length;

for(var i=0;i<l;i++){var v=this[i];

if(v!==undefined){if(s.call(t||window,v,i,this)){u.push(this[i]);
}}}return u;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?k:m,{"native":Array.prototype.map,"emulated":function(a,b){var c=[];
var l=this.length;

for(var i=0;i<l;i++){var d=this[i];

if(d!==undefined){c[i]=a.call(b||window,d,i,this);
}}return c;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?k:m,{"native":Array.prototype.some,"emulated":function(p,q){var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){if(p.call(q||window,r,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?k:m,{"native":Array.prototype.every,"emulated":function(w,x){var l=this.length;

for(var i=0;i<l;i++){var y=this[i];

if(y!==undefined){if(!w.call(x||window,y,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?k:m,{"native":String.prototype.quote,"emulated":function(){return j+this.replace(/\\/g,g).replace(/\"/g,f)+j;
}})}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var e="qx.event.type.Event";
qx.Class.define(e,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(a,b){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!a;
this._cancelable=!!b;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(c){if(c){var d=c;
}else{var d=qx.event.Pool.getInstance().getObject(this.constructor);
}d._type=this._type;
d._target=this._target;
d._currentTarget=this._currentTarget;
d._relatedTarget=this._relatedTarget;
d._originalTarget=this._originalTarget;
d._stopPropagation=this._stopPropagation;
d._bubbles=this._bubbles;
d._preventDefault=this._preventDefault;
d._cancelable=this._cancelable;
return d;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(h){this._type=h;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(g){this._eventPhase=g;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(m){this._target=m;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(k){this._currentTarget=k;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(i){this._originalTarget=i;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(l){this._bubbles=l;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(f){this._cancelable=f;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__data:null,__old:null,init:function(b,c,d){arguments.callee.base.call(this,false,d);
this.__data=b;
this.__old=c;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f.__data=this.__data;
f.__old=this.__old;
return f;
},getData:function(){return this.__data;
},getOldData:function(){return this.__old;
}},destruct:function(){this.__data=this.__old=null;
}});
})();
(function(){var A="get",z="",y="[",x="last",w="change",v="]",u=".",t="Number",s="String",r="set",P="deepBinding",O="item",N="reset",M="' (",L="Boolean",K=").",J=") to the object '",I="Integer",H="qx.data.SingleValueBinding",G="No event could be found for the property",E="PositiveNumber",F="Binding from '",C="PositiveInteger",D="Binding does not exist!",B="Date";
qx.Class.define(H,{statics:{DEBUG_ON:false,__bindings:{},bind:function(cE,cF,cG,cH,cI){var cS=this.__setUpTargetBinding(cE,cF,cG,cH,cI);
var cN=cF.split(u);
var cK=this.__checkForArrayInPropertyChain(cN);
var cR=[];
var cO=[];
var cP=[];
var cL=[];
var cM=cE;
for(var i=0;i<cN.length;i++){if(cK[i]!==z){cL.push(w);
}else{cL.push(this.__getEventNameForProperty(cM,cN[i]));
}cR[i]=cM;
if(i==cN.length-1){if(cK[i]!==z){var cV=cK[i]===x?cM.length-1:cK[i];
var cJ=cM.getItem(cV);
this.__setInitialValue(cJ,cG,cH,cI,cE);
cP[i]=this.__bindEventToProperty(cM,cL[i],cG,cH,cI,cK[i]);
}else{if(cN[i]!=null&&cM[A+qx.lang.String.firstUp(cN[i])]!=null){var cJ=cM[A+qx.lang.String.firstUp(cN[i])]();
this.__setInitialValue(cJ,cG,cH,cI,cE);
}cP[i]=this.__bindEventToProperty(cM,cL[i],cG,cH,cI);
}}else{var cT={index:i,propertyNames:cN,sources:cR,listenerIds:cP,arrayIndexValues:cK,targetObject:cG,targetPropertyChain:cH,options:cI,listeners:cO};
var cQ=qx.lang.Function.bind(this.__chainListener,this,cT);
cO.push(cQ);
cP[i]=cM.addListener(cL[i],cQ);
}if(cM[A+qx.lang.String.firstUp(cN[i])]==null){cM=null;
}else if(cK[i]!==z){cM=cM[A+qx.lang.String.firstUp(cN[i])](cK[i]);
}else{cM=cM[A+qx.lang.String.firstUp(cN[i])]();
}
if(!cM){break;
}}var cU={type:P,listenerIds:cP,sources:cR,targetListenerIds:cS.listenerIds,targets:cS.targets};
this.__storeBinding(cU,cE,cF,cG,cH);
return cU;
},__chainListener:function(cm){if(cm.options&&cm.options.onUpdate){cm.options.onUpdate(cm.sources[cm.index],cm.targetObject);
}for(var j=cm.index+1;j<cm.propertyNames.length;j++){var cq=cm.sources[j];
cm.sources[j]=null;

if(!cq){continue;
}cq.removeListenerById(cm.listenerIds[j]);
}var cq=cm.sources[cm.index];
for(var j=cm.index+1;j<cm.propertyNames.length;j++){if(cm.arrayIndexValues[j-1]!==z){cq=cq[A+qx.lang.String.firstUp(cm.propertyNames[j-1])](cm.arrayIndexValues[j-1]);
}else{cq=cq[A+qx.lang.String.firstUp(cm.propertyNames[j-1])]();
}cm.sources[j]=cq;
if(!cq){this.__resetTargetValue(cm.targetObject,cm.targetPropertyChain);
break;
}if(j==cm.propertyNames.length-1){if(qx.Class.implementsInterface(cq,qx.data.IListData)){var cr=cm.arrayIndexValues[j]===x?cq.length-1:cm.arrayIndexValues[j];
var co=cq.getItem(cr);
this.__setInitialValue(co,cm.targetObject,cm.targetPropertyChain,cm.options,cm.sources[cm.index]);
cm.listenerIds[j]=this.__bindEventToProperty(cq,w,cm.targetObject,cm.targetPropertyChain,cm.options,cm.arrayIndexValues[j]);
}else{if(cm.propertyNames[j]!=null&&cq[A+qx.lang.String.firstUp(cm.propertyNames[j])]!=null){var co=cq[A+qx.lang.String.firstUp(cm.propertyNames[j])]();
this.__setInitialValue(co,cm.targetObject,cm.targetPropertyChain,cm.options,cm.sources[cm.index]);
}var cp=this.__getEventNameForProperty(cq,cm.propertyNames[j]);
cm.listenerIds[j]=this.__bindEventToProperty(cq,cp,cm.targetObject,cm.targetPropertyChain,cm.options);
}}else{if(cm.listeners[j]==null){var cn=qx.lang.Function.bind(this.__chainListener,this,cm);
cm.listeners.push(cn);
}if(qx.Class.implementsInterface(cq,qx.data.IListData)){var cp=w;
}else{var cp=this.__getEventNameForProperty(cq,cm.propertyNames[j]);
}cm.listenerIds[j]=cq.addListener(cp,cm.listeners[j]);
}}},__setUpTargetBinding:function(bX,bY,ca,cb,cc){var cg=cb.split(u);
var ce=this.__checkForArrayInPropertyChain(cg);
var cl=[];
var ck=[];
var ci=[];
var ch=[];
var cf=ca;
for(var i=0;i<cg.length-1;i++){if(ce[i]!==z){ch.push(w);
}else{try{ch.push(this.__getEventNameForProperty(cf,cg[i]));
}catch(e){break;
}}cl[i]=cf;
var cj=function(){for(var j=i+1;j<cg.length-1;j++){var bF=cl[j];
cl[j]=null;

if(!bF){continue;
}bF.removeListenerById(ci[j]);
}var bF=cl[i];
for(var j=i+1;j<cg.length-1;j++){var bD=qx.lang.String.firstUp(cg[j-1]);
if(ce[j-1]!==z){var bG=ce[j-1]===x?bF.getLength()-1:ce[j-1];
bF=bF[A+bD](bG);
}else{bF=bF[A+bD]();
}cl[j]=bF;
if(ck[j]==null){ck.push(cj);
}if(qx.Class.implementsInterface(bF,qx.data.IListData)){var bE=w;
}else{try{var bE=qx.data.SingleValueBinding.__getEventNameForProperty(bF,cg[j]);
}catch(e){break;
}}ci[j]=bF.addListener(bE,ck[j]);
}qx.data.SingleValueBinding.__updateTarget(bX,bY,ca,cb);
};
ck.push(cj);
ci[i]=cf.addListener(ch[i],cj);
var cd=qx.lang.String.firstUp(cg[i]);
if(cf[A+cd]==null){cf=null;
}else if(ce[i]!==z){cf=cf[A+cd](ce[i]);
}else{cf=cf[A+cd]();
}
if(!cf){break;
}}return {listenerIds:ci,targets:cl};
},__updateTarget:function(f,g,h,k){var o=this.__getTargetFromChain(f,g);

if(o!=null){var q=g.substring(g.lastIndexOf(u)+1,g.length);
if(q.charAt(q.length-1)==v){var l=q.substring(q.lastIndexOf(y)+1,q.length-1);
var n=q.substring(0,q.lastIndexOf(y));
var p=o[A+qx.lang.String.firstUp(n)]();

if(l==x){l=p.length-1;
}
if(p!=null){var m=p.getItem(l);
}}else{var m=o[A+qx.lang.String.firstUp(q)]();
}}this.__setTargetValue(h,k,m);
},__getEventNameForProperty:function(Q,R){var S=this.__getEventForProperty(Q,R);
if(S==null){if(qx.Class.supportsEvent(Q.constructor,R)){S=R;
}else if(qx.Class.supportsEvent(Q.constructor,w+qx.lang.String.firstUp(R))){S=w+qx.lang.String.firstUp(R);
}else{throw new qx.core.AssertionError(G,R);
}}return S;
},__resetTargetValue:function(bw,bx){var by=this.__getTargetFromChain(bw,bx);

if(by!=null){var bz=bx.substring(bx.lastIndexOf(u)+1,bx.length);
if(bz.charAt(bz.length-1)==v){this.__setTargetValue(bw,bx,null);
return;
}if(by[N+qx.lang.String.firstUp(bz)]!=undefined){by[N+qx.lang.String.firstUp(bz)]();
}else{by[r+qx.lang.String.firstUp(bz)](null);
}}},__setTargetValue:function(bM,bN,bO){var bS=this.__getTargetFromChain(bM,bN);

if(bS!=null){var bT=bN.substring(bN.lastIndexOf(u)+1,bN.length);
if(bT.charAt(bT.length-1)==v){var bP=bT.substring(bT.lastIndexOf(y)+1,bT.length-1);
var bR=bT.substring(0,bT.lastIndexOf(y));
var bQ=bS[A+qx.lang.String.firstUp(bR)]();

if(bP==x){bP=bQ.length-1;
}
if(bQ!=null){bQ.setItem(bP,bO);
}}else{bS[r+qx.lang.String.firstUp(bT)](bO);
}}},__getTargetFromChain:function(bq,br){var bu=br.split(u);
var bv=bq;
for(var i=0;i<bu.length-1;i++){try{var bt=bu[i];
if(bt.indexOf(v)==bt.length-1){var bs=bt.substring(bt.indexOf(y)+1,bt.length-1);
bt=bt.substring(0,bt.indexOf(y));
}bv=bv[A+qx.lang.String.firstUp(bt)]();

if(bs!=null){if(bs==x){bs=bv.length-1;
}bv=bv.getItem(bs);
bs=null;
}}catch(bC){return null;
}}return bv;
},__setInitialValue:function(bH,bI,bJ,bK,bL){bH=this.__convertValue(bH,bI,bJ,bK);
if(bH==null){this.__resetTargetValue(bI,bJ);
}if(bH!=undefined){try{this.__setTargetValue(bI,bJ,bH);
if(bK&&bK.onUpdate){bK.onUpdate(bL,bI,bH);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bK&&bK.onSetFail){bK.onSetFail(e);
}else{this.warn("Failed so set value "+bH+" on "+bI+". Error message: "+e);
}}}},__checkForArrayInPropertyChain:function(bU){var bV=[];
for(var i=0;i<bU.length;i++){var name=bU[i];
if(qx.lang.String.endsWith(name,v)){var bW=name.substring(name.indexOf(y)+1,name.indexOf(v));
if(name.indexOf(v)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bW!==x){if(bW==z||isNaN(parseInt(bW))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(y)!=0){bU[i]=name.substring(0,name.indexOf(y));
bV[i]=z;
bV[i+1]=bW;
bU.splice(i+1,0,O);
i++;
}else{bV[i]=bW;
bU.splice(i,1,O);
}}else{bV[i]=z;
}}return bV;
},__bindEventToProperty:function(cu,cv,cw,cx,cy,cz){var cA;
{};
var cC=function(bj,e){if(bj!==z){if(bj===x){bj=cu.length-1;
}var bm=cu.getItem(bj);
if(bm==undefined){qx.data.SingleValueBinding.__resetTargetValue(cw,cx);
}var bk=e.getData().start;
var bl=e.getData().end;

if(bj<bk||bj>bl){return;
}}else{var bm=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cu+" by "+cv+" to "+cw+" ("+cx+")");
qx.log.Logger.debug("Data before conversion: "+bm);
}bm=qx.data.SingleValueBinding.__convertValue(bm,cw,cx,cy);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+bm);
}try{if(bm!=undefined){qx.data.SingleValueBinding.__setTargetValue(cw,cx,bm);
}else{qx.data.SingleValueBinding.__resetTargetValue(cw,cx);
}if(cy&&cy.onUpdate){cy.onUpdate(cu,cw,bm);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cy&&cy.onSetFail){cy.onSetFail(e);
}else{this.warn("Failed so set value "+bm+" on "+cw+". Error message: "+e);
}}};
if(!cz){cz=z;
}cC=qx.lang.Function.bind(cC,cu,cz);
var cB=cu.addListener(cv,cC);
return cB;
},__storeBinding:function(cW,cX,cY,da,db){if(this.__bindings[cX.toHashCode()]===undefined){this.__bindings[cX.toHashCode()]=[];
}this.__bindings[cX.toHashCode()].push([cW,cX,cY,da,db]);
},__convertValue:function(T,U,V,W){if(W&&W.converter){var Y;

if(U.getModel){Y=U.getModel();
}return W.converter(T,Y);
}else{var bb=this.__getTargetFromChain(U,V);
var bc=V.substring(V.lastIndexOf(u)+1,V.length);
if(bb==null){return T;
}var ba=qx.Class.getPropertyDefinition(bb.constructor,bc);
var X=ba==null?z:ba.check;
return this.__defaultConvertion(T,X);
}},__getEventForProperty:function(bn,bo){var bp=qx.Class.getPropertyDefinition(bn.constructor,bo);

if(bp==null){return null;
}return bp.event;
},__defaultConvertion:function(bg,bh){var bi=qx.lang.Type.getClass(bg);
if((bi==t||bi==s)&&(bh==I||bh==C)){bg=parseInt(bg);
}if((bi==L||bi==t||bi==B)&&bh==s){bg=bg+z;
}if((bi==t||bi==s)&&(bh==t||bh==E)){bg=parseFloat(bg);
}return bg;
},removeBindingFromObject:function(bd,be){if(be.type==P){for(var i=0;i<be.sources.length;i++){if(be.sources[i]){be.sources[i].removeListenerById(be.listenerIds[i]);
}}for(var i=0;i<be.targets.length;i++){if(be.targets[i]){be.targets[i].removeListenerById(be.targetListenerIds[i]);
}}}else{bd.removeListenerById(be);
}var bf=this.__bindings[bd.toHashCode()];
if(bf!=undefined){for(var i=0;i<bf.length;i++){if(bf[i][0]==be){qx.lang.Array.remove(bf,bf[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bA){{};
var bB=this.__bindings[bA.toHashCode()];

if(bB!=undefined){for(var i=bB.length-1;i>=0;i--){this.removeBindingFromObject(bA,bB[i][0]);
}}},getAllBindingsForObject:function(cD){if(this.__bindings[cD.toHashCode()]===undefined){this.__bindings[cD.toHashCode()]=[];
}return this.__bindings[cD.toHashCode()];
},removeAllBindings:function(){for(var ct in this.__bindings){var cs=qx.core.ObjectRegistry.fromHashCode(ct);
if(cs==null){delete this.__bindings[ct];
continue;
}this.removeAllBindingsForObject(cs);
}this.__bindings={};
},getAllBindings:function(){return this.__bindings;
},showBindingInLog:function(a,b){var d;
for(var i=0;i<this.__bindings[a.toHashCode()].length;i++){if(this.__bindings[a.toHashCode()][i][0]==b){d=this.__bindings[a.toHashCode()][i];
break;
}}
if(d===undefined){var c=D;
}else{var c=F+d[1]+M+d[2]+J+d[3]+M+d[4]+K;
}qx.log.Logger.debug(c);
},showAllBindingsInLog:function(){for(var dd in this.__bindings){var dc=qx.core.ObjectRegistry.fromHashCode(dd);

for(var i=0;i<this.__bindings[dd].length;i++){this.showBindingInLog(dc,this.__bindings[dd][i][0]);
}}}}});
})();
(function(){var o="",n="g",m="0",l='\\$1',k="%",j='-',h="qx.lang.String",g=' ',f='\n',e="undefined";
qx.Class.define(h,{statics:{camelCase:function(H){return H.replace(/\-([a-z])/g,function(x,y){return y.toUpperCase();
});
},hyphenate:function(E){return E.replace(/[A-Z]/g,function(Q){return (j+Q.charAt(0).toLowerCase());
});
},capitalize:function(c){return c.replace(/\b[a-z]/g,function(F){return F.toUpperCase();
});
},clean:function(r){return this.trim(r.replace(/\s+/g,g));
},trimLeft:function(p){return p.replace(/^\s+/,o);
},trimRight:function(G){return G.replace(/\s+$/,o);
},trim:function(I){return I.replace(/^\s+|\s+$/g,o);
},startsWith:function(C,D){return C.indexOf(D)===0;
},endsWith:function(s,t){return s.substring(s.length-t.length,s.length)===t;
},repeat:function(a,b){return a.length>=0?new Array(b+1).join(a):o;
},pad:function(u,length,v){var w=length-u.length;

if(w>0){if(typeof v===e){v=m;
}return this.repeat(v,w)+u;
}else{return u;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(J,K){return J.indexOf(K)!=-1;
},format:function(z,A){var B=z;

for(var i=0;i<A.length;i++){B=B.replace(new RegExp(k+(i+1),n),A[i]);
}return B;
},escapeRegexpChars:function(d){return d.replace(/([.*+?^${}()|[\]\/\\])/g,l);
},toArray:function(q){return q.split(/\B|\b/g);
},stripTags:function(L){return L.replace(/<\/?[^>]+>/gi,o);
},stripScripts:function(M,N){var P=o;
var O=M.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){P+=arguments[1]+f;
return o;
});

if(N===true){qx.lang.Function.globalEval(P);
}return O;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(f,g){},splice:function(h,i,j){},contains:function(e){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Class.define(a,{statics:{setErrorHandler:function(h,i){this.__callback=h||null;
this.__context=i||window;

if(qx.core.Setting.get(c)===b){if(h&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__onErrorWindow,this);
}
if(!h&&window.onerror){window.onerror=null;
}}},__onErrorWindow:function(d,e,f){if(this.__callback){this.handleError(new qx.core.WindowError(d,e,f));
return true;
}},observeMethod:function(g){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__callback){return g.apply(this,arguments);
}
try{return g.apply(this,arguments);
}catch(k){self.handleError(new qx.core.GlobalError(k,arguments));
}};
}else{return g;
}},handleError:function(l){if(this.__callback){this.__callback.call(this.__context,l);
}}},defer:function(j){qx.core.Setting.define(c,b);
j.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__failMessage=c;
this.__uri=d||b;
this.__lineNumber=e===undefined?-1:e;
},members:{__failMessage:null,__uri:null,__lineNumber:null,toString:function(){return this.__failMessage;
},getUri:function(){return this.__uri;
},getLineNumber:function(){return this.__lineNumber;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Class.define(a,{extend:Error,construct:function(c,d){{};
this.__failMessage=b+(c&&c.message?c.message:c);
Error.call(this,this.__failMessage);
this.__arguments=d;
this.__exc=c;
},members:{__exc:null,__arguments:null,__failMessage:null,toString:function(){return this.__failMessage;
},getArguments:function(){return this.__arguments;
},getSourceException:function(){return this.__exc;
}},destruct:function(){this.__exc=null;
this.__arguments=null;
this.__failMessage=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__comment=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__comment:null,message:null,getComment:function(){return this.__comment;
},toString:function(){return this.__comment+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__trace=qx.dev.StackTrace.getStackTrace();
},members:{__trace:null,getStackTrace:function(){return this.__trace;
}}});
})();
(function(){var j=":",h="qx.client",g="anonymous",f="...",e="qx.dev.StackTrace",d="",c="\n",b="/source/class/",a=".";
qx.Class.define(e,{statics:{getStackTrace:qx.core.Variant.select(h,{"gecko":function(){try{throw new Error();
}catch(U){var y=this.getStackTraceFromError(U);
qx.lang.Array.removeAt(y,0);
var w=this.getStackTraceFromCaller(arguments);
var u=w.length>y.length?w:y;

for(var i=0;i<Math.min(w.length,y.length);i++){var v=w[i];

if(v.indexOf(g)>=0){continue;
}var C=v.split(j);

if(C.length!=2){continue;
}var A=C[0];
var t=C[1];
var s=y[i];
var D=s.split(j);
var z=D[0];
var r=D[1];

if(qx.Class.getByName(z)){var x=z;
}else{x=A;
}var B=x+j;

if(t){B+=t+j;
}B+=r;
u[i]=B;
}return u;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var S;

try{S.bar();
}catch(F){var T=this.getStackTraceFromError(F);
qx.lang.Array.removeAt(T,0);
return T;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(h,{"opera":function(E){return [];
},"default":function(G){var L=[];
var K=qx.lang.Function.getCaller(G);
var H={};

while(K){var I=qx.lang.Function.getName(K);
L.push(I);

try{K=K.caller;
}catch(R){break;
}
if(!K){break;
}var J=qx.core.ObjectRegistry.toHashCode(K);

if(H[J]){L.push(f);
break;
}H[J]=K;
}return L;
}}),getStackTraceFromError:qx.core.Variant.select(h,{"gecko":function(V){if(!V.stack){return [];
}var bc=/@(.+):(\d+)$/gm;
var W;
var X=[];

while((W=bc.exec(V.stack))!=null){var Y=W[1];
var bb=W[2];
var ba=this.__fileNameToClassName(Y);
X.push(ba+j+bb);
}return X;
},"webkit":function(M){if(M.sourceURL&&M.line){return [this.__fileNameToClassName(M.sourceURL)+j+M.line];
}else{return [];
}},"opera":function(k){if(k.message.indexOf("Backtrace:")<0){return [];
}var m=[];
var n=qx.lang.String.trim(k.message.split("Backtrace:")[1]);
var o=n.split(c);

for(var i=0;i<o.length;i++){var l=o[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(l&&l.length>=2){var q=l[1];
var p=this.__fileNameToClassName(l[2]);
m.push(p+j+q);
}}return m;
},"default":function(){return [];
}}),__fileNameToClassName:function(N){var Q=b;
var O=N.indexOf(Q);
var P=(O==-1)?N:N.substring(O+Q.length).replace(/\//g,a).replace(/\.js$/,d);
return P;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var g="qx.lang.Type",f="Error",e="RegExp",d="Date",c="Number",b="Boolean";
qx.Class.define(g,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==e;
},isNumber:function(a){return (a!==null&&(this.getClass(a)==c||a instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==b||i instanceof Boolean));
},isDate:function(h){return (h!==null&&(this.getClass(h)==d||h instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==f||j instanceof Error));
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(e,f){},registerEvent:function(b,c,d){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(f){arguments.callee.base.call(this);
this.__pool={};

if(f!=null){this.setSize(f);
}},properties:{size:{check:a,init:Infinity}},members:{__pool:null,getObject:function(g){if(this.$$disposed){return;
}
if(!g){throw new Error("Class needs to be defined!");
}var h=null;
var j=this.__pool[g.classname];

if(j){h=j.pop();
}
if(h){h.$$pooled=false;
}else{h=new g;
}return h;
},poolObject:function(k){if(!this.__pool){return;
}var m=k.classname;
var n=this.__pool[m];

if(k.$$pooled){throw new Error("Object is already pooled: "+k);
}
if(!n){this.__pool[m]=n=[];
}if(n.length>this.getSize()){if(k.destroy){k.destroy();
}else{k.dispose();
}return;
}k.$$pooled=true;
n.push(k);
}},destruct:function(){var e=this.__pool;
var c,d,i,l;

for(c in e){d=e[c];

for(i=0,l=d.length;i<l;i++){d[i].dispose();
}}delete this.__pool;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var e="qx.util.DisposeUtil";
qx.Class.define(e,{statics:{disposeFields:function(j,k){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=k.length;i<l;i++){var name=k[i];

if(j[name]==null||!j.hasOwnProperty(name)){continue;
}j[name]=null;
}},disposeObjects:function(m,n){var name;

for(var i=0,l=n.length;i<l;i++){name=n[i];

if(m[name]==null||!m.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(m[name].dispose){m[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}m[name]=null;
}},disposeArray:function(q,r){var t=q[r];

if(!t){return;
}if(qx.core.ObjectRegistry.inShutDown){q[r]=null;
return;
}try{var s;

for(var i=t.length-1;i>=0;i--){s=t[i];

if(s){s.dispose();
}}}catch(o){throw new Error("The array field: "+r+" of object: "+q+" has non disposable entries: "+o);
}t.length=0;
q[r]=null;
},disposeMap:function(a,b){var c=a[b];

if(!c){return;
}if(qx.core.ObjectRegistry.inShutDown){a[b]=null;
return;
}try{for(var d in c){if(c.hasOwnProperty(d)){c[d].dispose();
}}}catch(p){throw new Error("The map field: "+b+" of object: "+a+" has non disposable entries: "+p);
}a[b]=null;
},disposeTriggeredBy:function(f,g){var h=g.dispose;
g.dispose=function(){h.call(g);
f.dispose();
};
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(d){this._manager=d;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(b,event,c){return !event.getBubbles();
},dispatchEvent:function(f,event,g){var k,h;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var m=this._manager.getListeners(f,g,false);

if(m){for(var i=0,l=m.length;i<l;i++){var j=m[i].context||f;
m[i].handler.call(j,event);
}}}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var c="qx.event.handler.Object";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(a,b){return qx.Class.supportsEvent(a.constructor,b);
},registerEvent:function(h,i,j){},unregisterEvent:function(d,e,f){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var q="indexOf",p="lastIndexOf",o="slice",n="concat",m="join",k="toLocaleUpperCase",j="shift",h="substr",g="filter",f="unshift",N="match",M="quote",L="qx.lang.Generics",K="localeCompare",J="sort",I="some",H="charAt",G="split",F="substring",E="pop",y="toUpperCase",z="replace",w="push",x="charCodeAt",u="every",v="reverse",r="search",t="forEach",A="map",B="toLowerCase",D="splice",C="toLocaleLowerCase";
qx.Class.define(L,{statics:{__map:{"Array":[m,v,J,w,E,j,f,D,n,o,q,p,t,A,g,I,u],"String":[M,F,B,y,H,x,q,p,C,k,K,N,r,z,G,h,n,o]},__wrap:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__init:function(){var a=qx.lang.Generics.__map;

for(var e in a){var c=window[e];
var b=a[e];

for(var i=0,l=b.length;i<l;i++){var d=b[i];

if(!c[d]){c[d]=qx.lang.Generics.__wrap(c,d);
}}}}},defer:function(O){O.__init();
}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(e){return this._dynamic[e];
},isDynamic:function(f){return !!this._dynamic[f];
},resolve:function(c){if(c&&this._dynamic[c]){return this._dynamic[c];
}return c;
},_setDynamic:function(d){this._dynamic=d;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__aliases={};
this.add(a,h);
},members:{__aliases:null,_preprocess:function(r){var u=this._getDynamic();

if(u[r]===false){return r;
}else if(u[r]===undefined){if(r.charAt(0)===j||r.charAt(0)===b||r.indexOf(g)===0||r.indexOf(f)===i||r.indexOf(e)===0){u[r]=false;
return r;
}
if(this.__aliases[r]){return this.__aliases[r];
}var t=r.substring(0,r.indexOf(j));
var s=this.__aliases[t];

if(s!==undefined){u[r]=s+r.substring(t.length);
}}return r;
},add:function(n,o){this.__aliases[n]=o;
var q=this._getDynamic();
for(var p in q){if(p.substring(0,p.indexOf(j))===n){q[p]=o+p.substring(n.length);
}}},remove:function(m){delete this.__aliases[m];
},resolve:function(k){var l=this._getDynamic();

if(k!==null){k=this._preprocess(k);
}return l[k]||k;
}},destruct:function(){this.__aliases=null;
}});
})();
(function(){var p="px",o="qx.client",n="div",m="img",l="",k="no-repeat",j="scale-x",i="mshtml",h="scale",g="scale-y",K="qx/icon",J="repeat",I=".png",H="crop",G="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",F='<div style="',E="repeat-y",D='<img src="',C="qx.bom.element.Decoration",B="', sizingMethod='",w="png",x="')",u='"></div>',v='"/>',s='" style="',t="none",q="webkit",r=" ",y="repeat-x",z="DXImageTransform.Microsoft.AlphaImageLoader",A="absolute";
qx.Class.define(C,{statics:{DEBUG:false,__warnings:{},__enableAlphaFix:qx.core.Variant.isSet(o,i),__alphaFixRepeats:qx.core.Variant.select(o,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__repeatToTagname:{"scale-x":m,"scale-y":m,"scale":m,"repeat":n,"no-repeat":n,"repeat-x":n,"repeat-y":n},update:function(bs,bt,bu,bv){var bx=this.getTagName(bu,bt);

if(bx!=bs.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var by=this.getAttributes(bt,bu,bv);

if(bx===m){bs.src=by.src;
}if(bs.style.backgroundPosition!=l&&by.style.backgroundPosition===undefined){by.style.backgroundPosition=null;
}if(bs.style.clip!=l&&by.style.clip===undefined){by.style.clip=null;
}var bw=qx.bom.element.Style;
bw.setStyles(bs,by.style);
if(this.__enableAlphaFix){try{bs.filters[z].apply();
}catch(e){}}},create:function(L,M,N){var O=this.getTagName(M,L);
var Q=this.getAttributes(L,M,N);
var P=qx.bom.element.Style.compile(Q.style);

if(O===m){return D+Q.src+s+P+v;
}else{return F+P+u;
}},getTagName:function(bP,bQ){if(qx.core.Variant.isSet(o,i)){if(bQ&&this.__enableAlphaFix&&this.__alphaFixRepeats[bP]&&qx.lang.String.endsWith(bQ,I)){return n;
}}return this.__repeatToTagname[bP];
},getAttributes:function(bU,bV,bW){if(!bW){bW={};
}
if(!bW.position){bW.position=A;
}
if(qx.core.Variant.isSet(o,i)){bW.fontSize=0;
bW.lineHeight=0;
}else if(qx.core.Variant.isSet(o,q)){bW.WebkitUserDrag=t;
}var bY=qx.util.ResourceManager.getInstance().getImageFormat(bU)||qx.io.ImageLoader.getFormat(bU);
{};
var bX;
if(this.__enableAlphaFix&&this.__alphaFixRepeats[bV]&&bY===w){bX=this.__processAlphaFix(bW,bV,bU);
}else{if(bV===h){bX=this.__processScale(bW,bV,bU);
}else if(bV===j||bV===g){bX=this.__processScaleXScaleY(bW,bV,bU);
}else{bX=this.__processRepeats(bW,bV,bU);
}}return bX;
},__normalizeWidthHeight:function(bR,bS,bT){if(bR.width==null&&bS!=null){bR.width=bS+p;
}
if(bR.height==null&&bT!=null){bR.height=bT+p;
}return bR;
},__getDimension:function(S){var T=qx.util.ResourceManager.getInstance().getImageWidth(S)||qx.io.ImageLoader.getWidth(S);
var U=qx.util.ResourceManager.getInstance().getImageHeight(S)||qx.io.ImageLoader.getHeight(S);
return {width:T,height:U};
},__processAlphaFix:function(bm,bn,bo){var br=this.__getDimension(bo);
bm=this.__normalizeWidthHeight(bm,br.width,br.height);
var bq=bn==k?H:h;
var bp=G+qx.util.ResourceManager.getInstance().toUri(bo)+B+bq+x;
bm.filter=bp;
bm.backgroundImage=bm.backgroundRepeat=l;
return {style:bm};
},__processScale:function(a,b,c){var d=qx.util.ResourceManager.getInstance().toUri(c);
var f=this.__getDimension(c);
a=this.__normalizeWidthHeight(a,f.width,f.height);
return {src:d,style:a};
},__processScaleXScaleY:function(bz,bA,bB){var bF=qx.util.ResourceManager.getInstance();
var bE=bF.isClippedImage(bB);
var bG=this.__getDimension(bB);

if(bE){var bD=bF.getData(bB);
var bC=bF.toUri(bD[4]);

if(bA===j){bz=this.__getStylesForClippedScaleX(bz,bD,bG.height);
}else{bz=this.__getStylesForClippedScaleY(bz,bD,bG.width);
}return {src:bC,style:bz};
}else{{};

if(bA==j){bz.height=bG.height==null?null:bG.height+p;
}else if(bA==g){bz.width=bG.width==null?null:bG.width+p;
}var bC=bF.toUri(bB);
return {src:bC,style:bz};
}},__getStylesForClippedScaleX:function(V,W,X){var Y=qx.util.ResourceManager.getInstance().getImageHeight(W[4]);
V.clip={top:-W[6],height:X};
V.height=Y+p;
if(V.top!=null){V.top=(parseInt(V.top,10)+W[6])+p;
}else if(V.bottom!=null){V.bottom=(parseInt(V.bottom,10)+X-Y-W[6])+p;
}return V;
},__getStylesForClippedScaleY:function(ba,bb,bc){var bd=qx.util.ResourceManager.getInstance().getImageWidth(bb[4]);
ba.clip={left:-bb[5],width:bc};
ba.width=bd+p;
if(ba.left!=null){ba.left=(parseInt(ba.left,10)+bb[5])+p;
}else if(ba.right!=null){ba.right=(parseInt(ba.right,10)+bc-bd-bb[5])+p;
}return ba;
},__processRepeats:function(bH,bI,bJ){var bO=qx.util.ResourceManager.getInstance().isClippedImage(bJ);
var bN=this.__getDimension(bJ);
if(bO&&bI!==J){var bM=qx.util.ResourceManager.getInstance().getData(bJ);
var bL=qx.bom.element.Background.getStyles(bM[4],bI,bM[5],bM[6]);

for(var bK in bL){bH[bK]=bL[bK];
}
if(bN.width!=null&&bH.width==null&&(bI==E||bI===k)){bH.width=bN.width+p;
}
if(bN.height!=null&&bH.height==null&&(bI==y||bI===k)){bH.height=bN.height+p;
}return {style:bH};
}else{{};
bH=this.__normalizeWidthHeight(bH,bN.width,bN.height);
bH=this.__getStylesForSingleRepeat(bH,bJ,bI);
return {style:bH};
}},__getStylesForSingleRepeat:function(be,bf,bh){var top=null;
var bl=null;

if(be.backgroundPosition){var bi=be.backgroundPosition.split(r);
bl=parseInt(bi[0]);

if(isNaN(bl)){bl=bi[0];
}top=parseInt(bi[1]);

if(isNaN(top)){top=bi[1];
}}var bk=qx.bom.element.Background.getStyles(bf,bh,bl,top);

for(var bj in bk){be[bj]=bk[bj];
}if(be.filter){be.filter=l;
}return be;
},__checkForPotentialClippedImage:function(R){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(R)&&R.indexOf(K)==-1){if(!this.__warnings[R]){qx.log.Logger.debug("Potential clipped image candidate: "+R);
this.__warnings[R]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(o,{"mshtml":function(){return qx.bom.element.Decoration.__enableAlphaFix;
},"default":function(){return false;
}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(F){if(!F){return k;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?n:J+m);
K=n;
}else{G=(J==null?n:K+J+m);
K=K+m;
}
if(top==null){H=(I==null?n:I+m);
top=n;
}else{H=(I==null?n:top+I+m);
top=top+m;
}return d+top+l+G+l+H+l+K+i;
},get:function(o,p){var r=qx.bom.element.Style.get(o,c,p,false);
var w,top,u,t;
var q,s;

if(typeof r===e&&r!==n&&r!==h){r=qx.lang.String.trim(r);
if(/\((.*)\)/.test(r)){var v=RegExp.$1.split(l);
top=qx.lang.String.trim(v[0]);
q=qx.lang.String.trim(v[1]);
s=qx.lang.String.trim(v[2]);
w=qx.lang.String.trim(v[3]);
if(w===n){w=null;
}
if(top===n){top=null;
}
if(q===n){q=null;
}
if(s===n){s=null;
}if(top!=null){top=parseInt(top,10);
}
if(q!=null){q=parseInt(q,10);
}
if(s!=null){s=parseInt(s,10);
}
if(w!=null){w=parseInt(w,10);
}if(q!=null&&w!=null){u=q-w;
}else if(q!=null){u=q;
}
if(s!=null&&top!=null){t=s-top;
}else if(s!=null){t=s;
}}else{throw new Error("Could not parse clip string: "+r);
}}return {left:w||null,top:top||null,width:u||null,height:t||null};
},set:function(y,z){if(!z){y.style.clip=a;
return;
}var E=z.left;
var top=z.top;
var D=z.width;
var C=z.height;
var A,B;

if(E==null){A=(D==null?n:D+m);
E=n;
}else{A=(D==null?n:E+D+m);
E=E+m;
}
if(top==null){B=(C==null?n:C+m);
top=n;
}else{B=(C==null?n:top+C+m);
top=top+m;
}y.style.clip=j+top+l+A+l+B+l+E+g;
},reset:function(x){x.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__map:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(q){return f+(this.__map[q]||q)+d;
},get:function(o,p){return qx.bom.element.Style.get(o,b,p,false);
},set:function(l,m){l.style.cursor=this.__map[m]||m;
},reset:function(n){n.style.cursor=g;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(D){if(D>=1){return m;
}
if(D<0.00001){D=0;
}return d+(D*100)+f;
},"gecko":function(v){if(v==1){v=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+v+k;
}else{return i+v+k;
}},"default":function(u){if(u==1){return m;
}return i+u+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(r,s){var t=qx.bom.element.Style.get(r,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(s>=1){r.style.filter=t.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(s<0.00001){s=0;
}if(!r.currentStyle||!r.currentStyle.hasLayout){r.style.zoom=1;
}r.style.filter=t.replace(/alpha\([^\)]*\)/gi,m)+c+s*100+e;
},"gecko":function(I,J){if(J==1){J=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){I.style.MozOpacity=J;
}else{I.style.opacity=J;
}},"default":function(E,F){if(F==1){F=m;
}E.style.opacity=F;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(G){var H=qx.bom.element.Style.get(G,j,qx.bom.element.Style.COMPUTED_MODE,false);
G.style.filter=H.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(n){if(qx.bom.client.Engine.VERSION<1.7){n.style.MozOpacity=m;
}else{n.style.opacity=m;
}},"default":function(K){K.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(w,x){var y=qx.bom.element.Style.get(w,j,x,false);

if(y){var z=y.match(/alpha\(opacity=(.*)\)/);

if(z&&z[1]){return parseFloat(z[1])/100;
}}return 1.0;
},"gecko":function(A,B){var C=qx.bom.element.Style.get(A,qx.bom.client.Engine.VERSION<1.7?g:h,B,false);

if(C==0.999999){C=1.0;
}
if(C!=null){return parseFloat(C);
}return 1.0;
},"default":function(o,p){var q=qx.bom.element.Style.get(o,h,p,false);

if(q!=null){return parseFloat(q);
}return 1.0;
}})}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__styleProperties:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__cssProperties:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__nativeBorderBox:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__usesNativeBorderBox:function(B){var C=this.__nativeBorderBox;
return C.tags[B.tagName.toLowerCase()]||C.types[B.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(x){{};
},"default":function(y){var A=this.__cssProperties;
var z=p;

if(A){for(var i=0,l=A.length;i<l;i++){z+=A[i]+m+y+c;
}}return z;
}}),get:qx.core.Variant.select(q,{"mshtml":function(r){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(r))){if(!this.__usesNativeBorderBox(r)){return d;
}}return k;
},"default":function(u){var w=this.__styleProperties;
var v;

if(w){for(var i=0,l=w.length;i<l;i++){v=qx.bom.element.Style.get(u,w[i],null,false);

if(v!=null&&v!==p){return v;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(s,t){{};
},"default":function(E,F){var G=this.__styleProperties;

if(G){for(var i=0,l=G.length;i<l;i++){E.style[G[i]]=F;
}}}}),reset:function(D){this.set(D,p);
}}});
})();
(function(){var bL="",bK="qx.client",bJ="hidden",bI="-moz-scrollbars-none",bH="overflow",bG=";",bF="overflowY",bE=":",bD="overflowX",bC="overflow:",bX="none",bW="scroll",bV="borderLeftStyle",bU="borderRightStyle",bT="div",bS="borderRightWidth",bR="overflow-y",bQ="borderLeftWidth",bP="-moz-scrollbars-vertical",bO="100px",bM="qx.bom.element.Overflow",bN="overflow-x";
qx.Class.define(bM,{statics:{__scrollbarSize:null,getScrollbarWidth:function(){if(this.__scrollbarSize!==null){return this.__scrollbarSize;
}var bs=qx.bom.element.Style;
var bu=function(bf,bg){return parseInt(bs.get(bf,bg))||0;
};
var bv=function(bl){return (bs.get(bl,bU)==bX?0:bu(bl,bS));
};
var bt=function(bm){return (bs.get(bm,bV)==bX?0:bu(bm,bQ));
};
var bx=qx.core.Variant.select(bK,{"mshtml":function(k){if(bs.get(k,bF)==bJ||k.clientWidth==0){return bv(k);
}return Math.max(0,k.offsetWidth-k.clientLeft-k.clientWidth);
},"default":function(H){if(H.clientWidth==0){var I=bs.get(H,bH);
var J=(I==bW||I==bP?16:0);
return Math.max(0,bv(H)+J);
}return Math.max(0,(H.offsetWidth-H.clientWidth-bt(H)));
}});
var bw=function(bi){return bx(bi)-bv(bi);
};
var t=document.createElement(bT);
var s=t.style;
s.height=s.width=bO;
s.overflow=bW;
document.body.appendChild(t);
var c=bw(t);
this.__scrollbarSize=c?c:16;
document.body.removeChild(t);
return this.__scrollbarSize;
},_compile:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(T,U){if(U==bJ){U=bI;
}return bC+U+bG;
}:
function(e,f){return e+bE+f+bG;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(l,m){return bC+m+bG;
}:
function(ca,cb){return ca+bE+cb+bG;
},"default":function(ce,cf){return ce+bE+cf+bG;
}}),compileX:function(bh){return this._compile(bN,bh);
},compileY:function(G){return this._compile(bR,G);
},getX:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(M,N){var O=qx.bom.element.Style.get(M,bH,N,false);

if(O===bI){O=bJ;
}return O;
}:
function(w,x){return qx.bom.element.Style.get(w,bD,x,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bd,be){return qx.bom.element.Style.get(bd,bH,be,false);
}:
function(P,Q){return qx.bom.element.Style.get(P,bD,Q,false);
},"default":function(y,z){return qx.bom.element.Style.get(y,bD,z,false);
}}),setX:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bj,bk){if(bk==bJ){bk=bI;
}bj.style.overflow=bk;
}:
function(K,L){K.style.overflowX=L;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(g,h){g.style.overflow=h;
}:
function(bn,bo){bn.style.overflowX=bo;
},"default":function(C,D){C.style.overflowX=D;
}}),resetX:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(v){v.style.overflow=bL;
}:
function(bY){bY.style.overflowX=bL;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(i,j){i.style.overflow=bL;
}:
function(bA,bB){bA.style.overflowX=bL;
},"default":function(cd){cd.style.overflowX=bL;
}}),getY:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(ba,bb){var bc=qx.bom.element.Style.get(ba,bH,bb,false);

if(bc===bI){bc=bJ;
}return bc;
}:
function(n,o){return qx.bom.element.Style.get(n,bF,o,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bq,br){return qx.bom.element.Style.get(bq,bH,br,false);
}:
function(b,d){return qx.bom.element.Style.get(b,bF,d,false);
},"default":function(by,bz){return qx.bom.element.Style.get(by,bF,bz,false);
}}),setY:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(R,S){if(S===bJ){S=bI;
}R.style.overflow=S;
}:
function(X,Y){X.style.overflowY=Y;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(V,W){V.style.overflow=W;
}:
function(p,q){p.style.overflowY=q;
},"default":function(r,u){r.style.overflowY=u;
}}),resetY:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bp){bp.style.overflow=bL;
}:
function(cc){cc.style.overflowY=bL;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(E,F){E.style.overflow=bL;
}:
function(A,B){A.style.overflowY=bL;
},"default":function(a){a.style.overflowY=bL;
}})}});
})();
(function(){var j="",i="qx.client",h="user-select",g="userSelect",f="appearance",e="style",d="MozUserModify",c="px",b="-webkit-appearance",a="styleFloat",F="-webkit-user-select",E="-moz-appearance",D="pixelHeight",C="MozAppearance",B=":",A="pixelTop",z="pixelLeft",y="text-overflow",x="-moz-user-select",w="MozUserSelect",q="qx.bom.element.Style",r="-moz-user-modify",o="-webkit-user-modify",p="WebkitUserSelect",m="-o-text-overflow",n="pixelRight",k="cssFloat",l="pixelWidth",s="pixelBottom",t=";",v="WebkitUserModify",u="WebkitAppearance";
qx.Class.define(q,{statics:{__hints:{styleNames:{"float":qx.core.Variant.select(i,{"mshtml":a,"default":k}),"appearance":qx.core.Variant.select(i,{"gecko":C,"webkit":u,"default":f}),"userSelect":qx.core.Variant.select(i,{"gecko":w,"webkit":p,"default":g}),"userModify":qx.core.Variant.select(i,{"gecko":d,"webkit":v,"default":g})},cssNames:{"appearance":qx.core.Variant.select(i,{"gecko":E,"webkit":b,"default":f}),"userSelect":qx.core.Variant.select(i,{"gecko":x,"webkit":F,"default":h}),"userModify":qx.core.Variant.select(i,{"gecko":r,"webkit":o,"default":h}),"textOverflow":qx.core.Variant.select(i,{"opera":m,"default":y})},mshtmlPixel:{width:l,height:D,left:z,right:n,top:A,bottom:s},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__hyphens:{},compile:function(br){var bv=[];
var bz=this.__hints;
var by=bz.special;
var bw=bz.cssNames;
var bu=this.__hyphens;
var bx=qx.lang.String;
var name,bt,bs;

for(name in br){bs=br[name];

if(bs==null){continue;
}name=bw[name]||name;
if(by[name]){bv.push(by[name].compile(bs));
}else{bt=bu[name];

if(!bt){bt=bu[name]=bx.hyphenate(name);
}bv.push(bt,B,bs,t);
}}return bv.join(j);
},setCss:qx.core.Variant.select(i,{"mshtml":function(T,U){T.style.cssText=U;
},"default":function(bh,bi){bh.setAttribute(e,bi);
}}),getCss:qx.core.Variant.select(i,{"mshtml":function(bc){return bc.style.cssText.toLowerCase();
},"default":function(bd){return bd.getAttribute(e);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(P,name,Q,R){{};
var S=this.__hints;
name=S.styleNames[name]||name;
if(R!==false&&S.special[name]){return S.special[name].set(P,Q);
}else{P.style[name]=Q!==null?Q:j;
}},setStyles:function(G,H,I){{};
var O=this.__hints;
var L=O.styleNames;
var N=O.special;
var J=G.style;

for(var M in H){var K=H[M];
var name=L[M]||M;

if(K===undefined){if(I!==false&&N[name]){N[name].reset(G);
}else{J[name]=j;
}}else{if(I!==false&&N[name]){N[name].set(G,K);
}else{J[name]=K!==null?K:j;
}}}},reset:function(be,name,bf){var bg=this.__hints;
name=bg.styleNames[name]||name;
if(bf!==false&&bg.special[name]){return bg.special[name].reset(be);
}else{be.style[name]=j;
}},get:qx.core.Variant.select(i,{"mshtml":function(bj,name,bk,bl){var bq=this.__hints;
name=bq.styleNames[name]||name;
if(bl!==false&&bq.special[name]){return bq.special[name].get(bj,bk);
}if(!bj.currentStyle){return bj.style[name]||j;
}switch(bk){case this.LOCAL_MODE:return bj.style[name]||j;
case this.CASCADED_MODE:return bj.currentStyle[name]||j;
default:var bp=bj.currentStyle[name]||j;
if(/^-?[\.\d]+(px)?$/i.test(bp)){return bp;
}var bo=bq.mshtmlPixel[name];

if(bo){var bm=bj.style[name];
bj.style[name]=bp||0;
var bn=bj.style[bo]+c;
bj.style[name]=bm;
return bn;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bp)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bp;
}},"default":function(V,name,W,X){var bb=this.__hints;
name=bb.styleNames[name]||name;
if(X!==false&&bb.special[name]){return bb.special[name].get(V,W);
}switch(W){case this.LOCAL_MODE:return V.style[name]||j;
case this.CASCADED_MODE:if(V.currentStyle){return V.currentStyle[name]||j;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var Y=qx.dom.Node.getDocument(V);
var ba=Y.defaultView.getComputedStyle(V,null);
return ba?ba[name]:j;
}}})}});
})();
(function(){var g="CSS1Compat",f="position:absolute;width:0;height:0;width:1",e="qx.bom.Document",d="1px",c="qx.client",b="div";
qx.Class.define(e,{statics:{isQuirksMode:qx.core.Variant.select(c,{"mshtml":function(a){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (a||window).document.compatMode!==g;
}},"webkit":function(h){if(document.compatMode===undefined){var i=(h||window).document.createElement(b);
i.style.cssText=f;
return i.style.width===d?true:false;
}else{return (h||window).document.compatMode!==g;
}},"default":function(q){return (q||window).document.compatMode!==g;
}}),isStandardMode:function(m){return !this.isQuirksMode(m);
},getWidth:function(n){var o=(n||window).document;
var p=qx.bom.Viewport.getWidth(n);
var scroll=this.isStandardMode(n)?o.documentElement.scrollWidth:o.body.scrollWidth;
return Math.max(scroll,p);
},getHeight:function(j){var k=(j||window).document;
var l=qx.bom.Viewport.getHeight(j);
var scroll=this.isStandardMode(j)?k.documentElement.scrollHeight:k.body.scrollHeight;
return Math.max(scroll,l);
}}});
})();
(function(){var b="qx.client",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Variant.select(b,{"opera":function(c){if(qx.bom.client.Engine.VERSION<9.5){return (c||window).document.body.clientWidth;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;
}},"webkit":function(q){if(qx.bom.client.Engine.VERSION<523.15){return (q||window).innerWidth;
}else{var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientWidth:r.body.clientWidth;
}},"default":function(j){var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientWidth:k.body.clientWidth;
}}),getHeight:qx.core.Variant.select(b,{"opera":function(o){if(qx.bom.client.Engine.VERSION<9.5){return (o||window).document.body.clientHeight;
}else{var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientHeight:p.body.clientHeight;
}},"webkit":function(e){if(qx.bom.client.Engine.VERSION<523.15){return (e||window).innerHeight;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}},"default":function(m){var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientHeight:n.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(b,{"mshtml":function(s){var t=(s||window).document;
return t.documentElement.scrollLeft||t.body.scrollLeft;
},"default":function(g){return (g||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(b,{"mshtml":function(h){var i=(h||window).document;
return i.documentElement.scrollTop||i.body.scrollTop;
},"default":function(l){return (l||window).pageYOffset;
}})}});
})();
(function(){var h="/",g="mshtml",f="",e="qx.client",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__registry:qx.$$resources||{},__urlPrefix:{}},members:{has:function(k){return !!arguments.callee.self.__registry[k];
},getData:function(l){return arguments.callee.self.__registry[l]||null;
},getImageWidth:function(o){var p=arguments.callee.self.__registry[o];
return p?p[0]:null;
},getImageHeight:function(A){var B=arguments.callee.self.__registry[A];
return B?B[1]:null;
},getImageFormat:function(m){var n=arguments.callee.self.__registry[m];
return n?n[2]:null;
},isClippedImage:function(i){var j=arguments.callee.self.__registry[i];
return j&&j.length>4;
},toUri:function(q){if(q==null){return q;
}var r=arguments.callee.self.__registry[q];

if(!r){return q;
}
if(typeof r===c){var t=r;
}else{var t=r[3];
if(!t){return q;
}}var s=f;

if(qx.core.Variant.isSet(e,g)&&qx.bom.client.Feature.SSL){s=arguments.callee.self.__urlPrefix[t];
}return s+qx.$$libraries[t].resourceUri+h+q;
}},defer:function(u){if(qx.core.Variant.isSet(e,g)){if(qx.bom.client.Feature.SSL){for(var y in qx.$$libraries){var w;

if(qx.$$libraries[y].resourceUri){w=qx.$$libraries[y].resourceUri;
}else{u.__urlPrefix[y]=f;
continue;
}if(w.match(/^\/\//)!=null){u.__urlPrefix[y]=window.location.protocol;
}else if(w.match(/^\.\//)!=null){var v=document.URL;
u.__urlPrefix[y]=v.substring(0,v.lastIndexOf(h)+1);
}else if(w.match(/^http/)!=null){}else{var z=window.location.href.indexOf(d);
var x;

if(z==-1){x=window.location.href;
}else{x=window.location.href.substring(0,z);
}u.__urlPrefix[y]=x.substring(0,x.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var e="qx.client",d="load",c="qx.io.ImageLoader";
qx.Bootstrap.define(c,{statics:{__data:{},__defaultSize:{width:null,height:null},__knownImageTypesRegExp:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(a){var b=this.__data[a];
return !!(b&&b.loaded);
},isFailed:function(u){var v=this.__data[u];
return !!(v&&v.failed);
},isLoading:function(G){var H=this.__data[G];
return !!(H&&H.loading);
},getFormat:function(m){var n=this.__data[m];
return n?n.format:null;
},getSize:function(E){var F=this.__data[E];
return F?
{width:F.width,height:F.height}:this.__defaultSize;
},getWidth:function(w){var x=this.__data[w];
return x?x.width:null;
},getHeight:function(y){var z=this.__data[y];
return z?z.height:null;
},load:function(o,p,q){var r=this.__data[o];

if(!r){r=this.__data[o]={};
}if(p&&!q){q=window;
}if(r.loaded||r.loading||r.failed){if(p){if(r.loading){r.callbacks.push(p,q);
}else{p.call(q,o,r);
}}}else{r.loading=true;
r.callbacks=[];

if(p){r.callbacks.push(p,q);
}var t=new Image();
var s=qx.lang.Function.listener(this.__onload,this,t,o);
t.onload=s;
t.onerror=s;
t.src=o;
}},__onload:qx.event.GlobalError.observeMethod(function(event,f,g){var h=this.__data[g];
if(event.type===d){h.loaded=true;
h.width=this.__getWidth(f);
h.height=this.__getHeight(f);
var j=this.__knownImageTypesRegExp.exec(g);

if(j!=null){h.format=j[1];
}}else{h.failed=true;
}f.onload=f.onerror=null;
var k=h.callbacks;
delete h.loading;
delete h.callbacks;
for(var i=0,l=k.length;i<l;i+=2){k[i].call(k[i+1],g,h);
}}),__getWidth:qx.core.Variant.select(e,{"gecko":function(D){return D.naturalWidth;
},"default":function(C){return C.width;
}}),__getHeight:qx.core.Variant.select(e,{"gecko":function(B){return B.naturalHeight;
},"default":function(A){return A.height;
}})}});
})();
(function(){var s="number",r="0",q="px",p=";",o="background-image:url(",n=");",m="",l=")",k="background-repeat:",j=" ",g="qx.bom.element.Background",i="url(",h="background-position:";
qx.Class.define(g,{statics:{__tmpl:[o,null,n,h,null,p,k,null,p],__emptyStyles:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__computePosition:function(z,top){var A=qx.bom.client.Engine;

if(A.GECKO&&A.VERSION<1.9&&z==top&&typeof z==s){top+=0.01;
}
if(z){var B=(typeof z==s)?z+q:z;
}else{B=r;
}
if(top){var C=(typeof top==s)?top+q:top;
}else{C=r;
}return B+j+C;
},compile:function(D,E,F,top){var G=this.__computePosition(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I=this.__tmpl;
I[1]=H;
I[4]=G;
I[7]=E;
return I.join(m);
},getStyles:function(t,u,v,top){if(!t){return this.__emptyStyles;
}var w=this.__computePosition(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y={backgroundPosition:w,backgroundImage:i+x+l};

if(u!=null){y.backgroundRepeat=u;
}return y;
},set:function(a,b,c,d,top){var e=this.getStyles(b,c,d,top);

for(var f in e){a.style[f]=e[f];
}}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(k){var l={};

if(k){var m=k.colors;
var n=qx.util.ColorUtil;
var o;

for(var p in m){o=m[p];

if(typeof o===b){if(!n.isCssString(o)){throw new Error("Could not parse color: "+o);
}}else if(o instanceof Array){o=n.rgbToRgbString(o);
}else{throw new Error("Could not parse color: "+o);
}l[p]=o;
}}this._setDynamic(l);
},resolve:function(g){var j=this._dynamic;
var h=j[g];

if(h){return h;
}var i=this.getTheme();

if(i!==null&&i.colors[g]){return j[g]=i.colors[g];
}return g;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var Y=",",X="rgb(",W=")",V="qx.theme.manager.Color",U="qx.util.ColorUtil";
qx.Class.define(U,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(w){return this.NAMED[w]!==undefined;
},isSystemColor:function(Q){return this.SYSTEM[Q]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(V);
},isThemedColor:function(B){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(B);
},stringToRgb:function(R){if(this.supportsThemes()&&this.isThemedColor(R)){var R=qx.theme.manager.Color.getInstance().resolveDynamic(R);
}
if(this.isNamedColor(R)){return this.NAMED[R];
}else if(this.isSystemColor(R)){throw new Error("Could not convert system colors to RGB: "+R);
}else if(this.isRgbString(R)){return this.__rgbStringToRgb();
}else if(this.isHex3String(R)){return this.__hex3StringToRgb();
}else if(this.isHex6String(R)){return this.__hex6StringToRgb();
}throw new Error("Could not parse color: "+R);
},cssStringToRgb:function(bg){if(this.isNamedColor(bg)){return this.NAMED[bg];
}else if(this.isSystemColor(bg)){throw new Error("Could not convert system colors to RGB: "+bg);
}else if(this.isRgbString(bg)){return this.__rgbStringToRgb();
}else if(this.isRgbaString(bg)){return this.__rgbaStringToRgb();
}else if(this.isHex3String(bg)){return this.__hex3StringToRgb();
}else if(this.isHex6String(bg)){return this.__hex6StringToRgb();
}throw new Error("Could not parse color: "+bg);
},stringToRgbString:function(P){return this.rgbToRgbString(this.stringToRgb(P));
},rgbToRgbString:function(O){return X+O[0]+Y+O[1]+Y+O[2]+W;
},rgbToHexString:function(bi){return (qx.lang.String.pad(bi[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(bi[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(bi[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(bh){return this.isThemedColor(bh)||this.isNamedColor(bh)||this.isHex3String(bh)||this.isHex6String(bh)||this.isRgbString(bh);
},isCssString:function(I){return this.isSystemColor(I)||this.isNamedColor(I)||this.isHex3String(I)||this.isHex6String(I)||this.isRgbString(I);
},isHex3String:function(S){return this.REGEXP.hex3.test(S);
},isHex6String:function(x){return this.REGEXP.hex6.test(x);
},isRgbString:function(N){return this.REGEXP.rgb.test(N);
},isRgbaString:function(a){return this.REGEXP.rgba.test(a);
},__rgbStringToRgb:function(){var A=parseInt(RegExp.$1,10);
var z=parseInt(RegExp.$2,10);
var y=parseInt(RegExp.$3,10);
return [A,z,y];
},__rgbaStringToRgb:function(){var L=parseInt(RegExp.$1,10);
var K=parseInt(RegExp.$2,10);
var J=parseInt(RegExp.$3,10);
return [L,K,J];
},__hex3StringToRgb:function(){var bc=parseInt(RegExp.$1,16)*17;
var bb=parseInt(RegExp.$2,16)*17;
var ba=parseInt(RegExp.$3,16)*17;
return [bc,bb,ba];
},__hex6StringToRgb:function(){var bf=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var be=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var bd=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [bf,be,bd];
},hex3StringToRgb:function(M){if(this.isHex3String(M)){return this.__hex3StringToRgb(M);
}throw new Error("Invalid hex3 value: "+M);
},hex6StringToRgb:function(T){if(this.isHex6String(T)){return this.__hex6StringToRgb(T);
}throw new Error("Invalid hex6 value: "+T);
},hexStringToRgb:function(v){if(this.isHex3String(v)){return this.__hex3StringToRgb(v);
}
if(this.isHex6String(v)){return this.__hex6StringToRgb(v);
}throw new Error("Invalid hex value: "+v);
},rgbToHsb:function(c){var e,h,k;
var u=c[0];
var n=c[1];
var d=c[2];
var s=(u>n)?u:n;

if(d>s){s=d;
}var j=(u<n)?u:n;

if(d<j){j=d;
}k=s/255.0;

if(s!=0){h=(s-j)/s;
}else{h=0;
}
if(h==0){e=0;
}else{var m=(s-u)/(s-j);
var o=(s-n)/(s-j);
var l=(s-d)/(s-j);

if(u==s){e=l-o;
}else if(n==s){e=2.0+m-l;
}else{e=4.0+o-m;
}e=e/6.0;

if(e<0){e=e+1.0;
}}return [Math.round(e*360),Math.round(h*100),Math.round(k*100)];
},hsbToRgb:function(C){var i,f,p,q,t;
var D=C[0]/360;
var E=C[1]/100;
var F=C[2]/100;

if(D>=1.0){D%=1.0;
}
if(E>1.0){E=1.0;
}
if(F>1.0){F=1.0;
}var G=Math.floor(255*F);
var H={};

if(E==0.0){H.red=H.green=H.blue=G;
}else{D*=6.0;
i=Math.floor(D);
f=D-i;
p=Math.floor(G*(1.0-E));
q=Math.floor(G*(1.0-(E*f)));
t=Math.floor(G*(1.0-(E*(1.0-f))));

switch(i){case 0:H.red=G;
H.green=t;
H.blue=p;
break;
case 1:H.red=q;
H.green=G;
H.blue=p;
break;
case 2:H.red=p;
H.green=G;
H.blue=t;
break;
case 3:H.red=p;
H.green=q;
H.blue=G;
break;
case 4:H.red=t;
H.green=p;
H.blue=G;
break;
case 5:H.red=G;
H.green=p;
H.blue=q;
break;
}}return [H.red,H.green,H.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var l="ready",k="qx.client",j="mshtml",i="load",h="unload",g="qx.event.handler.Application",f="complete",d="gecko|opera|webkit",c="left",b="DOMContentLoaded",a="shutdown";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(r){arguments.callee.base.call(this);
this._window=r.getWindow();
this.__domReady=false;
this.__loaded=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__scriptLoaded:false,onScriptLoaded:function(){this.__scriptLoaded=true;
var m=qx.event.handler.Application.$$instance;

if(m){m.__fireReady();
}}},members:{canHandleEvent:function(o,p){},registerEvent:function(v,w,x){},unregisterEvent:function(s,t,u){},__isReady:null,__domReady:null,__loaded:null,__isUnloaded:null,__fireReady:function(){var y=qx.event.handler.Application;
if(!this.__isReady&&this.__domReady&&y.__scriptLoaded){if(qx.core.Variant.isSet(k,j)){if(qx.event.Registration.hasListener(this._window,l)){this.__isReady=true;
qx.event.Registration.fireEvent(this._window,l);
}}else{this.__isReady=true;
qx.event.Registration.fireEvent(this._window,l);
}}},isApplicationReady:function(){return this.__isReady;
},_initObserver:function(){if(qx.$$domReady||document.readyState==f){this.__domReady=true;
this.__fireReady();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(k,d)){qx.bom.Event.addNativeListener(this._window,b,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(k,j)){var self=this;
var n=function(){try{document.documentElement.doScroll(c);

if(document.body){self._onNativeLoadWrapped();
}}catch(q){window.setTimeout(n,100);
}};
n();
}qx.bom.Event.addNativeListener(this._window,i,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,h,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,i,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,h,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__domReady=true;
this.__fireReady();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__isUnloaded){this.__isUnloaded=true;

try{qx.event.Registration.fireEvent(this._window,a);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){arguments.callee.base.call(this);
this._manager=b;
this._window=b.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(o,p){},registerEvent:function(l,m,n){},unregisterEvent:function(c,d,f){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var i=qx.event.handler.Window.SUPPORTED_TYPES;

for(var h in i){qx.bom.Event.addNativeListener(this._window,h,this._onNativeWrapper);
}},_stopWindowObserver:function(){var k=qx.event.handler.Window.SUPPORTED_TYPES;

for(var j in k){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var r=this._window;

try{var u=r.document;
}catch(e){return ;
}var s=u.documentElement;
var q=e.target||e.srcElement;

if(q==null||q===r||q===u||q===s){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,r]);
qx.event.Registration.dispatchEvent(r,event);
var t=event.getReturnValue();

if(t!=null){e.returnValue=t;
return t;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__application||null;
},__ready:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var j=qx.core.Setting.get(d);
var k=qx.Class.getByName(j);

if(k){this.__application=new k;
var i=new Date;
this.__application.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-i)+"ms");
var i=new Date;
this.__application.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-i)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+j);
}},__close:function(e){var g=this.__application;

if(g){e.setReturnValue(g.close());
}},__shutdown:function(){var h=this.__application;

if(h){h.terminate();
}}},defer:function(l){qx.event.Registration.addListener(window,f,l.__ready,l);
qx.event.Registration.addListener(window,a,l.__shutdown,l);
qx.event.Registration.addListener(window,c,l.__close,l);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(k,l){var m=qx.locale.Manager;

if(m){return m.tr.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(b,c,d,e){var f=qx.locale.Manager;

if(f){return f.trn.apply(f,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(g,h,i){var j=qx.locale.Manager;

if(j){return j.trc.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__root:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__root;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__root=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__root=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var dI="Team",dH='loc2a',dG="Location",dF="execute",dE="Order Date",dD="Processed?",dC='loc1',dB='loc2',dA="Order Number",dz='loc3',cJ="Update",cI='team1',cH='team2',cG='team3',cF='Smart',cE='Simple',cD="id",cC='and',cB="Shipped?",cA="Delete",dP="GloboChem",dQ="Martin",dN="Cook",dO="Johnson",dL="Thomas",dM="Gonzalez",dJ="Harris",dK="Walker",dR="Acme",dS="Stewart",di="Chloe",dh="Ava",dk="Jayden",dj="Mia",dm="AAA",dl="Thompson",dp="changeSelection",dn="Jackson",dg="Collins",df="Miller",br="Alexander",bs="Robinson",bt="John",bu="Wright",bv="Ryan",bw="Michael",bx="JavaScript Framework",by="First Rate",bz="Martinez",bA="Scott",dW="Alyssa",dV="Morris",dU="Edwards",dT="Clark",eb="Lee",ea='All Orders',dY="Isabella",dX="Joseph",ed="Sprocket",ec="Product Name",ca="Bag o' Glass",cb="Christopher",bX="Elizabeth",bY="Rodriguez",ce="Parker",cf="Madison",cc="Taylor",cd="Sophia",bV="Turner",bW="Anderson",bI="Logan",bH="Wilson",bK="Mitchell",bJ="Andrew",bE="Lopez",bD="Roberts",bG="Emma",bF="Sarah",bC=" ",bB="Aiden",ck="Smith",cl="Thumb Drive",cm="Olivia",cn="Allen",cg="Anthony",ch="Adams",ci="smart.demo.Application",cj="Hill",co="Reed",cp="Bell",bS="Matthew",bR="Campbell",bQ="King",bP="Unicycle",bO="Hall",bN="Jacob",bM="BigCorp",bL="Green",bU="Addison",bT="Ella",cq="Tools 'R' Us",cr="Hernandez",cs="Baker",ct="David",cu="Rogers",cv="Ashley",cw="Brown",cx="Noah",cy="Customer Name",cz="Daniel",cN="Morgan",cM="Emily",cL="Samantha",cK="Hannah",cR="Davis",cQ="Alexis",cP="Jones",cO="Abigail",cT="Ethan",cS="yyyy-MM-dd HH:mm:ss",db="Evans",dc="Young",cY="Nelson",da="White",cW="Sanchez",cX="William",cU="Carter",cV="Garcia",dd="Lewis",de="Phillips",ds="All Orders",dq="Joshua",du="Natalie",dt="James",dw="Mainway Industries",dv="Moore",dy="Williams",dx="Perez";
qx.Class.define(ci,{extend:qx.application.Standalone,members:{table:null,orders:-1,columns:{"Order Number":0,"Customer Name":1,"Order Date":2,"Vendor Name":3,"Product Name":4,"Processed?":5,"Shipped?":6},views:{"All Orders":{},"Unprocessed Orders":{filters:function(H){return !H[this.columns[dD]];
}},"Processed but not Shipped":{filters:[function(X){return X[this.columns[dD]];
},function(bf){return !bf[this.columns[cB]];
}],conjunction:cC},"Open Orders Placed in the Past Four Hours":{filters:[function(W){return !W[this.columns[dD]];
},function(bc){var bd=(new Date()).getTime();
return (bd-bc[this.columns[dE]].getTime()<=4*60*60*1000);
}],conjunction:cC}},main:function(){arguments.callee.base.call(this);
if(true||false){qx.log.appender.Native;
qx.log.appender.Console;
qx.log.appender.Console.show();
}if(true){this.fz_test_3();
return;
}var z=new smart.Smart();
var t,s=[];

for(t in this.columns)s[this.columns[t]]=t;
z.setColumns(s);
this.table=new qx.ui.table.Table(z);
z.sortByColumn(this.columns[dE],false);
z.addIndex(this.columns[dA]);
var D=0;

for(var E in this.views){if(E==ea){this.views[E].id=0;
continue;
}this.views[E].id=++D;
z.addView(this.views[E].filters,this,this.views[E].conjunction);
}z.setView(this.views[ds].id);
var A=this.table.getSelectionModel();
A.setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
z.indexedSelection(this.columns[dA],A);
var x=this.table.getTableColumnModel();
x.setDataCellRenderer(this.columns[dD],new qx.ui.table.cellrenderer.Boolean());
x.setDataCellRenderer(this.columns[cB],new qx.ui.table.cellrenderer.Boolean());
x.setDataCellRenderer(this.columns[dE],new qx.ui.table.cellrenderer.Date());
x.setColumnWidth(this.columns[cy],150);
x.setColumnWidth(this.columns[dE],150);
x.setColumnWidth(this.columns[ec],250);
var C=x.getDataCellRenderer(this.columns[dE]);
C.setDateFormat(new qx.util.format.DateFormat(cS));
this.table.getPaneScroller(0).setShowCellFocusIndicator(false);
this.table.getDataRowRenderer().setHighlightFocusRow(false);
this.addOrders(100,true);
var D=0;
var B=new qx.ui.form.SelectBox();
B.set({width:300});
var u=[];

for(var E in this.views){var r=this.views[E];
var w=new qx.ui.form.ListItem(E);
u[r.id]=w;
w.setUserData(cD,r.id);
}
for(var i=0;i<u.length;i++)B.add(u[i]);
B.addListener(dp,function(e){var F=e.getData()[0];
var G=F.getUserData(cD);
this.setView(G);
},this.table.getTableModel());
var v=this.getRoot();
v.add(B,{left:100,top:50});
v.add(this.table,{left:100,top:75});
var y=this;
setInterval(function(){y.addOrders(Math.random()*4,false);
},5*1000);
setInterval(function(){y.cancelOrders();
},5*1000);
},firstNames:[bN,bw,cT,dq,cz,br,cg,cX,cb,bS,dk,bJ,dX,ct,cx,bB,dt,bv,bI,bt,bG,dY,cM,cf,dh,cm,cd,cO,bX,di,cL,bU,du,dj,cQ,dW,cK,cv,bT,bF],lastNames:[ck,dO,dy,cP,cw,cR,df,bH,dv,cc,bW,dL,dn,da,dJ,dQ,dl,cV,bz,bs,dT,bY,dd,eb,dK,bO,cn,dc,cr,bQ,bu,bE,cj,bA,bL,ch,cs,dM,cY,cU,bK,dx,bD,bV,de,bR,ce,db,dU,dg,dS,cW,dV,cu,co,dN,cN,cp],companies:[dR,dw,by,dP,bM,dm,cq],products:[ed,ca,cl,bP,bx],addOrders:function(N,k){if(N==undefined)N=1;

if(k==undefined)k=false;
function l(ba){return ba[Math.floor(Math.random()*ba.length)];
}var p=this.table.getTableModel();
var m=[];
for(var i=0;i<N;i++){var n=(new Date()).getTime();
var q=Math.random()>0.5;
var o=q&&(Math.random()>0.5);

if(k)n-=(Math.random()*24*60*60*100);
m.push([++this.orders,l(this.firstNames)+bC+l(this.lastNames),new Date(n),l(this.companies),l(this.products),q,o]);
}p.addRows(m);
},cancelOrders:function(){if(Math.random()<0.5)return;
var bo=Math.floor(Math.random()*this.orders)^0;
var bn=this.table.getTableModel();
var bp=bn.locate(this.columns[dA],bo);

if(bp==undefined)return;
bn.removeRows(bp,1);
},fz_test:function(){var bj=new smart.Smart();
bj.addView(function(bq){return true;
},this);
bj.setColumns([dG,dI]);
var bg=new qx.ui.table.model.Simple();
bg.setColumns([dG,dI]);
var bh=new qx.ui.table.Table(bj);
var bl=new qx.ui.table.Table(bg);
var bk=new qx.ui.form.Button(cJ);
var bi=this.getRoot();
bi.add(bk,{left:20,top:20});
bi.add(new qx.ui.basic.Label(cE),{left:20,top:50});
bi.add(bl,{left:20,top:70});
bi.add(new qx.ui.basic.Label(cF),{left:250,top:50});
bi.add(bh,{left:250,top:70});
var bm=[[dC,cI],[dB,cH],[dz,cG]];
bg.setData(bm);
bj.setData(bm);
bk.addListener(dF,function(e){var Y;
Y=bj.getRowCount();
this.debug('lenSmart='+Y);
bg.setValue(0,1,dH);
bj.setValue(0,1,dH);
Y=bj.getRowCount();
this.debug('lenSmart='+Y);
});
},fz_test_2:function(){var d=new smart.Smart();
d.addView(function(J){return true;
},this);
d.setColumns([dG,dI]);
var a=new qx.ui.table.model.Simple();
a.setColumns([dG,dI]);
var b=new qx.ui.table.Table(d);
var h=new qx.ui.table.Table(a);
var g=new qx.ui.form.Button(cJ);
var f=new qx.ui.form.Button(cA);
var c=this.getRoot();
c.add(g,{left:20,top:20});
c.add(f,{left:100,top:20});
c.add(new qx.ui.basic.Label(cE),{left:20,top:50});
c.add(h,{left:20,top:70});
c.add(new qx.ui.basic.Label(cF),{left:250,top:50});
c.add(b,{left:250,top:70});
var j=[[dC,cI],[dB,cH],[dz,cG]];
a.setData(j);
d.setData(j);
g.addListener(dF,function(e){var ee;
ee=d.getRowCount();
this.debug('lenSmart='+ee);
a.setValue(0,1,dH);
d.setValue(0,1,dH);
ee=d.getRowCount();
this.debug('lenSmart='+ee);
});
f.addListener(dF,function(e){var bb;
bb=d.getRowCount();
this.debug('lenSmart='+bb);
a.removeRows(1,1);
d.removeRows(1,1,0);
bb=d.getRowCount();
this.debug('lenSmart='+bb);
});
},fz_test_3:function(){var O=new smart.Smart();
O.setColumns([dG,dI]);
var K=new qx.ui.table.model.Simple();
K.setColumns([dG,dI]);
var L=new qx.ui.table.Table(O);
var R=new qx.ui.table.Table(K);
O.addView(function(T){var U=T[0];
this.debug('loc='+U);
var V=(U==dC||U==dB);
this.debug('ret='+V);
return V;
},this,null);
var Q=new qx.ui.form.Button(cJ);
var P=new qx.ui.form.Button(cA);
var M=this.getRoot();
M.add(Q,{left:20,top:20});
M.add(P,{left:100,top:20});
M.add(new qx.ui.basic.Label(cE),{left:20,top:50});
M.add(R,{left:20,top:70});
M.add(new qx.ui.basic.Label(cF),{left:250,top:50});
M.add(L,{left:250,top:70});
var S=[[dC,cI],[dB,cH],[dz,cG]];
L.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
K.setData(S);
O.setData(S);
O.setView(1);
O.updateView(1);
O.addIndex(0);
O.indexedSelection(0,L.getSelectionModel());
Q.addListener(dF,function(e){var I;
I=O.getRowCount();
this.debug('lenSmart='+I);
K.setValue(0,1,dH);
O.setValue(0,1,dH);
I=O.getRowCount();
this.debug('lenSmart='+I);
});
P.addListener(dF,function(e){var be;
be=O.getRowCount();
this.debug('lenSmart='+be);
K.removeRows(1,1);
this.debug("calling removeRows(1,1,1)");
O.removeRows(1,1,1);
this.debug("back from removeRows(1,1,1)");
be=O.getRowCount();
this.debug('lenSmart='+be);
});
}}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d,e,f){arguments.callee.base.call(this,e,f);
this._target=c||qx.bom.Event.getTarget(b);
this._relatedTarget=d||qx.bom.Event.getRelatedTarget(b);

if(b.timeStamp){this._timeStamp=b.timeStamp;
}this._native=b;
this._returnValue=null;
return this;
},clone:function(h){var i=arguments.callee.base.call(this,h);
var j={};
i._native=this._cloneNativeEvent(this._native,j);
i._returnValue=this._returnValue;
return i;
},_cloneNativeEvent:function(k,l){l.preventDefault=qx.lang.Function.empty;
return l;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(g){this._returnValue=g;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(g,h){var k=null;
var n=null;
var q=null;
var r=null;
var m=null;

if(g){k=g.meta.color||null;
n=g.meta.decoration||null;
q=g.meta.font||null;
r=g.meta.icon||null;
m=g.meta.appearance||null;
}var o=qx.theme.manager.Color.getInstance();
var p=qx.theme.manager.Decoration.getInstance();
var i=qx.theme.manager.Font.getInstance();
var l=qx.theme.manager.Icon.getInstance();
var j=qx.theme.manager.Appearance.getInstance();
o.setTheme(k);
p.setTheme(n);
i.setTheme(q);
l.setTheme(r);
j.setTheme(m);
},initialize:function(){var t=qx.core.Setting;
var s,u;
s=t.get(e);

if(s){u=qx.Theme.getByName(s);

if(!u){throw new Error("The theme to use is not available: "+s);
}this.setTheme(u);
}}},settings:{"qx.theme":c}});
})();
(function(){var i="object",h="__dynamic",g="_applyTheme",f="qx.theme.manager.Decoration",e="Theme",d="string",c="singleton";
qx.Class.define(f,{type:c,extend:qx.core.Object,properties:{theme:{check:e,nullable:true,apply:g}},members:{__dynamic:null,resolve:function(j){if(!j){return null;
}
if(typeof j===i){return j;
}var m=this.getTheme();

if(!m){return null;
}var m=this.getTheme();

if(!m){return null;
}var n=this.__dynamic;

if(!n){n=this.__dynamic={};
}var k=n[j];

if(k){return k;
}var l=m.decorations[j];

if(!l){return null;
}var o=l.decorator;

if(o==null){throw new Error("Missing definition of which decorator to use in entry: "+j+"!");
}return n[j]=(new o).set(l.style);
},isValidPropertyValue:function(a){if(typeof a===d){return this.isDynamic(a);
}else if(typeof a===i){var b=a.constructor;
return qx.Class.hasInterface(b,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(p){if(!p){return false;
}var q=this.getTheme();

if(!q){return false;
}return !!q.decorations[p];
},_applyTheme:function(r,s){var u=qx.util.AliasManager.getInstance();

if(s){for(var t in s.aliases){u.remove(t);
}}
if(r){for(var t in r.aliases){u.add(t,r.aliases[t]);
}}
if(!r){this.__dynamic={};
}}},destruct:function(){this._disposeMap(h);
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(o){var p=this._dynamic;
return o instanceof qx.bom.Font?o:p[o];
},resolve:function(f){var i=this._dynamic;
var g=i[f];

if(g){return g;
}var h=this.getTheme();

if(h!==null&&h.fonts[f]){return i[f]=(new qx.bom.Font).set(h.fonts[f]);
}return f;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(q instanceof qx.bom.Font||s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&r.fonts[q]){s[q]=(new qx.bom.Font).set(r.fonts[q]);
return true;
}return false;
},_applyTheme:function(j){var k=this._getDynamic();

for(var n in k){if(k[n].themed){k[n].dispose();
delete k[n];
}}
if(j){var l=j.fonts;
var m=qx.bom.Font;

for(var n in l){k[n]=(new m).set(l[n]);
k[n].themed=true;
}}this._setDynamic(k);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(H,I){arguments.callee.base.call(this);

if(H!==undefined){this.setSize(H);
}
if(I!==undefined){this.setFamily(I);
}},statics:{fromString:function(A){var E=new qx.bom.Font();
var C=A.split(/\s+/);
var name=[];
var D;

for(var i=0;i<C.length;i++){switch(D=C[i]){case c:E.setBold(true);
break;
case e:E.setItalic(true);
break;
case j:E.setDecoration(j);
break;
default:var B=parseInt(D,10);

if(B==D||qx.lang.String.contains(D,g)){E.setSize(B);
}else{name.push(D);
}break;
}}
if(name.length>0){E.setFamily(name);
}return E;
},fromConfig:function(M){var N=new qx.bom.Font;
N.set(M);
return N;
},__defaultStyles:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__defaultStyles;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__size:null,__family:null,__bold:null,__italic:null,__decoration:null,__lineHeight:null,_applySize:function(F,G){this.__size=F===null?null:F+g;
},_applyLineHeight:function(Q,R){this.__lineHeight=Q===null?null:Q;
},_applyFamily:function(J,K){var L=k;

for(var i=0,l=J.length;i<l;i++){if(J[i].indexOf(o)>0){L+=f+J[i]+f;
}else{L+=J[i];
}
if(i!==l-1){L+=n;
}}this.__family=L;
},_applyBold:function(O,P){this.__bold=O===null?null:O?c:d;
},_applyItalic:function(y,z){this.__italic=y===null?null:y?e:d;
},_applyDecoration:function(S,T){this.__decoration=S===null?null:S;
},getStyles:function(){return {fontFamily:this.__family,fontSize:this.__size,fontWeight:this.__bold,fontStyle:this.__italic,textDecoration:this.__decoration,lineHeight:this.__lineHeight};
}}});
})();
(function(){var d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(e,f){var h=qx.util.AliasManager.getInstance();

if(f){for(var g in f.aliases){h.remove(g);
}}
if(e){for(var g in e.aliases){h.add(g,e.aliases[g]);
}}}}});
})();
(function(){var s="string",r="_applyTheme",q="qx.theme.manager.Appearance",p=":",o="Theme",n="changeTheme",m="/",l="singleton";
qx.Class.define(q,{type:l,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__styleCache={};
this.__aliasMap={};
},properties:{theme:{check:o,nullable:true,event:n,apply:r}},members:{__defaultStates:{},__styleCache:null,__aliasMap:null,_applyTheme:function(K,L){this.__aliasMap={};
this.__styleCache={};
},__resolveId:function(a,b,c){var g=b.appearances;
var j=g[a];

if(!j){var k=m;
var d=[];
var i=a.split(k);
var h;

while(!j&&i.length>0){d.unshift(i.pop());
var e=i.join(k);
j=g[e];

if(j){h=j.alias||j;

if(typeof h===s){var f=h+k+d.join(k);
return this.__resolveId(f,b,c);
}}}if(c!=null){return this.__resolveId(c,b);
}return null;
}else if(typeof j===s){return this.__resolveId(j,b,c);
}else if(j.include&&!j.style){return this.__resolveId(j.include,b,c);
}return a;
},styleFrom:function(t,u,v,w){if(!v){v=this.getTheme();
}var C=this.__aliasMap;
var x=C[t];

if(!x){x=C[t]=this.__resolveId(t,v,w);
}var H=v.appearances[x];

if(!H){this.warn("Missing appearance: "+t);
return null;
}if(!H.style){return null;
}var I=x;

if(u){var J=H.$$bits;

if(!J){J=H.$$bits={};
H.$$length=0;
}var A=0;

for(var D in u){if(!u[D]){continue;
}
if(J[D]==null){J[D]=1<<H.$$length++;
}A+=J[D];
}if(A>0){I+=p+A;
}}var B=this.__styleCache;

if(B[I]!==undefined){return B[I];
}if(!u){u=this.__defaultStates;
}var F;
if(H.include||H.base){var z=H.style(u);
var y;

if(H.include){y=this.styleFrom(H.include,u,v,w);
}F={};
if(H.base){var E=this.styleFrom(x,u,H.base,w);

if(H.include){for(var G in E){if(!y.hasOwnProperty(G)&&!z.hasOwnProperty(G)){F[G]=E[G];
}}}else{for(var G in E){if(!z.hasOwnProperty(G)){F[G]=E[G];
}}}}if(H.include){for(var G in y){if(!z.hasOwnProperty(G)){F[G]=y[G];
}}}for(var G in z){F[G]=z[G];
}}else{F=H.style(u);
}return B[I]=F||null;
}},destruct:function(){this.__styleCache=this.__aliasMap=null;
}});
})();
(function(){var t="focusout",s="interval",r="mouseover",q="mouseout",p="mousemove",o="widget",n="__hideTimer",m="qx.ui.tooltip.ToolTip",l="Boolean",k="__showTimer",h="_applyCurrent",j="qx.ui.tooltip.Manager",i="__sharedToolTip",g="tooltip-error",f="singleton";
qx.Class.define(j,{type:f,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,r,this.__onMouseOverRoot,this,true);
this.__showTimer=new qx.event.Timer();
this.__showTimer.addListener(s,this.__onShowInterval,this);
this.__hideTimer=new qx.event.Timer();
this.__hideTimer.addListener(s,this.__onHideInterval,this);
this.__mousePosition={left:0,top:0};
},properties:{current:{check:m,nullable:true,apply:h},showInvalidTooltips:{check:l,init:true}},members:{__mousePosition:null,__hideTimer:null,__showTimer:null,__sharedToolTip:null,__sharedErrorToolTip:null,__getSharedTooltip:function(){if(!this.__sharedToolTip){this.__sharedToolTip=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__sharedToolTip;
},__getSharedErrorTooltip:function(){if(!this.__sharedErrorToolTip){this.__sharedErrorToolTip=new qx.ui.tooltip.ToolTip().set({appearance:g});
this.__sharedErrorToolTip.syncAppearance();
}return this.__sharedErrorToolTip;
},_applyCurrent:function(a,b){if(b&&qx.ui.core.Widget.contains(b,a)){return;
}if(b){if(!b.isDisposed()){b.exclude();
}this.__showTimer.stop();
this.__hideTimer.stop();
}var d=qx.event.Registration;
var c=document.body;
if(a){this.__showTimer.startWith(a.getShowTimeout());
d.addListener(c,q,this.__onMouseOutRoot,this,true);
d.addListener(c,t,this.__onFocusOutRoot,this,true);
d.addListener(c,p,this.__onMouseMoveRoot,this,true);
}else{d.removeListener(c,q,this.__onMouseOutRoot,this,true);
d.removeListener(c,t,this.__onFocusOutRoot,this,true);
d.removeListener(c,p,this.__onMouseMoveRoot,this,true);
}},__onShowInterval:function(e){var A=this.getCurrent();

if(A&&!A.isDisposed()){this.__hideTimer.startWith(A.getHideTimeout());

if(A.getPlaceMethod()==o){A.placeToWidget(A.getOpener());
}else{A.placeToPoint(this.__mousePosition);
}A.show();
}this.__showTimer.stop();
},__onHideInterval:function(e){var z=this.getCurrent();

if(z&&!z.isDisposed()){z.exclude();
}this.__hideTimer.stop();
this.resetCurrent();
},__onMouseMoveRoot:function(e){var D=this.__mousePosition;
D.left=e.getDocumentLeft();
D.top=e.getDocumentTop();
},__onMouseOverRoot:function(e){var w=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!w){return;
}var x;
while(w!=null){var x=w.getToolTip();
var y=w.getToolTipText()||null;
var v=w.getToolTipIcon()||null;

if(qx.Class.hasInterface(w.constructor,qx.ui.form.IForm)&&!w.isValid()){var u=w.getInvalidMessage();
}
if(x||y||v||u){break;
}w=w.getLayoutParent();
}
if(!w){return;
}
if(w.isBlockToolTip()){return;
}if(u&&w.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var x=this.__getSharedErrorTooltip().set({label:u});
}else if(!x){var x=this.__getSharedTooltip().set({label:y,icon:v});
}this.setCurrent(x);
x.setOpener(w);
},__onMouseOutRoot:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!E){return;
}var F=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&(F==G||qx.ui.core.Widget.contains(G,F))){return;
}if(F&&E&&qx.ui.core.Widget.contains(E,F)){return;
}if(G&&!F){this.setCurrent(null);
}else{this.resetCurrent();
}},__onFocusOutRoot:function(e){var B=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!B){return;
}var C=this.getCurrent();
if(C&&C==B.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,r,this.__onMouseOverRoot,this,true);
this._disposeObjects(k,n,i);
this.__mousePosition=null;
}});
})();
(function(){var i="interval",h="qx.event.Timer",g="_applyInterval",f="_applyEnabled",d="Boolean",c="qx.event.type.Event",b="Integer";
qx.Class.define(h,{extend:qx.core.Object,construct:function(q){arguments.callee.base.call(this);
this.setEnabled(false);

if(q!=null){this.setInterval(q);
}var self=this;
this.__oninterval=function(){self._oninterval.call(self);
};
},events:{"interval":c},statics:{once:function(k,l,m){var n=new qx.event.Timer(m);
n.addListener(i,function(e){n.stop();
k.call(l,e);
n.dispose();
l=null;
},l);
n.start();
return n;
}},properties:{enabled:{init:true,check:d,apply:f},interval:{check:b,init:1000,apply:g}},members:{__intervalHandler:null,__oninterval:null,_applyInterval:function(o,p){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(r,s){if(s){window.clearInterval(this.__intervalHandler);
this.__intervalHandler=null;
}else if(r){this.__intervalHandler=window.setInterval(this.__oninterval,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(a){this.setInterval(a);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(j){this.stop();
this.startWith(j);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(i);
}})},destruct:function(){if(this.__intervalHandler){window.clearInterval(this.__intervalHandler);
}this.__intervalHandler=this.__oninterval=null;
}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(p){return this._indexOf(p);
},add:function(b,c){this._add(b,c);
},addAt:function(m,n,o){this._addAt(m,n,o);
},addBefore:function(i,j,k){this._addBefore(i,j,k);
},addAfter:function(f,g,h){this._addAfter(f,g,h);
},remove:function(e){this._remove(e);
},removeAt:function(l){return this._removeAt(l);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(d){d.getChildren=d._getChildren;
d.hasChildren=d._hasChildren;
d.indexOf=d._indexOf;
d.add=d._add;
d.addAt=d._addAt;
d.addBefore=d._addBefore;
d.addAfter=d._addAfter;
d.remove=d._remove;
d.removeAt=d._removeAt;
d.removeAll=d._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var o="Integer",n="_applyDimension",m="Boolean",l="_applyStretching",k="_applyMargin",j="shorthand",i="_applyAlign",h="allowShrinkY",g="bottom",f="baseline",C="marginBottom",B="qx.ui.core.LayoutItem",A="center",z="marginTop",y="allowGrowX",x="middle",w="marginLeft",v="allowShrinkX",u="top",t="right",r="marginRight",s="abstract",p="allowGrowY",q="left";
qx.Class.define(B,{type:s,extend:qx.core.Object,properties:{minWidth:{check:o,nullable:true,apply:n,init:null,themeable:true},width:{check:o,nullable:true,apply:n,init:null,themeable:true},maxWidth:{check:o,nullable:true,apply:n,init:null,themeable:true},minHeight:{check:o,nullable:true,apply:n,init:null,themeable:true},height:{check:o,nullable:true,apply:n,init:null,themeable:true},maxHeight:{check:o,nullable:true,apply:n,init:null,themeable:true},allowGrowX:{check:m,apply:l,init:true,themeable:true},allowShrinkX:{check:m,apply:l,init:true,themeable:true},allowGrowY:{check:m,apply:l,init:true,themeable:true},allowShrinkY:{check:m,apply:l,init:true,themeable:true},allowStretchX:{group:[y,v],mode:j,themeable:true},allowStretchY:{group:[p,h],mode:j,themeable:true},marginTop:{check:o,init:0,apply:k,themeable:true},marginRight:{check:o,init:0,apply:k,themeable:true},marginBottom:{check:o,init:0,apply:k,themeable:true},marginLeft:{check:o,init:0,apply:k,themeable:true},margin:{group:[z,r,C,w],mode:j,themeable:true},alignX:{check:[q,A,t],nullable:true,apply:i,themeable:true},alignY:{check:[u,x,g,f],nullable:true,apply:i,themeable:true}},members:{__computedHeightForWidth:null,__computedLayout:null,__hasInvalidLayout:null,__sizeHint:null,__updateMargin:null,__userBounds:null,__layoutProperties:null,getBounds:function(){return this.__userBounds||this.__computedLayout||null;
},clearSeparators:function(){},renderSeparator:function(d,e){},renderLayout:function(R,top,S,T){var U;
{};
var V=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var V=this._getHeightForWidth(S);
}
if(V!=null&&V!==this.__computedHeightForWidth){this.__computedHeightForWidth=V;
qx.ui.core.queue.Layout.add(this);
return null;
}var X=this.__computedLayout;

if(!X){X=this.__computedLayout={};
}var W={};

if(R!==X.left||top!==X.top){W.position=true;
X.left=R;
X.top=top;
}
if(S!==X.width||T!==X.height){W.size=true;
X.width=S;
X.height=T;
}if(this.__hasInvalidLayout){W.local=true;
delete this.__hasInvalidLayout;
}
if(this.__updateMargin){W.margin=true;
delete this.__updateMargin;
}return W;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__hasInvalidLayout;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__hasInvalidLayout=true;
this.__sizeHint=null;
},getSizeHint:function(bb){var bc=this.__sizeHint;

if(bc){return bc;
}
if(bb===false){return null;
}bc=this.__sizeHint=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__computedHeightForWidth&&this.getHeight()==null){bc.height=this.__computedHeightForWidth;
}if(bc.minWidth>bc.width){bc.width=bc.minWidth;
}
if(bc.maxWidth<bc.width){bc.width=bc.maxWidth;
}
if(!this.getAllowGrowX()){bc.maxWidth=bc.width;
}
if(!this.getAllowShrinkX()){bc.minWidth=bc.width;
}if(bc.minHeight>bc.height){bc.height=bc.minHeight;
}
if(bc.maxHeight<bc.height){bc.height=bc.maxHeight;
}
if(!this.getAllowGrowY()){bc.maxHeight=bc.height;
}
if(!this.getAllowShrinkY()){bc.minHeight=bc.height;
}return bc;
},_computeSizeHint:function(){var J=this.getMinWidth()||0;
var G=this.getMinHeight()||0;
var K=this.getWidth()||J;
var I=this.getHeight()||G;
var F=this.getMaxWidth()||Infinity;
var H=this.getMaxHeight()||Infinity;
return {minWidth:J,width:K,maxWidth:F,minHeight:G,height:I,maxHeight:H};
},_hasHeightForWidth:function(){var bd=this._getLayout();

if(bd){return bd.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(Y){var ba=this._getLayout();

if(ba&&ba.hasHeightForWidth()){return ba.getHeightForWidth(Y);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__updateMargin=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__userBounds;
},setUserBounds:function(O,top,P,Q){this.__userBounds={left:O,top:top,width:P,height:Q};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__userBounds;
qx.ui.core.queue.Layout.add(this);
},__emptyProperties:{},setLayoutProperties:function(a){if(a==null){return;
}var b=this.__layoutProperties;

if(!b){b=this.__layoutProperties={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(a);
}for(var c in a){if(a[c]==null){delete b[c];
}else{b[c]=a[c];
}}},getLayoutProperties:function(){return this.__layoutProperties||this.__emptyProperties;
},clearLayoutProperties:function(){delete this.__layoutProperties;
},updateLayoutProperties:function(L){var M=this._getLayout();

if(M){var N;
{};
M.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var D=arguments.callee.base.call(this);
var E=this.__layoutProperties;

if(E){D.__layoutProperties=qx.lang.Object.clone(E);
}return D;
}},destruct:function(){this.$$parent=this.$$subparent=this.__layoutProperties=this.__computedLayout=this.__userBounds=this.__sizeHint=null;
}});
})();
(function(){var a="qx.ui.core.DecoratorFactory";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__pool={};
},statics:{MAX_SIZE:15,__NO_POOL_ID:"$$nopool$$"},members:{__pool:null,getDecoratorElement:function(i){var n=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(i)){var l=i;
var k=qx.theme.manager.Decoration.getInstance().resolve(i);
}else{var l=n.__NO_POOL_ID;
k=i;
}var m=this.__pool;

if(m[l]&&m[l].length>0){var j=m[l].pop();
}else{var j=this._createDecoratorElement(k,l);
}j.$$pooled=false;
return j;
},poolDecorator:function(e){if(!e||e.$$pooled){return;
}var h=qx.ui.core.DecoratorFactory;
var f=e.getId();

if(f==h.__NO_POOL_ID){e.dispose();
return;
}var g=this.__pool;

if(!g[f]){g[f]=[];
}
if(g[f].length>h.MAX_SIZE){e.dispose();
}else{e.$$pooled=true;
g[f].push(e);
}},_createDecoratorElement:function(b,c){var d=new qx.html.Decorator(b,c);
{};
return d;
},toString:function(){return arguments.callee.base.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var p=this.__pool;

for(var o in p){qx.util.DisposeUtil.disposeArray(p,o);
}}this.__pool=null;
}});
})();
(function(){var ew="px",ev="Boolean",eu="qx.event.type.Mouse",et="qx.event.type.Drag",es="visible",er="qx.event.type.Focus",eq="on",ep="Integer",eo="excluded",en="qx.event.type.Data",dX="_applyPadding",dW="qx.event.type.Event",dV="hidden",dU="contextmenu",dT="String",dS="tabIndex",dR="backgroundColor",dQ="focused",dP="changeVisibility",dO="mshtml",eD="hovered",eE="qx.event.type.KeySequence",eB="qx.client",eC="absolute",ez="drag",eA="div",ex="disabled",ey="move",eF="dragstart",eG="qx.dynlocale",ef="dragchange",ee="dragend",eh="resize",eg="Decorator",ej="zIndex",ei="$$widget",em="opacity",ek="default",ed="Color",ec="changeToolTipText",cE="beforeContextmenuOpen",cF="_applyNativeContextMenu",cG="_applyBackgroundColor",cH="_applyFocusable",cI="changeShadow",cJ="qx.event.type.KeyInput",cK="createChildControl",cL="Font",cM="_applyShadow",cN="_applyEnabled",eK="_applySelectable",eJ="Number",eI="_applyKeepActive",eH="_applyVisibility",eO="repeat",eN="qxDraggable",eM="syncAppearance",eL="paddingLeft",eQ="__containerElement",eP="_applyDroppable",dn="#",dp="__widgetChildren",dl="qx.event.type.MouseWheel",dm="__layoutManager",ds="_applyCursor",dt="_applyDraggable",dq="changeTextColor",dr="changeContextMenu",dj="paddingTop",dk="changeSelectable",cV="hideFocus",cU="none",cX="__protectorElement",cW="outline",cR="_applyAppearance",cQ="_applyOpacity",cT="url(",cS=")",cP="qx.ui.core.Widget",cO="_applyFont",dy="cursor",dz="__decoratorElement",dA="qxDroppable",dB="changeZIndex",du="changeEnabled",dv="changeFont",dw="_applyDecorator",dx="_applyZIndex",dC="_applyTextColor",dD="__separators",dg="qx.ui.menu.Menu",df="_applyToolTipText",de="true",dd="widget",dc="__shadowElement",db="changeDecorator",da="_applyTabIndex",cY="changeAppearance",di="shorthand",dh="/",dE="__contentElement",dF="",dG="_applyContextMenu",dH="paddingBottom",dI="changeNativeContextMenu",dJ="qx.ui.tooltip.ToolTip",dK="qxKeepActive",dL="_applyKeepFocus",dM="paddingRight",dN="changeBackgroundColor",eb="changeLocale",ea="qxKeepFocus",dY="qx/static/blank.gif";
qx.Class.define(cP,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__containerElement=this._createContainerElement();
this.__contentElement=this.__createContentElement();
this.__containerElement.add(this.__contentElement);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:dW,disappear:dW,createChildControl:en,resize:en,move:en,syncAppearance:en,mousemove:eu,mouseover:eu,mouseout:eu,mousedown:eu,mouseup:eu,click:eu,dblclick:eu,contextmenu:eu,beforeContextmenuOpen:eu,mousewheel:dl,keyup:eE,keydown:eE,keypress:eE,keyinput:cJ,focus:er,blur:er,focusin:er,focusout:er,activate:er,deactivate:er,capture:dW,losecapture:dW,drop:et,dragleave:et,dragover:et,drag:et,dragstart:et,dragend:et,dragchange:et,droprequest:et},properties:{paddingTop:{check:ep,init:0,apply:dX,themeable:true},paddingRight:{check:ep,init:0,apply:dX,themeable:true},paddingBottom:{check:ep,init:0,apply:dX,themeable:true},paddingLeft:{check:ep,init:0,apply:dX,themeable:true},padding:{group:[dj,dM,dH,eL],mode:di,themeable:true},zIndex:{nullable:true,init:null,apply:dx,event:dB,check:ep,themeable:true},decorator:{nullable:true,init:null,apply:dw,event:db,check:eg,themeable:true},shadow:{nullable:true,init:null,apply:cM,event:cI,check:eg,themeable:true},backgroundColor:{nullable:true,check:ed,apply:cG,event:dN,themeable:true},textColor:{nullable:true,check:ed,apply:dC,event:dq,themeable:true,inheritable:true},font:{nullable:true,apply:cO,check:cL,event:dv,themeable:true,inheritable:true,dispose:true},opacity:{check:eJ,apply:cQ,themeable:true,nullable:true,init:null},cursor:{check:dT,apply:ds,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:dJ,nullable:true},toolTipText:{check:dT,nullable:true,event:ec,apply:df},toolTipIcon:{check:dT,nullable:true,event:ec},blockToolTip:{check:ev,init:false},visibility:{check:[es,dV,eo],init:es,apply:eH,event:dP},enabled:{init:true,check:ev,inheritable:true,apply:cN,event:du},anonymous:{init:false,check:ev},tabIndex:{check:ep,nullable:true,apply:da},focusable:{check:ev,init:false,apply:cH},keepFocus:{check:ev,init:false,apply:dL},keepActive:{check:ev,init:false,apply:eI},draggable:{check:ev,init:false,apply:dt},droppable:{check:ev,init:false,apply:eP},selectable:{check:ev,init:false,event:dk,apply:eK},contextMenu:{check:dg,apply:dG,nullable:true,event:dr},nativeContextMenu:{check:ev,init:false,themeable:true,event:dI,apply:cF},appearance:{check:dT,init:dd,apply:cR,event:cY}},statics:{DEBUG:false,getWidgetByElement:function(cu){while(cu){var cv=cu.$$widget;
if(cv!=null){return qx.core.ObjectRegistry.fromHashCode(cv);
}cu=cu.parentNode;
}return null;
},contains:function(parent,r){while(r){if(parent==r){return true;
}r=r.getLayoutParent();
}return false;
},__decoratorPool:new qx.ui.core.DecoratorFactory(),__shadowPool:new qx.ui.core.DecoratorFactory()},members:{__containerElement:null,__contentElement:null,__decoratorElement:null,__shadowElement:null,__protectorElement:null,__initialAppearanceApplied:null,__toolTipTextListenerId:null,__layoutManager:null,_getLayout:function(){return this.__layoutManager;
},_setLayout:function(go){{};

if(this.__layoutManager){this.__layoutManager.connectToWidget(null);
}
if(go){go.connectToWidget(this);
}this.__layoutManager=go;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var U=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(U);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(U);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__checkInsetsModified:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var fg=qx.theme.manager.Decoration.getInstance();
var fi=fg.resolve(a).getInsets();
var fh=fg.resolve(b).getInsets();

if(fi.top!=fh.top||fi.right!=fh.right||fi.bottom!=fh.bottom||fi.left!=fh.left){return true;
}return false;
},renderLayout:function(cf,top,cg,ch){var cq=arguments.callee.base.call(this,cf,top,cg,ch);
if(!cq){return;
}var cj=this.getContainerElement();
var content=this.getContentElement();
var cn=cq.size||this._updateInsets;
var cr=ew;
var co={};
if(cq.position){co.left=cf+cr;
co.top=top+cr;
}if(cq.size){co.width=cg+cr;
co.height=ch+cr;
}
if(cq.position||cq.size){cj.setStyles(co);
}
if(cn||cq.local||cq.margin){var ci=this.getInsets();
var innerWidth=cg-ci.left-ci.right;
var innerHeight=ch-ci.top-ci.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var cl={};

if(this._updateInsets){cl.left=ci.left+cr;
cl.top=ci.top+cr;
}
if(cn){cl.width=innerWidth+cr;
cl.height=innerHeight+cr;
}
if(cn||this._updateInsets){content.setStyles(cl);
}
if(cq.size){var cp=this.__protectorElement;

if(cp){cp.setStyles({width:cg+ew,height:ch+ew});
}}
if(cq.size||this._updateInsets){if(this.__decoratorElement){this.__decoratorElement.resize(cg,ch);
}}
if(cq.size){if(this.__shadowElement){var ci=this.__shadowElement.getInsets();
var cm=cg+ci.left+ci.right;
var ck=ch+ci.top+ci.bottom;
this.__shadowElement.resize(cm,ck);
}}
if(cn||cq.local||cq.margin){if(this.__layoutManager&&this.hasLayoutChildren()){this.__layoutManager.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cq.position&&this.hasListener(ey)){this.fireDataEvent(ey,this.getBounds());
}
if(cq.size&&this.hasListener(eh)){this.fireDataEvent(eh,this.getBounds());
}delete this._updateInsets;
return cq;
},__separators:null,clearSeparators:function(){var bE=this.__separators;

if(!bE){return;
}var bF=qx.ui.core.Widget.__decoratorPool;
var content=this.getContentElement();
var bD;

for(var i=0,l=bE.length;i<l;i++){bD=bE[i];
bF.poolDecorator(bD);
content.remove(bD);
}bE.length=0;
},renderSeparator:function(fd,fe){var ff=qx.ui.core.Widget.__decoratorPool.getDecoratorElement(fd);
this.getContentElement().add(ff);
ff.resize(fe.width,fe.height);
ff.setStyles({left:fe.left+ew,top:fe.top+ew});
if(!this.__separators){this.__separators=[ff];
}else{this.__separators.push(ff);
}},_computeSizeHint:function(){var fy=this.getWidth();
var fx=this.getMinWidth();
var ft=this.getMaxWidth();
var fw=this.getHeight();
var fu=this.getMinHeight();
var fv=this.getMaxHeight();
{};
var fz=this._getContentHint();
var fs=this.getInsets();
var fB=fs.left+fs.right;
var fA=fs.top+fs.bottom;

if(fy==null){fy=fz.width+fB;
}
if(fw==null){fw=fz.height+fA;
}
if(fx==null){fx=fB;

if(fz.minWidth!=null){fx+=fz.minWidth;
}}
if(fu==null){fu=fA;

if(fz.minHeight!=null){fu+=fz.minHeight;
}}
if(ft==null){if(fz.maxWidth==null){ft=Infinity;
}else{ft=fz.maxWidth+fB;
}}
if(fv==null){if(fz.maxHeight==null){fv=Infinity;
}else{fv=fz.maxHeight+fA;
}}return {width:fy,minWidth:fx,maxWidth:ft,height:fw,minHeight:fu,maxHeight:fv};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__layoutManager){this.__layoutManager.invalidateLayoutCache();
}},_getContentHint:function(){var k=this.__layoutManager;

if(k){if(this.hasLayoutChildren()){var j;
var m=k.getSizeHint();
{};
return m;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(gL){var gP=this.getInsets();
var gS=gP.left+gP.right;
var gR=gP.top+gP.bottom;
var gQ=gL-gS;
var gN=this._getLayout();

if(gN&&gN.hasHeightForWidth()){var gM=gN.getHeightForWidth(gL);
}else{gM=this._getContentHeightForWidth(gQ);
}var gO=gM+gR;
return gO;
},_getContentHeightForWidth:function(gi){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var gU=this.getPaddingRight();
var gW=this.getPaddingBottom();
var gV=this.getPaddingLeft();

if(this.__decoratorElement){var gT=this.__decoratorElement.getInsets();
{};
top+=gT.top;
gU+=gT.right;
gW+=gT.bottom;
gV+=gT.left;
}return {"top":top,"right":gU,"bottom":gW,"left":gV};
},getInnerSize:function(){var bH=this.getBounds();

if(!bH){return null;
}var bG=this.getInsets();
return {width:bH.width-bG.left-bG.right,height:bH.height-bG.top-bG.bottom};
},show:function(){this.setVisibility(es);
},hide:function(){this.setVisibility(dV);
},exclude:function(){this.setVisibility(eo);
},isVisible:function(){return this.getVisibility()===es;
},isHidden:function(){return this.getVisibility()!==es;
},isExcluded:function(){return this.getVisibility()===eo;
},isSeeable:function(){var fL=this.getContainerElement().getDomElement();

if(fL){return fL.offsetWidth>0;
}var fK=this;

do{if(!fK.isVisible()){return false;
}
if(fK.isRootWidget()){return true;
}fK=fK.getLayoutParent();
}while(fK);
return false;
},_createContainerElement:function(){var bg=new qx.html.Element(eA);
{};
bg.setStyles({"position":eC,"zIndex":0});
bg.setAttribute(ei,this.toHashCode());
{};
return bg;
},__createContentElement:function(){var gl=this._createContentElement();
{};
gl.setStyles({"position":eC,"zIndex":10});
return gl;
},_createContentElement:function(){var bU=new qx.html.Element(eA);
bU.setStyles({"overflowX":dV,"overflowY":dV});
return bU;
},getContainerElement:function(){return this.__containerElement;
},getContentElement:function(){return this.__contentElement;
},getDecoratorElement:function(){return this.__decoratorElement||null;
},getShadowElement:function(){return this.__shadowElement||null;
},__widgetChildren:null,getLayoutChildren:function(){var fE=this.__widgetChildren;

if(!fE){return this.__emptyChildren;
}var fF;

for(var i=0,l=fE.length;i<l;i++){var fD=fE[i];

if(fD.hasUserBounds()||fD.isExcluded()){if(fF==null){fF=fE.concat();
}qx.lang.Array.remove(fF,fD);
}}return fF||fE;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var F=this.__layoutManager;

if(F){F.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var gA=this.__widgetChildren;

if(!gA){return false;
}var gB;

for(var i=0,l=gA.length;i<l;i++){gB=gA[i];

if(!gB.hasUserBounds()&&!gB.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__emptyChildren:[],_getChildren:function(){return this.__widgetChildren||this.__emptyChildren;
},_indexOf:function(G){var H=this.__widgetChildren;

if(!H){return -1;
}return H.indexOf(G);
},_hasChildren:function(){var cw=this.__widgetChildren;
return cw!=null&&(!!cw[0]);
},addChildrenToQueue:function(fj){var fk=this.__widgetChildren;

if(!fk){return;
}var fl;

for(var i=0,l=fk.length;i<l;i++){fl=fk[i];
fj[fl.$$hash]=fl;
fl.addChildrenToQueue(fj);
}},_add:function(bK,bL){if(bK.getLayoutParent()==this){qx.lang.Array.remove(this.__widgetChildren,bK);
}
if(this.__widgetChildren){this.__widgetChildren.push(bK);
}else{this.__widgetChildren=[bK];
}this.__addHelper(bK,bL);
},_addAt:function(fR,fS,fT){if(!this.__widgetChildren){this.__widgetChildren=[];
}if(fR.getLayoutParent()==this){qx.lang.Array.remove(this.__widgetChildren,fR);
}var fU=this.__widgetChildren[fS];

if(fU===fR){return fR.setLayoutProperties(fT);
}
if(fU){qx.lang.Array.insertBefore(this.__widgetChildren,fR,fU);
}else{this.__widgetChildren.push(fR);
}this.__addHelper(fR,fT);
},_addBefore:function(I,J,K){{};

if(I==J){return;
}
if(!this.__widgetChildren){this.__widgetChildren=[];
}if(I.getLayoutParent()==this){qx.lang.Array.remove(this.__widgetChildren,I);
}qx.lang.Array.insertBefore(this.__widgetChildren,I,J);
this.__addHelper(I,K);
},_addAfter:function(fV,fW,fX){{};

if(fV==fW){return;
}
if(!this.__widgetChildren){this.__widgetChildren=[];
}if(fV.getLayoutParent()==this){qx.lang.Array.remove(this.__widgetChildren,fV);
}qx.lang.Array.insertAfter(this.__widgetChildren,fV,fW);
this.__addHelper(fV,fX);
},_remove:function(bR){if(!this.__widgetChildren){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__widgetChildren,bR);
this.__removeHelper(bR);
},_removeAt:function(gy){if(!this.__widgetChildren){throw new Error("This widget has no children!");
}var gz=this.__widgetChildren[gy];
qx.lang.Array.removeAt(this.__widgetChildren,gy);
this.__removeHelper(gz);
return gz;
},_removeAll:function(){if(!this.__widgetChildren){return;
}var X=this.__widgetChildren.concat();
this.__widgetChildren.length=0;

for(var i=X.length-1;i>=0;i--){this.__removeHelper(X[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__addHelper:function(p,q){{};
var parent=p.getLayoutParent();

if(parent&&parent!=this){parent._remove(p);
}p.setLayoutParent(this);
if(q){p.setLayoutProperties(q);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(p);
}},__removeHelper:function(Y){{};

if(Y.getLayoutParent()!==this){throw new Error("Remove Error: "+Y+" is not a child of this widget!");
}Y.setLayoutParent(null);
if(this.__layoutManager){this.__layoutManager.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(Y);
}},capture:function(fC){this.getContainerElement().capture(fC);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(bP,bQ,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__protectorElement){return;
}var gp=this.__protectorElement=new qx.html.Element;
{};
gp.setStyles({position:eC,top:0,left:0,zIndex:7});
var gq=this.getBounds();

if(gq){this.__protectorElement.setStyles({width:gq.width+ew,height:gq.height+ew});
}if(qx.core.Variant.isSet(eB,dO)){gp.setStyles({backgroundImage:cT+qx.util.ResourceManager.getInstance().toUri(dY)+cS,backgroundRepeat:eO});
}this.getContainerElement().add(gp);
},_applyDecorator:function(fY,ga){{};
var ge=qx.ui.core.Widget.__decoratorPool;
var gc=this.getContainerElement();
if(!this.__protectorElement&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(ga){gc.remove(this.__decoratorElement);
ge.poolDecorator(this.__decoratorElement);
}if(fY){var gd=this.__decoratorElement=ge.getDecoratorElement(fY);
gd.setStyle(ej,5);
var gb=this.getBackgroundColor();
gd.tint(gb);
gc.add(gd);
}else{delete this.__decoratorElement;
this._applyBackgroundColor(this.getBackgroundColor());
}if(fY&&!ga&&gb){this.getContainerElement().setStyle(dR,null);
}if(this.__checkInsetsModified(ga,fY)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(fY){var gf=this.getBounds();

if(gf){gd.resize(gf.width,gf.height);
this.__protectorElement&&
this.__protectorElement.setStyles({width:gf.width+ew,height:gf.height+ew});
}}},_applyShadow:function(gC,gD){var gK=qx.ui.core.Widget.__shadowPool;
var gF=this.getContainerElement();
if(gD){gF.remove(this.__shadowElement);
gK.poolDecorator(this.__shadowElement);
}if(gC){var gH=this.__shadowElement=gK.getDecoratorElement(gC);
gF.add(gH);
var gJ=gH.getInsets();
gH.setStyles({left:(-gJ.left)+ew,top:(-gJ.top)+ew});
var gI=this.getBounds();

if(gI){var gG=gI.width+gJ.left+gJ.right;
var gE=gI.height+gJ.top+gJ.bottom;
gH.resize(gG,gE);
}gH.tint(null);
}else{delete this.__shadowElement;
}},_applyToolTipText:function(fm,fn){if(qx.core.Variant.isSet(eG,eq)){if(this.__toolTipTextListenerId){return;
}var fo=qx.locale.Manager.getInstance();
this.__toolTipTextListenerId=fo.addListener(eb,function(){if(fm&&fm.translate){this.setToolTipText(fm.translate());
}},this);
}},_applyTextColor:function(eR,eS){},_applyZIndex:function(s,t){this.getContainerElement().setStyle(ej,s==null?0:s);
},_applyVisibility:function(fH,fI){var fJ=this.getContainerElement();

if(fH===es){fJ.show();
}else{fJ.hide();
}var parent=this.$$parent;

if(parent&&(fI==null||fH==null||fI===eo||fH===eo)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(bA,bB){this.getContainerElement().setStyle(em,bA==1?null:bA);
if(qx.core.Variant.isSet(eB,dO)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var bC=(bA==1||bA==null)?null:0.99;
this.getContentElement().setStyle(em,bC);
}}},_applyCursor:function(cs,ct){if(cs==null&&!this.isSelectable()){cs=ek;
}this.getContainerElement().setStyle(dy,cs,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(u,v){var w=this.getBackgroundColor();
var y=this.getContainerElement();

if(this.__decoratorElement){this.__decoratorElement.tint(w);
y.setStyle(dR,null);
}else{var x=qx.theme.manager.Color.getInstance().resolve(w);
y.setStyle(dR,x);
}},_applyFont:function(fM,fN){},__states:null,$$stateChanges:null,_forwardStates:null,hasState:function(gr){var gs=this.__states;
return gs&&gs[gr];
},addState:function(gt){var gu=this.__states;

if(!gu){gu=this.__states={};
}
if(gu[gt]){return;
}this.__states[gt]=true;
if(gt===eD){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gx=this.__childControls;

if(forward&&forward[gt]&&gx){var gv;

for(var gw in gx){gv=gx[gw];

if(gv instanceof qx.ui.core.Widget){gx[gw].addState(gt);
}}}},removeState:function(bV){var bW=this.__states;

if(!bW||!bW[bV]){return;
}delete this.__states[bV];
if(bV===eD){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var ca=this.__childControls;

if(forward&&forward[bV]&&ca){for(var bY in ca){var bX=ca[bY];

if(bX instanceof qx.ui.core.Widget){bX.removeState(bV);
}}}},replaceState:function(ba,bb){var bc=this.__states;

if(!bc){bc=this.__states={};
}
if(!bc[bb]){bc[bb]=true;
}
if(bc[ba]){delete bc[ba];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bf=this.__childControls;

if(forward&&forward[bb]&&bf){for(var be in bf){var bd=bf[be];

if(bd instanceof qx.ui.core.Widget){bd.replaceState(ba,bb);
}}}},__appearanceSelector:null,__updateSelector:null,syncAppearance:function(){var bn=this.__states;
var bm=this.__appearanceSelector;
var bo=qx.theme.manager.Appearance.getInstance();
var bk=qx.core.Property.$$method.setThemed;
var bs=qx.core.Property.$$method.resetThemed;
if(this.__updateSelector){delete this.__updateSelector;
if(bm){var bj=bo.styleFrom(bm,bn,null,this.getAppearance());
if(bj){bm=null;
}}}if(!bm){var bl=this;
var br=[];

do{br.push(bl.$$subcontrol||bl.getAppearance());
}while(bl=bl.$$subparent);
bm=this.__appearanceSelector=br.reverse().join(dh).replace(/#[0-9]+/g,dF);
}var bp=bo.styleFrom(bm,bn,null,this.getAppearance());

if(bp){var bq;

if(bj){for(var bq in bj){if(bp[bq]===undefined){this[bs[bq]]();
}}}{};
for(var bq in bp){bp[bq]===undefined?this[bs[bq]]():this[bk[bq]](bp[bq]);
}}else if(bj){for(var bq in bj){this[bs[bq]]();
}}this.fireDataEvent(eM,this.__states);
},_applyAppearance:function(gm,gn){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__initialAppearanceApplied){qx.ui.core.queue.Appearance.add(this);
this.__initialAppearanceApplied=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__updateSelector=true;
qx.ui.core.queue.Appearance.add(this);
var N=this.__childControls;

if(N){var L;

for(var M in N){L=N[M];

if(L instanceof qx.ui.core.Widget){L.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fp=this;

while(fp.getAnonymous()){fp=fp.getLayoutParent();

if(!fp){return null;
}}return fp;
},getFocusTarget:function(){var z=this;

if(!z.getEnabled()){return null;
}
while(z.getAnonymous()||!z.getFocusable()){z=z.getLayoutParent();

if(!z||!z.getEnabled()){return null;
}}return z;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(eY,fa){var fb=this.getFocusElement();
if(eY){var fc=this.getTabIndex();

if(fc==null){fc=1;
}fb.setAttribute(dS,fc);
if(qx.core.Variant.isSet(eB,dO)){fb.setAttribute(cV,de);
}else{fb.setStyle(cW,cU);
}}else{if(fb.isNativelyFocusable()){fb.setAttribute(dS,-1);
}else if(fa){fb.setAttribute(dS,null);
}}},_applyKeepFocus:function(bS){var bT=this.getFocusElement();
bT.setAttribute(ea,bS?eq:null);
},_applyKeepActive:function(Q){var R=this.getContainerElement();
R.setAttribute(dK,Q?eq:null);
},_applyTabIndex:function(fQ){if(fQ==null){fQ=1;
}else if(fQ<1||fQ>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&fQ!=null){this.getFocusElement().setAttribute(dS,fQ);
}},_applySelectable:function(fG){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(fG);
this.getContentElement().setSelectable(fG);
},_applyEnabled:function(n,o){if(n===false){this.addState(ex);
this.removeState(eD);
if(this.isFocusable()){this.removeState(dQ);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(ex);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(D,E,name){},_applyContextMenu:function(O,P){if(P){P.removeState(dU);

if(P.getOpener()==this){P.resetOpener();
}
if(!O){this.removeListener(dU,this._onContextMenuOpen);
P.removeListener(dP,this._onBeforeContextMenuOpen,this);
}}
if(O){O.setOpener(this);
O.addState(dU);

if(!P){this.addListener(dU,this._onContextMenuOpen);
O.addListener(dP,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==es&&this.hasListener(cE)){this.fireDataEvent(cE,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(eT,eU){if(!this.isEnabled()&&eT===true){eT=false;
}qx.ui.core.DragDropCursor.getInstance();
if(eT){this.addListener(eF,this._onDragStart);
this.addListener(ez,this._onDrag);
this.addListener(ee,this._onDragEnd);
this.addListener(ef,this._onDragChange);
}else{this.removeListener(eF,this._onDragStart);
this.removeListener(ez,this._onDrag);
this.removeListener(ee,this._onDragEnd);
this.removeListener(ef,this._onDragChange);
}this.getContainerElement().setAttribute(eN,eT?eq:null);
},_applyDroppable:function(gg,gh){if(!this.isEnabled()&&gg===true){gg=false;
}this.getContainerElement().setAttribute(dA,gg?eq:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(ek);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var bM=qx.ui.core.DragDropCursor.getInstance();
var bN=e.getCurrentAction();
bN?bM.setAction(bN):bM.resetAction();
},visualizeFocus:function(){this.addState(dQ);
},visualizeBlur:function(){this.removeState(dQ);
},scrollChildIntoView:function(cb,cc,cd,ce){this.scrollChildIntoViewX(cb,cc,ce);
this.scrollChildIntoViewY(cb,cd,ce);
},scrollChildIntoViewX:function(eV,eW,eX){this.getContentElement().scrollChildIntoViewX(eV.getContainerElement(),eW,eX);
},scrollChildIntoViewY:function(cB,cC,cD){this.getContentElement().scrollChildIntoViewY(cB.getContainerElement(),cC,cD);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(bO){if(!this.__childControls){return false;
}return !!this.__childControls[bO];
},__childControls:null,_getCreatedChildControls:function(){return this.__childControls;
},getChildControl:function(A,B){if(!this.__childControls){if(B){return null;
}this.__childControls={};
}var C=this.__childControls[A];

if(C){return C;
}
if(B===true){return null;
}return this._createChildControl(A);
},_showChildControl:function(S){var T=this.getChildControl(S);
T.show();
return T;
},_excludeChildControl:function(d){var f=this.getChildControl(d,true);

if(f){f.exclude();
}},_isChildControlVisible:function(V){var W=this.getChildControl(V,true);

if(W){return W.isVisible();
}return false;
},_createChildControl:function(bv){if(!this.__childControls){this.__childControls={};
}else if(this.__childControls[bv]){throw new Error("Child control '"+bv+"' already created!");
}var bz=bv.indexOf(dn);

if(bz==-1){var bw=this._createChildControlImpl(bv);
}else{var bw=this._createChildControlImpl(bv.substring(0,bz));
}
if(!bw){throw new Error("Unsupported control: "+bv);
}bw.$$subcontrol=bv;
bw.$$subparent=this;
var bx=this.__states;
var forward=this._forwardStates;

if(bx&&forward&&bw instanceof qx.ui.core.Widget){for(var by in bx){if(forward[by]){bw.addState(by);
}}}this.fireDataEvent(cK,bw);
return this.__childControls[bv]=bw;
},_createChildControlImpl:function(gX){return null;
},_disposeChildControls:function(){var cA=this.__childControls;

if(!cA){return;
}var cy=qx.ui.core.Widget;

for(var cz in cA){var cx=cA[cz];

if(!cy.contains(this,cx)){cx.destroy();
}else{cx.dispose();
}}delete this.__childControls;
},_findTopControl:function(){var c=this;

while(c){if(!c.$$subparent){return c;
}c=c.$$subparent;
}return null;
},getContainerLocation:function(bh){var bi=this.getContainerElement().getDomElement();
return bi?qx.bom.element.Location.get(bi,bh):null;
},getContentLocation:function(g){var h=this.getContentElement().getDomElement();
return h?qx.bom.element.Location.get(h,g):null;
},setDomLeft:function(bt){var bu=this.getContainerElement().getDomElement();

if(bu){bu.style.left=bt+ew;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(gj){var gk=this.getContainerElement().getDomElement();

if(gk){gk.style.top=gj+ew;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(bI,top){var bJ=this.getContainerElement().getDomElement();

if(bJ){bJ.style.left=bI+ew;
bJ.style.top=top+ew;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var fq=arguments.callee.base.call(this);

if(this.getChildren){var fr=this.getChildren();

for(var i=0,l=fr.length;i<l;i++){fq.add(fr[i].clone());
}}return fq;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(eG,eq)){if(this.__toolTipTextListenerId){qx.locale.Manager.getInstance().removeListenerById(this.__toolTipTextListenerId);
}}this.getContainerElement().setAttribute(ei,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var fP=qx.ui.core.Widget;
var fO=this.getContainerElement();

if(this.__decoratorElement){fO.remove(this.__decoratorElement);
fP.__decoratorPool.poolDecorator(this.__decoratorElement);
}
if(this.__shadowElement){fO.remove(this.__shadowElement);
fP.__shadowPool.poolDecorator(this.__shadowElement);
}this.clearSeparators();
this.__decoratorElement=this.__shadowElement=this.__separators=null;
}else{this._disposeArray(dD);
this._disposeObjects(dz,dc);
}this._disposeArray(dp);
this.__states=this.__childControls=null;
this._disposeObjects(dm,eQ,dE,cX);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(h){arguments.callee.base.call(this);

if(h!=null){this._setLayout(h);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(g){this.fireNonBubblingEvent(b,qx.event.type.Data,[g]);
},_afterRemoveChild:function(i){this.fireNonBubblingEvent(a,qx.event.type.Data,[i]);
}},defer:function(e,f){qx.ui.core.MChildrenHandling.remap(f);
qx.ui.core.MLayoutHandling.remap(f);
}});
})();
(function(){var j="keep-align",i="interval",h="Integer",g="direct",f="best-fit",e="mouse",d="bottom-left",c="disappear",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[g,j,f],init:j,themeable:true},placementModeY:{check:[g,j,f],init:j,themeable:true},offsetLeft:{check:h,init:0,themeable:true},offsetTop:{check:h,init:0,themeable:true},offsetRight:{check:h,init:0,themeable:true},offsetBottom:{check:h,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__updater:null,getLayoutLocation:function(L){var O,N,P,top;
N=L.getBounds();
P=N.left;
top=N.top;
var Q=N;
L=L.getLayoutParent();

while(L&&!L.isRootWidget()){N=L.getBounds();
P+=N.left;
top+=N.top;
O=L.getInsets();
P+=O.left;
top+=O.top;
L=L.getLayoutParent();
}if(L.isRootWidget()){var M=L.getContainerLocation();

if(M){P+=M.left;
top+=M.top;
}}return {left:P,top:top,right:P+Q.width,bottom:top+Q.height};
},moveTo:function(F,top){if(this.getDomMove()){this.setDomPosition(F,top);
}else{this.setLayoutProperties({left:F,top:top});
}},placeToWidget:function(G,H){if(H){this.__updater=qx.lang.Function.bind(this.placeToWidget,this,G,false);
qx.event.Idle.getInstance().addListener(i,this.__updater);
this.addListener(c,function(){if(this.__updater){qx.event.Idle.getInstance().removeListener(i,this.__updater);
this.__updater=null;
}},this);
}var I=G.getContainerLocation()||this.getLayoutLocation(G);
this.__place(I);
},placeToMouse:function(event){var E=event.getDocumentLeft();
var top=event.getDocumentTop();
var D={left:E,top:top,right:E,bottom:top};
this.__place(D);
},placeToElement:function(V,W){var location=qx.bom.element.Location.get(V);
var X={left:location.left,top:location.top,right:location.left+V.offsetWidth,bottom:location.top+V.offsetHeight};
if(W){this.__updater=qx.lang.Function.bind(this.placeToElement,this,V,false);
qx.event.Idle.getInstance().addListener(i,this.__updater);
this.addListener(c,function(){if(this.__updater){qx.event.Idle.getInstance().removeListener(i,this.__updater);
this.__updater=null;
}},this);
}this.__place(X);
},placeToPoint:function(B){var C={left:B.left,top:B.top,right:B.left,bottom:B.top};
this.__place(C);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__getPlacementSize:function(T){var U=null;

if(this._computePlacementSize){var U=this._computePlacementSize();
}else if(this.isVisible()){var U=this.getBounds();
}
if(U==null){this.addListenerOnce(q,function(){this.__getPlacementSize(T);
},this);
}else{T.call(this,U);
}},__place:function(A){this.__getPlacementSize(function(J){var K=qx.util.placement.Placement.compute(J,this.getLayoutParent().getBounds(),A,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(K.left,K.top);
});
},setSmart:function(y){{};
var z=y?j:g;
this.set({placementModeX:z,placementModeY:z});
},getSmart:function(){{};
var R=this.getPlacementModeX()==j?true:false;
var S=this.getPlacementModeY()==j?true:false;
return R&&S;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__updater){qx.event.Idle.getInstance().removeListener(i,this.__updater);
}}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(i){arguments.callee.base.call(this,i);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(f,g){arguments.callee.base.call(this,f,g);
var h=qx.ui.popup.Manager.getInstance();
f===d?h.add(this):h.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(v,w){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(v!=null){this.setLabel(v);
}
if(w!=null){this.setIcon(w);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(x){var y;

switch(x){case l:y=new qx.ui.basic.Atom;
this._add(y);
break;
}return y||arguments.callee.base.call(this,x);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(s,t){var u=this.getChildControl(l);
s==null?u.resetIcon:u.setIcon(s);
},_applyLabel:function(p,q){var r=this.getChildControl(l);
p==null?r.resetLabel():r.setLabel(p);
},_applyRich:function(m,n){var o=this.getChildControl(l);
o.setRich(m);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__queue:{},remove:function(m){delete this.__queue[m.$$hash];
},add:function(c){this.__queue[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var h=this.__getSortedQueue();
for(var i=h.length-1;i>=0;i--){var j=h[i];
if(j.hasValidLayout()){continue;
}if(j.isRootWidget()&&!j.hasUserBounds()){var l=j.getSizeHint();
j.renderLayout(0,0,l.width,l.height);
}else{var k=j.getBounds();
j.renderLayout(k.left,k.top,k.width,k.height);
}}},getNestingLevel:function(d){var e=this.__nesting;
var g=0;
var parent=d;
while(true){if(e[parent.$$hash]!=null){g+=e[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
g+=1;
}var f=g;

while(d&&d!==parent){e[d.$$hash]=f--;
d=d.$$parent;
}return g;
},__getLevelGroupedWidgets:function(){var s=qx.ui.core.queue.Visibility;
this.__nesting={};
var r=[];
var q=this.__queue;
var n,p;

for(var o in q){n=q[o];

if(s.isVisible(n)){p=this.getNestingLevel(n);
if(!r[p]){r[p]={};
}r[p][o]=n;
delete q[o];
}}return r;
},__getSortedQueue:function(){var w=[];
var y=this.__getLevelGroupedWidgets();

for(var v=y.length-1;v>=0;v--){if(!y[v]){continue;
}
for(var u in y[v]){var t=y[v][u];
if(v==0||t.isRootWidget()||t.hasUserBounds()){w.push(t);
t.invalidateLayoutCache();
continue;
}var A=t.getSizeHint(false);

if(A){t.invalidateLayoutCache();
var x=t.getSizeHint();
var z=(!t.getBounds()||A.minWidth!==x.minWidth||A.width!==x.width||A.maxWidth!==x.maxWidth||A.minHeight!==x.minHeight||A.height!==x.height||A.maxHeight!==x.maxHeight);
}else{z=true;
}
if(z){var parent=t.getLayoutParent();

if(!y[v-1]){y[v-1]={};
}y[v-1][parent.$$hash]=parent;
}else{w.push(t);
}}}return w;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){arguments.callee.base.call(this);
this.__manager=h;
this.__window=h.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__manager:null,__window:null,canHandleEvent:function(e,f){},registerEvent:function(i,j,k){},unregisterEvent:function(b,c,d){}},destruct:function(){this.__manager=this.__window=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__calls={};
this.__timeoutWrapper=qx.lang.Function.bind(this.__timeout,this);
this.__hasCalls=false;
},members:{__timeoutId:null,__currentQueue:null,__calls:null,__hasCalls:null,__timeoutWrapper:null,schedule:function(g){if(this.__timeoutId==null){this.__timeoutId=window.setTimeout(this.__timeoutWrapper,0);
}var h=g.toHashCode();
if(this.__currentQueue&&this.__currentQueue[h]){return;
}this.__calls[h]=g;
this.__hasCalls=true;
},cancel:function(c){var d=c.toHashCode();
if(this.__currentQueue&&this.__currentQueue[d]){this.__currentQueue[d]=null;
return;
}delete this.__calls[d];
if(qx.lang.Object.isEmpty(this.__calls)&&this.__timeoutId!=null){window.clearTimeout(this.__timeoutId);
this.__timeoutId=null;
}},__timeout:qx.event.GlobalError.observeMethod(function(){this.__timeoutId=null;
while(this.__hasCalls){this.__currentQueue=qx.lang.Object.clone(this.__calls);
this.__calls={};
this.__hasCalls=false;

for(var f in this.__currentQueue){var e=this.__currentQueue[f];

if(e){this.__currentQueue[f]=null;
e.call();
}}}this.__currentQueue=null;
})},destruct:function(){if(this.__timeoutId!=null){window.clearTimeout(this.__timeoutId);
}this.__timeoutWrapper=this.__calls=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){arguments.callee.base.call(this);
this.__callback=b;
this.__context=c||null;
this.__manager=qx.util.DeferredCallManager.getInstance();
},members:{__callback:null,__context:null,__manager:null,cancel:function(){this.__manager.cancel(this);
},schedule:function(){this.__manager.schedule(this);
},call:function(){this.__context?this.__callback.apply(this.__context):this.__callback();
}},destruct:function(d,e){this.cancel();
this.__context=this.__callback=this.__manager=null;
}});
})();
(function(){var dz="element",dy="qx.client",dx="div",dw="",dv="mshtml",du="none",dt="scroll",ds="text",dr="qx.html.Element",dq="|capture|",dT="focus",dS="gecko",dR="blur",dQ="deactivate",dP="capture",dO="userSelect",dN="-moz-none",dM="visible",dL="releaseCapture",dK="|bubble|",dG="qxSelectable",dH="tabIndex",dE="off",dF="activate",dC="MozUserSelect",dD="normal",dA="webkit",dB="hidden",dI="__children",dJ="on";
qx.Class.define(dr,{extend:qx.core.Object,construct:function(cO){arguments.callee.base.call(this);
this.__nodeName=cO||dx;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__selection:{},_scheduleFlush:function(co){qx.html.Element.__deferredCall.schedule();
},flush:function(){var C;
{};
var s=this.__getFocusHandler();
var r=s.getFocus();

if(r&&this.__willBecomeInvisible(r)){s.blur(r);
}var J=s.getActive();

if(J&&this.__willBecomeInvisible(J)){qx.bom.Element.deactivate(J);
}var v=this.__getCaptureElement();

if(v&&this.__willBecomeInvisible(v)){qx.bom.Element.releaseCapture(v);
}var D=[];
var E=this._modified;

for(var B in E){C=E[B];
if(C.__willBeSeeable()){if(C.__element&&qx.dom.Hierarchy.isRendered(C.__element)){D.push(C);
}else{{};
C.__flush();
}delete E[B];
}}
for(var i=0,l=D.length;i<l;i++){C=D[i];
{};
C.__flush();
}var z=this._visibility;

for(var B in z){C=z[B];
{};
C.__element.style.display=C.__visible?dw:du;
if(qx.core.Variant.isSet(dy,dv)){if(!(document.documentMode>=8)){C.__element.style.visibility=C.__visible?dM:dB;
}}delete z[B];
}var scroll=this._scroll;

for(var B in scroll){C=scroll[B];
var K=C.__element;

if(K&&K.offsetWidth){var u=true;
if(C.__lazyScrollX!=null){C.__element.scrollLeft=C.__lazyScrollX;
delete C.__lazyScrollX;
}if(C.__lazyScrollY!=null){C.__element.scrollTop=C.__lazyScrollY;
delete C.__lazyScrollY;
}var G=C.__lazyScrollIntoViewX;

if(G!=null){var A=G.element.getDomElement();

if(A&&A.offsetWidth){qx.bom.element.Scroll.intoViewX(A,K,G.align);
delete C.__lazyScrollIntoViewX;
}else{u=false;
}}var H=C.__lazyScrollIntoViewY;

if(H!=null){var A=H.element.getDomElement();

if(A&&A.offsetWidth){qx.bom.element.Scroll.intoViewY(A,K,H.align);
delete C.__lazyScrollIntoViewY;
}else{u=false;
}}if(u){delete scroll[B];
}}}var t={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var I=this._actions[i];
var F=I.element.__element;

if(!F||!t[I.type]&&!I.element.__willBeSeeable()){continue;
}var w=I.args;
w.unshift(F);
qx.bom.Element[I.type].apply(qx.bom.Element,w);
}this._actions=[];
for(var B in this.__selection){var q=this.__selection[B];
var K=q.element.__element;

if(K){qx.bom.Selection.set(K,q.start,q.end);
delete this.__selection[B];
}}qx.event.handler.Appear.refresh();
},__getFocusHandler:function(){if(!this.__focusHandler){var dl=qx.event.Registration.getManager(window);
this.__focusHandler=dl.getHandler(qx.event.handler.Focus);
}return this.__focusHandler;
},__getCaptureElement:function(){if(!this.__mouseCapture){var Q=qx.event.Registration.getManager(window);
this.__mouseCapture=Q.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__mouseCapture.getCaptureElement();
},__willBecomeInvisible:function(dc){var dd=qx.core.ObjectRegistry.fromHashCode(dc.$$element);
return dd&&!dd.__willBeSeeable();
}},members:{__nodeName:null,__element:null,__root:false,__included:true,__visible:true,__lazyScrollIntoViewX:null,__lazyScrollIntoViewY:null,__lazyScrollX:null,__lazyScrollY:null,__styleJobs:null,__attribJobs:null,__propertyJobs:null,__styleValues:null,__attribValues:null,__propertyValues:null,__eventValues:null,__children:null,__modifiedChildren:null,__parent:null,_scheduleChildrenUpdate:function(){if(this.__modifiedChildren){return;
}this.__modifiedChildren=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
},_createDomElement:function(){return qx.bom.Element.create(this.__nodeName);
},__flush:function(){{};
var bg=this.__children;

if(bg){var length=bg.length;
var bh;

for(var i=0;i<length;i++){bh=bg[i];

if(bh.__visible&&bh.__included&&!bh.__element){bh.__flush();
}}}
if(!this.__element){this.__element=this._createDomElement();
this.__element.$$element=this.$$hash;
this._copyData(false);

if(bg&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__modifiedChildren){this._syncChildren();
}}delete this.__modifiedChildren;
},_insertChildren:function(){var R=this.__children;
var length=R.length;
var T;

if(length>2){var S=document.createDocumentFragment();

for(var i=0;i<length;i++){T=R[i];

if(T.__element&&T.__included){S.appendChild(T.__element);
}}this.__element.appendChild(S);
}else{var S=this.__element;

for(var i=0;i<length;i++){T=R[i];

if(T.__element&&T.__included){S.appendChild(T.__element);
}}}},_syncChildren:function(){var bp;
var bu=qx.core.ObjectRegistry;
var bl=this.__children;
var bs=bl.length;
var bm;
var bq;
var bo=this.__element;
var br=bo.childNodes;
var bn=0;
var bt;
{};
for(var i=br.length-1;i>=0;i--){bt=br[i];
bq=bu.fromHashCode(bt.$$element);

if(!bq||!bq.__included||bq.__parent!==this){bo.removeChild(bt);
{};
}}for(var i=0;i<bs;i++){bm=bl[i];
if(bm.__included){bq=bm.__element;
bt=br[bn];

if(!bq){continue;
}if(bq!=bt){if(bt){bo.insertBefore(bq,bt);
}else{bo.appendChild(bq);
}{};
}bn++;
}}{};
},_copyData:function(bK){var bO=this.__element;
var bN=this.__attribValues;

if(bN){var bL=qx.bom.element.Attribute;

for(var bP in bN){bL.set(bO,bP,bN[bP]);
}}var bN=this.__styleValues;

if(bN){var bM=qx.bom.element.Style;

if(bK){bM.setStyles(bO,bN);
}else{bM.setCss(bO,bM.compile(bN));
}}var bN=this.__propertyValues;

if(bN){for(var bP in bN){this._applyProperty(bP,bN[bP]);
}}var bN=this.__eventValues;

if(bN){qx.event.Registration.getManager(bO).importListeners(bO,bN);
delete this.__eventValues;
}},_syncData:function(){var bU=this.__element;
var bT=qx.bom.element.Attribute;
var bR=qx.bom.element.Style;
var bS=this.__attribJobs;

if(bS){var bX=this.__attribValues;

if(bX){var bV;

for(var bW in bS){bV=bX[bW];

if(bV!==undefined){bT.set(bU,bW,bV);
}else{bT.reset(bU,bW);
}}}this.__attribJobs=null;
}var bS=this.__styleJobs;

if(bS){var bX=this.__styleValues;

if(bX){var bQ={};

for(var bW in bS){bQ[bW]=bX[bW];
}bR.setStyles(bU,bQ);
}this.__styleJobs=null;
}var bS=this.__propertyJobs;

if(bS){var bX=this.__propertyValues;

if(bX){var bV;

for(var bW in bS){this._applyProperty(bW,bX[bW]);
}}this.__propertyJobs=null;
}},__willBeSeeable:function(){var W=this;
while(W){if(W.__root){return true;
}
if(!W.__included||!W.__visible){return false;
}W=W.__parent;
}return false;
},__addChildHelper:function(cC){if(cC.__parent===this){throw new Error("Child is already in: "+cC);
}
if(cC.__root){throw new Error("Root elements could not be inserted into other ones.");
}if(cC.__parent){cC.__parent.remove(cC);
}cC.__parent=this;
if(!this.__children){this.__children=[];
}if(this.__element){this._scheduleChildrenUpdate();
}},__removeChildHelper:function(p){if(p.__parent!==this){throw new Error("Has no child: "+p);
}if(this.__element){this._scheduleChildrenUpdate();
}delete p.__parent;
},__moveChildHelper:function(cn){if(cn.__parent!==this){throw new Error("Has no child: "+cn);
}if(this.__element){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__children||null;
},getChild:function(dX){var dY=this.__children;
return dY&&dY[dX]||null;
},hasChildren:function(){var bG=this.__children;
return bG&&bG[0]!==undefined;
},indexOf:function(cE){var cF=this.__children;
return cF?cF.indexOf(cE):-1;
},hasChild:function(bj){var bk=this.__children;
return bk&&bk.indexOf(bj)!==-1;
},add:function(dp){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__addChildHelper(arguments[i]);
}this.__children.push.apply(this.__children,arguments);
}else{this.__addChildHelper(dp);
this.__children.push(dp);
}return this;
},addAt:function(L,M){this.__addChildHelper(L);
qx.lang.Array.insertAt(this.__children,L,M);
return this;
},remove:function(ci){var cj=this.__children;

if(!cj){return;
}
if(arguments[1]){var ck;

for(var i=0,l=arguments.length;i<l;i++){ck=arguments[i];
this.__removeChildHelper(ck);
qx.lang.Array.remove(cj,ck);
}}else{this.__removeChildHelper(ci);
qx.lang.Array.remove(cj,ci);
}return this;
},removeAt:function(bY){var ca=this.__children;

if(!ca){throw new Error("Has no children!");
}var cb=ca[bY];

if(!cb){throw new Error("Has no child at this position!");
}this.__removeChildHelper(cb);
qx.lang.Array.removeAt(this.__children,bY);
return this;
},removeAll:function(){var U=this.__children;

if(U){for(var i=0,l=U.length;i<l;i++){this.__removeChildHelper(U[i]);
}U.length=0;
}return this;
},getParent:function(){return this.__parent||null;
},insertInto:function(parent,da){parent.__addChildHelper(this);

if(da==null){parent.__children.push(this);
}else{qx.lang.Array.insertAt(this.__children,this,da);
}return this;
},insertBefore:function(cX){var parent=cX.__parent;
parent.__addChildHelper(this);
qx.lang.Array.insertBefore(parent.__children,this,cX);
return this;
},insertAfter:function(cD){var parent=cD.__parent;
parent.__addChildHelper(this);
qx.lang.Array.insertAfter(parent.__children,this,cD);
return this;
},moveTo:function(bI){var parent=this.__parent;
parent.__moveChildHelper(this);
var bJ=parent.__children.indexOf(this);

if(bJ===bI){throw new Error("Could not move to same index!");
}else if(bJ<bI){bI--;
}qx.lang.Array.removeAt(parent.__children,bJ);
qx.lang.Array.insertAt(parent.__children,this,bI);
return this;
},moveBefore:function(V){var parent=this.__parent;
return this.moveTo(parent.__children.indexOf(V));
},moveAfter:function(bv){var parent=this.__parent;
return this.moveTo(parent.__children.indexOf(bv)+1);
},free:function(){var parent=this.__parent;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__children){return;
}parent.__removeChildHelper(this);
qx.lang.Array.remove(parent.__children,this);
return this;
},getDomElement:function(){return this.__element||null;
},getNodeName:function(){return this.__nodeName;
},setNodeName:function(name){this.__nodeName=name;
},setRoot:function(bi){this.__root=bi;
},useMarkup:function(O){if(this.__element){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(dy,dv)){var P=document.createElement(dx);
}else{var P=qx.html.Element.__markupHelper;

if(!P){P=qx.html.Element.__markupHelper=document.createElement(dx);
}}P.innerHTML=O;
this.__element=P.firstChild;
this.__element.$$element=this.$$hash;
this._copyData(true);
return this.__element;
},useElement:function(cp){if(this.__element){throw new Error("Could not overwrite existing element!");
}this.__element=cp;
this.__element.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var dn=this.getAttribute(dH);

if(dn>=1){return true;
}var dm=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(dn>=0&&dm[this.__nodeName]){return true;
}return false;
},setSelectable:function(cc){this.setAttribute(dG,cc?dJ:dE);
if(qx.core.Variant.isSet(dy,dA)){this.setStyle(dO,cc?dD:du);
}else if(qx.core.Variant.isSet(dy,dS)){this.setStyle(dC,cc?ds:dN);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__nodeName];
},include:function(){if(this.__included){return;
}delete this.__included;

if(this.__parent){this.__parent._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__included){return;
}this.__included=false;

if(this.__parent){this.__parent._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__included===true;
},show:function(){if(this.__visible){return;
}
if(this.__element){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}if(this.__parent){this.__parent._scheduleChildrenUpdate();
}delete this.__visible;
},hide:function(){if(!this.__visible){return;
}
if(this.__element){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}this.__visible=false;
},isVisible:function(){return this.__visible===true;
},scrollChildIntoViewX:function(de,df,dg){var dh=this.__element;
var di=de.getDomElement();

if(dg!==false&&dh&&dh.offsetWidth&&di&&di.offsetWidth){qx.bom.element.Scroll.intoViewX(di,dh,df);
}else{this.__lazyScrollIntoViewX={element:de,align:df};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}delete this.__lazyScrollX;
},scrollChildIntoViewY:function(cw,cx,cy){var cz=this.__element;
var cA=cw.getDomElement();

if(cy!==false&&cz&&cz.offsetWidth&&cA&&cA.offsetWidth){qx.bom.element.Scroll.intoViewY(cA,cz,cx);
}else{this.__lazyScrollIntoViewY={element:cw,align:cx};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}delete this.__lazyScrollY;
},scrollToX:function(x,cS){var cT=this.__element;

if(cS!==true&&cT&&cT.offsetWidth){cT.scrollLeft=x;
}else{this.__lazyScrollX=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}delete this.__lazyScrollIntoViewX;
},getScrollX:function(){var bD=this.__element;

if(bD){return bD.scrollLeft;
}return this.__lazyScrollX||0;
},scrollToY:function(y,bE){var bF=this.__element;

if(bE!==true&&bF&&bF.offsetWidth){bF.scrollTop=y;
}else{this.__lazyScrollY=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}delete this.__lazyScrollIntoViewY;
},getScrollY:function(){var bH=this.__element;

if(bH){return bH.scrollTop;
}return this.__lazyScrollY||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(dt,this.__onScroll,this);
},enableScrolling:function(){this.removeListener(dt,this.__onScroll,this);
},__inScroll:null,__onScroll:function(e){if(!this.__inScroll){this.__inScroll=true;
this.__element.scrollTop=0;
this.__element.scrollLeft=0;
delete this.__inScroll;
}},getTextSelection:function(){var X=this.__element;

if(X){return qx.bom.Selection.get(X);
}return null;
},getTextSelectionLength:function(){var N=this.__element;

if(N){return qx.bom.Selection.getLength(N);
}return null;
},getTextSelectionStart:function(){var bw=this.__element;

if(bw){return qx.bom.Selection.getStart(bw);
}return null;
},getTextSelectionEnd:function(){var bc=this.__element;

if(bc){return qx.bom.Selection.getEnd(bc);
}return null;
},setTextSelection:function(bd,be){var bf=this.__element;

if(bf){qx.bom.Selection.set(bf,bd,be);
return;
}qx.html.Element.__selection[this.toHashCode()]={element:this,start:bd,end:be};
qx.html.Element._scheduleFlush(dz);
},clearTextSelection:function(){var cY=this.__element;

if(cY){qx.bom.Selection.clear(cY);
}delete qx.html.Element.__selection[this.toHashCode()];
},__performAction:function(cI,cJ){var cK=qx.html.Element._actions;
cK.push({type:cI,element:this,args:cJ||[]});
qx.html.Element._scheduleFlush(dz);
},focus:function(){this.__performAction(dT);
},blur:function(){this.__performAction(dR);
},activate:function(){this.__performAction(dF);
},deactivate:function(){this.__performAction(dQ);
},capture:function(cl){this.__performAction(dP,[cl!==false]);
},releaseCapture:function(){this.__performAction(dL);
},setStyle:function(cU,cV,cW){if(!this.__styleValues){this.__styleValues={};
}
if(this.__styleValues[cU]==cV){return;
}
if(cV==null){delete this.__styleValues[cU];
}else{this.__styleValues[cU]=cV;
}if(this.__element){if(cW){qx.bom.element.Style.set(this.__element,cU,cV);
return this;
}if(!this.__styleJobs){this.__styleJobs={};
}this.__styleJobs[cU]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}return this;
},setStyles:function(cd,ce){var cf=qx.bom.element.Style;

if(!this.__styleValues){this.__styleValues={};
}
if(this.__element){if(!this.__styleJobs){this.__styleJobs={};
}
for(var ch in cd){var cg=cd[ch];

if(this.__styleValues[ch]==cg){continue;
}
if(cg==null){delete this.__styleValues[ch];
}else{this.__styleValues[ch]=cg;
}if(ce){cf.set(this.__element,ch,cg);
continue;
}this.__styleJobs[ch]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}else{for(var ch in cd){var cg=cd[ch];

if(this.__styleValues[ch]==cg){continue;
}
if(cg==null){delete this.__styleValues[ch];
}else{this.__styleValues[ch]=cg;
}}}return this;
},removeStyle:function(dj,dk){this.setStyle(dj,null,dk);
},getStyle:function(a){return this.__styleValues?this.__styleValues[a]:null;
},getAllStyles:function(){return this.__styleValues||null;
},setAttribute:function(Y,ba,bb){if(!this.__attribValues){this.__attribValues={};
}
if(this.__attribValues[Y]==ba){return;
}
if(ba==null){delete this.__attribValues[Y];
}else{this.__attribValues[Y]=ba;
}if(this.__element){if(bb){qx.bom.element.Attribute.set(this.__element,Y,ba);
return this;
}if(!this.__attribJobs){this.__attribJobs={};
}this.__attribJobs[Y]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}return this;
},setAttributes:function(cL,cM){for(var cN in cL){this.setAttribute(cN,cL[cN],cM);
}return this;
},removeAttribute:function(m,n){this.setAttribute(m,null,n);
},getAttribute:function(o){return this.__attribValues?this.__attribValues[o]:null;
},_applyProperty:function(name,k){},_setProperty:function(dU,dV,dW){if(!this.__propertyValues){this.__propertyValues={};
}
if(this.__propertyValues[dU]==dV){return;
}
if(dV==null){delete this.__propertyValues[dU];
}else{this.__propertyValues[dU]=dV;
}if(this.__element){if(dW){this._applyProperty(dU,dV);
return this;
}if(!this.__propertyJobs){this.__propertyJobs={};
}this.__propertyJobs[dU]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}return this;
},_removeProperty:function(cG,cH){this._setProperty(cG,null,cH);
},_getProperty:function(cP){var cQ=this.__propertyValues;

if(!cQ){return null;
}var cR=cQ[cP];
return cR==null?null:cR;
},addListener:function(bx,by,self,bz){var bA;

if(this.$$disposed){return null;
}{};

if(this.__element){return qx.event.Registration.addListener(this.__element,bx,by,self,bz);
}
if(!this.__eventValues){this.__eventValues={};
}
if(bz==null){bz=false;
}var bB=qx.event.Manager.getNextUniqueId();
var bC=bx+(bz?dq:dK)+bB;
this.__eventValues[bC]={type:bx,listener:by,self:self,capture:bz,unique:bB};
return bC;
},removeListener:function(b,c,self,d){var f;

if(this.$$disposed){return null;
}{};

if(this.__element){qx.event.Registration.removeListener(this.__element,b,c,self,d);
}else{var h=this.__eventValues;
var g;

if(d==null){d=false;
}
for(var j in h){g=h[j];
if(g.listener===c&&g.self===self&&g.capture===d&&g.type===b){delete h[j];
break;
}}}return this;
},removeListenerById:function(cB){if(this.$$disposed){return null;
}
if(this.__element){qx.event.Registration.removeListenerById(this.__element,cB);
}else{delete this.__eventValues[cB];
}return this;
},hasListener:function(cr,cs){if(this.$$disposed){return false;
}
if(this.__element){return qx.event.Registration.hasListener(this.__element,cr,cs);
}var cu=this.__eventValues;
var ct;

if(cs==null){cs=false;
}
for(var cv in cu){ct=cu[cv];
if(ct.capture===cs&&ct.type===cr){return true;
}}return false;
}},defer:function(cq){cq.__deferredCall=new qx.util.DeferredCall(cq.flush,cq);
},destruct:function(){var cm=this.__element;

if(cm){qx.event.Registration.getManager(cm).removeAllListeners(cm);
cm.$$element=dw;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__parent;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(dI);
this.__attribValues=this.__styleValues=this.__eventValues=this.__propertyValues=this.__attribJobs=this.__styleJobs=this.__propertyJobs=this.__element=this.__parent=this.__lazyScrollIntoViewX=this.__lazyScrollIntoViewY=null;
}});
})();
(function(){var c="qx.ui.core.queue.Manager",b="useraction";
qx.Class.define(c,{statics:{__scheduled:false,__jobs:{},__retries:0,MAX_RETRIES:10,scheduleFlush:function(h){var self=qx.ui.core.queue.Manager;
self.__jobs[h]=true;

if(!self.__scheduled){self.__deferredCall.schedule();
self.__scheduled=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__inFlush){return;
}self.__inFlush=true;
self.__deferredCall.cancel();
var a=self.__jobs;
self.__executeAndRescheduleOnError(function(){while(a.visibility||a.widget||a.appearance||a.layout||a.element){if(a.widget){delete a.widget;
qx.ui.core.queue.Widget.flush();
}
if(a.visibility){delete a.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(a.appearance){delete a.appearance;
qx.ui.core.queue.Appearance.flush();
}if(a.widget||a.visibility||a.appearance){continue;
}
if(a.layout){delete a.layout;
qx.ui.core.queue.Layout.flush();
}if(a.widget||a.visibility||a.appearance||a.layout){continue;
}
if(a.element){delete a.element;
qx.html.Element.flush();
}}},function(){self.__scheduled=false;
});
self.__executeAndRescheduleOnError(function(){if(a.dispose){delete a.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__inFlush=false;
});
self.__retries=0;
},__executeAndRescheduleOnError:function(f,g){var self=qx.ui.core.queue.Manager;

try{f();
}catch(e){if(false&&false){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__scheduled=false;
self.__inFlush=false;
self.__retries+=1;

if(self.__retries<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__retries-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{g();
}}},defer:function(d){d.__deferredCall=new qx.util.DeferredCall(d.flush);
qx.html.Element._scheduleFlush=d.scheduleFlush;
qx.event.Registration.addListener(window,b,d.flush);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(e){this._manager=e;
},members:{_getParent:function(x){throw new Error("Missing implementation");
},canDispatchEvent:function(c,event,d){return event.getBubbles();
},dispatchEvent:function(f,event,g){var parent=f;
var r=this._manager;
var o,v;
var m;
var q,t;
var s;
var u=[];
o=r.getListeners(f,g,true);
v=r.getListeners(f,g,false);

if(o){u.push(o);
}
if(v){u.push(v);
}var parent=this._getParent(f);
var k=[];
var h=[];
var l=[];
var p=[];
while(parent!=null){o=r.getListeners(parent,g,true);

if(o){l.push(o);
p.push(parent);
}v=r.getListeners(parent,g,false);

if(v){k.push(v);
h.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=l.length-1;i>=0;i--){s=p[i];
event.setCurrentTarget(s);
m=l[i];

for(var j=0,n=m.length;j<n;j++){q=m[j];
t=q.context||s;
q.handler.call(t,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(f);

for(var i=0,w=u.length;i<w;i++){m=u[i];

for(var j=0,n=m.length;j<n;j++){q=m[j];
t=q.context||f;
q.handler.call(t,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,w=k.length;i<w;i++){s=h[i];
event.setCurrentTarget(s);
m=k[i];

for(var j=0,n=m.length;j<n;j++){q=m[j];
t=q.context||s;
q.handler.call(t,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(b,event,c){return b.nodeType!==undefined&&event.getBubbles();
}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var M="keydown",L="qx.client",K="keypress",J="NumLock",I="keyup",H="Enter",G="0",F="9",E="-",D="PageUp",bT="+",bS="PrintScreen",bR="gecko",bQ="A",bP="Z",bO="Left",bN="F5",bM="Down",bL="Up",bK="F11",T="F6",U="useraction",R="F3",S="keyinput",P="Insert",Q="F8",N="End",O="/",bc="Delete",bd="*",bp="F1",bl="F4",bx="Home",bs="F2",bG="F12",bC="PageDown",bh="F7",bJ="F9",bI="F10",bH="Right",bg="text",bj="Escape",bk="webkit",bn="5",bq="3",bt="Meta",bz="7",bE="CapsLock",V="input",W="Control",bi="Space",bw="Tab",bv="Shift",bu="Pause",bB="Unidentified",bA="qx.event.handler.Keyboard",br="mshtml",by="mshtml|webkit",A="6",bD="off",X="Apps",Y="4",bm="Alt",B="2",C="Scroll",bf="1",ba="8",bb="Win",be="autoComplete",bo=",",bF="Backspace";
qx.Class.define(bA,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){arguments.callee.base.call(this);
this.__manager=q;
this.__window=q.getWindow();
if(qx.core.Variant.isSet(L,bR)){this.__root=this.__window;
}else{this.__root=this.__window.document.documentElement;
}this.__lastUpDownType={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cr){if(this._identifierToKeyCodeMap[cr]){return true;
}
if(cr.length!=1){return false;
}
if(cr>=G&&cr<=F){return true;
}
if(cr>=bQ&&cr<=bP){return true;
}
switch(cr){case bT:case E:case bd:case O:return true;
default:return false;
}}},members:{__onKeyUpDownWrapper:null,__manager:null,__window:null,__root:null,__lastUpDownType:null,__lastKeyCode:null,__inputListeners:null,__onKeyPressWrapper:null,canHandleEvent:function(bU,bV){},registerEvent:function(cJ,cK,cL){},unregisterEvent:function(cj,ck,cl){},_fireInputEvent:function(cB,cC){var cD=this.__getEventTarget();
if(cD&&cD.offsetWidth!=0){var event=qx.event.Registration.createEvent(S,qx.event.type.KeyInput,[cB,cD,cC]);
this.__manager.dispatchEvent(cD,event);
}if(this.__window){qx.event.Registration.fireEvent(this.__window,U,qx.event.type.Data,[S]);
}},_fireSequenceEvent:function(a,b,c){var d=this.__getEventTarget();
var e=a.keyCode;
var event=qx.event.Registration.createEvent(b,qx.event.type.KeySequence,[a,d,c]);
this.__manager.dispatchEvent(d,event);
if(qx.core.Variant.isSet(L,by)){if(b==M&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(e)&&!this._emulateKeyPress[e]){this._fireSequenceEvent(a,K,c);
}}}if(this.__window){qx.event.Registration.fireEvent(this.__window,U,qx.event.type.Data,[b]);
}},__getEventTarget:function(){var cu=this.__manager.getHandler(qx.event.handler.Focus);
var cv=cu.getActive();
if(!cv||cv.offsetWidth==0){cv=cu.getFocus();
}if(!cv||cv.offsetWidth==0){cv=this.__manager.getWindow().document.body;
}return cv;
},_initKeyObserver:function(){this.__onKeyUpDownWrapper=qx.lang.Function.listener(this.__onKeyUpDown,this);
this.__onKeyPressWrapper=qx.lang.Function.listener(this.__onKeyPress,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__root,I,this.__onKeyUpDownWrapper);
Event.addNativeListener(this.__root,M,this.__onKeyUpDownWrapper);
Event.addNativeListener(this.__root,K,this.__onKeyPressWrapper);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__root,I,this.__onKeyUpDownWrapper);
Event.removeNativeListener(this.__root,M,this.__onKeyUpDownWrapper);
Event.removeNativeListener(this.__root,K,this.__onKeyPressWrapper);

for(var g in (this.__inputListeners||{})){var f=this.__inputListeners[g];
Event.removeNativeListener(f.target,K,f.callback);
}delete (this.__inputListeners);
},__onKeyUpDown:qx.event.GlobalError.observeMethod(qx.core.Variant.select(L,{"mshtml":function(i){i=window.event||i;
var l=i.keyCode;
var j=0;
var k=i.type;
if(!(this.__lastUpDownType[l]==M&&k==M)){this._idealKeyHandler(l,j,k,i);
}if(k==M){if(this._isNonPrintableKeyCode(l)||this._emulateKeyPress[l]){this._idealKeyHandler(l,j,K,i);
}}this.__lastUpDownType[l]=k;
},"gecko":function(r){var v=this._keyCodeFix[r.keyCode]||r.keyCode;
var t=0;
var u=r.type;
if(qx.bom.client.Platform.WIN){var s=v?this._keyCodeToIdentifier(v):this._charCodeToIdentifier(t);

if(!(this.__lastUpDownType[s]==M&&u==M)){this._idealKeyHandler(v,t,u,r);
}this.__lastUpDownType[s]=u;
}else{this._idealKeyHandler(v,t,u,r);
}this.__firefoxInputFix(r.target,u,v);
},"webkit":function(cF){var cI=0;
var cG=0;
var cH=cF.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cH==I||cH==M){cI=this._charCode2KeyCode[cF.charCode]||cF.keyCode;
}else{if(this._charCode2KeyCode[cF.charCode]){cI=this._charCode2KeyCode[cF.charCode];
}else{cG=cF.charCode;
}}this._idealKeyHandler(cI,cG,cH,cF);
}else{cI=cF.keyCode;
if(!(this.__lastUpDownType[cI]==M&&cH==M)){this._idealKeyHandler(cI,cG,cH,cF);
}if(cH==M){if(this._isNonPrintableKeyCode(cI)||this._emulateKeyPress[cI]){this._idealKeyHandler(cI,cG,K,cF);
}}this.__lastUpDownType[cI]=cH;
}},"opera":function(cA){this.__lastKeyCode=cA.keyCode;
this._idealKeyHandler(cA.keyCode,0,cA.type,cA);
}})),__firefoxInputFix:qx.core.Variant.select(L,{"gecko":function(cb,cc,cd){if(cc===M&&(cd==33||cd==34||cd==38||cd==40)&&cb.type==bg&&cb.tagName.toLowerCase()===V&&cb.getAttribute(be)!==bD){if(!this.__inputListeners){this.__inputListeners={};
}var cf=qx.core.ObjectRegistry.toHashCode(cb);

if(this.__inputListeners[cf]){return;
}var self=this;
this.__inputListeners[cf]={target:cb,callback:function(cE){qx.bom.Event.stopPropagation(cE);
self.__onKeyPress(cE);
}};
var ce=qx.event.GlobalError.observeMethod(this.__inputListeners[cf].callback);
qx.bom.Event.addNativeListener(cb,K,ce);
}},"default":null}),__onKeyPress:qx.event.GlobalError.observeMethod(qx.core.Variant.select(L,{"mshtml":function(ch){ch=window.event||ch;

if(this._charCode2KeyCode[ch.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[ch.keyCode],0,ch.type,ch);
}else{this._idealKeyHandler(0,ch.keyCode,ch.type,ch);
}},"gecko":function(w){var z=this._keyCodeFix[w.keyCode]||w.keyCode;
var x=w.charCode;
var y=w.type;
this._idealKeyHandler(z,x,y,w);
},"webkit":function(bW){if(qx.bom.client.Engine.VERSION<525.13){var ca=0;
var bX=0;
var bY=bW.type;

if(bY==I||bY==M){ca=this._charCode2KeyCode[bW.charCode]||bW.keyCode;
}else{if(this._charCode2KeyCode[bW.charCode]){ca=this._charCode2KeyCode[bW.charCode];
}else{bX=bW.charCode;
}}this._idealKeyHandler(ca,bX,bY,bW);
}else{if(this._charCode2KeyCode[bW.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bW.keyCode],0,bW.type,bW);
}else{this._idealKeyHandler(0,bW.keyCode,bW.type,bW);
}}},"opera":function(cx){var cz=cx.keyCode;
var cy=cx.type;
if(cz!=this.__lastKeyCode){this._idealKeyHandler(0,this.__lastKeyCode,cy,cx);
}else{if(this._keyCodeToIdentifierMap[cx.keyCode]){this._idealKeyHandler(cx.keyCode,0,cx.type,cx);
}else{this._idealKeyHandler(0,cx.keyCode,cx.type,cx);
}}}})),_idealKeyHandler:function(cm,cn,co,cp){var cq;
if(cm||(!cm&&!cn)){cq=this._keyCodeToIdentifier(cm);
this._fireSequenceEvent(cp,co,cq);
}else{cq=this._charCodeToIdentifier(cn);
this._fireSequenceEvent(cp,K,cq);
this._fireInputEvent(cp,cn);
}},_specialCharCodeMap:{8:bF,9:bw,13:H,27:bj,32:bi},_emulateKeyPress:qx.core.Variant.select(L,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bv,17:W,18:bm,20:bE,224:bt,37:bO,38:bL,39:bH,40:bM,33:D,34:bC,35:N,36:bx,45:P,46:bc,112:bp,113:bs,114:R,115:bl,116:bN,117:T,118:bh,119:Q,120:bJ,121:bI,122:bK,123:bG,144:J,44:bS,145:C,19:bu,91:bb,93:X},_numpadToCharCode:{96:G.charCodeAt(0),97:bf.charCodeAt(0),98:B.charCodeAt(0),99:bq.charCodeAt(0),100:Y.charCodeAt(0),101:bn.charCodeAt(0),102:A.charCodeAt(0),103:bz.charCodeAt(0),104:ba.charCodeAt(0),105:F.charCodeAt(0),106:bd.charCodeAt(0),107:bT.charCodeAt(0),109:E.charCodeAt(0),110:bo.charCodeAt(0),111:O.charCodeAt(0)},_charCodeA:bQ.charCodeAt(0),_charCodeZ:bP.charCodeAt(0),_charCode0:G.charCodeAt(0),_charCode9:F.charCodeAt(0),_isNonPrintableKeyCode:function(ci){return this._keyCodeToIdentifierMap[ci]?true:false;
},_isIdentifiableKeyCode:function(cg){if(cg>=this._charCodeA&&cg<=this._charCodeZ){return true;
}if(cg>=this._charCode0&&cg<=this._charCode9){return true;
}if(this._specialCharCodeMap[cg]){return true;
}if(this._numpadToCharCode[cg]){return true;
}if(this._isNonPrintableKeyCode(cg)){return true;
}return false;
},_keyCodeToIdentifier:function(cs){if(this._isIdentifiableKeyCode(cs)){var ct=this._numpadToCharCode[cs];

if(ct){return String.fromCharCode(ct);
}return (this._keyCodeToIdentifierMap[cs]||this._specialCharCodeMap[cs]||String.fromCharCode(cs));
}else{return bB;
}},_charCodeToIdentifier:function(h){return this._specialCharCodeMap[h]||String.fromCharCode(h).toUpperCase();
},_identifierToKeyCode:function(cw){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cw]||cw.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__lastKeyCode=this.__manager=this.__window=this.__root=this.__lastUpDownType=null;
},defer:function(m,n,o){qx.event.Registration.addHandler(m);
if(!m._identifierToKeyCodeMap){m._identifierToKeyCodeMap={};

for(var p in n._keyCodeToIdentifierMap){m._identifierToKeyCodeMap[n._keyCodeToIdentifierMap[p]]=parseInt(p,10);
}
for(var p in n._specialCharCodeMap){m._identifierToKeyCodeMap[n._specialCharCodeMap[p]]=parseInt(p,10);
}}
if(qx.core.Variant.isSet(L,br)){n._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(L,bR)){n._keyCodeFix={12:n._identifierToKeyCode(J)};
}else if(qx.core.Variant.isSet(L,bk)){if(qx.bom.client.Engine.VERSION<525.13){n._charCode2KeyCode={63289:n._identifierToKeyCode(J),63276:n._identifierToKeyCode(D),63277:n._identifierToKeyCode(bC),63275:n._identifierToKeyCode(N),63273:n._identifierToKeyCode(bx),63234:n._identifierToKeyCode(bO),63232:n._identifierToKeyCode(bL),63235:n._identifierToKeyCode(bH),63233:n._identifierToKeyCode(bM),63272:n._identifierToKeyCode(bc),63302:n._identifierToKeyCode(P),63236:n._identifierToKeyCode(bp),63237:n._identifierToKeyCode(bs),63238:n._identifierToKeyCode(R),63239:n._identifierToKeyCode(bl),63240:n._identifierToKeyCode(bN),63241:n._identifierToKeyCode(T),63242:n._identifierToKeyCode(bh),63243:n._identifierToKeyCode(Q),63244:n._identifierToKeyCode(bJ),63245:n._identifierToKeyCode(bI),63246:n._identifierToKeyCode(bK),63247:n._identifierToKeyCode(bG),63248:n._identifierToKeyCode(bS),3:n._identifierToKeyCode(H),12:n._identifierToKeyCode(J),13:n._identifierToKeyCode(H)};
}else{n._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var A="qx.client",z="mouseup",y="click",x="mousedown",w="contextmenu",v="mousewheel",u="dblclick",t="mshtml",s="mouseover",r="mouseout",m="DOMMouseScroll",q="mousemove",p="on",l="mshtml|webkit|opera",k="useraction",o="gecko|webkit",n="qx.event.handler.Mouse";
qx.Class.define(n,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(W){arguments.callee.base.call(this);
this.__manager=W;
this.__window=W.getWindow();
this.__root=this.__window.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__onButtonEventWrapper:null,__onMoveEventWrapper:null,__onWheelEventWrapper:null,__lastEventType:null,__lastMouseDownTarget:null,__manager:null,__window:null,__root:null,canHandleEvent:function(g,h){},registerEvent:qx.bom.client.System.IPHONE?
function(L,M,N){L[p+M]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(F,G,H){F[p+G]=undefined;
}:qx.lang.Function.returnNull,__fireEvent:function(a,b,c){if(!c){c=a.target||a.srcElement;
}if(c&&c.nodeType){qx.event.Registration.fireEvent(c,b||a.type,b==v?qx.event.type.MouseWheel:qx.event.type.Mouse,[a,c,null,true,true]);
}qx.event.Registration.fireEvent(this.__window,k,qx.event.type.Data,[b||a.type]);
},_initButtonObserver:function(){this.__onButtonEventWrapper=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__root,x,this.__onButtonEventWrapper);
Event.addNativeListener(this.__root,z,this.__onButtonEventWrapper);
Event.addNativeListener(this.__root,y,this.__onButtonEventWrapper);
Event.addNativeListener(this.__root,u,this.__onButtonEventWrapper);
Event.addNativeListener(this.__root,w,this.__onButtonEventWrapper);
},_initMoveObserver:function(){this.__onMoveEventWrapper=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__root,q,this.__onMoveEventWrapper);
Event.addNativeListener(this.__root,s,this.__onMoveEventWrapper);
Event.addNativeListener(this.__root,r,this.__onMoveEventWrapper);
},_initWheelObserver:function(){this.__onWheelEventWrapper=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var i=qx.core.Variant.isSet(A,l)?v:m;
var j=qx.core.Variant.isSet(A,t)?this.__root:this.__window;
Event.addNativeListener(j,i,this.__onWheelEventWrapper);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__root,x,this.__onButtonEventWrapper);
Event.removeNativeListener(this.__root,z,this.__onButtonEventWrapper);
Event.removeNativeListener(this.__root,y,this.__onButtonEventWrapper);
Event.removeNativeListener(this.__root,u,this.__onButtonEventWrapper);
Event.removeNativeListener(this.__root,w,this.__onButtonEventWrapper);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__root,q,this.__onMoveEventWrapper);
Event.removeNativeListener(this.__root,s,this.__onMoveEventWrapper);
Event.removeNativeListener(this.__root,r,this.__onMoveEventWrapper);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var J=qx.core.Variant.isSet(A,l)?v:m;
var K=qx.core.Variant.isSet(A,t)?this.__root:this.__window;
Event.removeNativeListener(K,J,this.__onWheelEventWrapper);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(I){this.__fireEvent(I);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(X){var Y=X.type;
var ba=X.target||X.srcElement;
if(qx.core.Variant.isSet(A,o)){if(ba&&ba.nodeType==3){ba=ba.parentNode;
}}
if(this.__rightClickFixPre){this.__rightClickFixPre(X,Y,ba);
}
if(this.__doubleClickFixPre){this.__doubleClickFixPre(X,Y,ba);
}this.__fireEvent(X,Y,ba);

if(this.__rightClickFixPost){this.__rightClickFixPost(X,Y,ba);
}
if(this.__differentTargetClickFixPost){this.__differentTargetClickFixPost(X,Y,ba);
}this.__lastEventType=Y;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(O){this.__fireEvent(O,v);
}),__rightClickFixPre:qx.core.Variant.select(A,{"webkit":function(P,Q,R){if(qx.bom.client.Engine.VERSION<530){if(Q==w){this.__fireEvent(P,z,R);
}}},"default":null}),__rightClickFixPost:qx.core.Variant.select(A,{"opera":function(B,C,D){if(C==z&&B.button==2){this.__fireEvent(B,w,D);
}},"default":null}),__doubleClickFixPre:qx.core.Variant.select(A,{"mshtml":function(d,e,f){if(e==z&&this.__lastEventType==y){this.__fireEvent(d,x,f);
}else if(e==u){this.__fireEvent(d,y,f);
}},"default":null}),__differentTargetClickFixPost:qx.core.Variant.select(A,{"mshtml":null,"default":function(S,T,U){switch(T){case x:this.__lastMouseDownTarget=U;
break;
case z:if(U!==this.__lastMouseDownTarget){var V=qx.dom.Hierarchy.getCommonParent(U,this.__lastMouseDownTarget);
this.__fireEvent(S,y,V);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__manager=this.__window=this.__root=this.__lastMouseDownTarget=null;
},defer:function(E){qx.event.Registration.addHandler(E);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(c,d,e){},unregisterEvent:function(f,g,h){}},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var B="alias",A="copy",z="blur",y="mouseout",x="keydown",w="Ctrl",v="Shift",u="mousemove",t="move",s="mouseover",R="Alt",Q="keyup",P="mouseup",O="dragend",N="on",M="mousedown",L="qxDraggable",K="drag",J="drop",I="qxDroppable",G="qx.event.handler.DragDrop",H="droprequest",E="dragstart",F="dragchange",C="dragleave",D="dragover";
qx.Class.define(G,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){arguments.callee.base.call(this);
this.__manager=q;
this.__root=q.getWindow().document.documentElement;
this.__manager.addListener(this.__root,M,this._onMouseDown,this);
this.__rebuildStructures();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__manager:null,__root:null,__dropTarget:null,__dragTarget:null,__types:null,__actions:null,__keys:null,__cache:null,__currentType:null,__currentAction:null,__sessionActive:false,__startLeft:0,__startTop:0,canHandleEvent:function(bi,bj){},registerEvent:function(bk,bl,bm){},unregisterEvent:function(b,c,d){},addType:function(bb){this.__types[bb]=true;
},addAction:function(ba){this.__actions[ba]=true;
},supportsType:function(Y){return !!this.__types[Y];
},supportsAction:function(X){return !!this.__actions[X];
},getData:function(be){if(!this.__validDrop||!this.__dropTarget){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__types[be]){throw new Error("Unsupported data type: "+be+"!");
}
if(!this.__cache[be]){this.__currentType=be;
this.__fireEvent(H,this.__dragTarget,this.__dropTarget,false);
}
if(!this.__cache[be]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__cache[be]||null;
},getCurrentAction:function(){return this.__currentAction;
},addData:function(bc,bd){this.__cache[bc]=bd;
},getCurrentType:function(){return this.__currentType;
},__rebuildStructures:function(){this.__types={};
this.__actions={};
this.__keys={};
this.__cache={};
},__detectAction:function(){var bh=this.__actions;
var bf=this.__keys;
var bg=null;

if(this.__validDrop){if(bf.Shift&&bf.Ctrl&&bh.alias){bg=B;
}else if(bf.Shift&&bf.Alt&&bh.copy){bg=A;
}else if(bf.Shift&&bh.move){bg=t;
}else if(bf.Alt&&bh.alias){bg=B;
}else if(bf.Ctrl&&bh.copy){bg=A;
}else if(bh.move){bg=t;
}else if(bh.copy){bg=A;
}else if(bh.alias){bg=B;
}}
if(bg!=this.__currentAction){this.__currentAction=bg;
this.__fireEvent(F,this.__dragTarget,this.__dropTarget,false);
}},__fireEvent:function(h,i,j,k,l){var n=qx.event.Registration;
var m=n.createEvent(h,qx.event.type.Drag,[k,l]);

if(i!==j){m.setRelatedTarget(j);
}return n.dispatchEvent(i,m);
},__findDraggable:function(g){while(g&&g.nodeType==1){if(g.getAttribute(L)==N){return g;
}g=g.parentNode;
}return null;
},__findDroppable:function(a){while(a&&a.nodeType==1){if(a.getAttribute(I)==N){return a;
}a=a.parentNode;
}return null;
},__clearInit:function(){this.__dragTarget=null;
this.__manager.removeListener(this.__root,u,this._onMouseMove,this,true);
this.__manager.removeListener(this.__root,P,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,z,this._onWindowBlur,this);
this.__rebuildStructures();
},__clearSession:function(){if(this.__sessionActive){this.__manager.removeListener(this.__root,s,this._onMouseOver,this,true);
this.__manager.removeListener(this.__root,y,this._onMouseOut,this,true);
this.__manager.removeListener(this.__root,x,this._onKeyDown,this,true);
this.__manager.removeListener(this.__root,Q,this._onKeyUp,this,true);
this.__fireEvent(O,this.__dragTarget,this.__dropTarget,false);
this.__sessionActive=false;
}this.__validDrop=false;
this.__dropTarget=null;
this.__clearInit();
},__validDrop:false,_onWindowBlur:function(e){this.__clearSession();
},_onKeyDown:function(e){var r=e.getKeyIdentifier();

switch(r){case R:case w:case v:if(!this.__keys[r]){this.__keys[r]=true;
this.__detectAction();
}}},_onKeyUp:function(e){var f=e.getKeyIdentifier();

switch(f){case R:case w:case v:if(this.__keys[f]){this.__keys[f]=false;
this.__detectAction();
}}},_onMouseDown:function(e){if(this.__sessionActive){return;
}var U=this.__findDraggable(e.getTarget());

if(U){this.__startLeft=e.getDocumentLeft();
this.__startTop=e.getDocumentTop();
this.__dragTarget=U;
this.__manager.addListener(this.__root,u,this._onMouseMove,this,true);
this.__manager.addListener(this.__root,P,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,z,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__validDrop){this.__fireEvent(J,this.__dropTarget,this.__dragTarget,false,e);
}if(this.__sessionActive){e.stopPropagation();
}this.__clearSession();
},_onMouseMove:function(e){if(this.__sessionActive){if(!this.__fireEvent(K,this.__dragTarget,this.__dropTarget,true,e)){this.__clearSession();
}}else{if(Math.abs(e.getDocumentLeft()-this.__startLeft)>3||Math.abs(e.getDocumentTop()-this.__startTop)>3){if(this.__fireEvent(E,this.__dragTarget,this.__dropTarget,true,e)){this.__sessionActive=true;
this.__manager.addListener(this.__root,s,this._onMouseOver,this,true);
this.__manager.addListener(this.__root,y,this._onMouseOut,this,true);
this.__manager.addListener(this.__root,x,this._onKeyDown,this,true);
this.__manager.addListener(this.__root,Q,this._onKeyUp,this,true);
var V=this.__keys;
V.Ctrl=e.isCtrlPressed();
V.Shift=e.isShiftPressed();
V.Alt=e.isAltPressed();
this.__detectAction();
}else{this.__fireEvent(O,this.__dragTarget,this.__dropTarget,false);
this.__clearInit();
}}}},_onMouseOver:function(e){var S=e.getTarget();
var T=this.__findDroppable(S);

if(T&&T!=this.__dropTarget){this.__validDrop=this.__fireEvent(D,T,this.__dragTarget,true,e);
this.__dropTarget=T;
this.__detectAction();
}},_onMouseOut:function(e){var p=this.__findDroppable(e.getTarget());
var o=this.__findDroppable(e.getRelatedTarget());

if(p&&p!==o&&p==this.__dropTarget){this.__fireEvent(C,this.__dropTarget,o,false,e);
this.__dropTarget=null;
this.__validDrop=false;
qx.event.Timer.once(this.__detectAction,this,0);
}}},destruct:function(){this.__dragTarget=this.__dropTarget=this.__manager=this.__root=this.__types=this.__actions=this.__keys=this.__cache=null;
},defer:function(W){qx.event.Registration.addHandler(W);
}});
})();
(function(){var b="-",a="qx.event.handler.Element";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){arguments.callee.base.call(this);
this._manager=i;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(n,o){},registerEvent:function(c,d,e){var h=qx.core.ObjectRegistry.toHashCode(c);
var f=h+b+d;
var g=qx.lang.Function.listener(this._onNative,this,f);
qx.bom.Event.addNativeListener(c,d,g);
this._registeredEvents[f]={element:c,type:d,listener:g};
},unregisterEvent:function(p,q,r){var u=this._registeredEvents;

if(!u){return;
}var v=qx.core.ObjectRegistry.toHashCode(p);
var s=v+b+q;
var t=this._registeredEvents[s];
qx.bom.Event.removeNativeListener(p,q,t.listener);
delete this._registeredEvents[s];
},_onNative:qx.event.GlobalError.observeMethod(function(j,k){var m=this._registeredEvents;

if(!m){return;
}var l=m[k];
qx.event.Registration.fireNonBubblingEvent(l.element,l.type,qx.event.type.Native,[j]);
})},destruct:function(){var x;
var y=this._registeredEvents;

for(var z in y){x=y[z];
qx.bom.Event.removeNativeListener(x.element,x.type,x.listener);
}this._manager=this._registeredEvents=null;
},defer:function(w){qx.event.Registration.addHandler(w);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(l){arguments.callee.base.call(this);
this.__manager=l;
this.__targets={};
qx.event.handler.Appear.__instances[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__instances:{},refresh:function(){var w=this.__instances;

for(var x in w){w[x].refresh();
}}},members:{__manager:null,__targets:null,canHandleEvent:function(j,k){},registerEvent:function(r,s,t){var u=qx.core.ObjectRegistry.toHashCode(r)+s;
var v=this.__targets;

if(v&&!v[u]){v[u]=r;
r.$$displayed=r.offsetWidth>0;
}},unregisterEvent:function(d,e,f){var g=qx.core.ObjectRegistry.toHashCode(d)+e;
var h=this.__targets;

if(!h){return;
}
if(h[g]){delete h[g];
}},refresh:function(){var p=this.__targets;
var q;

for(var o in p){q=p[o];
var m=q.offsetWidth>0;

if((!!q.$$displayed)!==m){q.$$displayed=m;
var n=qx.event.Registration.createEvent(m?a:b);
this.__manager.dispatchEvent(q,n);
}}}},destruct:function(){this.__manager=this.__targets=null;
delete qx.event.handler.Appear.__instances[this.$$hash];
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var o="mshtml",n="",m="qx.client",k=">",h="<",g=" ",f="='",e="qx.bom.Element",d="div",c="' ",b="></";
qx.Class.define(e,{statics:{__initialAttributes:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,V,W){if(!W){W=window;
}
if(!name){throw new Error("The tag name is missing!");
}var Y=this.__initialAttributes;
var X=n;

for(var bb in V){if(Y[bb]){X+=bb+f+V[bb]+c;
}}var bc;
if(X!=n){if(qx.bom.client.Engine.MSHTML){bc=W.document.createElement(h+name+g+X+k);
}else{var ba=W.document.createElement(d);
ba.innerHTML=h+name+g+X+b+name+k;
bc=ba.firstChild;
}}else{bc=W.document.createElement(name);
}
for(var bb in V){if(!Y[bb]){qx.bom.element.Attribute.set(bc,bb,V[bb]);
}}return bc;
},empty:function(B){return B.innerHTML=n;
},addListener:function(F,G,H,self,I){return qx.event.Registration.addListener(F,G,H,self,I);
},removeListener:function(O,P,Q,self,R){return qx.event.Registration.removeListener(O,P,Q,self,R);
},removeListenerById:function(M,N){return qx.event.Registration.removeListenerById(M,N);
},hasListener:function(C,D,E){return qx.event.Registration.hasListener(C,D,E);
},focus:function(a){qx.event.Registration.getManager(a).getHandler(qx.event.handler.Focus).focus(a);
},blur:function(K){qx.event.Registration.getManager(K).getHandler(qx.event.handler.Focus).blur(K);
},activate:function(U){qx.event.Registration.getManager(U).getHandler(qx.event.handler.Focus).activate(U);
},deactivate:function(J){qx.event.Registration.getManager(J).getHandler(qx.event.handler.Focus).deactivate(J);
},capture:function(S,T){qx.event.Registration.getManager(S).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(S,T);
},releaseCapture:function(L){qx.event.Registration.getManager(L).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(L);
},clone:function(p,q){var t;

if(q||(qx.core.Variant.isSet(m,o)&&!qx.xml.Document.isXmlDocument(p))){var x=qx.event.Registration.getManager(p);
var r=qx.dom.Hierarchy.getDescendants(p);
r.push(p);
}if(qx.core.Variant.isSet(m,o)){for(var i=0,l=r.length;i<l;i++){x.toggleAttachedEvents(r[i],false);
}}var t=p.cloneNode(true);
if(qx.core.Variant.isSet(m,o)){for(var i=0,l=r.length;i<l;i++){x.toggleAttachedEvents(r[i],true);
}}if(q===true){var A=qx.dom.Hierarchy.getDescendants(t);
A.push(t);
var s,v,z,u;

for(var i=0,y=r.length;i<y;i++){z=r[i];
s=x.serializeListeners(z);

if(s.length>0){v=A[i];

for(var j=0,w=s.length;j<w;j++){u=s[j];
x.addListener(v,u.type,u.handler,u.self,u.capture);
}}}}return t;
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(b,c){var c=arguments.callee.base.call(this,b,c);
c.shiftKey=b.shiftKey;
c.ctrlKey=b.ctrlKey;
c.altKey=b.altKey;
c.metaKey=b.metaKey;
return c;
},getModifiers:function(){var e=0;
var d=this._native;

if(d.shiftKey){e|=qx.event.type.Dom.SHIFT_MASK;
}
if(d.ctrlKey){e|=qx.event.type.Dom.CTRL_MASK;
}
if(d.altKey){e|=qx.event.type.Dom.ALT_MASK;
}
if(d.metaKey){e|=qx.event.type.Dom.META_MASK;
}return e;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._charCode=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._charCode=this._charCode;
return c;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._identifier=this._identifier;
return c;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var o="qx.client",n="blur",m="focus",l="mousedown",k="on",j="mouseup",i="DOMFocusOut",h="DOMFocusIn",g="selectstart",f="onmousedown",H="onfocusout",G="onfocusin",F="onmouseup",E="onselectstart",D="draggesture",C="qx.event.handler.Focus",B="_applyFocus",A="deactivate",z="textarea",y="_applyActive",v="input",w="focusin",t="qxSelectable",u="tabIndex",r="off",s="activate",p="focusout",q="qxKeepFocus",x="qxKeepActive";
qx.Class.define(C,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bH){arguments.callee.base.call(this);
this._manager=bH;
this._window=bH.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:y,nullable:true},focus:{apply:B,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__onNativeMouseDownWrapper:null,__onNativeMouseUpWrapper:null,__onNativeFocusWrapper:null,__onNativeBlurWrapper:null,__onNativeDragGestureWrapper:null,__onNativeSelectStartWrapper:null,__onNativeFocusInWrapper:null,__onNativeFocusOutWrapper:null,__previousFocus:null,__previousActive:null,canHandleEvent:function(bE,bF){},registerEvent:function(J,K,L){},unregisterEvent:function(bt,bu,bv){},focus:function(bh){try{bh.focus();
}catch(bK){}this.setFocus(bh);
this.setActive(bh);
},activate:function(by){this.setActive(by);
},blur:function(bk){try{bk.blur();
}catch(I){}
if(this.getActive()===bk){this.resetActive();
}
if(this.getFocus()===bk){this.resetFocus();
}},deactivate:function(bD){if(this.getActive()===bD){this.resetActive();
}},tryActivate:function(br){var bs=this.__findActivatableElement(br);

if(bs){this.setActive(bs);
}},__fireEvent:function(S,T,U,V){var X=qx.event.Registration;
var W=X.createEvent(U,qx.event.type.Focus,[S,T,V]);
X.dispatchEvent(S,W);
},_windowFocused:true,__doWindowBlur:function(){if(this._windowFocused){this._windowFocused=false;
this.__fireEvent(this._window,null,n,false);
}},__doWindowFocus:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fireEvent(this._window,null,m,false);
}},_initObserver:qx.core.Variant.select(o,{"gecko":function(){this.__onNativeMouseDownWrapper=qx.lang.Function.listener(this.__onNativeMouseDown,this);
this.__onNativeMouseUpWrapper=qx.lang.Function.listener(this.__onNativeMouseUp,this);
this.__onNativeFocusWrapper=qx.lang.Function.listener(this.__onNativeFocus,this);
this.__onNativeBlurWrapper=qx.lang.Function.listener(this.__onNativeBlur,this);
this.__onNativeDragGestureWrapper=qx.lang.Function.listener(this.__onNativeDragGesture,this);
this._document.addEventListener(l,this.__onNativeMouseDownWrapper,true);
this._document.addEventListener(j,this.__onNativeMouseUpWrapper,true);
this._window.addEventListener(m,this.__onNativeFocusWrapper,true);
this._window.addEventListener(n,this.__onNativeBlurWrapper,true);
this._window.addEventListener(D,this.__onNativeDragGestureWrapper,true);
},"mshtml":function(){this.__onNativeMouseDownWrapper=qx.lang.Function.listener(this.__onNativeMouseDown,this);
this.__onNativeMouseUpWrapper=qx.lang.Function.listener(this.__onNativeMouseUp,this);
this.__onNativeFocusInWrapper=qx.lang.Function.listener(this.__onNativeFocusIn,this);
this.__onNativeFocusOutWrapper=qx.lang.Function.listener(this.__onNativeFocusOut,this);
this.__onNativeSelectStartWrapper=qx.lang.Function.listener(this.__onNativeSelectStart,this);
this._document.attachEvent(f,this.__onNativeMouseDownWrapper);
this._document.attachEvent(F,this.__onNativeMouseUpWrapper);
this._document.attachEvent(G,this.__onNativeFocusInWrapper);
this._document.attachEvent(H,this.__onNativeFocusOutWrapper);
this._document.attachEvent(E,this.__onNativeSelectStartWrapper);
},"webkit":function(){this.__onNativeMouseDownWrapper=qx.lang.Function.listener(this.__onNativeMouseDown,this);
this.__onNativeMouseUpWrapper=qx.lang.Function.listener(this.__onNativeMouseUp,this);
this.__onNativeFocusOutWrapper=qx.lang.Function.listener(this.__onNativeFocusOut,this);
this.__onNativeFocusWrapper=qx.lang.Function.listener(this.__onNativeFocus,this);
this.__onNativeBlurWrapper=qx.lang.Function.listener(this.__onNativeBlur,this);
this.__onNativeSelectStartWrapper=qx.lang.Function.listener(this.__onNativeSelectStart,this);
this._document.addEventListener(l,this.__onNativeMouseDownWrapper,true);
this._document.addEventListener(j,this.__onNativeMouseUpWrapper,true);
this._document.addEventListener(g,this.__onNativeSelectStartWrapper,false);
this._window.addEventListener(i,this.__onNativeFocusOutWrapper,true);
this._window.addEventListener(m,this.__onNativeFocusWrapper,true);
this._window.addEventListener(n,this.__onNativeBlurWrapper,true);
},"opera":function(){this.__onNativeMouseDownWrapper=qx.lang.Function.listener(this.__onNativeMouseDown,this);
this.__onNativeMouseUpWrapper=qx.lang.Function.listener(this.__onNativeMouseUp,this);
this.__onNativeFocusInWrapper=qx.lang.Function.listener(this.__onNativeFocusIn,this);
this.__onNativeFocusOutWrapper=qx.lang.Function.listener(this.__onNativeFocusOut,this);
this._document.addEventListener(l,this.__onNativeMouseDownWrapper,true);
this._document.addEventListener(j,this.__onNativeMouseUpWrapper,true);
this._window.addEventListener(h,this.__onNativeFocusInWrapper,true);
this._window.addEventListener(i,this.__onNativeFocusOutWrapper,true);
}}),_stopObserver:qx.core.Variant.select(o,{"gecko":function(){this._document.removeEventListener(l,this.__onNativeMouseDownWrapper,true);
this._document.removeEventListener(j,this.__onNativeMouseUpWrapper,true);
this._window.removeEventListener(m,this.__onNativeFocusWrapper,true);
this._window.removeEventListener(n,this.__onNativeBlurWrapper,true);
this._window.removeEventListener(D,this.__onNativeDragGestureWrapper,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,f,this.__onNativeMouseDownWrapper);
qx.bom.Event.removeNativeListener(this._document,F,this.__onNativeMouseUpWrapper);
qx.bom.Event.removeNativeListener(this._document,G,this.__onNativeFocusInWrapper);
qx.bom.Event.removeNativeListener(this._document,H,this.__onNativeFocusOutWrapper);
qx.bom.Event.removeNativeListener(this._document,E,this.__onNativeSelectStartWrapper);
},"webkit":function(){this._document.removeEventListener(l,this.__onNativeMouseDownWrapper,true);
this._document.removeEventListener(g,this.__onNativeSelectStartWrapper,false);
this._window.removeEventListener(h,this.__onNativeFocusInWrapper,true);
this._window.removeEventListener(i,this.__onNativeFocusOutWrapper,true);
this._window.removeEventListener(m,this.__onNativeFocusWrapper,true);
this._window.removeEventListener(n,this.__onNativeBlurWrapper,true);
},"opera":function(){this._document.removeEventListener(l,this.__onNativeMouseDownWrapper,true);
this._window.removeEventListener(h,this.__onNativeFocusInWrapper,true);
this._window.removeEventListener(i,this.__onNativeFocusOutWrapper,true);
this._window.removeEventListener(m,this.__onNativeFocusWrapper,true);
this._window.removeEventListener(n,this.__onNativeBlurWrapper,true);
}}),__onNativeDragGesture:qx.event.GlobalError.observeMethod(qx.core.Variant.select(o,{"gecko":function(e){if(!this.__isSelectable(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__onNativeFocusIn:qx.event.GlobalError.observeMethod(qx.core.Variant.select(o,{"mshtml":function(e){this.__doWindowFocus();
var bj=e.srcElement;
var bi=this.__findFocusableElement(bj);

if(bi){this.setFocus(bi);
}this.tryActivate(bj);
},"opera":function(e){var bL=e.target;

if(bL==this._document||bL==this._window){this.__doWindowFocus();

if(this.__previousFocus){this.setFocus(this.__previousFocus);
delete this.__previousFocus;
}
if(this.__previousActive){this.setActive(this.__previousActive);
delete this.__previousActive;
}}else{this.setFocus(bL);
this.tryActivate(bL);
if(!this.__isSelectable(bL)){bL.selectionStart=0;
bL.selectionEnd=0;
}}},"default":null})),__onNativeFocusOut:qx.event.GlobalError.observeMethod(qx.core.Variant.select(o,{"mshtml":function(e){if(!e.toElement){this.__doWindowBlur();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bl=e.target;

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(e){var R=e.target;

if(R==this._document){this.__doWindowBlur();
this.__previousFocus=this.getFocus();
this.__previousActive=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(R===this.getFocus()){this.resetFocus();
}
if(R===this.getActive()){this.resetActive();
}}},"default":null})),__onNativeBlur:qx.event.GlobalError.observeMethod(qx.core.Variant.select(o,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__doWindowBlur();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__doWindowBlur();
this.__previousFocus=this.getFocus();
this.__previousActive=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__onNativeFocus:qx.event.GlobalError.observeMethod(qx.core.Variant.select(o,{"gecko":function(e){var ba=e.target;

if(ba===this._window||ba===this._document){this.__doWindowFocus();
ba=this._body;
}this.setFocus(ba);
this.tryActivate(ba);
},"webkit":function(e){var bx=e.target;

if(bx===this._window||bx===this._document){this.__doWindowFocus();

if(this.__previousFocus){this.setFocus(this.__previousFocus);
delete this.__previousFocus;
}
if(this.__previousActive){this.setActive(this.__previousActive);
delete this.__previousActive;
}}else{this.setFocus(bx);
this.tryActivate(bx);
}},"default":null})),__onNativeMouseDown:qx.event.GlobalError.observeMethod(qx.core.Variant.select(o,{"gecko":function(e){var bG=this.__findFocusableElement(e.target);

if(!bG){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bq=e.srcElement;
var bp=this.__findFocusableElement(bq);

if(bp){if(!this.__isSelectable(bq)){bq.unselectable=k;
try{document.selection.empty();
}catch(e){}try{bp.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__isSelectable(bq)){bq.unselectable=k;
}}},"webkit":function(e){var bd=e.target;
var bc=this.__findFocusableElement(bd);

if(bc){this.setFocus(bc);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var O=e.target;
var M=this.__findFocusableElement(O);

if(!this.__isSelectable(O)){qx.bom.Event.preventDefault(e);
if(M){var N=this.getFocus();

if(N&&N.selectionEnd){N.selectionStart=0;
N.selectionEnd=0;
N.blur();
}if(M){this.setFocus(M);
}}}else if(M){this.setFocus(M);
}},"default":null})),__onNativeMouseUp:qx.event.GlobalError.observeMethod(qx.core.Variant.select(o,{"mshtml":function(e){var bb=e.srcElement;

if(bb.unselectable){bb.unselectable=r;
}this.tryActivate(this.__fixFocus(bb));
},"gecko":function(e){var bw=e.target;

while(bw&&bw.offsetWidth===undefined){bw=bw.parentNode;
}
if(bw){this.tryActivate(bw);
}},"webkit|opera":function(e){this.tryActivate(this.__fixFocus(e.target));
},"default":null})),__fixFocus:qx.event.GlobalError.observeMethod(qx.core.Variant.select(o,{"mshtml|webkit":function(bI){var bJ=this.getFocus();

if(bJ&&bI!=bJ&&(bJ.nodeName.toLowerCase()===v||bJ.nodeName.toLowerCase()===z)){bI=bJ;
}return bI;
},"default":function(d){return d;
}})),__onNativeSelectStart:qx.event.GlobalError.observeMethod(qx.core.Variant.select(o,{"mshtml|webkit":function(e){var Y=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__isSelectable(Y)){qx.bom.Event.preventDefault(e);
}},"default":null})),__isFocusable:function(be){var bf=qx.bom.element.Attribute.get(be,u);

if(bf>=1){return true;
}var bg=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bf>=0&&bg[be.tagName]){return true;
}return false;
},__findFocusableElement:function(bo){while(bo&&bo.nodeType===1){if(bo.getAttribute(q)==k){return null;
}
if(this.__isFocusable(bo)){return bo;
}bo=bo.parentNode;
}return this._body;
},__findActivatableElement:function(P){var Q=P;

while(P&&P.nodeType===1){if(P.getAttribute(x)==k){return null;
}P=P.parentNode;
}return Q;
},__isSelectable:function(bz){while(bz&&bz.nodeType===1){var bA=bz.getAttribute(t);

if(bA!=null){return bA===k;
}bz=bz.parentNode;
}return true;
},_applyActive:function(bm,bn){if(bn){this.__fireEvent(bn,bm,A,true);
}
if(bm){this.__fireEvent(bm,bn,s,true);
}},_applyFocus:function(bB,bC){if(bC){this.__fireEvent(bC,bB,p,true);
}
if(bB){this.__fireEvent(bB,bC,w,true);
}if(bC){this.__fireEvent(bC,bB,n,false);
}
if(bB){this.__fireEvent(bB,bC,m,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__mouseActive=null;
},defer:function(a){qx.event.Registration.addHandler(a);
var b=a.FOCUSABLE_ELEMENTS;

for(var c in b){b[c.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var j="",i="qx.client",h="readOnly",g="accessKey",f="qx.bom.element.Attribute",e="rowSpan",d="vAlign",c="className",b="textContent",a="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",o="dateTime",m="maxLength",n="mshtml",k="cellPadding",l="colSpan";
qx.Class.define(f,{statics:{__hints:{names:{"class":c,"for":x,html:q,text:qx.core.Variant.isSet(i,n)?r:b,colspan:l,rowspan:e,valign:d,datetime:o,accesskey:g,tabindex:p,maxlength:m,readonly:h,longdesc:w,cellpadding:k,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,maxLength:10000000,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(I){var J=[];
var L=this.__hints.runtime;

for(var K in I){if(!L[K]){J.push(K,t,I[K],a);
}}return J.join(j);
},get:qx.core.Variant.select(i,{"mshtml":function(F,name){var H=this.__hints;
var G;
name=H.names[name]||name;
if(H.original[name]){G=F.getAttribute(name,2);
}else if(H.property[name]){if(H.propertyDefault[name]&&G==H.propertyDefault[name]){return null;
}G=F[name];
}else{G=F.getAttribute(name);
}if(H.bools[name]){return !!G;
}return G;
},"default":function(z,name){var B=this.__hints;
var A;
name=B.names[name]||name;
if(B.property[name]){if(B.propertyDefault[name]&&A==B.propertyDefault[name]){return null;
}A=z[name];

if(A==null){A=z.getAttribute(name);
}}else{A=z.getAttribute(name);
}if(B.bools[name]){return !!A;
}return A;
}}),set:function(C,name,D){var E=this.__hints;
name=E.names[name]||name;
if(E.bools[name]){D=!!D;
}if(E.property[name]){if(D==null){D=E.propertyDefault[name];

if(D===undefined){D=null;
}}C[name]=D;
}else{if(D===true){C.setAttribute(name,name);
}else if(D===false||D===null){C.removeAttribute(name);
}else{C.setAttribute(name,D);
}}},reset:function(y,name){this.set(y,name,null);
}}});
})();
(function(){var n="left",m="right",l="middle",k="qx.client",j="dblclick",i="click",h="none",g="contextmenu",f="qx.event.type.Mouse";
qx.Class.define(f,{extend:qx.event.type.Dom,members:{init:function(a,b,c,d,e){arguments.callee.base.call(this,a,b,c,d,e);

if(!c){this._relatedTarget=qx.bom.Event.getRelatedTarget(a);
}return this;
},_cloneNativeEvent:function(o,p){var p=arguments.callee.base.call(this,o,p);
p.button=o.button;
p.clientX=o.clientX;
p.clientY=o.clientY;
p.pageX=o.pageX;
p.pageY=o.pageY;
p.screenX=o.screenX;
p.screenY=o.screenY;
p.wheelDelta=o.wheelDelta;
p.detail=o.detail;
p.srcElement=o.srcElement;
return p;
},__buttons:qx.core.Variant.select(k,{"mshtml":{1:n,2:m,4:l},"default":{0:n,2:m,1:l}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case i:case j:return n;
case g:return m;
default:return this.__buttons[this._native.button]||h;
}},isLeftPressed:function(){return this.getButton()===n;
},isMiddlePressed:function(){return this.getButton()===l;
},isRightPressed:function(){return this.getButton()===m;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(k,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(r);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(k,{"mshtml":function(){var q=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(q);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__detect:function(y){var z=navigator.userAgent;
var B=new RegExp(s+y+d);
var C=z.match(B);

if(!C){return;
}var name=C[1].toLowerCase();
var A=C[3];
if(z.match(/Version(\/| )([0-9]+\.[0-9])/)){A=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(z.indexOf(a)!==-1||z.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
A=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=A;
this.VERSION=parseFloat(A,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(E){E.__detect(o);
},"gecko":function(G){G.__detect(k);
},"mshtml":function(F){F.__detect(v);
},"opera":function(D){D.__detect(p);
}})});
})();
(function(){var r="qx.client",q="qx.dom.Hierarchy",p="previousSibling",o="*",n="nextSibling",m="parentNode";
qx.Class.define(q,{statics:{getNodeIndex:function(R){var S=0;

while(R&&(R=R.previousSibling)){S++;
}return S;
},getElementIndex:function(d){var e=0;
var f=qx.dom.Node.ELEMENT;

while(d&&(d=d.previousSibling)){if(d.nodeType==f){e++;
}}return e;
},getNextElementSibling:function(L){while(L&&(L=L.nextSibling)&&!qx.dom.Node.isElement(L)){continue;
}return L||null;
},getPreviousElementSibling:function(v){while(v&&(v=v.previousSibling)&&!qx.dom.Node.isElement(v)){continue;
}return v||null;
},contains:qx.core.Variant.select(r,{"webkit|mshtml|opera":function(T,U){if(qx.dom.Node.isDocument(T)){var V=qx.dom.Node.getDocument(U);
return T&&V==T;
}else if(qx.dom.Node.isDocument(U)){return false;
}else{return T.contains(U);
}},"gecko":function(N,O){return !!(N.compareDocumentPosition(O)&16);
},"default":function(s,t){while(t){if(s==t){return true;
}t=t.parentNode;
}return false;
}}),isRendered:function(A){if(!A.offsetParent){return false;
}var B=A.ownerDocument||A.document;
if(B.body.contains){return B.body.contains(A);
}if(B.compareDocumentPosition){return !!(B.compareDocumentPosition(A)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(H,I){return this.contains(I,H);
},getCommonParent:qx.core.Variant.select(r,{"mshtml|opera":function(P,Q){if(P===Q){return P;
}
while(P&&qx.dom.Node.isElement(P)){if(P.contains(Q)){return P;
}P=P.parentNode;
}return null;
},"default":function(g,h){if(g===h){return g;
}var i={};
var l=qx.core.ObjectRegistry;
var k,j;

while(g||h){if(g){k=l.toHashCode(g);

if(i[k]){return i[k];
}i[k]=g;
g=g.parentNode;
}
if(h){j=l.toHashCode(h);

if(i[j]){return i[j];
}i[j]=h;
h=h.parentNode;
}}return null;
}}),getAncestors:function(w){return this._recursivelyCollect(w,m);
},getChildElements:function(D){D=D.firstChild;

if(!D){return [];
}var E=this.getNextSiblings(D);

if(D.nodeType===1){E.unshift(D);
}return E;
},getDescendants:function(C){return qx.lang.Array.fromCollection(C.getElementsByTagName(o));
},getFirstDescendant:function(M){M=M.firstChild;

while(M&&M.nodeType!=1){M=M.nextSibling;
}return M;
},getLastDescendant:function(J){J=J.lastChild;

while(J&&J.nodeType!=1){J=J.previousSibling;
}return J;
},getPreviousSiblings:function(F){return this._recursivelyCollect(F,p);
},getNextSiblings:function(G){return this._recursivelyCollect(G,n);
},_recursivelyCollect:function(x,y){var z=[];

while(x=x[y]){if(x.nodeType==1){z.push(x);
}}return z;
},getSiblings:function(K){return this.getPreviousSiblings(K).reverse().concat(this.getNextSiblings(K));
},isEmpty:function(u){u=u.firstChild;

while(u){if(u.nodeType===qx.dom.Node.ELEMENT||u.nodeType===qx.dom.Node.TEXT){return false;
}u=u.nextSibling;
}return true;
},cleanWhitespace:function(a){var b=a.firstChild;

while(b){var c=b.nextSibling;

if(b.nodeType==3&&!/\S/.test(b.nodeValue)){a.removeChild(b);
}b=c;
}}}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(f,g){arguments.callee.base.call(this,true,f);

if(g){this._native=g.getNativeEvent()||null;
this._originalTarget=g.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(j){var k=arguments.callee.base.call(this,j);
k._native=this._native;
return k;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var c=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(c);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(n){this.getManager().addType(n);
},addAction:function(h){this.getManager().addAction(h);
},supportsType:function(l){return this.getManager().supportsType(l);
},supportsAction:function(i){return this.getManager().supportsAction(i);
},addData:function(d,e){this.getManager().addData(d,e);
},getData:function(m){return this.getManager().getData(m);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(l,m){arguments.callee.base.call(this,l);
this.__window=l.getWindow();
this.__registration=m;
l.addListener(this.__window,f,this.releaseCapture,this);
l.addListener(this.__window,e,this.releaseCapture,this);
l.addListener(this.__window,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__registration:null,__captureElement:null,__containerCapture:true,__window:null,_getParent:function(p){return p.parentNode;
},canDispatchEvent:function(r,event,s){return (this.__captureElement&&this.__captureEvents[s]);
},dispatchEvent:function(t,event,u){if(u==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__containerCapture||!qx.dom.Hierarchy.contains(this.__captureElement,t)){t=this.__captureElement;
}arguments.callee.base.call(this,t,event,u);
},__captureEvents:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(n,o){var o=o!==false;

if(this.__captureElement===n&&this.__containerCapture==o){return;
}
if(this.__captureElement){this.releaseCapture();
}this.nativeSetCapture(n,o);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(n,h,function(){qx.bom.Event.removeNativeListener(n,h,arguments.callee);
self.releaseCapture();
});
}this.__containerCapture=o;
this.__captureElement=n;
this.__registration.fireEvent(n,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__captureElement;
},releaseCapture:function(){var i=this.__captureElement;

if(!i){return;
}this.__captureElement=null;
this.__registration.fireEvent(i,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(i);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(j,k){j.setCapture(k!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__captureElement=this.__window=this.__registration=null;
},defer:function(q){qx.event.Registration.addDispatcher(q);
}});
})();
(function(){var t="qx.client",s="",r="mshtml",q="'",p="SelectionLanguage",o="qx.xml.Document",n=" />",m="MSXML2.DOMDocument.3.0",k='<\?xml version="1.0" encoding="utf-8"?>\n<',j="MSXML2.XMLHTTP.3.0",e="MSXML2.XMLHTTP.6.0",h=" xmlns='",g="text/xml",d="XPath",c="MSXML2.DOMDocument.6.0",f="HTML";
qx.Class.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(A){if(A.nodeType===9){return A.documentElement.nodeName!==f;
}else if(A.ownerDocument){return this.isXmlDocument(A.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(t,{"mshtml":function(B,C){var D=new ActiveXObject(this.DOMDOC);
D.setProperty(p,d);

if(C){var E=k;
E+=C;

if(B){E+=h+B+q;
}E+=n;
D.loadXML(E);
}return D;
},"default":function(F,G){return document.implementation.createDocument(F||s,G||s,null);
}}),fromString:qx.core.Variant.select(t,{"mshtml":function(v){var w=qx.xml.Document.create();
w.loadXML(v);
return w;
},"default":function(a){var b=new DOMParser();
return b.parseFromString(a,g);
}})},defer:function(x){if(qx.core.Variant.isSet(t,r)){var y=[c,m];
var z=[e,j];

for(var i=0,l=y.length;i<l;i++){try{new ActiveXObject(y[i]);
new ActiveXObject(z[i]);
}catch(u){continue;
}x.DOMDOC=y[i];
x.XMLHTTP=z[i];
break;
}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(H,stop,I){var parent=H.parentNode;
var N=qx.dom.Node.getDocument(H);
var J=N.body;
var V,T,Q;
var X,O,Y;
var R,ba,bd;
var bb,L,U,K;
var P,bc,S;
var M=I===g;
var W=I===c;
stop=stop?stop.parentNode:N;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===J||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===J){T=parent.scrollLeft;
Q=T+qx.bom.Viewport.getWidth();
X=qx.bom.Viewport.getWidth();
O=parent.clientWidth;
Y=parent.scrollWidth;
R=0;
ba=0;
bd=0;
}else{V=qx.bom.element.Location.get(parent);
T=V.left;
Q=V.right;
X=parent.offsetWidth;
O=parent.clientWidth;
Y=parent.scrollWidth;
R=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
ba=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
bd=X-O-R-ba;
}bb=qx.bom.element.Location.get(H);
L=bb.left;
U=bb.right;
K=H.offsetWidth;
P=L-T-R;
bc=U-Q+ba;
S=0;
if(M){S=P;
}else if(W){S=bc+bd;
}else if(P<0||K>O){S=P;
}else if(bc>0){S=bc+bd;
}parent.scrollLeft+=S;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===J){break;
}parent=parent.parentNode;
}},intoViewY:function(l,stop,m){var parent=l.parentNode;
var s=qx.dom.Node.getDocument(l);
var n=s.body;
var A,o,w;
var C,z,u;
var q,r,p;
var E,F,B,v;
var y,t,G;
var D=m===d;
var x=m===e;
stop=stop?stop.parentNode:s;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){o=parent.scrollTop;
w=o+qx.bom.Viewport.getHeight();
C=qx.bom.Viewport.getHeight();
z=parent.clientHeight;
u=parent.scrollHeight;
q=0;
r=0;
p=0;
}else{A=qx.bom.element.Location.get(parent);
o=A.top;
w=A.bottom;
C=parent.offsetHeight;
z=parent.clientHeight;
u=parent.scrollHeight;
q=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
r=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
p=C-z-q-r;
}E=qx.bom.element.Location.get(l);
F=E.top;
B=E.bottom;
v=l.offsetHeight;
y=F-o-q;
t=B-w+r;
G=0;
if(D){G=y;
}else if(x){G=t+p;
}else if(y<0||v>z){G=y;
}else if(t>0){G=t+p;
}parent.scrollTop+=G;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var br="borderTopWidth",bq="borderLeftWidth",bp="marginTop",bo="marginLeft",bn="scroll",bm="qx.client",bl="border-box",bk="borderBottomWidth",bj="borderRightWidth",bi="auto",bG="padding",bF="qx.bom.element.Location",bE="paddingLeft",bD="static",bC="marginBottom",bB="visible",bA="BODY",bz="paddingBottom",by="paddingTop",bx="marginRight",bv="position",bw="margin",bt="overflow",bu="paddingRight",bs="border";
qx.Class.define(bF,{statics:{__style:function(V,W){return qx.bom.element.Style.get(V,W,qx.bom.element.Style.COMPUTED_MODE,false);
},__num:function(bM,bN){return parseInt(qx.bom.element.Style.get(bM,bN,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__computeScroll:function(X){var bb=0,top=0;
if(X.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var ba=qx.dom.Node.getWindow(X);
bb-=qx.bom.Viewport.getScrollLeft(ba);
top-=qx.bom.Viewport.getScrollTop(ba);
}else{var Y=qx.dom.Node.getDocument(X).body;
X=X.parentNode;
while(X&&X!=Y){bb+=X.scrollLeft;
top+=X.scrollTop;
X=X.parentNode;
}}return {left:bb,top:top};
},__computeBody:qx.core.Variant.select(bm,{"mshtml":function(R){var T=qx.dom.Node.getDocument(R);
var S=T.body;
var U=0;
var top=0;
U-=S.clientLeft+T.documentElement.clientLeft;
top-=S.clientTop+T.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){U+=this.__num(S,bq);
top+=this.__num(S,br);
}return {left:U,top:top};
},"webkit":function(h){var j=qx.dom.Node.getDocument(h);
var i=j.body;
var k=i.offsetLeft;
var top=i.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){k+=this.__num(i,bq);
top+=this.__num(i,br);
}return {left:k,top:top};
},"gecko":function(a){var b=qx.dom.Node.getDocument(a).body;
var c=b.offsetLeft;
var top=b.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){c+=this.__num(b,bo);
top+=this.__num(b,bp);
}if(qx.bom.element.BoxSizing.get(b)!==bl){c+=this.__num(b,bq);
top+=this.__num(b,br);
}return {left:c,top:top};
},"default":function(H){var I=qx.dom.Node.getDocument(H).body;
var J=I.offsetLeft;
var top=I.offsetTop;
return {left:J,top:top};
}}),__computeOffset:qx.core.Variant.select(bm,{"mshtml|webkit":function(K){var M=qx.dom.Node.getDocument(K);
if(K.getBoundingClientRect){var N=K.getBoundingClientRect();
var O=N.left;
var top=N.top;
}else{var O=K.offsetLeft;
var top=K.offsetTop;
K=K.offsetParent;
var L=M.body;
while(K&&K!=L){O+=K.offsetLeft;
top+=K.offsetTop;
O+=this.__num(K,bq);
top+=this.__num(K,br);
K=K.offsetParent;
}}return {left:O,top:top};
},"gecko":function(p){if(p.getBoundingClientRect){var s=p.getBoundingClientRect();
var t=Math.round(s.left);
var top=Math.round(s.top);
}else{var t=0;
var top=0;
var q=qx.dom.Node.getDocument(p).body;
var r=qx.bom.element.BoxSizing;

if(r.get(p)!==bl){t-=this.__num(p,bq);
top-=this.__num(p,br);
}
while(p&&p!==q){t+=p.offsetLeft;
top+=p.offsetTop;
if(r.get(p)!==bl){t+=this.__num(p,bq);
top+=this.__num(p,br);
}if(p.parentNode&&this.__style(p.parentNode,bt)!=bB){t+=this.__num(p.parentNode,bq);
top+=this.__num(p.parentNode,br);
}p=p.offsetParent;
}}return {left:t,top:top};
},"default":function(bJ){var bL=0;
var top=0;
var bK=qx.dom.Node.getDocument(bJ).body;
while(bJ&&bJ!==bK){bL+=bJ.offsetLeft;
top+=bJ.offsetTop;
bJ=bJ.offsetParent;
}return {left:bL,top:top};
}}),get:function(y,z){if(y.tagName==bA){var location=this.__getBodyLocation(y);
var G=location.left;
var top=location.top;
}else{var A=this.__computeBody(y);
var F=this.__computeOffset(y);
var scroll=this.__computeScroll(y);
var G=F.left+A.left-scroll.left;
var top=F.top+A.top-scroll.top;
}var B=G+y.offsetWidth;
var C=top+y.offsetHeight;

if(z){if(z==bG||z==bn){var D=qx.bom.element.Overflow.getX(y);

if(D==bn||D==bi){B+=y.scrollWidth-y.offsetWidth+this.__num(y,bq)+this.__num(y,bj);
}var E=qx.bom.element.Overflow.getY(y);

if(E==bn||E==bi){C+=y.scrollHeight-y.offsetHeight+this.__num(y,br)+this.__num(y,bk);
}}
switch(z){case bG:G+=this.__num(y,bE);
top+=this.__num(y,by);
B-=this.__num(y,bu);
C-=this.__num(y,bz);
case bn:G-=y.scrollLeft;
top-=y.scrollTop;
B-=y.scrollLeft;
C-=y.scrollTop;
case bs:G+=this.__num(y,bq);
top+=this.__num(y,br);
B-=this.__num(y,bj);
C-=this.__num(y,bk);
break;
case bw:G-=this.__num(y,bo);
top-=this.__num(y,bp);
B+=this.__num(y,bx);
C+=this.__num(y,bC);
break;
}}return {left:G,top:top,right:B,bottom:C};
},__getBodyLocation:qx.core.Variant.select(bm,{"default":function(bH){var top=bH.offsetTop+this.__num(bH,bp);
var bI=bH.offsetLeft+this.__num(bH,bo);
return {left:bI,top:top};
},"mshtml":function(u){var top=u.offsetTop;
var v=u.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__num(u,bp);
v+=this.__num(u,bo);
}return {left:v,top:top};
},"gecko":function(P){var top=P.offsetTop+this.__num(P,bp)+this.__num(P,bq);
var Q=P.offsetLeft+this.__num(P,bo)+this.__num(P,br);
return {left:Q,top:top};
}}),getLeft:function(d,e){return this.get(d,e).left;
},getTop:function(bO,bP){return this.get(bO,bP).top;
},getRight:function(f,g){return this.get(f,g).right;
},getBottom:function(w,x){return this.get(w,x).bottom;
},getRelative:function(bc,bd,be,bf){var bh=this.get(bc,be);
var bg=this.get(bd,bf);
return {left:bh.left-bg.left,top:bh.top-bg.top,right:bh.right-bg.right,bottom:bh.bottom-bg.bottom};
},getPosition:function(o){return this.getRelative(o,this.getOffsetParent(o));
},getOffsetParent:function(l){var n=l.offsetParent||document.body;
var m=qx.bom.element.Style;

while(n&&(!/^body|html$/i.test(n.tagName)&&m.get(n,bv)===bD)){n=n.offsetParent;
}return n;
}}});
})();
(function(){var l="qx.client",k="character",j="EndToEnd",i="input",h="textarea",g="StartToStart",f='character',e="qx.bom.Selection",d="button",c="#text",b="body";
qx.Class.define(e,{statics:{getSelectionObject:qx.core.Variant.select(l,{"mshtml":function(T){return T.selection;
},"default":function(S){return qx.dom.Node.getWindow(S).getSelection();
}}),get:qx.core.Variant.select(l,{"mshtml":function(bq){var br=qx.bom.Range.get(qx.dom.Node.getDocument(bq));
return br.text;
},"default":function(a){if(this.__isInputOrTextarea(a)){return a.value.substring(a.selectionStart,a.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(a)).toString();
}}}),getLength:qx.core.Variant.select(l,{"mshtml":function(m){var o=this.get(m);
var n=qx.util.StringSplit.split(o,/\r\n/);
return o.length-(n.length-1);
},"opera":function(bs){var bx,bv,bt;

if(this.__isInputOrTextarea(bs)){var bw=bs.selectionStart;
var bu=bs.selectionEnd;
bx=bs.value.substring(bw,bu);
bv=bu-bw;
}else{bx=qx.bom.Selection.get(bs);
bv=bx.length;
}bt=qx.util.StringSplit.split(bx,/\r\n/);
return bv-(bt.length-1);
},"default":function(by){if(this.__isInputOrTextarea(by)){return by.selectionEnd-by.selectionStart;
}else{return this.get(by).length;
}}}),getStart:qx.core.Variant.select(l,{"mshtml":function(X){if(this.__isInputOrTextarea(X)){var bd=qx.bom.Range.get();
if(!X.contains(bd.parentElement())){return -1;
}var be=qx.bom.Range.get(X);
var bc=X.value.length;
be.moveToBookmark(bd.getBookmark());
be.moveEnd(f,bc);
return bc-be.text.length;
}else{var be=qx.bom.Range.get(X);
var ba=be.parentElement();
var bf=qx.bom.Range.get();
bf.moveToElementText(ba);
var Y=qx.bom.Range.get(qx.dom.Node.getBodyElement(X));
Y.setEndPoint(g,be);
Y.setEndPoint(j,bf);
if(bf.compareEndPoints(g,Y)==0){return 0;
}var bb;
var bg=0;

while(true){bb=Y.moveStart(k,-1);
if(bf.compareEndPoints(g,Y)==0){break;
}if(bb==0){break;
}else{bg++;
}}return ++bg;
}},"gecko|webkit":function(U){if(this.__isInputOrTextarea(U)){return U.selectionStart;
}else{var W=qx.dom.Node.getDocument(U);
var V=this.getSelectionObject(W);
if(V.anchorOffset<V.focusOffset){return V.anchorOffset;
}else{return V.focusOffset;
}}},"default":function(bh){if(this.__isInputOrTextarea(bh)){return bh.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bh)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(l,{"mshtml":function(p){if(this.__isInputOrTextarea(p)){var u=qx.bom.Range.get();
if(!p.contains(u.parentElement())){return -1;
}var v=qx.bom.Range.get(p);
var t=p.value.length;
v.moveToBookmark(u.getBookmark());
v.moveStart(f,-t);
return v.text.length;
}else{var v=qx.bom.Range.get(p);
var r=v.parentElement();
var w=qx.bom.Range.get();
w.moveToElementText(r);
var t=w.text.length;
var q=qx.bom.Range.get(qx.dom.Node.getBodyElement(p));
q.setEndPoint(j,v);
q.setEndPoint(g,w);
if(w.compareEndPoints(j,q)==0){return t-1;
}var s;
var x=0;

while(true){s=q.moveEnd(k,1);
if(w.compareEndPoints(j,q)==0){break;
}if(s==0){break;
}else{x++;
}}return t-(++x);
}},"gecko|webkit":function(y){if(this.__isInputOrTextarea(y)){return y.selectionEnd;
}else{var A=qx.dom.Node.getDocument(y);
var z=this.getSelectionObject(A);
if(z.focusOffset>z.anchorOffset){return z.focusOffset;
}else{return z.anchorOffset;
}}},"default":function(F){if(this.__isInputOrTextarea(F)){return F.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(F)).focusOffset;
}}}),__isInputOrTextarea:function(R){return qx.dom.Node.isElement(R)&&(R.nodeName.toLowerCase()==i||R.nodeName.toLowerCase()==h);
},set:qx.core.Variant.select(l,{"mshtml":function(M,N,O){var P;
if(qx.dom.Node.isDocument(M)){M=M.body;
}
if(qx.dom.Node.isElement(M)||qx.dom.Node.isText(M)){switch(M.nodeName.toLowerCase()){case i:case h:case d:if(O===undefined){O=M.value.length;
}
if(N>=0&&N<=M.value.length&&O>=0&&O<=M.value.length){P=qx.bom.Range.get(M);
P.collapse(true);
P.moveStart(k,N);
P.moveEnd(k,O-N);
P.select();
return true;
}break;
case c:if(O===undefined){O=M.nodeValue.length;
}
if(N>=0&&N<=M.nodeValue.length&&O>=0&&O<=M.nodeValue.length){P=qx.bom.Range.get(qx.dom.Node.getBodyElement(M));
P.moveToElementText(M.parentNode);
P.collapse(true);
P.moveStart(k,N);
P.moveEnd(k,O-N);
P.select();
return true;
}break;
default:if(O===undefined){O=M.childNodes.length-1;
}if(M.childNodes[N]&&M.childNodes[O]){P=qx.bom.Range.get(qx.dom.Node.getBodyElement(M));
P.moveToElementText(M.childNodes[N]);
P.collapse(true);
var Q=qx.bom.Range.get(qx.dom.Node.getBodyElement(M));
Q.moveToElementText(M.childNodes[O]);
P.setEndPoint(j,Q);
P.select();
return true;
}}}return false;
},"default":function(bi,bj,bk){var bo=bi.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bi)&&(bo==i||bo==h)){if(bk===undefined){bk=bi.value.length;
}if(bj>=0&&bj<=bi.value.length&&bk>=0&&bk<=bi.value.length){bi.focus();
bi.select();
bi.setSelectionRange(bj,bk);
return true;
}}else{var bm=false;
var bn=qx.dom.Node.getWindow(bi).getSelection();
var bl=qx.bom.Range.get(bi);
if(qx.dom.Node.isText(bi)){if(bk===undefined){bk=bi.length;
}
if(bj>=0&&bj<bi.length&&bk>=0&&bk<=bi.length){bm=true;
}}else if(qx.dom.Node.isElement(bi)){if(bk===undefined){bk=bi.childNodes.length-1;
}
if(bj>=0&&bi.childNodes[bj]&&bk>=0&&bi.childNodes[bk]){bm=true;
}}else if(qx.dom.Node.isDocument(bi)){bi=bi.body;

if(bk===undefined){bk=bi.childNodes.length-1;
}
if(bj>=0&&bi.childNodes[bj]&&bk>=0&&bi.childNodes[bk]){bm=true;
}}
if(bm){if(!bn.isCollapsed){bn.collapseToStart();
}bl.setStart(bi,bj);
if(qx.dom.Node.isText(bi)){bl.setEnd(bi,bk);
}else{bl.setEndAfter(bi.childNodes[bk]);
}if(bn.rangeCount>0){bn.removeAllRanges();
}bn.addRange(bl);
return true;
}}return false;
}}),setAll:function(bp){return qx.bom.Selection.set(bp,0);
},clear:qx.core.Variant.select(l,{"mshtml":function(B){var C=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(B));
var D=qx.bom.Range.get(B);
var parent=D.parentElement();
var E=qx.bom.Range.get(qx.dom.Node.getDocument(B));
if(parent==E.parentElement()&&parent==B){C.empty();
}},"default":function(G){var I=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(G));
var K=G.nodeName.toLowerCase();
if(qx.dom.Node.isElement(G)&&(K==i||K==h)){G.setSelectionRange(0,0);
qx.bom.Element.blur(G);
}else if(qx.dom.Node.isDocument(G)||K==b){I.collapse(G.body?G.body:G,0);
}else{var J=qx.bom.Range.get(G);

if(!J.collapsed){var L;
var H=J.commonAncestorContainer;
if(qx.dom.Node.isElement(G)&&qx.dom.Node.isText(H)){L=H.parentNode;
}else{L=H;
}
if(L==G){I.collapse(G,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case d:switch(m.type){case j:case i:case c:case l:case f:case h:case g:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case e:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{if(m==null){m=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var f="",e="g",d="$",c="qx.util.StringSplit",b="\\$&",a="^";
qx.Class.define(c,{statics:{split:function(g,h,k){var n=f;
if(h===undefined){return [g.toString()];
}else if(h===null||h.constructor!==RegExp){h=new RegExp(String(h).replace(/[.*+?^${}()|[\]\/\\]/g,b),e);
}else{n=h.toString().replace(/^[\S\s]+\//,f);

if(!h.global){h=new RegExp(h.source,e+n);
}}var m=new RegExp(a+h.source+d,n);
if(k===undefined||+k<0){k=false;
}else{k=Math.floor(+k);

if(!k){return [];
}}var p,o=[],l=0,i=0;

while((k?i++<=k:true)&&(p=h.exec(g))){if((p[0].length===0)&&(h.lastIndex>p.index)){h.lastIndex--;
}
if(h.lastIndex>l){if(p.length>1){p[0].replace(m,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined){p[j]=undefined;
}}});
}o=o.concat(g.substring(l,p.index),(p.index===g.length?[]:p.slice(1)));
l=h.lastIndex;
}
if(p[0].length===0){h.lastIndex++;
}}return (l===g.length)?(h.test(f)?o:o.concat(f)):(k?o:o.concat(g.substring(l)));
}}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__queue:{},remove:function(c){delete this.__queue[c.$$hash];
},add:function(g){var h=this.__queue;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var d=this.__queue;
var f;

for(var e in d){f=d[e];
delete d[e];
f.syncWidget();
}for(var e in d){return;
}this.__queue={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__queue:{},__data:{},remove:function(f){var g=f.$$hash;
delete this.__data[g];
delete this.__queue[g];
},isVisible:function(c){return this.__data[c.$$hash]||false;
},__computeVisible:function(m){var o=this.__data;
var n=m.$$hash;
var p;
if(m.isExcluded()){p=false;
}else{var parent=m.$$parent;

if(parent){p=this.__computeVisible(parent);
}else{p=m.isRootWidget();
}}return o[n]=p;
},add:function(d){var e=this.__queue;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var h=this.__queue;
var l=this.__data;
for(var i in h){if(l[i]!=null){h[i].addChildrenToQueue(h);
}}var k={};

for(var i in h){k[i]=l[i];
l[i]=null;
}for(var i in h){var j=h[i];
delete h[i];
if(l[i]==null){this.__computeVisible(j);
}if(l[i]&&l[i]!=k[i]){j.checkAppearanceNeeds();
}}this.__queue={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__queue:{},remove:function(d){delete this.__queue[d.$$hash];
},add:function(e){var f=this.__queue;

if(f[e.$$hash]){return;
}f[e.$$hash]=e;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(c){return !!this.__queue[c.$$hash];
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__queue;
var i;

for(var h in g){i=g[h];
delete g[h];
if(j.isVisible(i)){i.syncAppearance();
}else{i.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__queue:{},add:function(f){var g=this.__queue;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__queue;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__queue={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(d,e){arguments.callee.base.call(this);
this.__decorator=d;
this.__id=e||d.toHashCode();
this.useMarkup(d.getMarkup());
var f={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){f.pointerEvents=c;
}this.setStyles(f);
},members:{__id:null,__decorator:null,getId:function(){return this.__id;
},getDecorator:function(){return this.__decorator;
},resize:function(h,i){this.__decorator.resize(this.getDomElement(),h,i);
},tint:function(g){this.__decorator.tint(this.getDomElement(),g);
},getInsets:function(){return this.__decorator.getInsets();
}},destruct:function(){this.__decorator=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__manager=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__manager:null,__focusEvents:{focusin:1,focusout:1,focus:1,blur:1},__ignoreDisabled:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(p){var u=p.getTarget();
var t=qx.ui.core.Widget.getWidgetByElement(u);
var v=false;

while(t&&t.isAnonymous()){var v=true;
t=t.getLayoutParent();
}if(t&&v&&p.getType()==a){t.getContainerElement().activate();
}if(this.__focusEvents[p.getType()]){t=t&&t.getFocusTarget();
if(!t){return;
}}if(p.getRelatedTarget){var C=p.getRelatedTarget();
var B=qx.ui.core.Widget.getWidgetByElement(C);

while(B&&B.isAnonymous()){B=B.getLayoutParent();
}
if(B){if(this.__focusEvents[p.getType()]){B=B.getFocusTarget();
}if(B===t){return;
}}}var x=p.getCurrentTarget();
var z=qx.ui.core.Widget.getWidgetByElement(x);

if(!z||z.isAnonymous()){return;
}if(this.__focusEvents[p.getType()]){z=z.getFocusTarget();
}var A=p.getType();

if(!z||!(z.isEnabled()||this.__ignoreDisabled[A])){return;
}var q=p.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var w=this.__manager.getListeners(z,A,q);

if(!w||w.length===0){return;
}var r=qx.event.Pool.getInstance().getObject(p.constructor);
p.clone(r);
r.setTarget(t);
r.setRelatedTarget(B||null);
r.setCurrentTarget(z);
var D=p.getOriginalTarget();

if(D){var s=qx.ui.core.Widget.getWidgetByElement(D);

while(s&&s.isAnonymous()){s=s.getLayoutParent();
}r.setOriginalTarget(s);
}else{r.setOriginalTarget(u);
}for(var i=0,l=w.length;i<l;i++){var y=w[i].context||z;
w[i].handler.call(y,r);
}if(r.getPropagationStopped()){p.stopPropagation();
}
if(r.getDefaultPrevented()){p.preventDefault();
}qx.event.Pool.getInstance().poolObject(r);
},registerEvent:function(E,F,G){var H;

if(F===e||F===f){H=E.getFocusElement();
}else if(F===c||F===d){H=E.getContentElement();
}else{H=E.getContainerElement();
}
if(H){H.addListener(F,this._dispatchEvent,this,G);
}},unregisterEvent:function(j,k,m){var n;

if(k===e||k===f){n=j.getFocusElement();
}else if(k===c||k===d){n=j.getContentElement();
}else{n=j.getContainerElement();
}
if(n){n.removeListener(k,this._dispatchEvent,this,m);
}}},destruct:function(){this.__manager=null;
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__init:function(){var e=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__init();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__txt=u;
this.length=u.length;
},members:{$$isString:true,length:0,__txt:null,toString:function(){return this.__txt;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){{};
var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__messageId=c;
this.__args=d;
},members:{__messageId:null,__args:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__messageId,this.__args);
}}});
})();
(function(){var l="_",k="",j="qx.dynlocale",h="on",g="_applyLocale",f="changeLocale",e="C",d="qx.locale.Manager",c="String",b="singleton";
qx.Class.define(d,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__translations=qx.$$translations||{};
this.__locales=qx.$$locales||{};
var o=qx.bom.client.Locale;
var m=o.LOCALE;
var n=o.VARIANT;

if(n!==k){m+=l+n;
}this.setLocale(m||this.__defaultLocale);
},statics:{tr:function(O,P){var Q=qx.lang.Array.fromArguments(arguments);
Q.splice(0,1);
return qx.locale.Manager.getInstance().translate(O,Q);
},trn:function(J,K,L,M){var N=qx.lang.Array.fromArguments(arguments);
N.splice(0,3);
if(L!=1){return qx.locale.Manager.getInstance().translate(K,N);
}else{return qx.locale.Manager.getInstance().translate(J,N);
}},trc:function(ba,bb,bc){var bd=qx.lang.Array.fromArguments(arguments);
bd.splice(0,2);
return qx.locale.Manager.getInstance().translate(bb,bd);
},marktr:function(a){return a;
}},properties:{locale:{check:c,nullable:true,apply:g,event:f}},members:{__defaultLocale:e,__locale:null,__language:null,__translations:null,__locales:null,getLanguage:function(){return this.__language;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(){var A=[];

for(var z in this.__locales){if(z!=this.__defaultLocale){A.push(z);
}}return A;
},__extractLanguage:function(be){var bg;
var bf=be.indexOf(l);

if(bf==-1){bg=be;
}else{bg=be.substring(0,bf);
}return bg;
},_applyLocale:function(p,q){this.__locale=p;
this.__language=this.__extractLanguage(p);
},addTranslation:function(B,C){var D=this.__translations;

if(D[B]){for(var E in C){D[B][E]=C[E];
}}else{D[B]=C;
}},addLocale:function(F,G){var H=this.__locales;

if(H[F]){for(var I in G){H[F][I]=G[I];
}}else{H[F]=G;
}},translate:function(r,s,t){var y;
var w=this.__translations;

if(!w){return r;
}
if(t){var v=this.__extractLanguage(t);
}else{t=this.__locale;
v=this.__language;
}
if(!y&&w[t]){y=w[t][r];
}
if(!y&&w[v]){y=w[v][r];
}
if(!y&&w[this.__defaultLocale]){y=w[this.__defaultLocale][r];
}
if(!y){y=r;
}
if(s.length>0){var u=[];

for(var i=0;i<s.length;i++){var x=s[i];

if(x&&x.translate){u[i]=x.translate();
}else{u[i]=x;
}}y=qx.lang.String.format(y,u);
}
if(qx.core.Variant.isSet(j,h)){y=new qx.locale.LocalizedString(y,r,s);
}return y;
},localize:function(R,S,T){var Y;
var W=this.__locales;

if(!W){return R;
}
if(T){var V=this.__extractLanguage(T);
}else{T=this.__locale;
V=this.__language;
}
if(!Y&&W[T]){Y=W[T][R];
}
if(!Y&&W[V]){Y=W[V][R];
}
if(!Y&&W[this.__defaultLocale]){Y=W[this.__defaultLocale][R];
}
if(!Y){Y=R;
}
if(S.length>0){var U=[];

for(var i=0;i<S.length;i++){var X=S[i];

if(X.translate){U[i]=X.translate();
}else{U[i]=X;
}}Y=qx.lang.String.format(Y,U);
}
if(qx.core.Variant.isSet(j,h)){Y=new qx.locale.LocalizedString(Y,R,S);
}return Y;
}},destruct:function(){this.__translations=this.__locales=null;
}});
})();
(function(){var h="source",g="scale",f="no-repeat",e="mshtml",d="backgroundImage",c="qx.client",b="div",a="qx.html.Image";
qx.Class.define(a,{extend:qx.html.Element,members:{_applyProperty:function(name,o){arguments.callee.base.call(this,name,o);

if(name===h){var s=this.getDomElement();
var p=this.getAllStyles();

if(this.getNodeName()==b&&this.getStyle(d)){p.backgroundPosition=null;
p.backgroundRepeat=null;
}var q=this._getProperty(h);
var r=this._getProperty(g);
var t=r?g:f;
qx.bom.element.Decoration.update(s,q,t,p);
}},_createDomElement:function(){var j=this._getProperty(g);
var k=j?g:f;

if(qx.core.Variant.isSet(c,e)){var i=this._getProperty(h);
this.setNodeName(qx.bom.element.Decoration.getTagName(k,i));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(k));
}return arguments.callee.base.call(this);
},_copyData:function(m){return arguments.callee.base.call(this,true);
},setSource:function(l){this._setProperty(h,l);
return this;
},getSource:function(){return this._getProperty(h);
},resetSource:function(){this._removeProperty(h);
return this;
},setScale:function(n){this._setProperty(g,n);
return this;
},getScale:function(){return this._getProperty(g);
}}});
})();
(function(){var w="nonScaled",v="scaled",u="alphaScaled",t=".png",s="replacement",r="hidden",q="div",p="Boolean",o="_applyScale",n="px",h="_applySource",m="-disabled.$1",k="img",g="changeSource",f="qx.client",j="__contentElements",i="String",l="image",e="qx.ui.basic.Image";
qx.Class.define(e,{extend:qx.ui.core.Widget,construct:function(bd){this.__contentElements={};
arguments.callee.base.call(this);

if(bd){this.setSource(bd);
}},properties:{source:{check:i,init:null,nullable:true,event:g,apply:h,themeable:true},scale:{check:p,init:false,themeable:true,apply:o},appearance:{refine:true,init:l},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__width:null,__height:null,__mode:null,__contentElements:null,getContentElement:function(){return this.__getSuitableContentElement();
},_createContentElement:function(){return this.__getSuitableContentElement();
},_getContentHint:function(){return {width:this.__width||0,height:this.__height||0};
},_applyEnabled:function(L,M){arguments.callee.base.call(this,L,M);

if(this.getSource()){this._styleSource();
}},_applySource:function(C){this._styleSource();
},_applyScale:function(a){this._styleSource();
},__setMode:function(b){this.__mode=b;
},__getMode:function(){if(this.__mode==null){var E=this.getSource();
var D=false;

if(E!=null){D=qx.lang.String.endsWith(E,t);
}
if(this.getScale()&&D&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__mode=u;
}else if(this.getScale()){this.__mode=v;
}else{this.__mode=w;
}}return this.__mode;
},__createSuitableContentElement:function(bf){var bg;
var bh;

if(bf==u){bg=true;
bh=q;
}else if(bf==w){bg=false;
bh=q;
}else{bg=true;
bh=k;
}var bi=new qx.html.Image(bh);
bi.setScale(bg);
bi.setStyles({"overflowX":r,"overflowY":r});
return bi;
},__getSuitableContentElement:function(){var be=this.__getMode();

if(this.__contentElements[be]==null){this.__contentElements[be]=this.__createSuitableContentElement(be);
}return this.__contentElements[be];
},_styleSource:function(){var N=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!N){this.getContentElement().resetSource();
return;
}this.__checkForContentElementSwitch(N);
if(qx.util.ResourceManager.getInstance().has(N)){this.__setManagedImage(this.getContentElement(),N);
}else if(qx.io.ImageLoader.isLoaded(N)){this.__setUnmanagedImage(this.getContentElement(),N);
}else{this.__loadUnmanagedImage(this.getContentElement(),N);
}},__checkForContentElementSwitch:qx.core.Variant.select(f,{"mshtml":function(I){var K=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var J=qx.lang.String.endsWith(I,t);

if(K&&J){if(this.getScale()&&this.__getMode()!=u){this.__setMode(u);
}else if(!this.getScale()&&this.__getMode()!=w){this.__setMode(w);
}}else{if(this.getScale()&&this.__getMode()!=v){this.__setMode(v);
}else if(!this.getScale()&&this.__getMode()!=w){this.__setMode(w);
}}this.__checkForContentElementReplacement(this.__getSuitableContentElement());
},"default":function(U){if(this.getScale()&&this.__getMode()!=v){this.__setMode(v);
}else if(!this.getScale()&&this.__getMode(w)){this.__setMode(w);
}this.__checkForContentElementReplacement(this.__getSuitableContentElement());
}}),__checkForContentElementReplacement:function(V){var Y=this.getContainerElement();
var ba=Y.getChild(0);

if(ba!=V){if(ba!=null){var bc=n;
var W={};
var X=this.getInnerSize();

if(X!=null){W.width=X.width+bc;
W.height=X.height+bc;
}var bb=this.getInsets();
W.left=bb.left+bc;
W.top=bb.top+bc;
W.zIndex=10;
V.setStyles(W,true);
V.setSelectable(this.getSelectable());
}Y.removeAt(0);
Y.addAt(V,0);
}},__setManagedImage:function(O,P){var R=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var Q=P.replace(/\.([a-z]+)$/,m);

if(R.has(Q)){P=Q;
this.addState(s);
}else{this.removeState(s);
}}if(O.getSource()===P){return;
}O.setSource(P);
this.__updateContentHint(R.getImageWidth(P),R.getImageHeight(P));
},__setUnmanagedImage:function(x,y){var A=qx.io.ImageLoader;
x.setSource(y);
var z=A.getWidth(y);
var B=A.getHeight(y);
this.__updateContentHint(z,B);
},__loadUnmanagedImage:function(F,G){var self;
var H=qx.io.ImageLoader;
{};
if(!H.isFailed(G)){H.load(G,this.__loaderCallback,this);
}else{if(F!=null){F.resetSource();
}}},__loaderCallback:function(S,T){if(S!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(T.failed){this.warn("Image could not be loaded: "+S);
}this._styleSource();
},__updateContentHint:function(c,d){if(c!==this.__width||d!==this.__height){this.__width=c;
this.__height=d;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(j);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){arguments.callee.base.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var j=this.getApplicationRoot();
j.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(h,i){if(i){this.removeState(i);
}
if(h){this.addState(h);
}}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){arguments.callee.base.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__timer=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__timer:null,_applyTimeoutInterval:function(h){this.__timer.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__timer){this.__timer.stop();
}this.__timer=null;
}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b="direct",a='__defaultAxis';
qx.Class.define(e,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__defaultAxis=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__instance:null,compute:function(z,A,B,C,D,E,F){this.__instance=this.__instance||new qx.util.placement.Placement();
var I=D.split(f);
var H=I[0];
var G=I[1];
this.__instance.set({axisX:this.__getAxis(E),axisY:this.__getAxis(F),edge:H,align:G});
return this.__instance.compute(z,A,B,C);
},__direct:null,__keepAlign:null,__bestFit:null,__getAxis:function(p){switch(p){case b:this.__direct=this.__direct||new qx.util.placement.DirectAxis();
return this.__direct;
case d:this.__keepAlign=this.__keepAlign||new qx.util.placement.KeepAlignAxis();
return this.__keepAlign;
case c:this.__bestFit=this.__bestFit||new qx.util.placement.BestFitAxis();
return this.__bestFit;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__defaultAxis:null,compute:function(q,r,s,t){{};
var u=this.getAxisX()||this.__defaultAxis;
var w=u.computeStart(q.width,{start:s.left,end:s.right},{start:t.left,end:t.right},r.width,this.__getPositionX());
var v=this.getAxisY()||this.__defaultAxis;
var top=v.computeStart(q.height,{start:s.top,end:s.bottom},{start:t.top,end:t.bottom},r.height,this.__getPositionY());
return {left:w,top:top};
},__getPositionX:function(){var y=this.getEdge();
var x=this.getAlign();

if(y==l){return i;
}else if(y==n){return g;
}else if(x==l){return k;
}else if(x==n){return h;
}},__getPositionY:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(n,o,p,q){switch(q){case e:return o.start-p.end-n;
case b:return o.end+p.start;
case d:return o.start+p.start;
case c:return o.end-p.end-n;
}},_isInRange:function(k,l,m){return k>=0&&k+l<=m;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var f="mousedown",d="__objects",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__objects={};
qx.event.Registration.addListener(document.documentElement,f,this.__onMouseDown,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__objects:null,add:function(g){{};
this.__objects[g.$$hash]=g;
this.__updateIndexes();
},remove:function(h){{};
var i=this.__objects;

if(i){delete i[h.$$hash];
this.__updateIndexes();
}},hideAll:function(){var r=this.__objects;

if(r){for(var q in r){r[q].exclude();
}}},__updateIndexes:function(){var p=1e7;
var o=this.__objects;

for(var n in o){o[n].setZIndex(p++);
}},__onMouseDown:function(e){var l=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var m=this.__objects;

for(var k in m){var j=m[k];

if(!j.getAutoHide()||l==j||qx.ui.core.Widget.contains(j,l)){continue;
}j.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__onMouseDown,this,true);
this._disposeMap(d);
}});
})();
(function(){var d="abstract",c="qx.ui.layout.Abstract";
qx.Class.define(c,{type:d,extend:qx.core.Object,members:{__sizeHint:null,_invalidChildrenCache:null,__widget:null,invalidateLayoutCache:function(){this.__sizeHint=null;
},renderLayout:function(a,b){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__sizeHint){return this.__sizeHint;
}return this.__sizeHint=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var f=this.__widget;

if(f instanceof qx.ui.core.LayoutItem){f.clearSeparators();
}},_renderSeparator:function(g,h){this.__widget.renderSeparator(g,h);
},connectToWidget:function(i){if(i&&this.__widget){throw new Error("It is not possible to manually set the connected widget.");
}this.__widget=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__widget;
},_applyLayoutChange:function(){if(this.__widget){this.__widget.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__widget.getLayoutChildren();
}},destruct:function(){this.__widget=this.__sizeHint=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(m,n){var r=this._getLayoutChildren();
var q,s,p,o;
for(var i=0,l=r.length;i<l;i++){q=r[i];
s=q.getSizeHint();
p=m;

if(p<s.minWidth){p=s.minWidth;
}else if(p>s.maxWidth){p=s.maxWidth;
}o=n;

if(o<s.minHeight){o=s.minHeight;
}else if(o>s.maxHeight){o=s.maxHeight;
}q.renderLayout(0,0,p,o);
}},_computeSizeHint:function(){var h=this._getLayoutChildren();
var f,k;
var j=0,g=0;
var e=0,c=0;
var b=Infinity,d=Infinity;
for(var i=0,l=h.length;i<l;i++){f=h[i];
k=f.getSizeHint();
j=Math.max(j,k.width);
g=Math.max(g,k.height);
e=Math.max(e,k.minWidth);
c=Math.max(c,k.minHeight);
b=Math.min(b,k.maxWidth);
d=Math.min(d,k.maxHeight);
}return {width:j,height:g,minWidth:e,minHeight:c,maxWidth:b,maxHeight:d};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",w="changeIcon",v="qx.ui.basic.Atom",u="changeLabel",t="Integer",s="_applyIconPosition",r="top",q="right",p="_applyRich",o="_applyIcon",n="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(M,N){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(M!=null){this.setLabel(M);
}
if(N!=null){this.setIcon(N);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:u},rich:{check:h,init:false,apply:p},icon:{check:f,apply:o,nullable:true,themeable:true,event:w},gap:{check:t,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[r,q,b,e],themeable:true,apply:s},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(O){var P;

switch(O){case j:P=new qx.ui.basic.Label(this.getLabel());
P.setAnonymous(true);
P.setRich(this.getRich());
this._add(P);

if(this.getLabel()==null||this.getShow()===i){P.exclude();
}break;
case i:P=new qx.ui.basic.Image(this.getIcon());
P.setAnonymous(true);
this._addAt(P,0);

if(this.getIcon()==null||this.getShow()===j){P.exclude();
}break;
}return P||arguments.callee.base.call(this,O);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(x,y){var z=this.getChildControl(j,true);

if(z){z.setValue(x);
}this._handleLabel();
},_applyRich:function(A,B){var C=this.getChildControl(j,true);

if(C){C.setRich(A);
}},_applyIcon:function(J,K){var L=this.getChildControl(i,true);

if(L){L.setSource(J);
}this._handleIcon();
},_applyGap:function(F,G){this._getLayout().setGap(F);
},_applyShow:function(Q,R){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(H,I){this._getLayout().setIconPosition(H);
},_applyCenter:function(D,E){this._getLayout().setCenter(D);
}}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(l,m){var v=qx.ui.layout.Util;
var o=this.getIconPosition();
var r=this._getLayoutChildren();
var length=r.length;
var F,top,E,p;
var A,u;
var y=this.getGap();
var D=this.getCenter();
if(o===k||o===f){var w=length-1;
var s=-1;
var q=-1;
}else{var w=0;
var s=length;
var q=1;
}if(o==h||o==k){if(D){var z=0;

for(var i=w;i!=s;i+=q){p=r[i].getSizeHint().height;

if(p>0){z+=p;

if(i!=w){z+=y;
}}}top=Math.round((m-z)/2);
}else{top=0;
}
for(var i=w;i!=s;i+=q){A=r[i];
u=A.getSizeHint();
E=Math.min(u.maxWidth,Math.max(l,u.minWidth));
p=u.height;
F=v.computeHorizontalAlignOffset(d,E,l);
A.renderLayout(F,top,E,p);
if(p>0){top+=p+y;
}}}else{var t=l;
var n=null;
var C=0;

for(var i=w;i!=s;i+=q){A=r[i];
E=A.getSizeHint().width;

if(E>0){if(!n&&A instanceof qx.ui.basic.Label){n=A;
}else{t-=E;
}C++;
}}
if(C>1){var B=(C-1)*y;
t-=B;
}
if(n){var u=n.getSizeHint();
var x=Math.max(u.minWidth,Math.min(t,u.maxWidth));
t-=x;
}
if(D&&t>0){F=Math.round(t/2);
}else{F=0;
}
for(var i=w;i!=s;i+=q){A=r[i];
u=A.getSizeHint();
p=Math.min(u.maxHeight,Math.max(m,u.minHeight));

if(A===n){E=x;
}else{E=u.width;
}top=v.computeVerticalAlignOffset(e,u.height,m);
A.renderLayout(F,top,E,p);
if(E>0){F+=E+y;
}}}},_computeSizeHint:function(){var Q=this._getLayoutChildren();
var length=Q.length;
var I,O;
if(length===1){var I=Q[0].getSizeHint();
O={width:I.width,height:I.height,minWidth:I.minWidth,minHeight:I.minHeight};
}else{var M=0,N=0;
var J=0,L=0;
var K=this.getIconPosition();
var P=this.getGap();

if(K===h||K===k){var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
N=Math.max(N,I.width);
M=Math.max(M,I.minWidth);
if(I.height>0){L+=I.height;
J+=I.minHeight;
G++;
}}
if(G>1){var H=(G-1)*P;
L+=H;
J+=H;
}}else{var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
L=Math.max(L,I.height);
J=Math.max(J,I.minHeight);
if(I.width>0){N+=I.width;
M+=I.minWidth;
G++;
}}
if(G>1){var H=(G-1)*P;
N+=H;
M+=H;
}}O={minWidth:M,width:N,minHeight:J,height:L};
}return O;
}}});
})();
(function(){var q="middle",p="qx.ui.layout.Util",o="left",n="center",m="top",k="bottom",j="right";
qx.Class.define(p,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(r,s,t){var v,z,u,A;
var w=s>t;
var B=Math.abs(s-t);
var C,x;
var y={};

for(z in r){v=r[z];
y[z]={potential:w?v.max-v.value:v.value-v.min,flex:w?v.flex:1/v.flex,offset:0};
}while(B!=0){A=Infinity;
u=0;

for(z in y){v=y[z];

if(v.potential>0){u+=v.flex;
A=Math.min(A,v.potential/v.flex);
}}if(u==0){break;
}A=Math.min(B,A*u)/u;
C=0;

for(z in y){v=y[z];

if(v.potential>0){x=Math.min(B,v.potential,Math.ceil(A*v.flex));
C+=x-A*v.flex;

if(C>=1){C-=1;
x-=1;
}v.potential-=x;

if(w){v.offset+=x;
}else{v.offset-=x;
}B-=x;
}}}return y;
},computeHorizontalAlignOffset:function(D,E,F,G,H){if(G==null){G=0;
}
if(H==null){H=0;
}var I=0;

switch(D){case o:I=G;
break;
case j:I=F-E-H;
break;
case n:I=Math.round((F-E)/2);
if(I<G){I=G;
}else if(I<H){I=Math.max(G,F-E-H);
}break;
}return I;
},computeVerticalAlignOffset:function(ba,bb,bc,bd,be){if(bd==null){bd=0;
}
if(be==null){be=0;
}var bf=0;

switch(ba){case m:bf=bd;
break;
case k:bf=bc-bb-be;
break;
case q:bf=Math.round((bc-bb)/2);
if(bf<bd){bf=bd;
}else if(bf<be){bf=Math.max(bd,bc-bb-be);
}break;
}return bf;
},collapseMargins:function(V){var W=0,Y=0;

for(var i=0,l=arguments.length;i<l;i++){var X=arguments[i];

if(X<0){Y=Math.min(Y,X);
}else if(X>0){W=Math.max(W,X);
}}return W+Y;
},computeHorizontalGaps:function(R,S,T){if(S==null){S=0;
}var U=0;

if(T){U+=R[0].getMarginLeft();

for(var i=1,l=R.length;i<l;i+=1){U+=this.collapseMargins(S,R[i-1].getMarginRight(),R[i].getMarginLeft());
}U+=R[l-1].getMarginRight();
}else{for(var i=1,l=R.length;i<l;i+=1){U+=R[i].getMarginLeft()+R[i].getMarginRight();
}U+=(S*(l-1));
}return U;
},computeVerticalGaps:function(bm,bn,bo){if(bn==null){bn=0;
}var bp=0;

if(bo){bp+=bm[0].getMarginTop();

for(var i=1,l=bm.length;i<l;i+=1){bp+=this.collapseMargins(bn,bm[i-1].getMarginBottom(),bm[i].getMarginTop());
}bp+=bm[l-1].getMarginBottom();
}else{for(var i=1,l=bm.length;i<l;i+=1){bp+=bm[i].getMarginTop()+bm[i].getMarginBottom();
}bp+=(bn*(l-1));
}return bp;
},computeHorizontalSeparatorGaps:function(J,K,L){var O=qx.theme.manager.Decoration.getInstance().resolve(L);
var N=O.getInsets();
var M=N.left+N.right;
var P=0;

for(var i=0,l=J.length;i<l;i++){var Q=J[i];
P+=Q.getMarginLeft()+Q.getMarginRight();
}P+=(K+M+K)*(l-1);
return P;
},computeVerticalSeparatorGaps:function(a,b,c){var f=qx.theme.manager.Decoration.getInstance().resolve(c);
var e=f.getInsets();
var d=e.top+e.bottom;
var g=0;

for(var i=0,l=a.length;i<l;i++){var h=a[i];
g+=h.getMarginTop()+h.getMarginBottom();
}g+=(b+d+b)*(l-1);
return g;
},arrangeIdeals:function(bg,bh,bi,bj,bk,bl){if(bh<bg||bk<bj){if(bh<bg&&bk<bj){bh=bg;
bk=bj;
}else if(bh<bg){bk-=(bg-bh);
bh=bg;
if(bk<bj){bk=bj;
}}else if(bk<bj){bh-=(bj-bk);
bk=bj;
if(bh<bg){bh=bg;
}}}
if(bh>bi||bk>bl){if(bh>bi&&bk>bl){bh=bi;
bk=bl;
}else if(bh>bi){bk+=(bh-bi);
bh=bi;
if(bk>bl){bk=bl;
}}else if(bk>bl){bh+=(bk-bl);
bk=bl;
if(bh>bi){bh=bi;
}}}return {begin:bh,end:bk};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var m="qx.dynlocale",l="text",k="Boolean",j="qx.client",i="color",h="userSelect",g="changeLocale",f="enabled",d="none",c="on",H="_applyTextAlign",G="qx.ui.core.Widget",F="gecko",E="changeTextAlign",D="_applyWrap",C="changeValue",B="changeContent",A="qx.ui.basic.Label",z="A",y="_applyValue",t="center",u="_applyBuddy",r="String",s="textAlign",p="right",q="changeRich",n="_applyRich",o="click",v="label",w="webkit",x="left";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(V){arguments.callee.base.call(this);

if(V!=null){this.setValue(V);
}
if(qx.core.Variant.isSet(m,c)){qx.locale.Manager.getInstance().addListener(g,this._onChangeLocale,this);
}},properties:{rich:{check:k,init:false,event:q,apply:n},wrap:{check:k,init:true,apply:D},value:{check:r,apply:y,event:C,nullable:true},buddy:{check:G,apply:u,nullable:true,init:null},textAlign:{check:[x,t,p],nullable:true,themeable:true,apply:H,event:E},appearance:{refine:true,init:v},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__font:null,__invalidContentSize:null,__buddyEnabledBinding:null,__clickListenerId:null,_getContentHint:function(){if(this.__invalidContentSize){this.__contentSize=this.__computeContentSize();
delete this.__invalidContentSize;
}return {width:this.__contentSize.width,height:this.__contentSize.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(M){if(qx.core.Variant.isSet(j,F)){if(M&&!this.isRich()){{};
return;
}}arguments.callee.base.call(this,M);
if(qx.core.Variant.isSet(j,w)){this.getContainerElement().setStyle(h,M?l:d);
this.getContentElement().setStyle(h,M?l:d);
}},_getContentHeightForWidth:function(K){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__computeContentSize(K).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(bc,bd){this.getContentElement().setStyle(s,bc);
},_applyTextColor:function(ba,bb){if(ba){this.getContentElement().setStyle(i,qx.theme.manager.Color.getInstance().resolve(ba));
}else{this.getContentElement().removeStyle(i);
}},__contentSize:{width:0,height:0},_applyFont:function(W,X){var Y;

if(W){this.__font=qx.theme.manager.Font.getInstance().resolve(W);
Y=this.__font.getStyles();
}else{this.__font=null;
Y=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(Y);
this.__invalidContentSize=true;
qx.ui.core.queue.Layout.add(this);
},__computeContentSize:function(Q){var U=qx.bom.Label;
var S=this.getFont();
var R=S?this.__font.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||z;
var T=this.getRich();
return T?U.getHtmlSize(content,R,Q):U.getTextSize(content,R);
},_applyBuddy:function(O,P){if(P!=null){P.removeBinding(this.__buddyEnabledBinding);
this.__buddyEnabledBinding=null;
this.removeListenerById(this.__clickListenerId);
this.__clickListenerId=null;
}
if(O!=null){this.__buddyEnabledBinding=O.bind(f,this,f);
this.__clickListenerId=this.addListener(o,O.focus,O);
}},_applyRich:function(L){this.getContentElement().setRich(L);
this.__invalidContentSize=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(a,b){if(a&&!this.isRich()){{};
}},_onChangeLocale:qx.core.Variant.select(m,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(I,J){this.getContentElement().setValue(I);
this.__invalidContentSize=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(B,I,J);
}},destruct:function(){if(qx.core.Variant.isSet(m,c)){qx.locale.Manager.getInstance().removeListener(g,this._onChangeLocale,this);
}if(this.__buddyEnabledBinding!=null){var N=this.getBuddy();

if(N!=null&&!N.isDisposed()){N.removeBinding(this.__buddyEnabledBinding);
}}this.__font=this.__buddyEnabledBinding=null;
}});
})();
(function(){var d="value",c="Please use the getValue() method instead.",b="qx.html.Label",a="Please use the setValue() method instead.";
qx.Class.define(b,{extend:qx.html.Element,members:{__rich:null,_applyProperty:function(name,h){arguments.callee.base.call(this,name,h);

if(name==d){var i=this.getDomElement();
qx.bom.Label.setValue(i,h);
}},_createDomElement:function(){var m=this.__rich;
var l=qx.bom.Label.create(this._content,m);
return l;
},_copyData:function(j){return arguments.callee.base.call(this,true);
},setRich:function(e){var f=this.getDomElement();

if(f){throw new Error("The label mode cannot be modified after initial creation");
}e=!!e;

if(this.__rich==e){return;
}this.__rich=e;
return this;
},setValue:function(g){this._setProperty(d,g);
return this;
},getValue:function(){return this._getProperty(d);
},setContent:function(k){qx.log.Logger.deprecatedMethodWarning(arguments.callee,a);
return this.setValue(k);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
return this.getValue();
}}});
})();
(function(){var j="qx.client",i="gecko",h="div",g="inherit",f="text",e="value",d="",c="hidden",b="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",a="nowrap",A="auto",z="ellipsis",y="normal",x="label",w="px",v="crop",u="end",t="100%",s="visible",r="qx.bom.Label",p="Please use the setValue() method instead.",q="opera",n="Please use the getValue() method instead.",o="block",l="none",m="-1000px",k="absolute";
qx.Class.define(r,{statics:{__styles:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__prepareText:function(){var Y=this.__createMeasureElement(false);
document.body.insertBefore(Y,document.body.firstChild);
return this._textElement=Y;
},__prepareHtml:function(){var X=this.__createMeasureElement(true);
document.body.insertBefore(X,document.body.firstChild);
return this._htmlElement=X;
},__createMeasureElement:function(bc){var bd=qx.bom.Element.create(h);
var be=bd.style;
be.width=be.height=A;
be.left=be.top=m;
be.visibility=c;
be.position=k;
be.overflow=s;

if(bc){be.whiteSpace=y;
}else{be.whiteSpace=a;

if(qx.core.Variant.isSet(j,i)){var bf=document.createElementNS(b,x);
for(var bg in this.__styles){bf.style[bg]=g;
}bd.appendChild(bf);
}}return bd;
},__getStyles:function(H){var I={};

if(H){I.whiteSpace=y;
}else if(qx.core.Variant.isSet(j,i)){I.display=o;
}else{I.overflow=c;
I.whiteSpace=a;
I.textOverflow=z;
I.userSelect=l;
if(qx.core.Variant.isSet(j,q)){I.OTextOverflow=z;
}}return I;
},create:function(content,S,T){if(!T){T=window;
}
if(S){var U=T.document.createElement(h);
U.useHtml=true;
}else if(qx.core.Variant.isSet(j,i)){var U=T.document.createElement(h);
var V=T.document.createElementNS(b,x);
V.style.cursor=g;
V.style.color=g;
V.style.overflow=c;
V.style.maxWidth=t;
for(var W in this.__styles){V.style[W]=g;
}V.setAttribute(v,u);
U.appendChild(V);
}else{var U=T.document.createElement(h);
qx.bom.element.Style.setStyles(U,this.__getStyles(S));
}
if(content){this.setValue(U,content);
}return U;
},setValue:function(ba,bb){bb=bb||d;

if(ba.useHtml){ba.innerHTML=bb;
}else if(qx.core.Variant.isSet(j,i)){ba.firstChild.setAttribute(e,bb);
}else{qx.bom.element.Attribute.set(ba,f,bb);
}},getValue:function(J){if(J.useHtml){return J.innerHTML;
}else if(qx.core.Variant.isSet(j,i)){return J.firstChild.getAttribute(e)||d;
}else{return qx.bom.element.Attribute.get(J,f);
}},getHtmlSize:function(content,K,L){var M=this._htmlElement||this.__prepareHtml();
M.style.width=L!==undefined?L+w:A;
M.innerHTML=content;
return this.__measureSize(M,K);
},getTextSize:function(E,F){var G=this._textElement||this.__prepareText();

if(qx.core.Variant.isSet(j,i)){G.firstChild.setAttribute(e,E);
}else{qx.bom.element.Attribute.set(G,f,E);
}return this.__measureSize(G,F);
},__measureSize:function(N,O){var P=this.__styles;

if(!O){O={};
}
for(var Q in P){N.style[Q]=O[Q]||d;
}var R=qx.bom.element.Dimension.getSize(N);

if(qx.core.Variant.isSet(j,i)){if(!qx.bom.client.Platform.WIN){R.width++;
}}return R;
},setContent:function(C,D){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
this.setValue(C,D);
},getContent:function(B){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
return this.getValue(B);
}}});
})();
(function(){var g="mshtml",f="qx.client",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingTop",a="paddingBottom";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"gecko":function(B){if(B.getBoundingClientRect){var C=B.getBoundingClientRect();
return Math.round(C.right)-Math.round(C.left);
}else{return B.offsetWidth;
}},"default":function(y){return y.offsetWidth;
}}),getHeight:qx.core.Variant.select(f,{"gecko":function(z){if(z.getBoundingClientRect){var A=z.getBoundingClientRect();
return Math.round(A.bottom)-Math.round(A.top);
}else{return z.offsetHeight;
}},"default":function(h){return h.offsetHeight;
}}),getSize:function(q){return {width:this.getWidth(q),height:this.getHeight(q)};
},__hiddenScrollbars:{visible:true,hidden:true},getContentWidth:function(j){var l=qx.bom.element.Style;
var m=qx.bom.element.Overflow.getX(j);
var n=parseInt(l.get(j,c),10);
var p=parseInt(l.get(j,d),10);

if(this.__hiddenScrollbars[m]){return j.clientWidth-n-p;
}else{if(j.clientWidth>=j.scrollWidth){return Math.max(j.clientWidth,j.scrollWidth)-n-p;
}else{var o=j.scrollWidth-n;
var k=qx.bom.client.Engine;

if(k.NAME===g&&k.VERSION==6){o-=p;
}return o;
}}},getContentHeight:function(r){var t=qx.bom.element.Style;
var v=qx.bom.element.Overflow.getY(r);
var w=parseInt(t.get(r,b),10);
var u=parseInt(t.get(r,a),10);

if(this.__hiddenScrollbars[v]){return r.clientHeight-w-u;
}else{if(r.clientHeight>=r.scrollHeight){return Math.max(r.clientHeight,r.scrollHeight)-w-u;
}else{var x=r.scrollHeight-w;
var s=qx.bom.client.Engine;

if(s.NAME===g&&s.VERSION==6){x-=u;
}return x;
}}},getContentSize:function(i){return {width:this.getContentWidth(i),height:this.getContentHeight(i)};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(c){return arguments.length==1;
},getRequired:function(){},setValid:function(f){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(e){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var h="Use 'getBlocker().getContentBlockerElement()' instead.",g="Use 'getBlocker().getBlockerElement()' instead.",f="_applyBlockerColor",e="Number",d="__blocker",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__blocker=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__blocker:null,_applyBlockerColor:function(l,m){this.__blocker.setColor(l);
},_applyBlockerOpacity:function(j,k){this.__blocker.setOpacity(j);
},block:function(){this.__blocker.block();
},isBlocked:function(){return this.__blocker.isBlocked();
},unblock:function(){this.__blocker.unblock();
},forceUnblock:function(){this.__blocker.forceUnblock();
},blockContent:function(i){this.__blocker.blockContent(i);
},isContentBlocked:function(){return this.__blocker.isContentBlocked();
},unblockContent:function(){this.__blocker.unblockContent();
},forceUnblockContent:function(){this.__blocker.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.__blocker.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.__blocker.getBlockerElement();
},getBlocker:function(){return this.__blocker;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__windows",b="qx.ui.window.MDesktop",a="__manager";
qx.Mixin.define(b,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__windows:null,__manager:null,getWindowManager:function(){if(!this.__manager){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__manager;
},supportsMaximize:function(){return true;
},setWindowManager:function(o){if(this.__manager){this.__manager.setDesktop(null);
}o.setDesktop(this);
this.__manager=o;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(j,k){this.getWindowManager().changeActiveWindow(j,k);

if(j){j.setActive(true);
}
if(k){k.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(n){if(qx.Class.isDefined(i)&&n instanceof qx.ui.window.Window){this._addWindow(n);
}},_addWindow:function(p){if(!qx.lang.Array.contains(this.getWindows(),p)){this.getWindows().push(p);
p.addListener(f,this._onChangeActive,this);
p.addListener(h,this._onChangeModal,this);
p.addListener(g,this._onChangeVisibility,this);
}
if(p.getActive()){this.setActiveWindow(p);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(m){if(qx.Class.isDefined(i)&&m instanceof qx.ui.window.Window){this._removeWindow(m);
}},_removeWindow:function(l){qx.lang.Array.remove(this.getWindows(),l);
l.removeListener(f,this._onChangeActive,this);
l.removeListener(h,this._onChangeModal,this);
l.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__windows){this.__windows=[];
}return this.__windows;
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(a);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__globalCursorStyleSheet:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(u,v){},"default":function(q,r){var s=qx.bom.Stylesheet;
var t=this.__globalCursorStyleSheet;

if(!t){this.__globalCursorStyleSheet=t=s.createElement();
}s.removeAllRules(t);

if(q){s.addRule(t,a,qx.bom.element.Cursor.compile(q).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(w,x){if(w){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(y,z){if(z===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(y===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__globalCursorStyleSheet=null;
},defer:function(A,B){qx.ui.core.MChildrenHandling.remap(B);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(o){this.__window=qx.dom.Node.getWindow(o);
this.__doc=o;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__window,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__window:null,__doc:null,_createContainerElement:function(){var w=this.__doc;

if(qx.core.Variant.isSet(f,k)){if(!w.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var A=w.documentElement.style;
var x=w.body.style;
A.overflow=x.overflow=g;
A.padding=A.margin=x.padding=x.margin=l;
A.width=A.height=x.width=x.height=c;
var z=w.createElement(d);
w.body.appendChild(z);
var y=new qx.html.Root(z);
y.setStyle(m,b);
y.setAttribute(i,this.toHashCode());
return y;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var p=qx.bom.Viewport.getWidth(this.__window);
var q=qx.bom.Viewport.getHeight(this.__window);
return {minWidth:p,width:p,maxWidth:p,minHeight:q,height:q,maxHeight:q};
},_applyPadding:function(u,v,name){if(u&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,u,v,name);
},_applyDecorator:function(r,s){arguments.callee.base.call(this,r,s);

if(!r){return;
}var t=this.getDecoratorElement().getInsets();

if(t.left||t.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__window=this.__doc=null;
}});
})();
(function(){var D="zIndex",C="px",B="keydown",A="deactivate",z="This method is not needed anymore.",y="resize",x="keyup",w="keypress",v="backgroundColor",u="_applyOpacity",Q="__timer",P="__contentBlocker",O="Use 'getBlockerElement' instead.",N="__blocker",M="opacity",L="interval",K="Tab",J="Color",I="qx.ui.root.Page",H="Use 'getContentBlockerElement' instead.",F="Number",G="qx.ui.core.Blocker",E="_applyColor";
qx.Class.define(G,{extend:qx.core.Object,construct:function(q){arguments.callee.base.call(this);
this._widget=q;
this._isPageRoot=(qx.Class.isDefined(I)&&q instanceof qx.ui.root.Page);

if(this._isPageRoot){q.addListener(y,this.__onResize,this);
}this.__activeElements=[];
this.__focusElements=[];
this.__contentBlockerCount=[];
},properties:{color:{check:J,init:null,nullable:true,apply:E,themeable:true},opacity:{check:F,init:1,apply:u,themeable:true}},members:{__blocker:null,__blockerCount:0,__contentBlocker:null,__contentBlockerCount:null,__activeElements:null,__focusElements:null,__oldAnonymous:null,__anonymousCounter:0,__timer:null,_isPageRoot:false,_widget:null,__onResize:function(e){var d=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:d.width,height:d.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:d.width,height:d.height});
}},_applyColor:function(r,s){var t=qx.theme.manager.Color.getInstance().resolve(r);
this.__setBlockersStyle(v,t);
},_applyOpacity:function(U,V){this.__setBlockersStyle(M,U);
},__setBlockersStyle:function(h,j){var k=[];
this.__blocker&&k.push(this.__blocker);
this.__contentBlocker&&k.push(this.__contentBlocker);

for(var i=0;i<k.length;i++){k[i].setStyle(h,j);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
this.__anonymousCounter+=1;

if(this.__anonymousCounter==1){this.__oldAnonymous=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
this.__anonymousCounter-=1;

if(this.__anonymousCounter==0){this._widget.setAnonymous(this.__oldAnonymous);
}},_backupActiveWidget:function(){var a=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__activeElements.push(a.getActive());
this.__focusElements.push(a.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var p=this.__activeElements.length;

if(p>0){var o=this.__activeElements[p-1];

if(o){qx.bom.Element.activate(o);
}this.__activeElements.pop();
}var n=this.__focusElements.length;

if(n>0){var o=this.__focusElements[n-1];

if(o){qx.bom.Element.focus(this.__focusElements[n-1]);
}this.__focusElements.pop();
}},__createBlockerElement:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,O);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__blocker){this.__blocker=this.__createBlockerElement();
this.__blocker.setStyle(D,15);
this._widget.getContainerElement().add(this.__blocker);
this.__blocker.exclude();
}return this.__blocker;
},block:function(){this.__blockerCount++;

if(this.__blockerCount<2){this._backupActiveWidget();
var R=this.getBlockerElement();
R.include();
R.activate();
R.addListener(A,this.__activateBlockerElement,this);
R.addListener(w,this.__stopTabEvent,this);
R.addListener(B,this.__stopTabEvent,this);
R.addListener(x,this.__stopTabEvent,this);
}},isBlocked:function(){return this.__blockerCount>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__blockerCount--;

if(this.__blockerCount<1){this.__unblock();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__blockerCount=0;
this.__unblock();
},__unblock:function(){this._restoreActiveWidget();
var m=this.getBlockerElement();
m.removeListener(A,this.__activateBlockerElement,this);
m.removeListener(w,this.__stopTabEvent,this);
m.removeListener(B,this.__stopTabEvent,this);
m.removeListener(x,this.__stopTabEvent,this);
m.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,H);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__contentBlocker){this.__contentBlocker=this.__createBlockerElement();
this._widget.getContentElement().add(this.__contentBlocker);
this.__contentBlocker.exclude();
}return this.__contentBlocker;
},blockContent:function(f){var g=this.getContentBlockerElement();
g.setStyle(D,f);
this.__contentBlockerCount.push(f);

if(this.__contentBlockerCount.length<2){g.include();

if(this._isPageRoot){if(!this.__timer){this.__timer=new qx.event.Timer(300);
this.__timer.addListener(L,this.__syncBlocker,this);
}this.__timer.start();
this.__syncBlocker();
}}},isContentBlocked:function(){return this.__contentBlockerCount.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__contentBlockerCount.pop();
var S=this.__contentBlockerCount[this.__contentBlockerCount.length-1];
var T=this.getContentBlockerElement();
T.setStyle(D,S);

if(this.__contentBlockerCount.length<1){this.__unblockContent();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__contentBlockerCount=[];
var l=this.getContentBlockerElement();
l.setStyle(D,null);
this.__unblockContent();
},__unblockContent:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__timer.stop();
}},__syncBlocker:function(){var b=this._widget.getContainerElement().getDomElement();
var c=qx.dom.Node.getDocument(b);
this.getContentBlockerElement().setStyles({height:c.documentElement.scrollHeight+C,width:c.documentElement.scrollWidth+C});
},__stopTabEvent:function(e){if(e.getKeyIdentifier()==K){e.stop();
}},__activateBlockerElement:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(y,this.__onResize,this);
}this._disposeObjects(P,N,Q);
this.__oldAnonymous=this.__activeElements=this.__focusElements=this._widget=this.__contentBlockerCount=null;
}});
})();
(function(){var v="cursor",u="100%",t="dblclick",s="mshtml",r="mouseup",q="mousedown",p="disappear",o="appear",n="contextmenu",m="mousewheel",f=")",l="mouseover",i="mouseout",c="qx.html.Blocker",b="click",h="repeat",g="mousemove",j="url(",a="qx.client",k="qx/static/blank.gif",d="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(x,y){arguments.callee.base.call(this);
var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
this.setStyles({position:d,width:u,height:u,opacity:y||0,backgroundColor:x});
this.addListener(q,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(g,this._stopPropagation,this);
this.addListener(l,this._stopPropagation,this);
this.addListener(i,this._stopPropagation,this);
this.addListener(m,this._stopPropagation,this);
this.addListener(n,this._stopPropagation,this);
if(qx.core.Variant.isSet(a,s)){this.setStyles({backgroundImage:j+qx.util.ResourceManager.getInstance().toUri(k)+f,backgroundRepeat:h});
}this.addListener(o,this.__refreshCursor,this);
this.addListener(p,this.__refreshCursor,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__refreshCursor:function(){var w=this.getStyle(v);
this.setStyle(v,null,true);
this.setStyle(v,w,true);
}}});
})();
(function(){var bi="keypress",bh="__roots",bg="focusout",bf="activate",be="Tab",bd="singleton",bc="deactivate",bb="focusin",ba="qx.ui.core.FocusHandler";
qx.Class.define(ba,{extend:qx.core.Object,type:bd,construct:function(){arguments.callee.base.call(this);
this.__roots={};
},members:{__roots:null,__activeChild:null,__focusedChild:null,__currentRoot:null,connectTo:function(v){v.addListener(bi,this.__onKeyPress,this);
v.addListener(bb,this._onFocusIn,this,true);
v.addListener(bg,this._onFocusOut,this,true);
v.addListener(bf,this._onActivate,this,true);
v.addListener(bc,this._onDeactivate,this,true);
},addRoot:function(A){this.__roots[A.$$hash]=A;
},removeRoot:function(P){delete this.__roots[P.$$hash];
},getActiveWidget:function(){return this.__activeChild;
},isActive:function(M){return this.__activeChild==M;
},getFocusedWidget:function(){return this.__focusedChild;
},isFocused:function(C){return this.__focusedChild==C;
},isFocusRoot:function(Y){return !!this.__roots[Y.$$hash];
},_onActivate:function(e){var O=e.getTarget();
this.__activeChild=O;
var N=this.__findFocusRoot(O);

if(N!=this.__currentRoot){this.__currentRoot=N;
}},_onDeactivate:function(e){var o=e.getTarget();

if(this.__activeChild==o){this.__activeChild=null;
}},_onFocusIn:function(e){var B=e.getTarget();

if(B!=this.__focusedChild){this.__focusedChild=B;
B.visualizeFocus();
}},_onFocusOut:function(e){var J=e.getTarget();

if(J==this.__focusedChild){this.__focusedChild=null;
J.visualizeBlur();
}},__onKeyPress:function(e){if(e.getKeyIdentifier()!=be){return;
}
if(!this.__currentRoot){return;
}e.stopPropagation();
e.preventDefault();
var K=this.__focusedChild;

if(!e.isShiftPressed()){var L=K?this.__getWidgetAfter(K):this.__getFirstWidget();
}else{var L=K?this.__getWidgetBefore(K):this.__getLastWidget();
}if(L){L.tabFocus();
}},__findFocusRoot:function(p){var q=this.__roots;

while(p){if(q[p.$$hash]){return p;
}p=p.getLayoutParent();
}return null;
},__compareTabOrder:function(a,b){if(a===b){return 0;
}var d=a.getTabIndex()||0;
var c=b.getTabIndex()||0;

if(d!=c){return d-c;
}var k=a.getContainerElement().getDomElement();
var j=b.getContainerElement().getDomElement();
var h=qx.bom.element.Location;
var g=h.get(k);
var f=h.get(j);
if(g.top!=f.top){return g.top-f.top;
}if(g.left!=f.left){return g.left-f.left;
}var m=a.getZIndex();
var n=b.getZIndex();

if(m!=n){return m-n;
}return 0;
},__getFirstWidget:function(){return this.__getFirst(this.__currentRoot,null);
},__getLastWidget:function(){return this.__getLast(this.__currentRoot,null);
},__getWidgetAfter:function(U){var V=this.__currentRoot;

if(V==U){return this.__getFirstWidget();
}
while(U&&U.getAnonymous()){U=U.getLayoutParent();
}
if(U==null){return [];
}var W=[];
this.__collectAllAfter(V,U,W);
W.sort(this.__compareTabOrder);
var X=W.length;
return X>0?W[0]:this.__getFirstWidget();
},__getWidgetBefore:function(w){var x=this.__currentRoot;

if(x==w){return this.__getLastWidget();
}
while(w&&w.getAnonymous()){w=w.getLayoutParent();
}
if(w==null){return [];
}var y=[];
this.__collectAllBefore(x,w,y);
y.sort(this.__compareTabOrder);
var z=y.length;
return z>0?y[z-1]:this.__getLastWidget();
},__collectAllAfter:function(parent,Q,R){var S=parent.getLayoutChildren();
var T;

for(var i=0,l=S.length;i<l;i++){T=S[i];
if(!(T instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(T)&&T.isEnabled()&&T.isVisible()){if(T.isTabable()&&this.__compareTabOrder(Q,T)<0){R.push(T);
}this.__collectAllAfter(T,Q,R);
}}},__collectAllBefore:function(parent,r,s){var t=parent.getLayoutChildren();
var u;

for(var i=0,l=t.length;i<l;i++){u=t[i];
if(!(u instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(u)&&u.isEnabled()&&u.isVisible()){if(u.isTabable()&&this.__compareTabOrder(r,u)>0){s.push(u);
}this.__collectAllBefore(u,r,s);
}}},__getFirst:function(parent,G){var H=parent.getLayoutChildren();
var I;

for(var i=0,l=H.length;i<l;i++){I=H[i];
if(!(I instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(I)&&I.isEnabled()&&I.isVisible()){if(I.isTabable()){if(G==null||this.__compareTabOrder(I,G)<0){G=I;
}}G=this.__getFirst(I,G);
}}return G;
},__getLast:function(parent,D){var E=parent.getLayoutChildren();
var F;

for(var i=0,l=E.length;i<l;i++){F=E[i];
if(!(F instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(F)&&F.isEnabled()&&F.isVisible()){if(F.isTabable()){if(D==null||this.__compareTabOrder(F,D)>0){D=F;
}}D=this.__getLast(F,D);
}}return D;
}},destruct:function(){this._disposeMap(bh);
this.__focusedChild=this.__activeChild=this.__currentRoot=null;
}});
})();
(function(){var l="qx.client",k="head",j="text/css",h="stylesheet",g="}",f='@import "',e="{",d='";',c="qx.bom.Stylesheet",b="link",a="style";
qx.Class.define(c,{statics:{includeFile:function(r,s){if(!s){s=document;
}var t=s.createElement(b);
t.type=j;
t.rel=h;
t.href=qx.util.ResourceManager.getInstance().toUri(r);
var u=s.getElementsByTagName(k)[0];
u.appendChild(t);
},createElement:qx.core.Variant.select(l,{"mshtml":function(v){var w=document.createStyleSheet();

if(v){w.cssText=v;
}return w;
},"default":function(W){var X=document.createElement(a);
X.type=j;

if(W){X.appendChild(document.createTextNode(W));
}document.getElementsByTagName(k)[0].appendChild(X);
return X.sheet;
}}),addRule:qx.core.Variant.select(l,{"mshtml":function(x,y,z){x.addRule(y,z);
},"default":function(L,M,N){L.insertRule(M+e+N+g,L.cssRules.length);
}}),removeRule:qx.core.Variant.select(l,{"mshtml":function(H,I){var J=H.rules;
var K=J.length;

for(var i=K-1;i>=0;--i){if(J[i].selectorText==I){H.removeRule(i);
}}},"default":function(Y,ba){var bb=Y.cssRules;
var bc=bb.length;

for(var i=bc-1;i>=0;--i){if(bb[i].selectorText==ba){Y.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(l,{"mshtml":function(T){var U=T.rules;
var V=U.length;

for(var i=V-1;i>=0;i--){T.removeRule(i);
}},"default":function(E){var F=E.cssRules;
var G=F.length;

for(var i=G-1;i>=0;i--){E.deleteRule(i);
}}}),addImport:qx.core.Variant.select(l,{"mshtml":function(p,q){p.addImport(q);
},"default":function(R,S){R.insertRule(f+S+d,R.cssRules.length);
}}),removeImport:qx.core.Variant.select(l,{"mshtml":function(A,B){var C=A.imports;
var D=C.length;

for(var i=D-1;i>=0;i--){if(C[i].href==B){A.removeImport(i);
}}},"default":function(bd,be){var bf=bd.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].href==be){bd.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(l,{"mshtml":function(m){var n=m.imports;
var o=n.length;

for(var i=o-1;i>=0;i--){m.removeImport(i);
}},"default":function(O){var P=O.cssRules;
var Q=P.length;

for(var i=Q-1;i>=0;i--){if(P[i].type==P[i].IMPORT_RULE){O.deleteRule(i);
}}}})}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(v,w){var H=this._getLayoutChildren();
var z,G,E;
var J,top,x,y,B,A;
var F,D,I,C;

for(var i=0,l=H.length;i<l;i++){z=H[i];
G=z.getSizeHint();
E=z.getLayoutProperties();
F=z.getMarginTop();
D=z.getMarginRight();
I=z.getMarginBottom();
C=z.getMarginLeft();
J=E.left!=null?E.left:E.edge;

if(qx.lang.Type.isString(J)){J=Math.round(parseFloat(J)*v/100);
}x=E.right!=null?E.right:E.edge;

if(qx.lang.Type.isString(x)){x=Math.round(parseFloat(x)*v/100);
}top=E.top!=null?E.top:E.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*w/100);
}y=E.bottom!=null?E.bottom:E.edge;

if(qx.lang.Type.isString(y)){y=Math.round(parseFloat(y)*w/100);
}if(J!=null&&x!=null){B=v-J-x-C-D;
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}J+=C;
}else{B=E.width;

if(B==null){B=G.width;
}else{B=Math.round(parseFloat(B)*v/100);
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}}
if(x!=null){J=v-B-x-D-C;
}else if(J==null){J=C;
}else{J+=C;
}}if(top!=null&&y!=null){A=w-top-y-F-I;
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}top+=F;
}else{A=E.height;

if(A==null){A=G.height;
}else{A=Math.round(parseFloat(A)*w/100);
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}}
if(y!=null){top=w-A-y-I-F;
}else if(top==null){top=F;
}else{top+=F;
}}z.renderLayout(J,top,B,A);
}},_computeSizeHint:function(){var t=0,s=0;
var q=0,o=0;
var m,k;
var j,g;
var c=this._getLayoutChildren();
var f,r,e;
var u,top,d,h;

for(var i=0,l=c.length;i<l;i++){f=c[i];
r=f.getLayoutProperties();
e=f.getSizeHint();
var p=f.getMarginLeft()+f.getMarginRight();
var n=f.getMarginTop()+f.getMarginBottom();
m=e.width+p;
k=e.minWidth+p;
u=r.left!=null?r.left:r.edge;

if(u&&typeof u===b){m+=u;
k+=u;
}d=r.right!=null?r.right:r.edge;

if(d&&typeof d===b){m+=d;
k+=d;
}t=Math.max(t,m);
s=Math.max(s,k);
j=e.height+n;
g=e.minHeight+n;
top=r.top!=null?r.top:r.edge;

if(top&&typeof top===b){j+=top;
g+=top;
}h=r.bottom!=null?r.bottom:r.edge;

if(h&&typeof h===b){j+=h;
g+=h;
}q=Math.max(q,j);
o=Math.max(o,g);
}return {width:t,minWidth:s,height:q,minHeight:o};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){arguments.callee.base.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){arguments.callee.base.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var l="'>",k="[",h=", ",g="</span>",f="<span class='type-",e="</span> ",d="}",c="",b="]",a="{",I="map",H="<span class='object'>",G="]:",F="&gt;",E="<span class='object' title='Object instance with hash code: ",D="string",C="level-",B="0",A="&lt;",z="<span class='offset'>",s=":",t="qx.log.appender.Util",q="&amp;",r="&#39;",o="DIV",p="<span>",m="&quot;",n="<span class='type-key'>",u="</span>:<span class='type-",v="</span>: ",x=" ",w="]</span>: ",y="?";
qx.Class.define(t,{statics:{toHtml:function(O){var Y=[];
var V,X,Q,S;
Y.push(z,this.formatOffset(O.offset,6),e);

if(O.object){var P=O.win.qx.core.ObjectRegistry.fromHashCode(O.object);

if(P){Y.push(E+P.$$hash+l,P.classname,k,P.$$hash,w);
}}else if(O.clazz){Y.push(H+O.clazz.classname,v);
}var R=O.items;

for(var i=0,W=R.length;i<W;i++){V=R[i];
X=V.text;

if(X instanceof Array){var S=[];

for(var j=0,U=X.length;j<U;j++){Q=X[j];

if(typeof Q===D){S.push(p+this.escapeHTML(Q)+g);
}else if(Q.key){S.push(n+Q.key+u+Q.type+l+this.escapeHTML(Q.text)+g);
}else{S.push(f+Q.type+l+this.escapeHTML(Q.text)+g);
}}Y.push(f+V.type+l);

if(V.type===I){Y.push(a,S.join(h),d);
}else{Y.push(k,S.join(h),b);
}Y.push(g);
}else{Y.push(f+V.type+l+this.escapeHTML(X)+e);
}}var T=document.createElement(o);
T.innerHTML=Y.join(c);
T.className=C+O.level;
return T;
},formatOffset:function(K,length){var N=K.toString();
var L=(length||6)-N.length;
var M=c;

for(var i=0;i<L;i++){M+=B;
}return M+N;
},escapeHTML:function(ba){return String(ba).replace(/[<>&"']/g,this.__escapeHTMLReplace);
},__escapeHTMLReplace:function(bb){var bc={"<":A,">":F,"&":q,"'":r,'"':m};
return bc[bb]||y;
},toText:function(J){return this.toTextArray(J).join(x);
},toTextArray:function(bd){var bl=[];
bl.push(this.formatOffset(bd.offset,6));

if(bd.object){var be=bd.win.qx.core.ObjectRegistry.fromHashCode(bd.object);

if(be){bl.push(be.classname+k+be.$$hash+G);
}}else if(bd.clazz){bl.push(bd.clazz.classname+s);
}var bf=bd.items;
var bi,bk;

for(var i=0,bj=bf.length;i<bj;i++){bi=bf[i];
bk=bi.text;

if(bk instanceof Array){var bg=[];

for(var j=0,bh=bk.length;j<bh;j++){bg.push(bk[j].text);
}
if(bi.type===I){bl.push(a,bg.join(h),d);
}else{bl.push(k,bg.join(h),b);
}}else{bl.push(bk);
}}return bl;
}}});
})();
(function(){var e="debug",d="log",c="qx.log.appender.Native",b="qx.client";
qx.Class.define(c,{statics:{process:qx.core.Variant.select(b,{"gecko":function(j){if(window.console&&console.firebug){console[j.level].call(console,qx.log.appender.Util.toText(j));
}},"mshtml":function(f){if(window.console){var h=f.level;

if(h==e){h=d;
}var g=qx.log.appender.Util.toText(f);
console[h](g);
}},"webkit":function(k){if(window.console){var m=k.level;

if(m==e){m=d;
}var l=qx.log.appender.Util.toText(k);
console[m](l);
}},"opera":function(i){}})},defer:function(a){qx.log.Logger.register(a);
}});
})();
(function(){var k="",j='</div>',i="Up",h="none",g="keypress",f='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',d="Enter",c="px",b='.qxconsole .messages .user-result{background:white}',a='.qxconsole .messages .level-error{background:#FFE2D5}',V="div",U="user-command",T='<div class="command">',S='.qxconsole .command input:focus{outline:none;}',R='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',P='.qxconsole .messages div{padding:0px 4px;}',O='.qxconsole .messages .level-debug{background:white}',N='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',M="DIV",r='.qxconsole .messages .level-user{background:#E3EFE9}',s='<div class="qxconsole">',p="D",q='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',n='.qxconsole .messages .type-string{color:black;font-weight:normal;}',o='.qxconsole .control a{text-decoration:none;color:black;}',l='<div class="messages">',m='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',t='<input type="text"/>',u="clear",B='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',z='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',F='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',D='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',I='.qxconsole .messages .user-command{color:blue}',H="F7",w="qx.log.appender.Console",L='.qxconsole .messages .level-info{background:#DEEDFA}',K="block",J='.qxconsole .messages .level-warn{background:#FFF7D5}',v='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',x='.qxconsole .messages .user-error{background:#FFE2D5}',y='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',A='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',C=">>> ",E="Down",G='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(w,{statics:{init:function(){var bf=[F,y,o,f,P,I,b,x,O,L,J,a,r,n,G,m,z,q,R,N,Q,v,D,B,S];
qx.bom.Stylesheet.createElement(bf.join(k));
var bh=[s,A,l,j,T,t,j,j];
var bi=document.createElement(M);
bi.innerHTML=bh.join(k);
var bg=bi.firstChild;
document.body.appendChild(bi.firstChild);
this.__main=bg;
this.__log=bg.childNodes[1];
this.__cmd=bg.childNodes[2].firstChild;
this.__onResize();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__onKeyPress,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__log.innerHTML=k;
},process:function(be){this.__log.appendChild(qx.log.appender.Util.toHtml(be));
this.__scrollDown();
},__scrollDown:function(){this.__log.scrollTop=this.__log.scrollHeight;
},__visible:true,toggle:function(){if(!this.__main){this.init();
}else if(this.__main.style.display==h){this.show();
}else{this.__main.style.display=h;
}},show:function(){if(!this.__main){this.init();
}else{this.__main.style.display=K;
this.__log.scrollTop=this.__log.scrollHeight;
}},__history:[],execute:function(){var ba=this.__cmd.value;

if(ba==k){return;
}
if(ba==u){return this.clear();
}var X=document.createElement(V);
X.innerHTML=qx.log.appender.Util.escapeHTML(C+ba);
X.className=U;
this.__history.push(ba);
this.__lastCommand=this.__history.length;
this.__log.appendChild(X);
this.__scrollDown();

try{var Y=window.eval(ba);
}catch(bd){qx.log.Logger.error(bd);
}
if(Y!==undefined){qx.log.Logger.debug(Y);
}},__onResize:function(e){this.__log.style.height=(this.__main.clientHeight-this.__main.firstChild.offsetHeight-this.__main.lastChild.offsetHeight)+c;
},__onKeyPress:function(e){var bc=e.getKeyIdentifier();
if((bc==H)||(bc==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__main){return;
}if(!qx.dom.Hierarchy.contains(this.__main,e.getTarget())){return;
}if(bc==d&&this.__cmd.value!=k){this.execute();
this.__cmd.value=k;
}if(bc==i||bc==E){this.__lastCommand+=bc==i?-1:1;
this.__lastCommand=Math.min(Math.max(0,this.__lastCommand),this.__history.length);
var bb=this.__history[this.__lastCommand];
this.__cmd.value=bb||k;
this.__cmd.select();
}}},defer:function(W){qx.event.Registration.addListener(document.documentElement,g,W.__onKeyPress,W);
}});
})();
(function(){var g="qx.event.type.Data",f="EVENT_TYPE_DATA_CHANGED",e="qx.ui.table.ITableModel",d="New code should not use this. Instead, use the text string 'dataChanged' literally.",c="New code should not use this. Instead, use the text string 'metaDataChanged' literally.",b="qx.event.type.Event",a="EVENT_TYPE_META_DATA_CHANGED";
qx.Interface.define(e,{events:{"dataChanged":g,"metaDataChanged":b,"sorted":g},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(h){},getColumnCount:function(){},getColumnId:function(w){},getColumnIndexById:function(x){},getColumnName:function(j){},isColumnEditable:function(i){},isColumnSortable:function(v){},sortByColumn:function(t,u){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(r,s){},getValue:function(p,q){},getValueById:function(n,o){},setValue:function(k,l,m){},setValueById:function(y,z,A){}}});
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,f,d);
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,a,c);
})();
(function(){var p="metaDataChanged",o="qx.event.type.Data",n="qx.event.type.Event",m="abstract",l="qx.ui.table.model.Abstract";
qx.Class.define(l,{type:m,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":o,"metaDataChanged":n,"sorted":o},construct:function(){arguments.callee.base.call(this);
this.__columnIdArr=[];
this.__columnNameArr=[];
this.__columnIndexMap={};
},members:{__columnIdArr:null,__columnNameArr:null,__columnIndexMap:null,__internalChange:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(q){return null;
},isColumnEditable:function(g){return false;
},isColumnSortable:function(d){return false;
},sortByColumn:function(v,w){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(t,u){},getValue:function(E,F){throw new Error("getValue is abstract");
},getValueById:function(C,D){return this.getValue(this.getColumnIndexById(C),D);
},setValue:function(x,y,z){throw new Error("setValue is abstract");
},setValueById:function(a,b,c){this.setValue(this.getColumnIndexById(a),b,c);
},getColumnCount:function(){return this.__columnIdArr.length;
},getColumnIndexById:function(e){return this.__columnIndexMap[e];
},getColumnId:function(s){return this.__columnIdArr[s];
},getColumnName:function(f){return this.__columnNameArr[f];
},setColumnIds:function(A){this.__columnIdArr=A;
this.__columnIndexMap={};

for(var i=0;i<A.length;i++){this.__columnIndexMap[A[i]]=i;
}this.__columnNameArr=new Array(A.length);
if(!this.__internalChange){this.fireEvent(p);
}},setColumnNamesByIndex:function(B){if(this.__columnIdArr.length!=B.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__columnIdArr.length+" != "+B.length);
}this.__columnNameArr=B;
this.fireEvent(p);
},setColumnNamesById:function(r){this.__columnNameArr=new Array(this.__columnIdArr.length);

for(var i=0;i<this.__columnIdArr.length;++i){this.__columnNameArr[i]=r[this.__columnIdArr[i]];
}},setColumns:function(h,j){var k=this.__columnIdArr.length==0||j;

if(j==null){if(this.__columnIdArr.length==0){j=h;
}else{j=this.__columnIdArr;
}}
if(j.length!=h.length){throw new Error("columnIdArr and columnNameArr have different length: "+j.length+" != "+h.length);
}
if(k){this.__internalChange=true;
this.setColumnIds(j);
this.__internalChange=false;
}this.setColumnNamesByIndex(h);
}},destruct:function(){this.__columnIdArr=this.__columnNameArr=this.__columnIndexMap=null;
}});
})();
(function(){var t="dataChanged",s="metaDataChanged",r="qx.ui.table.model.Simple",q="Boolean",p="sorted";
qx.Class.define(r,{extend:qx.ui.table.model.Abstract,construct:function(){arguments.callee.base.call(this);
this.__rowArr=[];
this.__sortColumnIndex=-1;
this.__sortMethods=[];
this.__editableColArr=null;
},properties:{caseSensitiveSorting:{check:q,init:true}},statics:{_defaultSortComparatorAscending:function(bH,bI){var bJ=bH[arguments.callee.columnIndex];
var bK=bI[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(bJ)&&qx.lang.Type.isNumber(bK)){var bL=isNaN(bJ)?isNaN(bK)?0:1:isNaN(bK)?-1:null;

if(bL!=null){return bL;
}}return (bJ>bK)?1:((bJ==bK)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(N,O){var P=(N[arguments.callee.columnIndex].toLowerCase?N[arguments.callee.columnIndex].toLowerCase():N[arguments.callee.columnIndex]);
var Q=(O[arguments.callee.columnIndex].toLowerCase?O[arguments.callee.columnIndex].toLowerCase():O[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(P)&&qx.lang.Type.isNumber(Q)){var R=isNaN(P)?isNaN(Q)?0:1:isNaN(Q)?-1:null;

if(R!=null){return R;
}}return (P>Q)?1:((P==Q)?0:-1);
},_defaultSortComparatorDescending:function(v,w){var x=v[arguments.callee.columnIndex];
var y=w[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(x)&&qx.lang.Type.isNumber(y)){var z=isNaN(x)?isNaN(y)?0:1:isNaN(y)?-1:null;

if(z!=null){return z;
}}return (x<y)?1:((x==y)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(br,bs){var bt=(br[arguments.callee.columnIndex].toLowerCase?br[arguments.callee.columnIndex].toLowerCase():br[arguments.callee.columnIndex]);
var bu=(bs[arguments.callee.columnIndex].toLowerCase?bs[arguments.callee.columnIndex].toLowerCase():bs[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(bt)&&qx.lang.Type.isNumber(bu)){var bv=isNaN(bt)?isNaN(bu)?0:1:isNaN(bu)?-1:null;

if(bv!=null){return bv;
}}return (bt<bu)?1:((bt==bu)?0:-1);
}},members:{__rowArr:null,__editableColArr:null,__sortableColArr:null,__sortMethods:null,__sortColumnIndex:null,__sortAscending:null,getRowData:function(e){var f=this.__rowArr[e];

if(f==null||f.originalData==null){return f;
}else{return f.originalData;
}},getRowDataAsMap:function(bb){var bd=this.__rowArr[bb];
var bc={};

for(var be=0;be<this.getColumnCount();be++){bc[this.getColumnId(be)]=bd[be];
}return bc;
},getDataAsMapArray:function(){var V=this.getRowCount();
var U=[];

for(var i=0;i<V;i++){U.push(this.getRowDataAsMap(i));
}return U;
},setEditable:function(S){this.__editableColArr=[];

for(var T=0;T<this.getColumnCount();T++){this.__editableColArr[T]=S;
}this.fireEvent(s);
},setColumnEditable:function(bj,bk){if(bk!=this.isColumnEditable(bj)){if(this.__editableColArr==null){this.__editableColArr=[];
}this.__editableColArr[bj]=bk;
this.fireEvent(s);
}},isColumnEditable:function(u){return this.__editableColArr?(this.__editableColArr[u]==true):false;
},setColumnSortable:function(bp,bq){if(bq!=this.isColumnSortable(bp)){if(this.__sortableColArr==null){this.__sortableColArr=[];
}this.__sortableColArr[bp]=bq;
this.fireEvent(s);
}},isColumnSortable:function(W){return (this.__sortableColArr?(this.__sortableColArr[W]!==false):true);
},sortByColumn:function(C,D){var G;
var F=this.__sortMethods[C];

if(F){G=(D?F.ascending:F.descending);
}else{if(this.getCaseSensitiveSorting()){G=(D?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{G=(D?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}G.columnIndex=C;
this.__rowArr.sort(G);
this.__sortColumnIndex=C;
this.__sortAscending=D;
var E={columnIndex:C,ascending:D};
this.fireDataEvent(p,E);
this.fireEvent(s);
},setSortMethods:function(X,Y){var ba;

if(qx.lang.Type.isFunction(Y)){ba={ascending:Y,descending:function(A,B){return Y(B,A);
}};
}else{ba=Y;
}this.__sortMethods[X]=ba;
},getSortMethods:function(bM){return this.__sortMethods[bM];
},clearSorting:function(){if(this.__sortColumnIndex!=-1){this.__sortColumnIndex=-1;
this.__sortAscending=true;
this.fireEvent(s);
}},getSortColumnIndex:function(){return this.__sortColumnIndex;
},isSortAscending:function(){return this.__sortAscending;
},getRowCount:function(){return this.__rowArr.length;
},getValue:function(bN,bO){if(bO<0||bO>=this.__rowArr.length){throw new Error("this.__rowArr out of bounds: "+bO+" (0.."+this.__rowArr.length+")");
}return this.__rowArr[bO][bN];
},setValue:function(bf,bg,bh){if(this.__rowArr[bg][bf]!=bh){this.__rowArr[bg][bf]=bh;
if(this.hasListener(t)){var bi={firstRow:bg,lastRow:bg,firstColumn:bf,lastColumn:bf};
this.fireDataEvent(t,bi);
}
if(bf==this.__sortColumnIndex){this.clearSorting();
}}},setData:function(bw,bx){this.__rowArr=bw;
if(this.hasListener(t)){var by={firstRow:0,lastRow:bw.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(t,by);
}
if(bx!==false){this.clearSorting();
}},getData:function(){return this.__rowArr;
},setDataAsMapArray:function(g,h,k){this.setData(this._mapArray2RowArr(g,h),k);
},addRows:function(bl,bm,bn){if(bm==null){bm=this.__rowArr.length;
}bl.splice(0,0,bm,0);
Array.prototype.splice.apply(this.__rowArr,bl);
var bo={firstRow:bm,lastRow:this.__rowArr.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(t,bo);

if(bn!==false){this.clearSorting();
}},addRowsAsMapArray:function(bz,bA,bB,bC){this.addRows(this._mapArray2RowArr(bz,bB),bA,bC);
},setRows:function(bD,bE,bF){if(bE==null){bE=0;
}bD.splice(0,0,bE,bD.length);
Array.prototype.splice.apply(this.__rowArr,bD);
var bG={firstRow:bE,lastRow:this.__rowArr.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(t,bG);

if(bF!==false){this.clearSorting();
}},setRowsAsMapArray:function(a,b,c,d){this.setRows(this._mapArray2RowArr(a,c),b,d);
},removeRows:function(l,m,n){this.__rowArr.splice(l,m);
var o={firstRow:l,lastRow:this.__rowArr.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:l,removeCount:m};
this.fireDataEvent(t,o);

if(n!==false){this.clearSorting();
}},_mapArray2RowArr:function(H,I){var M=H.length;
var J=this.getColumnCount();
var L=new Array(M);
var K;

for(var i=0;i<M;++i){K=[];

if(I){K.originalData=H[i];
}
for(var j=0;j<J;++j){K[j]=H[i][this.getColumnId(j)];
}L[i]=K;
}return L;
}},destruct:function(){this.__rowArr=this.__editableColArr=this.__sortMethods=this.__sortableColArr=null;
}});
})();
(function(){var cc="number",cb="",ca="string",bY="10.addRows.view0.number.assert-is-sorted",bX="object",bW="22.addRows.view0.number.getValue",bV="14.setValue.view1.getRowCount",bU="6.setData.view1.number.assert-is-sorted",bT="or",bS="13.setValue.view0.assert-is-sorted",bH="8.setData.view0.number.assert-is-sorted",bG="21.random-deletions.view2.assert-subset",bF="21.random-deletions.view0.assert-set-equivalence",bE="14.setValue.view1.assert-locatable",bD="...",bC="14.setValue.view1.number.assert-is-sorted",bB="5.removeRows.view0.getRowCount",bA="and",bz="test",by="1.addRows.view0.getRowCount",cj="2.setData.view0.number.getValueById",ck="6.setData.view0.number.assert-is-sorted",ch="18.removeRows.view2.assert-empty",ci="12.setValue.view0.getValue",cf="14.setValue.view0.getValue",cg="4.addRows.view0.number.getValueById",cd="22.addRows.view0.number.getValueById",ce="15.setValue.view0.getRowCount",cl="17.addViews.view2.assert-filter",cm="16.setValue.view0.getRowCount",bL="16.changeSort.view1.number.assert-is-sorted",bK="16.setValue.view1.getRowCount",bN="6.removeRows.view0.getRowCount",bM="11.view0.locate.V3",bP="15.setValue.view0.assert-is-sorted",bO="7.setData.view0.number.assert-is-sorted",bR="2.setData.view0.getRowCount",bQ="5.setData.view1.number.assert-is-sorted",bJ="test!",bI="18.removeRows.view0.assert-removed",E="3.addRows.view0.getRowCount",F="smart.MSmartUnitTests",G="11.view0.locate.V2",H="3.addRows.view0.number.getValueById",J="4.addRows.view1.number.assert-is-sorted",K="20.random-adds.view0.count",L="1.addRows.view0.number.getValueById",M="13.setValue.view1.number.assert-is-sorted",O="19.clearAllRows.assert-all-views-empty",P="3.addRows.view0.number.getValue",cq="1.addRows.view0.number.getValue",cp="2.setData.view1.number.assert-is-sorted",co="unit test failed: ",cn=": ",cu="4.addRows.view0.number.getValue",ct="13.setValue.view1.getRowCount",cs="7.setData.view1.number.assert-is-sorted",cr="0.getColumnIndexById",cw="16.changeSort.view0.assert-is-sorted",cv="17.addViews.view2.disjoint",bi="all unit tests passed",bj="12.setValue.view0.assert-is-sorted",bg="14.setValue.view0.getRowCount",bh="12.setValue.view1.number.assert-is-sorted",bm="2.setData.view0.number.assert-is-sorted",bn="20.random-adds.assert-sort",bk="3.addRows.view0.number.assert-is-sorted",bl="14.setValue.view0.assert-is-sorted",be="17.addViews.view3.assert-filter",bf="9.setData.view0.number.assert-is-sorted",Y="SOME UNIT TESTS FAILED",X="15.setValue.view1.getRowCount",bb="4.addRows.view0.number.assert-is-sorted",ba="8.setData.view1.number.assert-is-sorted",U="3.addRows.view1.number.assert-is-sorted",T="4.addRows.view0.getRowCount",W="13.setValue.view1.assert-is-filtered",V="13.setValue.view1.assert-not-locatable",S="13.setValue.view0.getValue",Q="15.setValue.view1.getValue",bs="15.setValue.view0.getValue",bt="15.setValue.view1.number.assert-is-sorted",bu="7.removeRows.view0.getRowCount",bv="14.setValue.view1.assert-is-not-filtered",bo="2.setData.view0.number.getValue",bp="9.removeRows.view0.getRowCount",bq="8.removeRows.view0.getRowCount",br="22.addRows.view0.getRowCount",bw="5.setData.view0.number.assert-is-sorted",bx="10.addRows.view0.getRowCount",bd="17.addViews.view2.rowsum",bc="13.setValue.view0.getRowCount";
qx.Mixin.define(F,{members:{testsFailed:false,__runTest:function(name,f){var g=false;

try{if(!f.call(this))g=true;
}catch(e){this.__debug(e);
g=true;
}
if(g)this.__debug(co+name);
else{}if(g)this.testsFailed=true;
return !g;
},unitTest:function(){try{this.__unitTest();
}catch(e){this.__debug(e);
}},__unitTest:function(){var i,q=false;
var B=new smart.Smart();
var u={"number":0,"string":1,"object":2,"function":3,"random":4};
B.setColumns(function(){var C=[];

for(name in u){var D=u[name];
C[D]=name;
}return C;
}());
this.__runTest(cr,function(){for(name in u){var b=u[name];

if(B.getColumnIndexById(name)!=b)return false;
}return true;
});
B.addIndex(u[cc]);
B.sortByColumn(u[cc],true);
B.addView(function(R){return R[u[ca]].length&1;
});
var N=100,y=100;
var p=[];

for(i=0;i<N;i++)p.push([i,cb+i,new qx.ui.basic.Label(cb+i),function(x){return x==i;
},Math.random()]);
B.addRows(p);
this.__runTest(by,function(){return (B.getRowCount()==y);
});
this.__runTest(cq,function(){for(i=0;i<N;i++)if(B.getValue(u[cc],i)!=i)return false;
return true;
});
this.__runTest(L,function(){for(i=0;i<N;i++)if(B.getValueById(cc,i)!=i)return false;
return true;
});
B.setData(p);
this.__runTest(bR,function(){return (B.getRowCount()==N);
});
this.__runTest(bo,function(){for(i=0;i<N;i++)if(B.getValue(u[cc],i)!=i)return false;
return true;
});
this.__runTest(cj,function(){for(i=0;i<B.getRowCount();i++)if(B.getValueById(cc,i)!=i)return false;
return true;
});
this.__runTest(bm,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(cp,function(){for(i=1;i<
B.getRowCount(1);i++)if(B.getValue(u[cc],i-1,1)>
B.getValue(u[cc],i,1))return false;
return true;
});
p=[];

for(i=-10;i<0;i++)p.push([i,cb+i,new qx.ui.basic.Label(cb+i),function(x){return x==i;
},Math.random()]);
B.addRows(p);
y+=10;
this.__runTest(E,function(){return (B.getRowCount()==y);
});
this.__runTest(P,function(){for(i=0;i<B.getRowCount();i++)if(B.getValue(u[cc],i)!=i-10)return false;
return true;
});
this.__runTest(H,function(){for(i=0;i<B.getRowCount();i++)if(B.getValueById(cc,i)!=i-10)return false;
return true;
});
this.__runTest(bk,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(U,function(){for(i=1;i<
B.getRowCount(1);i++)if(B.getValue(u[cc],i-1,1)>
B.getValue(u[cc],i,1))return false;
return true;
});
p=[];

for(i=N;i<N+10;i++)p.push([i,cb+i,new qx.ui.basic.Label(cb+i),function(x){return x==i;
},Math.random()]);
B.addRows(p);
y+=10;
this.__runTest(T,function(){return (B.getRowCount()==y);
});
this.__runTest(cu,function(){for(i=0;i<B.getRowCount();i++)if(B.getValue(u[cc],i)!=i-10)return false;
return true;
});
this.__runTest(cg,function(){for(i=0;i<B.getRowCount();i++)if(B.getValueById(cc,i)!=i-10)return false;
return true;
});
this.__runTest(bb,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(J,function(){for(i=1;i<
B.getRowCount(1);i++)if(B.getValue(u[cc],i-1,1)>
B.getValue(u[cc],i,1))return false;
return true;
});
p=[];

for(i=0;i<N;i++){var I=i+0.5;
p.push([I,cb+I,new qx.ui.basic.Label(cb+I),function(x){return x==I;
},Math.random()]);
}B.addRows(p);
y+=N;
this.__runTest(bB,function(){return (B.getRowCount()==y);
});
this.__runTest(bw,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(bQ,function(){for(i=1;i<
B.getRowCount(1);i++)if(B.getValue(u[cc],i-1,1)>
B.getValue(u[cc],i,1))return false;
return true;
});
B.removeRows(N>>2,N>>1);
y-=(N>>1);
this.__runTest(bN,function(){return (B.getRowCount()==y);
});
this.__runTest(ck,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(bU,function(){for(i=1;i<
B.getRowCount(1);i++)if(B.getValue(u[cc],i-1,1)>
B.getValue(u[cc],i,1))return false;
return true;
});
B.removeRows(0,5);
y-=5;
this.__runTest(bu,function(){return (B.getRowCount()==y);
});
this.__runTest(bO,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(cs,function(){for(i=1;i<
B.getRowCount(1);i++)if(B.getValue(u[cc],i-1,1)>
B.getValue(u[cc],i,1))return false;
return true;
});
B.removeRows(B.getRowCount()-5);
y-=5;
this.__runTest(bq,function(){return (B.getRowCount()==y);
});
this.__runTest(bH,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(ba,function(){for(i=1;i<
B.getRowCount(1);i++)if(B.getValue(u[cc],i-1,1)>
B.getValue(u[cc],i,1))return false;
return true;
});
B.removeRows(0,1);
B.removeRows(B.getRowCount()-1);
B.removeRows(B.getRowCount()>>1,1);
y-=3;
this.__runTest(bp,function(){return (B.getRowCount()==y);
});
this.__runTest(bf,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
var r=33.33,s=-10000,t=10000;
B.addRows([[r,cb+r,new qx.ui.basic.Label(cb+r),function(x){return x==r;
},Math.random()]]);
B.addRows([[s,cb+s,new qx.ui.basic.Label(cb+s),function(x){return x==s;
},Math.random()]]);
B.addRows([[t,cb+t,new qx.ui.basic.Label(cb+t),function(x){return x==t;
},Math.random()]]);
y+=3;
this.__runTest(bx,function(){return (B.getRowCount()==y);
});
this.__runTest(bY,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(bY,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(G,function(){return (B.locate(u[cc],s)==0);
});
this.__runTest(bM,function(){return (B.locate(u[cc],t)==B.getRowCount()-1);
});
B.setValue(u[bX],5,null);
this.__runTest(ci,function(){return (B.getValue(u[bX],5)==null);
});
this.__runTest(bj,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(bh,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
var m=B.getRowCount();
var z=B.getRowCount(1);
var l=bJ;

for(i=0;i<B.getRowCount();i++)if((B.getValue(u[ca],i).length&1)==0)break;
var I=B.getValue(u[cc],i);
B.setValue(u[ca],i,l);
this.__runTest(S,function(){return (B.getValue(u[ca],i)==l);
});
this.__runTest(W,function(){for(var i=0;i<
B.getRowCount(1);i++)if(B.getValue(u[ca],i,1)==l)return false;
return true;
});
this.__runTest(V,function(){return B.locate(u[cc],I,1)==undefined;
});
this.__runTest(bS,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(M,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(bc,function(){return (B.getRowCount()==m);
});
this.__runTest(ct,function(){return (B.getRowCount(1)==(z-1));
});
var m=B.getRowCount();
var z=B.getRowCount(1);
var k=bz;

for(i=0;i<B.getRowCount();i++)if((B.getValue(u[ca],i).length&1)==1)break;
var I=B.getValue(u[cc],i);
B.setValue(u[ca],i,k);
this.__runTest(cf,function(){return (B.getValue(u[ca],i)==k);
});
this.__runTest(bv,function(){for(var i=0;i<
B.getRowCount(1);i++)if(B.getValue(u[ca],i,1)==k)return true;
return false;
});
this.__runTest(bE,function(){return B.locate(u[cc],I,1)!=undefined;
});
this.__runTest(bl,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(bC,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(bg,function(){return (B.getRowCount()==m);
});
this.__runTest(bV,function(){return (B.getRowCount(1)==(z+1));
});
m=B.getRowCount();
z=B.getRowCount(1);
r=0.1;
B.setValue(u[cc],z>>1,r,1);
this.__runTest(bs,function(){return (B.getValue(u[cc],B.locate(u[cc],r))==r);
});
this.__runTest(Q,function(){return (B.getValue(u[cc],B.locate(u[cc],r,1),1)==r);
});
this.__runTest(bP,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(bt,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[cc],i-1)>B.getValue(u[cc],i))return false;
return true;
});
this.__runTest(ce,function(){return (B.getRowCount()==m);
});
this.__runTest(X,function(){return (B.getRowCount(1)==z);
});
m=B.getRowCount();
z=B.getRowCount(1);
B.sortByColumn(u[ca],true);
this.__runTest(cw,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[ca],i-1)>B.getValue(u[ca],i))return false;
return true;
});
this.__runTest(bL,function(){for(i=1;i<B.getRowCount();i++)if(B.getValue(u[ca],i-1)>B.getValue(u[ca],i))return false;
return true;
});
this.__runTest(cm,function(){return (B.getRowCount()==m);
});
this.__runTest(bK,function(){return (B.getRowCount(1)==z);
});
B.addView([function(R){return R[u[cc]]>=20;
},function(R){return R[u[cc]]<=80;
}],null,bA);
B.addView([function(R){return R[u[cc]]<20;
},function(R){return R[u[cc]]>80;
}],null,bT);
this.__runTest(cl,function(){for(i=0;i<
B.getRowCount(2);i++){var x=B.getValue(u[cc],i,2);

if(x>=20&&x<=80)return false;
}return true;
});
this.__runTest(be,function(){for(i=0;i<
B.getRowCount(3);i++){var x=B.getValue(u[cc],i,3);

if(x<20||x>80)return false;
}return true;
});
this.__runTest(cv,function(){var a={};

for(i=0;i<
B.getRowCount(2);i++)a[B.getValue(u[cc],i,2)]=1;

for(i=0;i<
B.getRowCount(3);i++)if(a[B.getValue(u[cc],i,3)]==1)return false;
return true;
});
this.__runTest(bd,function(){return B.getRowCount(2)+B.getRowCount(3)==B.getRowCount(0);
});
var n=[];

for(i=0;i<B.getRowCount(2);i++)n.push(B.getRowReference(i,2));
B.removeReferencedRows(n);
this.__runTest(ch,function(){return B.getRowCount(2)==0;
});
this.__runTest(bI,function(){for(i=0;i<B.getRowCount();i++){var x=B.getValue(u[cc],i);

if(x<20||x>80)return false;
}return true;
});
B.clearAllRows();
this.__runTest(O,function(){for(var v=0;v<B.getViewCount();v++)if(B.getRowCount(v)!=0)return false;
return true;
});
B.sortByColumn(u[cc],true);
N=1000;
var h=[];
var w=0;

for(i=0;i<N;i++){var A=[];
var o=(Math.random()&7)+1;

for(var j=0;j<o;j++){var x=(Math.random()*~0)^0;
var R=[x,cb+x,null,null,x];
A.push(R);
h.push(R);
w++;
}B.addRows(A);
}
if(false){this.__debugobj(h);

for(i=0;i<B.getRowCount();i++)this.__debug(bD+i+cn+B.getValue(u[cc],i));
}this.__runTest(bn,function(){h.sort(function(c,d){return c[u[cc]]-d[u[cc]];
});

for(var i=0;i<h.length;i++)if(B.getValue(u[cc],i)!=h[i][u[cc]])return false;
return true;
});
this.__runTest(K,function(){return B.getRowCount()==w;
});
N=(1<<10);
B.clearAllRows();
w={};
p=[];

for(i=0;i<N;i++){w[i]=1;
p.push([i,cb+i,new qx.ui.basic.Label(cb+i),function(x){return x==i;
},Math.random()]);
}B.addRows(p);
for(i=0;i<(N>>2);i++){var I=(Math.random()*(B.getRowCount()-1))^0;
w[B.getValue(u[cc],I)]=undefined;
B.removeRows(I,1);
}this.__runTest(bF,function(){for(i in w)if(w[i]!=undefined)if(B.locate(u[cc],i)==undefined)return false;

for(i=0;i<B.getRowCount();i++)if(w[B.getValue(u[cc],i)]!=1)return false;
return true;
});
this.__runTest(bG,function(){for(i=0;i<B.getRowCount(2);i++)if(w[B.getValue(u[cc],i,2)]!=1)return false;
return true;
});
B.clearAllRows();
var N=100,y=100;
var p=[];

for(i=0;i<N;i++)if(i!=49&&i!=50&&i!=51)p.push([i,cb+i,new qx.ui.basic.Label(cb+i),function(x){return x==i;
},Math.random()]);
B.addRows(p);
B.addRows([[49,cb+49,new qx.ui.basic.Label(cb+49),function(x){return x==49;
},Math.random()],[50,cb+50,new qx.ui.basic.Label(cb+50),function(x){return x==50;
},Math.random()],[51,cb+51,new qx.ui.basic.Label(cb+51),function(x){return x==51;
},Math.random()]]);
this.__runTest(br,function(){return (B.getRowCount()==y);
});
this.__runTest(bW,function(){for(i=0;i<N;i++)if(B.getValue(u[cc],i)!=i)return false;
return true;
});
this.__runTest(cd,function(){for(i=0;i<N;i++)if(B.getValueById(cc,i)!=i)return false;
return true;
});
if(this.testsFailed)this.__debug(Y);
else this.__debug(bi);
return !this.testsFailed;
}}});
})();
(function(){var K="",J="__insertRows: view ",I='and',H='dataChanged',G="changeView",F='or',E="IPs[i] = ",D=": ",C=", A.length = ",B="_applyView",bl="total time spent in addRows: ",bk=": using push strategy",bj="] is undefined!",bi="Integer",bh="  IPs[",bg='metaDataChanged',bf="):",be='function',bd="insertRows: splicing in ",bc="smart.Smart",S="ASSERTION FAILURE (2) in __insertRows",T="ASSERTION FAILURE (0) in __insertRows: row[",P="...",Q="ASSERTION FAILURE (1) in __insertRows",N=" (",O="...(no properties)",L=": using splice strategy",M=" msec",W=" rows",X="): (null)",ba="] = ",Y=": using unshift strategy",bb=": using copy strategy";
qx.Class.define(bc,{extend:qx.ui.table.model.Simple,include:smart.MSmartUnitTests,construct:function(){arguments.callee.base.call(this);
this.___debug=true;
this.__views=0;
this.__backingstore=[];
this.__filters=[];
this.__conjunctions=[];
this.__assoc=[];
this.__indices={};
this.__selection_stack=[];
this.__selectionIndex=-1;
this.__selectionModel=null;
this.addListener(G,this._changeView,this);
this.addView();
this._applyView(0,0,false,true);
},properties:{view:{init:0,check:bi,apply:B,event:G}},members:{__filters:null,__assoc:null,__indices:null,__conjunctions:null,__backingstore:null,_applyView:function(et,eu,ev,ew,ex){if(ev==undefined)ev=true;

if(ew==undefined)ew=false;

if(ex==undefined)ex=true;

if(et==eu&&!ew)return;

if(et>=this.__views)throw new Error("_applyView: view out of bounds: "+et+" (0.."+(this.__views-1)+")");
if(ex)this.__saveSelection(eu);
this.__rowArr=this.getRowArray(et);
if(ev)this.__notifyDataChanged(et);
},_changeView:function(e){this.__restoreSelection();
},addView:function(bG,bH,bI){this.__backingstore.push([]);
this.__filters.push([]);
this.__conjunctions.push(I);
this.__assoc.push({});

for(var bJ in this.__indices)this.__indices[bJ].push({});
var bK=this.__views++;
this.setFilters(bK,bG,bH,bI);
return bK;
},updateView:function(ei){if(this.getView()==ei)this.__saveSelection();
this.__evalFilters(ei);
if(this.getView()==ei)this.__restoreSelection();
},setFilters:function(l,m,n,o){if(l){if(this.getView()==l)this.__saveSelection();

if(m==undefined)m=[];
else if(typeof (m)==be)m=[m];
var p=[];

if(n!=undefined&&n!=null){for(var i=0;i<m.length;i++)p.push(function(br,bs){return function(R){return bs.call(br,R);
};
}(n,m[i]));
}else p=m;
this.__filters[l]=p;

if(o!==I&&o!==F)o=I;
this.__conjunctions[l]=o;
this.__evalFilters(l);
if(this.getView()==l)this.__restoreSelection();
}},resetFilters:function(bA){this.setFilters(bA);
},getViewCount:function(){return this.__views;
},addIndex:function(ca){var A=[];

for(var v=0;v<this.__views;v++)A.push({});
this.__indices[ca]=A;
this.__updateAssociationMaps(undefined,ca);
},locate:function(dv,dw,dx){if(dx==undefined)dx=this.getView();
return this.__indices[dv][dx][K+dw];
},indexedSelection:function(dV,dW){this.__selectionIndex=dV;
this.__selectionModel=dW;
this.__selection_stack=[];
this.__selection_stack_depth=0;
this.__suppress_indexed_selection=false;
},suspendIndexedSelection:function(cr){this.__suppress_indexed_selection=cr;
},__saveSelection:function(bn,bo){if(bn==undefined)bn=this.getView();

if(!this.__selectionModel||this.__selectionIndex<0||this.__selectionIndex>=this.getColumnCount())return;
var bp=this.__selection_stack[this.__selection_stack_depth++]=[];
var bq=this.__selectionModel;
this.__selectionModel.iterateSelection(function(ep){var eq=this.getValue(this.__selectionIndex,ep,bn);

if(bo&&eq in bo)return;
bp.push(eq);
},this);
},__restoreSelection:function(bQ){if(this.selection_stack_depth<1||!this.__selectionModel||this.__selectionIndex<0||this.__selectionIndex>=this.getColumnCount())return;
var bS=this.__selectionModel;
bS.setBatchMode(true);

if(!this.__suppress_indexed_selection)this.__clearSelection();
var bR=this.__selection_stack[--this.__selection_stack_depth];

if(!this.__suppress_indexed_selection)for(var i=0;i<bR.length;i++){var bT=this.locate(this.__selectionIndex,bR[i],bQ);

if(bT!=undefined)bS.addSelectionInterval(bT,bT);
}bS.setBatchMode(false);
},__clearSelection:function(){var bO=this.__selectionModel;

if(bO)bO.resetSelection();
},getRowArray:function(co){if(co==undefined)co=this.getView();
return this.__backingstore[co];
},__setRowArray:function(cI,A,cJ){if(cJ==undefined)cJ=false;
var cK=false;
if(cI==this.getView())cK=true;
this.__backingstore[cI]=A;
if(cK){this._applyView(cI,cI,true,true,cJ);
}},__getAssoc:function(du){if(du==undefined)du=this.getView();

if(du<this.__views)return this.__assoc[du];
else return undefined;
},__getFilters:function(bF){if(bF==undefined)bF=this.getView();

if(bF<this.__views)return this.__filters[bF];
else return undefined;
},__getConjunction:function(eB){if(eB==undefined)eB=this.getView();
return this.__conjunctions[eB];
},getRowData:function(cy,cz,cA){if(cz==undefined)cz=this.getView();

if(cA==undefined)cA=true;
var cB=this.getRowCount(cz);
if(cy<0||cy>=cB)throw new Error("rowIndex out of bounds: "+cy+" (0.."+(cB-1)+")");
return cA?this.getRowArray(cz)[cy].slice(0):this.getRowArray(cz)[cy];
},getRowReference:function(c,d){return this.getRowData(c,d,false);
},getRowCount:function(bP){if(bP==undefined)bP=this.getView();
return this.getRowArray(bP).length;
},getValue:function(bB,bC,bD){if(bD==undefined)bD=this.getView();
var bE=this.getRowCount(bD);

if(bC<0||bC>=bE)throw new Error("this.__rowArr out of bounds: "+bC+" (0.."+bE+")");
return this.getRowArray(bD)[bC][bB];
},getValueById:function(eC,eD,eE){if(eE==undefined)eE=this.getView();
return this.getValue(this.getColumnIndexById(eC),eD,eE);
},__removeRows:function(cO,cP,cQ){if(cQ==undefined)cQ=true;
var i;
var A=this.getRowArray(cO);

if(cP.length>=(A.length>>2)){var cR={};

for(i=0;i<cP.length;i++){var cT=this.__getRowIndex(cO,cP[i]);

if(cT!=undefined)cR[cT]=1;
}var cW=[];

for(i=0;i<A.length;i++)if(!cR[i])cW.push(A[i]);
this.__setRowArray(cO,cW);
}else{var cR=[];

for(i=0;i<cP.length;i++){var cT=this.__getRowIndex(cO,cP[i]);

if(cT!=undefined)cR.push(cT);
}cR.sort(function(a,b){return b-a;
});
var cU=cR.length;
var cS;
var A=this.getRowArray(cO);

for(i=0;i<cU;i+=cS){var cV=cR[i];
var cX=cV;
cS=1;

for(var j=1;i+j<cU;j++)if(cR[i+j]==cX-j)cS++;
else break;
A.splice(cV-cS+1,cS);
}}if(cQ)this.__updateAssociationMaps(cO);
},__push:function(f,g,h){if(h==undefined)h=true;
var A=this.getRowArray(f);
var k=A.length;
A.push.apply(A,g);

if(h)this.__updateAssociationMapsAfterPush(f,g,k);
},__unshift:function(cL,cM,cN){if(cN==undefined)cN=true;
var A=this.getRowArray(cL);
A.unshift.apply(A,cM);
if(cN)this.__updateAssociationMaps(cL);
},__insertRows:function(dy,dz,dA,dB,dC){if(dA==undefined)dA=true;

if(dB==undefined)dB=false;

if(dC==undefined)dC=true;
if(dA&&dy)dz=this.__testAllFilters(dy,dz,false);
if(dz.length==0)return;
if(!this.isSorted()){this.__push(dy,dz,dC);
return;
}var dE=this.getComparator();

if(!dB)dz.sort(dE);

if(false)for(var i=0;i<dz.length;i++)if(dz[i]==undefined)this.__debug(T+i+bj);
var A=this.getRowArray(dy);

if(!A.length||dE(dz[0],A[A.length-1])>=0){this.__debug(J+dy+bk);
this.__push(dy,dz,dC);
}else if(dE(dz[dz.length-1],A[0])<=0){this.__debug(J+dy+Y);
this.__unshift(dy,dz,dC);
}else{if(dz.length<(A.length>>1)){this.__debug(J+dy+L);
var dI=dz.length;
var i,dF=0,dK=A.length-1;
var dJ=[];
for(i=0;i<dI;i++){var dM=this.__binsearch(A,dz[i],dE,dF,dK);

if(dM>=0){}else{dM=-dM-1;
}dJ.push(dM);
dF=dM;
}if(false){if(dJ.length!=dz.length)this.__debug(Q);

for(i=1;i<dI;i++)if(dJ[i-1]>dJ[i])this.__debug(S);

for(i=0;i<dI;i++)this.__debug(bh+i+ba+dJ[i]);
}var dD;

for(i=dI-1;i>=0;i-=dD){if(true){if(dJ[i]<0)this.__debug(E+dJ[i]);

if(dJ[i]>A.length)this.__debug(E+dJ[i]+C+A.length);
}
if(false){A.splice(dJ[i],0,dz[i]);
dD=1;
}else{var dR=dJ[i];
var dG=[dJ[i],0];
var dO=[dz[i]];
dD=1;

for(var j=1;i-j>=0;j++){if(dJ[i-j]==dR){dD++;
dO.push(dz[i-j]);
}else break;
}this.__debug(bd+dD+W);
dO.reverse();
dG.push.apply(dG,dO);
A.splice.apply(A,dG);
}}}else{this.__debug(J+dy+bb);
var dQ=[];
var dL=0,dP=A.length;
var dN=dz.length;

for(var i=0;i<dN;i++){var R=dz[i];
while(dL<dP){var dH=dE(R,A[dL]);

if(dH<0){dQ.push(R);
break;
}dQ.push(A[dL++]);
}if(dL==dP)dQ.push(R);
}if(dL<dP)dQ.push.apply(dQ,A.slice(dL));
this.__setRowArray(dy,dQ);
}
if(dC)this.__updateAssociationMaps(dy);
}},__set:function(cC,cD,V,cE){if(cE==undefined)cE=this.getView();
var cH=this.getColumnCount();
var R=this.getRowReference(cD,cE);

if(R==undefined){throw new Error("__set: could not find the row corresponding to index "+cD+" in view "+cE);
return;
}this.__saveSelection();
var cF=false;
if(cC>=0&&cC<cH){if(R[cC]===V){return ;
}else{if(this.__indices[cC]!=undefined)this.__updateUserIndices(cC,R[cC],V);
R[cC]=V;
}cF=(this.isSorted()&&(cC===this.__sortColumnIndex));
}else{for(var cG=0;cG<V.length&&cG<cH;cG++){if(this.__indices[cG]!=undefined)this.__updateUserIndices(cG,R[cG],V[cG]);
R[cG]=V[cG];
}if(this.isSorted()&&V.length>=this.__sortColumnIndex)cF=true;
}this.__propagateRowChangeToAllViews(R,cF);
this.__restoreSelection();
},__propagateRowChangeToAllViews:function(R,cb,cc,cd){if(cc==undefined)cc=false;

if(cd==undefined)cd=true;
for(var v=(cc?1:0);v<this.__views;v++){var cg=this.__getRowIndex(v,R);
var ce,cf;

if(v==0){ce=false;
cf=false;
}else{ce=(this.__getRowIndex(v,R)==undefined);
cf=this.__row_is_filtered(v,R);
}if(cb){if(!ce){this.__removeRows(v,[R]);
}if(!cf)this.__insertRows(v,[R],false);
else{}}else{if(ce!=cf){if(cf){this.__removeRows(v,[R]);
}else{this.__insertRows(v,[R],false);
}}}if(cd)this.__notifyDataChanged();
}},setValue:function(bw,bx,by,bz){this.__set(bw,bx,by,bz);
},setValueById:function(ck,cl,cm,cn){return this.setValue(this.getColumnIndexById(ck),cl,cm,cn);
},setRow:function(ey,ez,eA){this.__set(-1,ey,ez,eA);
},setRows:function(ch,ci,cj){if(cj==undefined)cj=this.getView();
for(var i=0;i<ch.length;i++)this.setRow(ci+i,ch[i],cj);
},setData:function(bM,bN){if(bN==undefined)bN=true;

if(bM==null||bM.length==0){this.clearAllRows();
this.__clearSelection();
return;
}var A=[];

if(bN){A=[];

for(var i=0;i<bM.length;i++)A.push(bM[i].slice(0));
}else A=bM.slice(0);
this.__clearSelection();
this.__assignRowIDs(A);
this.__setRowArray(0,A);
this.__evalAllFilters(false,false);
if(this.isSorted())this._resort();
else this.__updateAssociationMaps();
},addRows:function(dj,dk,dl){{};

if(dk==undefined)dk=true;

if(dl==undefined)dl=true;

if(!dj||dj.length==0)return;
this.__saveSelection();
var dp=(new Date()).getTime();
var A=dk?[]:dj;

if(dk)for(var i=0;i<dj.length;i++)A.push(dj[i].slice(0));
this.__assignRowIDs(A);
var dn=this.getComparator();
A.sort(dn);
for(var v=0;v<this.__views;v++)this.__insertRows(v,A,true,true);
this.__restoreSelection();

if(dl)this.__notifyDataChanged();
var dm=(new Date()).getTime();
this.__debug(bl+(dm-dp)+M);
},removeRows:function(t,u,w,x){if(w==undefined)w=this.getView();

if(x==undefined)x=true;
var A=this.getRowArray(w);

if(t==undefined)t=0;

if(u==undefined)u=A.length-t;
if(A.length==0)throw new Error("removeRows: attempt to remove rows from empty view");

if(t<0||t>A.length)throw new Error("removeRows: startIndex out of bounds: "+t+" (0.."+(A.length-1)+")");

if(u<0||t+u-1>=A.length)throw new Error("removeRows: howMany out of bounds: "+u+" (0.."+(A.length-t)+")");
var y=[];

for(var i=0;i<u;i++)y.push(A[t+i]);
this.removeReferencedRows(y,x);
},removeReferencedRows:function(cp,cq){if(cq==undefined)cq=true;
this.__saveSelection();

for(var v=0;v<this.__views;v++)this.__removeRows(v,cp);
this.__restoreSelection();

if(cq)this.__notifyDataChanged();
},clearAllRows:function(){if(this.getRowCount()>0){this.__clearSelection();

for(var v=0;v<this.__views;v++)this.__backingstore[v]=[];
this.__updateAssociationMaps();
this.__notifyDataChanged();
}},forceRedraw:function(){this.__notifyDataChanged();
},__testAllFilters:function(dX,R,dY){if(dY==undefined)dY=true;
var ee=this.__getFilters(dX);
var ef=ee.length;
if(dY&&ef==1)return ee[0](R);
if(ef==0)return dY?true:R;
var eg=this.__getConjunction(dX);
function eb(bm){if(eg===F){for(var i=0;i<ef;i++)if(ee[i](bm))return true;
return false;
}else{for(var i=0;i<ef;i++)if(!ee[i](bm))return false;
return true;
}}if(dY)return eb(R);
var ec=R.length;
var ed=[];

for(var r=0;r<ec;r++){var ea=R[r];

if(eb(ea))ed.push(ea);
}return ed;
},__row_is_filtered:function(z,R){return !this.__testAllFilters(z,R,true);
},__evalFilters:function(dS,dT,dU){if(!dS)return;

if(dT==undefined)dT=true;

if(dU==undefined)dU=true;
var U=this.getRowArray(0);
this.__setRowArray(dS,this.__testAllFilters(dS,U,false));
if(dU)this.__updateAssociationMaps(dS);
if(dT&&this.getView()==dS)this.__notifyDataChanged(dS);
},__evalAllFilters:function(q,s){for(var v=1;v<this.__views;v++)this.__evalFilters(v,q,s);
},__ID:0,__assignRowIDs:function(A){for(var i=0;i<A.length;i++)A[i].__id=this.__ID++;
},__updateAssociationMaps:function(bt,bu){for(var v=0;v<this.__views;v++){if(bt!=undefined&&bt!=v)continue;
var A=this.getRowArray(v);
if(bu==undefined)this.__assoc[v]={};
for(var bv in this.__indices)if(bu==undefined||bu==bv)this.__indices[bv][v]={};
for(var j=0;j<A.length;j++){var R=A[j];

if(bu==undefined)this.__assoc[v][R.__id]=j;
for(var bv in this.__indices)if(bu==undefined||bu==bv){this.__indices[bv][v][K+R[bv]]=j;
}}}},__updateAssociationMapsAfterPush:function(ej,ek,el){var en=this.__getAssoc(ej);
var eo=el;
for(var i=0;i<ek.length;i++,eo++){var R=ek[i];
en[R.__id]=eo;
for(var em in this.__indices){this.__indices[em][ej][K+R[em]]=eo;
}}},__updateUserIndices:function(cY,da,db){da=K+da;
db=K+db;

for(var de=0;de<this.__views;de++){for(var dc in this.__indices){var dd=this.__indices[dc][de][da];
this.__indices[dc][de][da]=undefined;
this.__indices[dc][de][db]=dd;
}}},__getRowIndex:function(bL,R){try{if(R.__id==undefined){return undefined;
}}catch(e){this.__debug(e);
return undefined;
}
for(var v=0;v<this.__views;v++){var r=this.__getAssoc(v)[R.__id];
}return this.__getAssoc(bL)[R.__id];
},isSorted:function(){return this.getSortColumnIndex()!=-1;
},getComparator:function(df,dg){if(df==undefined)df=this.__sortColumnIndex;

if(dg==undefined)dg=this.__sortAscending;
var di;
var dh=this.getSortMethods(df);

if(dh)di=(dg?dh.ascending:dh.descending);
else if(this.getCaseSensitiveSorting())di=(dg?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
else di=(dg?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
di.columnIndex=df;
return di;
},sortByColumn:function(dq,dr,ds){if(ds==undefined)ds=false;
this.__saveSelection();
if(!ds&&this.__sortColumnIndex==dq){if(this.__sortAscending==dr)return ;
for(var v=0;v<this.__views;v++)this.getRowArray(v).reverse();
this.__sortAscending=dr;
}else{this.__sortColumnIndex=dq;
this.__sortAscending=dr;
var dt=this.getComparator();
dt.columnIndex=dq;
for(var v=0;v<this.__views;v++)this.getRowArray(v).sort(dt);
}this.__updateAssociationMaps();
this.__restoreSelection();
this.fireEvent(bg);
},_resort:function(){if(this.isSorted())this.sortByColumn(this.__sortColumnIndex,this.__sortAscending,true);
},setSortMethods:function(cs,ct){arguments.callee.base.apply(this,arguments);
if(cs==this.__sortColumnIndex)this._resort();
},__notifyDataChanged:function(er){if(this.hasListener(H)){if(er==undefined)er=this.getView();
var es={firstRow:0,lastRow:this.getRowCount(er)-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(H,es);
}},__binsearch:function(A,e,bU,bV,bW){if(bV==undefined)bV=0;

if(bW==undefined)bW=A.length-1;

while(bV<=bW){var bX=(bV+bW)>>>1;
var bY=bU(A[bX],e);

if(bY<0)bV=bX+1;
else if(bY>0)bW=bX-1;
else return bX;
}return -(bV+1);
},__debug:function(eh){if(false||true)if(this.___debug)this.debug(eh);
},__debugobj:function(cu,cv,cw){if(cv==undefined)cv=K;

if(cw==undefined)cw=true;
this.__debug(cv+N+(cu?(cu+bf):X));

if(cu==null||cu==undefined){this.__debug(O);
return;
}
for(var cx in cu){if(cw&&!cu.hasOwnProperty(cx))continue;
this.__debug(P+cx+D+cu[cx]);
}}},destruct:function(){this.__filters=null;
this.__views=null;
this.__conjunctions=null;
this.__backingstore=null;
this.__assoc=null;
this.__indices=null;
this.__selection_stack=null;
}});
})();
(function(){var dn="Function",dm="Boolean",dl="column-button",dk="qx.event.type.Data",dj="statusbar",di="qx.ui.table.pane.CellEvent",dh="PageUp",dg="changeLocale",df="changeSelection",de="qx.dynlocale",eA="Enter",ez="metaDataChanged",ey="dataChanged",ex="__emptyTableModel",ew="on",ev="_applyStatusBarVisible",eu="columnVisibilityMenuCreateStart",et="blur",es="qx.ui.table.Table",er="columnVisibilityMenuCreateEnd",dv="Use 'resetSelection' instead.",dw="verticalScrollBarChanged",dt="_applyMetaColumnCounts",du="one of one row",dr="focus",ds="changeDataRowRenderer",dp="changeHeaderCellHeight",dq="Escape",dD="A",dE="changeSelectionModel",dS="Left",dO="Down",eb="Integer",dV="_applyHeaderCellHeight",en="visibilityChanged",eh="qx.ui.table.ITableModel",dJ="orderChanged",eq="_applySelectionModel",ep="menu",eo="_applyAdditionalStatusBarText",dH="_applyFocusCellOnMouseMove",dL="table",dN="_applyColumnVisibilityButtonVisible",dQ="changeTableModel",dT="qx.event.type.Event",dW="__columnMenuButtons",ed="tableWidthChanged",ej="End",dx="Object",dy="_applyShowCellFocusIndicator",dK="resize",ea="changeScrollY",dY="_applyTableModel",dX="__columnModel",ef="menu-button",ee="_applyKeepFirstVisibleRowComplete",dU="widthChanged",ec="Home",db="_applyRowHeight",ei="F2",dz="appear",dA="Up",dP="%1 rows",dc="qx.ui.table.selection.Model",dd="one row",dG="__selectionManager",dB="PageDown",dC="%1 of %2 rows",dF="keypress",dR="changeRowHeight",el="Number",ek="changeVisible",dM="__scrollerParent",em="qx.ui.table.IRowRenderer",dI="Right",eg="Space";
qx.Class.define(es,{extend:qx.ui.core.Widget,construct:function(ck,cl){arguments.callee.base.call(this);
if(!cl){cl={};
}
if(cl.selectionManager){this.setNewSelectionManager(cl.selectionManager);
}
if(cl.selectionModel){this.setNewSelectionModel(cl.selectionModel);
}
if(cl.tableColumnModel){this.setNewTableColumnModel(cl.tableColumnModel);
}
if(cl.tablePane){this.setNewTablePane(cl.tablePane);
}
if(cl.tablePaneHeader){this.setNewTablePaneHeader(cl.tablePaneHeader);
}
if(cl.tablePaneScroller){this.setNewTablePaneScroller(cl.tablePaneScroller);
}
if(cl.tablePaneModel){this.setNewTablePaneModel(cl.tablePaneModel);
}
if(cl.columnMenu){this.setNewColumnMenu(cl.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__scrollerParent=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__scrollerParent,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__selectionManager=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(ck||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(dF,this._onKeyPress);
this.addListener(dr,this._onFocusChanged);
this.addListener(et,this._onFocusChanged);
var cm=new qx.ui.core.Widget().set({height:0});
this._add(cm);
cm.addListener(dK,this._onResize,this);
this.__focusedCol=null;
this.__focusedRow=null;
if(qx.core.Variant.isSet(de,ew)){qx.locale.Manager.getInstance().addListener(dg,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":dk,"columnVisibilityMenuCreateEnd":dk,"tableWidthChanged":dT,"verticalScrollBarChanged":dk,"cellClick":di,"cellDblclick":di,"cellContextmenu":di,"dataEdited":dk},statics:{__redirectEvents:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:dL},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:dc,apply:eq,event:dE},tableModel:{check:eh,apply:dY,event:dQ},rowHeight:{check:el,init:20,apply:db,event:dR},forceLineHeight:{check:dm,init:true},headerCellHeight:{check:eb,init:16,apply:dV,event:dp,nullable:true},statusBarVisible:{check:dm,init:true,apply:ev},additionalStatusBarText:{nullable:true,init:null,apply:eo},columnVisibilityButtonVisible:{check:dm,init:true,apply:dN},metaColumnCounts:{check:dx,apply:dt},focusCellOnMouseMove:{check:dm,init:false,apply:dH},rowFocusChangeModifiesSelection:{check:dm,init:true},showCellFocusIndicator:{check:dm,init:true,apply:dy},keepFirstVisibleRowComplete:{check:dm,init:true,apply:ee},alwaysUpdateCells:{check:dm,init:false},dataRowRenderer:{check:em,init:null,nullable:true,event:ds},modalCellEditorPreOpenFunction:{check:dn,init:null,nullable:true},newColumnMenu:{check:dn,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:dn,init:function(bU){return new qx.ui.table.selection.Manager(bU);
}},newSelectionModel:{check:dn,init:function(eR){return new qx.ui.table.selection.Model(eR);
}},newTableColumnModel:{check:dn,init:function(bk){return new qx.ui.table.columnmodel.Basic(bk);
}},newTablePane:{check:dn,init:function(bF){return new qx.ui.table.pane.Pane(bF);
}},newTablePaneHeader:{check:dn,init:function(eE){return new qx.ui.table.pane.Header(eE);
}},newTablePaneScroller:{check:dn,init:function(eQ){return new qx.ui.table.pane.Scroller(eQ);
}},newTablePaneModel:{check:dn,init:function(bT){return new qx.ui.table.pane.Model(bT);
}}},members:{__focusedCol:null,__focusedRow:null,__scrollerParent:null,__selectionManager:null,__additionalStatusBarText:null,__lastRowCount:null,__internalChange:null,__columnMenuButtons:null,__columnModel:null,__emptyTableModel:null,_createChildControlImpl:function(Q){var R;

switch(Q){case dj:R=new qx.ui.basic.Label();
R.set({allowGrowX:true});
this._add(R);
break;
case dl:R=this.getNewColumnMenu()();
R.set({focusable:false});
var S=R.factory(ep,{table:this});
S.addListener(dz,this._initColumnMenu,this);
break;
}return R||arguments.callee.base.call(this,Q);
},_applySelectionModel:function(ci,cj){this.__selectionManager.setSelectionModel(ci);

if(cj!=null){cj.removeListener(df,this._onSelectionChanged,this);
}ci.addListener(df,this._onSelectionChanged,this);
},_applyRowHeight:function(bG,bH){var bI=this._getPaneScrollerArr();

for(var i=0;i<bI.length;i++){bI[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(bd,be){var bf=this._getPaneScrollerArr();

for(var i=0;i<bf.length;i++){bf[i].getHeader().setHeight(bd);
}},getEmptyTableModel:function(){if(!this.__emptyTableModel){this.__emptyTableModel=new qx.ui.table.model.Simple();
this.__emptyTableModel.setColumns([]);
this.__emptyTableModel.setData([]);
}return this.__emptyTableModel;
},_applyTableModel:function(cR,cS){this.getTableColumnModel().init(cR.getColumnCount(),this);

if(cS!=null){cS.removeListener(ez,this._onTableModelMetaDataChanged,this);
cS.removeListener(ey,this._onTableModelDataChanged,this);
}cR.addListener(ez,this._onTableModelMetaDataChanged,this);
cR.addListener(ey,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,cR.getRowCount(),0,cR.getColumnCount());
this._onTableModelMetaDataChanged();
},getTableColumnModel:function(){if(!this.__columnModel){var cz=this.__columnModel=this.getNewTableColumnModel()(this);
cz.addListener(en,this._onColVisibilityChanged,this);
cz.addListener(dU,this._onColWidthChanged,this);
cz.addListener(dJ,this._onColOrderChanged,this);
var cy=this.getTableModel();
cz.init(cy.getColumnCount(),this);
var cw=this._getPaneScrollerArr();

for(var i=0;i<cw.length;i++){var cx=cw[i];
var cA=cx.getTablePaneModel();
cA.setTableColumnModel(cz);
}}return this.__columnModel;
},_applyStatusBarVisible:function(eF,eG){if(eF){this._showChildControl(dj);
}else{this._excludeChildControl(dj);
}
if(eF){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(eB,eC){this.__additionalStatusBarText=eB;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(E,F){if(E){this._showChildControl(dl);
}else{this._excludeChildControl(dl);
}},_applyMetaColumnCounts:function(cB,cC){var cJ=cB;
var cD=this._getPaneScrollerArr();
var cH={};

if(cB>cC){var cL=qx.event.Registration.getManager(cD[0]);

for(var cM in qx.ui.table.Table.__redirectEvents){cH[cM]={};
cH[cM].capture=cL.getListeners(cD[0],cM,true);
cH[cM].bubble=cL.getListeners(cD[0],cM,false);
}}this._cleanUpMetaColumns(cJ.length);
var cI=0;

for(var i=0;i<cD.length;i++){var cN=cD[i];
var cK=cN.getTablePaneModel();
cK.setFirstColumnX(cI);
cK.setMaxColumnCount(cJ[i]);
cI+=cJ[i];
}if(cJ.length>cD.length){var cG=this.getTableColumnModel();

for(var i=cD.length;i<cJ.length;i++){var cK=this.getNewTablePaneModel()(cG);
cK.setFirstColumnX(cI);
cK.setMaxColumnCount(cJ[i]);
cI+=cJ[i];
var cN=this.getNewTablePaneScroller()(this);
cN.setTablePaneModel(cK);
cN.addListener(ea,this._onScrollY,this);
for(cM in qx.ui.table.Table.__redirectEvents){if(!cH[cM]){break;
}
if(cH[cM].capture&&cH[cM].capture.length>0){var cE=cH[cM].capture;

for(var i=0;i<cE.length;i++){var cF=cE[i].context;

if(!cF){cF=this;
}else if(cF==cD[0]){cF=cN;
}cN.addListener(cM,cE[i].handler,cF,true);
}}
if(cH[cM].bubble&&cH[cM].bubble.length>0){var cP=cH[cM].bubble;

for(var i=0;i<cP.length;i++){var cF=cP[i].context;

if(!cF){cF=this;
}else if(cF==cD[0]){cF=cN;
}cN.addListener(cM,cP[i].handler,cF,false);
}}}var cO=(i==cJ.length-1)?1:0;
this.__scrollerParent.add(cN,{flex:cO});
cD=this._getPaneScrollerArr();
}}for(var i=0;i<cD.length;i++){var cN=cD[i];
var cQ=(i==(cD.length-1));
cN.getHeader().setHeight(this.getHeaderCellHeight());
cN.setTopRightWidget(cQ?this.getChildControl(dl):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(dl);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(bJ,bK){var bL=this._getPaneScrollerArr();

for(var i=0;i<bL.length;i++){bL[i].setFocusCellOnMouseMove(bJ);
}},_applyShowCellFocusIndicator:function(by,bz){var bA=this._getPaneScrollerArr();

for(var i=0;i<bA.length;i++){bA[i].setShowCellFocusIndicator(by);
}},_applyKeepFirstVisibleRowComplete:function(bl,bm){var bn=this._getPaneScrollerArr();

for(var i=0;i<bn.length;i++){bn[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__selectionManager;
},_getPaneScrollerArr:function(){return this.__scrollerParent.getChildren();
},getPaneScroller:function(bP){return this._getPaneScrollerArr()[bP];
},_cleanUpMetaColumns:function(G){var H=this._getPaneScrollerArr();

if(H!=null){for(var i=H.length-1;i>=G;i--){H[i].destroy();
}}},_onChangeLocale:function(n){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(bR){var bS=this._getPaneScrollerArr();

for(var i=0;i<bS.length;i++){bS[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(cV){var cW=this._getPaneScrollerArr();

for(var i=0;i<cW.length;i++){cW[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(cT){var cU=cT.getData();
this._updateTableData(cU.firstRow,cU.lastRow,cU.firstColumn,cU.lastColumn,cU.removeStart,cU.removeCount);
},_updateTableData:function(v,w,y,z,A,B){var C=this._getPaneScrollerArr();
if(B){this.getSelectionModel().removeSelectionInterval(A,A+B);
}
for(var i=0;i<C.length;i++){C[i].onTableModelDataChanged(v,w,y,z);
}var D=this.getTableModel().getRowCount();

if(D!=this.__lastRowCount){this.__lastRowCount=D;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(bq){if(!this.__internalChange){this.__internalChange=true;
var br=this._getPaneScrollerArr();

for(var i=0;i<br.length;i++){br[i].setScrollY(bq.getData());
}this.__internalChange=false;
}},_onKeyPress:function(eH){if(!this.getEnabled()){return;
}var eO=this.__focusedRow;
var eL=true;
var eP=eH.getKeyIdentifier();

if(this.isEditing()){if(eH.getModifiers()==0){switch(eP){case eA:this.stopEditing();
var eO=this.__focusedRow;
this.moveFocusedCell(0,1);

if(this.__focusedRow!=eO){eL=this.startEditing();
}break;
case dq:this.cancelEditing();
this.focus();
break;
default:eL=false;
break;
}}return;
}else{if(eH.isCtrlPressed()){eL=true;

switch(eP){case dD:var eM=this.getTableModel().getRowCount();

if(eM>0){this.getSelectionModel().setSelectionInterval(0,eM-1);
}break;
default:eL=false;
break;
}}else{switch(eP){case eg:this.__selectionManager.handleSelectKeyDown(this.__focusedRow,eH);
break;
case ei:case eA:eL=this.startEditing();
break;
case ec:this.setFocusedCell(this.__focusedCol,0,true);
break;
case ej:var eM=this.getTableModel().getRowCount();
this.setFocusedCell(this.__focusedCol,eM-1,true);
break;
case dS:this.moveFocusedCell(-1,0);
break;
case dI:this.moveFocusedCell(1,0);
break;
case dA:this.moveFocusedCell(0,-1);
break;
case dO:this.moveFocusedCell(0,1);
break;
case dh:case dB:var eK=this.getPaneScroller(0);
var eN=eK.getTablePane();
var eM=eN.getVisibleRowCount()-1;
var eJ=this.getRowHeight();
var eI=(eP==dh)?-1:1;
eK.setScrollY(eK.getScrollY()+eI*eM*eJ);
this.moveFocusedCell(0,eI*eM);
break;
default:eL=false;
}}}
if(eO!=this.__focusedRow&&this.getRowFocusChangeModifiesSelection()){this.__selectionManager.handleMoveKeyDown(this.__focusedRow,eH);
}
if(eL){eH.preventDefault();
eH.stopPropagation();
}},_onFocusChanged:function(T){var U=this._getPaneScrollerArr();

for(var i=0;i<U.length;i++){U[i].onFocusChanged();
}},_onColVisibilityChanged:function(cn){var co=this._getPaneScrollerArr();

for(var i=0;i<co.length;i++){co[i].onColVisibilityChanged();
}var cp=cn.getData();

if(this.__columnMenuButtons!=null&&cp.col!=null&&cp.visible!=null){this.__columnMenuButtons[cp.col].setVisible(cp.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(bM){var bN=this._getPaneScrollerArr();

for(var i=0;i<bN.length;i++){var bO=bM.getData();
bN[i].setColumnWidth(bO.col,bO.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(k){var m=this._getPaneScrollerArr();

for(var i=0;i<m.length;i++){m[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(bw){var bx=this._getMetaColumnAtPageX(bw);
return (bx!=-1)?this.getPaneScroller(bx):null;
},setFocusedCell:function(M,N,O){if(!this.isEditing()&&(M!=this.__focusedCol||N!=this.__focusedRow)){if(M===null){M=0;
}this.__focusedCol=M;
this.__focusedRow=N;
var P=this._getPaneScrollerArr();

for(var i=0;i<P.length;i++){P[i].setFocusedCell(M,N);
}
if(M!==null&&O){this.scrollCellVisible(M,N);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,dv);
this.resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__focusedCol;
},getFocusedRow:function(){return this.__focusedRow;
},highlightFocusedRow:function(j){this.getDataRowRenderer().setHighlightFocusRow(j);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var bV=this._getPaneScrollerArr();

for(var i=0;i<bV.length;i++){bV[i].onFocusChanged();
}},moveFocusedCell:function(o,p){var t=this.__focusedCol;
var u=this.__focusedRow;

if(t===null||u===null){return;
}
if(o!=0){var s=this.getTableColumnModel();
var x=s.getVisibleX(t);
var r=s.getVisibleColumnCount();
x=qx.lang.Number.limit(x+o,0,r-1);
t=s.getVisibleColumnAtX(x);
}
if(p!=0){var q=this.getTableModel();
u=qx.lang.Number.limit(u+p,0,q.getRowCount()-1);
}this.setFocusedCell(t,u,true);
},scrollCellVisible:function(cq,cr){var cs=this.getTableColumnModel();
var x=cs.getVisibleX(cq);
var ct=this._getMetaColumnAtColumnX(x);

if(ct!=-1){this.getPaneScroller(ct).scrollCellVisible(cq,cr);
}},isEditing:function(){if(this.__focusedCol!=null){var x=this.getTableColumnModel().getVisibleX(this.__focusedCol);
var cX=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(cX).isEditing();
}return false;
},startEditing:function(){if(this.__focusedCol!=null){var x=this.getTableColumnModel().getVisibleX(this.__focusedCol);
var da=this._getMetaColumnAtColumnX(x);
var cY=this.getPaneScroller(da).startEditing();
return cY;
}return false;
},stopEditing:function(){if(this.__focusedCol!=null){var x=this.getTableColumnModel().getVisibleX(this.__focusedCol);
var a=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(a).stopEditing();
}},cancelEditing:function(){if(this.__focusedCol!=null){var x=this.getTableColumnModel().getVisibleX(this.__focusedCol);
var bY=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(bY).cancelEditing();
}},updateContent:function(){var eD=this._getPaneScrollerArr();

for(var i=0;i<eD.length;i++){eD[i].getTablePane().updateContent();
}},_getMetaColumnAtPageX:function(b){var c=this._getPaneScrollerArr();

for(var i=0;i<c.length;i++){var d=c[i].getContainerLocation();

if(b>=d.left&&b<=d.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(bB){var bD=this.getMetaColumnCounts();
var bE=0;

for(var i=0;i<bD.length;i++){var bC=bD[i];
bE+=bC;

if(bC==-1||bB<bE){return i;
}}return -1;
},_updateStatusBar:function(){var e=this.getTableModel();

if(this.getStatusBarVisible()){var f=this.getSelectionModel().getSelectedCount();
var h=e.getRowCount();
var g;

if(h>=0){if(f==0){g=this.trn(dd,dP,h,h);
}else{g=this.trn(du,dC,h,f,h);
}}
if(this.__additionalStatusBarText){if(g){g+=this.__additionalStatusBarText;
}else{g=this.__additionalStatusBarText;
}}
if(g){this.getChildControl(dj).setValue(g);
}}},_updateScrollerWidths:function(){var bs=this._getPaneScrollerArr();

for(var i=0;i<bs.length;i++){var bu=(i==(bs.length-1));
var bv=bs[i].getTablePaneModel().getTotalWidth();
bs[i].setPaneWidth(bv);
var bt=bu?1:0;
bs[i].setLayoutProperties({flex:bt});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var cd=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var cg=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var ca=this._getPaneScrollerArr();
var cc=false;
var cf=false;

for(var i=0;i<ca.length;i++){var ch=(i==(ca.length-1));
var cb=ca[i].getNeededScrollBars(cc,!ch);

if(cb&cd){cc=true;
}
if(ch&&(cb&cg)){cf=true;
}}for(var i=0;i<ca.length;i++){var ch=(i==(ca.length-1));
var ce;
ca[i].setHorizontalScrollBarVisible(cc);
if(ch){ce=ca[i].getVerticalScrollBarVisible();
}ca[i].setVerticalScrollBarVisible(ch&&cf);
if(ch&&cf!=ce){this.fireDataEvent(dw,cf);
}}},_initColumnMenu:function(){var X=this.getTableModel();
var Y=this.getTableColumnModel();
var ba=this.getChildControl(dl);
ba.empty();
var W=ba.getMenu();
var bb={table:this,menu:W,columnButton:ba};
this.fireDataEvent(eu,bb);
this.__columnMenuButtons={};

for(var bc=0,l=X.getColumnCount();bc<l;bc++){var V=ba.factory(ef,{text:X.getColumnName(bc),column:bc,bVisible:Y.isColumnVisible(bc)});
qx.core.Assert.assertInterface(V,qx.ui.table.IColumnMenuItem);
V.addListener(ek,this._createColumnVisibilityCheckBoxHandler(bc),this);
this.__columnMenuButtons[bc]=V;
}var bb={table:this,menu:W,columnButton:ba};
this.fireDataEvent(er,bb);
},_createColumnVisibilityCheckBoxHandler:function(bQ){return function(bW){var bX=this.getTableColumnModel();
bX.setColumnVisible(bQ,bW.getData());
};
},setColumnWidth:function(bo,bp){this.getTableColumnModel().setColumnWidth(bo,bp);
},_onResize:function(){this.fireEvent(ed);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(bg,bh,self,bi){if(arguments.callee.self.__redirectEvents[bg]){for(var i=0,bj=this._getPaneScrollerArr();i<bj.length;i++){bj[i].addListener.apply(bj[i],arguments);
}}else{return arguments.callee.base.call(this,bg,bh,self,bi);
}},removeListener:function(I,J,self,K){if(arguments.callee.self.__redirectEvents[I]){for(var i=0,L=this._getPaneScrollerArr();i<L.length;i++){L[i].removeListener.apply(L[i],arguments);
}}else{arguments.callee.base.call(this,I,J,self,K);
}},destroy:function(){this.getChildControl(dl).getMenu().destroy();
arguments.callee.base.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(de,ew)){qx.locale.Manager.getInstance().removeListener(dg,this._onChangeLocale,this);
}var cv=this.getSelectionModel();

if(cv){cv.dispose();
}var cu=this.getDataRowRenderer();

if(cu){cu.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(dG,dM,ex,ex,dX);
this._disposeMap(dW);
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(S,T,U){arguments.callee.base.call(this);

if(S){this.setSpacing(S);
}
if(T){this.setAlignY(T);
}
if(U){this.setSeparator(U);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__heights:null,__flexs:null,__enableFlex:null,__children:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__rebuildCache:function(){var t=this._getLayoutChildren();
var length=t.length;
var p=false;
var o=this.__heights&&this.__heights.length!=length&&this.__flexs&&this.__heights;
var r;
var q=o?this.__heights:new Array(length);
var s=o?this.__flexs:new Array(length);
if(this.getReversed()){t=t.concat().reverse();
}for(var i=0;i<length;i++){r=t[i].getLayoutProperties();

if(r.height!=null){q[i]=parseFloat(r.height)/100;
}
if(r.flex!=null){s[i]=r.flex;
p=true;
}else{s[i]=0;
}}if(!o){this.__heights=q;
this.__flexs=s;
}this.__enableFlex=p;
this.__children=t;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(u,v){if(this._invalidChildrenCache){this.__rebuildCache();
}var C=this.__children;
var length=C.length;
var M=qx.ui.layout.Util;
var L=this.getSpacing();
var P=this.getSeparator();

if(P){var z=M.computeVerticalSeparatorGaps(C,L,P);
}else{var z=M.computeVerticalGaps(C,L,true);
}var i,x,y,G;
var H=[];
var N=z;

for(i=0;i<length;i+=1){G=this.__heights[i];
y=G!=null?Math.floor((v-z)*G):C[i].getSizeHint().height;
H.push(y);
N+=y;
}if(this.__enableFlex&&N!=v){var E={};
var K,O;

for(i=0;i<length;i+=1){K=this.__flexs[i];

if(K>0){D=C[i].getSizeHint();
E[i]={min:D.minHeight,value:H[i],max:D.maxHeight,flex:K};
}}var A=M.computeFlexOffsets(E,v,N);

for(i in A){O=A[i].offset;
H[i]+=O;
N+=O;
}}var top=C[0].getMarginTop();
if(N<v&&this.getAlignY()!=m){top=v-N;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var D,R,I,y,F,J,B;
this._clearSeparators();
if(P){var Q=qx.theme.manager.Decoration.getInstance().resolve(P).getInsets();
var w=Q.top+Q.bottom;
}for(i=0;i<length;i+=1){x=C[i];
y=H[i];
D=x.getSizeHint();
J=x.getMarginLeft();
B=x.getMarginRight();
I=Math.max(D.minWidth,Math.min(u-J-B,D.maxWidth));
R=M.computeHorizontalAlignOffset(x.getAlignX()||this.getAlignX(),I,u,J,B);
if(i>0){if(P){top+=F+L;
this._renderSeparator(P,{top:top,left:0,height:w,width:u});
top+=w+L+x.getMarginTop();
}else{top+=M.collapseMargins(L,F,x.getMarginTop());
}}x.renderLayout(R,top,I,y);
top+=y;
F=x.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__rebuildCache();
}var bc=qx.ui.layout.Util;
var bk=this.__children;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__flexs[i];
var Y=this.__heights[i];

if(bg){X+=W.minHeight;
}else if(Y){ba=Math.max(ba,Math.round(W.minHeight/Y));
}else{X+=W.height;
}bj=bh.getMarginLeft()+bh.getMarginRight();
if((W.width+bj)>bd){bd=W.width+bj;
}if((W.minWidth+bj)>V){V=W.minWidth+bj;
}}X+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeVerticalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeVerticalGaps(bk,bf,true);
}return {minHeight:X+be,height:bb+be,minWidth:V,width:bd};
}},destruct:function(){this.__heights=this.__flexs=this.__children=null;
}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(S,T,U){arguments.callee.base.call(this);

if(S){this.setSpacing(S);
}
if(T){this.setAlignX(T);
}
if(U){this.setSeparator(U);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__widths:null,__flexs:null,__enableFlex:null,__children:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__rebuildCache:function(){var t=this._getLayoutChildren();
var length=t.length;
var q=false;
var o=this.__widths&&this.__widths.length!=length&&this.__flexs&&this.__widths;
var r;
var p=o?this.__widths:new Array(length);
var s=o?this.__flexs:new Array(length);
if(this.getReversed()){t=t.concat().reverse();
}for(var i=0;i<length;i++){r=t[i].getLayoutProperties();

if(r.width!=null){p[i]=parseFloat(r.width)/100;
}
if(r.flex!=null){s[i]=r.flex;
q=true;
}else{s[i]=0;
}}if(!o){this.__widths=p;
this.__flexs=s;
}this.__enableFlex=q;
this.__children=t;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(u,v){if(this._invalidChildrenCache){this.__rebuildCache();
}var B=this.__children;
var length=B.length;
var K=qx.ui.layout.Util;
var J=this.getSpacing();
var N=this.getSeparator();

if(N){var y=K.computeHorizontalSeparatorGaps(B,J,N);
}else{var y=K.computeHorizontalGaps(B,J,true);
}var i,w,H,G;
var M=[];
var C=y;

for(i=0;i<length;i+=1){G=this.__widths[i];
H=G!=null?Math.floor((u-y)*G):B[i].getSizeHint().width;
M.push(H);
C+=H;
}if(this.__enableFlex&&C!=u){var E={};
var I,L;

for(i=0;i<length;i+=1){I=this.__flexs[i];

if(I>0){D=B[i].getSizeHint();
E[i]={min:D.minWidth,value:M[i],max:D.maxWidth,flex:I};
}}var z=K.computeFlexOffsets(E,u,C);

for(i in z){L=z[i].offset;
M[i]+=L;
C+=L;
}}var R=B[0].getMarginLeft();
if(C<u&&this.getAlignX()!=m){R=u-C;

if(this.getAlignX()===k){R=Math.round(R/2);
}}var D,top,x,H,A,P,F;
var J=this.getSpacing();
this._clearSeparators();
if(N){var O=qx.theme.manager.Decoration.getInstance().resolve(N).getInsets();
var Q=O.left+O.right;
}for(i=0;i<length;i+=1){w=B[i];
H=M[i];
D=w.getSizeHint();
P=w.getMarginTop();
F=w.getMarginBottom();
x=Math.max(D.minHeight,Math.min(v-P-F,D.maxHeight));
top=K.computeVerticalAlignOffset(w.getAlignY()||this.getAlignY(),x,v,P,F);
if(i>0){if(N){R+=A+J;
this._renderSeparator(N,{left:R,top:0,width:Q,height:v});
R+=Q+J+w.getMarginLeft();
}else{R+=K.collapseMargins(J,A,w.getMarginLeft());
}}w.renderLayout(R,top,H,x);
R+=H;
A=w.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__rebuildCache();
}var bc=qx.ui.layout.Util;
var bk=this.__children;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__flexs[i];
var X=this.__widths[i];

if(bg){V+=W.minWidth;
}else if(X){ba=Math.max(ba,Math.round(W.minWidth/X));
}else{V+=W.width;
}bj=bh.getMarginTop()+bh.getMarginBottom();
if((W.height+bj)>bb){bb=W.height+bj;
}if((W.minHeight+bj)>Y){Y=W.minHeight+bj;
}}V+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeHorizontalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeHorizontalGaps(bk,bf,true);
}return {minWidth:V+be,width:bd+be,minHeight:Y,height:bb};
}},destruct:function(){this.__widths=this.__flexs=this.__children=null;
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(e,f){},getRowHeightStyle:function(b){},createRowStyle:function(d){},getRowClass:function(c){}}});
})();
(function(){var t="",s="table-row-background-even",r="table-row-background-selected",q="table-row",p="background-color:",o="table-row-background-focused",n=';border-bottom: 1px solid ',m=';color:',l="table-row-selected",k="table-row-background-odd",d="default",j="table-row-background-focused-selected",g="qx.ui.table.rowrenderer.Default",c="table-row-line",b="'",f="height:",e=";",h="px;",a="1px solid ",i="Boolean";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){arguments.callee.base.call(this);
this.__fontStyleString=t;
this.__fontStyleString={};
this.__colors={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(d));
var A=qx.theme.manager.Color.getInstance();
this.__colors.bgcolFocusedSelected=A.resolve(j);
this.__colors.bgcolFocused=A.resolve(o);
this.__colors.bgcolSelected=A.resolve(r);
this.__colors.bgcolEven=A.resolve(s);
this.__colors.bgcolOdd=A.resolve(k);
this.__colors.colSelected=A.resolve(l);
this.__colors.colNormal=A.resolve(q);
this.__colors.horLine=A.resolve(c);
},properties:{highlightFocusRow:{check:i,init:true}},members:{__colors:null,__fontStyle:null,__fontStyleString:null,_insetY:1,_renderFont:function(y){if(y){this.__fontStyle=y.getStyles();
this.__fontStyleString=qx.bom.element.Style.compile(this.__fontStyle);
this.__fontStyleString=this.__fontStyleString.replace(/"/g,b);
}else{this.__fontStyleString=t;
this.__fontStyle=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(u,v){var x=this.__fontStyle;
var w=v.style;
qx.bom.element.Style.setStyles(v,x);

if(u.focusedRow&&this.getHighlightFocusRow()){w.backgroundColor=u.selected?this.__colors.bgcolFocusedSelected:this.__colors.bgcolFocused;
}else{if(u.selected){w.backgroundColor=this.__colors.bgcolSelected;
}else{w.backgroundColor=(u.row%2==0)?this.__colors.bgcolEven:this.__colors.bgcolOdd;
}}w.color=u.selected?this.__colors.colSelected:this.__colors.colNormal;
w.borderBottom=a+this.__colors.horLine;
},getRowHeightStyle:function(D){if(qx.bom.client.Feature.CONTENT_BOX){D-=this._insetY;
}return f+D+h;
},createRowStyle:function(B){var C=[];
C.push(e);
C.push(this.__fontStyleString);
C.push(p);

if(B.focusedRow&&this.getHighlightFocusRow()){C.push(B.selected?this.__colors.bgcolFocusedSelected:this.__colors.bgcolFocused);
}else{if(B.selected){C.push(this.__colors.bgcolSelected);
}else{C.push((B.row%2==0)?this.__colors.bgcolEven:this.__colors.bgcolOdd);
}}C.push(m);
C.push(B.selected?this.__colors.colSelected:this.__colors.colNormal);
C.push(n,this.__colors.horLine);
return C.join(t);
},getRowClass:function(z){return t;
}},destruct:function(){this.__colors=this.__fontStyle=this.__fontStyleString=null;
}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__executableBindingIds:null,__semaphore:false,__executeListenerId:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var u=this.getCommand();

if(u){if(this.__semaphore){this.__semaphore=false;
}else{this.__semaphore=true;
u.execute(this);
}}this.fireEvent(n);
},__onCommandExecute:function(e){if(this.__semaphore){this.__semaphore=false;
return;
}this.__semaphore=true;
this.execute();
},_applyCommand:function(o,p){if(p!=null){p.removeListenerById(this.__executeListenerId);
}
if(o!=null){this.__executeListenerId=o.addListener(n,this.__onCommandExecute,this);
}var s=this.__executableBindingIds;

if(s==null){this.__executableBindingIds=s={};
}
for(var i=0;i<this._bindableProperties.length;i++){var r=this._bindableProperties[i];
if(p!=null&&s[r]!=null){p.removeBinding(s[r]);
s[r]=null;
}if(o!=null&&qx.Class.hasProperty(this.constructor,r)){var q=o.get(r);

if(q==null){var t=this.get(r);
}s[r]=o.bind(r,this,r);
if(t){this.set(r,t);
}}}}},destruct:function(){this.__executableBindingIds=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(r,s,t){arguments.callee.base.call(this,r,s);

if(t!=null){this.setCommand(t);
}this.addListener(f,this._onMouseOver);
this.addListener(b,this._onMouseOut);
this.addListener(g,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(a,this._onKeyUp);
this.addListener(j,this._onStopEvent);
},properties:{appearance:{refine:true,init:c},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(n)){return;
}this.addState(o);
},release:function(){if(this.hasState(o)){this.removeState(o);
}},reset:function(){this.removeState(o);
this.removeState(n);
this.removeState(m);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(n);
this.addState(o);
},_onMouseUp:function(e){this.releaseCapture();
var p=this.hasState(o);
var q=this.hasState(n);

if(p){this.removeState(o);
}
if(q){this.removeState(n);
}else{this.addState(m);

if(p){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(n);
this.addState(o);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(o)){this.removeState(n);
this.removeState(o);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var l="pressed",k="hovered",j="changeVisibility",i="qx.ui.menu.Menu",h="submenu",g="Enter",f="contextmenu",d="changeMenu",c="qx.ui.form.MenuButton",b="abandoned",a="_applyMenu";
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(u,v,w){arguments.callee.base.call(this,u,v);
if(w!=null){this.setMenu(w);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(m,n){if(n){n.removeListener(j,this._onMenuChange,this);
n.resetOpener();
}
if(m){m.addListener(j,this._onMenuChange,this);
m.setOpener(this);
m.removeState(h);
m.removeState(f);
}},open:function(r){var s=this.getMenu();

if(s){qx.ui.menu.Manager.getInstance().hideAll();
s.setOpener(this);
s.open();
if(r){var t=s.getSelectables()[0];

if(t){s.setSelectedButton(t);
}}}},_onMenuChange:function(e){var p=this.getMenu();

if(p.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){var q=this.getMenu();

if(q){if(!q.isVisible()){this.open();
}else{q.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var o=this.getMenu();

if(o){if(!o.isVisible()){this.open();
}else{o.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var g="menu-button",f="table-column-reset-button",e="separator",d="appear",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){arguments.callee.base.call(this);
},members:{__columnMenuButtons:null,factory:function(h,j){switch(h){case a:var k=new qx.ui.menu.Menu();
this.setMenu(k);
k.addListener(d,function(){j.table._initColumnMenu.call(j.table);
},this);
return k;
case g:var n=new qx.ui.table.columnmenu.MenuItem(j.text);
n.setVisible(j.bVisible);
this.getMenu().add(n);
return n;
case c:var m=new qx.ui.menu.Button(j.text);
m.set({appearance:f});
return m;
case e:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+h);
}},empty:function(){var o=this.getMenu();
var p=o.getChildren();

for(var i=0,l=p.length;i<l;i++){p[0].destroy();
}}}});
})();
(function(){var u="keypress",t="interval",s="keydown",r="mousedown",q="keyup",p="__openTimer",o="blur",n="Enter",m="Up",l="__objects",d="Escape",k="__closeTimer",h="qx.ui.menu.Manager",c="Left",b="Down",g="Right",f="singleton",j="Space";
qx.Class.define(h,{type:f,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__objects=[];
var L=document.body;
var M=qx.event.Registration;
M.addListener(window.document.documentElement,r,this._onMouseDown,this,true);
M.addListener(L,s,this._onKeyUpDown,this,true);
M.addListener(L,q,this._onKeyUpDown,this,true);
M.addListener(L,u,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,o,this.hideAll,this);
this.__openTimer=new qx.event.Timer;
this.__openTimer.addListener(t,this._onOpenInterval,this);
this.__closeTimer=new qx.event.Timer;
this.__closeTimer.addListener(t,this._onCloseInterval,this);
},members:{__scheduleOpen:null,__scheduleClose:null,__openTimer:null,__closeTimer:null,__objects:null,_getChild:function(E,F,G,H){var I=E.getChildren();
var length=I.length;
var J;

for(var i=F;i<length&&i>=0;i+=G){J=I[i];

if(J.isEnabled()&&!J.isAnonymous()){return J;
}}
if(H){i=i==length?0:length-1;

for(;i!=F;i+=G){J=I[i];

if(J.isEnabled()&&!J.isAnonymous()){return J;
}}}return null;
},_isInMenu:function(K){while(K){if(K instanceof qx.ui.menu.Menu){return true;
}K=K.getLayoutParent();
}return false;
},_getMenuButton:function(w){while(w){if(w instanceof qx.ui.menu.AbstractButton){return w;
}w=w.getLayoutParent();
}return null;
},add:function(bo){{};
var bp=this.__objects;
bp.push(bo);
bo.setZIndex(1e6+bp.length);
},remove:function(S){{};
var T=this.__objects;

if(T){qx.lang.Array.remove(T,S);
}},hideAll:function(){var R=this.__objects;

if(R){for(var i=R.length-1;i>=0;i--){R[i].exclude();
}}},getActiveMenu:function(){var a=this.__objects;
return a.length>0?a[a.length-1]:null;
},scheduleOpen:function(Q){this.cancelClose(Q);
if(Q.isVisible()){if(this.__scheduleOpen){this.cancelOpen(this.__scheduleOpen);
}}else if(this.__scheduleOpen!=Q){this.__scheduleOpen=Q;
this.__openTimer.restartWith(Q.getOpenInterval());
}},scheduleClose:function(bn){this.cancelOpen(bn);
if(!bn.isVisible()){if(this.__scheduleClose){this.cancelClose(this.__scheduleClose);
}}else if(this.__scheduleClose!=bn){this.__scheduleClose=bn;
this.__closeTimer.restartWith(bn.getCloseInterval());
}},cancelOpen:function(N){if(this.__scheduleOpen==N){this.__openTimer.stop();
this.__scheduleOpen=null;
}},cancelClose:function(v){if(this.__scheduleClose==v){this.__closeTimer.stop();
this.__scheduleClose=null;
}},_onOpenInterval:function(e){this.__openTimer.stop();
this.__scheduleOpen.open();
this.__scheduleOpen=null;
},_onCloseInterval:function(e){this.__closeTimer.stop();
this.__scheduleClose.exclude();
this.__scheduleClose=null;
},_onMouseDown:function(e){var U=e.getTarget();
U=qx.ui.core.Widget.getWidgetByElement(U);
if(U==null){this.hideAll();
return;
}if(U.getMenu&&U.getMenu()&&U.getMenu().isVisible()){return;
}if(this.__objects.length>0&&!this._isInMenu(U)){this.hideAll();
}},__selectionKeys:{"Enter":1,"Space":1},__navigationKeys:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var bl=this.getActiveMenu();

if(!bl){return;
}var bm=e.getKeyIdentifier();

if(this.__navigationKeys[bm]||(this.__selectionKeys[bm]&&bl.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var bq=this.getActiveMenu();

if(!bq){return;
}var br=e.getKeyIdentifier();
var bt=this.__navigationKeys[br];
var bs=this.__selectionKeys[br];

if(bt){switch(br){case m:this._onKeyPressUp(bq);
break;
case b:this._onKeyPressDown(bq);
break;
case c:this._onKeyPressLeft(bq);
break;
case g:this._onKeyPressRight(bq);
break;
case d:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(bs){var bu=bq.getSelectedButton();

if(bu){switch(br){case n:this._onKeyPressEnter(bq,bu,e);
break;
case j:this._onKeyPressSpace(bq,bu,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(Y){var ba=Y.getSelectedButton();
var bb=Y.getChildren();
var bd=ba?Y.indexOf(ba)-1:bb.length-1;
var bc=this._getChild(Y,bd,-1,true);
if(bc){Y.setSelectedButton(bc);
}else{Y.resetSelectedButton();
}},_onKeyPressDown:function(bh){var bi=bh.getSelectedButton();
var bk=bi?bh.indexOf(bi)+1:0;
var bj=this._getChild(bh,bk,1,true);
if(bj){bh.setSelectedButton(bj);
}else{bh.resetSelectedButton();
}},_onKeyPressLeft:function(x){var C=x.getOpener();

if(!C){return;
}if(C instanceof qx.ui.menu.Button){var z=C.getLayoutParent();
z.resetOpenedButton();
z.setSelectedButton(C);
}else if(C instanceof qx.ui.menubar.Button){var B=C.getMenuBar().getMenuButtons();
var y=B.indexOf(C);
if(y===-1){return;
}var D=null;
var length=B.length;

for(var i=1;i<=length;i++){var A=B[(y-i+length)%length];

if(A.isEnabled()){D=A;
break;
}}
if(D&&D!=C){D.open(true);
}}},_onKeyPressRight:function(bv){var bx=bv.getSelectedButton();
if(bx){var bw=bx.getMenu();

if(bw){bv.setOpenedButton(bx);
var bD=this._getChild(bw,0,1);

if(bD){bw.setSelectedButton(bD);
}return;
}}else if(!bv.getOpenedButton()){var bD=this._getChild(bv,0,1);

if(bD){bv.setSelectedButton(bD);

if(bD.getMenu()){bv.setOpenedButton(bD);
}return;
}}var bB=bv.getOpener();
if(bB instanceof qx.ui.menu.Button&&bx){while(bB){bB=bB.getLayoutParent();

if(bB instanceof qx.ui.menu.Menu){bB=bB.getOpener();

if(bB instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bB){return;
}}if(bB instanceof qx.ui.menubar.Button){var bA=bB.getMenuBar().getMenuButtons();
var by=bA.indexOf(bB);
if(by===-1){return;
}var bC=null;
var length=bA.length;

for(var i=1;i<=length;i++){var bz=bA[(by+i)%length];

if(bz.isEnabled()){bC=bz;
break;
}}
if(bC&&bC!=bB){bC.open(true);
}}},_onKeyPressEnter:function(V,W,e){if(W.hasListener(u)){var X=e.clone();
X.setBubbles(false);
X.setTarget(W);
W.dispatchEvent(X);
}this.hideAll();
},_onKeyPressSpace:function(be,bf,e){if(bf.hasListener(u)){var bg=e.clone();
bg.setBubbles(false);
bg.setTarget(bf);
bf.dispatchEvent(bg);
}}},destruct:function(){var P=qx.event.Registration;
var O=document.body;
P.removeListener(window.document.documentElement,r,this._onMouseDown,this,true);
P.removeListener(O,s,this._onKeyUpDown,this,true);
P.removeListener(O,q,this._onKeyUpDown,this,true);
P.removeListener(O,u,this._onKeyPress,this,true);
this._disposeObjects(p,k);
this._disposeArray(l);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__forward:function(v,w,x,y){var z=this.getChildrenContainer();

if(z===this){v=h+v;
}return (z[v])(w,x,y);
},getChildren:function(){return this.__forward(c);
},hasChildren:function(){return this.__forward(f);
},add:function(q,r){return this.__forward(j,q,r);
},remove:function(D){return this.__forward(a,D);
},removeAll:function(){return this.__forward(d);
},indexOf:function(E){return this.__forward(l,E);
},addAt:function(A,B,C){this.__forward(g,A,B,C);
},addBefore:function(s,t,u){this.__forward(i,s,t,u);
},addAfter:function(m,n,o){this.__forward(k,m,n,o);
},removeAt:function(p){this.__forward(e,p);
}}});
})();
(function(){var t="slidebar",s="Integer",r="resize",q="qx.ui.core.Widget",p="selected",o="visible",n="Boolean",m="mouseout",l="excluded",k="menu",I="_applySelectedButton",H="_applySpacingY",G="_blocker",F="_applyCloseInterval",E="_applyBlockerColor",D="_applyIconColumnWidth",C="mouseover",B="_applyArrowColumnWidth",A="qx.ui.menu.Menu",z="Color",x="Number",y="_applyOpenInterval",v="_applySpacingX",w="_applyBlockerOpacity",u="_applyOpenedButton";
qx.Class.define(A,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
var a=this.getApplicationRoot();
a.add(this);
this.addListener(C,this._onMouseOver);
this.addListener(m,this._onMouseOut);
this.addListener(r,this._onResize,this);
a.addListener(r,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(a);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:k},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:l},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:s,apply:v,init:0,themeable:true},spacingY:{check:s,apply:H,init:0,themeable:true},iconColumnWidth:{check:s,init:0,themeable:true,apply:D},arrowColumnWidth:{check:s,init:0,themeable:true,apply:B},blockerColor:{check:z,init:null,nullable:true,apply:E,themeable:true},blockerOpacity:{check:x,init:1,apply:w,themeable:true},selectedButton:{check:q,nullable:true,apply:I},openedButton:{check:q,nullable:true,apply:u},opener:{check:q,nullable:true},openInterval:{check:s,themeable:true,init:250,apply:y},closeInterval:{check:s,themeable:true,init:250,apply:F},blockBackground:{check:n,themeable:true,init:false}},members:{__scheduledOpen:null,__onAfterSlideBarAdd:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__updateSlideBar();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__updateSlideBar();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(j){this.placeToPoint(j);
this.__updateSlideBar();
this.show();
this._placementTarget=j;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var X=[];
var Y=this.getChildren();

for(var i=0;i<Y.length;i++){if(Y[i].isEnabled()){X.push(Y[i]);
}}return X;
},_applyIconColumnWidth:function(O,P){this._getMenuLayout().setIconColumnWidth(O);
},_applyArrowColumnWidth:function(d,f){this._getMenuLayout().setArrowColumnWidth(d);
},_applySpacingX:function(bk,bl){this._getMenuLayout().setColumnSpacing(bk);
},_applySpacingY:function(bi,bj){this._getMenuLayout().setSpacing(bi);
},_applyVisibility:function(Q,R){arguments.callee.base.call(this,Q,R);
var S=qx.ui.menu.Manager.getInstance();

if(Q===o){S.add(this);
var T=this.getParentMenu();

if(T){T.setOpenedButton(this.getOpener());
}}else if(R===o){S.remove(this);
var T=this.getParentMenu();

if(T&&T.getOpenedButton()==this.getOpener()){T.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__updateBlockerVisibility();
},__updateBlockerVisibility:function(){if(this.isVisible()){if(this.getBlockBackground()){var ba=this.getZIndex();
this._blocker.blockContent(ba-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var bq=this.getOpener();

if(!bq||!(bq instanceof qx.ui.menu.AbstractButton)){return null;
}
while(bq&&!(bq instanceof qx.ui.menu.Menu)){bq=bq.getLayoutParent();
}return bq;
},_applySelectedButton:function(V,W){if(W){W.removeState(p);
}
if(V){V.addState(p);
}},_applyOpenedButton:function(b,c){if(c){c.getMenu().exclude();
}
if(b){b.getMenu().open();
}},_applyBlockerColor:function(g,h){this._blocker.setColor(g);
},_applyBlockerOpacity:function(bb,bc){this._blocker.setOpacity(bb);
},getChildrenContainer:function(){return this.getChildControl(t,true)||this;
},_createChildControlImpl:function(J){var K;

switch(J){case t:var K=new qx.ui.menu.MenuSlideBar();
var M=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var L=K.getLayout();
K.setLayout(M);
L.dispose();
var N=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<N.length;i++){K.add(N[i]);
}this.removeListener(r,this._onResize,this);
K.getChildrenContainer().addListener(r,this._onResize,this);
this._add(K);
break;
}return K||arguments.callee.base.call(this,J);
},_getMenuLayout:function(){if(this.hasChildControl(t)){return this.getChildControl(t).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(t)){return this.getChildControl(t).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__updateSlideBar:function(){var be=this._getMenuBounds();

if(!be){this.addListenerOnce(r,this.__updateSlideBar,this);
return;
}var bd=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var bf=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(be.height+top);
this.moveTo(bf,0);
});
}else if(top+be.height>bd){this._assertSlideBar(function(){this.setHeight(bd-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(br){if(this.hasChildControl(t)){return br.call(this);
}this.__onAfterSlideBarAdd=br;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(t);

if(this.__onAfterSlideBarAdd){this.__onAfterSlideBarAdd.call(this);
delete this.__onAfterSlideBarAdd;
}},_onResize:function(){if(this.isVisible()){var U=this._placementTarget;

if(!U){return;
}else if(U instanceof qx.ui.core.Widget){this.placeToWidget(U);
}else if(U.top!==undefined){this.placeToPoint(U);
}else{throw new Error("Unknown target: "+U);
}this.__updateSlideBar();
}},_onMouseOver:function(e){var bn=qx.ui.menu.Manager.getInstance();
bn.cancelClose(this);
var bo=e.getTarget();

if(bo.isEnabled()&&bo instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bo);
var bm=bo.getMenu&&bo.getMenu();

if(bm){bm.setOpener(bo);
bn.scheduleOpen(bm);
this.__scheduledOpen=bm;
}else{var bp=this.getOpenedButton();

if(bp){bn.scheduleClose(bp.getMenu());
}
if(this.__scheduledOpen){bn.cancelOpen(this.__scheduledOpen);
this.__scheduledOpen=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var bg=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bh=this.getOpenedButton();
bh?this.setSelectedButton(bh):this.resetSelectedButton();
if(bh){bg.cancelClose(bh.getMenu());
}if(this.__scheduledOpen){bg.cancelOpen(this.__scheduledOpen);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(r,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(G);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__columnSizes:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__columnSizes=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=q.length;i<l;i++){o=q[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=q[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}var p=arguments.callee.base.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__columnSizes||null;
}},destruct:function(){this.__columnSizes=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="on",l="String",k="qx.ui.menu.Menu",d="qx.ui.menu.AbstractButton",j="keypress",h="",c="_applyIcon",b="mouseup",g="abstract",f="_applyLabel",i="_applyMenu",a="changeCommand";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(b,this._onMouseUp);
this.addListener(j,this._onKeyPress);
this.addListener(a,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(u){var v;

switch(u){case t:v=new qx.ui.basic.Image;
v.setAnonymous(true);
this._add(v,{column:0});
break;
case s:v=new qx.ui.basic.Label;
v.setAnonymous(true);
this._add(v,{column:1});
break;
case q:v=new qx.ui.basic.Label;
v.setAnonymous(true);
this._add(v,{column:2});
break;
case r:v=new qx.ui.basic.Image;
v.setAnonymous(true);
this._add(v,{column:3});
break;
}return v||arguments.callee.base.call(this,u);
},_forwardStates:{selected:1},getChildrenSizes:function(){var w=0,x=0,y=0,C=0;

if(this._isChildControlVisible(t)){var D=this.getChildControl(t);
w=D.getMarginLeft()+D.getSizeHint().width+D.getMarginRight();
}
if(this._isChildControlVisible(s)){var A=this.getChildControl(s);
x=A.getMarginLeft()+A.getSizeHint().width+A.getMarginRight();
}
if(this._isChildControlVisible(q)){var z=this.getChildControl(q);
y=z.getMarginLeft()+z.getSizeHint().width+z.getMarginRight();
}
if(this._isChildControlVisible(r)){var B=this.getChildControl(r);
C=B.getMarginLeft()+B.getSizeHint().width+B.getMarginRight();
}return [w,x,y,C];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var M=e.getData();

if(qx.core.Variant.isSet(o,m)){var K=e.getOldData();

if(!K){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!M){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var L=M!=null?M.toString():h;
this.getChildControl(q).setValue(L);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var N=this.getCommand();

if(N!=null){this.getChildControl(q).setValue(N.toString());
}},"off":null}),_applyIcon:function(E,F){if(E){this._showChildControl(t).setSource(E);
}else{this._excludeChildControl(t);
}},_applyLabel:function(G,H){if(G){this._showChildControl(s).setValue(G);
}else{this._excludeChildControl(s);
}},_applyMenu:function(I,J){if(J){J.resetOpener();
J.removeState(n);
}
if(I){this._showChildControl(r);
I.setOpener(this);
I.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(h,j){var u=this._getLayoutChildren();
var t;
var m;
var n=[];

for(var i=0,l=u.length;i<l;i++){t=u[i];
m=t.getLayoutProperties().column;
n[m]=t;
}var s=this.__getMenu(u[0]);
var v=s.getColumnSizes();
var p=s.getSpacingX();
var o=qx.lang.Array.sum(v)+p*(v.length-1);

if(o<h){v[1]+=h-o;
}var w=0,top=0;
var q=qx.ui.layout.Util;

for(var i=0,l=v.length;i<l;i++){t=n[i];

if(t){var k=t.getSizeHint();
var top=q.computeVerticalAlignOffset(t.getAlignY()||c,k.height,j,0,0);
var r=q.computeHorizontalAlignOffset(t.getAlignX()||a,k.width,v[i],t.getMarginLeft(),t.getMarginRight());
t.renderLayout(w+r,top,k.width,k.height);
}w+=v[i]+p;
}},__getMenu:function(x){while(!(x instanceof qx.ui.menu.Menu)){x=x.getLayoutParent();
}return x;
},_computeSizeHint:function(){var f=this._getLayoutChildren();
var e=0;
var g=0;

for(var i=0,l=f.length;i<l;i++){var d=f[i].getSizeHint();
g+=d.width;
e=Math.max(e,d.height);
}return {width:g,height:e};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var q="horizontal",p="scrollpane",o="vertical",n="button-backward",m="button-forward",l="content",k="execute",j="qx.ui.container.SlideBar",i="scrollY",h="removeChildWidget",c="scrollX",g="_applyOrientation",f="mousewheel",b="Integer",a="slidebar",d="update";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(D){arguments.callee.base.call(this);
var E=this.getChildControl(p);
this._add(E,{flex:1});

if(D!=null){this.setOrientation(D);
}else{this.initOrientation();
}this.addListener(f,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:a},orientation:{check:[q,o],init:q,apply:g},scrollStep:{check:b,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(l);
},_createChildControlImpl:function(y){var z;

switch(y){case m:z=new qx.ui.form.RepeatButton;
z.addListener(k,this._onExecuteForward,this);
z.setFocusable(false);
this._addAt(z,2);
break;
case n:z=new qx.ui.form.RepeatButton;
z.addListener(k,this._onExecuteBackward,this);
z.setFocusable(false);
this._addAt(z,0);
break;
case l:z=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){z.addListener(h,this._onRemoveChild,this);
}this.getChildControl(p).add(z);
break;
case p:z=new qx.ui.core.scroll.ScrollPane();
z.addListener(d,this._onResize,this);
z.addListener(c,this._onScroll,this);
z.addListener(i,this._onScroll,this);
break;
}return z||arguments.callee.base.call(this,y);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(t){var u=this.getChildControl(p);

if(this.getOrientation()===q){u.scrollByX(t);
}else{u.scrollByY(t);
}},scrollTo:function(r){var s=this.getChildControl(p);

if(this.getOrientation()===q){s.scrollToX(r);
}else{s.scrollToY(r);
}},_applyOrientation:function(F,G){var J=[this.getLayout(),this._getLayout()];
var I=this.getChildControl(m);
var H=this.getChildControl(n);
if(G==o){I.removeState(o);
H.removeState(o);
I.addState(q);
H.addState(q);
}else if(G==q){I.removeState(q);
H.removeState(q);
I.addState(o);
H.addState(o);
}
if(F==q){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(J[0]){J[0].dispose();
}
if(J[1]){J[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(p).getChildren()[0];

if(!content){return;
}var v=this.getInnerSize();
var x=content.getBounds();
var w=(this.getOrientation()===q)?x.width>v.width:x.height>v.height;

if(w){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(p).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var B=this.getChildControl(p);

if(this.getOrientation()===q){var A=B.getScrollX();
var C=B.getScrollMaxX();
}else{var A=B.getScrollY();
var C=B.getScrollMaxY();
}this.getChildControl(n).setEnabled(A>0);
this.getChildControl(m).setEnabled(A<C);
},_showArrows:function(){this._showChildControl(m);
this._showChildControl(n);
},_hideArrows:function(){this._excludeChildControl(m);
this._excludeChildControl(n);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){arguments.callee.base.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g){var h;

switch(g){case c:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteForward,this);
this._addAt(h,2);
break;
case e:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteBackward,this);
this._addAt(h,0);
break;
}return h||arguments.callee.base.call(this,g);
}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="__timer",c="interval",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(q,r){arguments.callee.base.call(this,q,r);
this.__timer=new qx.event.AcceleratingTimer();
this.__timer.addListener(c,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__executed:null,__timer:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__startInternalTimer();
}this.removeState(m);
this.addState(n);
}},release:function(s){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__executed){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__stopInternalTimer();
},_applyEnabled:function(o,p){arguments.callee.base.call(this,o,p);

if(!o){this.removeState(n);
this.removeState(m);
this.__stopInternalTimer();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__timer.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__timer.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__startInternalTimer();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__executed){this.execute();
}}this.__stopInternalTimer();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__executed){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__stopInternalTimer();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__startInternalTimer();
}},_onInterval:function(e){this.__executed=true;
this.fireEvent(b);
},__startInternalTimer:function(){this.fireEvent(g);
this.__executed=false;
this.__timer.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__stopInternalTimer:function(){this.fireEvent(d);
this.__timer.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var e="Integer",d="interval",c="qx.event.type.Event",b="__timer",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__timer=new qx.event.Timer(this.getInterval());
this.__timer.addListener(d,this._onInterval,this);
},events:{"interval":c},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__timer:null,__currentInterval:null,start:function(){this.__timer.setInterval(this.getFirstInterval());
this.__timer.start();
},stop:function(){this.__timer.stop();
this.__currentInterval=null;
},_onInterval:function(){this.__timer.stop();

if(this.__currentInterval==null){this.__currentInterval=this.getInterval();
}this.__currentInterval=Math.max(this.getMinimum(),this.__currentInterval-this.getDecrease());
this.__timer.setInterval(this.__currentInterval);
this.__timer.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var o="resize",n="scrollY",m="update",l="scrollX",k="_applyScrollX",j="_applyScrollY",i="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",h="appear",g="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",f="qx.event.type.Event",c="qx.ui.core.scroll.ScrollPane",d="scroll";
qx.Class.define(c,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(o,this._onUpdate);
var L=this.getContentElement();
L.addListener(d,this._onScroll,this);
L.addListener(h,this._onAppear,this);
},events:{update:f},properties:{scrollX:{check:i,apply:k,event:l,init:0},scrollY:{check:g,apply:j,event:n,init:0}},members:{add:function(u){var v=this._getChildren()[0];

if(v){this._remove(v);
v.removeListener(o,this._onUpdate,this);
}
if(u){this._add(u);
u.addListener(o,this._onUpdate,this);
}},remove:function(r){if(r){this._remove(r);
r.removeListener(o,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(m);
},_onScroll:function(e){var w=this.getContentElement();
this.setScrollX(w.getScrollX());
this.setScrollY(w.getScrollY());
},_onAppear:function(e){var F=this.getContentElement();
var C=this.getScrollX();
var D=F.getScrollX();

if(C!=D){F.scrollToX(C);
}var G=this.getScrollY();
var E=F.getScrollY();

if(G!=E){F.scrollToY(G);
}},getItemTop:function(H){var top=0;

do{top+=H.getBounds().top;
H=H.getLayoutParent();
}while(H&&H!==this);
return top;
},getItemBottom:function(z){return this.getItemTop(z)+z.getBounds().height;
},getItemLeft:function(s){var t=0;
var parent;

do{t+=s.getBounds().left;
parent=s.getLayoutParent();

if(parent){t+=parent.getInsets().left;
}s=parent;
}while(s&&s!==this);
return t;
},getItemRight:function(K){return this.getItemLeft(K)+K.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var N=this.getInnerSize();
var M=this.getScrollSize();

if(N&&M){return Math.max(0,M.width-N.width);
}return 0;
},getScrollMaxY:function(){var b=this.getInnerSize();
var a=this.getScrollSize();

if(b&&a){return Math.max(0,a.height-b.height);
}return 0;
},scrollToX:function(p){var q=this.getScrollMaxX();

if(p<0){p=0;
}else if(p>q){p=q;
}this.setScrollX(p);
},scrollToY:function(I){var J=this.getScrollMaxY();

if(I<0){I=0;
}else if(I>J){I=J;
}this.setScrollY(I);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(B){this.getContentElement().scrollToX(B);
},_applyScrollY:function(A){this.getContentElement().scrollToY(A);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="__timer",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){arguments.callee.base.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__timer=new qx.event.AcceleratingTimer();
this.__timer.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__timer:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__timer.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__timer.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__timer.stop();
}}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){arguments.callee.base.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setIcon(d);
}
if(f!=null){this.setCommand(f);
}
if(g!=null){this.setMenu(g);
}},properties:{appearance:{refine:true,init:a}},members:{_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(k,l,m){arguments.callee.base.call(this,k,l,m);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(i){arguments.callee.base.call(this,i);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var n=this.getMenu();
var menubar=this.getMenuBar();

if(n.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(n);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==n){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
var j=this.getMenu();

if(j&&j.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__allowMenuOpenHover:false,_setAllowMenuOpenHover:function(p){this.__allowMenuOpenHover=p;
},_isAllowMenuOpenHover:function(){return this.__allowMenuOpenHover;
},_applySpacing:function(m,n){var o=this._getLayout();
m==null?o.resetSpacing():o.setSpacing(m);
},addSpacer:function(){var t=new qx.ui.core.Spacer;
this._add(t,{flex:1});
return t;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var r=this.getChildren();
var q=[];
var s;

for(var i=0,l=r.length;i<l;i++){s=r[i];

if(s instanceof qx.ui.menubar.Button){q.push(s);
}else if(s instanceof qx.ui.toolbar.Part){q.push.apply(q,s.getMenuButtons());
}}return q;
}}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(b,c){arguments.callee.base.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(d){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(q){var r;

switch(q){case k:r=new qx.ui.basic.Image();
r.setAlignY(g);
this._add(r);
break;
case m:r=new qx.ui.toolbar.PartContainer;
this._add(r);
break;
}return r||arguments.callee.base.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(s,t){var u=this.getChildControl(m).getLayout();
s==null?u.resetSpacing():u.setSpacing(s);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var o=this.getChildren();
var n=[];
var p;

for(var i=0,l=o.length;i<l;i++){p=o[i];

if(p instanceof qx.ui.menubar.Button){n.push(p);
}}return n;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var h="checked",g="menu-checkbox",f="Boolean",d="_applyValue",c="changeValue",b="qx.ui.menu.CheckBox",a="execute";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(k,l){arguments.callee.base.call(this);
if(k!=null){if(k.translate){this.setLabel(k.translate());
}else{this.setLabel(k);
}}
if(l!=null){this.setMenu(l);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:f,init:false,apply:d,event:c,nullable:true}},members:{_applyValue:function(i,j){i?this.addState(h):this.removeState(h);
},_onExecute:function(e){this.toggleValue();
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(i){arguments.callee.base.call(this,i);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__bInListener:false,_applyVisible:function(g,h){if(!this.bInListener){this.setValue(g);
}}}});
})();
(function(){var e="qx.ui.table.selection.Model",d="qx.ui.table.selection.Manager";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{selectionModel:{check:e}},members:{__lastMouseDownHandled:null,handleMouseDown:function(a,b){if(b.isLeftPressed()){var c=this.getSelectionModel();

if(!c.isSelectedIndex(a)){this._handleSelectEvent(a,b);
this.__lastMouseDownHandled=true;
}else{this.__lastMouseDownHandled=false;
}}else if(b.isRightPressed()&&b.getModifiers()==0){var c=this.getSelectionModel();

if(!c.isSelectedIndex(a)){c.setSelectionInterval(a,a);
}}},handleMouseUp:function(q,r){if(r.isLeftPressed()&&!this.__lastMouseDownHandled){this._handleSelectEvent(q,r);
}},handleClick:function(s,t){},handleSelectKeyDown:function(o,p){this._handleSelectEvent(o,p);
},handleMoveKeyDown:function(f,g){var i=this.getSelectionModel();

switch(g.getModifiers()){case 0:i.setSelectionInterval(f,f);
break;
case qx.event.type.Dom.SHIFT_MASK:var h=i.getAnchorSelectionIndex();

if(h==-1){i.setSelectionInterval(f,f);
}else{i.setSelectionInterval(h,f);
}break;
}},_handleSelectEvent:function(j,k){var n=this.getSelectionModel();
var l=n.getLeadSelectionIndex();
var m=n.getAnchorSelectionIndex();

if(k.isShiftPressed()){if(j!=l||n.isSelectionEmpty()){if(m==-1){m=j;
}
if(k.isCtrlOrCommandPressed()){n.addSelectionInterval(m,j);
}else{n.setSelectionInterval(m,j);
}}}else if(k.isCtrlOrCommandPressed()){if(n.isSelectedIndex(j)){n.removeSelectionInterval(j,j);
}else{n.addSelectionInterval(j,j);
}}else{n.setSelectionInterval(j,j);
}}}});
})();
(function(){var T="..",S="changeSelection",R="Use 'resetSelection' instead",Q=" [",P="]",O="qx.event.type.Event",N="Ranges:",M="qx.ui.table.selection.Model",L="_applySelectionMode",K="Use '_resetSelection' instead.";
qx.Class.define(M,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__selectedRangeArr=[];
this.__anchorSelectionIndex=-1;
this.__leadSelectionIndex=-1;
this.hasBatchModeRefCount=0;
this.__hadChangeEventInBatchMode=false;
},events:{"changeSelection":O},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:L}},members:{__hadChangeEventInBatchMode:null,__anchorSelectionIndex:null,__leadSelectionIndex:null,__selectedRangeArr:null,_applySelectionMode:function(E){this.resetSelection();
},setBatchMode:function(D){if(D){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__hadChangeEventInBatchMode){this.__hadChangeEventInBatchMode=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__anchorSelectionIndex;
},_setAnchorSelectionIndex:function(F){this.__anchorSelectionIndex=F;
},getLeadSelectionIndex:function(){return this.__leadSelectionIndex;
},_setLeadSelectionIndex:function(q){this.__leadSelectionIndex=q;
},_getSelectedRangeArr:function(){return this.__selectedRangeArr;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,R);
this.resetSelection();
},isSelectionEmpty:function(){return this.__selectedRangeArr.length==0;
},getSelectedCount:function(){var J=0;

for(var i=0;i<this.__selectedRangeArr.length;i++){var I=this.__selectedRangeArr[i];
J+=I.maxIndex-I.minIndex+1;
}return J;
},isSelectedIndex:function(G){for(var i=0;i<this.__selectedRangeArr.length;i++){var H=this.__selectedRangeArr[i];

if(G>=H.minIndex&&G<=H.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var U=[];

for(var i=0;i<this.__selectedRangeArr.length;i++){U.push({minIndex:this.__selectedRangeArr[i].minIndex,maxIndex:this.__selectedRangeArr[i].maxIndex});
}return U;
},iterateSelection:function(a,b){for(var i=0;i<this.__selectedRangeArr.length;i++){for(var j=this.__selectedRangeArr[i].minIndex;j<=this.__selectedRangeArr[i].maxIndex;j++){a.call(b,j);
}}},setSelectionInterval:function(t,u){var v=arguments.callee.self;

switch(this.getSelectionMode()){case v.NO_SELECTION:return;
case v.SINGLE_SELECTION:if(this.isSelectedIndex(u)){return;
}t=u;
break;
case v.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=t;i<=u;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(t,u);
this._fireChangeSelection();
},addSelectionInterval:function(n,o){var p=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case p.NO_SELECTION:return;
case p.MULTIPLE_INTERVAL_SELECTION:case p.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(n,o);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(n,o);
break;
}},removeSelectionInterval:function(c,d){this.__anchorSelectionIndex=c;
this.__leadSelectionIndex=d;
var f=Math.min(c,d);
var h=Math.max(c,d);
for(var i=0;i<this.__selectedRangeArr.length;i++){var l=this.__selectedRangeArr[i];

if(l.minIndex>h){break;
}else if(l.maxIndex>=f){var m=(l.minIndex>=f)&&(l.minIndex<=h);
var k=(l.maxIndex>=f)&&(l.maxIndex<=h);

if(m&&k){this.__selectedRangeArr.splice(i,1);
i--;
}else if(m){l.minIndex=h+1;
}else if(k){l.maxIndex=f-1;
}else{var g={minIndex:h+1,maxIndex:l.maxIndex};
this.__selectedRangeArr.splice(i+1,0,g);
l.maxIndex=f-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__selectedRangeArr=[];
this.__anchorSelectionIndex=-1;
this.__leadSelectionIndex=-1;
},_clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,K);
this._resetSelection();
},_addSelectionInterval:function(w,x){this.__anchorSelectionIndex=w;
this.__leadSelectionIndex=x;
var y=Math.min(w,x);
var A=Math.max(w,x);
var z=0;

for(;z<this.__selectedRangeArr.length;z++){var B=this.__selectedRangeArr[z];

if(B.minIndex>y){break;
}}this.__selectedRangeArr.splice(z,0,{minIndex:y,maxIndex:A});
var C=this.__selectedRangeArr[0];

for(var i=1;i<this.__selectedRangeArr.length;i++){var B=this.__selectedRangeArr[i];

if(C.maxIndex+1>=B.minIndex){C.maxIndex=Math.max(C.maxIndex,B.maxIndex);
this.__selectedRangeArr.splice(i,1);
i--;
}else{C=B;
}}},_dumpRanges:function(){var r=N;

for(var i=0;i<this.__selectedRangeArr.length;i++){var s=this.__selectedRangeArr[i];
r+=Q+s.minIndex+T+s.maxIndex+P;
}this.debug(r);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__hadChangeEventInBatchMode=true;
}else{this.fireEvent(S);
}}},destruct:function(){this.__selectedRangeArr=null;
}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(d){return true;
},updateHeaderCell:function(b,c){return true;
}}});
})();
(function(){var b="qx.ui.table.headerrenderer.Default",a="String";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:a,init:null,nullable:true}},members:{createHeaderCell:function(c){var d=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(c,d);
return d;
},updateHeaderCell:function(e,f){var g=qx.ui.table.headerrenderer.Default;
if(e.name&&e.name.translate){f.setLabel(e.name.translate());
}else{f.setLabel(e.name);
}var h=f.getToolTip();

if(this.getToolTip()!=null){if(h==null){h=new qx.ui.tooltip.ToolTip(this.getToolTip());
f.setToolTip(h);
qx.util.DisposeUtil.disposeTriggeredBy(h,f);
}else{h.setLabel(this.getToolTip());
}}e.sorted?f.addState(g.STATE_SORTED):f.removeState(g.STATE_SORTED);
e.sortedAscending?f.addState(g.STATE_SORTED_ASCENDING):f.removeState(g.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f='" ',e="nowrap",d="default",c="qx.client",b="}",a="width:",G=".qooxdoo-table-cell-right { text-align:right } ",F="0px 6px",E='<div class="',D="0px",C="height:",B="1px solid ",A=".qooxdoo-table-cell-bold { font-weight:bold } ",z="table-row-line",y='>',x="mshtml",q='</div>',r="ellipsis",o="content-box",p='left:',m="qx.ui.table.cellrenderer.Abstract",n='" style="',k="abstract",l="none",s="hidden",t="} ",v='px;',u=".qooxdoo-table-cell-italic { font-style:italic} ",w="absolute";
qx.Class.define(m,{type:k,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
var J=qx.ui.table.cellrenderer.Abstract;

if(!J.__clazz){var L=qx.theme.manager.Color.getInstance();
J.__clazz=arguments.callee.self;
var K=h+
qx.bom.element.Style.compile({position:w,top:D,overflow:s,whiteSpace:e,borderRight:B+L.resolve(z),padding:F,cursor:d,textOverflow:r,userSelect:l})+t+G+u+A;

if(!qx.core.Variant.isSet(c,x)){K+=h+qx.bom.element.BoxSizing.compile(o)+b;
}J.__clazz.stylesheet=qx.bom.Stylesheet.createElement(K);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(N){return g;
},_getCellStyle:function(M){return M.style||j;
},_getCellAttributes:function(U){return j;
},_getContentHtml:function(T){return T.value||j;
},_getCellSizeStyle:function(O,P,Q,R){var S=j;

if(qx.bom.client.Feature.CONTENT_BOX){O-=Q;
P-=R;
}S+=a+Math.max(O,0)+i;
S+=C+Math.max(P,0)+i;
return S;
},createDataCellHtml:function(H,I){I.push(E,this._getCellClass(H),n,p,H.styleLeft,v,this._getCellSizeStyle(H.styleWidth,H.styleHeight,this._insetX,this._insetY),this._getCellStyle(H),f,this._getCellAttributes(H),y+this._getContentHtml(H),q);
}}});
})();
(function(){var i="",h="number",g="Boolean",f="qx.ui.table.cellrenderer.Default",e=" qooxdoo-table-cell-bold",d=" qooxdoo-table-cell-right",c=" qooxdoo-table-cell-italic",b="string";
qx.Class.define(f,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4},properties:{useAutoAlign:{check:g,init:true}},members:{_getStyleFlags:function(a){if(this.getUseAutoAlign()){if(typeof a.value==h){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},_getCellClass:function(n){var o=arguments.callee.base.call(this,n);

if(!o){return i;
}var p=this._getStyleFlags(n);

if(p&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){o+=d;
}
if(p&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){o+=e;
}
if(p&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){o+=c;
}return o;
},_getContentHtml:function(j){return qx.bom.String.escape(this._formatValue(j));
},_formatValue:function(k){var m=k.value;

if(m==null){return i;
}
if(typeof m==b){return m;
}else if(typeof m==h){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var l=qx.ui.table.cellrenderer.Default._numberFormat.format(m);
}else if(m instanceof Date){l=qx.util.format.DateFormat.getDateInstance().format(m);
}else{l=m;
}return l;
}}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var f="",e="Function",d="abstract",c="number",b="appear",a="qx.ui.table.celleditor.AbstractField";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:d,properties:{validationFunction:{check:e,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(g){var h=this._createEditor();
h.originalValue=g.value;

if(g.value===null||g.value===undefined){g.value=f;
}h.setValue(f+g.value);
h.addListener(b,function(){h.selectAllText();
});
return h;
},getCellEditorValue:function(i){var k=i.getValue();
var j=this.getValidationFunction();

if(j){k=j(k,i.originalValue);
}
if(typeof i.originalValue==c){k=parseFloat(k);
}return k;
}}});
})();
(function(){var b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{_createEditor:function(){var c=new qx.ui.form.TextField();
c.setAppearance(a);
return c;
}}});
})();
(function(){var o="qx.event.type.Data",n="visibilityChanged",m="orderChanged",l="visibilityChangedPre",k="widthChanged",j="qx.ui.table.columnmodel.Basic",h="__editorFactory",g="__dataRenderer",f="__headerRenderer";
qx.Class.define(j,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__overallColumnArr=[];
this.__visibleColumnArr=[];
},events:{"widthChanged":o,"visibilityChangedPre":o,"visibilityChanged":o,"orderChanged":o},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__internalChange:null,__colToXPosMap:null,__visibleColumnArr:null,__overallColumnArr:null,__columnDataArr:null,__headerRenderer:null,__dataRenderer:null,__editorFactory:null,init:function(t){{};
this.__columnDataArr=[];
var w=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var y=this.__headerRenderer||(this.__headerRenderer=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var v=this.__dataRenderer||(this.__dataRenderer=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var u=this.__editorFactory||(this.__editorFactory=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__overallColumnArr=[];
this.__visibleColumnArr=[];

for(var A=0;A<t;A++){this.__columnDataArr[A]={width:w,headerRenderer:y,dataRenderer:v,editorFactory:u};
this.__overallColumnArr[A]=A;
this.__visibleColumnArr[A]=A;
}this.__colToXPosMap=null;

for(var A=0;A<t;A++){var z={col:A,visible:true};
this.fireDataEvent(l,z);
this.fireDataEvent(n,z);
}},getVisibleColumns:function(){return this.__visibleColumnArr!=null?this.__visibleColumnArr:[];
},setColumnWidth:function(a,b){{};
var d=this.__columnDataArr[a].width;

if(d!=b){this.__columnDataArr[a].width=b;
var c={col:a,newWidth:b,oldWidth:d};
this.fireDataEvent(k,c);
}},getColumnWidth:function(be){{};
return this.__columnDataArr[be].width;
},setHeaderCellRenderer:function(I,J){{};
var K=this.__columnDataArr[I].headerRenderer;

if(K!==this.__headerRenderer){K.dispose();
}this.__columnDataArr[I].headerRenderer=J;
},getHeaderCellRenderer:function(B){{};
return this.__columnDataArr[B].headerRenderer;
},setDataCellRenderer:function(R,S){{};
var T=this.__columnDataArr[R].headerRenderer;

if(T!==this.__dataRenderer){T.dispose();
}this.__columnDataArr[R].dataRenderer=S;
},getDataCellRenderer:function(Q){{};
return this.__columnDataArr[Q].dataRenderer;
},setCellEditorFactory:function(bf,bg){{};
var bh=this.__columnDataArr[bf].headerRenderer;

if(bh!==this.__editorFactory){bh.dispose();
}this.__columnDataArr[bf].editorFactory=bg;
},getCellEditorFactory:function(bi){{};
return this.__columnDataArr[bi].editorFactory;
},_getColToXPosMap:function(){if(this.__colToXPosMap==null){this.__colToXPosMap={};

for(var s=0;s<this.__overallColumnArr.length;s++){var r=this.__overallColumnArr[s];
this.__colToXPosMap[r]={overX:s};
}
for(var q=0;q<this.__visibleColumnArr.length;q++){var r=this.__visibleColumnArr[q];
this.__colToXPosMap[r].visX=q;
}}return this.__colToXPosMap;
},getVisibleColumnCount:function(){return this.__visibleColumnArr!=null?this.__visibleColumnArr.length:0;
},getVisibleColumnAtX:function(bj){{};
return this.__visibleColumnArr[bj];
},getVisibleX:function(p){{};
return this._getColToXPosMap()[p].visX;
},getOverallColumnCount:function(){return this.__overallColumnArr.length;
},getOverallColumnAtX:function(e){{};
return this.__overallColumnArr[e];
},getOverallX:function(H){{};
return this._getColToXPosMap()[H].overX;
},isColumnVisible:function(G){{};
return (this._getColToXPosMap()[G].visX!=null);
},setColumnVisible:function(U,V){{};

if(V!=this.isColumnVisible(U)){if(V){var bc=this._getColToXPosMap();
var Y=bc[U].overX;

if(Y==null){throw new Error("Showing column failed: "+U+". The column is not added to this TablePaneModel.");
}var ba;

for(var x=Y+1;x<this.__overallColumnArr.length;x++){var bb=this.__overallColumnArr[x];
var W=bc[bb].visX;

if(W!=null){ba=W;
break;
}}if(ba==null){ba=this.__visibleColumnArr.length;
}this.__visibleColumnArr.splice(ba,0,U);
}else{var X=this.getVisibleX(U);
this.__visibleColumnArr.splice(X,1);
}this.__colToXPosMap=null;
if(!this.__internalChange){var bd={col:U,visible:V};
this.fireDataEvent(l,bd);
this.fireDataEvent(n,bd);
}}},moveColumn:function(L,M){{};
this.__internalChange=true;
var P=this.__overallColumnArr[L];
var N=this.isColumnVisible(P);

if(N){this.setColumnVisible(P,false);
}this.__overallColumnArr.splice(L,1);
this.__overallColumnArr.splice(M,0,P);
this.__colToXPosMap=null;

if(N){this.setColumnVisible(P,true);
}this.__internalChange=false;
var O={col:P,fromOverXPos:L,toOverXPos:M};
this.fireDataEvent(m,O);
},setColumnsOrder:function(C){{};

if(C.length==this.__overallColumnArr.length){this.__internalChange=true;
var F=new Array(C.length);

for(var D=0;D<this.__overallColumnArr.length;D++){var E=this.isColumnVisible(D);
F[D]=E;

if(E){this.setColumnVisible(D,false);
}}this.__overallColumnArr=qx.lang.Array.clone(C);
this.__colToXPosMap=null;
for(var D=0;D<this.__overallColumnArr.length;D++){if(F[D]){this.setColumnVisible(D,true);
}}this.__internalChange=false;
this.fireDataEvent(m);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__overallColumnArr.length+", got "+C.length);
}}},destruct:function(){for(var i=0;i<this.__columnDataArr.length;i++){this.__columnDataArr[i].headerRenderer.dispose();
this.__columnDataArr[i].dataRenderer.dispose();
this.__columnDataArr[i].editorFactory.dispose();
}this.__overallColumnArr=this.__visibleColumnArr=this.__columnDataArr=this.__colToXPosMap=null;
this._disposeObjects(f,g,h);
}});
})();
(function(){var k="icon",j="label",i="String",h="sort-icon",g="_applySortIcon",f="_applyIcon",e="table-header-cell",d="qx.ui.table.headerrenderer.HeaderCell",c="_applyLabel";
qx.Class.define(d,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var l=new qx.ui.layout.Grid();
l.setRowFlex(0,1);
l.setColumnFlex(1,1);
l.setColumnFlex(2,1);
this.setLayout(l);
},properties:{appearance:{refine:true,init:e},label:{check:i,init:null,nullable:true,apply:c},sortIcon:{check:i,init:null,nullable:true,apply:g,themeable:true},icon:{check:i,init:null,nullable:true,apply:f}},members:{_applyLabel:function(a,b){if(a){this._showChildControl(j).setValue(a);
}else{this._excludeChildControl(j);
}},_applySortIcon:function(q,r){if(q){this._showChildControl(h).setSource(q);
}else{this._excludeChildControl(h);
}},_applyIcon:function(o,p){if(o){this._showChildControl(k).setSource(o);
}else{this._excludeChildControl(k);
}},_createChildControlImpl:function(m){var n;

switch(m){case j:n=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(n,{row:0,column:1});
break;
case h:n=new qx.ui.basic.Image(this.getSortIcon());
n.setAnonymous(true);
this._add(n,{row:0,column:2});
break;
case k:n=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(n,{row:0,column:0});
break;
}return n||arguments.callee.base.call(this,m);
}}});
})();
(function(){var B="left",A="top",z="_applyLayoutChange",w="hAlign",v="flex",u="vAlign",t="Integer",s="minWidth",r="width",q="minHeight",n="qx.ui.layout.Grid",p="height",o="maxHeight",m="maxWidth";
qx.Class.define(n,{extend:qx.ui.layout.Abstract,construct:function(cx,cy){arguments.callee.base.call(this);
this.__rowData=[];
this.__colData=[];

if(cx){this.setSpacingX(cx);
}
if(cy){this.setSpacingY(cy);
}},properties:{spacingX:{check:t,init:0,apply:z},spacingY:{check:t,init:0,apply:z}},members:{__grid:null,__rowData:null,__colData:null,__colSpans:null,__rowSpans:null,__maxRowIndex:null,__maxColIndex:null,__rowHeights:null,__colWidths:null,verifyLayoutProperty:null,__buildGrid:function(){var cG=[];
var cF=[];
var cH=[];
var cD=-1;
var cC=-1;
var cJ=this._getLayoutChildren();

for(var i=0,l=cJ.length;i<l;i++){var cE=cJ[i];
var cI=cE.getLayoutProperties();
var cK=cI.row;
var cB=cI.column;
cI.colSpan=cI.colSpan||1;
cI.rowSpan=cI.rowSpan||1;
if(cK==null||cB==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+cE+"' must be defined!");
}
if(cG[cK]&&cG[cK][cB]){throw new Error("Cannot add widget '"+cE+"'!. "+"There is already a widget '"+cG[cK][cB]+"' in this cell ("+cK+", "+cB+")");
}
for(var x=cB;x<cB+cI.colSpan;x++){for(var y=cK;y<cK+cI.rowSpan;y++){if(cG[y]==undefined){cG[y]=[];
}cG[y][x]=cE;
cC=Math.max(cC,x);
cD=Math.max(cD,y);
}}
if(cI.rowSpan>1){cH.push(cE);
}
if(cI.colSpan>1){cF.push(cE);
}}for(var y=0;y<=cD;y++){if(cG[y]==undefined){cG[y]=[];
}}this.__grid=cG;
this.__colSpans=cF;
this.__rowSpans=cH;
this.__maxRowIndex=cD;
this.__maxColIndex=cC;
this.__rowHeights=null;
this.__colWidths=null;
delete this._invalidChildrenCache;
},_setRowData:function(dj,dk,dl){var dm=this.__rowData[dj];

if(!dm){this.__rowData[dj]={};
this.__rowData[dj][dk]=dl;
}else{dm[dk]=dl;
}},_setColumnData:function(cN,cO,cP){var cQ=this.__colData[cN];

if(!cQ){this.__colData[cN]={};
this.__colData[cN][cO]=cP;
}else{cQ[cO]=cP;
}},setSpacing:function(bm){this.setSpacingY(bm);
this.setSpacingX(bm);
return this;
},setColumnAlign:function(cu,cv,cw){{};
this._setColumnData(cu,w,cv);
this._setColumnData(cu,u,cw);
this._applyLayoutChange();
return this;
},getColumnAlign:function(cz){var cA=this.__colData[cz]||{};
return {vAlign:cA.vAlign||A,hAlign:cA.hAlign||B};
},setRowAlign:function(by,bz,bA){{};
this._setRowData(by,w,bz);
this._setRowData(by,u,bA);
this._applyLayoutChange();
return this;
},getRowAlign:function(dY){var ea=this.__rowData[dY]||{};
return {vAlign:ea.vAlign||A,hAlign:ea.hAlign||B};
},getCellWidget:function(cs,ct){if(this._invalidChildrenCache){this.__buildGrid();
}var cs=this.__grid[cs]||{};
return cs[ct]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__buildGrid();
}return this.__maxRowIndex+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__buildGrid();
}return this.__maxColIndex+1;
},getCellAlign:function(C,D){var J=A;
var H=B;
var I=this.__rowData[C];
var F=this.__colData[D];
var E=this.__grid[C][D];

if(E){var G={vAlign:E.getAlignY(),hAlign:E.getAlignX()};
}else{G={};
}if(G.vAlign){J=G.vAlign;
}else if(I&&I.vAlign){J=I.vAlign;
}else if(F&&F.vAlign){J=F.vAlign;
}if(G.hAlign){H=G.hAlign;
}else if(F&&F.hAlign){H=F.hAlign;
}else if(I&&I.hAlign){H=I.hAlign;
}return {vAlign:J,hAlign:H};
},setColumnFlex:function(cL,cM){this._setColumnData(cL,v,cM);
this._applyLayoutChange();
return this;
},getColumnFlex:function(cf){var cg=this.__colData[cf]||{};
return cg.flex!==undefined?cg.flex:0;
},setRowFlex:function(bB,bC){this._setRowData(bB,v,bC);
this._applyLayoutChange();
return this;
},getRowFlex:function(dV){var dW=this.__rowData[dV]||{};
var dX=dW.flex!==undefined?dW.flex:0;
return dX;
},setColumnMaxWidth:function(dT,dU){this._setColumnData(dT,m,dU);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(cT){var cU=this.__colData[cT]||{};
return cU.maxWidth!==undefined?cU.maxWidth:Infinity;
},setColumnWidth:function(bk,bl){this._setColumnData(bk,r,bl);
this._applyLayoutChange();
return this;
},getColumnWidth:function(cb){var cc=this.__colData[cb]||{};
return cc.width!==undefined?cc.width:null;
},setColumnMinWidth:function(cd,ce){this._setColumnData(cd,s,ce);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(O){var P=this.__colData[O]||{};
return P.minWidth||0;
},setRowMaxHeight:function(cR,cS){this._setRowData(cR,o,cS);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(M){var N=this.__rowData[M]||{};
return N.maxHeight||Infinity;
},setRowHeight:function(dh,di){this._setRowData(dh,p,di);
this._applyLayoutChange();
return this;
},getRowHeight:function(bR){var bS=this.__rowData[bR]||{};
return bS.height!==undefined?bS.height:null;
},setRowMinHeight:function(K,L){this._setRowData(K,q,L);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(h){var k=this.__rowData[h]||{};
return k.minHeight||0;
},__getOuterSize:function(Q){var U=Q.getSizeHint();
var T=Q.getMarginLeft()+Q.getMarginRight();
var S=Q.getMarginTop()+Q.getMarginBottom();
var R={height:U.height+S,width:U.width+T,minHeight:U.minHeight+S,minWidth:U.minWidth+T,maxHeight:U.maxHeight+S,maxWidth:U.maxWidth+T};
return R;
},_fixHeightsRowSpan:function(bD){var bO=this.getSpacingY();

for(var i=0,l=this.__rowSpans.length;i<l;i++){var bG=this.__rowSpans[i];
var bI=this.__getOuterSize(bG);
var bJ=bG.getLayoutProperties();
var bF=bJ.row;
var bM=bO*(bJ.rowSpan-1);
var bE=bM;
var bL={};

for(var j=0;j<bJ.rowSpan;j++){var bQ=bJ.row+j;
var bH=bD[bQ];
var bP=this.getRowFlex(bQ);

if(bP>0){bL[bQ]={min:bH.minHeight,value:bH.height,max:bH.maxHeight,flex:bP};
}bM+=bH.height;
bE+=bH.minHeight;
}if(bM<bI.height){var bN=qx.ui.layout.Util.computeFlexOffsets(bL,bI.height,bM);

for(var j=0;j<bJ.rowSpan;j++){var bK=bN[bF+j]?bN[bF+j].offset:0;
bD[bF+j].height+=bK;
}}if(bE<bI.minHeight){var bN=qx.ui.layout.Util.computeFlexOffsets(bL,bI.minHeight,bE);

for(var j=0;j<bJ.rowSpan;j++){var bK=bN[bF+j]?bN[bF+j].offset:0;
bD[bF+j].minHeight+=bK;
}}}},_fixWidthsColSpan:function(V){var ba=this.getSpacingX();

for(var i=0,l=this.__colSpans.length;i<l;i++){var W=this.__colSpans[i];
var Y=this.__getOuterSize(W);
var bc=W.getLayoutProperties();
var X=bc.column;
var bi=ba*(bc.colSpan-1);
var bb=bi;
var bd={};
var bf;

for(var j=0;j<bc.colSpan;j++){var bj=bc.column+j;
var bh=V[bj];
var bg=this.getColumnFlex(bj);
if(bg>0){bd[bj]={min:bh.minWidth,value:bh.width,max:bh.maxWidth,flex:bg};
}bi+=bh.width;
bb+=bh.minWidth;
}if(bi<Y.width){var be=qx.ui.layout.Util.computeFlexOffsets(bd,Y.width,bi);

for(var j=0;j<bc.colSpan;j++){bf=be[X+j]?be[X+j].offset:0;
V[X+j].width+=bf;
}}if(bb<Y.minWidth){var be=qx.ui.layout.Util.computeFlexOffsets(bd,Y.minWidth,bb);

for(var j=0;j<bc.colSpan;j++){bf=be[X+j]?be[X+j].offset:0;
V[X+j].minWidth+=bf;
}}}},_getRowHeights:function(){if(this.__rowHeights!=null){return this.__rowHeights;
}var bw=[];
var bp=this.__maxRowIndex;
var bo=this.__maxColIndex;

for(var bx=0;bx<=bp;bx++){var bq=0;
var bs=0;
var br=0;

for(var bv=0;bv<=bo;bv++){var bn=this.__grid[bx][bv];

if(!bn){continue;
}var bt=bn.getLayoutProperties().rowSpan||0;

if(bt>1){continue;
}var bu=this.__getOuterSize(bn);

if(this.getRowFlex(bx)>0){bq=Math.max(bq,bu.minHeight);
}else{bq=Math.max(bq,bu.height);
}bs=Math.max(bs,bu.height);
}var bq=Math.max(bq,this.getRowMinHeight(bx));
var br=this.getRowMaxHeight(bx);

if(this.getRowHeight(bx)!==null){var bs=this.getRowHeight(bx);
}else{var bs=Math.max(bq,Math.min(bs,br));
}bw[bx]={minHeight:bq,height:bs,maxHeight:br};
}
if(this.__rowSpans.length>0){this._fixHeightsRowSpan(bw);
}this.__rowHeights=bw;
return bw;
},_getColWidths:function(){if(this.__colWidths!=null){return this.__colWidths;
}var cl=[];
var ci=this.__maxColIndex;
var ck=this.__maxRowIndex;

for(var cq=0;cq<=ci;cq++){var co=0;
var cn=0;
var cj=Infinity;

for(var cr=0;cr<=ck;cr++){var ch=this.__grid[cr][cq];

if(!ch){continue;
}var cm=ch.getLayoutProperties().colSpan||0;

if(cm>1){continue;
}var cp=this.__getOuterSize(ch);

if(this.getColumnFlex(cq)>0){cn=Math.max(cn,cp.minWidth);
}else{cn=Math.max(cn,cp.width);
}co=Math.max(co,cp.width);
}var cn=Math.max(cn,this.getColumnMinWidth(cq));
var cj=this.getColumnMaxWidth(cq);

if(this.getColumnWidth(cq)!==null){var co=this.getColumnWidth(cq);
}else{var co=Math.max(cn,Math.min(co,cj));
}cl[cq]={minWidth:cn,width:co,maxWidth:cj};
}
if(this.__colSpans.length>0){this._fixWidthsColSpan(cl);
}this.__colWidths=cl;
return cl;
},_getColumnFlexOffsets:function(bT){var bU=this.getSizeHint();
var bY=bT-bU.width;

if(bY==0){return {};
}var bW=this._getColWidths();
var bV={};

for(var i=0,l=bW.length;i<l;i++){var ca=bW[i];
var bX=this.getColumnFlex(i);

if((bX<=0)||(ca.width==ca.maxWidth&&bY>0)||(ca.width==ca.minWidth&&bY<0)){continue;
}bV[i]={min:ca.minWidth,value:ca.width,max:ca.maxWidth,flex:bX};
}return qx.ui.layout.Util.computeFlexOffsets(bV,bT,bU.width);
},_getRowFlexOffsets:function(a){var b=this.getSizeHint();
var e=a-b.height;

if(e==0){return {};
}var f=this._getRowHeights();
var c={};

for(var i=0,l=f.length;i<l;i++){var g=f[i];
var d=this.getRowFlex(i);

if((d<=0)||(g.height==g.maxHeight&&e>0)||(g.height==g.minHeight&&e<0)){continue;
}c[i]={min:g.minHeight,value:g.height,max:g.maxHeight,flex:d};
}return qx.ui.layout.Util.computeFlexOffsets(c,a,b.height);
},renderLayout:function(dn,dp){if(this._invalidChildrenCache){this.__buildGrid();
}var dD=qx.ui.layout.Util;
var dr=this.getSpacingX();
var dx=this.getSpacingY();
var dI=this._getColWidths();
var dH=this._getColumnFlexOffsets(dn);
var ds=[];
var dK=this.__maxColIndex;
var dq=this.__maxRowIndex;
var dJ;

for(var dL=0;dL<=dK;dL++){dJ=dH[dL]?dH[dL].offset:0;
ds[dL]=dI[dL].width+dJ;
}var dA=this._getRowHeights();
var dC=this._getRowFlexOffsets(dp);
var dR=[];

for(var dy=0;dy<=dq;dy++){dJ=dC[dy]?dC[dy].offset:0;
dR[dy]=dA[dy].height+dJ;
}var dS=0;

for(var dL=0;dL<=dK;dL++){var top=0;

for(var dy=0;dy<=dq;dy++){var dF=this.__grid[dy][dL];
if(!dF){top+=dR[dy]+dx;
continue;
}var dt=dF.getLayoutProperties();
if(dt.row!==dy||dt.column!==dL){top+=dR[dy]+dx;
continue;
}var dQ=dr*(dt.colSpan-1);

for(var i=0;i<dt.colSpan;i++){dQ+=ds[dL+i];
}var dG=dx*(dt.rowSpan-1);

for(var i=0;i<dt.rowSpan;i++){dG+=dR[dy+i];
}var du=dF.getSizeHint();
var dO=dF.getMarginTop();
var dE=dF.getMarginLeft();
var dB=dF.getMarginBottom();
var dw=dF.getMarginRight();
var dz=Math.max(du.minWidth,Math.min(dQ-dE-dw,du.maxWidth));
var dP=Math.max(du.minHeight,Math.min(dG-dO-dB,du.maxHeight));
var dM=this.getCellAlign(dy,dL);
var dN=dS+dD.computeHorizontalAlignOffset(dM.hAlign,dz,dQ,dE,dw);
var dv=top+dD.computeVerticalAlignOffset(dM.vAlign,dP,dG,dO,dB);
dF.renderLayout(dN,dv,dz,dP);
top+=dR[dy]+dx;
}dS+=ds[dL]+dr;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__colWidths=null;
this.__rowHeights=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__buildGrid();
}var da=this._getColWidths();
var dc=0,dd=0;

for(var i=0,l=da.length;i<l;i++){var de=da[i];

if(this.getColumnFlex(i)>0){dc+=de.minWidth;
}else{dc+=de.width;
}dd+=de.width;
}var df=this._getRowHeights();
var cX=0,db=0;

for(var i=0,l=df.length;i<l;i++){var dg=df[i];

if(this.getRowFlex(i)>0){cX+=dg.minHeight;
}else{cX+=dg.height;
}db+=dg.height;
}var cW=this.getSpacingX()*(da.length-1);
var cV=this.getSpacingY()*(df.length-1);
var cY={minWidth:dc+cW,width:dd+cW,minHeight:cX+cV,height:db+cV};
return cY;
}},destruct:function(){this.__grid=this.__rowData=this.__colData=this.__colSpans=this.__rowSpans=this.__colWidths=this.__rowHeights=null;
}});
})();
(function(){var f="\n",e="",d=" &nbsp;",c="<br>",b=" ",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(k){return qx.util.StringEscape.escape(k,qx.bom.String.FROM_CHARCODE);
},unescape:function(g){return qx.util.StringEscape.unescape(g,qx.bom.String.TO_CHARCODE);
},fromText:function(p){return qx.bom.String.escape(p).replace(/(  |\n)/g,function(h){var i={"  ":d,"\n":c};
return i[h]||h;
});
},toText:function(j){return qx.bom.String.unescape(j.replace(/\s+|<([^>])+>/gi,function(o){if(/\s+/.test(o)){return b;
}else if(/^<BR|^<br/gi.test(o)){return f;
}else{return e;
}}));
}},defer:function(l,m,n){l.FROM_CHARCODE=qx.lang.Object.invert(l.TO_CHARCODE);
}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Class.define(a,{statics:{escape:function(m,n){var p,r=d;

for(var i=0,l=m.length;i<l;i++){var q=m.charAt(i);
var o=q.charCodeAt(0);

if(n[o]){p=f+n[o]+g;
}else{if(o>0x7F){p=b+o+g;
}else{p=q;
}}r+=p;
}return r;
},unescape:function(s,t){return s.replace(/&[#\w]+;/gi,function(h){var j=h;
var h=h.substring(1,h.length-1);
var k=t[h];

if(k){j=String.fromCharCode(k);
}else{if(h.charAt(0)==c){if(h.charAt(1).toUpperCase()==e){k=h.substring(2);
if(k.match(/^[0-9A-Fa-f]+$/gi)){j=String.fromCharCode(parseInt(k,16));
}}else{k=h.substring(1);
if(k.match(/^\d+$/gi)){j=String.fromCharCode(parseInt(k,10));
}}}}return j;
});
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(c){},parse:function(b){}}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(E){arguments.callee.base.call(this);
this.__locale=E;
},statics:{getIntegerInstance:function(){var u=qx.util.format.NumberFormat;

if(u._integerInstance==null){u._integerInstance=new u();
u._integerInstance.setMaximumFractionDigits(0);
}return u._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__locale:null,format:function(F){switch(F){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var J=(F<0);

if(J){F=-F;
}
if(this.getMaximumFractionDigits()!=null){var Q=Math.pow(10,this.getMaximumFractionDigits());
F=Math.round(F*Q)/Q;
}var P=String(Math.floor(F)).length;
var G=t+F;
var M=G.substring(0,P);

while(M.length<this.getMinimumIntegerDigits()){M=q+M;
}
if(this.getMaximumIntegerDigits()!=null&&M.length>this.getMaximumIntegerDigits()){M=M.substring(M.length-this.getMaximumIntegerDigits());
}var L=G.substring(P+1);

while(L.length<this.getMinimumFractionDigits()){L+=q;
}
if(this.getMaximumFractionDigits()!=null&&L.length>this.getMaximumFractionDigits()){L=L.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var I=M;
M=t;
var O;

for(O=I.length;O>3;O-=3){M=t+qx.locale.Number.getGroupSeparator(this.__locale)+I.substring(O-3,O)+M;
}M=I.substring(0,O)+M;
}var K=this.getPrefix()?this.getPrefix():t;
var H=this.getPostfix()?this.getPostfix():t;
var N=K+(J?r:t)+M;

if(L.length>0){N+=t+qx.locale.Number.getDecimalSeparator(this.__locale)+L;
}N+=H;
return N;
},parse:function(v){var A=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__locale)+t);
var y=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__locale)+t);
var w=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+A+g+n+y+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var z=w.exec(v);

if(z==null){throw new Error("Number string '"+v+"' does not match the number format");
}var B=(z[1]==r);
var D=z[2];
var C=z[3];
D=D.replace(new RegExp(A,m),t);
var x=(B?r:t)+D;

if(C!=null&&C.length!=0){C=C.replace(new RegExp(y),t);
x+=h+C;
}return parseFloat(x);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(g){return qx.locale.Manager.getInstance().localize(d,[],g);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(e){return qx.locale.Manager.getInstance().localize(c,[],e);
}}});
})();
(function(){var cE="(\\d\\d?)",cD="format",cC="",cB="abbreviated",cA="wide",cz="(",cy=")",cx="|",cw="stand-alone",cv="wildcard",ck="default",cj="literal",ci="'",ch="hour",cg="(\\d\\d?\\d?)",cf="ms",ce="narrow",cd="-",cc="quoted_literal",cb='a',cL="HH:mm:ss",cM="+",cJ="HHmmss",cK="long",cH='z',cI="0",cF="sec",cG="day",cN='Z',cO=" ",co="min",cn="mm",cq="(\\d+)",cp="h",cs="KK",cr='L',cu="Z",ct="(\\d\\d+)",cm="EEEE",cl="^",bc=":",bd='y',be="K",bf="a",bg="([\\+\\-]\\d\\d:?\\d\\d)",bh="GMT",bi="dd",bj="qx.util.format.DateFormat",bk="yyy",bl="H",cS="YYYY",cR="y",cQ="HH",cP="EE",cW='h',cV="S",cU='s',cT='A',cY="yyyyyy",cX="kk",bK="ss",bL='H',bI='S',bJ="MMMM",bO='c',bP="d",bM="([a-zA-Z]+)",bN='k',bG="m",bH='Y',bt='D',bs="yyyyy",bv='K',bu="hh",bp="SSS",bo="MM",br="yy",bq="(\\d\\d\\d\\d\\d\\d+)",bn="yyyy-MM-dd HH:mm:ss",bm="(\\d\\d\\d\\d\\d+)",bU="short",bV='d',bW="unkown",bX='m',bQ="(\\d\\d\\d\\d)",bR="(\\d\\d\\d+)",bS="k",bT='M',bY="(\\d\\d\\d\\d+)",ca="SS",bD="MMM",bC="s",bB="M",bA='w',bz="EEE",by="$",bx="?",bw='E',bF="z",bE="yyyy";
qx.Class.define(bj,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(ba,bb){arguments.callee.base.call(this);

if(!bb){this.__locale=qx.locale.Manager.getInstance().getLocale();
}else{this.__locale=bb;
}
if(ba!=null){this.__format=ba.toString();
}else{this.__format=qx.locale.Date.getDateFormat(cK,this.__locale)+cO+qx.locale.Date.getDateTimeFormat(cJ,cL,this.__locale);
}},statics:{getDateTimeInstance:function(){var g=qx.util.format.DateFormat;
var f=qx.locale.Date.getDateFormat(cK)+cO+qx.locale.Date.getDateTimeFormat(cJ,cL);

if(g._dateInstance==null||g._dateInstance.__format!=f){g._dateTimeInstance=new g();
}return g._dateTimeInstance;
},getDateInstance:function(){var dw=qx.util.format.DateFormat;
var dv=qx.locale.Date.getDateFormat(bU)+cC;

if(dw._dateInstance==null||dw._dateInstance.__format!=dv){dw._dateInstance=new dw(dv);
}return dw._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:bn,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__locale:null,__format:null,__parseFeed:null,__parseRules:null,__formatTree:null,__fillNumber:function(c,d){var e=cC+c;

while(e.length<d){e=cI+e;
}return e;
},__getDayInYear:function(J){var K=new Date(J.getTime());
var L=K.getDate();

while(K.getMonth()!=0){K.setDate(-1);
L+=K.getDate()+1;
}return L;
},__thursdayOfSameWeek:function(du){return new Date(du.getTime()+(3-((du.getDay()+6)%7))*86400000);
},__getWeekInYear:function(O){var Q=this.__thursdayOfSameWeek(O);
var R=Q.getFullYear();
var P=this.__thursdayOfSameWeek(new Date(R,0,4));
return Math.floor(1.5+(Q.getTime()-P.getTime())/86400000/7);
},format:function(h){if(h==null){return null;
}var o=qx.util.format.DateFormat;
var p=this.__locale;
var z=h.getFullYear();
var t=h.getMonth();
var B=h.getDate();
var j=h.getDay();
var u=h.getHours();
var q=h.getMinutes();
var v=h.getSeconds();
var x=h.getMilliseconds();
var A=h.getTimezoneOffset();
var m=A>0?1:-1;
var k=Math.floor(Math.abs(A)/60);
var r=Math.abs(A)%60;
this.__initFormatTree();
var y=cC;

for(var i=0;i<this.__formatTree.length;i++){var w=this.__formatTree[i];

if(w.type==cj){y+=w.text;
}else{var n=w.character;
var s=w.size;
var l=bx;

switch(n){case bd:case bH:if(s==2){l=this.__fillNumber(z%100,2);
}else{l=z+cC;

if(s>l.length){for(var i=l.length;i<s;i++){l=cI+l;
}}}break;
case bt:l=this.__fillNumber(this.__getDayInYear(h),s);
break;
case bV:l=this.__fillNumber(B,s);
break;
case bA:l=this.__fillNumber(this.__getWeekInYear(h),s);
break;
case bw:if(s==2){l=qx.locale.Date.getDayName(ce,j,p,cD);
}else if(s==3){l=qx.locale.Date.getDayName(cB,j,p,cD);
}else if(s==4){l=qx.locale.Date.getDayName(cA,j,p,cD);
}break;
case bO:if(s==2){l=qx.locale.Date.getDayName(ce,j,p,cw);
}else if(s==3){l=qx.locale.Date.getDayName(cB,j,p,cw);
}else if(s==4){l=qx.locale.Date.getDayName(cA,j,p,cw);
}break;
case bT:if(s==1||s==2){l=this.__fillNumber(t+1,s);
}else if(s==3){l=qx.locale.Date.getMonthName(cB,t,p,cD);
}else if(s==4){l=qx.locale.Date.getMonthName(cA,t,p,cD);
}break;
case cr:if(s==1||s==2){l=this.__fillNumber(t+1,s);
}else if(s==3){l=qx.locale.Date.getMonthName(cB,t,p,cw);
}else if(s==4){l=qx.locale.Date.getMonthName(cA,t,p,cw);
}break;
case cb:l=(u<12)?qx.locale.Date.getAmMarker(p):qx.locale.Date.getPmMarker(p);
break;
case bL:l=this.__fillNumber(u,s);
break;
case bN:l=this.__fillNumber((u==0)?24:u,s);
break;
case bv:l=this.__fillNumber(u%12,s);
break;
case cW:l=this.__fillNumber(((u%12)==0)?12:(u%12),s);
break;
case bX:l=this.__fillNumber(q,s);
break;
case cU:l=this.__fillNumber(v,s);
break;
case bI:l=this.__fillNumber(x,s);
break;
case cH:if(s==1){l=bh+((m>0)?cd:cM)+this.__fillNumber(Math.abs(k))+bc+this.__fillNumber(r,2);
}else if(s==2){l=o.MEDIUM_TIMEZONE_NAMES[k];
}else if(s==3){l=o.FULL_TIMEZONE_NAMES[k];
}break;
case cN:l=((m>0)?cd:cM)+this.__fillNumber(Math.abs(k),2)+this.__fillNumber(r,2);
break;
}y+=l;
}}return y;
},parse:function(S){this.__initParseFeed();
var Y=this.__parseFeed.regex.exec(S);

if(Y==null){throw new Error("Date string '"+S+"' does not match the date format: "+this.__format);
}var T={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var U=1;

for(var i=0;i<this.__parseFeed.usedRules.length;i++){var W=this.__parseFeed.usedRules[i];
var V=Y[U];

if(W.field!=null){T[W.field]=parseInt(V,10);
}else{W.manipulator(T,V);
}U+=(W.groups==null)?1:W.groups;
}var X=new Date(T.year,T.month,T.day,(T.ispm)?(T.hour+12):T.hour,T.min,T.sec,T.ms);

if(T.month!=X.getMonth()||T.year!=X.getFullYear()){throw new Error("Error parsing date '"+S+"': the value for day or month is too large");
}return X;
},__initFormatTree:function(){if(this.__formatTree!=null){return;
}this.__formatTree=[];
var G;
var E=0;
var I=cC;
var C=this.__format;
var F=ck;
var i=0;

while(i<C.length){var H=C.charAt(i);

switch(F){case cc:if(H==ci){if(i+1>=C.length){i++;
break;
}var D=C.charAt(i+1);

if(D==ci){I+=H;
i++;
}else{i++;
F=bW;
}}else{I+=H;
i++;
}break;
case cv:if(H==G){E++;
i++;
}else{this.__formatTree.push({type:cv,character:G,size:E});
G=null;
E=0;
F=ck;
}break;
default:if((H>=cb&&H<=cH)||(H>=cT&&H<=cN)){G=H;
F=cv;
}else if(H==ci){if(i+1>=C.length){I+=H;
i++;
break;
}var D=C.charAt(i+1);

if(D==ci){I+=H;
i++;
}i++;
F=cc;
}else{F=ck;
}
if(F!=ck){if(I.length>0){this.__formatTree.push({type:cj,text:I});
I=cC;
}}else{I+=H;
i++;
}break;
}}if(G!=null){this.__formatTree.push({type:cv,character:G,size:E});
}else if(I.length>0){this.__formatTree.push({type:cj,text:I});
}},__initParseFeed:function(){if(this.__parseFeed!=null){return ;
}var dH=this.__format;
this.__initParseRules();
this.__initFormatTree();
var dN=[];
var dJ=cl;

for(var dF=0;dF<this.__formatTree.length;dF++){var dO=this.__formatTree[dF];

if(dO.type==cj){dJ+=qx.lang.String.escapeRegexpChars(dO.text);
}else{var dG=dO.character;
var dK=dO.size;
var dI;

for(var dP=0;dP<this.__parseRules.length;dP++){var dL=this.__parseRules[dP];

if(dG==dL.pattern.charAt(0)&&dK==dL.pattern.length){dI=dL;
break;
}}if(dI==null){var dM=cC;

for(var i=0;i<dK;i++){dM+=dG;
}throw new Error("Malformed date format: "+dH+". Wildcard "+dM+" is not supported");
}else{dN.push(dI);
dJ+=dI.regex;
}}}dJ+=by;
var dE;

try{dE=new RegExp(dJ);
}catch(dB){throw new Error("Malformed date format: "+dH);
}this.__parseFeed={regex:dE,"usedRules":dN,pattern:dJ};
},__initParseRules:function(){var df=qx.util.format.DateFormat;
var dl=qx.lang.String;

if(this.__parseRules!=null){return ;
}var dg=this.__parseRules=[];
var dt=function(dW,dX){dX=parseInt(dX,10);

if(dX<df.ASSUME_YEAR_2000_THRESHOLD){dX+=2000;
}else if(dX<100){dX+=1900;
}dW.year=dX;
};
var dm=function(a,b){a.month=parseInt(b,10)-1;
};
var dj=function(dU,dV){dU.ispm=(dV==df.PM_MARKER);
};
var di=function(dC,dD){dC.hour=parseInt(dD,10)%24;
};
var dh=function(dx,dy){dx.hour=parseInt(dy,10)%12;
};
var dq=function(dY,ea){return;
};
var dn=qx.locale.Date.getMonthNames(cB,this.__locale,cD);

for(var i=0;i<dn.length;i++){dn[i]=dl.escapeRegexpChars(dn[i].toString());
}var dp=function(eb,ec){ec=dl.escapeRegexpChars(ec);
eb.month=dn.indexOf(ec);
};
var dc=qx.locale.Date.getMonthNames(cA,this.__locale,cD);

for(var i=0;i<dc.length;i++){dc[i]=dl.escapeRegexpChars(dc[i].toString());
}var db=function(dQ,dR){dR=dl.escapeRegexpChars(dR);
dQ.month=dc.indexOf(dR);
};
var de=qx.locale.Date.getDayNames(ce,this.__locale,cD);

for(var i=0;i<de.length;i++){de[i]=dl.escapeRegexpChars(de[i].toString());
}var da=function(M,N){N=dl.escapeRegexpChars(N);
M.month=de.indexOf(N);
};
var dr=qx.locale.Date.getDayNames(cB,this.__locale,cD);

for(var i=0;i<dr.length;i++){dr[i]=dl.escapeRegexpChars(dr[i].toString());
}var dk=function(dS,dT){dT=dl.escapeRegexpChars(dT);
dS.month=dr.indexOf(dT);
};
var ds=qx.locale.Date.getDayNames(cA,this.__locale,cD);

for(var i=0;i<ds.length;i++){ds[i]=dl.escapeRegexpChars(ds[i].toString());
}var dd=function(dz,dA){dA=dl.escapeRegexpChars(dA);
dz.month=ds.indexOf(dA);
};
dg.push({pattern:cS,regex:bQ,manipulator:dt});
dg.push({pattern:cR,regex:cq,manipulator:dt});
dg.push({pattern:br,regex:ct,manipulator:dt});
dg.push({pattern:bk,regex:bR,manipulator:dt});
dg.push({pattern:bE,regex:bY,manipulator:dt});
dg.push({pattern:bs,regex:bm,manipulator:dt});
dg.push({pattern:cY,regex:bq,manipulator:dt});
dg.push({pattern:bB,regex:cE,manipulator:dm});
dg.push({pattern:bo,regex:cE,manipulator:dm});
dg.push({pattern:bD,regex:cz+dn.join(cx)+cy,manipulator:dp});
dg.push({pattern:bJ,regex:cz+dc.join(cx)+cy,manipulator:db});
dg.push({pattern:bi,regex:cE,field:cG});
dg.push({pattern:bP,regex:cE,field:cG});
dg.push({pattern:cP,regex:cz+de.join(cx)+cy,manipulator:da});
dg.push({pattern:bz,regex:cz+dr.join(cx)+cy,manipulator:dk});
dg.push({pattern:cm,regex:cz+ds.join(cx)+cy,manipulator:dd});
dg.push({pattern:bf,regex:cz+df.AM_MARKER+cx+df.PM_MARKER+cy,manipulator:dj});
dg.push({pattern:cQ,regex:cE,field:ch});
dg.push({pattern:bl,regex:cE,field:ch});
dg.push({pattern:cX,regex:cE,manipulator:di});
dg.push({pattern:bS,regex:cE,manipulator:di});
dg.push({pattern:cs,regex:cE,field:ch});
dg.push({pattern:be,regex:cE,field:ch});
dg.push({pattern:bu,regex:cE,manipulator:dh});
dg.push({pattern:cp,regex:cE,manipulator:dh});
dg.push({pattern:cn,regex:cE,field:co});
dg.push({pattern:bG,regex:cE,field:co});
dg.push({pattern:bK,regex:cE,field:cF});
dg.push({pattern:bC,regex:cE,field:cF});
dg.push({pattern:bp,regex:cg,field:cf});
dg.push({pattern:ca,regex:cg,field:cf});
dg.push({pattern:cV,regex:cg,field:cf});
dg.push({pattern:cu,regex:bg,manipulator:dq});
dg.push({pattern:bF,regex:bM,manipulator:dq});
}},destruct:function(){this.__formatTree=this.__parseFeed=this.__parseRules=null;
}});
})();
(function(){var m="_",l="format",k="thu",j="sat",h="cldr_day_",g="cldr_month_",f="wed",e="fri",d="tue",c="mon",D="sun",C="short",B="HH:mm",A="HHmmsszz",z="HHmm",y="HHmmss",x="cldr_date_format_",w="HH:mm:ss zz",v="full",u="cldr_pm",s="long",t="medium",q="cldr_am",r="qx.locale.Date",o="cldr_date_time_format_",p="cldr_time_format_",n="HH:mm:ss";
qx.Class.define(r,{statics:{__mgr:qx.locale.Manager.getInstance(),getAmMarker:function(bj){return this.__mgr.localize(q,[],bj);
},getPmMarker:function(bx){return this.__mgr.localize(u,[],bx);
},getDayNames:function(length,Q,R){var R=R?R:l;
{};
var T=[D,c,d,f,k,e,j];
var U=[];

for(var i=0;i<T.length;i++){var S=h+R+m+length+m+T[i];
U.push(this.__mgr.localize(S,[],Q));
}return U;
},getDayName:function(length,ba,bb,bc){var bc=bc?bc:l;
{};
var be=[D,c,d,f,k,e,j];
var bd=h+bc+m+length+m+be[ba];
return this.__mgr.localize(bd,[],bb);
},getMonthNames:function(length,bf,bg){var bg=bg?bg:l;
{};
var bi=[];

for(var i=0;i<12;i++){var bh=g+bg+m+length+m+(i+1);
bi.push(this.__mgr.localize(bh,[],bf));
}return bi;
},getMonthName:function(length,V,W,X){var X=X?X:l;
{};
var Y=g+X+m+length+m+(V+1);
return this.__mgr.localize(Y,[],W);
},getDateFormat:function(K,L){{};
var M=x+K;
return this.__mgr.localize(M,[],L);
},getDateTimeFormat:function(bo,bp,bq){var bs=o+bo;
var br=this.__mgr.localize(bs,[],bq);

if(br==bs){br=bp;
}return br;
},getTimeFormat:function(bk,bl){{};
var bn=p+bk;
var bm=this.__mgr.localize(bn,[],bl);

if(bm!=bn){return bm;
}
switch(bk){case C:case t:return qx.locale.Date.getDateTimeFormat(z,B);
case s:return qx.locale.Date.getDateTimeFormat(y,n);
case v:return qx.locale.Date.getDateTimeFormat(A,w);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(H){var I={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var J=qx.locale.Date._getTerritory(H);
return I[J]!=null?I[J]:1;
},getWeekendStart:function(N){var P={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var O=qx.locale.Date._getTerritory(N);
return P[O]!=null?P[O]:6;
},getWeekendEnd:function(E){var F={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var G=qx.locale.Date._getTerritory(E);
return F[G]!=null?F[G]:0;
},isWeekend:function(bt,bu){var bw=qx.locale.Date.getWeekendStart(bu);
var bv=qx.locale.Date.getWeekendEnd(bu);

if(bv>bw){return ((bt>=bw)&&(bt<=bv));
}else{return ((bt>=bw)||(bt<=bv));
}},_getTerritory:function(a){if(a){var b=a.split(m)[1]||a;
}else{b=this.__mgr.getTerritory()||this.__mgr.getLanguage();
}return b.toUpperCase();
}}});
})();
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var R="showingPlaceholder",Q="color",P="",O="none",N="qx.client",M="Boolean",L="qx.event.type.Data",K="readonly",J="input",I="focusin",bE="visibility",bD="focusout",bC="hidden",bB="absolute",bA="readOnly",bz="text",by="_applyTextAlign",bx="px",bw="RegExp",bv=")",Y="syncAppearance",ba="gecko",W="A",X="change",U="textAlign",V="focused",S="center",T="visible",bb="disabled",bc="url(",bj="String",bh="resize",bn="qx.ui.form.AbstractField",bl="transparent",br="off",bp="spellcheck",be="false",bu="right",bt="PositiveInteger",bs="mshtml",bd="abstract",bf="block",bg="webkit",bi="_applyReadOnly",bk="_applyPlaceholder",bm="left",bo="changeValue",bq="qx/static/blank.gif";
qx.Class.define(bn,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:bd,construct:function(y){arguments.callee.base.call(this);

if(y!=null){this.setValue(y);
}this.getContentElement().addListener(X,this._onChangeContent,this);
this.addListener(Y,this._syncPlaceholder,this);
},events:{"input":L,"changeValue":L},properties:{textAlign:{check:[bm,S,bu],nullable:true,themeable:true,apply:by},readOnly:{check:M,apply:bi,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:bt,init:Infinity},liveUpdate:{check:M,init:false},placeholder:{check:bj,nullable:true,apply:bk},filter:{check:bw,nullable:true,init:null}},members:{__nullValue:true,__placeholder:null,__oldValue:null,__oldInputValue:null,getFocusElement:function(){var v=this.getContentElement();

if(v){return v;
}},_createInputElement:function(){return new qx.html.Input(bz);
},renderLayout:function(a,top,b,c){var d=this._updateInsets;
var i=arguments.callee.base.call(this,a,top,b,c);
if(!i){return;
}var g=i.size||d;
var j=bx;

if(g||i.local||i.margin){var f=this.getInsets();
var innerWidth=b-f.left-f.right;
var innerHeight=c-f.top-f.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var h=this.getContentElement();

if(d){this.__getPlaceholderElement().setStyles({"left":f.left+j,"top":f.top+j});
}
if(g){this.__getPlaceholderElement().setStyles({"width":innerWidth+j,"height":innerHeight+j});
h.setStyles({"width":innerWidth+j,"height":innerHeight+j});
}},_createContentElement:function(){var u=this._createInputElement();
u.setStyles({"border":O,"padding":0,"margin":0,"display":bf,"background":bl,"outline":O,"appearance":O,"position":bB,"autoComplete":br});
u.setSelectable(this.getSelectable());
u.setEnabled(this.getEnabled());
u.addListener(J,this._onHtmlInput,this);
if(qx.core.Variant.isSet(N,ba)){u.setAttribute(bp,be);
}if(qx.core.Variant.isSet(N,bg)){u.setStyle(bh,O);
}if(qx.core.Variant.isSet(N,bs)){u.setStyles({backgroundImage:bc+qx.util.ResourceManager.getInstance().toUri(bq)+bv});
}return u;
},_applyEnabled:function(G,H){arguments.callee.base.call(this,G,H);
this.getContentElement().setEnabled(G);

if(G){this._showPlaceholder();
}else{this._removePlaceholder();
}},__textSize:{width:16,height:16},_getContentHint:function(){return {width:this.__textSize.width*10,height:this.__textSize.height||16};
},_applyFont:function(q,r){var s;

if(q){var t=qx.theme.manager.Font.getInstance().resolve(q);
s=t.getStyles();
}else{s=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(s);
this.__getPlaceholderElement().setStyles(s);
if(q){this.__textSize=qx.bom.Label.getTextSize(W,s);
}else{delete this.__textSize;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(E,F){if(E){this.getContentElement().setStyle(Q,qx.theme.manager.Color.getInstance().resolve(E));
this.__getPlaceholderElement().setStyle(Q,qx.theme.manager.Color.getInstance().resolve(E));
}else{this.getContentElement().removeStyle(Q);
this.__getPlaceholderElement().removeStyle(Q);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__textSize;
},_onHtmlInput:function(e){var n=e.getData();
var m=true;
this.__nullValue=false;
if(this.getFilter()!=null){var o=P;
var k=n.search(this.getFilter());
var l=n;

while(k>=0){o=o+(l.charAt(k));
l=l.substring(k+1,l.length);
k=l.search(this.getFilter());
}
if(o!=n){m=false;
n=o;
this.getContentElement().setValue(n);
}}if(n.length>this.getMaxLength()){var m=false;
this.getContentElement().setValue(n.substr(0,this.getMaxLength()));
}if(m){this.fireDataEvent(J,n,this.__oldInputValue);
this.__oldInputValue=n;
if(this.getLiveUpdate()){this.__fireChangeValueEvent(n);
}}},__fireChangeValueEvent:function(bF){this.fireNonBubblingEvent(bo,qx.event.type.Data,[bF,this.__oldValue]);
this.__oldValue=bF;
},setValue:function(bG){if(bG===null){if(this.__nullValue){return bG;
}bG=P;
this.__nullValue=true;
}else{this.__nullValue=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bG)){var bI=this.getContentElement();

if(bG.length>this.getMaxLength()){bG=bG.substr(0,this.getMaxLength());
}
if(bI.getValue()!=bG){var bJ=bI.getValue();
bI.setValue(bG);
var bH=this.__nullValue?null:bG;
this.__oldValue=bJ;
this.__fireChangeValueEvent(bH);
}this._showPlaceholder();
return bG;
}throw new Error("Invalid value type: "+bG);
},getValue:function(){var p=this.getContentElement().getValue();
return this.__nullValue?null:p;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__nullValue=e.getData()===null;
this.__fireChangeValueEvent(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bK,bL){this.getContentElement().setTextSelection(bK,bL);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bN=this.getValue()||P;
var bM=this.getPlaceholder();

if(bM!=null&&bN==P&&!this.hasState(V)&&!this.hasState(bb)){if(this.hasState(R)){this._syncPlaceholder();
}else{this.addState(R);
}}},_removePlaceholder:function(){if(this.hasState(R)){this.__getPlaceholderElement().setStyle(bE,bC);
this.removeState(R);
}},_syncPlaceholder:function(){if(this.hasState(R)){this.__getPlaceholderElement().setStyle(bE,T);
}},__getPlaceholderElement:function(){if(this.__placeholder==null){this.__placeholder=new qx.html.Label();
this.__placeholder.setStyles({"visibility":bC,"zIndex":6,"position":bB});
this.getContainerElement().add(this.__placeholder);
}return this.__placeholder;
},_applyPlaceholder:function(C,D){this.__getPlaceholderElement().setValue(C);

if(C!=null){this.addListener(I,this._removePlaceholder,this);
this.addListener(bD,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(I,this._removePlaceholder,this);
this.removeListener(bD,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(w,x){this.getContentElement().setStyle(U,w);
},_applyReadOnly:function(z,A){var B=this.getContentElement();
B.setAttribute(bA,z);

if(z){this.addState(K);
this.setFocusable(false);
}else{this.removeState(K);
this.setFocusable(true);
}}},destruct:function(){this.__placeholder=null;
}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var p="none",o="wrap",n="value",m="qx.client",l="textarea",k="off",j="on",i="qxSelectable",h="",g="webkit",c="input",f="qx.html.Input",e="select",b="disabled",a="read-only",d="userSelect";
qx.Class.define(f,{extend:qx.html.Element,construct:function(s){arguments.callee.base.call(this);
this.__type=s;
if(s===e||s===l){this.setNodeName(s);
}else{this.setNodeName(c);
}},members:{__type:null,__selectable:null,__enabled:null,_createDomElement:function(){return qx.bom.Input.create(this.__type);
},_applyProperty:function(name,A){arguments.callee.base.call(this,name,A);
var B=this.getDomElement();

if(name===n){qx.bom.Input.setValue(B,A);
}else if(name===o){qx.bom.Input.setWrap(B,A);
}},setEnabled:qx.core.Variant.select(m,{"webkit":function(z){this.__enabled=z;

if(!z){this.setStyles({"userModify":a,"userSelect":p});
}else{this.setStyles({"userModify":null,"userSelect":this.__selectable?null:p});
}},"default":function(x){this.setAttribute(b,x===false);
}}),setSelectable:qx.core.Variant.select(m,{"webkit":function(t){this.__selectable=t;
this.setAttribute(i,t?j:k);
if(qx.core.Variant.isSet(m,g)){var u=this.__enabled?t?null:p:p;
this.setStyle(d,u);
}},"default":function(r){this.setAttribute(i,r?j:k);
}}),setValue:function(v){var w=this.getDomElement();

if(w){if(w.value!=v){qx.bom.Input.setValue(w,v);
}}else{this._setProperty(n,v);
}return this;
},getValue:function(){var q=this.getDomElement();

if(q){return qx.bom.Input.getValue(q);
}return this._getProperty(n)||h;
},setWrap:function(y){if(this.__type===l){this._setProperty(o,y);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__type===l){return this._getProperty(o);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var E="change",D="input",C="qx.client",B="text",A="password",z="checkbox",y="radio",x="textarea",w="keypress",v="opera",p="propertychange",u="blur",s="keydown",n="keyup",m="select-multiple",r="checked",q="value",t="select",k="qx.event.handler.Input";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(C,v)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__enter:false,__onInputTimeoutId:null,__oldValue:null,canHandleEvent:function(S,T){var U=S.tagName.toLowerCase();

if(T===D&&(U===D||U===x)){return true;
}
if(T===E&&(U===D||U===x||U===t)){return true;
}return false;
},registerEvent:qx.core.Variant.select(C,{"mshtml":function(N,O,P){if(!N.__inputHandlerAttached){var Q=N.tagName.toLowerCase();
var R=N.type;

if(R===B||R===A||Q===x||R===z||R===y){qx.bom.Event.addNativeListener(N,p,this._onPropertyWrapper);
}
if(R!==z&&R!==y){qx.bom.Event.addNativeListener(N,E,this._onChangeValueWrapper);
}
if(R===B||R===A){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,N);
qx.bom.Event.addNativeListener(N,w,this._onKeyPressWrapped);
}N.__inputHandlerAttached=true;
}},"default":function(bd,be,bf){if(be===D){this.__registerInputListener(bd);
}else if(be===E){if(bd.type===y||bd.type===z){qx.bom.Event.addNativeListener(bd,E,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(bd,E,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(C,v)){if(bd.type===B||bd.type===A){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,bd);
qx.bom.Event.addNativeListener(bd,w,this._onKeyPressWrapped);
}}}}}),__registerInputListener:qx.core.Variant.select(C,{"mshtml":null,"webkit":function(c){var d=c.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&d==x){qx.bom.Event.addNativeListener(c,w,this._onInputWrapper);
}qx.bom.Event.addNativeListener(c,D,this._onInputWrapper);
},"opera":function(L){qx.bom.Event.addNativeListener(L,n,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(L,s,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(L,u,this._onBlurWrapper);
qx.bom.Event.addNativeListener(L,D,this._onInputWrapper);
},"default":function(F){qx.bom.Event.addNativeListener(F,D,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(C,{"mshtml":function(f,g){if(f.__inputHandlerAttached){var h=f.tagName.toLowerCase();
var j=f.type;

if(j===B||j===A||h===x||j===z||j===y){qx.bom.Event.removeNativeListener(f,p,this._onPropertyWrapper);
}
if(j!==z&&j!==y){qx.bom.Event.removeNativeListener(f,E,this._onChangeValueWrapper);
}
if(j===B||j===A){qx.bom.Event.removeNativeListener(f,w,this._onKeyPressWrapped);
}
try{delete f.__inputHandlerAttached;
}catch(M){f.__inputHandlerAttached=null;
}}},"default":function(I,J){if(J===D){this.__registerInputListener(I);
}else if(J===E){if(I.type===y||I.type===z){qx.bom.Event.removeNativeListener(I,E,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(I,E,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(C,v)){if(I.type===B||I.type===A){qx.bom.Event.removeNativeListener(I,w,this._onKeyPressWrapped);
}}}}),__unregisterInputListener:qx.core.Variant.select(C,{"mshtml":null,"webkit":function(ba){var bb=ba.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&bb==x){qx.bom.Event.removeNativeListener(ba,w,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(ba,D,this._onInputWrapper);
},"opera":function(W){qx.bom.Event.removeNativeListener(W,n,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(W,s,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(W,u,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(W,D,this._onInputWrapper);
},"default":function(bc){qx.bom.Event.removeNativeListener(bc,D,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(C,{"mshtml|opera":function(e,V){if(e.keyCode===13){if(V.value!==this.__oldValue){this.__oldValue=V.value;
qx.event.Registration.fireEvent(V,E,qx.event.type.Data,[V.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(C,{"opera":function(e){if(e.keyCode===13){this.__enter=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(C,{"opera":function(e){if(e.keyCode===13){this.__enter=false;
}},"default":null}),_onBlur:qx.core.Variant.select(C,{"opera":function(e){if(this.__onInputTimeoutId){window.clearTimeout(this.__onInputTimeoutId);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var b=e.target;
if(!this.__enter){if(qx.core.Variant.isSet(C,v)){this.__onInputTimeoutId=window.setTimeout(function(){qx.event.Registration.fireEvent(b,D,qx.event.type.Data,[b.value]);
},0);
}else{qx.event.Registration.fireEvent(b,D,qx.event.type.Data,[b.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var H=e.target||e.srcElement;
var G=H.value;

if(H.type===m){var G=[];

for(var i=0,o=H.options,l=o.length;i<l;i++){if(o[i].selected){G.push(o[i].value);
}}}qx.event.Registration.fireEvent(H,E,qx.event.type.Data,[G]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var K=e.target;

if(K.type===y){if(K.checked){qx.event.Registration.fireEvent(K,E,qx.event.type.Data,[K.value]);
}}else{qx.event.Registration.fireEvent(K,E,qx.event.type.Data,[K.checked]);
}}),_onProperty:qx.core.Variant.select(C,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var X=e.target||e.srcElement;
var Y=e.propertyName;

if(Y===q&&(X.type===B||X.type===A||X.tagName.toLowerCase()===x)){if(!X.__inValueSet){qx.event.Registration.fireEvent(X,D,qx.event.type.Data,[X.value]);
}}else if(Y===r){if(X.type===z){qx.event.Registration.fireEvent(X,E,qx.event.type.Data,[X.checked]);
}else if(X.checked){qx.event.Registration.fireEvent(X,E,qx.event.type.Data,[X.value]);
}}}),"default":function(){}})},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var E="",D="select",C="soft",B="off",A="qx.client",z="wrap",y="text",x="mshtml",w="number",v="checkbox",o="select-one",u="input",r="option",n="value",m="radio",q="qx.bom.Input",p="nowrap",s="textarea",k="auto",t="normal";
qx.Class.define(q,{statics:{__types:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(J,K,L){{};
var K=K?qx.lang.Object.clone(K):{};
var M;

if(J===s||J===D){M=J;
}else{M=u;
K.type=J;
}return qx.bom.Element.create(M,K,L);
},setValue:function(a,b){var g=a.nodeName.toLowerCase();
var d=a.type;
var Array=qx.lang.Array;
var h=qx.lang.Type;

if(typeof b===w){b+=E;
}
if((d===v||d===m)){if(h.isArray(b)){a.checked=Array.contains(b,a.value);
}else{a.checked=a.value==b;
}}else if(g===D){var c=h.isArray(b);
var j=a.options;
var e,f;

for(var i=0,l=j.length;i<l;i++){e=j[i];
f=e.getAttribute(n);

if(f==null){f=e.text;
}e.selected=c?Array.contains(b,f):b==f;
}
if(c&&b.length==0){a.selectedIndex=-1;
}}else if(d===y&&qx.core.Variant.isSet(A,x)){a.__inValueSet=true;
a.value=b;
a.__inValueSet=null;
}else{a.value=b;
}},getValue:function(R){var X=R.nodeName.toLowerCase();

if(X===r){return (R.attributes.value||{}).specified?R.value:R.text;
}
if(X===D){var S=R.selectedIndex;
if(S<0){return null;
}var Y=[];
var bb=R.options;
var ba=R.type==o;
var W=qx.bom.Input;
var V;
for(var i=ba?S:0,U=ba?S+1:bb.length;i<U;i++){var T=bb[i];

if(T.selected){V=W.getValue(T);
if(ba){return V;
}Y.push(V);
}}return Y;
}else{return (R.value||E).replace(/\r/g,E);
}},setWrap:qx.core.Variant.select(A,{"mshtml":function(H,I){H.wrap=I?C:B;
},"gecko|webkit":function(N,O){var Q=O?C:B;
var P=O?E:k;
N.setAttribute(z,Q);
N.style.overflow=P;
},"default":function(F,G){F.style.whiteSpace=G?t:p;
}})}});
})();
(function(){var bS="",bR="Number",bQ='</div>',bP='" ',bO="paneUpdated",bN='<div>',bM="</div>",bL="overflow: hidden;",bK="qx.event.type.Data",bJ="paneReloadsData",cl="div",ck='style="',cj="_applyMaxCacheLines",ci="qx.ui.table.pane.Pane",ch="width: 100%;",cg="qx.event.type.Event",cf="_applyVisibleRowCount",ce='>',cd="line-height: ",cc="appear",ca='class="',cb="width:100%;",bX="px;",bY='<div ',bV="'>",bW="_applyFirstVisibleRow",bT="<div style='",bU=";position:relative;";
qx.Class.define(ci,{extend:qx.ui.core.Widget,construct:function(bI){arguments.callee.base.call(this);
this.__paneScroller=bI;
this.__lastColCount=0;
this.__lastRowCount=0;
this.__rowCache=[];
},events:{"paneReloadsData":bK,"paneUpdated":cg},properties:{firstVisibleRow:{check:bR,init:0,apply:bW},visibleRowCount:{check:bR,init:0,apply:cf},maxCacheLines:{check:bR,init:1000,apply:cj},allowShrinkX:{refine:true,init:false}},members:{__lastRowCount:null,__lastColCount:null,__paneScroller:null,__tableContainer:null,__focusedRow:null,__focusedCol:null,__rowCache:null,__rowCacheCount:0,_applyFirstVisibleRow:function(B,C){this.updateContent(false,B-C);
},_applyVisibleRowCount:function(o,p){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__paneScroller;
},getTable:function(){return this.__paneScroller.getTable();
},setFocusedCell:function(q,r,s){if(q!=this.__focusedCol||r!=this.__focusedRow){var t=this.__focusedRow;
this.__focusedCol=q;
this.__focusedRow=r;
if(r!=t&&!s){if(t!==null){this.updateContent(false,null,t,true);
}
if(r!==null){this.updateContent(false,null,r,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(u,v){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(bC,bD,bE,bF){this.__rowCacheClear();
var bH=this.getFirstVisibleRow();
var bG=this.getVisibleRowCount();

if(bD==-1||bD>=bH&&bC<bH+bG){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(a,b){if(this.__rowCacheCount>=a&&a!==-1){this.__rowCacheClear();
}},__rowCacheClear:function(){this.__rowCache=[];
this.__rowCacheCount=0;
},__rowCacheGet:function(w,z,A){if(!z&&!A&&this.__rowCache[w]){return this.__rowCache[w];
}else{return null;
}},__rowCacheSet:function(H,I,J,K){var L=this.getMaxCacheLines();

if(!J&&!K&&!this.__rowCache[H]&&L>0){this._applyMaxCacheLines(L);
this.__rowCache[H]=I;
this.__rowCacheCount+=1;
}},updateContent:function(D,E,F,G){if(D){this.__rowCacheClear();
}if(E&&Math.abs(E)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(E);
}else if(G&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(F);
}else{this._updateAllRows();
}},_updateRowStyles:function(c){var g=this.getContentElement().getDomElement();

if(!g||!g.firstChild){this._updateAllRows();
return;
}var l=this.getTable();
var e=l.getSelectionModel();
var h=l.getTableModel();
var m=l.getDataRowRenderer();
var f=g.firstChild.childNodes;
var k={table:l};
var n=this.getFirstVisibleRow();
var y=0;
var d=f.length;

if(c!=null){var j=c-n;

if(j>=0&&j<d){n=c;
y=j;
d=j+1;
}else{return;
}}
for(;y<d;y++,n++){k.row=n;
k.selected=e.isSelectedIndex(n);
k.focusedRow=(this.__focusedRow==n);
k.rowData=h.getRowData(n);
m.updateDataRowElement(k,f[y]);
}},_getRowsHtml:function(M,N){var T=this.getTable();
var W=T.getSelectionModel();
var Q=T.getTableModel();
var R=T.getTableColumnModel();
var bl=this.getPaneScroller().getTablePaneModel();
var bc=T.getDataRowRenderer();
Q.prefetchRows(M,M+N-1);
var bi=T.getRowHeight();
var bk=bl.getColumnCount();
var S=0;
var P=[];
for(var x=0;x<bk;x++){var bn=bl.getColumnAtX(x);
var V=R.getColumnWidth(bn);
P.push({col:bn,xPos:x,editable:Q.isColumnEditable(bn),focusedCol:this.__focusedCol==bn,styleLeft:S,styleWidth:V});
S+=V;
}var bm=[];
var bo=false;

for(var U=M;U<M+N;U++){var X=W.isSelectedIndex(U);
var bb=(this.__focusedRow==U);
var bf=this.__rowCacheGet(U,X,bb);

if(bf){bm.push(bf);
continue;
}var be=[];
var bh={table:T};
bh.styleHeight=bi;
bh.row=U;
bh.selected=X;
bh.focusedRow=bb;
bh.rowData=Q.getRowData(U);

if(!bh.rowData){bo=true;
}be.push(bY);
var O=bc.getRowClass(bh);

if(O){be.push(ca,O,bP);
}var bd=bc.createRowStyle(bh);
bd+=bU+bc.getRowHeightStyle(bi)+cb;

if(bd){be.push(ck,bd,bP);
}be.push(ce);

for(var x=0;x<bk;x++){var Y=P[x];

for(var bj in Y){bh[bj]=Y[bj];
}var bn=bh.col;
bh.value=Q.getValue(bn,U);
var ba=R.getDataCellRenderer(bn);
ba.createDataCellHtml(bh,be);
}be.push(bQ);
var bg=be.join(bS);
this.__rowCacheSet(U,bg,X,bb);
bm.push(bg);
}this.fireDataEvent(bJ,bo);
return bm.join(bS);
},_scrollContent:function(cm){var cn=this.getContentElement().getDomElement();

if(!(cn&&cn.firstChild)){this._updateAllRows();
return;
}var cw=cn.firstChild;
var co=cw.childNodes;
var cu=this.getVisibleRowCount();
var ct=this.getFirstVisibleRow();
var cr=this.getTable().getTableModel();
var cx=0;
cx=cr.getRowCount();
if(ct+cu>cx){this._updateAllRows();
return;
}var cy=cm<0?cu+cm:0;
var cp=cm<0?0:cu-cm;

for(i=Math.abs(cm)-1;i>=0;i--){var cs=co[cy];

try{cw.removeChild(cs);
}catch(bB){break;
}}if(!this.__tableContainer){this.__tableContainer=document.createElement(cl);
}var cv=bN;
cv+=this._getRowsHtml(ct+cp,Math.abs(cm));
cv+=bQ;
this.__tableContainer.innerHTML=cv;
var cq=this.__tableContainer.firstChild.childNodes;
if(cm>0){for(var i=cq.length-1;i>=0;i--){var cs=cq[0];
cw.appendChild(cs);
}}else{for(var i=cq.length-1;i>=0;i--){var cs=cq[cq.length-1];
cw.insertBefore(cs,cw.firstChild);
}}if(this.__focusedRow!==null){this._updateRowStyles(this.__focusedRow-cm);
this._updateRowStyles(this.__focusedRow);
}this.fireEvent(bO);
},_updateAllRows:function(){var bs=this.getContentElement().getDomElement();

if(!bs){this.addListenerOnce(cc,arguments.callee,this);
return;
}var by=this.getTable();
var bv=by.getTableModel();
var bx=this.getPaneScroller().getTablePaneModel();
var bw=bx.getColumnCount();
var bp=by.getRowHeight();
var bt=this.getFirstVisibleRow();
var bq=this.getVisibleRowCount();
var bz=bv.getRowCount();

if(bt+bq>bz){bq=Math.max(0,bz-bt);
}var br=bx.getTotalWidth();
var bu;
if(bq>0){bu=[bT,ch,(by.getForceLineHeight()?cd+bp+bX:bS),bL,bV,this._getRowsHtml(bt,bq),bM];
}else{bu=[];
}var bA=bu.join(bS);
bs.innerHTML=bA;
this.setWidth(br);
this.__lastColCount=bw;
this.__lastRowCount=bq;
this.fireEvent(bO);
}},destruct:function(){this.__tableContainer=this.__paneScroller=this.__rowCache=null;
}});
})();
(function(){var c="hovered",b="__paneScroller",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(d){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__paneScroller=d;
},members:{__paneScroller:null,__moveFeedback:null,__lastMouseOverColumn:null,getPaneScroller:function(){return this.__paneScroller;
},getTable:function(){return this.__paneScroller.getTable();
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(u,v){var w=this.getHeaderWidgetAtColumn(u);

if(w!=null){w.setWidth(v);
}},setMouseOverColumn:function(I){if(I!=this.__lastMouseOverColumn){if(this.__lastMouseOverColumn!=null){var J=this.getHeaderWidgetAtColumn(this.__lastMouseOverColumn);

if(J!=null){J.removeState(c);
}}
if(I!=null){this.getHeaderWidgetAtColumn(I).addState(c);
}this.__lastMouseOverColumn=I;
}},getHeaderWidgetAtColumn:function(e){var f=this.getPaneScroller().getTablePaneModel().getX(e);
return this._getChildren()[f];
},showColumnMoveFeedback:function(y,x){var C=this.getContainerLocation();

if(this.__moveFeedback==null){var z=this.getPaneScroller().getTablePaneModel().getX(y);
var B=this._getChildren()[z];
var D=this.getTable().getTableModel();
var F=this.getTable().getTableColumnModel();
var G={xPos:z,col:y,name:D.getColumnName(y)};
var E=F.getHeaderCellRenderer(y);
var A=E.createHeaderCell(G);
var H=B.getBounds();
A.setWidth(H.width);
A.setHeight(H.height);
A.setZIndex(1000000);
A.setOpacity(0.8);
A.setLayoutProperties({top:C.top});
this.getApplicationRoot().add(A);
this.__moveFeedback=A;
}this.__moveFeedback.setLayoutProperties({left:C.left+x});
this.__moveFeedback.show();
},hideColumnMoveFeedback:function(){if(this.__moveFeedback!=null){this.__moveFeedback.destroy();
this.__moveFeedback=null;
}},isShowingColumnMoveFeedback:function(){return this.__moveFeedback!=null;
},_updateContent:function(i){var n=this.getTable().getTableModel();
var q=this.getTable().getTableColumnModel();
var r=this.getPaneScroller().getTablePaneModel();
var t=this._getChildren();
var o=r.getColumnCount();
var j=n.getSortColumnIndex();
if(i){this._cleanUpCells();
}var k={};
k.sortedAscending=n.isSortAscending();

for(var x=0;x<o;x++){var m=r.getColumnAtX(x);

if(m===undefined){continue;
}var s=q.getColumnWidth(m);
var p=q.getHeaderCellRenderer(m);
k.xPos=x;
k.col=m;
k.name=n.getColumnName(m);
k.editable=n.isColumnEditable(m);
k.sorted=(m==j);
var l=t[x];
if(l==null){l=p.createHeaderCell(k);
l.set({width:s});
this._add(l);
}else{p.updateHeaderCell(k,l);
}}},_cleanUpCells:function(){var h=this._getChildren();

for(var x=h.length-1;x>=0;x--){var g=h[x];
g.destroy();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var dA="Boolean",dz="resize-line",dy="mousedown",dx="qx.event.type.Data",dw="mouseup",dv="qx.ui.table.pane.CellEvent",du="scroll",dt="focus-indicator",ds="excluded",dr="scrollbar-y",ey="visible",ex="mousemove",ew="header",ev="editing",eu="click",et="modelChanged",es="scrollbar-x",er="cellClick",eq="pane",ep="__horScrollBar",dH="__paneClipper",dI="mouseout",dF="changeHorizontalScrollBarVisible",dG="__headerClipper",dD="__header",dE="bottom",dB="_applyScrollTimeout",dC="changeScrollX",dL="_applyTablePaneModel",dM="Integer",dU="dblclick",dS="dataEdited",ed="mousewheel",dX="interval",el="__focusIndicator",ei="qx.ui.table.pane.Scroller",dO="_applyShowCellFocusIndicator",eo="__verScrollBar",en="resize",em="vertical",dN="__timer",dQ="changeScrollY",dR="appear",dT="table-scroller",dV="beforeSort",dY="__tablePane",ef="cellDblclick",ek="horizontal",dJ="losecapture",dK="contextmenu",dP="col-resize",ec="disappear",eb="_applyVerticalScrollBarVisible",ea="_applyHorizontalScrollBarVisible",eh="cellContextmenu",eg="close",dW="changeTablePaneModel",ee="__top",dq="qx.ui.table.pane.Model",ej="changeVerticalScrollBarVisible";
qx.Class.define(ei,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(be){arguments.callee.base.call(this);
this.__table=be;
var bf=new qx.ui.layout.Grid();
bf.setColumnFlex(0,1);
bf.setRowFlex(1,1);
this._setLayout(bf);
this.__horScrollBar=this._showChildControl(es);
this.__verScrollBar=this._showChildControl(dr);
this.__header=this._showChildControl(ew);
this.__tablePane=this._showChildControl(eq);
this.__top=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__top,{row:0,column:0,colSpan:2});
this.__headerClipper=new qx.ui.table.pane.Clipper();
this.__headerClipper.add(this.__header);
this.__headerClipper.addListener(dJ,this._onChangeCaptureHeader,this);
this.__headerClipper.addListener(ex,this._onMousemoveHeader,this);
this.__headerClipper.addListener(dy,this._onMousedownHeader,this);
this.__headerClipper.addListener(dw,this._onMouseupHeader,this);
this.__headerClipper.addListener(eu,this._onClickHeader,this);
this.__top.add(this.__headerClipper,{flex:1});
this.__paneClipper=new qx.ui.table.pane.Clipper();
this.__paneClipper.add(this.__tablePane);
this.__paneClipper.addListener(ed,this._onMousewheel,this);
this.__paneClipper.addListener(ex,this._onMousemovePane,this);
this.__paneClipper.addListener(dy,this._onMousedownPane,this);
this.__paneClipper.addListener(dw,this._onMouseupPane,this);
this.__paneClipper.addListener(eu,this._onClickPane,this);
this.__paneClipper.addListener(dK,this._onContextMenu,this);
this.__paneClipper.addListener(dU,this._onDblclickPane,this);
this.__paneClipper.addListener(en,this._onResizePane,this);
this._add(this.__paneClipper,{row:1,column:0});
this.__focusIndicator=this.getChildControl(dt);
this.getChildControl(dz).hide();
this.addListener(dI,this._onMouseout,this);
this.addListener(dR,this._onAppear,this);
this.addListener(ec,this._onDisappear,this);
this.__timer=new qx.event.Timer();
this.__timer.addListener(dX,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":dx,"changeScrollX":dx,"cellClick":dv,"cellDblclick":dv,"cellContextmenu":dv,"beforeSort":dx},properties:{horizontalScrollBarVisible:{check:dA,init:true,apply:ea,event:dF},verticalScrollBarVisible:{check:dA,init:true,apply:eb,event:ej},tablePaneModel:{check:dq,apply:dL,event:dW},liveResize:{check:dA,init:false},focusCellOnMouseMove:{check:dA,init:false},selectBeforeFocus:{check:dA,init:false},showCellFocusIndicator:{check:dA,init:true,apply:dO},scrollTimeout:{check:dM,init:100,apply:dB},appearance:{refine:true,init:dT}},members:{__lastRowCount:null,__table:null,__updateInterval:null,__updateContentPlanned:null,__onintervalWrapper:null,__moveColumn:null,__lastMoveColPos:null,__lastMoveTargetX:null,__lastMoveTargetScroller:null,__lastMoveMousePageX:null,__resizeColumn:null,__lastResizeMousePageX:null,__lastResizeWidth:null,__lastMouseDownCell:null,__ignoreClick:null,__lastMousePageX:null,__lastMousePageY:null,__focusedCol:null,__focusedRow:null,__cellEditor:null,__cellEditorFactory:null,__topRightWidget:null,__horScrollBar:null,__verScrollBar:null,__header:null,__headerClipper:null,__tablePane:null,__paneClipper:null,__focusIndicator:null,__top:null,__timer:null,getPaneInsetRight:function(){var M=this.getTopRightWidget();
var N=M&&M.isVisible()&&M.getBounds()?M.getBounds().width:0;
var L=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(N,L);
},setPaneWidth:function(K){if(this.isVerticalScrollBarVisible()){K+=this.getPaneInsetRight();
}this.setWidth(K);
},_createChildControlImpl:function(H){var I;

switch(H){case ew:I=(this.getTable().getNewTablePaneHeader())(this);
break;
case eq:I=(this.getTable().getNewTablePane())(this);
break;
case dt:I=new qx.ui.table.pane.FocusIndicator(this);
I.setUserBounds(0,0,0,0);
I.setZIndex(1000);
I.addListener(dw,this._onMouseupFocusIndicator,this);
this.__paneClipper.add(I);
I.exclude();
break;
case dz:I=new qx.ui.core.Widget();
I.setUserBounds(0,0,0,0);
I.setZIndex(1000);
this.__paneClipper.add(I);
break;
case es:I=this._createScrollBar(ek).set({minWidth:0,alignY:dE});
I.addListener(du,this._onScrollX,this);
this._add(I,{row:2,column:0});
break;
case dr:I=this._createScrollBar(em);
I.addListener(du,this._onScrollY,this);
this._add(I,{row:1,column:1});
break;
}return I||arguments.callee.base.call(this,H);
},_applyHorizontalScrollBarVisible:function(bK,bL){this.__horScrollBar.setVisibility(bK?ey:ds);

if(!bK){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(bc,bd){this.__verScrollBar.setVisibility(bc?ey:ds);

if(!bc){this.setScrollX(0);
}},_applyTablePaneModel:function(D,E){if(E!=null){E.removeListener(et,this._onPaneModelChanged,this);
}D.addListener(et,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(cp,cq){if(cp){this._updateFocusIndicator();
}else{if(this.__focusIndicator){this.__focusIndicator.hide();
}}},getScrollY:function(){return this.__verScrollBar.getPosition();
},setScrollY:function(scrollY,bM){this.__verScrollBar.scrollTo(scrollY);

if(bM){this._updateContent();
}},getScrollX:function(){return this.__horScrollBar.getPosition();
},setScrollX:function(scrollX){this.__horScrollBar.scrollTo(scrollX);
},getTable:function(){return this.__table;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(W,X){this.__header.setColumnWidth(W,X);
this.__tablePane.setColumnWidth(W,X);
var Y=this.getTablePaneModel();
var x=Y.getX(W);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__header.onColOrderChanged();
this.__tablePane.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(cr,cs,ct,cu){this.__tablePane.onTableModelDataChanged(cr,cs,ct,cu);
var cv=this.getTable().getTableModel().getRowCount();

if(cv!=this.__lastRowCount){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=cv){if(cv==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),cv-1);
}}this.__lastRowCount=cv;
}},onSelectionChanged:function(){this.__tablePane.onSelectionChanged();
},onFocusChanged:function(){this.__tablePane.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__header.onTableModelMetaDataChanged();
this.__tablePane.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__header.onPaneModelChanged();
this.__tablePane.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__header._updateContent();
this.__table._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bj=this.__paneClipper.getInnerSize();

if(!bj){return ;
}var bh=this.getTablePaneModel().getTotalWidth();
var bi=this.__horScrollBar;

if(bj.width<bh){var bg=Math.max(0,bh-bj.width);
bi.setMaximum(bg);
bi.setKnobFactor(bj.width/bh);
var bk=bi.getPosition();
bi.setPosition(Math.min(bk,bg));
}else{bi.setMaximum(0);
bi.setKnobFactor(1);
bi.setPosition(0);
}},updateVerScrollBarMaximum:function(){var V=this.__paneClipper.getInnerSize();

if(!V){return ;
}var T=this.getTable().getTableModel();
var P=T.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){P+=1;
}var O=this.getTable().getRowHeight();
var R=P*O;
var U=this.__verScrollBar;

if(V.height<R){var Q=Math.max(0,R-V.height);
U.setMaximum(Q);
U.setKnobFactor(V.height/R);
var S=U.getPosition();
U.setPosition(Math.min(S,Q));
}else{U.setMaximum(0);
U.setKnobFactor(1);
U.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var ba=e.getData();
this.fireDataEvent(dC,ba,e.getOldData());
this.__headerClipper.scrollToX(ba);
this.__paneClipper.scrollToX(ba);
},_onScrollY:function(e){this.fireDataEvent(dQ,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var bD=this.getTable();

if(!bD.getEnabled()){return;
}var bF=qx.bom.client.Engine.GECKO?1:3;
var bE=this.__verScrollBar.getPosition()+((e.getWheelDelta()*bF)*bD.getRowHeight());
this.__verScrollBar.scrollTo(bE);
if(this.__lastMousePageX&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__lastMousePageX,this.__lastMousePageY);
}e.stop();
},__handleResizeColumn:function(u){var A=this.getTable();
var B=this.__header.getHeaderWidgetAtColumn(this.__resizeColumn);
var v=B.getSizeHint().minWidth;
var y=Math.max(v,this.__lastResizeWidth+u-this.__lastResizeMousePageX);

if(this.getLiveResize()){var w=A.getTableColumnModel();
w.setColumnWidth(this.__resizeColumn,y);
}else{this.__header.setColumnWidth(this.__resizeColumn,y);
var z=this.getTablePaneModel();
this._showResizeLine(z.getColumnLeft(this.__resizeColumn)+y);
}this.__lastResizeMousePageX+=y-this.__lastResizeWidth;
this.__lastResizeWidth=y;
},__handleMoveColumn:function(cm){var cn=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__header.isShowingColumnMoveFeedback()||cm>this.__lastMoveMousePageX+cn||cm<this.__lastMoveMousePageX-cn){this.__lastMoveColPos+=cm-this.__lastMoveMousePageX;
this.__header.showColumnMoveFeedback(this.__moveColumn,this.__lastMoveColPos);
var co=this.__table.getTablePaneScrollerAtPageX(cm);

if(this.__lastMoveTargetScroller&&this.__lastMoveTargetScroller!=co){this.__lastMoveTargetScroller.hideColumnMoveFeedback();
}
if(co!=null){this.__lastMoveTargetX=co.showColumnMoveFeedback(cm);
}else{this.__lastMoveTargetX=null;
}this.__lastMoveTargetScroller=co;
this.__lastMoveMousePageX=cm;
}},_onMousemoveHeader:function(e){var cj=this.getTable();

if(!cj.getEnabled()){return;
}var ck=false;
var cd=null;
var ch=e.getDocumentLeft();
var ci=e.getDocumentTop();
this.__lastMousePageX=ch;
this.__lastMousePageY=ci;

if(this.__resizeColumn!=null){this.__handleResizeColumn(ch);
ck=true;
e.stopPropagation();
}else if(this.__moveColumn!=null){this.__handleMoveColumn(ch);
e.stopPropagation();
}else{var ce=this._getResizeColumnForPageX(ch);

if(ce!=-1){ck=true;
}else{var cg=cj.getTableModel();
var cl=this._getColumnForPageX(ch);

if(cl!=null&&cg.isColumnSortable(cl)){cd=cl;
}}}var cf=ck?dP:null;
this.getApplicationRoot().setGlobalCursor(cf);
this.setCursor(cf);
this.__header.setMouseOverColumn(cd);
},_onMousemovePane:function(e){var eH=this.getTable();

if(!eH.getEnabled()){return;
}var eJ=e.getDocumentLeft();
var eK=e.getDocumentTop();
this.__lastMousePageX=eJ;
this.__lastMousePageY=eK;
var eI=this._getRowForPagePos(eJ,eK);

if(eI!=null&&this._getColumnForPageX(eJ)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(eJ,eK);
}}this.__header.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var h=e.getDocumentLeft();
var i=this._getResizeColumnForPageX(h);

if(i!=-1){this._startResizeHeader(i,h);
e.stop();
}else{var g=this._getColumnForPageX(h);

if(g!=null){this._startMoveHeader(g,h);
e.stop();
}}},_startResizeHeader:function(b,c){var d=this.getTable().getTableColumnModel();
this.__resizeColumn=b;
this.__lastResizeMousePageX=c;
this.__lastResizeWidth=d.getColumnWidth(this.__resizeColumn);
this.__headerClipper.capture();
},_startMoveHeader:function(F,G){this.__moveColumn=F;
this.__lastMoveMousePageX=G;
this.__lastMoveColPos=this.getTablePaneModel().getColumnLeft(F);
this.__headerClipper.capture();
},_onMousedownPane:function(e){var fr=this.getTable();

if(!fr.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var fo=e.getDocumentLeft();
var fq=e.getDocumentTop();
var ft=this._getRowForPagePos(fo,fq);
var fs=this._getColumnForPageX(fo);

if(ft!==null){this.__lastMouseDownCell={row:ft,col:fs};
var fp=this.getSelectBeforeFocus();

if(fp){fr.getSelectionManager().handleMouseDown(ft,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(fo,fq);
}
if(!fp){fr.getSelectionManager().handleMouseDown(ft,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__lastMouseDownCell&&this.__focusIndicator.getRow()==this.__lastMouseDownCell.row&&this.__focusIndicator.getColumn()==this.__lastMouseDownCell.col){this.__lastMouseDownCell={};
this.fireEvent(er,qx.ui.table.pane.CellEvent,[this,e,this.__lastMouseDownCell.row,this.__lastMouseDownCell.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__resizeColumn!=null){this._stopResizeHeader();
}
if(this.__moveColumn!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var bl=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
bl.setColumnWidth(this.__resizeColumn,this.__lastResizeWidth);
}this.__resizeColumn=null;
this.__headerClipper.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},_stopMoveHeader:function(){var q=this.getTable().getTableColumnModel();
var r=this.getTablePaneModel();
this.__header.hideColumnMoveFeedback();

if(this.__lastMoveTargetScroller){this.__lastMoveTargetScroller.hideColumnMoveFeedback();
}
if(this.__lastMoveTargetX!=null){var t=r.getFirstColumnX()+r.getX(this.__moveColumn);
var p=this.__lastMoveTargetX;

if(p!=t&&p!=t+1){var s=q.getVisibleColumnAtX(t);
var o=q.getVisibleColumnAtX(p);
var n=q.getOverallX(s);
var m=(o!=null)?q.getOverallX(o):q.getOverallColumnCount();

if(m>n){m--;
}q.moveColumn(n,m);
}}this.__moveColumn=null;
this.__lastMoveTargetX=null;
this.__headerClipper.releaseCapture();
},_onMouseupPane:function(e){var bt=this.getTable();

if(!bt.getEnabled()){return;
}var bu=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(bu!=-1&&bu!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){bt.getSelectionManager().handleMouseUp(bu,e);
}},_onMouseupHeader:function(e){var a=this.getTable();

if(!a.getEnabled()){return;
}
if(this.__resizeColumn!=null){this._stopResizeHeader();
this.__ignoreClick=true;
e.stop();
}else if(this.__moveColumn!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__ignoreClick){this.__ignoreClick=false;
return;
}var eD=this.getTable();

if(!eD.getEnabled()){return;
}var eB=eD.getTableModel();
var eC=e.getDocumentLeft();
var eA=this._getResizeColumnForPageX(eC);

if(eA==-1){var eG=this._getColumnForPageX(eC);

if(eG!=null&&eB.isColumnSortable(eG)){var ez=eB.getSortColumnIndex();
var eE=(eG!=ez)?true:!eB.isSortAscending();
var eF={column:eG,ascending:eE};

if(this.fireDataEvent(dV,eF)){eB.sortByColumn(eG,eE);
eD.getSelectionModel().resetSelection();
}}}e.stop();
},_onClickPane:function(e){var eL=this.getTable();

if(!eL.getEnabled()){return;
}var eO=e.getDocumentLeft();
var eP=e.getDocumentTop();
var eM=this._getRowForPagePos(eO,eP);
var eN=this._getColumnForPageX(eO);

if(eM!=null&&eN!=null){eL.getSelectionManager().handleClick(eM,e);

if(this.__focusIndicator.isHidden()||(this.__lastMouseDownCell&&eM==this.__lastMouseDownCell.row&&eN==this.__lastMouseDownCell.col)){this.__lastMouseDownCell={};
this.fireEvent(er,qx.ui.table.pane.CellEvent,[this,e,eM,eN],true);
}}},_onContextMenu:function(e){var cK=e.getDocumentLeft();
var cL=e.getDocumentTop();
var cI=this._getRowForPagePos(cK,cL);
var cJ=this._getColumnForPageX(cK);

if(this.__focusIndicator.isHidden()||(this.__lastMouseDownCell&&cI==this.__lastMouseDownCell.row&&cJ==this.__lastMouseDownCell.col)){this.__lastMouseDownCell={};
this.fireEvent(eh,qx.ui.table.pane.CellEvent,[this,e,cI,cJ],true);
var cH=this.getTable().getContextMenu();

if(cH){if(cH.getChildren().length>0){cH.openAtMouse(e);
}else{cH.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var fl=e.getDocumentLeft();
var fm=e.getDocumentTop();
this._focusCellAtPagePos(fl,fm);
this.startEditing();
var fk=this._getRowForPagePos(fl,fm);

if(fk!=-1&&fk!=null){this.fireEvent(ef,qx.ui.table.pane.CellEvent,[this,e,fk],true);
}},_onMouseout:function(e){var J=this.getTable();

if(!J.getEnabled()){return;
}if(this.__resizeColumn==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__header.setMouseOverColumn(null);
},_showResizeLine:function(x){var k=this._showChildControl(dz);
var j=k.getWidth();
var l=this.__paneClipper.getBounds();
k.setUserBounds(x-Math.round(j/2),0,j,l.height);
},_hideResizeLine:function(){this._excludeChildControl(dz);
},showColumnMoveFeedback:function(bP){var bY=this.getTablePaneModel();
var bX=this.getTable().getTableColumnModel();
var bS=this.__tablePane.getContainerLocation().left;
var bW=bY.getColumnCount();
var bT=0;
var bR=0;
var cc=bS;

for(var bQ=0;bQ<bW;bQ++){var bU=bY.getColumnAtX(bQ);
var ca=bX.getColumnWidth(bU);

if(bP<cc+ca/2){break;
}cc+=ca;
bT=bQ+1;
bR=cc-bS;
}var bV=this.__paneClipper.getContainerLocation().left;
var cb=this.__paneClipper.getBounds().width;
var scrollX=bV-bS;
bR=qx.lang.Number.limit(bR,scrollX+2,scrollX+cb-1);
this._showResizeLine(bR);
return bY.getFirstColumnX()+bT;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(bG,bH){var bJ=this._getRowForPagePos(bG,bH);

if(bJ!=-1&&bJ!=null){var bI=this._getColumnForPageX(bG);
this.__table.setFocusedCell(bI,bJ);
}},setFocusedCell:function(bN,bO){if(!this.isEditing()){this.__tablePane.setFocusedCell(bN,bO,this.__updateContentPlanned);
this.__focusedCol=bN;
this.__focusedRow=bO;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__focusedCol;
},getFocusedRow:function(){return this.__focusedRow;
},scrollCellVisible:function(cM,cN){var cX=this.getTablePaneModel();
var cO=cX.getX(cM);

if(cO!=-1){var cU=this.__paneClipper.getInnerSize();

if(!cU){return;
}var cV=this.getTable().getTableColumnModel();
var cR=cX.getColumnLeft(cM);
var cY=cV.getColumnWidth(cM);
var cP=this.getTable().getRowHeight();
var da=cN*cP;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var cW=Math.min(cR,cR+cY-cU.width);
var cT=cR;
this.setScrollX(Math.max(cW,Math.min(cT,scrollX)));
var cQ=da+cP-cU.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){cQ+=cP;
}var cS=da;
this.setScrollY(Math.max(cQ,Math.min(cS,scrollY)),true);
}},isEditing:function(){return this.__cellEditor!=null;
},startEditing:function(){var bz=this.getTable();
var bx=bz.getTableModel();
var bB=this.__focusedCol;

if(!this.isEditing()&&(bB!=null)&&bx.isColumnEditable(bB)){var bC=this.__focusedRow;
var bv=this.getTablePaneModel().getX(bB);
var bw=bx.getValue(bB,bC);
this.__cellEditorFactory=bz.getTableColumnModel().getCellEditorFactory(bB);
var by={col:bB,row:bC,xPos:bv,value:bw,table:bz};
this.__cellEditor=this.__cellEditorFactory.createCellEditor(by);
if(this.__cellEditor===null){return false;
}else if(this.__cellEditor instanceof qx.ui.window.Window){this.__cellEditor.setModal(true);
this.__cellEditor.setShowClose(false);
this.__cellEditor.addListener(eg,this._onCellEditorModalWindowClose,this);
var f=bz.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__cellEditor,by);
}this.__cellEditor.open();
}else{var bA=this.__focusIndicator.getInnerSize();
this.__cellEditor.setUserBounds(0,0,bA.width,bA.height);
this.__focusIndicator.addListener(dy,function(e){e.stopPropagation();
});
this.__focusIndicator.add(this.__cellEditor);
this.__focusIndicator.addState(ev);
this.__focusIndicator.setKeepActive(false);
this.__cellEditor.focus();
this.__cellEditor.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var fv=this.__cellEditorFactory.getCellEditorValue(this.__cellEditor);
var fu=this.getTable().getTableModel().getValue(this.__focusedCol,this.__focusedRow);
this.getTable().getTableModel().setValue(this.__focusedCol,this.__focusedRow,fv);
this.__table.focus();
this.__table.fireDataEvent(dS,{row:this.__focusedRow,col:this.__focusedCol,oldValue:fu,value:fv});
}},cancelEditing:function(){if(this.isEditing()&&!this.__cellEditor.pendingDispose){if(this._cellEditorIsModalWindow){this.__cellEditor.destroy();
this.__cellEditor=null;
this.__cellEditorFactory=null;
this.__cellEditor.pendingDispose=true;
}else{this.__focusIndicator.removeState(ev);
this.__focusIndicator.setKeepActive(true);
this.__cellEditor.destroy();
this.__cellEditor=null;
this.__cellEditorFactory=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(bm){var bp=this.getTable().getTableColumnModel();
var bq=this.getTablePaneModel();
var bo=bq.getColumnCount();
var bs=this.__header.getContainerLocation().left;

for(var x=0;x<bo;x++){var bn=bq.getColumnAtX(x);
var br=bp.getColumnWidth(bn);
bs+=br;

if(bm<bs){return bn;
}}return null;
},_getResizeColumnForPageX:function(fa){var fe=this.getTable().getTableColumnModel();
var ff=this.getTablePaneModel();
var fd=ff.getColumnCount();
var fh=this.__header.getContainerLocation().left;
var fb=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<fd;x++){var fc=ff.getColumnAtX(x);
var fg=fe.getColumnWidth(fc);
fh+=fg;

if(fa>=(fh-fb)&&fa<=(fh+fb)){return fc;
}}return -1;
},_getRowForPagePos:function(eQ,eR){var eS=this.__tablePane.getContentLocation();

if(eQ<eS.left||eQ>eS.right){return null;
}
if(eR>=eS.top&&eR<=eS.bottom){var eT=this.getTable().getRowHeight();
var scrollY=this.__verScrollBar.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eT)*eT;
}var eW=scrollY+eR-eS.top;
var eY=Math.floor(eW/eT);
var eX=this.getTable().getTableModel();
var eU=eX.getRowCount();
return (eY<eU)?eY:null;
}var eV=this.__header.getContainerLocation();

if(eR>=eV.top&&eR<=eV.bottom&&eQ<=eV.right){return -1;
}return null;
},setTopRightWidget:function(cw){var cx=this.__topRightWidget;

if(cx!=null){this.__top.remove(cx);
}
if(cw!=null){this.__top.add(cw);
}this.__topRightWidget=cw;
},getTopRightWidget:function(){return this.__topRightWidget;
},getHeader:function(){return this.__header;
},getTablePane:function(){return this.__tablePane;
},getVerticalScrollBarWidth:function(){var C=this.__verScrollBar;
return C.isVisible()?(C.getSizeHint().width||0):0;
},getNeededScrollBars:function(db,dc){var di=this.__verScrollBar.getSizeHint().width;
var dj=this.__paneClipper.getInnerSize();
var dd=dj?dj.width:0;

if(this.getVerticalScrollBarVisible()){dd+=di;
}var dm=dj?dj.height:0;

if(this.getHorizontalScrollBarVisible()){dm+=di;
}var dg=this.getTable().getTableModel();
var dk=dg.getRowCount();
var dn=this.getTablePaneModel().getTotalWidth();
var dl=this.getTable().getRowHeight()*dk;
var df=false;
var dp=false;

if(dn>dd){df=true;

if(dl>dm-di){dp=true;
}}else if(dl>dm){dp=true;

if(!dc&&(dn>dd-di)){df=true;
}}var dh=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var de=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((db||df)?dh:0)|((dc||!dp)?0:de);
},_applyScrollTimeout:function(fi,fj){this._startInterval(fi);
},_startInterval:function(fn){this.__timer.setInterval(fn);
this.__timer.start();
},_stopInterval:function(){this.__timer.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__updateContentPlanned&&!this.__tablePane._layoutPending){this.__updateContentPlanned=false;
this._updateContent();
}}),_updateContent:function(){var cD=this.__paneClipper.getInnerSize();

if(!cD){return;
}var cG=cD.height;
var scrollX=this.__horScrollBar.getPosition();
var scrollY=this.__verScrollBar.getPosition();
var cA=this.getTable().getRowHeight();
var cB=Math.floor(scrollY/cA);
var cF=this.__tablePane.getFirstVisibleRow();
this.__tablePane.setFirstVisibleRow(cB);
var cC=Math.ceil(cG/cA);
var cz=0;
var cE=this.getTable().getKeepFirstVisibleRowComplete();

if(!cE){cC++;
cz=scrollY%cA;
}this.__tablePane.setVisibleRowCount(cC);

if(cB!=cF){this._updateFocusIndicator();
}this.__paneClipper.scrollToX(scrollX);
if(!cE){this.__paneClipper.scrollToY(cz);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var cy=this.getTable();

if(!cy.getEnabled()){return;
}this.__focusIndicator.moveToCell(this.__focusedCol,this.__focusedRow);
}},destruct:function(){this._stopInterval();
var bb=this.getTablePaneModel();

if(bb){bb.dispose();
}this.__lastMouseDownCell=this.__topRightWidget=this.__table=null;
this._disposeObjects(ep,eo,dG,dH,el,dD,dY,ee,dN);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="qx.client",d="0",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="mousemove",w="_applyMaximum",v="_applyOrientation",u="appear",t="opera",s="PositiveInteger",r="mshtml",q="mouseup",o="Number",p="_applyPosition",m="scrollbar",n="__scrollPaneElement",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(B){arguments.callee.base.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(q,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if(qx.core.Variant.isSet(f,t)){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(B!=null){this.setOrientation(B);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:m},orientation:{check:[k,h],init:k,apply:v},maximum:{check:s,apply:w,init:100},position:{check:o,init:0,apply:p,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__isHorizontal:null,__scrollPaneElement:null,_getScrollPaneElement:function(){if(!this.__scrollPaneElement){this.__scrollPaneElement=new qx.html.Element();
}return this.__scrollPaneElement;
},renderLayout:function(T,top,U,V){var W=arguments.callee.base.call(this,T,top,U,V);
this._updateScrollBar();
return W;
},_getContentHint:function(){var C=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__isHorizontal?100:C,maxWidth:this.__isHorizontal?null:C,minWidth:this.__isHorizontal?null:C,height:this.__isHorizontal?C:100,maxHeight:this.__isHorizontal?C:null,minHeight:this.__isHorizontal?C:null};
},_applyEnabled:function(E,F){arguments.callee.base.call(this,E,F);
this._updateScrollBar();
},_applyMaximum:function(A){this._updateScrollBar();
},_applyPosition:function(D){var content=this.getContentElement();

if(this.__isHorizontal){content.scrollToX(D);
}else{content.scrollToY(D);
}},_applyOrientation:function(Q,R){var S=this.__isHorizontal=Q===k;
this.set({allowGrowX:S,allowShrinkX:S,allowGrowY:!S,allowShrinkY:!S});

if(S){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:S?i:c,overflowY:S?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var N=this.__isHorizontal;
var O=this.getBounds();

if(!O){return;
}
if(this.isEnabled()){var P=N?O.width:O.height;
var M=this.getMaximum()+P;
}else{M=0;
}if(qx.core.Variant.isSet(f,r)){var O=this.getBounds();
this.getContentElement().setStyles({left:N?d:g,top:N?g:d,width:(N?O.width:O.width+1)+j,height:(N?O.height+1:O.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(N?M:1)+j,height:(N?1:M)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(G){this.setPosition(Math.max(0,Math.min(this.getMaximum(),G)));
},scrollBy:function(L){this.scrollTo(this.getPosition()+L);
},scrollBySteps:function(H){var I=this.getSingleStep();
this.scrollBy(H*I);
},_onScroll:function(e){var K=this.getContentElement();
var J=this.__isHorizontal?K.getScrollX():K.getScrollY();
this.setPosition(J);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var k="slider",j="horizontal",i="button-begin",h="vertical",g="button-end",f="Integer",d="execute",c="right",b="left",a="down",z="up",y="PositiveNumber",x="changeValue",w="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",v="_applyKnobFactor",u="knob",t="qx.ui.core.scroll.ScrollBar",s="resize",r="_applyOrientation",q="_applyPageStep",o="PositiveInteger",p="scroll",m="_applyPosition",n="scrollbar",l="_applyMaximum";
qx.Class.define(t,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(O){arguments.callee.base.call(this);
this._createChildControl(i);
this._createChildControl(k).addListener(s,this._onResizeSlider,this);
this._createChildControl(g);
if(O!=null){this.setOrientation(O);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,h],init:j,apply:r},maximum:{check:o,apply:l,init:100},position:{check:w,init:0,apply:m,event:p},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:y,apply:v,nullable:true}},members:{__offset:2,_createChildControlImpl:function(M){var N;

switch(M){case k:N=new qx.ui.core.scroll.ScrollSlider();
N.setPageStep(100);
N.setFocusable(false);
N.addListener(x,this._onChangeSliderValue,this);
this._add(N,{flex:1});
break;
case i:N=new qx.ui.form.RepeatButton();
N.setFocusable(false);
N.addListener(d,this._onExecuteBegin,this);
this._add(N);
break;
case g:N=new qx.ui.form.RepeatButton();
N.setFocusable(false);
N.addListener(d,this._onExecuteEnd,this);
this._add(N);
break;
}return N||arguments.callee.base.call(this,M);
},_applyMaximum:function(Q){this.getChildControl(k).setMaximum(Q);
},_applyPosition:function(G){this.getChildControl(k).setValue(G);
},_applyKnobFactor:function(L){this.getChildControl(k).setKnobFactor(L);
},_applyPageStep:function(R){this.getChildControl(k).setPageStep(R);
},_applyOrientation:function(A,B){var C=this._getLayout();

if(C){C.dispose();
}if(A===j){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(h,j);
this.getChildControl(i).replaceState(z,b);
this.getChildControl(g).replaceState(a,c);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(j,h);
this.getChildControl(i).replaceState(b,z);
this.getChildControl(g).replaceState(c,a);
}this.getChildControl(k).setOrientation(A);
},scrollTo:function(P){this.getChildControl(k).slideTo(P);
},scrollBy:function(F){this.getChildControl(k).slideBy(F);
},scrollBySteps:function(D){var E=this.getSingleStep();
this.getChildControl(k).slideBy(D*E);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var H=this.getChildControl(k).getChildControl(u);
var K=H.getSizeHint();
var I=false;
var J=this.getChildControl(k).getInnerSize();

if(this.getOrientation()==h){if(J.height<K.minHeight+this.__offset){I=true;
}}else{if(J.width<K.minWidth+this.__offset){I=true;
}}
if(I){H.exclude();
}else{H.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(e){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(b){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(c){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var bh="knob",bg="horizontal",bf="vertical",be="Integer",bd="px",bc="mousemove",bb="resize",ba="left",Y="top",X="mouseup",bL="slider",bK="PageUp",bJ="mousedown",bI="height",bH="changeValue",bG="Left",bF="Down",bE="Up",bD="dblclick",bC="qx.ui.form.Slider",bo="PageDown",bp="mousewheel",bm="interval",bn="_applyValue",bk="_applyKnobFactor",bl="End",bi="width",bj="_applyOrientation",bq="Home",br="floor",bu="_applyMinimum",bt="click",bw="Right",bv="keypress",by="ceil",bx="losecapture",bs="contextmenu",bB="_applyMaximum",bA="Number",bz="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bC,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(bQ){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bv,this._onKeyPress);
this.addListener(bp,this._onMouseWheel);
this.addListener(bJ,this._onMouseDown);
this.addListener(X,this._onMouseUp);
this.addListener(bx,this._onMouseUp);
this.addListener(bb,this._onUpdate);
this.addListener(bs,this._onStopEvent);
this.addListener(bt,this._onStopEvent);
this.addListener(bD,this._onStopEvent);
if(bQ!=null){this.setOrientation(bQ);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bL},focusable:{refine:true,init:true},orientation:{check:[bg,bf],init:bg,apply:bj},value:{check:bz,init:0,apply:bn,event:bH,nullable:true},minimum:{check:be,init:0,apply:bu},maximum:{check:be,init:100,apply:bB},singleStep:{check:be,init:1},pageStep:{check:be,init:10},knobFactor:{check:bA,apply:bk,nullable:true}},members:{__sliderLocation:null,__knobLocation:null,__knobSize:null,__dragMode:null,__dragOffset:null,__trackingMode:null,__trackingDirection:null,__trackingEnd:null,__timer:null,_forwardStates:{invalid:true},_createChildControlImpl:function(O){var P;

switch(O){case bh:P=new qx.ui.core.Widget();
P.addListener(bb,this._onUpdate,this);
this._add(P);
break;
}return P||arguments.callee.base.call(this,O);
},_onMouseWheel:function(e){var f=e.getWheelDelta()>0?1:-1;
this.slideBy(f*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var n=this.getOrientation()===bg;
var m=n?bG:bE;
var forward=n?bw:bF;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case m:this.slideBack();
break;
case bo:this.slidePageForward();
break;
case bK:this.slidePageBack();
break;
case bq:this.slideToBegin();
break;
case bl:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__dragMode){return;
}var i=this.__isHorizontal;
var g=this.getChildControl(bh);
var h=i?ba:Y;
var k=i?e.getDocumentLeft():e.getDocumentTop();
var l=this.__sliderLocation=qx.bom.element.Location.get(this.getContentElement().getDomElement())[h];
var j=this.__knobLocation=qx.bom.element.Location.get(g.getContainerElement().getDomElement())[h];

if(e.getTarget()===g){this.__dragMode=true;
this.__dragOffset=k+l-j;
}else{this.__trackingMode=true;
this.__trackingDirection=k<=j?-1:1;
this.__computeTrackingEnd(e);
this._onInterval();
if(!this.__timer){this.__timer=new qx.event.Timer(100);
this.__timer.addListener(bm,this._onInterval,this);
}this.__timer.start();
}this.addListener(bc,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__dragMode){this.releaseCapture();
delete this.__dragMode;
delete this.__dragOffset;
}else if(this.__trackingMode){this.__timer.stop();
this.releaseCapture();
delete this.__trackingMode;
delete this.__trackingDirection;
delete this.__trackingEnd;
}this.removeListener(bc,this._onMouseMove);
if(e.getType()===X){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__dragMode){var V=this.__isHorizontal?e.getDocumentLeft():e.getDocumentTop();
var U=V-this.__dragOffset;
this.slideTo(this._positionToValue(U));
}else if(this.__trackingMode){this.__computeTrackingEnd(e);
}e.stopPropagation();
},_onInterval:function(e){var bS=this.getValue()+(this.__trackingDirection*this.getPageStep());
if(bS<this.getMinimum()){bS=this.getMinimum();
}else if(bS>this.getMaximum()){bS=this.getMaximum();
}var bT=this.__trackingDirection==-1;

if((bT&&bS<=this.__trackingEnd)||(!bT&&bS>=this.__trackingEnd)){bS=this.__trackingEnd;
}this.slideTo(bS);
},_onUpdate:function(e){var D=this.getInnerSize();
var E=this.getChildControl(bh).getBounds();
var C=this.__isHorizontal?bi:bI;
this._updateKnobSize();
this.__slidingSpace=D[C]-E[C];
this.__knobSize=E[C];
this._updateKnobPosition();
},__isHorizontal:false,__slidingSpace:0,__computeTrackingEnd:function(e){var q=this.__isHorizontal;
var x=q?e.getDocumentLeft():e.getDocumentTop();
var z=this.__sliderLocation;
var r=this.__knobLocation;
var B=this.__knobSize;
var y=x-z;

if(x>=r){y-=B;
}var v=this._positionToValue(y);
var s=this.getMinimum();
var t=this.getMaximum();

if(v<s){v=s;
}else if(v>t){v=t;
}else{var w=this.getValue();
var u=this.getPageStep();
var A=this.__trackingDirection<0?br:by;
v=w+(Math[A]((v-w)/u)*u);
}if(this.__trackingEnd==null||(this.__trackingDirection==-1&&v<=this.__trackingEnd)||(this.__trackingDirection==1&&v>=this.__trackingEnd)){this.__trackingEnd=v;
}},_positionToValue:function(Q){var R=this.__slidingSpace;
if(R==null||R==0){return 0;
}var T=Q/R;

if(T<0){T=0;
}else if(T>1){T=1;
}var S=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(S*T);
},_valueToPosition:function(F){var G=this.__slidingSpace;

if(G==null){return 0;
}var H=this.getMaximum()-this.getMinimum();
if(H==0){return 0;
}var F=F-this.getMinimum();
var I=F/H;

if(I<0){I=0;
}else if(I>1){I=1;
}return Math.round(G*I);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bM){var bN=this.getChildControl(bh).getContainerElement();

if(this.__isHorizontal){bN.setStyle(ba,bM+bd,true);
}else{bN.setStyle(Y,bM+bd,true);
}},_updateKnobSize:function(){var d=this.getKnobFactor();

if(d==null){return;
}var c=this.getInnerSize();

if(c==null){return;
}if(this.__isHorizontal){this.getChildControl(bh).setWidth(Math.round(d*c.width));
}else{this.getChildControl(bh).setHeight(Math.round(d*c.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bR){this.slideTo(this.getValue()+bR);
},slideTo:function(W){if(W<this.getMinimum()){W=this.getMinimum();
}else if(W>this.getMaximum()){W=this.getMaximum();
}else{W=this.getMinimum()+Math.round((W-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(W);
},_applyOrientation:function(J,K){var L=this.getChildControl(bh);
this.__isHorizontal=J===bg;
if(this.__isHorizontal){this.removeState(bf);
L.removeState(bf);
this.addState(bg);
L.addState(bg);
L.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(bg);
L.removeState(bg);
this.addState(bf);
L.addState(bf);
L.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(M,N){if(M!=null){this._updateKnobSize();
}else{if(this.__isHorizontal){this.getChildControl(bh).resetWidth();
}else{this.getChildControl(bh).resetHeight();
}}},_applyValue:function(o,p){if(o!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(a,b){if(this.getValue()<a){this.setValue(a);
}this._updateKnobPosition();
},_applyMaximum:function(bO,bP){if(this.getValue()>bO){this.setValue(bO);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(p){arguments.callee.base.call(this);
this.__scroller=p;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__scroller:null,_onKeyPress:function(e){var q=e.getKeyIdentifier();

if(q!==f&&q!==c){e.stopPropagation();
}},moveToCell:function(h,i){if(h==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var j=this.__scroller.getTablePaneModel().getX(h);

if(j==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var o=this.__scroller.getTable();
var m=o.getTableColumnModel();
var n=this.__scroller.getTablePaneModel();
var l=this.__scroller.getTablePane().getFirstVisibleRow();
var k=o.getRowHeight();
this.setUserBounds(n.getColumnLeft(h)-2,(i-l)*k-2,m.getColumnWidth(h)+3,k+3);
this.show();
this.setRow(i);
this.setColumn(h);
}}}},destruct:function(){this.__scroller=null;
}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(e,f,g,h){f.clone(this);
this.setBubbles(false);

if(g!=null){this.setRow(g);
}else{this.setRow(e._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(h!=null){this.setColumn(h);
}else{this.setColumn(e._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(c){var d=arguments.callee.base.call(this,c);
d.set({row:this.getRow(),column:this.getColumn()});
return d;
}}});
})();
(function(){var a="qx.lang.Number";
qx.Class.define(a,{statics:{isInRange:function(e,f,g){return e>=f&&e<=g;
},isBetweenRange:function(h,i,j){return h>i&&h<j;
},limit:function(b,c,d){if(d!=null&&b>d){return d;
}else if(c!=null&&b<c){return c;
}else{return b;
}}}});
})();
(function(){var r="Boolean",q="resize",p="mousedown",o="w-resize",n="sw-resize",m="n-resize",l="resizableRight",k="ne-resize",j="se-resize",i="Integer",G="e-resize",F="resizableLeft",E="mousemove",D="move",C="shorthand",B="maximized",A="nw-resize",z="mouseout",y="qx.ui.core.MResizable",x="mouseup",v="losecapture",w="resize-frame",t="resizableBottom",u="s-resize",s="resizableTop";
qx.Mixin.define(y,{construct:function(){this.addListener(p,this.__onResizeMouseDown,this,true);
this.addListener(x,this.__onResizeMouseUp,this);
this.addListener(E,this.__onResizeMouseMove,this);
this.addListener(z,this.__onResizeMouseOut,this);
this.addListener(v,this.__onResizeLoseCapture,this);
},properties:{resizableTop:{check:r,init:true},resizableRight:{check:r,init:true},resizableBottom:{check:r,init:true},resizableLeft:{check:r,init:true},resizable:{group:[s,l,t,F],mode:C},resizeSensitivity:{check:i,init:5},useResizeFrame:{check:r,init:true}},members:{__resizeFrame:null,__resizeActive:null,__resizeLeft:null,__resizeTop:null,__resizeStart:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__getResizeFrame:function(){var N=this.__resizeFrame;

if(!N){N=this.__resizeFrame=new qx.ui.core.Widget();
N.setAppearance(w);
N.exclude();
qx.core.Init.getApplication().getRoot().add(N);
}return N;
},__showResizeFrame:function(){var V=this.__resizeStart;
var U=this.__getResizeFrame();
U.setUserBounds(V.left,V.top,V.width,V.height);
U.show();
U.setZIndex(this.getZIndex()+1);
},__computeResizeResult:function(e){var b=this.__resizeActive;
var c=this.getSizeHint();
var f=this.__resizeStart;
var a=f.width;
var d=f.height;
var h=f.left;
var top=f.top;
var g;

if((b&this.RESIZE_TOP)||(b&this.RESIZE_BOTTOM)){g=e.getDocumentTop()-this.__resizeTop;

if(b&this.RESIZE_TOP){d-=g;
}else{d+=g;
}
if(d<c.minHeight){d=c.minHeight;
}else if(d>c.maxHeight){d=c.maxHeight;
}
if(b&this.RESIZE_TOP){top+=f.height-d;
}}
if((b&this.RESIZE_LEFT)||(b&this.RESIZE_RIGHT)){g=e.getDocumentLeft()-this.__resizeLeft;

if(b&this.RESIZE_LEFT){a-=g;
}else{a+=g;
}
if(a<c.minWidth){a=c.minWidth;
}else if(a>c.maxWidth){a=c.maxWidth;
}
if(b&this.RESIZE_LEFT){h+=f.width-a;
}}return {viewportLeft:h,viewportTop:top,parentLeft:f.bounds.left+h-f.left,parentTop:f.bounds.top+top-f.top,width:a,height:d};
},__resizeCursors:{1:m,2:u,4:o,8:G,5:A,6:n,9:k,10:j},__computeResizeMode:function(e){var J=this.getContentLocation();
var H=this.getResizeSensitivity();
var L=e.getDocumentLeft();
var K=e.getDocumentTop();
var I=0;

if(this.getResizableTop()&&Math.abs(J.top-K)<H){I+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(J.bottom-K)<H){I+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(J.left-L)<H){I+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(J.right-L)<H){I+=this.RESIZE_RIGHT;
}this.__resizeActive=I;
},__onResizeMouseDown:function(e){if(!this.__resizeActive){return;
}this.addState(q);
this.__resizeLeft=e.getDocumentLeft();
this.__resizeTop=e.getDocumentTop();
var location=this.getContainerLocation();
var M=this.getBounds();
this.__resizeStart={top:location.top,left:location.left,width:M.width,height:M.height,bounds:qx.lang.Object.clone(M)};
if(this.getUseResizeFrame()){this.__showResizeFrame();
}this.capture();
e.stop();
},__onResizeMouseUp:function(e){if(!this.hasState(q)){return;
}if(this.getUseResizeFrame()){this.__getResizeFrame().exclude();
}var T=this.__computeResizeResult(e);
this.setWidth(T.width);
this.setHeight(T.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:T.parentLeft,top:T.parentTop});
}this.__resizeActive=0;
this.removeState(q);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__onResizeLoseCapture:function(e){if(!this.__resizeActive){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(D);
if(this.getUseResizeFrame()){this.__getResizeFrame().exclude();
}},__onResizeMouseMove:function(e){if(this.hasState(q)){var R=this.__computeResizeResult(e);
if(this.getUseResizeFrame()){var P=this.__getResizeFrame();
P.setUserBounds(R.viewportLeft,R.viewportTop,R.width,R.height);
}else{this.setWidth(R.width);
this.setHeight(R.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:R.parentLeft,top:R.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(B)){this.__computeResizeMode(e);
var S=this.__resizeActive;
var Q=this.getApplicationRoot();

if(S){var O=this.__resizeCursors[S];
this.setCursor(O);
Q.setGlobalCursor(O);
}else if(this.getCursor()){this.resetCursor();
Q.resetGlobalCursor();
}}},__onResizeMouseOut:function(e){if(this.getCursor()&&!this.hasState(q)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__resizeFrame!=null&&!qx.core.ObjectRegistry.inShutDown){this.__resizeFrame.destroy();
this.__resizeFrame=null;
}}});
})();
(function(){var m="move",l="Boolean",k="mouseup",j="mousedown",i="losecapture",h="__moveHandle",g="qx.ui.core.MMovable",f="mousemove",d="maximized",c="__moveFrame",b="move-frame";
qx.Mixin.define(g,{properties:{movable:{check:l,init:true},useMoveFrame:{check:l,init:false}},members:{__moveHandle:null,__moveFrame:null,__dragRange:null,__dragLeft:null,__dragTop:null,__parentLeft:null,__parentTop:null,__blockerAdded:false,__oldBlockerColor:null,__oldBlockerOpacity:0,_activateMoveHandle:function(a){if(this.__moveHandle){throw new Error("The move handle could not be redefined!");
}this.__moveHandle=a;
a.addListener(j,this._onMoveMouseDown,this);
a.addListener(k,this._onMoveMouseUp,this);
a.addListener(f,this._onMoveMouseMove,this);
a.addListener(i,this.__onMoveLoseCapture,this);
},__getMoveFrame:function(){var w=this.__moveFrame;

if(!w){w=this.__moveFrame=new qx.ui.core.Widget();
w.setAppearance(b);
w.exclude();
qx.core.Init.getApplication().getRoot().add(w);
}return w;
},__showMoveFrame:function(){var location=this.getContainerLocation();
var t=this.getBounds();
var s=this.__getMoveFrame();
s.setUserBounds(location.left,location.top,t.width,t.height);
s.show();
s.setZIndex(this.getZIndex()+1);
},__computeMoveCoordinates:function(e){var o=this.__dragRange;
var r=Math.max(o.left,Math.min(o.right,e.getDocumentLeft()));
var q=Math.max(o.top,Math.min(o.bottom,e.getDocumentTop()));
var n=this.__dragLeft+r;
var p=this.__dragTop+q;
return {viewportLeft:n,viewportTop:p,parentLeft:n-this.__parentLeft,parentTop:p-this.__parentTop};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(d)){return;
}var parent=this.getLayoutParent();
var y=parent.getContentLocation();
var z=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__blockerAdded=true;
this.__oldBlockerColor=parent.getBlockerColor();
this.__oldBlockerOpacity=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
}}this.__dragRange={left:y.left,top:y.top,right:y.left+z.width,bottom:y.top+z.height};
var x=this.getContainerLocation();
this.__parentLeft=y.left;
this.__parentTop=y.top;
this.__dragLeft=x.left-e.getDocumentLeft();
this.__dragTop=x.top-e.getDocumentTop();
this.addState(m);
this.__moveHandle.capture();
if(this.getUseMoveFrame()){this.__showMoveFrame();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(m)){return;
}var v=this.__computeMoveCoordinates(e);

if(this.getUseMoveFrame()){this.__getMoveFrame().setDomPosition(v.viewportLeft,v.viewportTop);
}else{this.setDomPosition(v.parentLeft,v.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(m)){return;
}this.removeState(m);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__blockerAdded){parent.unblockContent();
parent.setBlockerColor(this.__oldBlockerColor);
parent.setBlockerOpacity(this.__oldBlockerOpacity);
this.__oldBlockerColor=null;
this.__oldBlockerOpacity=0;
}}this.__moveHandle.releaseCapture();
var u=this.__computeMoveCoordinates(e);
this.setLayoutProperties({left:u.parentLeft,top:u.parentTop});
if(this.getUseMoveFrame()){this.__getMoveFrame().exclude();
}e.stopPropagation();
},__onMoveLoseCapture:function(e){if(!this.hasState(m)){return;
}this.removeState(m);
if(this.getUseMoveFrame()){this.__getMoveFrame().exclude();
}}},destruct:function(){this._disposeObjects(c,h);
this.__dragRange=null;
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__contentPaddingSetter:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__contentPaddingResetter:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__contentPaddingResetter[name];
s[t]();
}else{var u=this.__contentPaddingSetter[name];
s[u](q);
}}}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(f){this.assertInterface(f,qx.ui.window.IDesktop);
},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(b){this.assertInstance(b,qx.ui.window.Window);
},sendToBack:function(e){this.assertInstance(e,qx.ui.window.Window);
}}});
})();
(function(){var b="qx.ui.window.Manager",a="__desktop";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__desktop:null,setDesktop:function(m){this.__desktop=m;
this.updateStack();
},getDesktop:function(){return this.__desktop;
},changeActiveWindow:function(f,g){if(f){this.bringToFront(f);
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__desktop.forceUnblockContent();
var o=this.__desktop.getWindows();
var r=this._minZIndex-1;
var q=false;
var p,n=null;

for(var i=0,l=o.length;i<l;i++){p=o[i];

if(!p.isVisible()){continue;
}r+=2;
p.setZIndex(r);
if(p.getModal()){this.__desktop.blockContent(r-1);
}q=q||p.isActive();
n=p;
}
if(!q){this.__desktop.setActiveWindow(n);
}},bringToFront:function(h){var j=this.__desktop.getWindows();
var k=qx.lang.Array.remove(j,h);

if(k){j.push(h);
this.updateStack();
}},sendToBack:function(c){var d=this.__desktop.getWindows();
var e=qx.lang.Array.remove(d,c);

if(e){d.unshift(c);
this.updateStack();
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var u="Boolean",t="qx.event.type.Event",s="captionbar",r="maximize-button",q="_applyCaptionBarChange",p="restore-button",o="minimize-button",n="close-button",m="maximized",l="execute",bc="pane",bb="title",ba="icon",Y="statusbar-text",X="statusbar",W="normal",V="String",U="active",T="beforeClose",S="beforeMinimize",B="mousedown",C="changeStatus",z="changeIcon",A="excluded",x="_applyCaption",y="_applyActive",v="beforeRestore",w="minimize",D="dblclick",E="changeModal",K="_applyShowStatusbar",J="_applyStatus",M="qx.ui.window.Window",L="changeCaption",O="_applyIcon",N="focusout",G="beforeMaximize",R="maximize",Q="restore",P="window",F="close",H="changeActive",I="minimized";
qx.Class.define(M,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(d,f){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(s);
this._createChildControl(bc);
if(f!=null){this.setIcon(f);
}
if(d!=null){this.setCaption(d);
}this._updateCaptionBar();
this.addListener(B,this._onWindowMouseDown,this,true);
this.addListener(N,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":t,"close":t,"beforeMinimize":t,"minimize":t,"beforeMaximize":t,"maximize":t,"beforeRestore":t,"restore":t},properties:{appearance:{refine:true,init:P},visibility:{refine:true,init:A},focusable:{refine:true,init:true},active:{check:u,init:false,apply:y,event:H},modal:{check:u,init:false,event:E},caption:{apply:x,event:L,nullable:true},icon:{check:V,nullable:true,apply:O,event:z,themeable:true},status:{check:V,nullable:true,apply:J,event:C},showClose:{check:u,init:true,apply:q,themeable:true},showMaximize:{check:u,init:true,apply:q,themeable:true},showMinimize:{check:u,init:true,apply:q,themeable:true},allowClose:{check:u,init:true,apply:q},allowMaximize:{check:u,init:true,apply:q},allowMinimize:{check:u,init:true,apply:q},showStatusbar:{check:u,init:false,apply:K}},members:{__restoredTop:null,__restoredLeft:null,getChildrenContainer:function(){return this.getChildControl(bc);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
arguments.callee.base.call(this,parent);
},_createChildControlImpl:function(be){var bf;

switch(be){case X:bf=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(bf);
bf.add(this.getChildControl(Y));
break;
case Y:bf=new qx.ui.basic.Label();
bf.setValue(this.getStatus());
break;
case bc:bf=new qx.ui.container.Composite();
this._add(bf,{flex:1});
break;
case s:var bh=new qx.ui.layout.Grid();
bh.setRowFlex(0,1);
bh.setColumnFlex(1,1);
bf=new qx.ui.container.Composite(bh);
this._add(bf);
bf.addListener(D,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(bf);
break;
case ba:bf=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(s).add(bf,{row:0,column:0});
break;
case bb:bf=new qx.ui.basic.Label(this.getCaption());
bf.setWidth(0);
bf.setAllowGrowX(true);
var bg=this.getChildControl(s);
bg.add(bf,{row:0,column:1});
break;
case o:bf=new qx.ui.form.Button();
bf.setFocusable(false);
bf.addListener(l,this._onMinimizeButtonClick,this);
this.getChildControl(s).add(bf,{row:0,column:2});
break;
case p:bf=new qx.ui.form.Button();
bf.setFocusable(false);
bf.addListener(l,this._onRestoreButtonClick,this);
this.getChildControl(s).add(bf,{row:0,column:3});
break;
case r:bf=new qx.ui.form.Button();
bf.setFocusable(false);
bf.addListener(l,this._onMaximizeButtonClick,this);
this.getChildControl(s).add(bf,{row:0,column:4});
break;
case n:bf=new qx.ui.form.Button();
bf.setFocusable(false);
bf.addListener(l,this._onCloseButtonClick,this);
this.getChildControl(s).add(bf,{row:0,column:6});
break;
}return bf||arguments.callee.base.call(this,be);
},_updateCaptionBar:function(){var bd;

if(this.getIcon()){this._showChildControl(ba);
}else{this._excludeChildControl(ba);
}
if(this.getCaption()){this._showChildControl(bb);
}else{this._excludeChildControl(bb);
}
if(this.getShowMinimize()){this._showChildControl(o);
bd=this.getChildControl(o);
this.getAllowMinimize()?bd.resetEnabled():bd.setEnabled(false);
}else{this._excludeChildControl(o);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(p);
this._excludeChildControl(r);
}else{this._showChildControl(r);
this._excludeChildControl(p);
}bd=this.getChildControl(r);
this.getAllowMaximize()?bd.resetEnabled():bd.setEnabled(false);
}else{this._excludeChildControl(r);
this._excludeChildControl(p);
}
if(this.getShowClose()){this._showChildControl(n);
bd=this.getChildControl(n);
this.getAllowClose()?bd.resetEnabled():bd.setEnabled(false);
}else{this._excludeChildControl(n);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(T,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(F);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bj=parent.getBounds();

if(bj){var bk=this.getSizeHint();
var bi=Math.round((bj.width-bk.width)/2);
var top=Math.round((bj.height-bk.height)/2);

if(top<0){top=0;
}this.moveTo(bi,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(G,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var k=this.getLayoutProperties();
this.__restoredLeft=k.left===undefined?0:k.left;
this.__restoredTop=k.top===undefined?0:k.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(m);
this._updateCaptionBar();
this.fireEvent(R);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(S,qx.event.type.Event,[false,true])){var br=this.getLayoutProperties();
this.__restoredLeft=br.left===undefined?0:br.left;
this.__restoredTop=br.top===undefined?0:br.top;
this.removeState(m);
this.hide();
this.fireEvent(w);
}},restore:function(){if(this.getMode()===W){return;
}
if(this.fireNonBubblingEvent(v,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var a=this.__restoredLeft;
var top=this.__restoredTop;
this.setLayoutProperties({edge:null,left:a,top:top});
this.removeState(m);
this._updateCaptionBar();
this.fireEvent(Q);
}},moveTo:function(bn,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bn,top:top});
},isMaximized:function(){return this.hasState(m);
},getMode:function(){if(!this.isVisible()){return I;
}else{if(this.isMaximized()){return m;
}else{return W;
}}},_applyActive:function(g,h){if(h){this.removeState(U);
}else{this.addState(U);
}},_getContentPaddingTarget:function(){return this.getChildControl(bc);
},_applyShowStatusbar:function(bo,bp){if(bo){this._showChildControl(X);
}else{this._excludeChildControl(X);
}},_applyCaptionBarChange:function(b,c){this._updateCaptionBar();
},_applyStatus:function(bs,bt){var bu=this.getChildControl(Y,true);

if(bu){bu.setValue(bs);
}},_applyCaption:function(bl,bm){this.getChildControl(bb).setValue(bl);
},_applyIcon:function(i,j){this.getChildControl(ba).setSource(i);
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bq=e.getRelatedTarget();

if(bq!=null&&!qx.ui.core.Widget.contains(this,bq)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(o).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(p).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(r).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(n).reset();
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(c){this.assertInterface(c,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(b){this.assertInteger(b);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var g="Number",f="qx.event.type.Event",e="_applyFirstColumnX",d="Integer",c="qx.ui.table.pane.Model",b="_applyMaxColumnCount",a="visibilityChangedPre";
qx.Class.define(c,{extend:qx.core.Object,construct:function(D){arguments.callee.base.call(this);
D.addListener(a,this._onColVisibilityChanged,this);
this.__tableColumnModel=D;
},events:{"modelChanged":f},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:d,init:0,apply:e},maxColumnCount:{check:g,init:-1,apply:b}},members:{__columnCount:null,__tableColumnModel:null,_applyFirstColumnX:function(j,k){this.__columnCount=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(A,B){this.__columnCount=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(C){this.__tableColumnModel=C;
this.__columnCount=null;
},_onColVisibilityChanged:function(l){this.__columnCount=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__columnCount==null){var t=this.getFirstColumnX();
var v=this.getMaxColumnCount();
var u=this.__tableColumnModel.getVisibleColumnCount();

if(v==-1||(t+v)>u){this.__columnCount=u-t;
}else{this.__columnCount=v;
}}return this.__columnCount;
},getColumnAtX:function(h){var i=this.getFirstColumnX();
return this.__tableColumnModel.getVisibleColumnAtX(i+h);
},getX:function(q){var r=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var x=this.__tableColumnModel.getVisibleX(q)-r;

if(x>=0&&(s==-1||x<s)){return x;
}else{return -1;
}},getColumnLeft:function(m){var p=0;
var o=this.getColumnCount();

for(var x=0;x<o;x++){var n=this.getColumnAtX(x);

if(n==m){return p;
}p+=this.__tableColumnModel.getColumnWidth(n);
}return -1;
},getTotalWidth:function(){var w=0;
var y=this.getColumnCount();

for(var x=0;x<y;x++){var z=this.getColumnAtX(x);
w+=this.__tableColumnModel.getColumnWidth(z);
}return w;
}},destruct:function(){this.__tableColumnModel=null;
}});
})();
(function(){var bL="",bK="!",bJ="'!",bI="'",bH="Expected '",bG="' (rgb(",bF=",",bE=")), but found value '",bD="Event (",bC="Expected value to be the CSS color '",cR="' but found ",cQ="The value '",cP="qx.core.Object",cO="Expected value to be an array but found ",cN=") was fired.",cM="Expected value to be an integer >= 0 but found ",cL="' to be not equal with '",cK="' to '",cJ="qx.ui.core.Widget",cI="Called assertTrue with '",bS="Expected value to be a map but found ",bT="The function did not raise an exception!",bQ="Expected value to be undefined but found ",bR="Expected value to be a DOM element but found  '",bO="Expected value to be a regular expression but found ",bP="' to implement the interface '",bM="Expected value to be null but found ",bN="Invalid argument 'type'",cb="Called assert with 'false'",cc="Assertion error! ",co="Expected value to be a string but found ",ck="null",cw="' but found '",cr="' must must be a key of the map '",cE="The String '",cB="Expected value not to be undefined but found ",cg="qx.util.ColorUtil",cH=": ",cG="The raised exception does not have the expected type! ",cF=") not fired.",cf="qx.core.Assert",ci="Expected value to be typeof object but found ",cj="' (identical) but found '",cm="' must have any of the values defined in the array '",cp="Expected value to be a number but found ",cs="Called assertFalse with '",cy="]",cD="Expected value to be a qooxdoo object but found ",bU="' arguments.",bV="Expected value not to be null but found ",ch="Array[",cv="' does not match the regular expression '",cu="' to be not identical with '",ct="' arguments but found '",cA="', which cannot be converted to a CSS color!",cz="Expected object '",cq="qx.core.AssertionError",cx="Expected value to be a boolean but found ",bz="))!",cC="Expected value to be a qooxdoo widget but found ",bW="Expected value '%1' to be in the range '%2'..'%3'!",bX="Expected value to be typeof '",cl="Expected value to be typeof function but found ",bA="Expected value to be an integer but found ",bB="Called fail().",ce="The parameter 're' must be a string or a regular expression.",bY="Expected value to be a number >= 0 but found ",ca="Expected value to be instanceof '",cd="Wrong number of arguments given. Expected '",cn="object";
qx.Class.define(cf,{statics:{__logError:true,__fail:function(Q,R){var S=bL;

for(var i=1,l=arguments.length;i<l;i++){S=S+this.__toString(arguments[i]);
}var U=cc+Q+cH+S;

if(this.__logError){qx.Bootstrap.error(U);
}
if(qx.Class.isDefined(cq)){var T=new qx.core.AssertionError(Q,S);

if(this.__logError){qx.Bootstrap.error("Stack trace: \n"+T.getStackTrace());
}throw T;
}else{throw new Error(U);
}},__toString:function(g){var h;

if(g===null){h=ck;
}else if(qx.lang.Type.isArray(g)&&g.length>10){h=ch+g.length+cy;
}else if((g instanceof Object)&&(g.toString==null)){h=qx.lang.Json.stringify(g,null,2);
}else{try{h=g.toString();
}catch(e){h=bL;
}}return h;
},assert:function(J,K){J==true||this.__fail(K||bL,cb);
},fail:function(bd){this.__fail(bd||bL,bB);
},assertTrue:function(bn,bo){(bn===true)||this.__fail(bo||bL,cI,bn,bI);
},assertFalse:function(cX,cY){(cX===false)||this.__fail(cY||bL,cs,cX,bI);
},assertEquals:function(dp,dq,dr){dp==dq||this.__fail(dr||bL,bH,dp,cw,dq,bJ);
},assertNotEquals:function(N,O,P){N!=O||this.__fail(P||bL,bH,N,cL,O,bJ);
},assertIdentical:function(dc,dd,de){dc===dd||this.__fail(de||bL,bH,dc,cj,dd,bJ);
},assertNotIdentical:function(dl,dm,dn){dl!==dm||this.__fail(dn||bL,bH,dl,cu,dm,bJ);
},assertNotUndefined:function(dS,dT){dS!==undefined||this.__fail(dT||bL,cB,dS,bK);
},assertUndefined:function(L,M){L===undefined||this.__fail(M||bL,bQ,L,bK);
},assertNotNull:function(dv,dw){dv!==null||this.__fail(dw||bL,bV,dv,bK);
},assertNull:function(bb,bc){bb===null||this.__fail(bc||bL,bM,bb,bK);
},assertJsonEquals:function(n,o,p){this.assertEquals(qx.lang.Json.stringify(n),qx.lang.Json.stringify(o),p);
},assertMatch:function(dG,dH,dI){this.assertString(dG);
this.assert(qx.lang.Type.isRegExp(dH)||qx.lang.Type.isString(dH),ce);
dG.search(dH)>=0||this.__fail(dI||bL,cE,dG,cv,dH.toString(),bJ);
},assertArgumentsCount:function(V,W,X,Y){var ba=V.length;
(ba>=W&&ba<=X)||this.__fail(Y||bL,cd,W,cK,X,ct,arguments.length,bU);
},assertEventFired:function(dz,event,dA,dB,dC){var dE=false;
var dD=function(e){if(dB){dB.call(dz,e);
}dE=true;
};
var dF=dz.addListener(event,dD,dz);
dA.call();
dE===true||this.__fail(dC||bL,bD,event,cF);
dz.removeListenerById(dF);
},assertEventNotFired:function(df,event,dg,dh){var dj=false;
var di=function(e){dj=true;
};
var dk=df.addListener(event,di,df);
dg.call();
dj===false||this.__fail(dh||bL,bD,event,cN);
df.removeListenerById(dk);
},assertException:function(dJ,dK,dL,dM){var dK=dK||Error;
var dN;

try{this.__logError=false;
dJ();
}catch(bm){dN=bm;
}finally{this.__logError=true;
}
if(dN==null){this.__fail(dM||bL,bT);
}dN instanceof dK||this.__fail(dM||bL,cG,dK);

if(dL){this.assertMatch(dN.toString(),dL,dM);
}},assertInArray:function(bj,bk,bl){bk.indexOf(bj)!==-1||this.__fail(bl||bL,cQ,bj,cm,bk,bI);
},assertArrayEquals:function(dU,dV,dW){this.assertArray(dU,dW);
this.assertArray(dV,dW);
this.assertEquals(dU.length,dV.length,dW);

for(var i=0;i<dU.length;i++){this.assertIdentical(dU[i],dV[i],dW);
}},assertKeyInMap:function(ds,dt,du){dt[ds]!==undefined||this.__fail(du||bL,cQ,ds,cr,dt,bI);
},assertFunction:function(bh,bi){qx.lang.Type.isFunction(bh)||this.__fail(bi||bL,cl,bh,bK);
},assertString:function(w,x){qx.lang.Type.isString(w)||this.__fail(x||bL,co,w,bK);
},assertBoolean:function(cS,cT){qx.lang.Type.isBoolean(cS)||this.__fail(cT||bL,cx,cS,bK);
},assertNumber:function(s,t){(qx.lang.Type.isNumber(s)&&isFinite(s))||this.__fail(t||bL,cp,s,bK);
},assertPositiveNumber:function(dx,dy){(qx.lang.Type.isNumber(dx)&&isFinite(dx)&&dx>=0)||this.__fail(dy||bL,bY,dx,bK);
},assertInteger:function(c,d){(qx.lang.Type.isNumber(c)&&isFinite(c)&&c%1===0)||this.__fail(d||bL,bA,c,bK);
},assertPositiveInteger:function(G,H){var I=(qx.lang.Type.isNumber(G)&&isFinite(G)&&G%1===0&&G>=0);
I||this.__fail(H||bL,cM,G,bK);
},assertInRange:function(dO,dP,dQ,dR){(dO>=dP&&dO<=dQ)||this.__fail(dR||bL,qx.lang.String.format(bW,[dO,dP,dQ]));
},assertObject:function(bw,bx){var by=bw!==null&&(qx.lang.Type.isObject(bw)||typeof bw===cn);
by||this.__fail(bx||bL,ci,(bw),bK);
},assertArray:function(y,z){qx.lang.Type.isArray(y)||this.__fail(z||bL,cO,y,bK);
},assertMap:function(a,b){qx.lang.Type.isObject(a)||this.__fail(b||bL,bS,a,bK);
},assertRegExp:function(u,v){qx.lang.Type.isRegExp(u)||this.__fail(v||bL,bO,u,bK);
},assertType:function(cU,cV,cW){this.assertString(cV,bN);
typeof (cU)===cV||this.__fail(cW||bL,bX,cV,cR,cU,bK);
},assertInstance:function(A,B,C){var D=B.classname||B+bL;
A instanceof B||this.__fail(C||bL,ca,D,cR,A,bK);
},assertInterface:function(j,k,m){qx.Class.implementsInterface(j,k)||this.__fail(m||bL,cz,j,bP,k,bJ);
},assertCssColor:function(bp,bq,br){var bs=qx.Class.getByName(cg);

if(!bs){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var bu=bs.stringToRgb(bp);

try{var bt=bs.stringToRgb(bq);
}catch(f){this.__fail(br||bL,bC,bp,bG,bu.join(bF),bE,bq,cA);
}var bv=bu[0]==bt[0]&&bu[1]==bt[1]&&bu[2]==bt[2];
bv||this.__fail(br||bL,bC,bu,bG,bu.join(bF),bE,bq,bG,bt.join(bF),bz);
},assertElement:function(q,r){!!(q&&q.nodeType===1)||this.__fail(r||bL,bR,q,bJ);
},assertQxObject:function(E,F){this.__isQxInstance(E,cP)||this.__fail(F||bL,cD,E,bK);
},assertQxWidget:function(da,db){this.__isQxInstance(da,cJ)||this.__fail(db||bL,cC,da,bK);
},__isQxInstance:function(be,bf){if(!be){return false;
}var bg=be.constructor;

while(bg){if(bg.classname===bf){return true;
}bg=bg.superclass;
}return false;
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__gap:null,__indent:null,__rep:null,__stack:null,stringify:function(bk,bl,bm){this.__gap=p;
this.__indent=p;
this.__stack=[];

if(qx.lang.Type.isNumber(bm)){var bm=Math.min(10,Math.floor(bm));

for(var i=0;i<bm;i+=1){this.__indent+=O;
}}else if(qx.lang.Type.isString(bm)){if(bm.length>10){bm=bm.slice(0,10);
}this.__indent=bm;
}if(bl&&(qx.lang.Type.isFunction(bl)||qx.lang.Type.isArray(bl))){this.__rep=bl;
}else{this.__rep=null;
}return this.__str(p,{'':bk});
},__str:function(be,bf){var bi=this.__gap,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__rep===e){bj=this.__rep.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__quote(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__gap+=this.__indent;
bg=[];

if(this.__stack.indexOf(bj)!==-1){throw new TypeError(V);
}this.__stack.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__str(i,bj)||h;
}this.__stack.pop();
if(bg.length===0){var bh=s;
}else if(this.__gap){bh=E+this.__gap+bg.join(Y+this.__gap)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__gap=bi;
return bh;
case z:this.__gap+=this.__indent;
bg=[];

if(this.__stack.indexOf(bj)!==-1){throw new TypeError(V);
}this.__stack.push(bj);
if(this.__rep&&typeof this.__rep===f){var length=this.__rep.length;

for(var i=0;i<length;i+=1){var k=this.__rep[i];

if(typeof k===W){var v=this.__str(k,bj);

if(v){bg.push(this.__quote(k)+(this.__gap?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__str(k,bj);

if(v){bg.push(this.__quote(k)+(this.__gap?g:m)+v);
}}}}this.__stack.pop();
if(bg.length===0){var bh=A;
}else if(this.__gap){bh=w+this.__gap+bg.join(Y+this.__gap)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__gap=bi;
return bh;
}},dateToJSON:function(bs){var bt=function(n){return n<10?U+n:n;
};
var bu=function(n){var bn=bt(n);
return n<100?U+bn:bn;
};
return isFinite(bs.valueOf())?bs.getUTCFullYear()+T+bt(bs.getUTCMonth()+1)+T+bt(bs.getUTCDate())+M+bt(bs.getUTCHours())+m+bt(bs.getUTCMinutes())+m+bt(bs.getUTCSeconds())+F+bu(bs.getUTCMilliseconds())+q:null;
},__quote:function(bb){var bc={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bd=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bd.lastIndex=0;

if(bd.test(bb)){return o+
bb.replace(bd,function(a){var c=bc[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bb+o;
}},parse:function(bv,bw){var bx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bx.lastIndex=0;
if(bx.test(bv)){bv=bv.replace(bx,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bv.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+bv+D);
return typeof bw===e?this.__walk({'':j},p,bw):j;
}throw new SyntaxError(P);
},__walk:function(bo,bp,bq){var br=bo[bp];

if(br&&typeof br===f){for(var k in br){if(Object.hasOwnProperty.call(br,k)){var v=this.__walk(br,k,bq);

if(v!==undefined){br[k]=v;
}else{delete br[k];
}}}}return bq.call(bo,bp,br);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var t="px",s=".qooxdoo-table-cell-icon {",r="abstract",q="",p="qx.ui.table.cellrenderer.AbstractImage",o=" qooxdoo-table-cell-icon",n="<div></div>",m="'",l="no-repeat",k="}",e="  text-align:center;",j="inline-block",h="static",d="top",c="  padding-top:1px;",g="title='",f="string",i="-moz-inline-box";
qx.Class.define(p,{extend:qx.ui.table.cellrenderer.Abstract,type:r,construct:function(){arguments.callee.base.call(this);
var E=arguments.callee.self;

if(!E.stylesheet){E.stylesheet=qx.bom.Stylesheet.createElement(s+e+c+k);
}},members:{__defaultWidth:16,__defaultHeight:16,_insetY:2,__imageData:null,_identifyImage:function(H){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(z){var A=this._identifyImage(z);
if(A==null||typeof z==f){A={url:A,tooltip:null};
}
if(z.width&&z.height){var B={width:z.imageWidth,height:z.imageHeight};
}else{B=this.__getImageSize(A.url);
}A.width=B.width;
A.height=B.height;
return A;
},__getImageSize:function(u){var x=qx.util.ResourceManager.getInstance();
var w=qx.io.ImageLoader;
var v,y;
if(x.has(u)){v=x.getImageWidth(u);
y=x.getImageHeight(u);
}else if(w.isLoaded(u)){v=w.getWidth(u);
y=w.getHeight(u);
}else{v=this.__defaultWidth;
y=this.__defaultHeight;
}return {width:v,height:y};
},createDataCellHtml:function(F,G){this.__imageData=this._getImageInfos(F);
return arguments.callee.base.call(this,F,G);
},_getCellClass:function(C){return arguments.callee.base.call(this)+o;
},_getContentHtml:function(D){var content=n;
if(this.__imageData.url){var content=qx.bom.element.Decoration.create(this.__imageData.url,l,{width:this.__imageData.width+t,height:this.__imageData.height+t,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?i:j,verticalAlign:d,position:h});
}return content;
},_getCellAttributes:function(a){var b=this.__imageData.tooltip;

if(b){return g+b+m;
}else{return q;
}}},destruct:function(){this.__imageData=null;
}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){arguments.callee.base.call(this);
this.__aliasManager=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__iconUrlTrue:null,__iconUrlFalse:false,__aliasManager:null,_applyIconTrue:function(h){this.__iconUrlTrue=this.__aliasManager.resolve(h);
},_applyIconFalse:function(k){this.__iconUrlFalse=this.__aliasManager.resolve(k);
},_insetY:5,_getCellStyle:function(l){return arguments.callee.base.call(this,l)+c;
},_identifyImage:function(i){var j={imageWidth:11,imageHeight:11};

switch(i.value){case true:j.url=this.__iconUrlTrue;
break;
case false:j.url=this.__iconUrlFalse;
break;
default:j.url=null;
break;
}return j;
}},destruct:function(){this.__aliasManager=null;
}});
})();
(function(){var A="",z="==",y=">",x="between",w="<",v="regex",u="!between",t=">=",s="!=",r="<=",l="font-weight",q=";",o="text-align",k='g',j=":",n="qx.ui.table.cellrenderer.Conditional",m="color",p="font-style";
qx.Class.define(n,{extend:qx.ui.table.cellrenderer.Default,construct:function(D,E,F,G){arguments.callee.base.call(this);
this.numericAllowed=[z,s,y,w,t,r];
this.betweenAllowed=[x,u];
this.conditions=[];
this.__defaultTextAlign=D||A;
this.__defaultColor=E||A;
this.__defaultFontStyle=F||A;
this.__defaultFontWeight=G||A;
},members:{__defaultTextAlign:null,__defaultColor:null,__defaultFontStyle:null,__defaultFontWeight:null,__applyFormatting:function(B,C){if(B[1]!=null){C[o]=B[1];
}
if(B[2]!=null){C[m]=B[2];
}
if(B[3]!=null){C[p]=B[3];
}
if(B[4]!=null){C[l]=B[4];
}},addNumericCondition:function(a,b,c,d,e,f,g){var h=null;

if(qx.lang.Array.contains(this.numericAllowed,a)){if(b!=null){h=[a,c,d,e,f,b,g];
}}
if(h!=null){this.conditions.push(h);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(O,P,Q,R,S,T,U,V){if(qx.lang.Array.contains(this.betweenAllowed,O)){if(P!=null&&Q!=null){var W=[O,R,S,T,U,P,Q,V];
}}
if(W!=null){this.conditions.push(W);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(H,I,J,K,L,M){if(H!=null){var N=[v,I,J,K,L,H,M];
}
if(N!=null){this.conditions.push(N);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(X){if(!this.conditions.length){return X.style||A;
}var bd=X.table.getTableModel();
var i;
var bf;
var Y;
var bb={"text-align":this.__defaultTextAlign,"color":this.__defaultColor,"font-style":this.__defaultFontStyle,"font-weight":this.__defaultFontWeight};

for(i in this.conditions){bf=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][6],X.row);
}
switch(this.conditions[i][0]){case z:if(Y==this.conditions[i][5]){bf=true;
}break;
case s:if(Y!=this.conditions[i][5]){bf=true;
}break;
case y:if(Y>this.conditions[i][5]){bf=true;
}break;
case w:if(Y<this.conditions[i][5]){bf=true;
}break;
case t:if(Y>=this.conditions[i][5]){bf=true;
}break;
case r:if(Y<=this.conditions[i][5]){bf=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][7],X.row);
}
switch(this.conditions[i][0]){case x:if(Y>=this.conditions[i][5]&&Y<=this.conditions[i][6]){bf=true;
}break;
case u:if(Y<this.conditions[i][5]&&Y>this.conditions[i][6]){bf=true;
}break;
}}else if(this.conditions[i][0]==v){if(this.conditions[i][6]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][6],X.row);
}var ba=new RegExp(this.conditions[i][5],k);
bf=ba.test(Y);
}if(bf==true){this.__applyFormatting(this.conditions[i],bb);
}}var be=[];

for(var bc in bb){if(bb[bc]){be.push(bc,j,bb[bc],q);
}}return be.join(A);
}},destruct:function(){this.numericAllowed=this.betweenAllowed=this.conditions=null;
}});
})();
(function(){var d="",c="qx.util.format.DateFormat",b="qooxdoo-table-cell",a="qx.ui.table.cellrenderer.Date";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Conditional,properties:{dateFormat:{check:c,init:null,nullable:true}},members:{_getContentHtml:function(f){var g=this.getDateFormat();

if(g){if(f.value){return qx.bom.String.escape(g.format(f.value));
}else{return d;
}}else{return f.value||d;
}},_getCellClass:function(e){return b;
}}});
})();
(function(){var v="popup",u="list",t="",s="mousewheel",r="resize",q="Function",p="blur",o="abstract",n="keypress",m="Number",f="changeSelection",l="PageUp",i="_applyMaxListHeight",c="PageDown",b="mouseup",h="Escape",g="changeVisibility",j="one",a="middle",k="qx.ui.form.AbstractSelectBox",d="mousedown";
qx.Class.define(k,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:o,construct:function(){arguments.callee.base.call(this);
var x=new qx.ui.layout.HBox();
this._setLayout(x);
x.setAlignY(a);
this.addListener(n,this._onKeyPress);
this.addListener(p,this._onBlur,this);
var w=qx.core.Init.getApplication().getRoot();
w.addListener(s,this._onMousewheel,this,true);
this.addListener(r,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:m,apply:i,nullable:true,init:200},format:{check:q,init:function(K){return this._defaultFormat(K);
},nullable:true}},members:{_createChildControlImpl:function(C){var D;

switch(C){case u:D=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:j,quickSelection:true});
D.addListener(f,this._onListChangeSelection,this);
D.addListener(d,this._onListMouseDown,this);
break;
case v:D=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
D.setAutoHide(false);
D.setKeepActive(true);
D.addListener(b,this.close,this);
D.add(this.getChildControl(u));
D.addListener(g,this._onPopupChangeVisibility,this);
break;
}return D||arguments.callee.base.call(this,C);
},_applyMaxListHeight:function(I,J){this.getChildControl(u).setMaxHeight(I);
},getChildrenContainer:function(){return this.getChildControl(u);
},open:function(){var M=this.getChildControl(v);
M.placeToWidget(this,true);
M.show();
},close:function(){this.getChildControl(v).hide();
},toggle:function(){var L=this.getChildControl(v).isVisible();

if(L){this.close();
}else{this.open();
}},_defaultFormat:function(E){var F=E?E.getLabel():t;
var G=E?E.getRich():false;

if(G){F=F.replace(/<[^>]+?>/g,t);
F=qx.bom.String.unescape(F);
}return F;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var A=e.getKeyIdentifier();
var B=this.getChildControl(v);
if(B.isHidden()&&(A==c||A==l)){e.stopPropagation();
}else if(!B.isHidden()&&A==h){this.close();
e.stop();
}else{this.getChildControl(u).handleKeyPress(e);
}},_onMousewheel:function(e){var z=e.getTarget();
var y=this.getChildControl(v);

if(qx.ui.core.Widget.contains(y,z)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(v).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var H=qx.core.Init.getApplication().getRoot();

if(H){H.removeListener(s,this._onMousewheel,this,true);
}}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(d){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(c){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var g="qx.ui.core.MSingleSelectionHandling",f="__manager",d="changeSelection",c="changeSelected",b="qx.event.type.Data";
qx.Mixin.define(g,{events:{"changeSelection":b},members:{__manager:null,getSelection:function(){var a=this.__getManager().getSelected();

if(a){return [a];
}else{return [];
}},setSelection:function(k){if(!this.getEnabled()&&false){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
switch(k.length){case 0:this.resetSelection();
break;
case 1:this.__getManager().setSelected(k[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+k.length+" items!");
}},resetSelection:function(){if(!this.getEnabled()&&false){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to reset the selection."));
this.trace();
}this.__getManager().resetSelected();
},isSelected:function(j){return this.__getManager().isSelected(j);
},isSelectionEmpty:function(){return this.__getManager().isSelectionEmpty();
},getSelectables:function(){return this.__getManager().getSelectables();
},_onChangeSelected:function(e){var i=e.getData();
var h=e.getOldData();
i==null?i=[]:i=[i];
h==null?h=[]:h=[h];
this.fireDataEvent(d,i,h);
},__getManager:function(){if(this.__manager==null){var l=this;
this.__manager=new qx.ui.core.SingleSelectionManager({getItems:function(){return l._getItems();
},isItemSelectable:function(m){if(l._isItemSelectable){return l._isItemSelectable(m);
}else{return m.isEnabled()&&m.isVisible();
}}});
this.__manager.addListener(c,this._onChangeSelected,this);
}this.__manager.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__manager;
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var e="change",d="__modelSelection",c="qx.event.type.Data",b="qx.ui.form.MModelSelection",a="changeSelection";
qx.Mixin.define(b,{construct:function(){this.__modelSelection=new qx.data.Array();
this.__modelSelection.addListener(e,this.__onModelSelectionArrayChange,this);
this.addListener(a,this.__onModelSelectionChange,this);
},events:{changeModelSelection:c},members:{__modelSelection:null,__inSelectionChange:false,__onModelSelectionChange:function(){if(this.__inSelectionChange){return;
}var h=this.getSelection();
var f=[];

for(var i=0;i<h.length;i++){var k=h[i];
var g=k.getModel?k.getModel():null;

if(g!==null){f.push(g);
}}this.setModelSelection(f);
},__onModelSelectionArrayChange:function(){this.__inSelectionChange=true;
var o=this.getSelectables();
var q=[];
var p=this.__modelSelection.toArray();

for(var i=0;i<p.length;i++){var s=p[i];

for(var j=0;j<o.length;j++){var t=o[j];
var n=t.getModel?t.getModel():null;

if(s===n){q.push(t);
break;
}}}this.setSelection(q);
this.__inSelectionChange=false;
var r=this.getSelection();

if(!qx.lang.Array.equals(r,q)){this.__onModelSelectionChange();
}},getModelSelection:function(){return this.__modelSelection;
},setModelSelection:function(l){if(!l){this.__modelSelection.removeAll();
return;
}{};
l.unshift(this.__modelSelection.getLength());
l.unshift(0);
var m=this.__modelSelection.splice.apply(this.__modelSelection,l);
m.dispose();
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var k="list",j="atom",i="pressed",h="abandoned",g="popup",f="hovered",d="changeLabel",c="changeIcon",b="arrow",a="",z="spacer",y="Enter",x="one",w="mouseout",v="Space",u="key",t="mousewheel",s="keyinput",r="changeSelection",q="quick",o="qx.ui.form.SelectBox",p="mouseover",m="selectbox",n="click",l=" ";
qx.Class.define(o,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this._createChildControl(j);
this._createChildControl(z);
this._createChildControl(b);
this.addListener(p,this._onMouseOver,this);
this.addListener(w,this._onMouseOut,this);
this.addListener(n,this._onClick,this);
this.addListener(t,this._onMouseWheel,this);
this.addListener(s,this._onKeyInput,this);
this.addListener(r,this.__onChangeSelection,this);
},properties:{appearance:{refine:true,init:m}},members:{__preSelectedItem:null,_createChildControlImpl:function(R){var S;

switch(R){case z:S=new qx.ui.core.Spacer();
this._add(S,{flex:1});
break;
case j:S=new qx.ui.basic.Atom(l);
S.setCenter(false);
S.setAnonymous(true);
this._add(S,{flex:1});
break;
case b:S=new qx.ui.basic.Image();
S.setAnonymous(true);
this._add(S);
break;
}return S||arguments.callee.base.call(this,R);
},_forwardStates:{focused:true},_getItems:function(){return this.getChildrenContainer().getChildren();
},_isAllowEmptySelection:function(){return this.getChildrenContainer().getSelectionMode()!==x;
},__onChangeSelection:function(e){var P=e.getData()[0];
var O=this.getChildControl(k);

if(O.getSelection()[0]!=P){if(P){O.setSelection([P]);
}else{O.resetSelection();
}}this.__updateIcon();
this.__updateLabel();
},__updateIcon:function(){var be=this.getChildControl(k).getSelection()[0];
var bf=this.getChildControl(j);
var bd=be?be.getIcon():a;
bd==null?bf.resetIcon():bf.setIcon(bd);
},__updateLabel:function(){var C=this.getChildControl(k).getSelection()[0];
var D=this.getChildControl(j);
var B=C?C.getLabel():a;
var A=this.getFormat();

if(A!=null){B=A.call(this,C);
}if(B&&B.translate){B=B.translate();
}B==null?D.resetLabel():D.setLabel(B);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(h)){this.removeState(h);
this.addState(i);
}this.addState(f);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(f);

if(this.hasState(i)){this.removeState(i);
this.addState(h);
}},_onClick:function(e){this.toggle();
},_onMouseWheel:function(e){if(this.getChildControl(g).isVisible()){return;
}var F=e.getWheelDelta()>0?1:-1;
var H=this.getSelectables();
var G=this.getSelection()[0];

if(!G){G=H[0];
}var E=H.indexOf(G)+F;
var I=H.length-1;
if(E<0){E=0;
}else if(E>=I){E=I;
}this.setSelection([H[E]]);
e.stopPropagation();
e.preventDefault();
},_onKeyPress:function(e){var Q=e.getKeyIdentifier();

if(Q==y||Q==v){if(this.__preSelectedItem){this.setSelection([this.__preSelectedItem]);
this.__preSelectedItem=null;
}this.toggle();
}else{arguments.callee.base.call(this,e);
}},_onKeyInput:function(e){var T=e.clone();
T.setTarget(this._list);
T.setBubbles(false);
this.getChildControl(k).dispatchEvent(T);
},_onListMouseDown:function(e){if(this.__preSelectedItem){this.setSelection([this.__preSelectedItem]);
this.__preSelectedItem=null;
}},_onListChangeSelection:function(e){var J=e.getData();
var M=e.getOldData();
if(M&&M.length>0){M[0].removeListener(c,this.__updateIcon,this);
M[0].removeListener(d,this.__updateLabel,this);
}
if(J.length>0){var L=this.getChildControl(g);
var K=this.getChildControl(k);
var N=K.getSelectionContext();

if(L.isVisible()&&(N==q||N==u)){this.__preSelectedItem=J[0];
}else{this.setSelection([J[0]]);
this.__preSelectedItem=null;
}J[0].addListener(c,this.__updateIcon,this);
J[0].addListener(d,this.__updateLabel,this);
}else{this.resetSelection();
}},_onPopupChangeVisibility:function(e){var V=this.getChildControl(g);

if(!V.isVisible()){var X=this.getChildControl(k);
if(X.hasChildren()){X.setSelection(this.getSelection());
}}else{var U=V.getLayoutLocation(this);
var ba=qx.bom.Viewport.getHeight();
var Y=U.top;
var bb=ba-U.bottom;
var W=Y>bb?Y:bb;
var bc=this.getMaxListHeight();
var X=this.getChildControl(k);

if(bc==null||bc>W){X.setMaxHeight(W);
}else if(bc<W){X.setMaxHeight(bc);
}}}},destruct:function(){this.__preSelectedItem=null;
}});
})();
(function(){var w="scrollbar-y",v="scrollbar-x",u="pane",t="auto",s="corner",r="on",q="changeVisibility",p="scroll",o="_computeScrollbars",n="off",g="scrollY",m="qx.ui.core.scroll.AbstractScrollArea",j="abstract",d="update",c="scrollX",i="mousewheel",h="scrollbarY",k="scrollbarX",b="horizontal",l="scrollarea",f="vertical";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:j,construct:function(){arguments.callee.base.call(this);
var y=new qx.ui.layout.Grid();
y.setColumnFlex(0,1);
y.setRowFlex(0,1);
this._setLayout(y);
this.addListener(i,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:l},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[t,r,n],init:t,themeable:true,apply:o},scrollbarY:{check:[t,r,n],init:t,themeable:true,apply:o},scrollbar:{group:[k,h]}},members:{_createChildControlImpl:function(I){var J;

switch(I){case u:J=new qx.ui.core.scroll.ScrollPane();
J.addListener(d,this._computeScrollbars,this);
J.addListener(c,this._onScrollPaneX,this);
J.addListener(g,this._onScrollPaneY,this);
this._add(J,{row:0,column:0});
break;
case v:J=this._createScrollBar(b);
J.setMinWidth(0);
J.exclude();
J.addListener(p,this._onScrollBarX,this);
J.addListener(q,this._onChangeScrollbarXVisibility,this);
this._add(J,{row:1,column:0});
break;
case w:J=this._createScrollBar(f);
J.setMinHeight(0);
J.exclude();
J.addListener(p,this._onScrollBarY,this);
J.addListener(q,this._onChangeScrollbarYVisibility,this);
this._add(J,{row:0,column:1});
break;
case s:J=new qx.ui.core.Widget();
J.setWidth(0);
J.setHeight(0);
J.exclude();
this._add(J,{row:1,column:1});
break;
}return J||arguments.callee.base.call(this,I);
},getPaneSize:function(){return this.getChildControl(u).getInnerSize();
},getItemTop:function(F){return this.getChildControl(u).getItemTop(F);
},getItemBottom:function(G){return this.getChildControl(u).getItemBottom(G);
},getItemLeft:function(Y){return this.getChildControl(u).getItemLeft(Y);
},getItemRight:function(ba){return this.getChildControl(u).getItemRight(ba);
},scrollToX:function(X){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollTo(X);
},scrollByX:function(a){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollBy(a);
},getScrollX:function(){var H=this.getChildControl(v,true);
return H?H.getPosition():0;
},scrollToY:function(z){qx.ui.core.queue.Manager.flush();
this.getChildControl(w).scrollTo(z);
},scrollByY:function(x){qx.ui.core.queue.Manager.flush();
this.getChildControl(w).scrollBy(x);
},getScrollY:function(){var M=this.getChildControl(w,true);
return M?M.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(u).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(u).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var D=this._isChildControlVisible(v);
var E=this._isChildControlVisible(w);
var C=(E)?this.getChildControl(w,true):(D?this.getChildControl(v,true):null);

if(C){C.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var A=this._isChildControlVisible(v);
var B=this._isChildControlVisible(w);

if(!A){this.scrollToX(0);
}A&&B?this._showChildControl(s):this._excludeChildControl(s);
},_onChangeScrollbarYVisibility:function(e){var K=this._isChildControlVisible(v);
var L=this._isChildControlVisible(w);

if(!L){this.scrollToY(0);
}K&&L?this._showChildControl(s):this._excludeChildControl(s);
},_computeScrollbars:function(){var T=this.getChildControl(u);
var content=T.getChildren()[0];

if(!content){this._excludeChildControl(v);
this._excludeChildControl(w);
return;
}var N=this.getInnerSize();
var S=T.getInnerSize();
var Q=T.getScrollSize();
if(!S||!Q){return;
}var U=this.getScrollbarX();
var V=this.getScrollbarY();

if(U===t&&V===t){var R=Q.width>N.width;
var W=Q.height>N.height;
if((R||W)&&!(R&&W)){if(R){W=Q.height>S.height;
}else if(W){R=Q.width>S.width;
}}}else{var R=U===r;
var W=V===r;
if(Q.width>(R?S.width:N.width)&&U===t){R=true;
}
if(Q.height>(R?S.height:N.height)&&V===t){W=true;
}}if(R){var P=this.getChildControl(v);
P.show();
P.setMaximum(Math.max(0,Q.width-S.width-1));
P.setKnobFactor(S.width/Q.width);
}else{this._excludeChildControl(v);
}
if(W){var O=this.getChildControl(w);
O.show();
O.setMaximum(Math.max(0,Q.height-S.height-1));
O.setKnobFactor(S.height/Q.height);
}else{this._excludeChildControl(w);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var z="single",y="Boolean",x="one",w="changeSelection",v="mouseup",u="mousedown",t="losecapture",s="multi",r="_applyQuickSelection",q="__manager",j="mouseover",p="_applySelectionMode",m="_applyDragSelection",h="qx.ui.core.MMultiSelectionHandling",g="removeItem",l="keypress",k="qx.event.type.Data",n="addItem",f="additive",o="mousemove";
qx.Mixin.define(h,{construct:function(){var H=this.SELECTION_MANAGER;
var G=this.__manager=new H(this);
this.addListener(u,G.handleMouseDown,G);
this.addListener(v,G.handleMouseUp,G);
this.addListener(j,G.handleMouseOver,G);
this.addListener(o,G.handleMouseMove,G);
this.addListener(t,G.handleLoseCapture,G);
this.addListener(l,G.handleKeyPress,G);
this.addListener(n,G.handleAddItem,G);
this.addListener(g,G.handleRemoveItem,G);
G.addListener(w,this._onSelectionChange,this);
},events:{"changeSelection":k},properties:{selectionMode:{check:[z,s,f,x],init:z,apply:p},dragSelection:{check:y,init:false,apply:m},quickSelection:{check:y,init:false,apply:r}},members:{__manager:null,selectAll:function(){if(!this.getEnabled()&&false){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong all items."));
this.trace();
}this.__manager.selectAll();
},isSelected:function(c){if(!qx.ui.core.Widget.contains(this,c)){throw new Error("Could not test if "+c+" is selected, because it is not a child element!");
}return this.__manager.isItemSelected(c);
},addToSelection:function(E){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,E)){throw new Error("Could not add + "+E+" to selection, because it is not a child element!");
}this.__manager.addItem(E);
},removeFromSelection:function(F){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to removing the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,F)){throw new Error("Could not remove "+F+" from selection, because it is not a child element!");
}this.__manager.removeItem(F);
},selectRange:function(C,D){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}this.__manager.selectItemRange(C,D);
},resetSelection:function(){if(!this.getEnabled()&&false){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to resetting the selectiong."));
this.trace();
}this.__manager.clearSelection();
},setSelection:function(K){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
for(var i=0;i<K.length;i++){if(!qx.ui.core.Widget.contains(this,K[i])){throw new Error("Could not select "+K[i]+", because it is not a child element!");
}}
if(K.length===0){this.resetSelection();
}else{var L=this.getSelection();

if(!qx.lang.Array.equals(L,K)){this.__manager.replaceSelection(K);
}}},getSelection:function(){return this.__manager.getSelection();
},getSortedSelection:function(){return this.__manager.getSortedSelection();
},isSelectionEmpty:function(){return this.__manager.isSelectionEmpty();
},getSelectionContext:function(){return this.__manager.getSelectionContext();
},_getManager:function(){return this.__manager;
},getSelectables:function(){return this.__manager.getSelectables();
},invertSelection:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}this.__manager.invertSelection();
},_getLeadItem:function(){var d=this.__manager.getMode();

if(d===z||d===x){return this.__manager.getSelectedItem();
}else{return this.__manager.getLeadItem();
}},_applySelectionMode:function(I,J){this.__manager.setMode(I);
},_applyDragSelection:function(A,B){this.__manager.setDrag(A);
},_applyQuickSelection:function(a,b){this.__manager.setQuick(a);
},_onSelectionChange:function(e){this.fireDataEvent(w,e.getData());
}},destruct:function(){this._disposeObjects(q);
}});
})();
(function(){var bR="one",bQ="single",bP="selected",bO="additive",bN="multi",bM="PageUp",bL="under",bK="Left",bJ="lead",bI="Down",cq="Up",cp="Boolean",co="PageDown",cn="anchor",cm="End",cl="Home",ck="Right",cj="right",ci="click",ch="above",bY="left",ca="Escape",bW="A",bX="Space",bU="_applyMode",bV="interval",bS="changeSelection",bT="qx.event.type.Data",cb="quick",cc="key",ce="abstract",cd="__scrollTimer",cg="drag",cf="qx.ui.core.selection.Abstract";
qx.Class.define(cf,{type:ce,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__selection={};
},events:{"changeSelection":bT},properties:{mode:{check:[bQ,bN,bO,bR],init:bQ,apply:bU},drag:{check:cp,init:false},quick:{check:cp,init:false}},members:{__scrollStepX:0,__scrollStepY:0,__scrollTimer:null,__frameScroll:null,__lastRelX:null,__lastRelY:null,__frameLocation:null,__dragStartX:null,__dragStartY:null,__inCapture:null,__mouseX:null,__mouseY:null,__moveDirectionX:null,__moveDirectionY:null,__selectionModified:null,__selectionContext:null,__leadItem:null,__selection:null,__anchorItem:null,__mouseDownOnSelected:null,getSelectionContext:function(){return this.__selectionContext;
},selectAll:function(){var cK=this.getMode();

if(cK==bQ||cK==bR){throw new Error("Can not select all items in selection mode: "+cK);
}this._selectAllItems();
this._fireChange();
},selectItem:function(g){this._setSelectedItem(g);
var h=this.getMode();

if(h!==bQ&&h!==bR){this._setLeadItem(g);
this._setAnchorItem(g);
}this._scrollItemIntoView(g);
this._fireChange();
},addItem:function(j){var k=this.getMode();

if(k===bQ||k===bR){this._setSelectedItem(j);
}else{if(!this._getAnchorItem()){this._setAnchorItem(j);
}this._setLeadItem(j);
this._addToSelection(j);
}this._scrollItemIntoView(j);
this._fireChange();
},removeItem:function(cV){this._removeFromSelection(cV);

if(this.getMode()===bR&&this.isSelectionEmpty()){var cW=this._getFirstSelectable();

if(cW){this.addItem(cW);
}if(cW==cV){return;
}}
if(this.getLeadItem()==cV){this._setLeadItem(null);
}
if(this._getAnchorItem()==cV){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(X,Y){var ba=this.getMode();

if(ba==bQ||ba==bR){throw new Error("Can not select multiple items in selection mode: "+ba);
}this._selectItemRange(X,Y);
this._setAnchorItem(X);
this._setLeadItem(Y);
this._scrollItemIntoView(Y);
this._fireChange();
},clearSelection:function(){if(this.getMode()==bR){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bd){var be=this.getMode();

if(be==bR||be===bQ){if(bd.length>1){throw new Error("Could not select more than one items in mode: "+be+"!");
}
if(bd.length==1){this.selectItem(bd[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bd);
}},getSelectedItem:function(){var m=this.getMode();

if(m===bQ||m===bR){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__selection);
},getSortedSelection:function(){var bH=this.getSelectables();
var bG=qx.lang.Object.getValues(this.__selection);
bG.sort(function(a,b){return bH.indexOf(a)-bH.indexOf(b);
});
return bG;
},isItemSelected:function(n){var o=this._selectableToHashCode(n);
return this.__selection[o]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__selection);
},invertSelection:function(){var t=this.getMode();

if(t===bQ||t===bR){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var s=this.getSelectables();

for(var i=0;i<s.length;i++){this._toggleInSelection(s[i]);
}this._fireChange();
},_setLeadItem:function(cN){var cO=this.__leadItem;

if(cO!==null){this._styleSelectable(cO,bJ,false);
}
if(cN!==null){this._styleSelectable(cN,bJ,true);
}this.__leadItem=cN;
},_getLeadItem:function(){{};
return this.getLeadItem();
},getLeadItem:function(){return this.__leadItem!==null?this.__leadItem:null;
},_setAnchorItem:function(G){var H=this.__anchorItem;

if(H){this._styleSelectable(H,cn,false);
}
if(G){this._styleSelectable(G,cn,true);
}this.__anchorItem=G;
},_getAnchorItem:function(){return this.__anchorItem!==null?this.__anchorItem:null;
},_isSelectable:function(cP){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var cQ=event.getTarget();
return this._isSelectable(cQ)?cQ:null;
},_selectableToHashCode:function(W){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(p,q,r){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(Q){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bc){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(cR,cS){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bf){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(N,O){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(I,J){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(K,L){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bz,bA){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bz===bR){var bB=this._getFirstSelectable();

if(bB){this._setSelectedItem(bB);
this._scrollItemIntoView(bB);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var cu=this.getMode();

if(cu!==bR&&cu!==bQ){return;
}var ct=this._getSelectableFromMouseEvent(event);

if(ct===null){return;
}this._setSelectedItem(ct);
this._fireChange(cb);
},handleMouseDown:function(event){var S=this._getSelectableFromMouseEvent(event);

if(S===null){return;
}var U=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var R=event.isShiftPressed();
if(this.isItemSelected(S)&&!R&&!U&&!this.getDrag()){this.__mouseDownOnSelected=S;
return;
}else{this.__mouseDownOnSelected=null;
}this._scrollItemIntoView(S);
switch(this.getMode()){case bQ:case bR:this._setSelectedItem(S);
break;
case bO:this._setLeadItem(S);
this._setAnchorItem(S);
this._toggleInSelection(S);
break;
case bN:this._setLeadItem(S);
if(R){var T=this._getAnchorItem();

if(T===null){T=this._getFirstSelectable();
this._setAnchorItem(T);
}this._selectItemRange(T,S,U);
}else if(U){this._setAnchorItem(S);
this._toggleInSelection(S);
}else{this._setAnchorItem(S);
this._setSelectedItem(S);
}break;
}var V=this.getMode();

if(this.getDrag()&&V!==bQ&&V!==bR&&!R&&!U){this.__frameLocation=this._getLocation();
this.__frameScroll=this._getScroll();
this.__dragStartX=event.getDocumentLeft()+this.__frameScroll.left;
this.__dragStartY=event.getDocumentTop()+this.__frameScroll.top;
this.__inCapture=true;
this._capture();
}this._fireChange(ci);
},handleMouseUp:function(event){var bF=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bC=event.isShiftPressed();

if(!bF&&!bC&&this.__mouseDownOnSelected){var bD=this._getSelectableFromMouseEvent(event);

if(bD===null||!this.isItemSelected(bD)){return;
}var bE=this.getMode();

if(bE===bO){this._removeFromSelection(bD);
}else{this._setSelectedItem(bD);

if(this.getMode()===bN){this._setLeadItem(bD);
this._setAnchorItem(bD);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__inCapture){return;
}this.__mouseX=event.getDocumentLeft();
this.__mouseY=event.getDocumentTop();
var cs=this.__mouseX+this.__frameScroll.left;

if(cs>this.__dragStartX){this.__moveDirectionX=1;
}else if(cs<this.__dragStartX){this.__moveDirectionX=-1;
}else{this.__moveDirectionX=0;
}var cr=this.__mouseY+this.__frameScroll.top;

if(cr>this.__dragStartY){this.__moveDirectionY=1;
}else if(cr<this.__dragStartY){this.__moveDirectionY=-1;
}else{this.__moveDirectionY=0;
}var location=this.__frameLocation;

if(this.__mouseX<location.left){this.__scrollStepX=this.__mouseX-location.left;
}else if(this.__mouseX>location.right){this.__scrollStepX=this.__mouseX-location.right;
}else{this.__scrollStepX=0;
}
if(this.__mouseY<location.top){this.__scrollStepY=this.__mouseY-location.top;
}else if(this.__mouseY>location.bottom){this.__scrollStepY=this.__mouseY-location.bottom;
}else{this.__scrollStepY=0;
}if(!this.__scrollTimer){this.__scrollTimer=new qx.event.Timer(100);
this.__scrollTimer.addListener(bV,this._onInterval,this);
}this.__scrollTimer.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var P=e.getData();

if(this.getMode()===bR&&this.isSelectionEmpty()){this.addItem(P);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__inCapture){return;
}if(this.__selectionModified){this._fireChange(ci);
}delete this.__inCapture;
delete this.__lastRelX;
delete this.__lastRelY;
this._releaseCapture();
if(this.__scrollTimer){this.__scrollTimer.stop();
}},_onInterval:function(e){this._scrollBy(this.__scrollStepX,this.__scrollStepY);
this.__frameScroll=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var C=this._getDimension();
var v=Math.max(0,Math.min(this.__mouseX-this.__frameLocation.left,C.width))+this.__frameScroll.left;
var u=Math.max(0,Math.min(this.__mouseY-this.__frameLocation.top,C.height))+this.__frameScroll.top;
if(this.__lastRelX===v&&this.__lastRelY===u){return;
}this.__lastRelX=v;
this.__lastRelY=u;
var E=this._getAnchorItem();
var x=E;
var A=this.__moveDirectionX;
var D,w;

while(A!==0){D=A>0?this._getRelatedSelectable(x,cj):this._getRelatedSelectable(x,bY);
if(D!==null){w=this._getSelectableLocationX(D);
if((A>0&&w.left<=v)||(A<0&&w.right>=v)){x=D;
continue;
}}break;
}var B=this.__moveDirectionY;
var z,y;

while(B!==0){z=B>0?this._getRelatedSelectable(x,bL):this._getRelatedSelectable(x,ch);
if(z!==null){y=this._getSelectableLocationY(z);
if((B>0&&y.top<=u)||(B<0&&y.bottom>=u)){x=z;
continue;
}}break;
}var F=this.getMode();

if(F===bN){this._selectItemRange(E,x);
}else if(F===bO){if(this.isItemSelected(E)){this._selectItemRange(E,x,true);
}else{this._deselectItemRange(E,x);
}this._setAnchorItem(x);
}this._fireChange(cg);
},__navigationKeys:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var bl,bk;
var bn=event.getKeyIdentifier();
var bm=this.getMode();
var bh=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bi=event.isShiftPressed();
var bj=false;

if(bn===bW&&bh){if(bm!==bQ&&bm!==bR){this._selectAllItems();
bj=true;
}}else if(bn===ca){if(bm!==bQ&&bm!==bR){this._clearSelection();
bj=true;
}}else if(bn===bX){var bg=this.getLeadItem();

if(bg&&!bi){if(bh||bm===bO){this._toggleInSelection(bg);
}else{this._setSelectedItem(bg);
}bj=true;
}}else if(this.__navigationKeys[bn]){bj=true;

if(bm===bQ||bm==bR){bl=this._getSelectedItem();
}else{bl=this.getLeadItem();
}
if(bl!==null){switch(bn){case cl:bk=this._getFirstSelectable();
break;
case cm:bk=this._getLastSelectable();
break;
case cq:bk=this._getRelatedSelectable(bl,ch);
break;
case bI:bk=this._getRelatedSelectable(bl,bL);
break;
case bK:bk=this._getRelatedSelectable(bl,bY);
break;
case ck:bk=this._getRelatedSelectable(bl,cj);
break;
case bM:bk=this._getPage(bl,true);
break;
case co:bk=this._getPage(bl,false);
break;
}}else{switch(bn){case cl:case bI:case ck:case co:bk=this._getFirstSelectable();
break;
case cm:case cq:case bK:case bM:bk=this._getLastSelectable();
break;
}}if(bk!==null){switch(bm){case bQ:case bR:this._setSelectedItem(bk);
break;
case bO:this._setLeadItem(bk);
break;
case bN:if(bi){var bo=this._getAnchorItem();

if(bo===null){this._setAnchorItem(bo=this._getFirstSelectable());
}this._setLeadItem(bk);
this._selectItemRange(bo,bk,bh);
}else{this._setAnchorItem(bk);
this._setLeadItem(bk);

if(!bh){this._setSelectedItem(bk);
}}break;
}this._scrollItemIntoView(bk);
}}
if(bj){event.stop();
this._fireChange(cc);
}},_selectAllItems:function(){var bb=this.getSelectables();

for(var i=0,l=bb.length;i<l;i++){this._addToSelection(bb[i]);
}},_clearSelection:function(){var cF=this.__selection;

for(var cG in cF){this._removeFromSelection(cF[cG]);
}this.__selection={};
},_selectItemRange:function(bp,bq,br){var bu=this._getSelectableRange(bp,bq);
if(!br){var bt=this.__selection;
var bv=this.__rangeToMap(bu);

for(var bs in bt){if(!bv[bs]){this._removeFromSelection(bt[bs]);
}}}for(var i=0,l=bu.length;i<l;i++){this._addToSelection(bu[i]);
}},_deselectItemRange:function(bw,bx){var by=this._getSelectableRange(bw,bx);

for(var i=0,l=by.length;i<l;i++){this._removeFromSelection(by[i]);
}},__rangeToMap:function(c){var f={};
var d;

for(var i=0,l=c.length;i<l;i++){d=c[i];
f[this._selectableToHashCode(d)]=d;
}return f;
},_getSelectedItem:function(){for(var M in this.__selection){return this.__selection[M];
}return null;
},_setSelectedItem:function(cH){if(this._isSelectable(cH)){var cI=this.__selection;
var cJ=this._selectableToHashCode(cH);

if(!cI[cJ]||qx.lang.Object.hasMinLength(cI,2)){this._clearSelection();
this._addToSelection(cH);
}}},_addToSelection:function(cv){var cw=this._selectableToHashCode(cv);

if(!this.__selection[cw]&&this._isSelectable(cv)){this.__selection[cw]=cv;
this._styleSelectable(cv,bP,true);
this.__selectionModified=true;
}},_toggleInSelection:function(cL){var cM=this._selectableToHashCode(cL);

if(!this.__selection[cM]){this.__selection[cM]=cL;
this._styleSelectable(cL,bP,true);
}else{delete this.__selection[cM];
this._styleSelectable(cL,bP,false);
}this.__selectionModified=true;
},_removeFromSelection:function(cT){var cU=this._selectableToHashCode(cT);

if(this.__selection[cU]!=null){delete this.__selection[cU];
this._styleSelectable(cT,bP,false);
this.__selectionModified=true;
}},_replaceMultiSelection:function(cx){var cA=false;
var cD,cC;
var cy={};

for(var i=0,l=cx.length;i<l;i++){cD=cx[i];

if(this._isSelectable(cD)){cC=this._selectableToHashCode(cD);
cy[cC]=cD;
}}var cz=cD;
var cB=this.__selection;

for(var cC in cB){if(cy[cC]){delete cy[cC];
}else{cD=cB[cC];
delete cB[cC];
this._styleSelectable(cD,bP,false);
cA=true;
}}for(var cC in cy){cD=cB[cC]=cy[cC];
this._styleSelectable(cD,bP,true);
cA=true;
}if(!cA){return false;
}this._scrollItemIntoView(cz);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__selectionModified=true;
this._fireChange();
},_fireChange:function(cE){if(this.__selectionModified){this.__selectionContext=cE||null;
this.fireDataEvent(bS,this.getSelection());
delete this.__selectionModified;
}}},destruct:function(){this._disposeObjects(cd);
this.__selection=this.__mouseDownOnSelected=this.__anchorItem=null;
this.__leadItem=null;
}});
})();
(function(){var N="vertical",M="under",L="above",K="qx.ui.core.selection.Widget",J="left",I="right";
qx.Class.define(K,{extend:qx.ui.core.selection.Abstract,construct:function(f){arguments.callee.base.call(this);
this.__widget=f;
},members:{__widget:null,_isSelectable:function(e){return e.isEnabled()&&e.isVisible()&&e.getLayoutParent()===this.__widget;
},_selectableToHashCode:function(h){return h.$$hash;
},_styleSelectable:function(F,G,H){H?F.addState(G):F.removeState(G);
},_capture:function(){this.__widget.capture();
},_releaseCapture:function(){this.__widget.releaseCapture();
},_getWidget:function(){return this.__widget;
},_getLocation:function(){var d=this.__widget.getContentElement().getDomElement();
return d?qx.bom.element.Location.get(d):null;
},_getDimension:function(){return this.__widget.getInnerSize();
},_getSelectableLocationX:function(D){var E=D.getBounds();

if(E){return {left:E.left,right:E.left+E.width};
}},_getSelectableLocationY:function(j){var k=j.getBounds();

if(k){return {top:k.top,bottom:k.top+k.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(B,C){},_scrollItemIntoView:function(g){this.__widget.scrollChildIntoView(g);
},getSelectables:function(){var z=this.__widget.getChildren();
var A=[];
var y;

for(var i=0,l=z.length;i<l;i++){y=z[i];

if(y.isEnabled()&&y.isVisible()){A.push(y);
}}return A;
},_getSelectableRange:function(m,n){if(m===n){return [m];
}var r=this.__widget.getChildren();
var o=[];
var q=false;
var p;

for(var i=0,l=r.length;i<l;i++){p=r[i];

if(p===m||p===n){if(q){o.push(p);
break;
}else{q=true;
}}
if(q&&p.isEnabled()&&p.isVisible()){o.push(p);
}}return o;
},_getFirstSelectable:function(){var O=this.__widget.getChildren();

for(var i=0,l=O.length;i<l;i++){if(O[i].isEnabled()&&O[i].isVisible()){return O[i];
}}return null;
},_getLastSelectable:function(){var c=this.__widget.getChildren();

for(var i=c.length-1;i>0;i--){if(c[i].isEnabled()&&c[i].isVisible()){return c[i];
}}return null;
},_getRelatedSelectable:function(s,t){var w=this.__widget.getOrientation()===N;
var v=this.__widget.getChildren();
var u=v.indexOf(s);
var x;

if((w&&t===L)||(!w&&t===J)){for(var i=u-1;i>=0;i--){x=v[i];

if(x.isEnabled()&&x.isVisible()){return x;
}}}else if((w&&t===M)||(!w&&t===I)){for(var i=u+1;i<v.length;i++){x=v[i];

if(x.isEnabled()&&x.isVisible()){return x;
}}}return null;
},_getPage:function(a,b){if(b){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__widget=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(c){return (c.isEnabled()&&c.isVisible()&&c.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var b=this._getWidget();
return {left:b.getScrollX(),top:b.getScrollY()};
},_scrollBy:function(q,r){var s=this._getWidget();
s.scrollByX(q);
s.scrollByY(r);
},_getPage:function(d,e){var j=this.getSelectables();
var length=j.length;
var m=j.indexOf(d);
if(m===-1){throw new Error("Invalid lead item: "+d);
}var f=this._getWidget();
var o=f.getScrollY();
var innerHeight=f.getInnerSize().height;
var top,h,n;

if(e){var l=o;
var i=m;
while(1){for(;i>=0;i--){top=f.getItemTop(j[i]);
if(top<l){n=i+1;
break;
}}if(n==null){var p=this._getFirstSelectable();
return p==d?null:p;
}if(n>=m){l-=innerHeight+o-f.getItemBottom(d);
n=null;
continue;
}return j[n];
}}else{var k=innerHeight+o;
var i=m;
while(1){for(;i<length;i++){h=f.getItemBottom(j[i]);
if(h>k){n=i-1;
break;
}}if(n==null){var g=this._getLastSelectable();
return g==d?null:g;
}if(n<=m){k+=f.getItemTop(d)-o;
n=null;
continue;
}return j[n];
}}}}});
})();
(function(){var m="horizontal",k="qx.event.type.Data",j="vertical",h="",g="qx.ui.form.List",f="__content",d="Enter",c="one",b="addChildWidget",a="_applySpacing",y="Boolean",x="Integer",w="action",v="keyinput",u="addItem",t="removeChildWidget",s="_applyOrientation",r="single",q="keypress",p="list",n="pane",o="removeItem";
qx.Class.define(g,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(Q){arguments.callee.base.call(this);
this.__content=new qx.ui.container.Composite();
this.__content.addListener(b,this._onAddChild,this);
this.__content.addListener(t,this._onRemoveChild,this);
this.getChildControl(n).add(this.__content);
if(Q){this.setOrientation(m);
}else{this.initOrientation();
}this.addListener(q,this._onKeyPress);
this.addListener(v,this._onKeyInput);
this.__pressedString=h;
},events:{addItem:k,removeItem:k},properties:{appearance:{refine:true,init:p},focusable:{refine:true,init:true},orientation:{check:[m,j],init:j,apply:s},spacing:{check:x,init:0,apply:a,themeable:true},enableInlineFind:{check:y,init:true}},members:{__pressedString:null,__lastKeyPress:null,__content:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__content;
},_onAddChild:function(e){this.fireDataEvent(u,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(o,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(F,G){var H=F===m;
var I=H?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__content;
content.setLayout(I);
content.setAllowGrowX(!H);
content.setAllowGrowY(H);
this._applySpacing(this.getSpacing());
},_applySpacing:function(D,E){this.__content.getLayout().setSpacing(D);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==d&&!e.isAltPressed()){var z=this.getSelection();

for(var i=0;i<z.length;i++){z[i].fireEvent(w);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var J=this.getSelectionMode();

if(!(J===r||J===c)){return;
}if(((new Date).valueOf()-this.__lastKeyPress)>1000){this.__pressedString=h;
}this.__pressedString+=e.getChar();
var K=this.findItemByLabelFuzzy(this.__pressedString);
if(K){this.setSelection([K]);
}this.__lastKeyPress=(new Date).valueOf();
},findItemByLabelFuzzy:function(A){A=A.toLowerCase();
var B=this.getChildren();
for(var i=0,l=B.length;i<l;i++){var C=B[i].getLabel();
if(C&&C.toLowerCase().indexOf(A)==0){return B[i];
}}return null;
},findItem:function(L,M){if(M!==false){L=L.toLowerCase();
}var N=this.getChildren();
var P;
for(var i=0,l=N.length;i<l;i++){P=N[i];
var O=P.getLabel();

if(O!=null){if(O.translate){O=O.translate();
}
if(M!==false){O=O.toLowerCase();
}
if(O.toString()==L.toString()){return P;
}}}return null;
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(m,n,name){this.fireDataEvent(c,{value:m,name:name,old:n});
this._registerEventChaining(m,n,name);
},_registerEventChaining:function(i,j,name){if((i instanceof qx.core.Object)&&qx.Class.hasMixin(i.constructor,qx.data.marshal.MEventBubbling)){var k=qx.lang.Function.bind(this.__changePropertyListener,this,name);
var l=i.addListener(c,k,this);
i.setUserData(d,l);
}if(j!=null&&j.getUserData&&j.getUserData(d)!=null){j.removeListenerById(j.getUserData(d));
}},__changePropertyListener:function(name,e){var v=e.getData();
var r=v.value;
var p=v.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(v.name.indexOf){var u=v.name.indexOf(f)!=-1?v.name.indexOf(f):v.name.length;
var s=v.name.indexOf(h)!=-1?v.name.indexOf(h):v.name.length;

if(u<s){var o=v.name.substring(0,u);
var t=v.name.substring(u+1,v.name.length);

if(t[0]!=h){t=f+t;
}var q=name+h+o+g+t;
}else if(s<u){var o=v.name.substring(0,s);
var t=v.name.substring(s,v.name.length);
var q=name+h+o+g+t;
}else{var q=name+h+v.name+g;
}}else{var q=name+h+v.name+g;
}}else{var q=name+f+v.name;
}this.fireDataEvent(c,{value:r,name:q,old:p});
}}});
})();
(function(){var N="change",M="add",L="remove",K="order",J="",I="qx.data.Array",H="?",G="changeBubble",F="qx.event.type.Event",E="number",C="changeLength",D="qx.event.type.Data";
qx.Class.define(I,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(Y){arguments.callee.base.call(this);
if(Y==undefined){this.__array=[];
}else if(arguments.length>1){this.__array=[];

for(var i=0;i<arguments.length;i++){this.__array.push(arguments[i]);
}}else if(typeof Y==E){this.__array=new Array(Y);
}else if(Y instanceof Array){this.__array=qx.lang.Array.clone(Y);
}else{this.__array=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__array.length;i++){this._applyEventPropagation(this.__array[i],null,i);
}this.__updateLength();
},events:{"change":D,"changeLength":F},members:{__array:null,concat:function(R){if(R){var S=this.__array.concat(R);
}else{var S=this.__array.concat();
}return new qx.data.Array(S);
},join:function(d){return this.__array.join(d);
},pop:function(){var W=this.__array.pop();
this.__updateLength();
this._applyEventPropagation(null,W,this.length-1);
this.fireDataEvent(N,{start:this.length-1,end:this.length-1,type:L,items:[W]},null);
return W;
},push:function(Q){for(var i=0;i<arguments.length;i++){this.__array.push(arguments[i]);
this.__updateLength();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(N,{start:this.length-1,end:this.length-1,type:M,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__array.reverse();
this.fireDataEvent(N,{start:0,end:this.length-1,type:K,items:null},null);
},shift:function(){var c=this.__array.shift();
this.__updateLength();
this._applyEventPropagation(null,c);
this.fireDataEvent(N,{start:0,end:this.length-1,type:L,items:[c]},null);
return c;
},slice:function(a,b){return new qx.data.Array(this.__array.slice(a,b));
},splice:function(q,r,s){var y=this.__array.length;
var v=this.__array.splice.apply(this.__array,arguments);
if(this.__array.length!=y){this.__updateLength();
}var w=r>0;
var t=arguments.length>2;
var u=null;

if(w||t){if(this.__array.length>y){var x=M;
}else if(this.__array.length<y){var x=L;
u=v;
}else{var x=K;
}this.fireDataEvent(N,{start:q,end:this.length-1,type:x,items:u},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,q+i);
}this.fireDataEvent(G,{value:this,name:H,old:v});
for(var i=0;i<v.length;i++){this._applyEventPropagation(null,v[i],i);
}return (new qx.data.Array(v));
},sort:function(h){this.__array.sort.apply(this.__array,arguments);
this.fireDataEvent(N,{start:0,end:this.length-1,type:K,items:null},null);
},unshift:function(m){for(var i=arguments.length-1;i>=0;i--){this.__array.unshift(arguments[i]);
this.__updateLength();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(N,{start:0,end:this.length-1,type:M,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__array;
},getItem:function(O){return this.__array[O];
},setItem:function(ba,bb){var bc=this.__array[ba];
this.__array[ba]=bb;
this._applyEventPropagation(bb,bc,ba);
if(this.length!=this.__array.length){this.__updateLength();
}this.fireDataEvent(N,{start:ba,end:ba,type:M,items:[bb]},null);
},getLength:function(){return this.length;
},indexOf:function(n){return this.__array.indexOf(n);
},toString:function(){if(this.__array!=null){return this.__array.toString();
}return J;
},contains:function(z){return this.__array.indexOf(z)!==-1;
},copy:function(){return this.concat();
},insertAt:function(k,l){this.splice(k,0,l);
},insertBefore:function(e,f){var g=this.indexOf(e);

if(g==-1){this.push(f);
}else{this.splice(g,0,f);
}},insertAfter:function(bd,be){var bf=this.indexOf(bd);

if(bf==-1||bf==(this.length-1)){this.push(be);
}else{this.splice(bf+1,0,be);
}},removeAt:function(P){return this.splice(P,1)[0];
},removeAll:function(){for(var i=0;i<this.__array.length;i++){this._applyEventPropagation(null,this.__array[i],i);
}var bh=this.getLength();
var bg=this.__array.concat();
this.__array.length=0;
this.__updateLength();
this.fireDataEvent(N,{start:0,end:bh-1,type:L,items:bg},null);
},append:function(V){{};
for(var i=0;i<V.length;i++){this._applyEventPropagation(V[i],null,this.__array.length+i);
}Array.prototype.push.apply(this.__array,V);
this.__updateLength();
},remove:function(T){var U=this.indexOf(T);

if(U!=-1){this.splice(U,1);
return T;
}},equals:function(B){if(this.length!==B.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==B.getItem(i)){return false;
}}return true;
},sum:function(){var X=0;

for(var i=0;i<this.length;i++){X+=this.getItem(i);
}return X;
},max:function(){var A=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>A){A=this.getItem(i);
}}return A===undefined?null:A;
},min:function(){var j=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<j){j=this.getItem(i);
}}return j===undefined?null:j;
},forEach:function(o,p){for(var i=0;i<this.__array.length;i++){o.call(p,this.__array[i]);
}},__updateLength:function(){this.length=this.__array.length;
this.fireEvent(C,qx.event.type.Event);
}},destruct:function(){this.__array=null;
}});
})();
(function(){var g="Boolean",f="qx.ui.core.SingleSelectionManager",e="__applyAllowEmptySelection",d="__selectionProvider",c="changeSelected",b="__selected",a="qx.event.type.Data";
qx.Class.define(f,{extend:qx.core.Object,construct:function(h){arguments.callee.base.call(this);
{};
this.__selectionProvider=h;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:g,init:true,apply:e}},members:{__selected:null,__selectionProvider:null,getSelected:function(){return this.__selected;
},setSelected:function(l){if(!this.__isChildElement(l)){throw new Error("Could not select "+l+", because it is not a child element!");
}this.__setSelected(l);
},resetSelected:function(){this.__setSelected(null);
},isSelected:function(o){if(!this.__isChildElement(o)){throw new Error("Could not check if "+o+" is selected,"+" because it is not a child element!");
}return this.__selected===o;
},isSelectionEmpty:function(){return this.__selected==null;
},getSelectables:function(){var m=this.__selectionProvider.getItems();
var n=[];

for(var i=0;i<m.length;i++){if(this.__selectionProvider.isItemSelectable(m[i])){n.push(m[i]);
}}return n;
},__applyAllowEmptySelection:function(t,u){if(!t){this.__setSelected(this.__selected);
}},__setSelected:function(p){var s=this.__selected;
var r=p;

if(r!=null&&s===r){return;
}
if(!this.isAllowEmptySelection()&&r==null){var q=this.getSelectables()[0];

if(q){r=q;
}}this.__selected=r;
this.fireDataEvent(c,r,s);
},__isChildElement:function(j){var k=this.__selectionProvider.getItems();

for(var i=0;i<k.length;i++){if(k[i]===j){return true;
}}return false;
}},destruct:function(){if(this.__selectionProvider.toHashCode){this._disposeObjects(d);
}else{this.__selectionProvider=null;
}this._disposeObjects(b);
}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var c="listitem",b="qx.ui.form.ListItem",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(d,e,f){arguments.callee.base.call(this,d,e);

if(f!=null){this.setModel(f);
}},events:{"action":a},properties:{appearance:{refine:true,init:c}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true}}});
})();


qx.$$loader.init();

