<template>
  <div class="trend">
        <!--数据总概-->
    <div class="con_div">
        <div class="con_div_text left">
            <div class="con_div_text01 left">
                <img src="../images/info_1.png" class="left text01_img"/>
                <div class="left text01_div">
                    <p>现有确诊(人)</p>
                    <p>1235</p>
                </div>
            </div>
            <div class="con_div_text01 right">
                <img src="../images/info_2.png" class="left text01_img"/>
                <div class="left text01_div">
                    <p>无症状(人)</p>
                    <p>235</p>
                </div>
            </div>
        </div>
        <div class="con_div_text left">
            <div class="con_div_text01 left">
                <img src="../images/info_3.png" class="left text01_img"/>
                <div class="left text01_div">
                    <p>现有疑似(人)</p>
                    <p class="sky">12356</p>
                </div>
            </div>
            <div class="con_div_text01 right">
                <img src="../images/info_4.png" class="left text01_img"/>
                <div class="left text01_div">
                    <p>累计确诊(人)</p>
                    <p class="sky">12356</p>
                </div>
            </div>
        </div>
        <div class="con_div_text left">

            <div class="con_div_text01 left">
                <img src="../images/info_5.png" class="left text01_img"/>
                <div class="left text01_div">
                    <p>境外输入(人)</p>
                    <p class="org">12356</p>
                </div>
            </div>
            <div class="con_div_text01 right">
                <img src="../images/info_6.png" class="left text01_img"/>
                <div class="left text01_div">
                    <p>累计死亡(人)</p>
                    <p class="org">12356</p>
                </div>
            </div>
        </div>
    </div>

    <!--统计分析图-->
    <div class="con left" style="width: 50%">
      <div class="div_any">
        <div class="left div_any01" style="width: 48%">
          <div class="div_any_child" style="height: 420px">
            <div class="div_any_title"><img src="" />临床表现</div>
            <p id="histogramChart2" class="p_chart" style="height: 400px"></p>
          </div>
        </div>
        <div class="right div_any01" style="width: 48%">
          <div class="div_any_child" style="height: 420px">
            <div class="div_any_title"><img src="" />性别分布</div>
            <div id="sexChart" class="p_chart" style="height: 400px"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="con right" style="width: 50%">
      <div class="div_any">
        <div class="left div_any01" style="width: 48%">
          <div class="div_any_child" style="height: 420px">
            <div class="div_any_title"><img src="" />年龄分布</div>
            <div id="ageChart" class="p_chart" style="height: 400px"></div>
          </div>
        </div>
        <div class="right div_table_box" style="width: 48%">
          <div class="div_any_child" style="height: 420px">
            <div class="div_any_title"><img src="" />预警信息</div>
            <div class="table_p">
              <table>
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>内容</th>
                    <th>发布时间</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>9月21日感染性腹泻发病：123人次</td>
                    <td>2018-11-05</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>9月20日流行性感冒：57人次</td>
                    <td>2018-11-03</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>9月19日:手足口病发病同比增长220%</td>
                    <td>2018-11-01</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>9月18日登革热死亡:2人</td>
                    <td>2018-10-29</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>9月17日流行性感冒：157人次</td>
                    <td>2018-10-27</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>9月15日全区传染病发病人数较低</td>
                    <td>2018-10-25</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>9月14日流行性感冒：157人次</td>
                    <td>2018-10-23</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>9月13日全区传染病发病人数较低</td>
                    <td>2018-10-21</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>9月12日流行性感冒：157人次</td>
                    <td>2018-10-20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.initial();
  },
  methods: {
    initial() {
      const ageChart = this.$echarts.init(document.getElementById("ageChart"));
      const sexChart = this.$echarts.init(document.getElementById("sexChart"));
      const histogramChart2 = this.$echarts.init(
        document.getElementById("histogramChart2")
      );
      const ageOption = {
        toolbox: {
          show: true,
          feature: {
            saveAsImage: { show: true },
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : ({d}%)",
        },
        legend: {
          bottom: 40,
          data: ["0-9", "10-39", "40-49", "50-59", "60-69", "70-79", "80+"],
          textStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
        series: [
          {
            name: "占比",
            type: "pie",
            radius: "55%",
            center: ["50%", "40%"],
            data: [
              { value: 5, name: "0-9" },
              { value: 24, name: "10-39" },
              { value: 34, name: "40-49" },
              { value: 56, name: "50-59" },
              { value: 32, name: "60-69" },
              { value: 38, name: "70-79" },
              { value: 39, name: "80+" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      const sexOption = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          bottom: 40,
          data: ["女", "男"],
          textStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "性别分布",
            type: "pie",
            radius: [30, 110],
            center: ["50%", "40%"],
            data: [
              { value: 10, name: "女" },
              { value: 8, name: "男" },
            ],
          },
        ],
      };
      const histogramOption2 = {
        color: ["#FD6C88"],
        grid: {
          left: "5%",
          right: "5%",
          bottom: "10%",
          containLabel: true,
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}<br/>{c}人",
        },
        calculable: true,
        yAxis: [
          {
            type: "category",
            data: [
              "腹痛、腹胀、腹泻",
              "恶心、呕吐、食欲不振",
              "肌肉酸痛、乏力",
              "持续高烧",
              "头痛、眼眶痛、肌肉疼",
              "皮疹、水泡",
              "呼吸浅促",
              "发热、咳嗽、流口水",
            ],
            axisLine: {
              lineStyle: {
                color: "#FD6C88",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
          },
        ],
        xAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#FD6C88",
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
              formatter: function (value) {
                return value + "";
              },
            },
          },
        ],
        series: [
          {
            name: "主要症状",
            type: "bar",
            barWidth: 20,
            data: [1750, 1416, 1136, 819, 704, 413, 251, 175],
          },
        ],
      };

      if (ageOption && typeof ageOption === "object") {
        ageChart.setOption(ageOption, true);
      }
      if (sexOption && typeof sexOption === "object") {
        sexChart.setOption(sexOption, true);
      }
      if (histogramOption2 && typeof histogramOption2 === "object") {
        histogramChart2.setOption(histogramOption2, true);
      }
    },
  },
};
</script>

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

/* 统计分析图 */
.con {
  padding-top: 10px;
  overflow: hidden;
  padding-bottom: 20px;
}
.div_any {
  width: 98%;
  margin-left: 1%;
  margin-bottom: 25px;
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
  margin-top: 3%;
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
  color: #ffffff;
}
.div_way {
  padding: 24px;
}
.div_way_list {
  width: 100%;
  padding-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.el-card {
  border: 0px;
  background-color: rgba(0, 0, 0, 0.1);
  color: #ffffff;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.el-divider {
  background-color: #4544449e;
  position: relative;
}

/* 概览 */
.con_div{  
    margin-top: 100px;
    height: 110px;
    width: 98%;
    margin-left: 1.6%;
    margin-bottom: 25px;
}
.con_div_text{
    height: 100%;
    background-color: #034c6a;
    width: 32%;
    margin-right: 1.3%;
}
.con_div_text01{
    width: 50%;
    height: 100%;
}
.text01_img{
    width: 40px;
    height: 40px;
    margin-left: 5%;
  margin-top: 35px;
}
.text01_div{
    margin-top: 15px;
    margin-left: 5%;
    text-align: center;

}
.text01_div p{
    line-height: 35px;
}
.text01_div p:nth-child(1){
    font-size: 13px;
    color: #ffffff;
}
.text01_div p:nth-child(2){
    font-size: 28px;
    color: #ffff43;
    font-weight: 600;

}
</style>