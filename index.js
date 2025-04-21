// Console-polyfill. MIT license. | https://github.com/paulmillr/console-polyfill | Makes it safe to do console.log() always.
;(function(w, f, prop, method) { // "use strict";
    if (!w.console) {w.console = {}}
    var con = w.console, properties = ['memory'], methods = [
        'assert|clear|count|debug|dir|dirxml|error|exception|group|groupCollapsed|',
        'groupEnd|info|log|markTimeline|profile|profiles|profileEnd|show|table|',
        'time|timeEnd|timeline|timelineEnd|timeStamp|trace|warn|timeLog'
    ].join('').split('|');
    while (prop = properties.pop()) { if (!con[prop]) {con[prop] = {}}}
    while (method = methods.pop()) { if (!con[method]) {con[method] = f}}
})((typeof window === "undefined" ? this : window), function(){});
