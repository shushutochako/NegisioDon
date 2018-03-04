<template>
  <li>
    <div class="container">
      <div class="thumbnail-container">
        <img class="thumbnail" v-bind:src="item.thumbnailUrl">
      </div>
      <div class="title-container">
        {{ item.title }}
      </div>
      <div class="content-container">
        {{ item.content }}
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "NewArrivalItem",
  props: ["item"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 10px;
  background: #fafafa;
  width: 300px;
  height: 300px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column; /* Safari */
  flex-direction: column;
}
.thumbnail{
  width: 100%;
  height: 100%;
}
.thumbnail-container {
  height: 180px;
}
.title-container {
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 16px;
}
.content-container {
  height: 45px;
  flex-grow: 1;
  text-align: left;
  padding-left: 16px;
}
</style>
