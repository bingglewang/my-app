<template>
  <div class="container">
    <div class="ad_popError" v-if="popErrorMsg" >{{popErrorMsg}}</div>
    <div class="form-item" style="border-top: 2px solid ghostwhite">
      <div class="item-label" style="margin-left: 24px"><span style="color: red">*</span>楼盘</div>
      <div class="item-value">
        <input class="item-input" type="text" placeholder="请输入楼盘或者地址" style="margin-right:30px;width: 200px"
               v-model="loupan"/>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label" style="margin-left: 24px"><span style="color: red">*</span>所属区域</div>
      <div class="item-value">
        <view class="section">
          <picker @change="bindPickerChange5" :value="index5" :range="array5">
            <view class="picker">
              <img class="item-input" src="../../static/images/right3.png"
                   style="width:30px;height: 30px;margin-top: 6px"/>
              <input class="item-input" disabled type="text" placeholder="请选择" :value="array5[index5]"
                     style="width:100px;"/>
            </view>
          </picker>
        </view>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label">楼栋</div>
      <div class="item-value">
        <input class="item-input" type="text" placeholder="请输入楼栋" style="margin-right:30px;width: 200px" maxlength="10"
               v-model="loudong"/>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label" style="margin-left: 24px"><span style="color: red">*</span>楼层</div>
      <div class="item-value">
        <input class="item-input" type="number" placeholder="共几层" style="width: 50px;margin-right: 30px;" maxlength="2"
               v-model="louceng1"/>
        <div class="item-input" style="width: 10px;"></div>
        <div class="item-input" style="width: 20px">/</div>
        <input class="item-input" type="number" placeholder="第几层" style="width: 50px" maxlength="2" v-model="louceng2"/>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label">房号</div>
      <div class="item-value">
        <input class="item-input" type="number" placeholder="请输入房号" style="margin-right:30px;width: 200px"
               maxlength="10"
               v-model="fanghao"/>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label" style="margin-left: 24px"><span style="color: red">*</span>户型</div>
      <div class="item-value">
        <input class="item-input" type="number" placeholder="几卫" style="margin-right:30px;" v-model="huxing1"
               maxlength="2"/>
        <div class="item-input" style="width: 10px;"></div>
        <div class="item-input" style="width: 20px">/</div>
        <input class="item-input" type="number" placeholder="几厅" v-model="huxing2" maxlength="2"/>
        <div class="item-input" style="width: 20px;">/</div>
        <input class="item-input" type="number" placeholder="几室" v-model="huxing3" maxlength="2"/>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label" style="margin-left: 24px"><span style="color: red">*</span>朝向</div>
      <div class="item-value">
        <view class="section">
          <picker @change="bindPickerChange2" :value="index2" :range="array2">
            <view class="picker">
              <img class="item-input" src="../../static/images/right3.png"
                   style="width:30px;height: 30px;margin-top: 6px"/>
              <input class="item-input" disabled type="text" placeholder="请选择"
                     :value="array2[index2]" style="width:100px;"/>
            </view>
          </picker>
        </view>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label" style="margin-left: 24px"><span style="color: red">*</span>建筑面积</div>
      <div class="item-value">
        <input class="item-input" type="digit" placeholder="请输入建筑面积" style="margin-right:30px;width: 200px"
               maxlength="20"
               v-model="mianji"/>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label" style="margin-left: 24px"><span style="color: red">*</span>装修程度</div>
      <div class="item-value">
        <view class="section">
          <picker @change="bindPickerChange3" :value="index3" :range="array3">
            <view class="picker">
              <img class="item-input" src="../../static/images/right3.png"
                   style="width:30px;height: 30px;margin-top: 6px"/>
              <input class="item-input" disabled type="text" placeholder="请选择" :value="array3[index3]"
                     style="width:100px;"/>
            </view>
          </picker>
        </view>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label">外墙装饰</div>
      <div class="item-value">
        <view class="section">
          <picker @change="bindPickerChange1" :value="index1" :range="array1">
            <view class="picker">
              <img class="item-input" src="../../static/images/right3.png"
                   style="width:30px;height: 30px;margin-top: 6px"/>
              <input class="item-input" disabled type="text" placeholder="请选择" :value="array1[index1]"
                     style="width:100px;"/>
            </view>
          </picker>
        </view>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label">建筑年代</div>
      <div class="item-value">
        <view class="section">
          <picker @change="bindPickerChange4" :value="index4" :range="array4">
            <view class="picker">
              <img class="item-input" src="../../static/images/right3.png"
                   style="width:30px;height: 30px;margin-top: 6px"/>
              <input class="item-input" disabled type="text" placeholder="请选择" :value="array4[index4]"
                     style="width:100px;"/>
            </view>
          </picker>
        </view>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label">备注</div>
      <div class="item-value">
        <input class="item-input" type="text" placeholder="请输入备注" style="margin-right:30px;width: 200px" maxlength="100"
               v-model="beizhu"/>
      </div>
    </div>
    <button type="primary" size="default" class="save-button-evaluate" @click="toResultPage">价格查询</button>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        popErrorMsg: '',
        loupan: '',                          //楼盘
        loudong: '',                          //楼栋
        louceng1: '',                          //楼层
        louceng2: '',
        fanghao: '',                            //房号
        huxing1: '',                            //户型
        huxing2: '',
        huxing3: '',
        chaoxiang: '',                        //朝向
        mianji: '',                          //面积
        zhuangxiuchengdu: '',                    //装修程度
        waiqiangzhuanshi: '',                   //外墙装饰
        jianzhuniandai: '',                    //建筑年代
        distinct:'',                           //房产所属区域
        beizhu: '',                            //备注
        array1: ['马赛克','条形砖','锦砖','方砖', '外墙涂料', '水刷石', '清水砖墙', '玻璃幕墙', '石材'],
        array2: ['南北', '南', '东南', '西南', '东西', '东', '西', '东北', '西北', '北'],
        array3: ['毛坯', '简单装修', '普通装修', '中等装修', '精装修', '豪华装修'],
        array4: this.generateArrayYear(),
        array5: ['清城区','佛冈县','阳山县','清新区','英德市','连州市','连南瑶族自治县','连山瑶族自治县'],
        index1: '',
        index2: '',
        index3: '',
        index4: '',
        index5: ''
      }
    },
    methods: {
      ohShitfadeOut() {
        var fadeOutTimeout = setTimeout(() => {
          this.popErrorMsg = '';
          clearTimeout(fadeOutTimeout);
        }, 4000);
      }
      ,
      initData() {
        this.loupan = '';
        this.loudong = '';
        this.louceng1 = '';
        this.louceng2 = '';
        this.fanghao = '';
        this.huxing1 = '';
        this.huxing2 = '';
        this.huxing3 = '';
        this.chaoxiang = '';
        this.mianji = '';
        this.zhuangxiuchengdu = '';
        this.waiqiangzhuanshi = '';
        this.jianzhuniandai = '';
        this.beizhu = '';
        this.index1 = '';
        this.index2 = '';
        this.index3 = '';
        this.index4 = '';
        this.index5 = '';
      }
      ,
      generateArrayYear() {
        let resultArray = [];
        let nowYear = new Date().getFullYear();
        for (let i = 1940; i <= nowYear; i++) {
          resultArray.push(i.toString());
        }
        return resultArray;
      }
      ,
      bindPickerChange1(e) {
        this.index1 = e.mp.detail.value;
        this.waiqiangzhuanshi = this.array1[this.index1];
      }
      ,
      bindPickerChange2(e) {
        this.index2 = e.mp.detail.value;
        this.chaoxiang = this.array2[this.index2];
      }
      ,
      bindPickerChange3(e) {
        this.index3 = e.mp.detail.value;
        this.zhuangxiuchengdu = this.array3[this.index3];
      }
      ,
      bindPickerChange4(e) {
        this.index4 = e.mp.detail.value;
        this.jianzhuniandai = this.array4[this.index4];
      }
      ,
      bindPickerChange5(e) {
        this.index5 = e.mp.detail.value;
        this.distinct = this.array5[this.index5];
      },
      async toResultPage() {
        if(parseInt(this.louceng2) > parseInt(this.louceng1)){
          this.popErrorMsg = '总楼层需大于等于所在楼层';
          this.ohShitfadeOut();
          return;
        }
        // 显示加载图标
        let _this = this;
        if (this.loupan != '' && this.mianji != '' && this.louceng1 != '' && this.louceng2 != '' && this.huxing1 != '' && this.huxing2 != '' && this.huxing3 != '' && this.chaoxiang != '' && this.zhuangxiuchengdu != '' && this.distinct != '') {
          wx.showLoading({
            title: '努力查询中',
          })
          if (wx.getStorageSync('userSession').token == null || wx.getStorageSync('userSession').token == undefined) {
            //利用code从后台获取open_id和session_key
            wx.login({
              success: async function (reslogin) {
                if (reslogin.code) {
                  let url = "api/wx/session";
                  let data = {
                    code: reslogin.code
                  }
                  let res1 = await _this.$post(url, data);
                  wx.setStorageSync('userSession', res1)
                }
              }
            })
          }
          let queryRecord = {
            openId: wx.getStorageSync('userSession').token,
            detailAddress: this.loupan,
            ownStatus: this.loudong,
            floor: this.louceng1 != '' && this.louceng2 != '' ? this.louceng2 + '层/' + this.louceng1 + '层' : '',
            indoorStructure: this.fanghao,
            houseType: this.huxing1 != '' && this.huxing2 != '' && this.huxing3 != '' ? this.huxing3 + '室/' + this.huxing2 + '厅/' + this.huxing1 + '卫' : '',
            orientation: this.chaoxiang,
            area: this.mianji,
            degreeDecoration: this.zhuangxiuchengdu,
            buildType: this.waiqiangzhuanshi,
            buildYear: this.jianzhuniandai,
            back1: this.beizhu,
            queryDate: new Date(),
            back3:this.distinct
          };
          let isUserPower = {
            openId: wx.getStorageSync('userSession').token
          }
          let userPowerResp = await  this.$post1('admin/isUserQueryPower', isUserPower);
          if (userPowerResp.status == 0) {
            let respAddress = await this.$post1('evaluate/getHouseByAddress', queryRecord);
            if (respAddress.status == 0) {
              let builder_year =  respAddress.builder_year;
              if(builder_year != '' && builder_year != null){
                queryRecord.buildYear = builder_year.split(",")[0];
              }
              queryRecord.queryResult = parseFloat(respAddress.data).toFixed(0);
              /*let resp = await this.$post1('record/insertRecordByOpenid', queryRecord);*/
              queryRecord.id = respAddress.recordId;
              wx.setStorageSync('queryRecord', queryRecord);
              // 隐藏加载框
              wx.hideLoading();
              //查询结果页面
              this.initData();
              const url = '../result/main';
              wx.navigateTo({url});
            } else {
              // 隐藏加载框
              wx.hideLoading();
             /* wx.showToast({
                title: respAddress.msg,
                icon: 'none',
                duration: 600
              });*/
              this.popErrorMsg = respAddress.msg;
              this.ohShitfadeOut();
            }
          } else {
            // 隐藏加载框
            wx.hideLoading();
            this.popErrorMsg = userPowerResp.msg;
            this.ohShitfadeOut();
           /* wx.showToast({
              title: userPowerResp.msg,
              icon: 'none',
              duration: 600
            });*/
          }
        } else {
          // 隐藏加载框
          wx.hideLoading();
          this.popErrorMsg = '请填写必要信息';
          this.ohShitfadeOut();
        }
      }
    },
    created() {
    }
    ,
    mounted() {
      this.initData();
    }
  }
</script>

<style lang="scss">
  .container {
    padding: 0;
    width: 100%;
    .ad_popError {
      width: 250px;
      background: #de352d;
      color: #fff;
     /* height: 35px;*/
      line-height: 29px;
      font-size: 15px;
      text-align: center;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 3;
    }
    .save-button-evaluate {
      width: 90%;
      margin-left: 10px;
      margin-right: 10px;
      background-color: #009aff;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .form-item {
      height: 42px;
      width: 100%;
      /* display: flex;
       align-items: center;*/
      border-bottom: 2px solid ghostwhite;
      .item-label {
        width: 25%;
        font-size: 14px;
        font-family: "Microsoft YaHei UI";
        margin-left: 30px;
        float: left;
        height: 42px;
        line-height: 42px;
      }
      .item-value {
        /*margin-right: 20px;*/
        width: 60%;
        height: 42px;
        float: right;
        text-align: right;
        .item-input {
          line-height: 42px;
          height: 42px;
          width: 40px;
          font-size: 14px;
          float: right;
          /* text-align: right;*/
          font-family: "Microsoft YaHei UI";
        }
      }
    }
  }
</style>
