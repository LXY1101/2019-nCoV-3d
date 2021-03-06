<template>

  <div id="container" style="height: 100vh"></div>
</template>

<script>
  import graph from "@/mock/1.json"

  export default {
    name: "graph",
    mounted(){
      this.init()
    },
    methods: {
      init() {
        var dom = document.getElementById("container");
        var myChart = this.$echarts.init(dom);

        var option = {
          tooltip: {},
          legend: [{
            data: graph.categories.map(function (a) {
              return a.name;
            })
          }],
          series: [
            {
              name: 'Les Miserables',
              type: 'graph',
              layout: 'none',
              data: graph.nodes,
              links: graph.links,
              categories: graph.categories,
              roam: true,
              label: {
                show: true,
                position: 'right',
                formatter: '{b}'
              },
              labelLayout: {
                hideOverlap: true
              },
              scaleLimit: {
                min: 0.4,
                max: 2
              },
              lineStyle: {
                color: 'source',
                curveness: 0.3
              }
            }
          ]
        };

        myChart.setOption(option);

      }
    }
  }
</script>

<style scoped>

</style>
