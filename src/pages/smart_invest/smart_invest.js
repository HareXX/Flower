// pages/smart_invest/smart_invest.js
Page({

  data: {

  },

  onLoad: function (options) {

  },

  onShow: function () {

  },

  toquestionnare: function (options) {
    wx.redirectTo({
          url: '../questionnare/questionnare'
    })  
  },

  torecommendation: function (options) {
    wx.redirectTo({
          url: '../recommendation/recommendation'
    })  
  }

})