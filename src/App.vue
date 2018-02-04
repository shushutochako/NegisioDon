<template>
  <div id='app'>
    <div class="header-container">
      <router-link to="/new-arrivals" class="common-header">駅の掲示板</router-link>
      <div class="inner-container">
        <router-link to="/register-account" class="header-link">新規登録</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ExampleComponent from "@/components/Example";
export default {
  components: {
    myComponent: ExampleComponent
  },
  name: "app",
  data() {
    return {
      counter: 1
    };
  },
  methods: {
    countUp() {
      this.counter++;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
