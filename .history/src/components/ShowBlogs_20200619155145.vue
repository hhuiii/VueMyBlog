<template>
  <div id="show-blogs">
    <h1>博客总览</h1>
    <div v-for="" class="single-blog" ></div>
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
    .then(function(data){
      console.log(data)
    })
  }
}
</script>

<style>

</style>
