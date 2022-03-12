var util = require('../../utils/util');
var date = util.formatDate(new Date());
const app = getApp()
var serverUrl = app.globalData.serverUrl
Page({
  data: {
    date: date,
    show: false,
    minDate: new Date(2022, 0, 1).getTime(),
    maxDate: new Date(2022, 12, 31).getTime(),
    total_income: '114514',
    open_ID: wx.getStorageSync('id'),
    fundsBenefit: [],
    records: [],

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
      header: {
        'Content-Type': 'text/plain;charset:utf-8;'
      },
      data: {
        identity: that.data.open_ID
      },
      success: function (res) {
        console.log('成功')
        that.setData({
          total_income: res.data[1].benefitsDaySum,
          fundsBenefit: res.data[1].investedThingsDailyFundBenefits,
          records: res.data[1].investedThingsRecordList,
        })
        // console.log(that.data.records)
        // var len = that.data.records.length
        // that.data.recordFundName = new Array(len)
        // that.data.recordAmount = new Array(len)
        // that.data.recordCategory = new Array(len)
        // that.data.recordStatus = new Array(len)
        // for (var i = 0; i < len; ++i) {
        //   that.data.recordFundName[i] = that.data.records[i].fundName
        //   that.data.recordAmount[i] = that.data.records[i].amount
        //   that.data.recordCategory[i] = that.data.records[i].category
        //   that.data.recordStatus[i] = that.data.records[i].status
        // }
        console.log(that.data)
      },
      fail: function (err) {
        console.log('失败！')
      }
    })
  },
  onShow: function () {

  },
  onDisplay() {
    this.setData({
      date: date,
      show: true
    });
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },


});