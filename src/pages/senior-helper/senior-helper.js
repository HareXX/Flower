// pages/senior-helper/senior-helper.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
		hasAuth : [true, false],
		family : [],
		numOfFamily : 0,
		open_ID : null,
		isInFamily : false
    },

	navToSeniorHelperUser(e) {
		wx.navigateTo({
			url: '../senior_helper_user/senior_helper_user',
		  })
	},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
		var that = this
		var Pages = getCurrentPages();
		var prevPage = Pages[Pages.length - 2];
		var serverUrl = app.globalData.serverUrl
		console.log(prevPage.data);
		this.setData({
			family : prevPage.data.family,
			numOfFamily : prevPage.data.numOfFamily,
			open_ID : prevPage.data.open_ID,
			isInFamily : prevPage.data.isInFamily
		})

		if (that.data.isInFamily)
		{
			that.data.hasAuth = new Array(this.data.numOfFamily)
			for (var i = 0; i < that.data.numOfFamily; ++i)
			{
				wx.request({
					url: serverUrl + '/singleAuthorization',
					data : {
						identity1 : that.data.open_ID,
						identity2 : that.data.family[i].identity
					},
					method : "GET",
					header : {
						'Content-Type':'text/plain;charset:utf-8;'
					},

					success : function (res) {
						console.log("获取授权关系成功")
						that.data.hasAuth[i] = res.data == 1 ? true : false
					},
					fail : function (res) {
						console.log("获取授权关系失败")
						console.log(res)
					}
				})
			}
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

    }
})