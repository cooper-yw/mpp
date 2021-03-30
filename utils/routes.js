const menus =
[
  {
  "text": "消息",
  "path": "/pages/home/index",
  "iconPath": "/pages/home/images/icon-png/message_no.png",
  "selectedIconPath": "/pages/home/images/icon-png/message.png",
  dot: false
},
{
  "text": "订单",
  "path": "/pages/order/index",
  "iconPath": "/pages/home/images/icon-png/order_no.png",
  "selectedIconPath": "/pages/home/images/icon-png/order.png",
  dot: false
},
{
  "text": "个人中心",
  "path": "/pages/infomation/index",
  "iconPath": "/pages/home/images/icon-png/info_no.png",
  "selectedIconPath": "/pages/home/images/icon-png/info.png",
  dot: false
},
{
  "text": "设置",
  "path": "/pages/setting/index",
  "iconPath": "/pages/home/images/icon-png/setting_no.png",
  "selectedIconPath": "/pages/home/images/icon-png/setting.png",
  dot: false
}]
const items = () =>
{
  // 联动 远程本地
  const routes = wx.getStorageSync('routes') || undefined;
  return routes?routes:getItem();
}

const getItem = () => {
  // TODO: 远程获取,暂时先本地配置, 没有获取目录的话 ,就加载本地预设数据
  console.log(menus)
  const remoteMenu = menus;
  wx.setStorageSync('routes', remoteMenu)
  return  menus;
}

module.exports = {
  items
}