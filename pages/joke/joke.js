// pages/joke/joke.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jokes: [],
    isEmpty: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      jokes: (wx.getStorageSync('jokes') || [])
    })

    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://www.apiopen.top/satinGodApi?type=1&page=1',
      success: res => {
        this.setData({
          jokes: res.data.data,
          isEmpty: this.data.jokes.length
        })
        console.log(this.data.jokes)
      },
      complete: res => {
        wx.hideLoading()
      }
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})