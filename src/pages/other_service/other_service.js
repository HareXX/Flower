// pages/other_service/other_service.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		
	},

	navToHealth(e) {
		wx.navigateTo({
			url: '../health/health',
		})
	},

	navToCommunity(e)
	{
		wx.navigateTo({
		  url: '../community/community',
		})
	},

	navToNurse(e)
	{
		wx.navigateTo({
			url: '../nurse/nurse'
		})
	}
})