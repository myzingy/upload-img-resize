!function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./dist/",e(e.s=0)}([function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function UpImgSize(){var t=this;this.maxWidth=2e3,this.maxHeight=2e3,this.quality=.75,this.resizeStatus=-1,this.resizeSTime=0,this.resizeETime=0,this.reader=new FileReader,this.reader.onload=function(e){t.readerOnload(e)},this.canvas=document.createElement("canvas")}UpImgSize.prototype.ebind=function(el,event,callback){window.addEventListener?el.addEventListener(event,callback,!1):window.attachEvent?el.attachEvent("on"+event,callback):eval("el.on"+event+"=callback;")},UpImgSize.prototype.init=function(t,e){var i=this;this.fileElement=t,this.callback=e,this.ebind(this.fileElement,"change",function(){var t=i.fileElement.files[0];t&&(i.filename=t.name,i.reader.readAsDataURL(t))},!1)},UpImgSize.prototype.readerOnload=function(t){var e=this;this.naturalSize=(t.total/1024).toFixed(2),this.resizeStatus=0,this.resizeTime=(new Date).getTime(),this.img=document.createElement("img"),this.img.src=t.target.result,this.ebind(this.img,"load",function(t){e.naturalWidth=t.path[0].naturalWidth,e.naturalHeight=t.path[0].naturalHeight,e.handle(),e.reSize(),e.reSizeComplete()})},UpImgSize.prototype.handle=function(){var t=this.maxWidth-this.naturalWidth,e=this.maxHeight-this.naturalHeight;if(t>0&&e>0)return this.handleWidth=this.naturalWidth,void(this.handleHeight=this.naturalHeight);if(t<e){var i=this.naturalWidth/this.maxWidth;this.handleWidth=this.maxWidth,this.handleHeight=this.naturalHeight/i}else{var i=this.naturalHeight/this.maxHeight;this.handleHeight=this.maxHeight,this.handleWidth=this.naturalWidth/i}},UpImgSize.prototype.reSize=function(){this.canvas.width=this.handleWidth,this.canvas.height=this.handleHeight,this.ctx=this.canvas.getContext("2d"),this.ctx.drawImage(this.img,0,0,this.naturalWidth,this.naturalHeight,0,0,this.handleWidth,this.handleHeight)},UpImgSize.prototype.reSizeComplete=function(){var t=this.canvas.toDataURL("image/jpeg",this.quality),e=this.dataURLtoFile(t,this.filename);this.handleSize=(e.size/1024).toFixed(2),this.callback&&this.callback({canvas:this.canvas,file:e})},UpImgSize.prototype.dataURLtoFile=function(t,e){for(var i=t.split(","),n=i[0].match(/:(.*?);/)[1],a=atob(i[1]),h=a.length,r=new Uint8Array(h);h--;)r[h]=a.charCodeAt(h);return new File([r],e,{type:n})},__WEBPACK_AMD_DEFINE_ARRAY__=[],void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=function(){return UpImgSize}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}(),window.onerror=function(t,e,i){document.getElementById("info").innerHTML=t+"<br>"+e+"<br>"+i};var uis=new module.exports;window.onload=function(){var t=document.getElementById("file");uis.init(t,function(t){document.getElementById("info").innerHTML="<p>原图："+uis.naturalWidth+"x"+uis.naturalHeight+","+uis.naturalSize+"KB</p><p>压缩后："+uis.handleWidth+"x"+uis.handleHeight+","+uis.handleSize+"KB</p>",document.body.appendChild(t.canvas)})}}]);
//# sourceMappingURL=build.js.map