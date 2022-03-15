const app = getApp()
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
var serverUrl = app.globalData.serverUrl

Page({

	data: {
		tarOpen_ID : null,
		year : null,
		month : null,
		day : null,
		medicineName : null
	},

	onChange1(event) {
		var that = this
		this.setData({
			year : event.detail
		})
	},
	onChange2(event) {
		var that = this
		this.setData({
			month : event.detail
		})
	},
	onChange3(event) {
		var that = this
		this.setData({
			day : event.detail
		})
	},
	onChange4(event) {
		var that = this
		this.setData({
			medicineName : event.detail
		})
	},
	
	confirm(e)
	{
		var that = this
		if (that.data.year == null || that.data.month == null || that.data.day == null || that.data.medicineName == null)
		{
			
			Dialog.alert({
				context : this,
				selector:"#van-dialog",
				message: '输入不能为空',
			}).then(() => {
				// on close
			});
		}
		else
		{
			if (that.data.month.length == 1)
				that.data.month = "0" + that.data.month
			
			if (that.data.day.length == 1)
				that.data.day = "0" + that.data.day

			wx.request({
				url : serverUrl + '/health/addMedicineInfo',
				data : {
					identity : that.data.tarOpen_ID,
					timestamp : "" + that.data.year + "-" + that.data.month + "-" + that.data.day,
					drugName : that.data.medicineName
				},
				method : "POST",
				header : {
					'Content-Type':'application/x-www-form-urlencoded'
				},
				success : function (res) {
					console.log("上传成功")
					console.log(res)
					Dialog.alert({
						context : this,
						selector:"#van-dialog",
						message: '上传成功！',
					}).then(() => {
						wx.navigateBack({
							delta: 1,
						})
					});

				},
				fail : function (res) {
					console.log("添加失败")
					console.log(res)
				}
			})
		}
	},
	
	onLoad: function (options) {
		var Pages = getCurrentPages();
		var prevPage = Pages[Pages.length - 2];
		console.log(prevPage.data);
		this.setData({
			tarOpen_ID : prevPage.data.tarOpen_ID
		})
	},

})