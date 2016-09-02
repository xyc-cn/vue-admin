/* eslint-disable */
export default{
  renderImg: function (file, imgElement) {
    if (!/image\/\w+/.test(file.type)) {
      alert("文件必须为图片！");
      return false;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      var img = new Image();
      img.onload = function () {
        // 检查图片大小
      };
      img.src = e.target.result;
      imgElement.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
