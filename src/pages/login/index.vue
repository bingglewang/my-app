<template>
  <div class="user-center">
    <div class="container-user" >
          <img src="../../static/images/authorization2.png" class="authorization-image"/>
      <button v-if="canIUse" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" type="primary">同意授权登录</button>
      <view v-else>请升级微信版本</view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        canIUse:wx.canIUse('button.open-type.getUserInfo')
      }
    },
    components: {
    },
    methods: {
      bindGetUserInfo(e){
        //此处授权得到userInfo
        console.log(e.mp.detail.userInfo);
        if(e.mp.detail.userInfo){
         /* wx.navigateBack({
            delta: 1
          })*/
          wx.reLaunch({
            url: '../evaluate/main'
          })
        }else{
          wx.showToast({
            title: "为了您更好的体验,请先同意授权",
            icon: 'none',
            duration: 2000
          });
        }
      }
    },
    mounted(){
    },
    created () {
    }
  }
</script>

<style lang="scss">
  page{
    height: 100%;
    width: 100%;
  }
  .user-center{
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color:#eeeeee ;
    .container-user{
      box-sizing: border-box;
      padding: 0px;
      border: 8px solid #eeeeee;
      height: 100%;
      background-color: white;
      text-align: center;
      .authorization-image{
        height: 132px;
        width: 132px;
      }
    }
  }

</style>
