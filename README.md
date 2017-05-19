# up-resize-img

> 上传图片前进行图片等比压缩处理

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## 测试过

> 只在 pc 版 chrome 下测试过

## Example 

```javascript
var uis=new module.exports;
window.onload=function(){
  var fileElement=document.getElementById('file');//文件组件id
  uis.init(fileElement,function(res){
    //压缩后的结果 res {canvas,file};canvas用于展示,file用于上传（请自行添加到formdata）
    document.body.appendChild(res.canvas);
  });
};
```
