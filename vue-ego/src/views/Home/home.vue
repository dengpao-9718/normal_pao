<template>
  <div class="home pao_home">
    <ul class="top_data">
      <li v-for="(item, index) in top_data" :key="index">
        <h2>{{ item.title }}</h2>
        <span>{{ item.all_price }}</span>
        <div class="info-text">
          <p>
            今日销售额：<span>{{ item.today_price }}</span>
          </p>
        </div>
      </li>
    </ul>
    <div class="echarts_wrap">
      <div class="sale_part">
        <div id="charts" style="width: 100%; height: 360px"></div>
      </div>
      <div class="area_wrap"></div>
    </div>

    <!-- 最新内容 -->
    <div class="home-footer">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>最新内容</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>新增产品</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>快捷入口</span>
        </div>
        <div class="text item">
          <el-button type="primary">产品管理</el-button>
          <el-button>消息管理</el-button>
          <el-button>内容管理</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import "css/home_content/index.less";
import Mock from "mockjs";
export default {
  data() {
    return {
      top_data: [],
      totalData: [],
    };
  },
  mounted() {
    console.log("this.$echarts.init", this.$echarts);
    this.$api.getSellTotal().then((res) => {
      console.log(res.data);
      //获取x轴数据
      let xData = res.data.info.date;
      //获取数据
      let xResult = res.data.info.xResult;
      let titleArr = [];
      let data = [];
      xResult.forEach((element) => {
        titleArr.push(element.xName);
        element.data.forEach((item) => {
          data.push(item.num);
        });
      });
      console.log(data);
      this.echartsInit(
        xData,
        data.slice(0, 6),
        data.slice(6, 12),
        data.slice(12, 18)
      );
    });

    this.init();
  },
  methods: {
    echartsInit(data, data1, data2, data3) {
      let charts = this.$echarts.init(document.getElementById("charts"));
      let option = {
        title: {
          text: "月销售额",
          link: "/",
          textStyle: {
            textBorderColor: "rgba(237, 6, 6, 1)",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          show: true,
          data: ["家具", "手机", "家电"],
          left: 100,
          zlevel: 100,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "0%",
          right: "3%",
          bottom: "3%",
          containLabel: true,
          show: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "家具",
            type: "line",
            smooth: true,
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: data1,
          },
          {
            name: "手机",
            type: "line",
            smooth: true,
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: data2,
          },
          {
            name: "家电",
            type: "line",
            smooth: true,
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: data3,
          },
        ],
      };
      charts.setOption(option);
    },
    init() {
      this.$nextTick(() => {
        this.fakeData();
      });
    },
    fakeData() {
      const faker_data = Mock.mock({
        "top_data|4": [
          {
            "id|+1": 0,
            "title|+1": ["总销售额", "访问量", "支付总量", "收藏量"],
            "all_price|10000-2000": 1,
            "today_price|100-1000": 1,
          },
        ],
      });
      console.log(faker_data.top_data);
      this.top_data = faker_data.top_data;
      return;
    },
  },
};
</script>

<style lang="less" scoped></style>
