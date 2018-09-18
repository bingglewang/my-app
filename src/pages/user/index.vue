<template>
  <div class="user-center">
    <div class="user-motto">
      <!--估价列表-->
      <div class="evaluate-list" @click="toList">
        <img src="/static/images/name.png" class="user-image-icons"/>
        <span >姓&nbsp;&nbsp;&nbsp;名</span>
        <span style="color: red">*</span>
        <input class="user-center-input"  placeholder="请输入姓名" style="margin-left: 22px"/>
      </div>
      <!--可用估价次数-->
      <div class="evaluate-list">
        <img src="/static/images/sex.png" class="user-image-icons"/>
        <span>性&nbsp;&nbsp;&nbsp;别</span>
        <radio-group class="radio-group" @change="radioChange">
          男<radio value="" checked="isSexChecked"/>
          女<radio value="" checked="isFemaleChecked"/>
        </radio-group>
      </div>
      <!--可用估价时段-->
      <div class="evaluate-list">
        <img src="/static/images/phone.png" class="user-image-icons"/>
        <span>手机号</span>
        <span style="color: red">*</span>
        <input class="user-center-input"  placeholder="请输入手机号"/>
      </div>
      <!--个人中心-->
      <div class="evaluate-list" @click="toUserInfo">
        <img src="/static/images/mail.png" class="user-image-icons"/>
        <span>邮&nbsp;&nbsp;&nbsp;箱</span>
        <input class="user-center-input"  placeholder="请输入邮箱" style="margin-left: 28px"/>
      </div>
      <button type="primary" size="default" class="save-button">保存</button>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          isSexChecked:true,
          isFemaleChecked:false
        }
      },
      methods:{
        radioChange(){
          this.isSexChecked = !this.isSexChecked;
          this.isFemaleChecked = !this.isFemaleChecked;
        }
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
        border-bottom:4rpx solid ghostwhite;
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
     /* font-size: 13px;*/
    }
  }
</style>
