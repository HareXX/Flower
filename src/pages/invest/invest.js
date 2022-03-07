var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
Page({
	data: {},
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
			data: data,
		}
	},
	onShow: function () {
		this.getTabBar().init();
		this.line()
		this.pie()
	},

	line: function () {
		var windowWidth = 320;
		try {
			var res = wx.getSystemInfoSync();
			windowWidth = res.windowWidth;
		} catch (e) {
			console.error('getSystemInfoSync failed!');
		}

		var simulationData = this.createSimulationData();
		lineChart = new wxCharts({
			canvasId: 'lineCanvas',
			type: 'line',
			categories: simulationData.categories,
			animation: true,
			// background: '#f5f5f5',
			series: [{
				name: '成交量1',
				data: simulationData.data,
				format: function (val, name) {
					return val.toFixed(2) + '万';
				}
			}, {
				name: '成交量2',
				data: [2, 0, 0, 3, null, 4, 0, 0, 2, 0],
				format: function (val, name) {
					return val.toFixed(2) + '万';
				}
			}],
			xAxis: {
				disableGrid: true,

			},
			yAxis: {
				title: '成交金额 (万元)',
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
	pie: function () {
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
				name: '成交量1',
				data: 15,
			}, {
				name: '成交量2',
				data: 35,
			}, {
				name: '成交量3',
				data: 78,
			}, {
				name: '成交量4',
				data: 63,
			}, {
				name: '成交量2',
				data: 35,
			}, {
				name: '成交量3',
				data: 78,
			}, {
				name: '成交量4',
				data: 63,
			}, {
				name: '成交量2',
				data: 35,
			}, {
				name: '成交量3',
				data: 78,
			}, {
				name: '成交量3',
				data: 78,
			}],
			width: windowWidth,
			height: 300,
			dataLabel: false,
		});
	}
});