<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">博客</router-link>
        <router-link to="/add">写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default{
    name:"blog-header"
  }
</script>

<style scoped>
  ul{
    list-style-type: none;
    text-align: center;
    margin:0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    text-decoration-line: none;
    color: #ffffff;
    padding: 12px;
  }
  nav{
    background: crimson;
    margin-bottom: 40px;
    padding:30px 0;
  }
  a.active{
    background: rgba(255,255,255,.8);
    color: #444;
  }
</style>