<template>
  <div>
    <div class="universal_box">
      <ul class="clearfix">
        <li>
          <div class="boxall" id="echart1" style="height: 84vh">
            <div class="allnav"></div>
            <div class="boxfoot"></div>
            <div class="map6" id="map_relation"></div>
          </div>
        </li>
        <li>
          <div class="boxall" id="echart4" style="height: 84vh">
            <div class="allnav"></div>
            <div class="boxfoot"></div>
            <div class="map5" id="map"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  import "@/styles/comon0.css";
  import { echarts_7,echarts_8 } from "@/js/universal_echarts.js"

  export default {
    mounted() {
      echarts_7();
      echarts_8();
    },
    methods: {

    },
  };
</script>

<style scoped>
</style>
