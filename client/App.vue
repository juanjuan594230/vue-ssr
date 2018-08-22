<template>
  <div>
    <h1>{{message}}</h1>
    <router-link to="/login">login</router-link>
    <router-link to="/">todo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: 'SSR'
    };
  }
};
</script>

