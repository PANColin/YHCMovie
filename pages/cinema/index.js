// pages/cinema/index.js
import QQMapWX  from "../../utils/qqmap-wx-jssdk1.2 (2)/qqmap-wx-jssdk"
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'OMABZ-OXN6I-VEHG3-53LGD-I6HL3-QZFBP'
  });
    this.getTabBar()
    .setData({
      current:3
    })
    wx.getLocation({
      success(res){
        console.log(res);
        qqmapsdk.search({
          keyword:"影院",
          location:`${res.latitude},${res.longitude}`,
          success(res1){
            console.log(res1)
          }
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