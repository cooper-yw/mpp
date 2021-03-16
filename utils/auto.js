function checkLogin(pageObj){
  console.log(pageObj);
  if (pageObj.onShow){
      let _onShow = pageObj.onShow;
      pageObj.onShow = function(){
          console.log('中间件');
          console.log(wx.getStorageSync('userInfo').length);
          if (wx.getStorageSync('userInfo').length == 0){
              wx.redirectTo({
              url: '/pages/index/index',
              })
          }
      }
  }
  return pageObj;
}
module.exports = {
  checkLogin: checkLogin,
};