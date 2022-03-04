// pages/add_family_member/add_family_member.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		family : [],
		numOfFamily : 2,
		
	},

	/**
	 * 生命周期函数--监听页面加载
	 */

	onChange(e) {
		// 需要手动对 checked 状态进行更新
			this.data.family[e.currentTarget.dataset.index].checked = e.detail
	},
	onLoad: function (options) {
		var Pages = getCurrentPages();
		var prevPage = Pages[Pages.length - 2];
		console.log(prevPage.data);
		this.setData({
			family : prevPage.data.family,
			numOfFamily : prevPage.data.numOfFamil
		})
		for (var i = 0; i < this.data.numOfFamily; ++i)
			this.data.family[i].unique = 'unique_' + i
		
		// console.log(Pages[Pages.length - 1].data)
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