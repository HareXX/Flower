// pages/health_records/health_records.js
Page({

	data: {
		tarOpen_ID : null
	},

	navToBasicInfo(e)
	{
		wx.navigateTo({
		  url: '../basic_info/basic_info',
		})
	},

	navToDailyCondition(e)
	{
		wx.navigateTo({
		  url: '../daily_condition/daily_condition',
		})
	},

	navToMedicineRecord(e)
	{
		wx.navigateTo({
			url: '../medicine_records/medicine_records',
		})
	},

	navToIllnessRecord(e)
	{
		wx.navigateTo({
		  url: '../illness_records/illness_records',
		})
	},

	onLoad: function (options) {
		var Pages = getCurrentPages();
		var prevPage = Pages[Pages.length - 2];
		console.log(prevPage.data);
		this.setData({
			tarOpen_ID : prevPage.data.tarOpen_ID
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