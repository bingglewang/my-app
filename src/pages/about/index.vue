<template>
  <div class="about">
    <div class="about-content">
      <div class="about-img-title">
        <img src="../../static/images/LOGO.jpg" class="about-img"/>
      </div>
      <div class="about-text">清远市公信房地产土地价格评估有限公司</div>
      <div class="about-info">
        公司简介：<br/>
        <p style="text-indent: 2em;margin-bottom: 20px">
          清远市公信房地产土地价格评估有限公司是依照省市
          有关改制脱钩文件的要求，于二〇〇二年正式脱离清远市
          房产管理局，经广东省建设厅、广东省房地产评估学会、
          清远市工商行政管理局批准，于二〇〇二年十一月十三日
          成立，具有独立法人资格的有限责任公司，法定代表人：
          彭劲，公司现有注册资本金壹佰万元正，具备房地产价格
          评估贰级资格等级，土地价格评估叁级资格、土地代理登
          记人资格。
        </p>
        联系电话：0763-3377423<br/>
        E-mail: gongxin@vip.163.com
      </div>
      <div class="about-wx-code">
       <img src="../../static/images/wxnode.jpg" class="about-img-code"/>
        <div style="font-size: 13px">公司微信号</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  page {
    height: 100%;
    width: 100%;
  }

  .about {
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #eeeeee;
    .about-content {
      padding: 0px;
      border: 8px solid #eeeeee;
      height: 100%;
      width: 100%;
      background-color: white;
      box-sizing: border-box;
      .about-img-title {
        width: 100%;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        .about-img {
          width: 150px;
          height: 110px;
        }
      }
    }
    .about-text {
      text-align: center;
      font-size: 13px;
      color: #0000ae;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .about-info {
      font-size: 13px;
      width: 326px;
      margin: 0 auto;
    }
    .about-wx-code {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top:30px;
      .about-img-code {
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
