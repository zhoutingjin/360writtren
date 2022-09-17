<template>
  <div id="app">
    <div class="navbar">
      <div class="left">
        <img src="./assets/2.jpg" width="100%" height="100%" />
      </div>
      <div class="center">
        <div>关注</div>
        <div>发现</div>
        <div>深圳</div>
      </div>
      <div class="right"></div>
    </div>
    <div class="input">
      <input type="text" placeholder=" 输入框默认内容" />
    </div>
    <div class="tag">
      <span>游戏</span>
      <span>穿搭</span>
      <span>Vlog</span>
      <span>科技数码</span>
      <span>搞笑</span>
    </div>

    <div>
      <waterfall style="display: flex">
        <waterfallitem style="flex: 1">
          <waterfallitemson
            v-for="(item, index) in data.left"
            :key="index"
            :item="item"
          ></waterfallitemson>
        </waterfallitem>
        <waterfallitem style="flex: 1">
          <waterfallitemson
            v-for="(item, index) in data.right"
            :key="index"
            :item="item"
          ></waterfallitemson>
        </waterfallitem>
      </waterfall>
    </div>

    <div class="tab-bar">
      <div>首页</div>
      <div>商城</div>
      <div><img src="./assets/1.jpg" width="40px" height="40px" /></div>
      <div>消息</div>
      <div>我的</div>
    </div>
  </div>
</template>

<script>
import Waterfall from "./waterfall/waterfall.vue";
import Waterfallitem from "./waterfall/waterfallitem.vue";
import Waterfallitemson from "./waterfall/waterfallitemson.vue";

export default {
  name: "App",
  data() {
    return {
      data: {},
    };
  },
  components: {
    Waterfall,
    Waterfallitem,
    Waterfallitemson,
  },
  created() {
    this.getData();
  },

  methods: {
    async getData() {
      const { data: res } = await this.$http.get("/getData");
      console.log(res);
      this.data = res;
      console.log(this.data);
    },
  },
};
</script>

<style>
@import "./assets/css/base.css";

.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
  display: flex;
  justify-content: space-around;
  margin: 0 10px 0 10px;
  text-align: center;
}
.input {
  width: 100%;
  margin-top: 2px;
  padding: 0 10px 0 10px;
}
input {
  border: 0px;
  outline-style: none;
  background-color: #eeeeee;
  width: 100%;
  height: 30px;
  border-radius: 15px;
}
.tag {
  margin: 5px;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.tab-bar {
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  height: 40px;
  font-size: 30px;
}
</style>
