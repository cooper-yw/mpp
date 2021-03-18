// pages/components/tabbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {            // 属性名
      type: Array,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: "显示列表"
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
      index: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabChange(e) {
      this.triggerEvent('tabChange',e.detail)
    },
  }
})
