<template>
  <div>
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
  </div>
</template>

<script>
export default {};
</script>

<style></style>
