<template>
  <div class="newArrivals">
    <h1>{{ msg }}</h1>
    <div class="container">
      <li v-for="item in items" v-bind:key="item.message">
        <div class="content">{{ item.message }}</div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewArrivals",
  data() {
    return {
      msg: "NewArrivals",
      items:[
        { message: "item aa"},
        { message: "item bb"},
        { message: "item cc"},
        { message: "item 4"},
        { message: "item 5"},
        { message: "item 6"},
        { message: "item 6"},
        { message: "item 6"},
      ]
    };
  },
  methods: {
    countUp () {
      this.counter++
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
}
.content {
  margin: 10px;
  background: lightblue;
  width: 300px;
  height: 300px;
}

</style>
