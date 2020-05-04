<template>
  <div class="suggestion-feed-back">
    <div class="result-content">
      <div class="result-img-title">
        <img src="../../static/images/LOGO.jpg" class="result-img"/>
      </div>
      <div class="result-form">
        <div class="result-form-item">
          <div class="result-label">评估时间：</div>
          <div class="result-input">{{queryTime}}</div>
        </div>
        <div class="result-form-item">
          <div class="result-label">房产位置：</div>
          <div class="result-input">{{detailAddress}}</div>
        </div>
        <div class="result-form-item">
          <div class="result-label">建成年份：</div>
          <div class="result-input">{{buildYear}}</div>
        </div>
      </div>
      <div class="result">
        <div class="result-total-single">
          <span>总价</span>
          <div class="total">{{totalPrice}}</div>
          <span>万元</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div class="result-total-single">
          <span>单价</span>
          <div class="total">{{queryResult}}</div>
          <span>元/平方米</span>
        </div>
      </div>
      <div class="suggestion-result-objection">结果异议</div>
      <div class="suggestion-result-radio">
        <div class="radio-button" @click="changeBackColor" v-if="dissentColor"
             style="background-color: #007fd5;color: #fff">偏高
        </div>
        <div class="radio-button" @click="changeBackColor" v-else>偏高</div>
        <div class="radio-button" @click="changeBackColor1" v-if="dissentColor1"
             style="background-color: #007fd5;color: #fff">偏低
        </div>
        <div class="radio-button" @click="changeBackColor1" v-else>偏低</div>
      </div>
      <div class="expected-price">
        <span class="suggestion-label">预期价格</span>
        <input type="number" maxlength="20" class="suggestion-input" v-model="expectedPrice"/>
        <span class="suggestion-label">万元</span>
      </div>
      <div class="suggestion-objection-reason">异议理由</div>
      <div class="suggestion-text">
        <textarea class="suggestion-area" maxlength="100" v-model="dissentReason"></textarea>
      </div>
      <div class="suggestion-save-button">
        <button class="save-button" @click="saveSuggestion">意见反馈</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {dateFormat} from '@/utils/index'

  export default {
    data() {
      return {
        dissentColor: false,
        dissentColor1: false,
        queryTime: '',
        detailAddress: '',
        buildYear: '',
        area: '',
        queryResult: '',
        totalPrice: '',
        dissent: '',
        expectedPrice: '',
        dissentReason: '',
        recordId:''
      }
    },
    methods: {
      //提交反馈
      async saveSuggestion() {
        let _this = this;
        let saveSuggestion = {
          id:this.recordId,
          dissent: this.dissent,
          expectedPrice:this.expectedPrice,
          dissentReason:this.dissentReason
        };
        // 显示加载图标
        wx.showLoading({
          title: '提交中',
        })
        let resp = await this.$post1('record/updateRecordById',saveSuggestion);
        // 隐藏加载框
        wx.hideLoading();
        wx.showToast({
          title: '提交成功',//提示文字
          duration:2000,//显示时长
          mask:true,//是否显示透明蒙层，防止触摸穿透，默认：false
          icon:'success', //图标，支持"success"、"loading"
          success:function(){
            const url = '../suggestionResult/main?suggestId='+_this.recordId;
            wx.reLaunch({url});
            /*wx.navigateTo({url});*/
              _this.dissent= '';
              _this.expectedPrice= '';
              _this.dissentReason= '';
              _this.dissentColor = false;
              _this.dissentColor1 = false;
          },//接口调用成功
        })
      },
      //初始化数据
      initSuggestionData() {
        let SuggestResult = wx.getStorageSync('queryRecord');
        this.queryTime = dateFormat(new Date(SuggestResult.queryDate), 'yyyy-MM-dd hh:mm:ss');
        this.detailAddress = SuggestResult.detailAddress;
        this.buildYear = SuggestResult.buildYear != '' ? SuggestResult.buildYear + '年' : ' ';
        this.area = SuggestResult.area;
        this.queryResult = SuggestResult.queryResult != '' ? SuggestResult.queryResult : '0';
        this.totalPrice = ((parseFloat(this.queryResult) * parseFloat(this.area))/10000).toFixed(0);
        this.recordId = SuggestResult.id;
      },
      changeBackColor() {
        this.dissentColor = !this.dissentColor;
        if (this.dissentColor) {
          this.dissentColor1 = false;
        }
        if (this.dissentColor && !this.dissentColor1) {
          this.dissent = '0';
        } else if (!this.dissentColor && this.dissentColor1) {
          this.dissent = '1';
        }else{
          this.dissent = '';
        }
      },
      changeBackColor1() {
        this.dissentColor1 = !this.dissentColor1;
        if (this.dissentColor1) {
          this.dissentColor = false;
        }
        if (this.dissentColor && !this.dissentColor1) {
          this.dissent = '0';
        } else if (!this.dissentColor && this.dissentColor1) {
          this.dissent = '1';
        }else{
          this.dissent = '';
        }
      },
      toAboutPage() {
        const url = '../about/main';
        wx.navigateTo({url});
      }
    },
    mounted() {
      this.initSuggestionData();
    }
  }
</script>

<style lang="scss">
  page {
    height: 100%;
    width: 100%;
  }

  .suggestion-feed-back {
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #eeeeee;
    .result-content {
      padding: 0px;
      border: 8px solid #eeeeee;
      height: 100%;
      width: 100%;
      background-color: white;
      box-sizing: border-box;
      .result-img-title {
        width: 100%;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        .result-img {
          width: 150px;
          height: 110px;
        }
      }
      .result-form {
        width: 100%;
        height: 90px;
        .result-form-item {
          margin-left: 30px;
          font-size: 14px;
          height: 25px;
          line-height: 25px;
          color: #cfcfcf;
          .result-label {
            display: inline-block;
          }
          .result-input {
            display: inline-block;
          }
        }
      }
      .result {
        text-align: center;
        .result-total-single {
          margin-bottom: 10px;
          span {
            color: #888b92;
            margin: 0 5px;
            font-size: 15px;
          }
          .total {
            font-size: 13px;
            display: inline-block;
            padding: 5px 10px;
            border-radius: 6px;
            color: #59aaff;
            background-color: #e7e7e7;
            font-weight: bold;
            width: 60px;
          }
        }
      }
      .suggestion-result-objection {
        font-size: 14px;
        color: #cfcfcf;
        margin-left: 30px;
      }
      .suggestion-result-radio {
        padding-left: 20px;
        padding-top: 10px;
        .radio-button {
          font-size: 13px;
          display: inline-block;
          padding: 5px 10px;
          border-radius: 6px;
          color: #979797;
          background-color: #e7e7e7;
          font-weight: bold;
          width: 60px;
          margin-left: 10px;
          text-align: center;
        }
      }
      .expected-price {
        padding-left: 20px;
        display: flex;
        align-items: center;
        padding-top: 15px;
        .suggestion-label {
          font-size: 13px;
          color: #cfcfcf;
          margin: 0 10px;
        }
        .suggestion-input {
          width: 150px;
          font-size: 14px;
          display: inline-block;
          border: 1px solid #cfcfcf;
          border-radius: 4px;
        }
      }
      .suggestion-objection-reason {
        font-size: 14px;
        color: #cfcfcf;
        margin-left: 30px;
        margin-top: 10px;
      }
      .suggestion-text {
        display: flex;
        justify-content: center;
        .suggestion-area {
          border: 1px solid #cfcfcf;
          height: 60px;
          margin-top: 10px;
          font-size: 14px;
          border-radius: 4px;
        }
      }
      .suggestion-save-button {
        display: flex;
        justify-content: center;
        .save-button {
          margin-top: 20px;
          background-color: #1692c8;
          color: white;
          float: left;
          font-size: 13px;
          padding: 0px 30px;
          border-radius: 6px;
        }
      }
    }
  }
</style>
