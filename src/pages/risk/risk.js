// pages/risk/risk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentFatherIndex: 0,
    questionnaireArray: [
      {
        "type": "SCQ",
        "content": {
          "description": "与他人相比，您认为自己愿意承担多少程度的金融风险？",
          "options":
            [
              { "id": 1, "name": "A:极低风险水平", "isSelected": false},
              { "id": 2, "name": "B:较低风险水平", "isSelected": false },
              { "id": 3, "name": "C:平均风险水平", "isSelected": false },
              { "id": 4, "name": "D:较高风险水平", "isSelected": false },
              { "id": 5, "name": "E:极高风险水平", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "当您财务上出现问题时，您能否适应？",
          "options":
            [
              { "id": 1, "name": "A:非常难适应", "isSelected": false },
              { "id": 2, "name": "B:较难适应", "isSelected": false },
              { "id": 3, "name": "C:一般", "isSelected": false },
              { "id": 4, "name": "D:较易适应", "isSelected": false },
              { "id": 5, "name": "E:非常容易适应", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "如果有一个工作稳定但加薪空间较小的岗位和一个加薪空间较大但工作不稳定的岗位，您会更倾向于选择哪个岗位呢？",
          "options":
            [
              { "id": 1, "name": "A:确定选择工作稳定但加薪空间较小的岗位", "isSelected": false},
              { "id": 2, "name": "B:可能选择工作稳定但加薪空间较小的岗位", "isSelected": false },
              { "id": 3, "name": "C:不确定", "isSelected": false },
              { "id": 4, "name": "D:可能选择加薪空间较大但工作不稳定的岗位", "isSelected": false },
              { "id": 5, "name": "E:确定选择加薪空间较大但工作不稳定的岗位", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "当面对重大的财务决策时，您会更加关注潜在损失或潜在收益？",
          "options":
            [
              { "id": 1, "name": "A:一直更关注潜在损失", "isSelected": false },
              { "id": 2, "name": "B:经常更关注潜在损失", "isSelected": false },
              { "id": 3, "name": "C:两者关注程度相当", "isSelected": false },
              { "id": 4, "name": "D:经常更关注潜在收益", "isSelected": false },
              { "id": 5, "name": "E:一直更关注潜在收益", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您现在愿意为您的财务决策承担多少风险？",
          "options":
            [
              { "id": 1, "name": "A:非常小", "isSelected": false },
              { "id": 2, "name": "B:较小", "isSelected": false },
              { "id": 3, "name": "C:中等", "isSelected": false },
              { "id": 4, "name": "D:较大", "isSelected": false },
              { "id": 5, "name": "E:非常大", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您对自己做出正确财务决策的能力有多大信心？",
          "options":
            [
              { "id": 1, "name": "A:没有信心", "isSelected": false },
              { "id": 2, "name": "B:信心较小", "isSelected": false },
              { "id": 3, "name": "C:具有一定信心", "isSelected": false },
              { "id": 4, "name": "D:信心较大", "isSelected": false },
              { "id": 5, "name": "E:完全有信心", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "假设5年前您购买了一家知名公司的股票，但是因其经营不善导致您一笔巨额亏损卖出。如今该公司进行重组，且专家预测其股票回报率将高于市场平均水平。鉴于过去的糟糕经历，您是否愿意重新购买该工期的股票呢？",
          "options":
            [
              { "id": 1, "name": "A:完全不会", "isSelected": false },
              { "id": 2, "name": "B:较大可能不会", "isSelected": false },
              { "id": 3, "name": "C:不确定", "isSelected": false },
              { "id": 4, "name": "D:较大可能会", "isSelected": false },
              { "id": 5, "name": "E:一定会", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "当您投资的总价值下降多少时，您会感到焦虑？",
          "options":
            [
              { "id": 1, "name": "A:任何一点下降", "isSelected": false },
              { "id": 2, "name": "B:10%", "isSelected": false },
              { "id": 3, "name": "C:20%", "isSelected": false },
              { "id": 4, "name": "D:50%", "isSelected": false },
              { "id": 5, "name": "E:超过50%", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您正在考虑将1/4的资金投入一项投资。这项投资的预期收益约为定期存款利率的两倍，但这种投资不会受到投资损失的保护。你所能接受的损失程度为多少？",
          "options":
            [
              { "id": 1, "name": "A:不能接受任何损失", "isSelected": false },
              { "id": 2, "name": "B:能够接受非常小部分损失", "isSelected": false },
              { "id": 3, "name": "C:能够接受适量损失", "isSelected": false },
              { "id": 4, "name": "D:能够接受50%损失", "isSelected": false },
              { "id": 5, "name": "E:能够接受超过50%损失", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "投资过程中回报率与风险往往呈正比，那么您愿意用多少资金投于高风险高回报率的投资项目呢？",
          "options":
            [
              { "id": 1, "name": "A:0%", "isSelected": false },
              { "id": 2, "name": "B:25%", "isSelected": false },
              { "id": 3, "name": "C:50%", "isSelected": false },
              { "id": 4, "name": "D:75%", "isSelected": false },
              { "id": 5, "name": "E:100%", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "想象您在未来某时借了一大笔钱，且并不清楚未来利率变化趋势。这时你可以选择一个随市场利率变化的浮动利率，一个比当前利率高1%的固定利率，或者兼有浮动利率、固定利率的混合利率。那么您会选择按什么利率进行贷款呢？",
          "options":
            [
              { "id": 1, "name": "A:100%可变利率", "isSelected": false },
              { "id": 2, "name": "B:75%可变利率，25%固定利率", "isSelected": false },
              { "id": 3, "name": "C:50%可变利率，50%固定利率", "isSelected": false },
              { "id": 4, "name": "D:25%可变利率，75%固定利率", "isSelected": false },
              { "id": 5, "name": "E:100%固定利率", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "保险可以覆盖生活中一系列风险，包括盗窃、火灾、意外事故、疾病、死亡等，您目前所有的保险涉及了多少风险呢？",
          "options":
            [
              { "id": 1, "name": "A:没有", "isSelected": false },
              { "id": 2, "name": "B:较少风险", "isSelected": false },
              { "id": 3, "name": "C:部分风险", "isSelected": false },
              { "id": 4, "name": "D:较多风险", "isSelected": false },
              { "id": 5, "name": "E:全部风险", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您目前有一份存在30%风险的金融资产，那么您认为这份金融资产所能够带来的资产回报率为多少呢？",
          "options":
            [
              { "id": 1, "name": "A:少于10%", "isSelected": false },
              { "id": 2, "name": "B:20%", "isSelected": false },
              { "id": 3, "name": "C:30%", "isSelected": false },
              { "id": 4, "name": "D:40%", "isSelected": false },
              { "id": 5, "name": "E:50%以上", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您的年龄为:",
          "options":
            [
              { "id": 1, "name": "A:18—25岁", "isSelected": false },
              { "id": 2, "name": "B:26—35岁", "isSelected": false },
              { "id": 3, "name": "C:36—50岁", "isSelected": false },
              { "id": 4, "name": "D:51—64岁", "isSelected": false },
              { "id": 5, "name": "E:65岁以上", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您的受教育程度为:",
          "options":
            [
              { "id": 1, "name": "A:无受教育经历", "isSelected": false },
              { "id": 2, "name": "B:小学", "isSelected": false },
              { "id": 3, "name": "C:初中", "isSelected": false },
              { "id": 4, "name": "D:高中", "isSelected": false },
              { "id": 5, "name": "E:大学本科", "isSelected": false },
              { "id": 6, "name": "F:研究生及以上", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您的直系家属数量为:",
          "options":
            [
              { "id": 1, "name": "A:2人以下", "isSelected": false },
              { "id": 2, "name": "B:3人", "isSelected": false },
              { "id": 3, "name": "C:4人", "isSelected": false },
              { "id": 4, "name": "D:5人", "isSelected": false },
              { "id": 5, "name": "E:6人以上", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您的净资产金额（总资产-总负债）约为:",
          "options":
            [
              { "id": 1, "name": "A:10万以下(包含10万)", "isSelected": false },
              { "id": 2, "name": "B:10—50万（不包含10万，包含50万）", "isSelected": false },
              { "id": 3, "name": "C:50—100万（不包含50万，包含100万）", "isSelected": false },
              { "id": 4, "name": "D:100—500万（不包含100万，包含500万）", "isSelected": false },
              { "id": 5, "name": "E:500万以上（不包含500万）", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您的月收入约为:",
          "options":
            [
              { "id": 1, "name": "A:5千元以下 (包含5千)", "isSelected": false },
              { "id": 2, "name": "B:5千—1万元（不包含5千，包含1万）", "isSelected": false },
              { "id": 3, "name": "C:1万—10万元（不包含1万，包含10万）", "isSelected": false },
              { "id": 4, "name": "D:10万—20万元（不包含10万，包含20万）", "isSelected": false },
              { "id": 5, "name": "E:20万元以上（不包含20万元）", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您有多长时间的投资经历？",
          "options":
            [
              { "id": 1, "name": "A:无", "isSelected": false },
              { "id": 2, "name": "B:1年以下", "isSelected": false },
              { "id": 3, "name": "C:1-5年", "isSelected": false },
              { "id": 4, "name": "D:5-10年", "isSelected": false },
              { "id": 5, "name": "E:10年以上", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您目前的资产负债率（负债总额/资产总额）为:",
          "options":
            [
              { "id": 1, "name": "A:0%", "isSelected": false },
              { "id": 2, "name": "B:0-10%", "isSelected": false },
              { "id": 3, "name": "C:10%-20%", "isSelected": false },
              { "id": 4, "name": "D:30%-40%", "isSelected": false },
              { "id": 5, "name": "E:40%-50%", "isSelected": false },
              { "id": 6, "name": "E:超过50%", "isSelected": false }
            ]
        }
      },
      {
        "type": "SCQ",
        "content": {
          "description": "您目前的收入负债率（负债总额/收入总额）为:",
          "options":
            [
              { "id": 1, "name": "A:0%", "isSelected": false },
              { "id": 2, "name": "B:0-10%", "isSelected": false },
              { "id": 3, "name": "C:10%-20%", "isSelected": false },
              { "id": 4, "name": "D:30%-40%", "isSelected": false },
              { "id": 5, "name": "E:40%-50%", "isSelected": false },
              { "id": 6, "name": "E:超过50%", "isSelected": false }
            ]
        }
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

  },

  getTempFatherIndex: function (input) {
    var tempFatherIndex = input.currentTarget.dataset.id;
    //console.log('currentFatherIndex: ' + tempFatherIndex);
    this.setData({
      currentFatherIndex: tempFatherIndex,
    });
  },
  
  radioChangeSCQ:function(input){
    var tempFatherIndex = this.data.currentFatherIndex;
    var tempArray = this.data.questionnaireArray;
    for (var i in tempArray[tempFatherIndex].content.options){
      if (tempArray[tempFatherIndex].content.options[i].name == input.detail.value){
        tempArray[tempFatherIndex].content.options[i].isSelected = true;
      }
      else{
        tempArray[tempFatherIndex].content.options[i].isSelected = false;
      }
    }
    this.setData({
      questionnaireArray: tempArray,
    });
  },

  checkboxChangeMCQ:function(input){
    // console.log(input.detail.value);
    var flag = false;
    var tempFatherIndex = this.data.currentFatherIndex;
    var tempArray = this.data.questionnaireArray;
    for (var i in tempArray[tempFatherIndex].content.options) {
      flag = false;
      for(var j in input.detail.value){
        if (tempArray[tempFatherIndex].content.options[i].name == input.detail.value[j]){
          flag = true;
        }
      }
      if(flag == true){
        tempArray[tempFatherIndex].content.options[i].isSelected = true;
      }
      else{
        tempArray[tempFatherIndex].content.options[i].isSelected = false;
      }
    }
    this.setData({
      questionnaireArray: tempArray,
    });
  },

  bindblurAnswerOfSAQ: function (input) {
    var tempIndex = input.currentTarget.dataset.id;
    var tempArray = this.data.questionnaireArray;
    tempArray[tempIndex].content.answer = input.detail.value;
    this.setData({
      questionnaireArray: tempArray,
    });
  },

  complete :function(){
    var arr=this.data.questionnaireArray;
    var x=0
    for(var i=0;i<=4;i++)
    {
      for(var j=0;j<=4;j++)
      {
        if(arr[i].content.options[j].isSelected==true) x+=(j+1)
      }
    }
    for(var i=5;i<=9;i++)
    {
      for(var j=0;j<=4;j++)
      {
        if(arr[i].content.options[j].isSelected==true) x+=(j+1)
      }
    }
    for(var i=10;i<=11;i++)
    {
      for(var j=0;j<=4;j++)
      {
        if(arr[i].content.options[j].isSelected==true) x+=(5-j)
      }
    }
    for(var j=0;j<=4;j++)
    {
      if(arr[12].content.options[j].isSelected==true) x+=j+1
    }
    for(var j=0;j<=4;j++)
    {
      if(arr[13].content.options[j].isSelected==true) x+=(5-j)
    }
    if(arr[14].content.options[0].isSelected==true) x+=1
    if(arr[14].content.options[1].isSelected==true) x+=2
    if(arr[14].content.options[2].isSelected==true) x+=2
    if(arr[14].content.options[3].isSelected==true) x+=3
    if(arr[14].content.options[4].isSelected==true) x+=4
    if(arr[14].content.options[5].isSelected==true) x+=5
    for(var i=15;i<=17;i++)
    {
      for(var j=0;j<=4;j++)
      {
        if(arr[i].content.options[j].isSelected==true) x+=j+1
      }
    }
    for(var j=0;j<=3;j++)
    {
      if(arr[18].content.options[j].isSelected==true) x+=j
    }
    if(arr[18].content.options[4].isSelected==true) x+=5
    for(var i=19;i<=20;i++)
    {
      for(var j=0;j<=5;j++)
      {
        if(arr[i].content.options[j].isSelected==true) x+=j
      }
    }
    if(x<=42&&x>=18) console.log("保守型")
    if(x>=43&&x<=63) console.log("中庸保守型")
    if(x>=64&&x<=83) console.log("中庸型")
    if(x>=84&&x<=94) console.log("中庸进取型")
    if(x>=95&&x<=105) console.log("进取型")
    var that=this
    var tempid=wx.getStorageSync('id')
    wx.setStorageSync('alpha',x)
    wx.redirectTo({
      url: '../questionnare/questionnare',
    })
  },
})
