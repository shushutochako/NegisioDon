<template>
  <li>
    <div class="content">{{ item.message }}</div>
  </li>
</template>

<script>
export default {
  name: "NewArrivalItem",
  props:['item'],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  margin: 10px;
  background: lightblue;
  width: 300px;
  height: 300px;
}
</style>
