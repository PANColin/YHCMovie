// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    h:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(wx.getSystemInfoSync().statusBarHeight)
    var menu = wx.getMenuButtonBoundingClientRect();
    console.log(wx.getMenuButtonBoundingClientRect())
    this.setData({
      // h:wx.getSystemInfoSync().statusBarHeight
      h:menu.height + menu.top
    })
    console.log(this.getTabBar());
    this.getTabBar()
    .setData({
      current:4
    })
    // this.setData({
    //   num:2
    // })
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
    var token = wx.getStorageSync('token');
    if(!token){
      wx.showModal({
        title:'登录提示',
        content:"暂未登录,是否跳转到登录界面",
        success(res){
          console.log(res);
          if(res.confirm){
            // wx.navigateTo({
            //   url: 'url',
            // })
          }
        }
      })
    }
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
})