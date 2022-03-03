// pages/wx_login/wx_login.js

Page({
  // data: {
  //  //判断小程序的API，回调，参数，组件等是否在当前版本可用。
  //  canIUse: wx.canIUse('button.open-type.getUserInfo'),
  // },
  
  // onLoad: function() {
  //  // 查看是否授权
  //  wx.getSetting({
  //   success: function(res) {
  //    if (res.authSetting['scope.userInfo']) {
  //     wx.getUserInfo({
  //      success: function(res) {
  //       // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
  //       // 在用户授权成功后，调用微信的 wx.login 接口，从而获取code
  //       wx.login({
  //        success: res => {
  //         // 使用微信的提供的接口直接获取 openid 
  //         wx.request({
  //          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx1aa63d33e9daf0e6&secret=71d7bed7695d61d4f896230701f4a094&js_code=' + res.code + '&grant_type=authorization_code',
  //          success: res => {
  //           // 获取到用户的 openid
  //           console.log("用户的openid:" + res.data.openid);
  //          }
  //         });
  //        }
  //       });
  //      }
  //     });
  //    } 
  //   }
  //  });
  // },

  // bindGetUserInfo: function(e) {
  //    console.log("用户的信息如下：");
  //    console.log(e.detail.userInfo);
  //   wx.switchTab({
  //     url:"../homepage/homepage"
  //   })}
    data:{
      userInfo:'',
      identity:'',
    },

    onLoad(){
       let user=wx.getStorageSync('user')
       let id=wx.getStorageSync('id')
       this.setData({
         userInfo:user,
         identity:id
       }),
       console.log(user)
       console.log(id)
       wx.switchTab({
        url:"../homepage/homepage"
      })
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