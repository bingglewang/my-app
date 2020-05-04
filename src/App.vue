<script>

  export default {
    created() {
      /* // 调用API从本地缓存中获取数据
       const logs = wx.getStorageSync('logs') || []
       logs.unshift(Date.now())
       wx.setStorageSync('logs', logs)*/
    },
    methods: {
      getSetting() {
        let _this = this;
        wx.login({
          success: async function (reslogin) {
            if (reslogin.code) {
              let url = "api/wx/session";
              let data = {
                code: reslogin.code
              }
              let res1 = await _this.$post(url, data);
              wx.setStorageSync('userSession', res1);
              console.log("app刚进来：" + res1);
            }
          }
        })
        wx.getSetting({
          success: function (resSetting) {
            if (resSetting.authSetting['scope.userInfo']) {
              console.log('app用户已经授权过')
            } else {
              const url = '/pages/login/main'
              wx.reLaunch({
                url: url,
              })
              console.log('app用户还未授权过')
            }
          }
        })
      },
    },
    mounted() {
      // 一进来看看用户是否授权过
      this.getSetting()
    },
    onShow() {
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
    padding: 200 rpx 0;
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
