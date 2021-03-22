const auto = require("../../utils/auto");

// pages/home/index.js
Page(auto.checkLogin({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    userinfo: wx.getStorageSync('userInfo') || null,
    images: './images/mpp1.png',
    avatar: './images/mpp2.png',
    list: [{
      "text": "消息",
      "iconPath": "/pages/home/images/icon-png/message_no.png",
      "selectedIconPath": "/pages/home/images/icon-png/message.png",
      dot: false
    },
    {
      "text": "订单",
      "iconPath": "/pages/home/images/icon-png/order_no.png",
      "selectedIconPath": "/pages/home/images/icon-png/order.png",
      dot: false
    },
    {
      "text": "个人中心",
      "iconPath": "/pages/home/images/icon-png/info_no.png",
      "selectedIconPath": "/pages/home/images/icon-png/info.png",
      dot: false
    },
    {
      "text": "设置",
      "iconPath": "/pages/home/images/icon-png/setting_no.png",
      "selectedIconPath": "/pages/home/images/icon-png/setting.png",
      dot: false
    }]
  },
  tabChange(e) {
    const {detail = {}} = e || {}
    const {index} = detail || {}
  
    this.setData({index});
  },
  onLoad:function() {
    this.setData({
      nbTitle: '首席MYG',
      nbLoading: false,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#000000',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      
  },
  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
}))