<template>
  <div class="record-page">
    <mp-search
      @confirm="onSearchConfirm"
      @change="onSearchChange"
      placeholder="输入楼盘名/地址"
      v-model="inputSearch"
    />
    <div class="content-container">
      <div class="content-title">我的查询记录</div>
      <div class="content-list-card" v-for="(item,index) in recordList " :index="index" :key="index" :data-index="index"
           @click="toResultPage(item.id)">
        <div class="content-top">
          <div class="index">
            {{index+1}}
          </div>
          <div class="name hidden-label-text">
            {{item.detailAddress}}
          </div>
        </div>
        <div class="content-middle">
          <div style="margin-top:10px">
            <div class="state" v-if="item.area">{{item.area}}平方米</div>
            <div class="state" v-if="item.queryResult">{{item.back5}}万</div>
            <div class="state" v-if="item.floor">{{item.floor}}</div>
            <div class="state" v-if="item.houseType">{{item.houseType}}</div>
            <div class="state" v-if="item.orientation">{{item.orientation}}</div>
          </div>
        </div>
        <div class="content-bottom">{{item.queryDate}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import MpSearch from 'mp-weui/packages/search'
  import {dateFormat} from '@/utils/index'
  export default {
    components: {
      MpSearch
    },
    data() {
      return {
        inputSearch: '',
        currentPage: 1,
        recordList: [],
        isMore: '1'
      }
    },
    mounted() {
      this.initData();
    },
    onShow(){
      console.log("出现");
      this.inputSearch = '';
    },
    methods: {
      //历史记录页面
      toResultPage(id) {
        console.log(111, id);
        const url = '../history/main?id=' + id;
        wx.navigateTo({url});
      },
      onSearchConfirm(val) {
        console.log(1111, this.inputSearch)
        this.inputSearch = val;
        this.initData();
      },
      onSearchChange(val) {
        console.log(3232, val)
        this.inputSearch = val;
        this.initData();
      },
      async initData() {
        // 显示顶部刷新图标
        wx.showNavigationBarLoading();
        console.log("下拉刷新")
        var that = this;
        let url = "record/getRecordByPage";
        let data = {
          currentPage: 1,
          address: this.inputSearch,
          openId:wx.getStorageSync('userSession').token,
        };
        let resp = await that.$post1(url, data);
        this.isMore = resp.isMore;
        this.recordList = resp.items;
        this.recordList.forEach((item,index)=>{
          item.queryDate = dateFormat(new Date(item.queryDate),'yyyy-MM-dd hh:mm:ss')
        })
        console.log(333, resp);
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
      }
    },
    // 下拉刷新
    onPullDownRefresh: async function () {
      // 显示顶部刷新图标
      wx.showNavigationBarLoading();
      console.log("下拉刷新")
      var that = this;
      let url = "record/getRecordByPage";
      let data = {
        currentPage: 1,
        address: this.inputSearch,
        openId:wx.getStorageSync('userSession').token,
      };
      let resp = await that.$post1(url, data);
      this.isMore = resp.isMore;
      this.recordList = resp.items;
      this.recordList.forEach((item,index)=>{
        item.queryDate = dateFormat(new Date(item.queryDate),'yyyy-MM-dd hh:mm:ss')
      })
      console.log(333, resp);
      // 隐藏导航栏加载框
      wx.hideNavigationBarLoading();
      // 停止下拉动作
      wx.stopPullDownRefresh();
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: async function () {
      var that = this;
      if (this.isMore - 1 == 0) {
        console.log("到达底部上拉加载更多")
        // 显示加载图标
        wx.showLoading({
          title: '玩命加载中',
        })
        that.currentPage = that.currentPage + 1;
        let url = "/record/getRecordByPage";
        let data = {
          currentPage: that.currentPage,
          address: this.inputSearch,
          openId:wx.getStorageSync('userSession').token,
        };
        let resp = await that.$post1(url, data);
        this.isMore = resp.isMore;
        this.recordList = this.recordList.concat(resp.items);
        this.recordList.forEach((item,index)=>{
          item.queryDate = dateFormat(new Date(item.queryDate),'yyyy-MM-dd hh:mm:ss')
        })
        console.log(4444, resp);
        // 隐藏加载框
        wx.hideLoading();
      } else {
        wx.showToast({
          title: '没有更多数据了',
          icon: 'none',
          duration: 600
        });
      }
    },

  }
</script>

<style lang="scss">
  page {
    height: 100%;
    width: 100%;
  }

  .record-page {
    width: 100%;
    height: 100%;
    .content-container {
      width: 100%;
      height: calc(100% - 50px);
      .content-title {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #e7e7e7;
        display: flex;
        align-items: center;
        margin-left: 10px;
        color: #95989f;
      }
      .content-list-card {
        width: 100%;
        height: 155px;
        box-sizing: border-box;
        border-bottom: 1px solid #e7e7e7;
        .content-top {
          width: 100%;
          height: 30px;
          margin-left: 10px;
          line-height: 30px;
          border-bottom: 2px solid ghostwhite;
          font-size: 13px;
          .index {
            float: left;
            width: 20px;
            height: 20px;
            margin-top: 5px;
            border-radius: 10px;
            color: #fff;
            background-color: #3992d0;
            text-align: center;
            line-height: 20px;
          }
          .name {
            float: left;
            margin-top: 6px;
            height: 20px;
            line-height: 20px;
            color: #3992d0;
          }
          .hidden-label-text {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: calc(100% - 50px);
          }
        }
        .content-middle {
          width: 100%;
          height: 80px;
          box-sizing: border-box;
          .state {
            /*width: 105px;*/
           /* height: 35px;
            line-height: 35px;*/
            padding: 5px 10px;
            text-align: center;
            border-radius: 6px;
            color: #656565;
            margin-left: 10px;
            background-color: #e7e7e7;
            display: inline-block;
            font-size: 13px;
            margin-bottom: 8px;
           /* box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);*/
          }
        }
        .content-bottom {
          width: 100%;
          height: 30px;
          margin-left: 10px;
          color: #cfcfcf;
          line-height: 30px;
          border-top: 2px solid ghostwhite;
          font-size: 13px;
        }
      }
    }
  }
</style>
