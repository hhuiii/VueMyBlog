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

  li{
    display: inline-block;
    list-style: none;
    margin: 0 10px;
  }
  a{
    text-decoration-line: none;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    border-radius: 4px;
    margin-left:20px;
  }
  nav{
    background: crimson;
    margin-bottom: 40px;
    padding:30px 0;
  }
</style>