<template>
  <div id="app">
    <div>{{$store.state.counter}}</div>
    <div>{{$store.getters.getCounter}}</div>
    <button @click="add">点击增加1</button>
    <button @click="asyncAdd">点击异步增加2</button>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    add() {
      this.$store.commit("addCounter", 1);
    },
    asyncAdd() {
      this.$store.dispatch("asyncAddCounter", 2);
    }
  }
};
</script>

