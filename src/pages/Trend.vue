<template>
  <div class="trend">
    <!-- <div class="con left">
      <div class="div_any"></div>
    </div>
    <div class="con right">
      <div class="div_any"></div>
    </div> -->
    <div class="con left" style="width: 50%">
      <div class="div_any">
        <div class="left div_any01" style="width: 100%">
          <div
            class="div_any_child"
            style="width: 98%; position: relative; height: 420px"
          >
            <div class="div_any_title"><img src="" />累计确诊分布</div>
            <div id="newChart9" class="p_chart" style="height: 400px"></div>
          </div>
        </div>
        <!-- <div class="left div_any01" style="width: 100%">
          <div
            class="div_any_child"
            style="width: 98%; position: relative; height: 420px"
          >
            <div class="div_any_title"><img src="" />现有确诊分布</div>
            <div id="newChart8" class="p_chart" style="height: 400px"></div>
          </div>
        </div> -->
        <div class="left div_any01" style="width: 100%">
          <div class="div_any_child" style="height: 420px">
            <div class="div_any_title"><img src="" />全国疫情新增趋势</div>
            <div id="newChart" class="p_chart" style="height: 400px"></div>
          </div>
        </div>
        <div class="left div_any01" style="width: 100%">
          <div class="div_any_child" style="height: 420px">
            <div class="div_any_title"><img src="" />境外输入新增趋势</div>
            <div id="newChart3" class="p_chart" style="height: 400px"></div>
          </div>
        </div>
        <div class="left div_any01" style="width: 100%">
          <div class="div_any_child" style="height: 420px">
            <div class="div_any_title"><img src="" />全国累计治愈死亡趋势</div>
            <div id="newChart5" class="p_chart" style="height: 400px"></div>
          </div>
        </div>

        <!-- <div class="left div_any01" style="width: 100%">
          <div
            class="div_any_child"
            style="width: 98%; position: relative; height: 420px"
          >
            <div class="div_any_title">
              <img src="" />境外输入累计确诊省Top10
            </div>
            <div id="newChart7" class="p_chart" style="height: 400px"></div>
          </div>
        </div> -->
      </div>
    </div>

    <div class="con right" style="width: 50%">
      <div class="div_any">
        <div class="left div_any01" style="width: 100%">
          <div class="div_any_child" style="height: 420px">
            <div class="div_any_title">
              <img src="" />国内各地区疫情统计汇总
            </div>
            <div class="p_chart" style="height: 400px">
              <el-table
                :data="tableData"
                border
                show-summary
                style="width: 100%"
                class="p_table"
                height="345"
              >
                <el-table-column prop="name" label="省份"> </el-table-column>
                <el-table-column prop="amount1" sortable label="新增">
                </el-table-column>
                <el-table-column prop="amount2" sortable label="现有">
                </el-table-column>
                <el-table-column prop="amount3" sortable label="累计">
                </el-table-column>
                <el-table-column prop="amount3" sortable label="死亡">
                </el-table-column>
                <el-table-column prop="amount3" sortable label="治愈">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div class="left div_any01" style="width: 100%">
          <div class="div_any_child" style="height: 420px">
            <div class="div_any_title"><img src="" />全国确诊疑似趋势</div>
            <div id="newChart2" class="p_chart" style="height: 400px"></div>
          </div>
        </div>
        <div class="left div_any01" style="width: 100%">
          <div class="div_any_child" style="height: 420px">
            <div class="div_any_title"><img src="" />境外输入累计趋势</div>
            <div id="newChart4" class="p_chart" style="height: 400px"></div>
          </div>
        </div>
        <div class="left div_any01" style="width: 100%">
          <div class="div_any_child" style="height: 420px">
            <div class="div_any_title"><img src="" />全国治愈率/死亡率趋势</div>
            <div id="newChart6" class="p_chart" style="height: 400px"></div>
          </div>
        </div>

        <!-- <div class="left div_any01" style="width: 100%">
          <div class="div_any_child" style="height: 420px">
            <div class="div_any_title">
              <img src="" />国内各地区疫情统计汇总
            </div>
            <div class="p_chart" style="height: 400px">
              <el-table
                :data="tableData"
                border
                show-summary
                style="width: 100%"
                class="p_table"
              >
                <el-table-column prop="name" label="省份"> </el-table-column>
                <el-table-column prop="amount1" sortable label="新增">
                </el-table-column>
                <el-table-column prop="amount2" sortable label="现有">
                </el-table-column>
                <el-table-column prop="amount3" sortable label="累计">
                </el-table-column>
                <el-table-column prop="amount3" sortable label="死亡">
                </el-table-column>
                <el-table-column prop="amount3" sortable label="治愈">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "北京",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "天津",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "上海",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "重庆",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "河北",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "河南",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "云南",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "辽宁",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "黑龙江",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "湖南",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "安徽",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "山东",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "新疆",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "江苏",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "浙江",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "江西",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "湖北",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "广西",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "甘肃",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "山西",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "内蒙古",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "陕西",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "吉林",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "福建",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "贵州",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "广东",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "青海",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "西藏",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "四川",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "宁夏",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "海南",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "台湾",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "香港",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
        {
          name: "澳门",
          amount1: Math.round(Math.random() * 1000),
          amount2: Math.round(Math.random() * 1000),
          amount3: Math.round(Math.random() * 1000),
        },
      ],
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    for() {},
    initial() {
      var dataList1 = [];
      var dataList2 = [];
      var base = new Date(1585054959124);
      var oneDay = 24 * 3600 * 1000;
      var startDay =
        new Date(
          base.getFullYear(),
          base.getMonth(),
          base.getDate()
        ).getTime() +
        oneDay -
        1;
      var endDay = new Date();
      endDay =
        new Date(
          endDay.getFullYear(),
          endDay.getMonth(),
          endDay.getDate()
        ).getTime() +
        oneDay -
        1;
      var date = [];

      while (startDay <= endDay) {
        var now = new Date(startDay);
        date.push(
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
        );
        dataList1.push(Math.round(200));
        dataList2.push(Math.round(100));
        startDay += oneDay;
      }

      const newChart = this.$echarts.init(document.getElementById("newChart"));
      const newChart2 = this.$echarts.init(
        document.getElementById("newChart2")
      );
      const newChart3 = this.$echarts.init(
        document.getElementById("newChart3")
      );
      const newChart4 = this.$echarts.init(
        document.getElementById("newChart4")
      );
      const newChart5 = this.$echarts.init(
        document.getElementById("newChart5")
      );
      const newChart6 = this.$echarts.init(
        document.getElementById("newChart6")
      );
      //   const newChart7 = this.$echarts.init(
      //     document.getElementById("newChart7")
      //   );
      //   const newChart8 = this.$echarts.init(
      //     document.getElementById("newChart8")
      //   );
      const newChart9 = this.$echarts.init(
        document.getElementById("newChart9")
      );
      const newOption = {
        color: ["#f60707", "#078bf6"],
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: date,
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
          },
        ],
        grid: {
          left: "15%",
        },
        legend: {
          top: 10,
          data: ["总新增确诊", "新增境外输入"],
          textStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
        tooltip: {
          trigger: "axis",
        },

        series: [
          {
            name: "总新增确诊",
            data: dataList1,
            type: "line",
            smooth: true
          },
          {
            name: "新增境外输入",
            data: dataList2,
            type: "line",
            smooth: true
          },
        ],
      };
      const newOption2 = {
        color: ["#f60707", "#078bf6", "#f6eb07"],
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: date,
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
          },
        ],
        grid: {
          left: "15%",
        },
        legend: {
          top: 10,
          data: ["现有确诊", "现有疑似", "累计确诊"],
          textStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
        tooltip: {
          trigger: "axis",
        },

        series: [
          {
            name: "现有确诊",
            data: [332, 464, 234, 432, 234, 346, 543],
            type: "line",
          },
          {
            name: "现有疑似",
            data: [33, 54, 24, 32, 24, 34, 53],
            type: "line",
          },
          ,
          {
            name: "累计确诊",
            data: [362, 500, 346, 456, 256, 389, 595],
            type: "line",
          },
        ],
      };
      const newOption3 = {
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: date,
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
          },
        ],
        grid: {
          left: "15%",
        },
        legend: {
          top: 10,
          data: ["新增境外输入"],
          textStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
        tooltip: {
          trigger: "axis",
        },

        series: [
          {
            name: "新增境外输入",
            data: [33, 54, 24, 32, 24, 34, 53],
            type: "line",
            // smooth: true,
            // symbol: "none",
            // sampling: "average",
            // itemStyle: {
            //   color: "rgb(255, 70, 131)",
            // },
            // areaStyle: {
            //   color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: "rgb(255, 158, 68)",
            //     },
            //     {
            //       offset: 1,
            //       color: "rgb(255, 70, 131)",
            //     },
            //   ]),
            // },
          },
        ],
      };
      const newOption4 = {
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: date,
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
          },
        ],
        grid: {
          left: "15%",
        },
        legend: {
          top: 10,
          data: ["累计境外输入"],
          textStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
        tooltip: {
          trigger: "axis",
        },

        series: [
          {
            name: "累计境外输入",
            data: [33, 54, 24, 32, 24, 34, 53],
            type: "line",
            // symbol: "none",
            // sampling: "average",
            // itemStyle: {
            //   color: "#00d3ea",
            // },
            // areaStyle: {
            //   color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: "#00cfa3",
            //     },
            //     {
            //       offset: 1,
            //       color: "#00d3ea",
            //     },
            //   ]),
            // },
          },
        ],
      };
      const newOption5 = {
        color: ["#c23531", "#00b1f6"],
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: date,
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
          },
        ],
        grid: {
          left: "15%",
        },
        legend: {
          top: 10,
          data: ["治愈", "死亡"],
          textStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
        tooltip: {
          trigger: "axis",
        },

        series: [
          {
            name: "治愈",
            data: [332, 464, 234, 432, 234, 346, 543],
            type: "line",
          },
          {
            name: "死亡",
            data: [33, 54, 24, 32, 24, 34, 53],
            type: "line",
          },
        ],
      };
      const newOption6 = {
        color: ["#c23531", "#00b1f6"],
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: date,
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
          },
        ],
        grid: {
          left: "15%",
        },
        legend: {
          top: 10,
          data: ["治愈率", "死亡率"],
          textStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
        tooltip: {
          trigger: "axis",
        },

        series: [
          {
            name: "治愈率",
            data: [332, 464, 234, 432, 234, 346, 543],
            type: "line",
          },
          {
            name: "死亡率",
            data: [33, 54, 24, 32, 24, 34, 53],
            type: "line",
          },
        ],
      };
      const newOption7 = {
        color: ["#f57567"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "广东",
              "内蒙古",
              "上海",
              "四川",
              "辽宁",
              "新疆",
              "武汉",
              "成都",
              "北京",
              "浙江",
            ],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
            axisLabel: { interval: 0, rotate: 60 },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 1)",
              },
            },
          },
        ],
        series: [
          {
            name: "数值",
            type: "bar",
            barWidth: "20%",
            data: [10, 52, 200, 334, 390, 330, 220, 62, 153, 352, 86, 89],
          },
        ],
      };
      const newOption8 = {
        tooltip: {
          trigger: "item",
        },
        visualMap: {
          min: 0,
          max: 500,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: true,
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "现有确诊",
            type: "map",
            mapType: "china",
            roam: false,
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: true,
              },
            },
            data: [
              { name: "北京", value: Math.round(Math.random() * 1000) },
              { name: "天津", value: Math.round(Math.random() * 1000) },
              { name: "上海", value: Math.round(Math.random() * 1000) },
              { name: "重庆", value: Math.round(Math.random() * 1000) },
              { name: "河北", value: Math.round(Math.random() * 1000) },
              { name: "河南", value: Math.round(Math.random() * 1000) },
              { name: "云南", value: Math.round(Math.random() * 1000) },
              { name: "辽宁", value: Math.round(Math.random() * 1000) },
              { name: "黑龙江", value: Math.round(Math.random() * 1000) },
              { name: "湖南", value: Math.round(Math.random() * 1000) },
              { name: "安徽", value: Math.round(Math.random() * 1000) },
              { name: "山东", value: Math.round(Math.random() * 1000) },
              { name: "新疆", value: Math.round(Math.random() * 1000) },
              { name: "江苏", value: Math.round(Math.random() * 1000) },
              { name: "浙江", value: Math.round(Math.random() * 1000) },
              { name: "江西", value: Math.round(Math.random() * 1000) },
              { name: "湖北", value: Math.round(Math.random() * 1000) },
              { name: "广西", value: Math.round(Math.random() * 1000) },
              { name: "甘肃", value: Math.round(Math.random() * 1000) },
              { name: "山西", value: Math.round(Math.random() * 1000) },
              { name: "内蒙古", value: Math.round(Math.random() * 1000) },
              { name: "陕西", value: Math.round(Math.random() * 1000) },
              { name: "吉林", value: Math.round(Math.random() * 1000) },
              { name: "福建", value: Math.round(Math.random() * 1000) },
              { name: "贵州", value: Math.round(Math.random() * 1000) },
              { name: "广东", value: Math.round(Math.random() * 1000) },
              { name: "青海", value: Math.round(Math.random() * 1000) },
              { name: "西藏", value: Math.round(Math.random() * 1000) },
              { name: "四川", value: Math.round(Math.random() * 1000) },
              { name: "宁夏", value: Math.round(Math.random() * 1000) },
              { name: "海南", value: Math.round(Math.random() * 1000) },
              { name: "台湾", value: Math.round(Math.random() * 1000) },
              { name: "香港", value: Math.round(Math.random() * 1000) },
              { name: "澳门", value: Math.round(Math.random() * 1000) },
            ],
          },
        ],
      };
      const newOption9 = {
        tooltip: {
          trigger: "item",
        },
        visualMap: {
          min: 0,
          max: 500,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: true,
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "现有确诊",
            type: "map",
            mapType: "china",
            roam: false,
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: true,
              },
            },
            data: [
              { name: "北京", value: Math.round(Math.random() * 1000) },
              { name: "天津", value: Math.round(Math.random() * 1000) },
              { name: "上海", value: Math.round(Math.random() * 1000) },
              { name: "重庆", value: Math.round(Math.random() * 1000) },
              { name: "河北", value: Math.round(Math.random() * 1000) },
              { name: "河南", value: Math.round(Math.random() * 1000) },
              { name: "云南", value: Math.round(Math.random() * 1000) },
              { name: "辽宁", value: Math.round(Math.random() * 1000) },
              { name: "黑龙江", value: Math.round(Math.random() * 1000) },
              { name: "湖南", value: Math.round(Math.random() * 1000) },
              { name: "安徽", value: Math.round(Math.random() * 1000) },
              { name: "山东", value: Math.round(Math.random() * 1000) },
              { name: "新疆", value: Math.round(Math.random() * 1000) },
              { name: "江苏", value: Math.round(Math.random() * 1000) },
              { name: "浙江", value: Math.round(Math.random() * 1000) },
              { name: "江西", value: Math.round(Math.random() * 1000) },
              { name: "湖北", value: Math.round(Math.random() * 1000) },
              { name: "广西", value: Math.round(Math.random() * 1000) },
              { name: "甘肃", value: Math.round(Math.random() * 1000) },
              { name: "山西", value: Math.round(Math.random() * 1000) },
              { name: "内蒙古", value: Math.round(Math.random() * 1000) },
              { name: "陕西", value: Math.round(Math.random() * 1000) },
              { name: "吉林", value: Math.round(Math.random() * 1000) },
              { name: "福建", value: Math.round(Math.random() * 1000) },
              { name: "贵州", value: Math.round(Math.random() * 1000) },
              { name: "广东", value: Math.round(Math.random() * 1000) },
              { name: "青海", value: Math.round(Math.random() * 1000) },
              { name: "西藏", value: Math.round(Math.random() * 1000) },
              { name: "四川", value: Math.round(Math.random() * 1000) },
              { name: "宁夏", value: Math.round(Math.random() * 1000) },
              { name: "海南", value: Math.round(Math.random() * 1000) },
              { name: "台湾", value: Math.round(Math.random() * 1000) },
              { name: "香港", value: Math.round(Math.random() * 1000) },
              { name: "澳门", value: Math.round(Math.random() * 1000) },
            ],
          },
        ],
      };
      if (newOption && typeof newOption === "object") {
        newChart.setOption(newOption, true);
      }
      if (newOption2 && typeof newOption2 === "object") {
        newChart2.setOption(newOption2, true);
      }
      if (newOption3 && typeof newOption3 === "object") {
        newChart3.setOption(newOption3, true);
      }
      if (newOption4 && typeof newOption4 === "object") {
        newChart4.setOption(newOption4, true);
      }
      if (newOption5 && typeof newOption5 === "object") {
        newChart5.setOption(newOption5, true);
      }
      if (newOption6 && typeof newOption6 === "object") {
        newChart6.setOption(newOption6, true);
      }
      //   if (newOption7 && typeof newOption7 === "object") {
      //     newChart7.setOption(newOption7, true);
      //   }
      //   if (newOption8 && typeof newOption8 === "object") {
      //     newChart8.setOption(newOption8, true);
      //   }
      if (newOption9 && typeof newOption9 === "object") {
        newChart9.setOption(newOption9, true);
      }
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    },
  },
};
</script>

<style >
.el-table,
.el-table__footer-wrapper tbody td,
.el-table thead {
  color: #ffffff;
}

.el-table th,
.el-table tr {
  background-color: #000000e8 !important;
}
.el-table tr:hover {
  color: #000;
}
.el-table__footer-wrapper tbody td,
.el-table__header-wrapper tbody td {
  background-color: #000000e8 !important;
}
</style>


<style scoped>
.trend {
  height: 100%;
  background-color: #000000e8;
  overflow: auto;
}
.left {
  float: left;
}
.right {
  float: right;
}
.con {
  margin-top: 80px;
  padding-top: 10px;
  overflow: hidden;
  padding-bottom: 20px;
}
.div_any {
  width: 98%;
  margin-left: 1%;
  margin-bottom: 25px;
  height: 610px;
}
.div_any01 {
  width: 23%;
  margin-right: 2%;
}
.div_any_child {
  width: 100%;
  height: 330px;
  box-shadow: -5px 0px 5px #034c6a inset,
    /*å·¦è¾¹é˜´å½±*/ 0px -5px 5px #034c6a inset,
    /*ä¸Šè¾¹é˜´å½±*/ 5px 0px 5px #034c6a inset,
    /*å³è¾¹é˜´å½±*/ 0px 5px 5px #034c6a inset;
  border: 1px solid #034c6a;
  box-sizing: border-box;
  position: relative;
  margin-top: 25px;
}
.div_any_title {
  background-color: #034c6a;
  border-radius: 18px;
  position: absolute;
  height: 35px;
  width: 60%;
  top: -15px;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  left: 20%;
  line-height: 35px;
  text-align: center;
}
.table_p {
  height: 93%;
  margin-top: 7%;
  position: relative;
}
.table_p table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;

  position: absolute;
  text-align: center;
}
.table_p table thead th {
  color: #61d2f7;
  font-size: 14px;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
}
.table_p table tbody {
  color: #ffffff;
  font-size: 13px;
}
.table_p table tbody tr:nth-child(2n + 1) {
  background-color: #072951;
  box-shadow: -10px 0px 15px #034c6a inset, 10px 0px 15px #034c6a inset;
}
.p_chart {
  height: 288px;
  padding: 5px 10px;
  margin-top: 15px;
}
.p_table {
  margin-top: 20px;
}
</style>