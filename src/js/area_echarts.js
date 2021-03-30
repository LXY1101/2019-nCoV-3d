import echarts from 'echarts'

function map_1(params) {
  console.log(params,'999')
  map();

  function map() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('map_1'));

    const option = {
      tooltip: {
        trigger: "item",
      },
      visualMap: {
        min: 0,
        max: 500,
        left: "left",
        top: "bottom",
        itemHeight: "80%",
        text: ["高", "低"], // 文本，默认为数值文本
        calculable: true,
        inRange: {
          color: ['#c2d0ff','#0e46d6'],
        }
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
            {name: "北京", value: Math.round(Math.random() * 1000)},
            {name: "天津", value: Math.round(Math.random() * 1000)},
            {name: "上海", value: Math.round(Math.random() * 1000)},
            {name: "重庆", value: Math.round(Math.random() * 1000)},
            {name: "河北", value: Math.round(Math.random() * 1000)},
            {name: "河南", value: Math.round(Math.random() * 1000)},
            {name: "云南", value: Math.round(Math.random() * 1000)},
            {name: "辽宁", value: Math.round(Math.random() * 1000)},
            {name: "黑龙江", value: Math.round(Math.random() * 1000)},
            {name: "湖南", value: Math.round(Math.random() * 1000)},
            {name: "安徽", value: Math.round(Math.random() * 1000)},
            {name: "山东", value: Math.round(Math.random() * 1000)},
            {name: "新疆", value: Math.round(Math.random() * 1000)},
            {name: "江苏", value: Math.round(Math.random() * 1000)},
            {name: "浙江", value: Math.round(Math.random() * 1000)},
            {name: "江西", value: Math.round(Math.random() * 1000)},
            {name: "湖北", value: Math.round(Math.random() * 1000)},
            {name: "广西", value: Math.round(Math.random() * 1000)},
            {name: "甘肃", value: Math.round(Math.random() * 1000)},
            {name: "山西", value: Math.round(Math.random() * 1000)},
            {name: "内蒙古", value: Math.round(Math.random() * 1000)},
            {name: "陕西", value: Math.round(Math.random() * 1000)},
            {name: "吉林", value: Math.round(Math.random() * 1000)},
            {name: "福建", value: Math.round(Math.random() * 1000)},
            {name: "贵州", value: Math.round(Math.random() * 1000)},
            {name: "广东", value: Math.round(Math.random() * 1000)},
            {name: "青海", value: Math.round(Math.random() * 1000)},
            {name: "西藏", value: Math.round(Math.random() * 1000)},
            {name: "四川", value: Math.round(Math.random() * 1000)},
            {name: "宁夏", value: Math.round(Math.random() * 1000)},
            {name: "海南", value: Math.round(Math.random() * 1000)},
            {name: "台湾", value: Math.round(Math.random() * 1000)},
            {name: "香港", value: Math.round(Math.random() * 1000)},
            {name: "澳门", value: Math.round(Math.random() * 1000)},
          ],
        },
      ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

}

export {
  map_1
}

