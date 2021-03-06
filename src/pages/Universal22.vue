<template>
  <div>
    <Universal_title></Universal_title>
    <div id="container" style="height: 100vh"></div>
  </div>

</template>

<script>
  import data from "@/mock/1.json";
  import Universal_title from "@/pages/Universal_title";

  export default {
    name: "graph",
    components: {
      Universal_title
    },
    mounted(){
      this.init()
    },
    methods: {
      init() {
        var dom = document.getElementById("container");
        var myChart = this.$echarts.init(dom);


        var option = {
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },

          series:[
            {
              type: 'tree',
              data: [data],
              layout: "orthogonal",
              symbol: 'emptyCircle',
              orient: 'vertical',
              top: "20%",
              initialTreeDepth: 3,
              label: {
                position: 'top',
                fontSize: 18,
                color: "#27d08a",
                formatter: function (b) {
                  let txtArry = b.name.split('');
                  let rs = "";
                  for (var i = 0; i < txtArry.length; i++) {
                    rs += txtArry[i] + "\n";
                  }
                  return rs;
                },
              },
              itemStyle : {
                color: 'red'
              },

              leaves: {
                label: {
                  position: 'bottom',
                  fontSize: 18,
                  color: "#2f89cf",
                },
              },
              animationDurationUpdate: 750,
               roam: "move"
            }],

        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });

      }
    }
  }
</script>

<style scoped>

</style>
