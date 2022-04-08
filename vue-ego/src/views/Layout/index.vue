<template>
  <div class="Layout_index">
    <Mymenu class="left_menu" />
    <Content class="right_menu" />
  </div>
</template>

<script>
import Mymenu from "./Mymenu.vue";
import Content from "./Content.vue";
import "css/Layout/Layout.less";
export default {
  data() {
    return {};
  },
  components: {
    Mymenu,
    Content,
  },
};
</script>

<style></style>
