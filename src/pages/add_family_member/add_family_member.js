// pages/add_family_member/add_family_member.js
var app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		open_ID : null,
		family : [],
		numOfFamily : 0,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onChange: function(e) {
		var that = this
		var arr = that.data.family
		arr[e.currentTarget.dataset.index].checked = e.detail
		that.setData({
			family : arr
		})
		that.data.family[e.currentTarget.dataset.index].checked = e.detail
		console.log(e.detail)
		wx.request({
		  url: 'url',
		})
	},
	onLoad: function (options) {
		let that = this
		var Pages = getCurrentPages()
		var prevPage = Pages[Pages.length - 2]
		console.log(prevPage.data)
		this.setData({
			family : prevPage.data.family,
			numOfFamily : prevPage.data.numOfFamily,
			open_ID : prevPage.data.open_ID
		})
		console.log("加载数据成功")
		
		// for (var i = 0; i < this.data.numOfFamily; ++i)
		// 	this.data.family[i].unique = 'unique_' + i
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