// pages/wx_login/wx_login.js


Page({
    data:{
      userInfo:'',
      identity:'',
    },

    onLoad(){
    },

    login(){
      var that = this
      wx.getUserProfile({
        desc: '必须授权才能使用',
        success:res=>{
          let user=res.userInfo
          // wx.setStorageSync('user', user)
          console.log('成功',user)
          let wxname=user.nickName;
          let picture=user.avatarUrl;      
          // this.setData({
          //   userInfo:user,
          //       })
                wx.login({
                  success (res) {
                    if (res.code) {
                      console.log(res.code)
                      console.log(picture)
                      console.log(wxname)
                      //发起网络请求
                      wx.request({
                        url: '47.113.191.64:9001/login',
                        data: {
                          code:res.code,
                          name:wxname,
                          picture:picture
                        }, 
                        method: 'GET',

                      // 携带的参数会以url格式传到服务器，信息头我们设置为url编码，utf8编码
                      header: {
                        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' 
                      },
                         success: function (res) {
                        console.log(res.data)
                        console.log("chenggong")
                        },
                        fail:function(err){
                          console.log("失败")
                      }
                      })
                      wx.switchTab({
                        url:"../homepage/homepage"
                        })
                    } else {
                      console.log('登录失败！' + res.errMsg)
                    }
                  }
                })
          // let id=''
          // wx.login({
          //   success: res => {
          //     // 使用微信的提供的接口直接获取 openid 
          //     wx.request({
          //      url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx1aa63d33e9daf0e6&secret=71d7bed7695d61d4f896230701f4a094&js_code=' + res.code + '&grant_type=authorization_code',
          //      success: res => {
          //       // 获取到用户的 openid
          //       console.log("用户的openid:" + res.data.openid);
          //       id=res.data.openid
          //       wx.setStorageSync('id',id)
          //       that.setData({
          //         identity:id
          //             })
          //      }
          //     });  
      }
    })
  }
})
