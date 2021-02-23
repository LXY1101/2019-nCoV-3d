
import echarts from 'echarts'

function initial() {
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
    startDay += oneDay;
  }

  return date;
}

function echarts_1() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart1'));

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['累计确诊', '现有确诊']
    },
    grid: {
      left: '0%',
      top: '25px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['2020/3', '2020/5', '2020/7', '2020/9', '2020/11', '2021/1', '2021/3'],
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
        name: '累计确诊',
        type: 'bar',
        data: [200, 300, 400, 600, 900, 1200, 1500],
        barWidth: '35%', //柱子宽度
        top:'20px',
        stack: '分类量',
        itemStyle: {
          normal: {
            color: '#2f89cf',
            opacity: 1,
            // barBorderRadius: 5,
          }
        }
      },
      {
        name: '现有确诊',
        type: 'bar',
        data: [62, 42, 52, 32, 42, 12, 22],
        barWidth: '35%', //柱子宽度
        stack: '分类量',
        itemStyle: {
          normal: {
            color: '#27d08a',
            opacity: 1,
            // barBorderRadius: 5,
          }
        }
      }

    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function echarts_2() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart2'));

  const option = {
    //  backgroundColor: '#00265f',
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
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
      data: ['湖北', '黑龙江', '广东', '江苏', '北京', '新疆', '河北'],
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
        data: [1500, 1200, 600, 200, 300, 300, 900],
        barWidth: '35%', //柱子宽度
        // barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: '#27d08a',
            opacity: 1,
            barBorderRadius: 5,
          }
        }
      }

    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function echarts_4() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart4'));

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#dddc6b'
        }
      }
    },
    legend: {
      top: '0%',
      data: ['全国疫情新增趋势', '境外输入新增趋势'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      }
    },
    grid: {
      left: '10',
      top: '30',
      right: '10',
      bottom: '10',
      containLabel: true
    },

    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12,
        },
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)'
        }

      },

      data: ['2020/01', '2020/02', '2020/03', '2020/04', '2020/05', '2020/06', '2020/07', '2020/08', '2020/09', '2020/11', '2020/12', '2021/01', '2021/02', '2021/03']

    }, {

      axisPointer: { show: false },
      axisLine: { show: false },
      position: 'bottom',
      offset: 20,


    }],

    yAxis: [{
      type: 'value',
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12,
        },
      },

      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      }
    }],
    series: [
      {
        name: '全国疫情新增趋势',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {

          normal: {
            color: '#0184d5',
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(1, 132, 213, 0.4)'
            }, {
              offset: 0.8,
              color: 'rgba(1, 132, 213, 0.1)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
          }
        },
        itemStyle: {
          normal: {
            color: '#0184d5',
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12
          }
        },
        data: [3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4, 3, 4, 3, ]

      },
      {
        name: '境外输入新增趋势',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {

          normal: {
            color: '#00d887',
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0, 216, 135, 0.4)'
            }, {
              offset: 0.8,
              color: 'rgba(0, 216, 135, 0.1)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
          }
        },
        itemStyle: {
          normal: {
            color: '#00d887',
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12
          }
        },
        data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5,]

      },

    ]

  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function echarts_5() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart5'));

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
      bottom: '2%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['2020/03', '2020/05',  '2020/07', '2020/09', '2020/11',  '2021/01',  '2021/03'],
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
        // formatter: '{value} %',
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
    series: [{
      name:'累计治愈',
      type: 'bar',
      data: [22, 33, 54, 65, 72, 123, 134, ],
      barWidth: '20%', //柱子宽度
      // barGap: 1, //柱子之间间距
      itemStyle: {
        normal: {
          color: '#2f89cf',
          opacity: 1,
          // barBorderRadius: 5,
        }
      }
    },
    {
      name:'累计死亡',
      type: 'bar',
      data: [2, 3, 5, 8, 9, 14, 16, ],
      barWidth: '20%', //柱子宽度
      // barGap: 1, //柱子之间间距
      itemStyle: {
        normal: {
          color: '#27d08a',
          opacity: 1,
          // barBorderRadius: 5,
        }
      }
    },
    {
      name:'治愈率',
      type: 'line',
      data: [56, 59, 78, 89, 97,87, 98, ],
      itemStyle: {
        normal: {
          color: '#b8d204',
        }
      }
    },
    {
      name:'死亡率',
      type: 'line',
      data: [2, 3, 2, 1, 3, 1, 2, ],
      itemStyle: {
        normal: {
          color: '#d28c04',
        }
      }
    }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function echarts_6() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart6'));

  var dataStyle = {
    normal: {
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      //shadowBlur: 40,
      //shadowColor: 'rgba(40, 40, 40, 1)',
    }
  };
  var placeHolderStyle = {
    normal: {
      color: 'rgba(255,255,255,.05)',
      label: { show: false, },
      labelLine: { show: false }
    },
    emphasis: {
      color: 'rgba(0,0,0,0)'
    }
  };
  const option = {
    color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
    tooltip: {
      show: true,
      formatter: "{a} : {c} "
    },
    legend: {
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 12,
      bottom: '3%',

      data: ['浙江', '上海', '广东', '北京', '深圳'],
      textStyle: {
        color: 'rgba(255,255,255,.6)',
      }
    },

    series: [
      {
        name: '浙江',
        type: 'pie',
        clockWise: false,
        center: ['50%', '42%'],
        radius: ['59%', '70%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        data: [{
          value: 80,
          name: '01'
        }, {
          value: 20,
          name: 'invisible',
          tooltip: { show: false },
          itemStyle: placeHolderStyle
        }]
      },
      {
        name: '上海',
        type: 'pie',
        clockWise: false,
        center: ['50%', '42%'],
        radius: ['49%', '60%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        data: [{
          value: 70,
          name: '02'
        }, {
          value: 30,
          name: 'invisible',
          tooltip: { show: false },
          itemStyle: placeHolderStyle
        }]
      },
      {
        name: '广东',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        center: ['50%', '42%'],
        radius: ['39%', '50%'],
        itemStyle: dataStyle,
        data: [{
          value: 65,
          name: '03'
        }, {
          value: 35,
          name: 'invisible',
          tooltip: { show: false },
          itemStyle: placeHolderStyle
        }]
      },
      {
        name: '北京',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        center: ['50%', '42%'],
        radius: ['29%', '40%'],
        itemStyle: dataStyle,
        data: [{
          value: 60,
          name: '04'
        }, {
          value: 40,
          name: 'invisible',
          tooltip: { show: false },
          itemStyle: placeHolderStyle
        }]
      },
      {
        name: '深圳',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        center: ['50%', '42%'],
        radius: ['20%', '30%'],
        itemStyle: dataStyle,
        data: [{
          value: 50,
          name: '05'
        }, {
          value: 50,
          name: 'invisible',
          tooltip: { show: false },
          itemStyle: placeHolderStyle
        }]
      },]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function echarts_31() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('fb1'));
  const option = {

    title: [{
      text: '年龄分布',
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: '16'
      }

    }],
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p) {   //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {

      top: '70%',
      itemWidth: 10,
      itemHeight: 10,
      data: ['0岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      }
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        center: ['50%', '42%'],
        radius: ['40%', '60%'],
        color: ['#065aab', '#0691ab', '#06f0ab', '#06ab62', '#b8d204', '#d28c04', '#d25d04', '#d22404'],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 1, name: '0岁以下' },
          { value: 4, name: '20-29岁' },
          { value: 2, name: '30-39岁' },
          { value: 2, name: '40-49岁' },
          { value: 1, name: '50岁以上' },
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function echarts_32() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('fb2'));
  const option = {

    title: [{
      text: '地区分布',
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: '16'
      }

    }],
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p) {   //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {

      top: '70%',
      itemWidth: 10,
      itemHeight: 10,
      data: ['华北', '东北', '华东', '中南', '西南', '西北'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      }
    },
    series: [
      {
        name: '地区分布',
        type: 'pie',
        center: ['50%', '42%'],
        radius: ['40%', '60%'],
        color: ['#065aab', '#0691ab', '#06f0ab', '#06ab62', '#b8d204', '#d28c04', '#d25d04', '#d22404'],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 5, name: '华北' },
          { value: 1, name: '东北' },
          { value: 6, name: '华东' },
          { value: 2, name: '中南' },
          { value: 1, name: '西南' },
          { value: 1, name: '西北' },
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function echarts_33() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('fb3'));
  const option = {
    title: [{
      text: '性别分布',
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: '16'
      }

    }],
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p) {   //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: '70%',
      itemWidth: 10,
      itemHeight: 10,
      data: ['男', '女'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      }
    },
    series: [
      {
        name: '兴趣分布',
        type: 'pie',
        center: ['50%', '42%'],
        radius: ['40%', '60%'],
        color: ['#065aab', '#06f0ab'],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 2, name: '男' },
          { value: 3, name: '女' },
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

export {
  initial,
  echarts_1,
  echarts_2,
  echarts_5,
  echarts_4,
  echarts_6,
  echarts_31,
  echarts_32,
  echarts_33,
}

















