<template>
  <div class="add-blog">
    <h2>添加博客</h2>
    <form>
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required>

      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js">
        <label>React.js</label>
        <input type="checkbox" value="React.js">
        <label>Angular4.js</label>
        <input type="checkbox" value="Angular4.js">
      </div>
    </form>
    <hr>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
      blog:{
        title:"",
        content:""
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
