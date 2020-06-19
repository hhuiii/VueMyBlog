<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div v-for="blog in filteredBlogs" class="single-blog" >
      <router-link to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link> 
      <article>
        {{blog.body | snippet}}
      </article>
    </div>
  </div>
</template>

<script>


export default {
  name: 'show-blogs',
  data(){
    return{
      blogs:[],
      search:""
    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
    // this.$http.get('../static/posts.json') 请求本地数据 json文件存在static文件夹下
    .then(function(data){
      this.blogs = data.body.slice(0,10);
    })
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      })
    }
  },
  filters:{ //局部 自定义过滤器 Vue.filter 
    // "to-uppercase":function(value){
    //   return value.toUpperCase();
    // },  两种写法
    toUppercase(value){
      return value.toUpperCase();
    },
    "snippet":function(value){
      return value.slice(0,100) + "...";
    }
  },
  //局部 自定义指令 同上边自定义过滤器
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
