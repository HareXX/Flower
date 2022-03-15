// pages/my_history/my_history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    date: date,
    show: false,
    minDate: new Date(2022, 0, 1).getTime(),
    maxDate: new Date(2022, 12, 31).getTime(),
    total_income: '114514',
    open_ID: wx.getStorageSync('id'),
    fundsBenefit: [],
    records: [],
    sale: '买入',

    // recordFundName: [1, 2],
    // recordStatus: [0, 0],
    // recordCategory: ["股票", ],
    // recordAmount: [0, 1],

    // benefitFundName: null,
    // benefitCategory: "股票",
    // benefit: 0,
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: serverUrl + '/asset/history',
      data: {
        identity: that.data.open_ID,
        timestamp: '2022-03-13',
      },
      method: 'POST',
      header: {
        'content-type': 'application/json;charset=utf-8',
      },

      success: function (res) {
        console.log('成功')
        that.setData({
          total_income: res.data[0].benefitsDaySum.toFixed(2),
          fundsBenefit: res.data[0].investedThingsDailyFundBenefits,
          records: res.data[0].investedThingsRecordList,
        })
        // console.log(that.data.records)
        // var len = that.data.records.length
        // that.data.recordFundName = new Array(len)
        // that.data.recordAmount = new Array(len)
        // that.data.recordCategory = new Array(len)
        // that.data.recordStatus = new Array(len)
        // for (var i = 0; i < len; ++i) {
        //   that.data.sale[i] = that.data.records[i].status==0?'买入':'卖出'
        // }
        console.log(that.data)
      },
      fail: function (err) {
        console.log('失败！')
      }
    })
=======

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

>>>>>>> 19cd9c3b52d20ccc31a3d175f7749e19aa15f4b6
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
