<template>
  <div class="history-record">
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
      <div class="result-form-input">
        <div class="result-input-item" v-if="ownStatus" >{{ownStatus}}</div>
        <div class="result-input-item" v-if="area">{{area}}</div>
        <div class="result-input-item" v-if="house_type">{{house_type}}</div>
        <div class="result-input-item" v-if="floor">{{floor}}</div>
        <div class="result-input-item" v-if="orientation">{{orientation}}</div>
        <div class="result-input-item" v-if="degree_decoration">{{degree_decoration}}</div>
        <div class="result-input-item" v-if="build_type">{{build_type}}</div>
      </div>
      <div class="result">
        <div class="result-total-single">
          <span >总价</span>
          <div class="total">{{totalPrice}}</div>
          <span>万元</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div class="result-total-single">
          <span>单价</span>
          <div class="total">{{queryResult11}}</div>
          <span>元/平方米</span>
        </div>
      </div>
      <div class="result-bottom">以上结果仅供参考，具体以实际评估为准</div>
      <div class="history-objection">
        <span class="history-span1" v-if="dissent">结果异议：{{dissent}}</span>
        <span class="history-span2" v-if="expected_price">预期价格：{{expected_price}}万元</span>
      </div>
      <div class="history-objection">
        <span class="history-span1" v-if="dissent_reason">异议理由：{{dissent_reason}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {dateFormat} from '@/utils/index'
    export default {
      data(){
        return{
          queryTime:'',
          detailAddress:'',
          buildYear:'',
          area:'',
          house_type:'',
          floor:'',
          orientation:'',
          degree_decoration:'',
          build_type:'',
          ownStatus:'',
          queryResult11:'',
          totalPrice:'',
          dissent:'',
          expected_price:'',
          dissent_reason:''
        }
      },
      methods:{
        //初始化数据
        async initData(){
          console.log("id:"+this.$root.$mp.query.id);
          let getRcordById = {
            id:this.$root.$mp.query.id
          }
          let resp = await this.$post1('record/getRcordById',getRcordById);
          console.log(4444,resp);
          this.queryTime = dateFormat(new Date(resp.data.queryDate),'yyyy-MM-dd hh:mm:ss');
          this.detailAddress = resp.data.detailAddress;
          this.buildYear =  resp.data.buildYear != ''?resp.data.buildYear+'年':' ';
          this.area =   resp.data.area != '' ?resp.data.area+'m²':' ';
          this.house_type = resp.data.houseType;
          this.floor = resp.data.floor;
          this.orientation = resp.data.orientation;
          this.degree_decoration = resp.data.degreeDecoration;
          this.build_type = resp.data.buildType;
          this.ownStatus = resp.data.ownStatus;
          this.queryResult11 = resp.data.queryResult !=''?resp.data.queryResult:'0';
          this.totalPrice = ((parseFloat(this.queryResult11)*parseFloat(this.area))/10000).toFixed(0);
          if(resp.data.dissent == '0'){
            this.dissent = '偏高';
          }else if(resp.data.dissent == '1'){
            this.dissent = '偏低';
          }
          this.expected_price = resp.data.expectedPrice;
          this.dissent_reason =resp.data.dissentReason;
        },
        //关于公司页面
        toAboutPage(){
          const url = '../about/main';
          wx.navigateTo({ url });
        },
        //意见反馈页面
        toSuggestionPage(){
          const url = '../suggestion/main';
          wx.navigateTo({ url });
        }
      },
      mounted(){
        this.initData();
      }
    }
</script>

<style lang="scss">
  page{
    height: 100%;
    width: 100%;
  }
  .history-record{
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color:#eeeeee ;
    .result-content{
        padding: 0px;
        border: 8px solid #eeeeee;
        height: 100%;
        width: 100%;
        background-color: white;
        box-sizing: border-box;
      .result-img-title{
        width: 100%;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        .result-img{
          width: 150px;
          height: 110px;
        }
      }
      .result-form{
        width: 100%;
        height: 90px;
        .result-form-item{
          margin-left: 30px;
          font-size: 14px;
          height: 25px;
          line-height: 25px;
          color: #cfcfcf;
          .result-label{
            display: inline-block;
          }
          .result-input{
            display: inline-block;
          }
        }
      }
      .result-form-input{
        padding-left: 20px;
        height: 100px;
        .result-input-item{
          font-size: 13px;
          display: inline-block;
          margin-left: 10px;
          margin-bottom: 10px;
          padding: 5px 10px;
          border-radius: 6px;
          color: #888b92;
          background-color: #e7e7e7;
        }
      }
      .result{
        text-align: center;
        .result-total-single{
          margin-bottom: 10px;
          span{
            color: #888b92;
            margin: 0 5px;
            font-size: 15px;
          }
          .total{
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
      .result-bottom{
        font-size: 13px;
        text-align: center;
        color: #cfcfcf;
      }

      .history-objection{
        padding-top: 30px;
        .history-span1{
          font-size: 14px;
          color: #cfcfcf;
          float: left;
          font-weight: bold;
          margin-left: 30px;
          margin-right: 30px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .history-span2{
          font-size: 14px;
          color: #cfcfcf;
          float: right;
          margin-right: 30px;
          font-weight: bold;
        }
      }
    }
  }
</style>
