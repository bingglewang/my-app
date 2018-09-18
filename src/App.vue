<script>

export default {
  created () {
   /* // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)*/
  },
  methods:{
    getSetting(){
      let _this = this;
      wx.getSetting({
        success: function(res){
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo)
                wx.setStorageSync('userInfo',res.userInfo)
               //利用code从后台获取open_id和session_key
                wx.checkSession({
                  success: function(res){
                    console.log("处于登录态");
                    wx.login({
                      success: async function (res) {
                        if(res.code){
                          let url = "api/wx/session";
                          let data = {
                            code:res.code
                          }
                          let res1 = await _this.$post(url,data);
                          wx.setStorageSync('userSession', res1)
                          console.log("后台请求数据："+res1);
                        }
                      }
                    })
                  },
                  fail: function(res){
                    console.log("需要重新登录");
                    wx.login({
                      success: async function (res) {
                        if(res.code){
                          let url = "api/wx/session";
                          let data = {
                            code:res.code
                          }
                          let res1 = await _this.$post(url,data);
                          wx.setStorageSync('userSession', res1)
                          console.log("后台请求数据："+res1);
                        }
                      }
                    })
                  }
                })
                //用户已经授权过
                console.log('用户已经授权过')
              }
            })
          }else{
            const url = '../login/main'
            wx.reLaunch({
              url: url,
            })
            console.log('用户还未授权过')
          }
        }
      })
    },
  },
  mounted(){
    // 一进来看看用户是否授权过
    this.getSetting()
  }
}
</script>
<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
