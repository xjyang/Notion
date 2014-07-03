!function(){"use strict";var e=angular.module("pasvaz.bindonce",[]);e.directive("bindonce",function(){var e=function(e){if(e&&0!==e.length){var t=angular.lowercase(""+e);e=!("f"===t||"0"===t||"false"===t||"no"===t||"n"===t||"[]"===t)}else e=!1;return e},t=parseInt((/msie (\d+)/.exec(angular.lowercase(navigator.userAgent))||[])[1],10);isNaN(t)&&(t=parseInt((/trident\/.*; rv:(\d+)/.exec(angular.lowercase(navigator.userAgent))||[])[1],10));var r={restrict:"AM",controller:["$scope","$element","$attrs","$interpolate",function(r,a,n,i){var c=function(t,r,a){var n="show"===r?"":"none",i="hide"===r?"":"none";t.css("display",e(a)?n:i)},o=function(e,t){if(angular.isObject(t)&&!angular.isArray(t)){var r=[];angular.forEach(t,function(e,t){e&&r.push(t)}),t=r}t&&e.addClass(angular.isArray(t)?t.join(" "):t)},s={watcherRemover:void 0,binders:[],group:n.boName,element:a,ran:!1,addBinder:function(e){this.binders.push(e),this.ran&&this.runBinders()},setupWatcher:function(e){var t=this;this.watcherRemover=r.$watch(e,function(e){void 0!==e&&(t.removeWatcher(),t.runBinders())},!0)},removeWatcher:function(){void 0!==this.watcherRemover&&(this.watcherRemover(),this.watcherRemover=void 0)},runBinders:function(){for(;this.binders.length>0;){var r=this.binders.shift();if(!this.group||this.group==r.group){var a=r.scope.$eval(r.interpolate?i(r.value):r.value);switch(r.attr){case"boIf":e(a)&&r.transclude(r.scope.$new(),function(e){var t=r.element.parent(),a=r.element&&r.element[r.element.length-1],n=t&&t[0]||a&&a.parentNode,i=a&&a.nextSibling||null;angular.forEach(e,function(e){n.insertBefore(e,i)})});break;case"boSwitch":var n,s=r.controller[0];(n=s.cases["!"+a]||s.cases["?"])&&(r.scope.$eval(r.attrs.change),angular.forEach(n,function(e){e.transclude(r.scope.$new(),function(t){var r=e.element.parent(),a=e.element&&e.element[e.element.length-1],n=r&&r[0]||a&&a.parentNode,i=a&&a.nextSibling||null;angular.forEach(t,function(e){n.insertBefore(e,i)})})}));break;case"boSwitchWhen":var l=r.controller[0];l.cases["!"+r.attrs.boSwitchWhen]=l.cases["!"+r.attrs.boSwitchWhen]||[],l.cases["!"+r.attrs.boSwitchWhen].push({transclude:r.transclude,element:r.element});break;case"boSwitchDefault":var l=r.controller[0];l.cases["?"]=l.cases["?"]||[],l.cases["?"].push({transclude:r.transclude,element:r.element});break;case"hide":case"show":c(r.element,r.attr,a);break;case"class":o(r.element,a);break;case"text":r.element.text(a);break;case"html":r.element.html(a);break;case"style":r.element.css(a);break;case"src":r.element.attr(r.attr,a),t&&r.element.prop("src",a);break;case"attr":angular.forEach(r.attrs,function(e,t){var a,n;t.match(/^boAttr./)&&r.attrs[t]&&(a=t.replace(/^boAttr/,"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=r.scope.$eval(r.attrs[t]),r.element.attr(a,n))});break;case"href":case"alt":case"title":case"id":case"value":r.element.attr(r.attr,a)}}}this.ran=!0}};return s}],link:function(e,t,r,a){var n=r.bindonce?e.$eval(r.bindonce):!0;void 0!==n?n.then&&"function"==typeof n.then?n.then(function(){a.runBinders()}):a.runBinders():(a.setupWatcher(r.bindonce),t.bind("$destroy",a.removeWatcher))}};return r}),angular.forEach([{directiveName:"boShow",attribute:"show"},{directiveName:"boHide",attribute:"hide"},{directiveName:"boClass",attribute:"class"},{directiveName:"boText",attribute:"text"},{directiveName:"boBind",attribute:"text"},{directiveName:"boHtml",attribute:"html"},{directiveName:"boSrcI",attribute:"src",interpolate:!0},{directiveName:"boSrc",attribute:"src"},{directiveName:"boHrefI",attribute:"href",interpolate:!0},{directiveName:"boHref",attribute:"href"},{directiveName:"boAlt",attribute:"alt"},{directiveName:"boTitle",attribute:"title"},{directiveName:"boId",attribute:"id"},{directiveName:"boStyle",attribute:"style"},{directiveName:"boValue",attribute:"value"},{directiveName:"boAttr",attribute:"attr"},{directiveName:"boIf",transclude:"element",terminal:!0,priority:1e3},{directiveName:"boSwitch",require:"boSwitch",controller:function(){this.cases={}}},{directiveName:"boSwitchWhen",transclude:"element",priority:800,require:"^boSwitch"},{directiveName:"boSwitchDefault",transclude:"element",priority:800,require:"^boSwitch"}],function(t){var r=200;return e.directive(t.directiveName,function(){var e={priority:t.priority||r,transclude:t.transclude||!1,terminal:t.terminal||!1,require:["^bindonce"].concat(t.require||[]),controller:t.controller,compile:function(e,r,a){return function(e,r,n,i){var c=i[0],o=n.boParent;if(o&&c.group!==o){var s=c.element.parent();c=void 0;for(var l;9!==s[0].nodeType&&s.length;){if((l=s.data("$bindonceController"))&&l.group===o){c=l;break}s=s.parent()}if(!c)throw new Error("No bindonce controller: "+o)}c.addBinder({element:r,attr:t.attribute||t.directiveName,attrs:n,value:n[t.directiveName],interpolate:t.interpolate,group:o,transclude:a,controller:i.slice(1),scope:e})}}};return e})})}();