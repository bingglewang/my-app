<template>
  <div class="user-center">
    <div class="user-motto">
      <!--估价列表-->
      <div class="evaluate-list">
        <img src="/static/images/name.png" class="user-image-icons"/>
        <span >姓&nbsp;&nbsp;&nbsp;名</span>
        <span style="color: red">*</span>
        <input class="user-center-input" v-model="userName"  placeholder="请输入姓名" style="margin-left: 22px"/>
      </div>
      <!--可用估价次数-->
      <div class="evaluate-list">
        <img src="/static/images/sex.png" class="user-image-icons"/>
        <span>性&nbsp;&nbsp;&nbsp;别</span>
        <radio-group class="radio-group" @change="radioChange">
          男<radio value="" :checked="isSexChecked"/>
          女<radio value="" :checked="isFemaleChecked"/>
        </radio-group>
      </div>
      <!--可用估价时段-->
      <div class="evaluate-list">
        <img src="/static/images/phone.png" class="user-image-icons"/>
        <span>手机号</span>
        <span style="color: red">*</span>
        <input class="user-center-input"  placeholder="请输入手机号" v-model="userPhoneNumber"/>
      </div>
      <!--个人中心-->
      <div class="evaluate-list">
        <img src="/static/images/mail.png" class="user-image-icons"/>
        <span>邮&nbsp;&nbsp;&nbsp;箱</span>
        <input class="user-center-input"  placeholder="请输入邮箱" style="margin-left: 28px" v-model="userEmail">
      </div>
      <!--可用估价次数-->
      <div class="evaluate-list">
        <img src="/static/images/count.png" class="user-image-icons"/>
        <span>可用次数</span>
        <span class="evaluate-value">{{enableCount}}</span>
      </div>
      <!--可用估价时段-->
      <div class="evaluate-list">
        <img src="/static/images/time.png" class="user-image-icons"/>
        <span>可用时段</span>
        <span class="evaluate-value">{{enableTime}}</span>
      </div>
      <button type="primary" size="default" class="save-button" @click="saveUserInfo">保存</button>
    </div>
  </div>
</template>

<script>
  import {dateFormat} from '@/utils/index'
    export default {
      data(){
        return{
          userEmail:'',                         //用户邮箱
          userName:'',                          //用户姓名
          userPhoneNumber:'',                    //用户手机号
          enableCount:'',                         //可用查询次数
          enableTime:'',                          //可用时间段
          isSexChecked:true,
          isFemaleChecked:false
        }
      },
      methods:{
        async saveUserInfo(){
          let _this = this;
          let saveUserInfo = {
            openId:wx.getStorageSync('userSession').token,
            phoneNumber:this.userPhoneNumber,
            sex:this.isSexChecked?1:0,
            userName:this.userName,
            userMail:this.userEmail
          };
          let resp = await _this.$post1('admin/userUpdate',saveUserInfo);
          if(resp.msg == "success"){
            // 显示加载图标
            wx.showLoading({
              title: '保存成功!',
            })
            setTimeout(()=>{
                // 隐藏加载框
              wx.hideLoading();
            },500);
          }else{
            wx.showToast({
              title: '保存失败',
              icon: 'none',
              duration: 600
            });
          }
        },
        async getUserinfo(){
          let _this = this;
          let getUserInfo = {
            openId:wx.getStorageSync('userSession').token
          };
          let resp2 = await _this.$post1('admin/getUserInfo',getUserInfo);
          console.log(4324324,resp2);
          if(resp2.data.length > 0 ){
           this.userName = resp2.data[0].userName;
           this.userPhoneNumber = resp2.data[0].phoneNumber;
           this.userEmail = resp2.data[0].userMail;
           if(resp2.data[0].enableCount != null){
             this.enableCount = resp2.data[0].enableCount;
           }
           if(resp2.data[0].startEnableTime != null && resp2.data[0].endEnableTime != null){
             this.enableTime = dateFormat(new Date(resp2.data[0].startEnableTime),'yyyy-MM-dd')+" ~ "+dateFormat(new Date(resp2.data[0].endEnableTime),'yyyy-MM-dd');
           }
           if(resp2.data[0].sex - 1 == 0){
             this.isSexChecked = true;
             this.isFemaleChecked = false;
           }else{
             this.isSexChecked = false;
             this.isFemaleChecked = true;
           }
          }
        },
        radioChange(){
          this.isSexChecked = !this.isSexChecked;
          this.isFemaleChecked = !this.isFemaleChecked;
        }
      },
      mounted(){
        this.getUserinfo();
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
      height: 400px;
      background-color: white;
      border: 8px solid #eeeeee;
      padding: 0px;
      box-sizing: border-box;
      .save-button{
        margin-left:10px;
        margin-right:10px;
        background-color: #009aff;
        margin-top: 20px;
      }
      .evaluate-list{
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        /* display:flex;
         align-items:center;*/
        border-bottom:2px solid ghostwhite;
        .user-center-input{
          display:inline-block;
          vertical-align: middle;
          margin-left: 20px;
          width: 120px;
        }
        .radio-group{
          display:inline-block;
          vertical-align: middle;
          margin-left: 28px;
        }

        .user-image-icons{
          float: left;
          margin-top: 9px;
          margin-left: 20px;
          margin-right: 20px;
        }
        .evaluate-value{
          color: #c5c8cf;
          float: right;
          margin-right: 13px;
        }
        image{
          width: 32px;
          height: 32px;
        }
      }
    }
    .support{
      text-align: center;
     /* font-size: 13px;*/
    }
  }
</style>
