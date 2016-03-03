var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptFile: [data.url("stacktrace.min.js"), data.url("stacktrace.js")],
  contentScriptWhen: "end"
});