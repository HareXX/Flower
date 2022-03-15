// pages/homepage/homepage.js
var wxCharts = require('../../utils/wxcharts.js');
var lineChart = null;
var pieChart = null;
Page({
	data: {
		hasInvestment: true,
	},
	onShow: function (e) {
		this.getTabBar().init();
		var windowWidth = 320;
		try {
			var res = wx.getSystemInfoSync();
			windowWidth = res.windowWidth;
		} catch (e) {
			console.error('getSystemInfoSync failed!');
		}
	},
	navToAI_Query(e) {
		wx.navigateTo({
			url: '../AI_query/AI_query',
		})
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
		wx.navigateTo({
			url: '../smart_invest/smart_invest',
		})
	},
	onLoad: function (e) {
		var windowWidth = 320;
		try {
			var res = wx.getSystemInfoSync();
			windowWidth = res.windowWidth;
		} catch (e) {
			console.error('getSystemInfoSync failed!');
		}

		pieChart = new wxCharts({
			animation: true,
			canvasId: 'pieCanvas',
			type: 'pie',
			series: [{
				name: '南方金利A',
				data: 10000,
			}, {
				name: '国泰上证',
				data: 3500,
			}, {
				name: '嘉实原油',
				data: 8000,
			}, ],
			width: windowWidth,
			height: 300,
			dataLabel: true,
		});
	},

})