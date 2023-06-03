!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("ig-ui",[],n):"object"==typeof exports?exports["ig-ui"]=n():e["ig-ui"]=n()}(this,(()=>(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n);var t=function(){function e(){this.eventHandlers={}}return e.prototype.addEvent=function(e,n){this.eventHandlers[e]=n},e.prototype.removeEvent=function(e){delete this.eventHandlers[e]},e.prototype.startListening=function(){var e,n=this;null===(e=window.chrome.webview)||void 0===e||e.addEventListener("message",(function(e){var t,r,o=e.data,i=null!==(t=null==o?void 0:o.Name)&&void 0!==t?t:"",a=null!==(r=null==o?void 0:o.Data)&&void 0!==r?r:"",u=n.eventHandlers[i],l=!!u;console.info("Received event '".concat(i,"' (handler=").concat(l,") with data:"),a),l&&u(i,a)}))},e}(),r=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,u)}l((r=r.apply(e,n||[])).next())}))},o=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(l){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(e){u=[6,e],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}},i=function(e){try{return document.querySelector(e)}catch(e){}return null},a=function(e,n){return new Promise((function(t){setTimeout((function(){return t(n)}),e)}))},u=function(e,n){_webview.addEvent(e,n)},l=function(e,n){var t;null===(t=window.chrome.webview)||void 0===t||t.postMessage({name:e,data:n})},c=function(e){queryAll(".tab-page").forEach((function(e){return e.classList.remove("active")}));var n=query('.tab-page[tab="'.concat(e,'"]'));null==n||n.classList.add("active"),queryAll('input[type="radio"]').forEach((function(e){return e.checked=!1}));var t=query('input[type="radio"][value="'.concat(e,'"]'));t&&(t.checked=!0)},s=function(){for(var e in _pageSettings.lang)if(Object.prototype.hasOwnProperty.call(_pageSettings.lang,e))for(var n=_pageSettings.lang[e],t=0,r=queryAll('[data-lang="'.concat(e,'"]'));t<r.length;t++){r[t].innerText=n}};const d=function(){function e(){}return e.loadSettings=function(){query("#Lnk_StartupDir").innerText=_pageSettings.startUpDir||"(unknown)",query("#Lnk_ConfigDir").innerText=_pageSettings.configDir||"(unknown)",query("#Lnk_UserConfigFile").innerText=_pageSettings.userConfigFilePath||"(unknown)"},e.addEvents=function(){query("#Lnk_StartupDir").addEventListener("click",(function(){return post("Lnk_StartupDir",_pageSettings.startUpDir)}),!1),query("#Lnk_ConfigDir").addEventListener("click",(function(){return post("Lnk_ConfigDir",_pageSettings.configDir)}),!1),query("#Lnk_UserConfigFile").addEventListener("click",(function(){return post("Lnk_UserConfigFile",_pageSettings.userConfigFilePath)}),!1)},e}();var f=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,u)}l((r=r.apply(e,n||[])).next())}))},g=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(l){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(e){u=[6,e],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}};const v=function(){function e(){}return e.loadSettings=function(){var e=_pageSettings.config.ColorProfile||"";e.includes(".")&&(query('[name="ColorProfile"]').value="Custom",query("#Lnk_CustomColorProfile").innerText=e),this.handleColorProfileChanged(),this.handleUseEmbeddedThumbnailOptionsChanged()},e.addEvents=function(){var e=this;query("#Btn_BrowseColorProfile").addEventListener("click",(function(){return f(e,void 0,void 0,(function(){var e;return g(this,(function(n){switch(n.label){case 0:return[4,postAsync("Btn_BrowseColorProfile")];case 1:return e=n.sent(),query("#Lnk_CustomColorProfile").innerText=e,[2]}}))}))}),!1),query("#Lnk_CustomColorProfile").addEventListener("click",(function(){var e=query("#Lnk_CustomColorProfile").innerText.trim();post("Lnk_CustomColorProfile",e)}),!1),query('[name="ColorProfile"]').addEventListener("change",(function(){return e.handleColorProfileChanged()}),!1),query('[name="UseEmbeddedThumbnailRawFormats"]').addEventListener("input",(function(){return e.handleUseEmbeddedThumbnailOptionsChanged()}),!1),query('[name="UseEmbeddedThumbnailOtherFormats"]').addEventListener("input",(function(){return e.handleUseEmbeddedThumbnailOptionsChanged()}),!1)},e.handleColorProfileChanged=function(){var e="Custom"===query('[name="ColorProfile"]').value;query("#Btn_BrowseColorProfile").hidden=!e,query("#Section_CustomColorProfile").hidden=!e},e.handleUseEmbeddedThumbnailOptionsChanged=function(){var e=query('[name="UseEmbeddedThumbnailRawFormats"]').checked,n=query('[name="UseEmbeddedThumbnailOtherFormats"]').checked,t=e||n;query("#Section_EmbeddedThumbnailSize").hidden=!t},e}();var h=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,u)}l((r=r.apply(e,n||[])).next())}))},p=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(l){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(e){u=[6,e],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}},y=function(e){var n=new Date(1e3*e),t=n.getUTCMinutes().toString(),r=n.getUTCSeconds().toString(),o=n.getUTCMilliseconds().toString();return t.length<2&&(t="0".concat(t)),r.length<2&&(r="0".concat(r)),"".concat(t,":").concat(r,".").concat(o)},m=function(){var e=+query('[name="SlideshowInterval"]').value||5,n=+query('[name="SlideshowIntervalTo"]').value||5,t=y(e),r=y(n),o=query('[name="UseRandomIntervalForSlideshow"]').checked;query("#Lbl_SlideshowInterval").innerText=o?"".concat(t," - ").concat(r):t},b=function(){var e=query('[name="UseRandomIntervalForSlideshow"]').checked;query("#Lbl_SlideshowIntervalFrom").hidden=!e,query("#Section_SlideshowIntervalTo").hidden=!e},w=function(){var e=query("#Cmb_LanguageList").value,n=_pageSettings.langList.find((function(n){return n.FileName===e}));n&&(query("#Section_LanguageContributors").innerText=n.Metadata.Author)},S=function(e){for(var n=query("#Cmb_LanguageList");n.options.length;)n.remove(0);Array.isArray(e)&&e.length>0&&(_pageSettings.langList=e),_pageSettings.langList.forEach((function(e){var t="".concat(e.Metadata.LocalName," (").concat(e.Metadata.EnglishName,")");e.FileName&&0!==e.FileName.length||(t=e.Metadata.EnglishName);var r=new Option(t,e.FileName);n.add(r)})),n.value=_pageSettings.config.Language,w()},_=function(){var e,n,t,r;for(var o in function(){var e=function(e){if(!Object.prototype.hasOwnProperty.call(_pageSettings.enums,e))return"continue";for(var n=_pageSettings.enums[e],t=function(t){n.forEach((function(n){var r=new Option("".concat(n),n);r.setAttribute("data-lang","_.".concat(e,"._").concat(n)),t.add(r)}))},r=0,o=queryAll('select[data-enum="'.concat(e,'"]'));r<o.length;r++)t(o[r])};for(var n in _pageSettings.enums)e(n)}(),S(),_pageSettings.config)if(Object.prototype.hasOwnProperty.call(_pageSettings.config,o)){var i=_pageSettings.config[o];if("string"==typeof i||"number"==typeof i||"boolean"==typeof i){var a=query('[name="'.concat(o,'"]'));if(a){var u=a.tagName.toLowerCase();if("select"===u)a.value=i.toString();else if("input"===u){var l=a.getAttribute("type").toLowerCase(),c=a;if("radio"===l||"checkbox"===l)c.checked=Boolean(i);else if("color"===l){var s=i.toString()||"#00000000";c.value=s.substring(0,s.length-2)}else c.value=i.toString()}}}}d.loadSettings(),v.loadSettings(),query("#Cmb_MouseWheel_Scroll").value=(null===(e=_pageSettings.config.MouseWheelActions)||void 0===e?void 0:e.Scroll)||"DoNothing",query("#Cmb_MouseWheel_CtrlAndScroll").value=(null===(n=_pageSettings.config.MouseWheelActions)||void 0===n?void 0:n.CtrlAndScroll)||"DoNothing",query("#Cmb_MouseWheel_ShiftAndScroll").value=(null===(t=_pageSettings.config.MouseWheelActions)||void 0===t?void 0:t.ShiftAndScroll)||"DoNothing",query("#Cmb_MouseWheel_AltAndScroll").value=(null===(r=_pageSettings.config.MouseWheelActions)||void 0===r?void 0:r.AltAndScroll)||"DoNothing",b(),m(),w()};return window._webview=new t,_webview.startListening(),window.query=i,window.queryAll=function(e){try{return Array.from(document.querySelectorAll(e))}catch(e){}return[]},window.on=u,window.post=l,window.postAsync=function(e,n){return r(void 0,void 0,void 0,(function(){var t,r,i;return o(this,(function(o){switch(o.label){case 0:t=!1,r=null,u(e,(function(n,o){n===e&&(t=!0,r=o,_webview.removeEvent(e))})),null===(i=window.chrome.webview)||void 0===i||i.postMessage({name:e,data:n}),o.label=1;case 1:return t?[3,3]:[4,a(100)];case 2:return o.sent(),[3,1];case 3:return[2,r]}}))}))},window._pageSettings||(window._pageSettings={config:{},lang:{},langList:[],enums:{ImageOrderBy:[],ImageOrderType:[],ColorProfileOption:[],AfterEditAppAction:[],ImageInterpolation:[],MouseWheelAction:[],MouseWheelEvent:[],MouseClickEvent:[],BackdropStyle:[],ToolbarItemModelType:[]},startUpDir:"",configDir:"",userConfigFilePath:""}),_pageSettings.setSidebarActiveMenu=c,_pageSettings.loadLanguage=s,_pageSettings.loadSettings=_,_pageSettings.loadLanguageList=S,function(){for(var e=Array.from(document.querySelectorAll('input[name="nav"]')),n=0;n<e.length;n++){e[n].addEventListener("change",(function(e){var n=e.target.value;c(n)}),!1)}}(),c("image"),_(),s(),i("#BtnOK").addEventListener("click",(function(){return l("BtnOK")}),!1),i("#BtnCancel").addEventListener("click",(function(){return l("BtnCancel")}),!1),i("#BtnApply").addEventListener("click",(function(){return l("BtnApply")}),!1),d.addEvents(),v.addEvents(),query('[name="UseRandomIntervalForSlideshow"]').addEventListener("input",(function(){return b()}),!1),query('[name="SlideshowInterval"]').addEventListener("input",(function(){return m()}),!1),query('[name="SlideshowIntervalTo"]').addEventListener("input",(function(){return m()}),!1),query("#Btn_ResetMouseWheelAction").addEventListener("click",(function(){return query("#Cmb_MouseWheel_Scroll").value="Zoom",query("#Cmb_MouseWheel_CtrlAndScroll").value="PanVertically",query("#Cmb_MouseWheel_ShiftAndScroll").value="PanHorizontally",void(query("#Cmb_MouseWheel_AltAndScroll").value="BrowseImages")}),!1),query("#Cmb_LanguageList").addEventListener("change",(function(){return w()}),!1),query("#Btn_RefreshLanguageList").addEventListener("click",(function(){return h(void 0,void 0,void 0,(function(){var e;return p(this,(function(n){switch(n.label){case 0:return[4,postAsync("Btn_RefreshLanguageList")];case 1:return e=n.sent(),S(e),[2]}}))}))}),!1),query("#Lnk_InstallLanguage").addEventListener("click",(function(){return h(void 0,void 0,void 0,(function(){var e;return p(this,(function(n){switch(n.label){case 0:return[4,postAsync("Lnk_InstallLanguage")];case 1:return e=n.sent(),S(e),[2]}}))}))}),!1),n})()));