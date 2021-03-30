// pages/components/tabbar/index.js
const routes = require('../../utils/routes')
Component({
  /**
   * 组件的属性列表
   */
  properties: {},
  /**
   * 组件的初始数据
   */
  data: {
      index: wx.getStorageSync('showIndex'),
      data: routes.items()
  },

  lifetimes: {
      attached(){
        console.log(111)
        this.setData({index:wx.getStorageSync('showIndex')})
      }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tabChange(e) {
      // this.triggerEvent('tabChange',e.detail)
      // sconst path = '/pages/home/index';
      // this.setData({index:e.detail.index})
      const index = e.detail.index;
      this.setData({index:index})
      wx.setStorageSync('showIndex', index)
      // 根据tab  获取调整转页面
      const {detail = {}} = e || {}
      const {item = {}} = detail ||  {}
      const {path} = item ||  {}
      wx.switchTab({
        url: path,
      })
    },
  }
})
