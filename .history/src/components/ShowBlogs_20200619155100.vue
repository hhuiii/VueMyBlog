<template>
  <div id="show-blogs">
    <h1>博客总览</h1>
    <div class="single-blog" v-for=""></div>
  </div>
</template>

<script>


export default {
  name: 'show-blogs',
  data(){
    return{

    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
</script>

<style>

</style>
