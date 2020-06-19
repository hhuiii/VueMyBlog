<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>博客总览</h1>
    <div v-for="blog in blogs" class="single-blog" >
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>
        {{blog.body}}
      </article>
    </div>
  </div>
</template>

<script>


export default {
  name: 'show-blogs',
  data(){
    return{
      blogs:[]
    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
    // this.$http.get('../static/posts.json') 请求本地数据 json文件存在static文件夹下
    .then(function(data){
      this.blogs = data.body.slice(0,10);
    })
  }
}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
