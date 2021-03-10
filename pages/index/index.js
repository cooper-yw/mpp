// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '晴川阁木s',
    userInfo: {},
    loading: false,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      //url: '../logs/logs'
      url: '../resource/resource'
    })
  },
  // onLoad() {
  //   if (app.globalData.userInfo) {
  //     console.log("userinfo is empty");
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse) {
  //     console.log("userinfo can't use");
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     // app.userInfoReadyCallback = res => {
  //     //   console.log(res);
  //     //   this.setData({
  //     //     userInfo: res.userInfo,
  //     //     hasUserInfo: true
  //     //   })
  //     // }
  //     wx.login({
  //       success (res) {
  //         console.log(res);
  //         if (res.code) {
  //           //发起网络请求
  //           wx.request({
  //             url: 'https://api.qcgm.club/wechat/login',
  //             data: {
  //               code: res.code
  //             }
  //           })
  //         } else {
  //           console.log('登录失败！' + res.errMsg)
  //         }
  //       }
  //     })
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     console.log(1111)
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })

      
  //   }
  // },
  loginSubmit(e) {
    console.log(e)
    this.setData({loading: true})
    const res = wx.request({
      url: 'https://api.qcgm.club/service/auth/login',
      data: e.detail.value,
      method: 'POST'
    })
    const {code, status} = res || {}
    if(status === 200) {
      this.setData({loading: false})
    } 
  }
})
