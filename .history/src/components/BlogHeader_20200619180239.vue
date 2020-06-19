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
    list-style: none;
    margin: 0 10px;
  }
  a{
    text-decoration-line: none;
    color: #ffffff;
  }
  nav{
    background: crimson;
    margin-bottom: 40px;
    padding:30px 0;
  }
</style>