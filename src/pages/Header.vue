<template>
  <div>
    <header class="header left">
      <div class="left nav">
        <ul>
          <li><a @click="tohome()" :class="{nav_active: active == '/flatmap/china'}">采集概况</a></li>
          <li><a @click="toInfomation()" :class="{nav_active: active == '/infomation'}">实时数据</a></li>
          <li><a @click="totrend()" :class="{nav_active: active == '/trend'}">趋势分析</a></li>
        </ul>
      </div>
      <div class="left nav title" style="">
        <h2><strong>新型冠状病毒疫情数据可视化</strong></h2>
      </div>
      <div>
        <span class="span_icon" @click="showTime()">回顾</span>
      </div>
    </header>
  </div>
</template>
<script>
import moment from "moment";

export default {
      
  data() {
    return {
      active: "/flatmap/china",
      // areaName: "china",
      // deathrate: 0,
      // count: {
      //   confirmedCount: 0,
      //   suspectedCount: 0,
      //   curedCount: 0,
      //   deadCount: 0,
      //   updateTime: 0,
      // },
      // dateTime: {
      //   date: "",
      //   day: "",
      //   time: "",
      // },
      // dayMap: ["日", "一", "二", "三", "四", "五", "六"],
    };
  },
  mounted() {
    // this.$root.$on("scene.loaded", () => {
    //   this._earth = this.$root._earth;
    // });

    // this.updateChart();

    // this.timer = setInterval(() => {
    //   this.dateTime.date = moment().format("YYYY/M/D");
    //   this.dateTime.day = this.dayMap[moment().day()];
    //   this.dateTime.time = moment().format("HH:mm:ss");
    // }, 1000);
  },
  methods: {
    // toWorld() {
    //   this.$router
    //     .push({ name: "beammap", params: { area: "world" } })
    //     .catch((err) => {
    //       err;
    //     });

    //   this._earth.cameraViewManager.globe.flyTo();
    //   this._earth.cameraFlight.rotateGlobe.start();
    // },
    tohome() {
      this.$router
      .push({ name: "flatmap", params: { area: "china" } })
      .catch(err => {
        err;
      });
      this.active = '/flatmap/china'
      // this._earth.cameraViewManager.china.flyTo();
      // this._earth.cameraFlight.rotateGlobe.cancel();
    },
    // updateChart() {
    //   this.$root._dataserver
    //     .loadOverall(this.$root.currentArea)
    //     .then((data) => {
    //       this.count = data;
    //       this.deathrate =
    //         (
    //           (this.count.deadCount /
    //             (this.count.confirmedCount + this.count.curedCount)) *
    //           100
    //         ).toFixed(2) + "%";
    //     });
    // },
    totrend(){
      this.$router
        .push({ name: "trend"})
        .catch((err) => {
          err;
        });
        this.active = '/trend'
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
    // "$root.currentArea"(v) {
    //   this.areaName = v;
    //   this.updateChart();
    // },
  },
  filters: {
    // f_time(ut) {
    //   return moment(new Date(ut)).format("MM月DD日HH时");
    // },
    // f_short(fn) {
    //   const areaMap = {
    //     黑龙江省: "黑龙江",
    //     宁夏回族自治区: "宁夏",
    //     广西壮族自治区: "广西",
    //     内蒙古自治区: "内蒙古",
    //     新疆维吾尔自治区: "新疆",
    //     西藏自治区: "西藏",
    //     香港特别行政区: "香港",
    //     澳门特别行政区: "澳门",
    //   };

    //   return areaMap[fn] || fn;
    // },
  },
  computed: {
    // areaType() {
    //   if (this.areaName == "china" || this.areaName == "world")
    //     return this.areaName;
    //   return "province";
    // },
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
  height: 80px;
  background-color: #0000008a;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  font-size:18px;
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
  height: 50px;
  position: relative;
  line-height: 50px;
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
   color: #03d8da !important;
}
.span_icon{
    line-height: 80px;
    float: right;
    color: #ffffff;
    margin-right: 40px;
}
.title{
  line-height: 80px;
color:#ffffff
}
</style>
