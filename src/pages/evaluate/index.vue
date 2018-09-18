<template>
  <div class="container">
    <div class="form-item" style="border-top: 1px solid #e7e7e7">
      <div class="item-label">详细地址</div>
      <div class="item-value">
        <input class="item-input" type="number" placeholder="房号" style="margin-right:30px;"/>
        <div class="item-input" style="width: 10px;"></div>
        <div class="item-input" style="width: 20px">/</div>
        <input class="item-input" type="number" placeholder="单元"/>
        <div class="item-input" style="width: 20px;">/</div>
        <input class="item-input" type="number" placeholder="楼栋"/>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label">建筑类型</div>
      <div class="item-value">
        <view class="section">
          <picker @change="bindPickerChange" :value="index" :range="array">
            <view class="picker">
              <img  class="item-input" src="../../static/images/right3.png" style="width:30px;height: 30px;margin-top: 10px"/>
              <input class="item-input" disabled type="text" placeholder="请选择" :value="array[index]" style="width:100px;"/>
            </view>
          </picker>
        </view>
      </div>
    </div>
    <div class="form-item">

      <div class="item-label" style="margin-left: 24px"><span style="color: red">*</span>面积</div>
      <div class="item-value">
        <input class="item-input" type="digit" placeholder="面积" style="margin-right:30px;"/>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label">户型</div>
      <div class="item-value">
        <input class="item-input" type="number" placeholder="几卫" style="margin-right:30px;"/>
        <div class="item-input" style="width: 10px;"></div>
        <div class="item-input" style="width: 20px">/</div>
        <input class="item-input" type="number" placeholder="几厅"/>
        <div class="item-input" style="width: 20px;">/</div>
        <input class="item-input" type="number" placeholder="几室"/>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label">室内结构</div>
      <div class="item-value">
        <view class="section">
          <picker @change="bindPickerChange1" :value="index1" :range="array1">
            <view class="picker">
              <img  class="item-input" src="../../static/images/right3.png" style="width:30px;height: 30px;margin-top: 10px"/>
              <input class="item-input" disabled type="text" placeholder="请选择" :value="array1[index1]" style="width:100px;"/>
            </view>
          </picker>
        </view>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label" style="margin-left: 24px"> <span style="color: red">*</span>楼层</div>
      <div class="item-value">
        <input class="item-input" type="number" placeholder="共几层" style="width: 50px;margin-right: 30px;" />
        <div class="item-input" style="width: 10px;"></div>
        <div class="item-input" style="width: 20px">/</div>
        <input class="item-input" type="number" placeholder="第几层" style="width: 50px"/>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label">朝向</div>
      <div class="item-value">
        <view class="section">
          <picker @change="bindPickerChange2" :value="index2" :range="array2">
            <view class="picker">
              <img  class="item-input" src="../../static/images/right3.png"  style="width:30px;height: 30px;margin-top: 10px"/>
              <input class="item-input" disabled type="text" placeholder="请选择" :value="array2[index2]" style="width:100px;"/>
            </view>
          </picker>
        </view>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label">装修程度</div>
      <div class="item-value">
        <view class="section">
          <picker @change="bindPickerChange3" :value="index3" :range="array3">
            <view class="picker">
              <img  class="item-input" src="../../static/images/right3.png" style="width:30px;height: 30px;margin-top: 10px"/>
              <input class="item-input" disabled type="text" placeholder="请选择" :value="array3[index3]" style="width:100px;"/>
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
              <img  class="item-input" src="../../static/images/right3.png" style="width:30px;height: 30px;margin-top: 10px"/>
              <input class="item-input" disabled type="text" placeholder="请选择" :value="array4[index4]" style="width:100px;"/>
            </view>
          </picker>
        </view>
      </div>
    </div>
    <div class="form-item">
      <div class="item-label">权属情况</div>
      <div class="item-value">
        <view class="section">
          <picker @change="bindPickerChange5" :value="index5" :range="array5">
            <view class="picker">
              <img  class="item-input" src="../../static/images/right3.png" style="width:30px;height: 30px;margin-top: 10px"/>
              <input class="item-input" disabled type="text" placeholder="请选择" :value="array5[index5]" style="width:100px;"/>
            </view>
          </picker>
        </view>
      </div>
    </div>
    <button type="primary" size="default" class="save-button-evaluate">立即估价</button>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data() {
      return {
        array: ['美国', '中国', '巴西', '日本'],
        array1: ['美国', '中国', '巴西', '日本'],
        array2: ['美国', '中国', '巴西', '日本'],
        array3: ['美国', '中国', '巴西', '日本'],
        array4: ['美国', '中国', '巴西', '日本'],
        array5: ['美国', '中国', '巴西', '日本'],
        index: '',
        index1: '',
        index2: '',
        index3: '',
        index4: '',
        index5: '',
      }
    },
    methods: {
      bindPickerChange(e){
        this.index = e.mp.detail.value;
      },
      bindPickerChange1(e){
        this.index1 = e.mp.detail.value;
      },
      bindPickerChange2(e){
        this.index2 = e.mp.detail.value;
      },
      bindPickerChange3(e){
        this.index3 = e.mp.detail.value;
      },bindPickerChange4(e){
        this.index4 = e.mp.detail.value;
      },
      bindPickerChange5(e){
        this.index5 = e.mp.detail.value;
      }
    },

    created() {
    },
    mounted(){
    }
  }
</script>

<style lang="scss">
  .container {
    padding: 0;
    width: 100%;
    .save-button-evaluate{
      width: 90%;
      margin-left:10px;
      margin-right:10px;
      background-color: #009aff;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .form-item {
      height: 48px;
      width: 100%;
     /* display: flex;
      align-items: center;*/
      border-bottom: 1px solid #e7e7e7;
      .item-label {
        width: 25%;
        font-size: 14px;
        font-family: "Microsoft YaHei UI";
        margin-left: 30px;
        float: left;
        height: 50px;
        line-height: 50px;
      }
      .item-value{
        /*margin-right: 20px;*/
        width: 60%;
        height: 50px;
        float: right;
        text-align: right;
        .item-input {
          line-height: 50px;
          height: 50px;
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
