// pages/infomation/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bi:{
      value: '',
      type:String
    },
    avatar:{
      value: '',
      type:String
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  
  onShow:function() {
    // console.log(111111111,this.properties.bi)
  },
  externalClasses:['connent-class', 'head-class', 'image-round', 'image-class']
})
