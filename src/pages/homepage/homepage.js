// pages/homepage/homepage.js
var wxCharts = require('../../utils/wxcharts.js');

const app = getApp()
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
var serverUrl = app.globalData.serverUrl

Page({


	data: {
		hasInvestment : true,
		open_ID : null,
		show: true,
		isfrozen : false,
		riskActivities : [],
		redNum : 0
	},

	accept(e)
	{
		var that = this
		console.log(e.currentTarget.dataset.index)
		wx.request({
			url : serverUrl + '/risk/response',
			data : {
				fromIdentity : that.data.open_ID,
				toIdentity : that.data.riskActivities[e.currentTarget.dataset.index].identity,
				actionType : 1
			},
			method : "POST",
			header : {
				'Content-Type':'application/json;charset=utf-8'
			},
			success : function (res) {
				console.log("获取成功")
				console.log("66666666")
			},
			fail : function (res) {
				console.log("获取失败")
				console.log(res)
			}
		})
	},

	reject(e)
	{
		var that = this
		console.log(e.currentTarget.dataset.index)
		wx.request({
			url : serverUrl + '/risk/response',
			data : {
				fromIdentity : that.data.open_ID,
				toIdentity : that.data.riskActivities[e.currentTarget.dataset.index].identity,
				actionType : 0
			},
			method : "POST",
			header : {
				'Content-Type':'application/json;charset=utf-8'
			},
			success : function (res) {
				console.log("获取成功")
				console.log("66666666")
			},
			fail : function (res) {
				console.log("获取失败")
				console.log(res)
			}
		})
	},

	createSimulationData: function () {
		var categories = [];
		var data = [];
		for (var i = 0; i < 10; i++) {
			categories.push('2016-' + (i + 1));
			data.push(Math.random() * (20 - 10) + 10);
		}
		// data[4] = null;
		return {
			categories: categories,
			data: data
		}
	},

	onLoad : function(e)
	{
		var that = this
		that.data.open_ID = wx.getStorageSync('id')
		wx.request({
			url: serverUrl + '/risk/process',
			data : {
				identity : that.data.open_ID,
			},
			method : "GET",
			header : {
				'Content-Type':'text/plain;charset:utf-8;'
			},

			success : function (res) {
				console.log("获取风险信息成功")
				console.log(res)
				that.setData({
					isfrozen : res.data.frozen,
					redNum : res.data.redNum,
					riskActivities : res.data.riskActVoList
				})

				console.log(res)
				if (that.data.isfrozen)
				{
					console.log(that.data)
					Dialog.alert({
						context : this,
						selector:"#van-dialog",
						message: '您的账户已被冻结，请等待三天自动解冻',
					}).then(() => {
						wx.exitMiniProgram()
					});
				}
				else
				{
					// that.data.redNum = 2
					// that.data.riskActivities=[1,2]
					// console.log(that.data)
				}
			},
			fail : function (res) {
				console.log("获取授权关系失败")
				console.log(res)
			}
		})
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

		var simulationData = this.createSimulationData();
		// lineChart = new wxCharts({
		// 	canvasId: 'lineCanvas',
		// 	type: 'line',
		// 	categories: simulationData.categories,
		// 	animation: true,
		// 	// background: '#f5f5f5',
		// 	series: [{
		// 		name: '成交量1',
		// 		data: simulationData.data,
		// 		format: function (val, name) {
		// 			return val.toFixed(2) + '万';
		// 		}
		// 	}, {
		// 		name: '成交量2',
		// 		data: [2, 0, 0, 3, null, 4, 0, 0, 2, 0],
		// 		format: function (val, name) {
		// 			return val.toFixed(2) + '万';
		// 		}
		// 	}],
		// 	xAxis: {
		// 		disableGrid: true
		// 	},
		// 	yAxis: {
		// 		title: '成交金额 (万元)',
		// 		format: function (val) {
		// 			return val.toFixed(2);
		// 		},
		// 		min: 0
		// 	},
		// 	width: windowWidth,
		// 	height: 200,
		// 	dataLabel: false,
		// 	dataPointShape: true,
		// 	extra: {
		// 		lineStyle: 'curve'
		// 	}
		// });
	},
	navToAI_Query(e) {
		wx.navigateTo({
			url: '../AI_query/AI_query',
		})
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
})