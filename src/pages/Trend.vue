<template>
  <div>
    <div class="trend_box">
      <ul class="clearfix">
        <li>
          <div class="boxall" style="height: 84vh">
            <div class="allnav"></div>
            <div class="boxfoot"></div>
            <div class="trend_form">
              <div class="title">
                SEIR模型参数设置
              </div>
              <div style="display: flex;justify-content: center">
                <span style="width: 33%">模型参数</span>
                <span style="width: 33%">湖北</span>
                <span style="width: 33%">非湖北</span>
              </div>
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="N">
                  <el-input v-model="formInline.user"></el-input>
                  <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item label="E">
                  <el-input v-model="formInline.user"></el-input>
                  <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item label="S">
                  <el-input v-model="formInline.user"></el-input>
                  <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item label="R">
                  <el-input v-model="formInline.user"></el-input>
                  <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item label="r">
                  <el-input v-model="formInline.user"></el-input>
                  <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item label="r2">
                  <el-input v-model="formInline.user"></el-input>
                  <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item label="B">
                  <el-input v-model="formInline.user"></el-input>
                  <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item label="B2">
                  <el-input v-model="formInline.user"></el-input>
                  <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item label="a">
                  <el-input v-model="formInline.user"></el-input>
                  <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item label="y">
                  <el-input v-model="formInline.user"></el-input>
                  <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item class="btn-commit" >
                  <el-button type="primary" @click="onSubmit">submit</el-button>
                </el-form-item>
              </el-form>

            </div>
          </div>
        </li>
        <li>
          <div class="boxall" style="height: 42vh">
            <div class="allnav"></div>
            <div class="boxfoot"></div>
            <div class="map7" id="line1"></div>
          </div>
          <div class="boxall"  style="height: 42vh">
            <div class="allnav"></div>
            <div class="boxfoot"></div>
            <div class="map7" id="line2"></div>
          </div>
        </li>
        <li>
          <div class="boxall"  style="height: 42vh">
            <div class="allnav"></div>
            <div class="boxfoot"></div>
            <div class="map7" id="line3"></div>
          </div>
          <div class="boxall" style="height: 42vh">
            <div class="allnav"></div>
            <div class="boxfoot"></div>
            <div class="map7" id="line4"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  import "@/styles/comon0.css";
  import { echarts_9,echarts_10, echarts_11,echarts_12} from "@/js/trend_echarts.js"

  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    mounted() {
      echarts_9();
      echarts_10();
      echarts_11();
      echarts_12();
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
  };
</script>

<style>
  .el-form-item__label{
    color: #ffffff;
    width: 15%;
    padding: 0 22px 0 0;
  }
  .el-form-item__content {
    width: 80%;
  }
  .el-form-item{
    margin-bottom: 0;
  }
  .el-input {
    width: 49%;
  }
  .el-input__inner{
    background-color: #fff0;
    border: 1px solid #ffffff;
    height: 30px;
  }
</style>
<style scoped>
  .title{
    margin-bottom: 5px;
  }
  .trend_form{
    margin-top: 15px;
  }
  .btn-commit{
    padding: 0 0 0 15%
  }
</style>
