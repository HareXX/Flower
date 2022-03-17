// pages/recommendation/recommendation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var fundA1=new Array("21铁投01 6.66%", "20际华01 6.65%", "19长城 6.59%", "19广发 6.59%", "21国君 6.59%")
    var fundA2=new Array("21附息 52.55%", "21附息 26.45%", "21进出 7.84%", "20附息 5.24%", "19国开 5.23%")
    var fundA3=new Array("21南京银行CD109 3.09%", "21宁波银行CD358 1.84% ", "21民生银行CD370 1.22%", "21渤海银行CD491 1.22%", "21徽商银行CD159 1.10%")
    var fundA4=new Array("19南建02 1.81%", "19武管廊 1.63%", "17苏新02 1.51%", "20明城02 1.51%", "19椒江01 1.37%")
    var fundA5=new Array("21附息国债11 26.85%", "21国债11 24.02%", "19附息国债16 21.89%", "19国债16 13.07%", "21国开03 5.14%")
    var fundB1=new Array("美锦能源 9.72%", "中国神华 9.60%", "永泰能源 9.31%", "陕西煤业 8.76%", "兖矿能源 5.57%", "山西焦煤 4.49%", "华阳股份 3.78%", "潞安环能 3.59%", "中煤能源 3.05%", "电投能源 3.03%")
    var fundB2=new Array("货币基金 100.00%")
    var fundB3=new Array("杉杉股份 4.68%", "天合光能 4.56%", "天齐锂业 4.51%", "诺德股份 4.03%", "鹏辉能源 3.65%", "宁德时代 3.35%", "捷佳伟创 3.18%", "德业股份 3.00%", "晶澳科技 2.93%", "阳光电源 2.60%")
    var fundB4=new Array("宁德时代 22.20%", "东方财富 9.62%", "迈瑞医疗 5.26%", "亿纬锂能 4.81%", "阳光电源 4.61%", "汇川技术 3.86%", "爱尔眼科 3.17%", "智飞生物 2.96%", "沃森生物 2.93%", "先导智能 2.42%")
    var fundB5=new Array("贵州茅台 15.33%", "招商银行 7.40%", "中国平安 6.69%", "隆基股份 4.59%", "兴业银行 3.39%", "长江电力 3.16%", "伊利股份 3.11%", "药明康德 3.00%", "药明康德 2.77%", "中信证券 2.75%")
    var list=wx.getStorageSync('list')
    console.log(list)
    var size=wx.getStorageSync('size')
    console.log(size)
    for(var i=0;i<size;i++)
    {
      console.log(i)
        this.setData({
        ['array[0]']: '21铁投01 6.66%',
        ['array[1]']: '20际华01 6.65%',
        ['array[2]']: '19长城 6.59%',
        ['array[3]']: '19广发 6.59%',
        ['array[4]']: '21国君 6.59%'
      })
    }
  
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

  },

  torule: function (options) {
    wx.redirectTo({
          url: '../trading_rule/trading_rule'
    })  
  }
})