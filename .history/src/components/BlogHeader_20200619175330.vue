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

<style>
  li{
    display: block;
    width: 60px;
    height: 30px;
    text-align: center;
    background-color: blue;
    color: #ffffff;
    border-radius: 4px;
  }
</style>