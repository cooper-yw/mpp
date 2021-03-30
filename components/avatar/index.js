// components/avatar/index.js
import WeCropper from '../../components/cropper/we-cropper.js'

const app = getApp()
const config = app.globalData.config

const device = wx.getSystemInfoSync()
const width = device.windowWidth
const height = device.windowHeight - 50

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    src: '',
    showCropper: false,
    cropperOpt: {
      id: 'cropper',
      targetId: 'targetCropper',
      pixelRatio: device.pixelRatio,
      width,
      height,
      scale: 2.5,
      zoom: 8,
      cut: {
        x: (width - 300) / 2,
        y: (height - 300) / 2,
        width: 300,
        height: 300
      },
      boundStyle: {
        color: '#ddd',
        mask: 'rgba(0,0,0,0.8)',
        lineWidth: 1
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    upload () {
      const that =  this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success (res) {
          const src = res.tempFilePaths[0]
          that.setData({showCropper:true, cropperSrc: src})
          //that.createCropper(src)
          // wx.redirectTo({
          //   url: `/pages/avatarUpload/upload?src=${src}`
          // })
        }
      })
    },
    touchStart (e) {
      this.cropper.touchStart(e)
    },
    touchMove (e) {
      this.cropper.touchMove(e)
    },
    touchEnd (e) {
      this.cropper.touchEnd(e)
    },
    getCropperImage () {
      console.log(1)
      const self = this
      self.cropper.getCropperImage(function (path, err) {
        console.log(path, err)
        if (err) {
          const {errMsg="绘图失败,请重启客户端"} = err || {}
          wx.showModal({
            title: '温馨提示',
            content: errMsg
          })
        } else {
        // self.setData({src:path,showCropper:false})
          // wx.navigateTo({
          //   url: `${'/pages/avatarUpload/upload?url='+path}`,
          // })
        
          // wx.previewImage({
          //   current: '', // 当前显示图片的 http 链接
          //   urls: [path] // 需要预览的图片 http 链接列表
          // })
        }
      })
    },
    uploadTap () {
      const self = this
  
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success (res) {
          const src = res.tempFilePaths[0]
          //  获取裁剪图片资源后，给data添加src属性及其值
          console.log(src)
          self.cropper.pushOrign(src)
        }
      })
    },
    createCropper(cropperSrc) {
      
      const { cropperOpt } = this.data
  
      cropperOpt.boundStyle.color = '#04b00f'
  
      this.setData({ cropperOpt })
  
      if (cropperSrc) {
        cropperOpt.src = cropperSrc
        this.cropper = new WeCropper(cropperOpt)
          .on('ready', (ctx) => {
            console.log(`wecropper is ready for work!`)
          })
          .on('beforeImageLoad', (ctx) => {
            console.log(`before picture loaded, i can do something`)
            console.log(`current canvas context:`, ctx)
            wx.showToast({
              title: '上传中',
              icon: 'loading',
              duration: 20000
            })
          })
          .on('imageLoad', (ctx) => {
            console.log(`picture loaded`)
            console.log(`current canvas context:`, ctx)
            wx.hideToast()
          })
          .on('beforeDraw', (ctx, instance) => {
            console.log(`before canvas draw,i can do something`)
            console.log(`current canvas context:`, ctx)
          })
      }
    }
    // onLoad (option) {
    //   console.log(option)
    //   let { avatar } = option
    //   if (avatar) {
    //     this.setData({
    //       src: avatar
    //     })
    //   }
    // }
  }
})
