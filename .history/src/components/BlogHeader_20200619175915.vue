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
    display: flex;
    list-style: none;
  }
  a{
    text-decoration-line: none;
    display: block;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color:#6677cc;
    color: #ffffff;
    border-radius: 4px;
    margin-left:20px;
  }
</style>