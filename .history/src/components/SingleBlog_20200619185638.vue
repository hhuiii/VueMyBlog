<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
  export default{
    name:"single-blog",
    data(){
      return{
        id:1,
        blog:{}
      }
    },
    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts/'
          + this.id)
          .then(function(data){
            this.blog = data.body;
          })
    }
  }
</script>