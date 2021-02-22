<template>
  <div>
    <div class="mainbox">
      <ul class="clearfix">
        <li>
          <div class="boxall" id="echart1" style="height: 28vh">
            <div class="alltitle">模块标题样式</div>
            <div class="allnav" ></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" id="echart2" style="height: 28vh">
            <div class="alltitle">模块标题样式</div>
            <div class="allnav"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 28vh">
            <div style="height:100%; width: 100%;">
              <div class="sy" id="fb1"></div>
              <div class="sy" id="fb2"></div>
              <div class="sy" id="fb3"></div>
            </div>
            <div class="boxfoot">

            </div>
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
                <li class="pulll_left">2018年总收入情况</li>
                <li class="pulll_left">2018年总支出情况</li>
              </ul>
            </div>
          </div>
          <div class="map">
            <div class="map1"><img src="@/images/lbx.png"></div>
            <div class="map2"><img src="@/images/jt.png"></div>
            <div class="map3"><img src="@/images/map.png"></div>
            <div class="map4" id="map_1"></div>
          </div>
        </li>
        <li>
          <div class="boxall" id="echart4" style="height:28vh">
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
  import "@/styles/comon0.css"


  export default {
    mounted() {
      this.echarts_1()
    },
    methods: {
      echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        const myChart = this.$echarts.init(document.getElementById('echart1'));

        const option = {
          //  backgroundColor: '#00265f',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['商超门店', '教育培训', '房地产', '生活服务', '汽车销售', '旅游酒店', '五金建材'],
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
              },
            },

            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              // rotate:50,
              show: true,
              splitNumber: 15,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: '12',
              },
            },
          }],
          yAxis: [{
            type: 'value',
            axisLabel: {
              //formatter: '{value} %'
              show: true,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: '12',
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              }
            }
          }],
          series: [
            {
              type: 'bar',
              data: [200, 300, 300, 900, 1500, 1200, 600],
              barWidth: '35%', //柱子宽度
              // barGap: 1, //柱子之间间距
              itemStyle: {
                normal: {
                  color: '#2f89cf',
                  opacity: 1,
                  barBorderRadius: 5,
                }
              }
            }

          ]
        };

        // 使用刚指定的配置项和数据显示图表。

        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
    }

  }
</script>

<style scoped>
</style>
