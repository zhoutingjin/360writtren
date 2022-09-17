<template>
  <div class="son">
      <img :src="item.image" width="100%">
      <div class="title">{{item.title}}</div>
      <span class="author">{{item.author}}</span>
      <span class="number">{{item.number}}</span>
  </div>
</template>

<script>
export default {
props: {
    item:Object
}
}
</script>

<style scoped>
.son {
  padding: 10px;
  
}
.son img {
    border-radius: 10px;
  }
</style>