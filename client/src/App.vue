<template>
  <div id="app">
    <FreelancerWrapper />
  </div>
</template>

<script>
import FreelancerWrapper from './components/FreelancerWrapper.vue';

export default {
  name: 'App',
  components: {
    FreelancerWrapper,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
