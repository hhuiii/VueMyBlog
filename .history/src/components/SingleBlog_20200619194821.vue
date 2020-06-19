<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
    <p>123</p>
  </div>
</template>

<script>
  export default{
    name:"single-blog",
    data(){
      return{
        id: this.$route.params.id,
        blog: {}
      }
    },
    created(){
      console.log(this.$route)
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
        this.blog = data.body;
      })
    }
  }
</script>

<style>
 #single-blog{
   max-width: 960px;
   margin:0 auto;
   padding: 20px;
   background-color: #eee;
   border: 1px dotted #aaa;
 }
</style>