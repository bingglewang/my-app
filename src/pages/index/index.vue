<template>
  <div class="user-center">
    <div class="container-user" >
      <view class="userinfo">
        <view class="userinfo-avatar">
          <open-data  type="userAvatarUrl"></open-data>
        </view>
        <open-data type="userNickName"></open-data>
      </view>
    </div>
    <div class="user-motto">
      <!--估价列表-->
      <div class="evaluate-list" @click="toList">
        <img src="/static/images/list.png" class="user-image-icons"/>
        <span >估价列表</span>
        <img  src="../../static/images/right3.png" class="evaluate-value" style="margin-top: 9px"/>
      </div>
      <!--个人中心-->
      <div class="evaluate-list" @click="toUserInfo">
        <img src="/static/images/center.png" class="user-image-icons"/>
        <span>个人资料</span>
        <img  src="../../static/images/right3.png" class="evaluate-value" style="margin-top: 9px"/>
      </div>

    </div>
    <div class="support">
      <span>wangilloa提供技术支持</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    getSetting(){
      let _this = this;
      wx.login({
        success: async function (reslogin) {
          if(reslogin.code){
            let url = "api/wx/session";
            let data = {
              code:reslogin.code
            }
            let res1 = await _this.$post(url,data);
            wx.setStorageSync('userSession', res1)
            console.log("后台请求数据："+res1);
          }
        }
      })
    },
    //查询记录页面
    toList(){
      const url = '../list/main'
      wx.navigateTo({ url })
    },
    //个人中心
    toUserInfo(){
      const url = '../user/main'
      wx.navigateTo({ url })
    },
  },
  mounted(){
    if(wx.getStorageSync('userSession').token == null || wx.getStorageSync('userSession').token == undefined){
      this.getSetting();
    }
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
      padding: 0px;
      border: 8px solid #eeeeee;
      height: 200px;
      background-color: white;
    }
    .user-motto{
      width: 100%;
      height: 300px;
      background-color: white;
      border: 8px solid #eeeeee;
      border-top: 0px solid #eeeeee;
      padding: 0px;
      box-sizing: border-box;
      .evaluate-list{
        height: 50px;
        line-height: 50px;
        font-size: 16px;
       /* display:flex;
        align-items:center;*/
        border-bottom:2px solid ghostwhite;
        .user-image-icons{
          float: left;
          margin-top: 9px;
          margin-left: 20px;
          margin-right: 20px;
        }
        .evaluate-value{
          color: #c5c8cf;
          float: right;
          margin-right: 15px;
        }
        image{
          width: 32px;
          height: 32px;
        }
      }
    }
    .support{
      text-align: center;
      font-size: 13px;
    }
  }

  .userinfo {
    position: relative;
    width: 375px;
    height: 160px;
    color: #c5c8cf;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    overflow:hidden;
    display: block;
    width: 80px;
    height: 80px;
    margin: 10px;
    margin-top: 25px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  }

  .userinfo text {
    /* color: #fff; */
    font-size: 14px;
    background-color: #c0c0c0;
    border-radius:40%;
  }




</style>
