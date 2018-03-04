<template>
  <div class="newArrivals">
    <h1>{{ msg }}</h1>
    <div class="container">
      <newArrival-item v-for="item in items" :item="item" :key="item.message"/>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import NewArrivalItem from "./NewArrivalItem";
import axios from 'axios'

//  コンポーネントを登録
Vue.component("newArrival-item", NewArrivalItem);

export default {
  name: "NewArrivals",
  data() {
    return {
      msg: "NewArrivals",
      items: []
    };
  },
  created: async function() {
     const response = await axios.get('http://127.0.0.1:3000/new_arrivals')
     .catch((err) => {
       console.log(err);
     });

     this.items = response.data.map((elm) => {
       return {
         title: elm.title,
         content: elm.content,
         thumbnailUrl: elm.thumbnailUrl
       }
     });
  },
  methods: {
    countUp() {
      this.counter++;
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
  justify-content: center;
}
</style>
