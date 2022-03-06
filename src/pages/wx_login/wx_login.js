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
          wx.setStorageSync('user', user)
          console.log('成功',user)
          this.setData({
            userInfo:user,
                })
          let id=''
          wx.login({
            success: res => {
              // 使用微信的提供的接口直接获取 openid 
              wx.request({
               url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx1aa63d33e9daf0e6&secret=71d7bed7695d61d4f896230701f4a094&js_code=' + res.code + '&grant_type=authorization_code',
               success: res => {
                // 获取到用户的 openid
                console.log("用户的openid:" + res.data.openid);
                id=res.data.openid
                wx.setStorageSync('id',id)
                that.setData({
                  identity:id
                      })
               }
              });  
                wx.switchTab({
                  url:"../homepage/homepage"
                })
                },
            fall:res=>{
              console.log('失败',res)
            }
          })
        }
      })
    }
})