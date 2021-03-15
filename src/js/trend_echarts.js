import echarts from 'echarts'

function echarts_9() {
  let myChart = echarts.init(document.getElementById("line1"));
  var option;
  let N = 10000;
  let E = 0;
  let I = 1;
  let S = N - I;
  let R = 0;
  let r = 20;
  let B = 0.03;
  let a = 0.1;
  let r2 = 20;
  let B2 = 0.03;
  let y = 0.1;
  let q1 = [S], q2 = [E], q3 = [I], q4 = [R];
  for (let i = 0; i < 140; i++) {
    q1[i + 1] = q1[i] - r * B * q1[i] * q3[i] / N - r2 * B2 * q1[i] * q2[i] / N;
    q2[i + 1] = q2[i] + r * B * q1[i] * q3[i] / N - a * q2[i] + r2 * B2 * q1[i] * q2[i] / N;
    q3[i + 1] = q3[i] + a * q2[i] - y * q3[i];
    q4[i + 1] = q4[i] + y * q3[i];
  }
  let arr = []
  for (let i = 0; i < 140; i++) {
    arr.push(i)
  }

  option = {
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
      data: ['易感者人数', '潜伏者人数', '感染者人数', '治愈者人数'],
      textStyle: {
        color: '#ffffff',
        fontSize: '12',
      }
    },
    grid: {
      bottom: '30',
    },
    xAxis: {
      name: '天数',
      type: 'category',
      data: arr,
      axisLabel: {
        textStyle: {
          color: "#ffffff",
        },
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        }
      }
    },
    yAxis: {
      name: '万人',
      type: 'value',
      axisLabel: {
        textStyle: {
          color: "#ffffff",
        },
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        }
      }
    },
    series: [{
      name: '易感者人数',
      data: q1,
      type: 'line',
      showSymbol: false,
    }, {
      name: '潜伏者人数',
      data: q2,
      type: 'line',
      showSymbol: false,
    }, {
      name: '感染者人数',
      data: q3,
      type: 'line',
      showSymbol: false,
    }, {
      name: '治愈者人数',
      data: q4,
      type: 'line',
      showSymbol: false,
    }]
  };


  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
function echarts_10() {
  let myChart = echarts.init(document.getElementById("line2"));
  var option;
  let N = 10000;
  let E = 0;
  let I = 1;
  let S = N - I;
  let R = 0;
  let r = 20;
  let B = 0.03;
  let a = 0.1;
  let r2 = 20;
  let B2 = 0.03;
  let y = 0.1;
  let q1 = [S], q2 = [E], q3 = [I], q4 = [R];
  for (let i = 0; i < 140; i++) {
    q1[i + 1] = q1[i] - r * B * q1[i] * q3[i] / N - r2 * B2 * q1[i] * q2[i] / N;
    q2[i + 1] = q2[i] + r * B * q1[i] * q3[i] / N - a * q2[i] + r2 * B2 * q1[i] * q2[i] / N;
    q3[i + 1] = q3[i] + a * q2[i] - y * q3[i];
    q4[i + 1] = q4[i] + y * q3[i];
  }
  let arr = []
  for (let i = 0; i < 140; i++) {
    arr.push(i)
  }

  option = {
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
      data: ['易感者人数', '潜伏者人数', '感染者人数', '治愈者人数'],
      textStyle: {
        color: '#ffffff',
        fontSize: '12',
      }
    },
    grid: {
      bottom: '30',
    },
    xAxis: {
      name: '天数',
      type: 'category',
      data: arr,
      axisLabel: {
        textStyle: {
          color: "#ffffff",
        },
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        }
      }

    },
    yAxis: {
      name: '万人',
      type: 'value',
      axisLabel: {
        textStyle: {
          color: "#ffffff",
        },
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        }
      }
    },
    series: [{
      name: '易感者人数',
      data: q1,
      type: 'line',
      showSymbol: false,
    }, {
      name: '潜伏者人数',
      data: q2,
      type: 'line',
      showSymbol: false,
    }, {
      name: '感染者人数',
      data: q3,
      type: 'line',
      showSymbol: false,
    }, {
      name: '治愈者人数',
      data: q4,
      type: 'line',
      showSymbol: false,
    }]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function echarts_11() {
  let myChart = echarts.init(document.getElementById("line3"));
  var option;
  option = {
    title: {
      text: '湖北地区2019-cCov的传播力（R0）和致死率',
      textStyle: {
        color: '#ffffff'
      }

    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#dddc6b'
        }
      }
    },
    grid: {
      bottom: '30',
    },
    xAxis: {

      splitLine: { show: false },
      min: 0,
      max: 16,
      name: 'R0',
      axisLabel: {
        textStyle: {
          color: "#ffffff",
        },
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        }
      }
    },
    yAxis: {
      splitLine: { show: false },
      min: 0,
      max: 10,
      name: '致死率%',
      axisLabel: {
        textStyle: {
          color: "#ffffff",
        },
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        }
      }
    },
    series: [{
      symbolSize: 20,
      data: [
        [3, 2]

      ],
      type: 'scatter'
    }]
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function echarts_12() {
  let myChart = echarts.init(document.getElementById("line4"));
  var option;
  option = {
    title: {
      text: '非湖北地区2019-cCov的传播力（R0）和致死率',
      textStyle: {
        color: '#ffffff'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#dddc6b'
        }
      }
    },
    grid: {
      bottom: '30',
    },
    xAxis: {

      splitLine: { show: false },
      min: 0,
      max: 16,
      name: 'R0',
      axisLabel: {
        textStyle: {
          color: "#ffffff",
        },
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        }
      }
    },
    yAxis: {
      splitLine: { show: false },
      min: 0,
      max: 10,
      name: '致死率%',
      axisLabel: {
        textStyle: {
          color: "#ffffff",
        },
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        }
      }
    },
    series: [{
      symbolSize: 20,
      data: [
        [8, 2]
      ],
      type: 'scatter'
    }]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}


export {
  echarts_9,
  echarts_10,
  echarts_11,
  echarts_12,
}
