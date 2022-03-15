// pages/homepage/homepage.js
var wxCharts = require('../../utils/wxcharts.js');
const app = getApp()
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
var serverUrl = app.globalData.serverUrl
var lineChart = null;
var pieChart = null;
Page({
	data: {
		hasInvestment : false,
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
        var simulationData = this.createSimulationData();
        lineChart = new wxCharts({
            canvasId: 'lineCanvas',
            type: 'line',
            categories: simulationData.categories,
            animation: true,
            // background: '#f5f5f5',
            series: [{
                name: '股票',
                data: simulationData.data,
                format: function (val, name) {
                    return val.toFixed(2) + '万';
                }
            }, {
                name: '债券',
                data: [2, 0, 0, 3, 5, 4, 4, 5, 6, 5],
                format: function (val, name) {
                    return val.toFixed(2) + '万';
                }
            }],
            xAxis: {
                disableGrid: true
            },
            yAxis: {
                title: '收益金额 (万元)',
                format: function (val) {
                    return val.toFixed(2);
                },
                min: 0
            },
            width: windowWidth,
            height: 200,
            dataLabel: false,
            dataPointShape: true,
            extra: {
                lineStyle: 'curve'
            }
        });
    },
    touchHandler: function (e) {
        console.log(lineChart.getCurrentDataIndex(e));
        lineChart.showToolTip(e, {
            // background: '#7cb5ec',
            format: function (item, category) {
                return category + ' ' + item.name + ':' + item.data 
            }
        });
    },    
    createSimulationData: function () {
        var categories = [];
        var data = [];
        for (var i = 0; i < 10; i++) {
            categories.push('2016-' + (i + 1));
            data.push(Math.random()*(20-10)+10);
        }
        // data[4] = null;
        return {
            categories: categories,
            data: data
        }
    },
    updateData: function () {
        var simulationData = this.createSimulationData();
        var series = [{
            name: '成交量1',
            data: simulationData.data,
            format: function (val, name) {
                return val.toFixed(2) + '万';
            }
        }];
        lineChart.updateData({
            categories: simulationData.categories,
            series: series
        });
    },

})