
(function() {
  function UpImgSize(){
      var that=this;
      this.maxWidth=800;
      this.maxHeight=800;
      this.resizeStatus=-1;    //压缩状态 -1/0/1 未开始/压缩中/压缩完成
      this.resizeSTime=0;       //压缩开始时间
      this.resizeETime=0;       //压缩结束时间
      this.reader = new FileReader();
      this.reader.onload=function (event){that.readerOnload(event)};
      this.canvas = document.createElement('canvas');  
  };
  UpImgSize.prototype.init=function(fileElement,callback){
      var that=this;
      this.fileElement=fileElement;
      this.callback=callback;
      this.fileElement.addEventListener('change',function(){
        var file=that.fileElement.files[0];
        that.filename=file.name;
        that.reader.readAsDataURL(file);
      },false);
  };
  UpImgSize.prototype.readerOnload=function(event){
    var that=this;
    this.resizeStatus=0;
    this.resizeTime=new Date().getTime();
    this.img = document.createElement("img");
    this.img.src = event.target.result;
    this.img.onload=function(e){
        that.naturalWidth=e.path[0].naturalWidth;
        that.naturalHeight=e.path[0].naturalHeight;
        that.handle();
        that.reSize();
        that.reSizeComplete();
    }
  }
  UpImgSize.prototype.handle=function(){
    var pw=this.maxWidth-this.naturalWidth;
    var ph=this.maxHeight-this.naturalHeight;
    if(pw>0 && ph>0) {
      this.handleWidth=this.naturalWidth;
      this.handleHeight=this.naturalHeight;
      return;
    }
    if(pw<ph){//宽图
      var lv=this.naturalWidth/this.maxWidth;
      this.handleWidth=this.maxWidth;
      this.handleHeight=this.naturalHeight/lv;
    }else{//长图
      var lv=this.naturalHeight/this.maxHeight;
      this.handleHeight=this.maxHeight;
      this.handleWidth=this.naturalWidth/lv;
    }
  }
  UpImgSize.prototype.reSize=function(){
    this.canvas.width=this.handleWidth;
    this.canvas.height=this.handleHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.drawImage(this.img,0, 0, this.naturalWidth,this.naturalHeight,0,0,this.handleWidth,this.handleHeight);
  }
  UpImgSize.prototype.reSizeComplete=function(){
    var that=this;
    var result=this.canvas.toDataURL();
    var file=this.dataURLtoFile(result,this.filename);
    if(this.callback)
      this.callback({canvas:this.canvas,file:file});
  }
  UpImgSize.prototype.dataURLtoFile=function(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type:mime});
  }
  /**
   * Export class to global
   */
  if (typeof define === 'function' && define.amd) {
    define([], function() { return UpImgSize; }); // for AMD loader
  } else if (typeof exports === 'object') {
    module.exports = UpImgSize; // for CommonJS
  } else {
    this.UpImgSize = UpImgSize;
  }
})();

//Example 
var uis=new module.exports;
window.onload=function(){
  var fileElement=document.getElementById('file');
  uis.init(fileElement,function(res){
    document.body.appendChild(res.canvas);
  });
};