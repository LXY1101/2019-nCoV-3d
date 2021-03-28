<template>
  <div id="app">
    <!--<div v-show="this.show" style="width: 100%; height: 100%">-->
      <!--<div ref="earthContainer" style="width: 100%; height: 100%"></div>-->
    <!--</div>-->
    <!--<Map3d v-show="this.show"></Map3d>-->
    <Header></Header>
    <!--<TimeLine v-show="this.isShowTime"></TimeLine>-->
    <!--<Left v-show="this.show"></Left>-->
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
  import Header from "@/pages/Header";
  import TimeLine from "@/pages/TimeLine";
  import Left from "@/pages/Left";
  import Map3d from "@/pages/Map3d";

  import DataServer from "./js/DataServer";

  export default {
    components: {
      Header,
      Left,
      TimeLine,
      Map3d
    },
    name: 'App',
    data() {
      return {
        show: true,
        isShowTime: true,
      };
    },
    created() {
      this.$root._dataserver = new DataServer();
      window.dataserver = this.$root._dataserver;
    },
    mounted: function () {
      if (this.$route.path.fullPath === '/universal' || this.$route.path.fullPath === '/infomation' || this.$route.path.fullPath === '/trend') {
        this.show = false;
        this.isShowTime = false
      }
      this.$root._dataserver.loadAreaList();
      //创建地球
      // var earth = new XE.Earth(this.$refs.earthContainer);
      // 添加默认地球影像
      // earth.sceneTree.root = {
      //   children: [
      //     {
      //       czmObject: {
      //         name: "默认离线影像",
      //         xbsjType: "Imagery",
      //         xbsjImageryProvider: {
      //           createTileMapServiceImageryProvider: {
      //             url: XE.HTML.cesiumDir + "Assets/Textures/NaturalEarthII",
      //             fileExtension: "jpg"
      //           },
      //           type: "createTileMapServiceImageryProvider"
      //         }
      //       }
      //     }
      //   ]
      // };
      // this.$root._earth = earth;
      // window.uia = earth;

      this.$router
        .push({name: "flatmap", params: {area: "china"}})
        .catch(err => {
          err;
        });
    },
    // 资源销毁
    beforeDestroy() {
      // vue程序销毁时，需要清理相关资源
      this.$root._earth = this.$root._earth && this.$root._earth.destroy();
    },
    watch: {
      $route(path) {
        console.log(path, 'path');
        if (path.fullPath === '/universal' || path.fullPath === '/infomation') {
          this.show = false;
          this.isShowTime = false
        } else {
          this.show = true;
          this.isShowTime = false
        }
      }
    },
    methods: {
      showTime() {
        this.isShowTime = !this.isShowTime
      }
    }
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  li {
    list-style: none;
  }
</style>
