<template>
  <div class="Layout_index">
    <Mymenu class="left_menu" :isCollapse="isCollapse" />
    <Content
      class="right_menu"
      :class="{ isHidemenu: isCollapse }"
      :isCollapse="isCollapse"
      @changeCollapse="changeCollapse"
    />
  </div>
</template>

<script>
import Mymenu from "./Mymenu.vue";
import Content from "./Content.vue";
import "css/Layout/Layout.less";
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  components: {
    Mymenu,
    Content,
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style></style>
