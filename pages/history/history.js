const app = getApp()
Page({
  data: {
    history: [],
  },

  onShow: function () {
    this.setData({
      history: wx.getStorageSync('history')
    })
  },
  onTapItem: function (e) {
    wx.reLaunch({
      url: `/pages/idnex/index?query=${e.currentTarget.dataset.query}`
    })
  },

  clear: function () {
    if (history && history.length !== 0) {
      wx.clearStorage()
    }
  },


})