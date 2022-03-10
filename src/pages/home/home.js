// pages/home/home.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		open_ID : null,
		userInfo: {},
		isInFamily : false,
		familyID : -1,
		family : [{identity : null, avatarUrl : "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKK7lZKx3UpbNQnjvibLtrVp3pGF1yTqV802bHEVeVSsFibkicPLQhUyIOUAicQSOVWRwxT9eJPwaW9Bg/132", userName : "Hare"},
		{identity : null, avatarUrl : "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKK7lZKx3UpbNQnjvibLtrVp3pGF1yTqV802bHEVeVSsFibkicPLQhUyIOUAicQSOVWRwxT9eJPwaW9Bg/132", userName : "Hare"}],
		numOfFamily : 2,
	},

	// "lazyCodeLoading": "requiredComponents",
	navToAI_Query(e){
		wx.navigateTo({
			url: '../AI_query/AI_query',
		  })
	},
	
	navToTree(e)
	{
		wx.navigateTo({
			url: '../tree/tree',
		})
	},

	btnTap1(e) {
		wx.navigateTo({
		  url: '../senior-helper/senior-helper',
		})
	},

	imgTap1(e)
	{
		wx.navigateTo({
		  url: '../family_members/family_members',
		})
	},

	navToSeniorHelper(e)
	{
		wx.navigateTo({
		  url: '../senior-helper/senior-helper',
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getTabBar().init();
		var that = this
		var serverUrl = app.globalData.serverUrl
		console.log(wx.getStorageSync('id'))
		this.setData({
			open_ID : wx.getStorageSync('id')
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
		this.getTabBar().init();

		var that = this
		var serverUrl = app.globalData.serverUrl
		wx.request({
			url: serverUrl + '/inFamily',
			data :{
				identity : that.data.open_ID
			},
			method : "GET",
			header : {
				'Content-Type':'text/plain;charset:utf-8;'
			},
			success : function (res) {
				console.log("获取是否在家庭成功")
				console.log(res)
				that.setData({
					isInFamily : res.data == 1 ? true : false
				})
				console.log(that.data)
			},
			fail : function (err) {
				console.log("获取是否在家庭失败")
				console.log(err)
			}
		})

		// console.log(that.data.isInFamily)
		if (that.data.isInFamily)
		{
			wx.request({
				url: serverUrl + '/getFamilyID',
				data :{
					identity : that.data.open_ID
				},
				method : "GET",
				header : {
					'Content-Type':'text/plain;charset:utf-8;'
				},
				success : function (res) {
					console.log("获取家庭ID成功")
					console.log(res)
					that.setData({
						familyID : res.data,
					})
					console.log(that.data)
				},
				fail : function (err) {
					console.log("获取家庭ID失败")
					console.log(err)
				}
			})
		
		
		// this.data.family = [{name : "Hare", checked : false}, {name : "Hare2", checked : false}]
		// this.data.numOfFamily = 2


			
			//获取家庭成员
			wx.request({
				url : serverUrl + '/allMember',
				data : {
					identity : that.data.open_ID
				},
				method : "GET",
				header : {
					'Content-Type':'text/plain;charset:utf-8;'
				},
				success : function (res) {
					console.log("获取家庭成员成功")
					that.setData({
						family : res.data,
						numOfFamily : res.data.length
					})
				},
				fail : function (res) {
					console.log("获取家庭成员失败")
					console.log(res)
				}
			})
				
			wx.request({
				url : serverUrl + '/allRelation',
				data : {
					identity : that.data.open_ID
				},
				method : "GET",
				header : {
					'Content-Type':'text/plain;charset:utf-8;'
				},
				success : function (res) {
					console.log("获取授权关系成功")
					for (var i = 0; i < that.data.numOfFamily; ++i)
					{
						if (family[i].identity == open_ID) continue
						family[i].checked = res.data[family[i].identity] == 1 ? true : false
					}
				},
				fail : function (res) {
					console.log("获取授权关系失败")
					console.log(res)
				}
			})
		}
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