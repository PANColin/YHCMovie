// pages/home/index.js
import QQMapWX  from "../../utils/qqmap-wx-jssdk1.2/qqmap-wx-jssdk"
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
        key: 'XRCBZ-QA2K4-ZDTUF-XNRVV-C54JT-PQFYN'
    });
    var _this = this;
    this.getTabBar()
    .setData({
      current:0
    })
    wx.getLocation({
      success(res){
        // console.log(res);
        qqmapsdk.reverseGeocoder({
          location:{
            latitude: res.latitude,
            longitude: res.longitude
          },
          coord_type:1,
          success(res1){
            console.log(res1);
            _this.setData({
              city:res1.result.ad_info.city
            })
          },
        })
      }
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
})