// pages/tree/tree.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		family : [],
		numOfFamily : 0,
	},

	navToAddFamilyMember(e){
		wx.navigateTo({
			url: '../add_family_member/add_family_member',
		  })
	},

	navToAddMember(e)
	{
		wx.navigateTo({
			url: '../add_member/add_member',
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var Pages = getCurrentPages();
		var prevPage = Pages[Pages.length - 2];
		console.log(prevPage.data);
		this.setData({
			family : prevPage.data.family,
			numOfFamily : prevPage.data.numOfFamily
		})
		console.log(Pages)
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