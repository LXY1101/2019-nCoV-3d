<template>
  <div>
    <header class="header left">
      <div class="left nav">
        <ul>
          <li><a @click="tohome()" :class="{nav_active: active === '/flatmap/china'}">采集概况</a></li>
          <li><a @click="toInfomation()" :class="{nav_active: active === '/infomation'}">态势分析</a></li>
          <li><a @click="totrend()" :class="{nav_active: active === '/universal'}">扩散路径</a></li>
        </ul>
      </div>
      <div class="left nav title" style="">
        <h2><strong>新型冠状病毒疫情数据可视化</strong></h2>
      </div>
      <div>
        <span class="span_icon" @click="showTime()" v-if="active==='/flatmap/china'">回顾</span>
      </div>
    </header>
  </div>
</template>
<script>

export default {

  data() {
    return {
      active: "/flatmap/china",
    };
  },
  mounted() {

  },
  methods: {
    tohome() {
      this.$router
      .push({ name: "flatmap", params: { area: "china" } })
      .catch(err => {
        err;
      });
      this.active = '/flatmap/china'

    },
    totrend(){
      this.$router
        .push({ name: "universal"})
        .catch((err) => {
          err;
        });
        this.active = '/universal'
    },
    toInfomation(){
      this.$router
        .push({ name: "infomation"})
        .catch((err) => {
          err;
        });
      this.active = '/infomation'
    },
    showTime(){
      this.$parent.showTime();
    }
  },
  watch: {

  },

};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 12vh;
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  font-size:18px;
  background: url(../images/head_bg.png) no-repeat center center;
  background-size: 100% 100%;
}
.left {
  float: left;
}

.nav {
  width: 35%;
}

.nav > ul > li {
  display: inline-block;
  width: 120px;
  text-align: center;
  height: 4vh;
  position: relative;
  line-height: 4vh;
  margin-top: 15px;
  box-sizing: border-box;
  border-radius: 5px;
}

.nav > ul > li:hover {
  border-bottom: 4px solid #0399fd;
  box-shadow: -10px 0px 15px #034c6a inset,
              0px -10px 15px #034c6a inset,
              10px 0px 15px #034c6a inset,
              0px 10px 15px #034c6a inset;
  box-sizing: border-box;
}
.nav > ul > li > a:hover {
  color: #ffffff !important;
}
.nav > ul > li > a {
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
  display: block;
}
.li_ul {
  position: absolute;
  background-color: #030829;
  width: 100%;
  display: none;
  z-index: 999;
}
.nav_active{
   color: #338bff !important;
}
.span_icon{
    line-height: 8vh;
    float: right;
    color: #ffffff;
    margin-right: 40px;
}
.title{
  line-height: 80px;
  color:#ffffff;
}
</style>
