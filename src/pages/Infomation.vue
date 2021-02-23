<template>
  <div>
    <div class="mainbox">
      <ul class="clearfix">
        <li>
          <div class="boxall" id="echart1" style="height: 28vh">
            <div class="alltitle">模块标题样式</div>
            <div class="allnav"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" id="echart2" style="height: 28vh">
            <div class="alltitle">模块标题样式</div>
            <div class="allnav"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 28vh">
            <div style="height: 100%; width: 100%">
              <div class="sy" id="fb1"></div>
              <div class="sy" id="fb2"></div>
              <div class="sy" id="fb3"></div>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li>
          <div class="bar">
            <div class="barbox">
              <ul class="clearfix">
                <li class="pulll_left counter">12581189</li>
                <li class="pulll_left counter">3912410</li>
              </ul>
            </div>
            <div class="barbox2">
              <ul class="clearfix">
                <li class="pulll_left">累计确诊</li>
                <li class="pulll_left">累计治愈</li>
              </ul>
            </div>
          </div>
          <div class="map">
            <div class="map1"><img src="@/images/lbx.png" /></div>
            <div class="map2"><img src="@/images/jt.png" /></div>
            <div class="map3"><img src="@/images/map.png" /></div>
            <div class="map4" id="map_1"></div>
          </div>
        </li>
        <li>
          <div class="boxall" id="echart4" style="height: 28vh">
            <div class="alltitle">模块标题样式</div>
            <div class="allnav"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" id="echart5" style="height: 28vh">
            <div class="alltitle">模块标题样式</div>
            <div class="allnav"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" id="echart6" style="height: 28vh">
            <div class="alltitle">模块标题样式</div>
            <div class="allnav"></div>
            <div class="boxfoot"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "@/styles/comon0.css";
import {
  echarts_1,
  echarts_2,
  echarts_5,
  echarts_4,
  echarts_6,
  echarts_31,
  echarts_32,
  echarts_33,
} from "@/js/js.js";
import { map_1 } from "@/js/area_echarts.js"

export default {
  mounted() {
    map_1();
    echarts_1();
    echarts_2();
    echarts_5();
    echarts_4();
    echarts_6();
    echarts_31();
    echarts_32();
    echarts_33();
  },
  methods: {
   
  },
};
</script>

<style scoped>
</style>
