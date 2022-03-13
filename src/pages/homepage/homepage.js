// pages/homepage/homepage.js
Page({


	data: {
		hasInvestment : true
	},

	navToAI_Query(e){
		wx.navigateTo({
			url: '../AI_query/AI_query',
		  })
	},
	onLoad: function (options) {

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
		this.getTabBar().init();
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

	navToHistory(e) {
		wx.navigateTo({
			url: '../my_history/my_history',
		})
	},

	navToInvest(e) {
		wx.redirectTo({
			url: '../smart_invest/smart_invest',
		})
	},
})