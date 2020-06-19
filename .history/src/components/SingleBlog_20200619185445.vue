<template>
  <div id="single-blog">
    
  </div>
</template>

<script>
  export default{
    name:"single-blog",
    data(){
      return{
        id:data.id,
        blog:{}
      }
    },
    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts/'
          + this.id)
          .then(function(data){
            console.log(data)
          })
    }
  }
</script>