<template>
    <div class="blog2-container">
      <h1>Blog2 页面</h1>
      <div class="card-list">
        <!-- 用v-for循环渲染每个文本 -->
        <div class="card" v-for="(item, index) in texts" :key="index">
          <!-- 只展示文本，不跳转 -->
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Blog2',
    data() {
      return {
        texts: [] // 用来保存后端返回的文本数组
      }
    },
    mounted() {
      // 用fetch请求后端接口
      fetch('http://localhost:8000')
        .then(response => response.json()) // 解析为JSON
        .then(data => {
          // 假设后端返回的是一个文本数组
          this.texts = data
        })
        .catch(error => {
          console.error('获取数据失败:', error)
        })
    }
  }
  </script>
  
  <style scoped>
  .blog2-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;
  }
  .card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  .card {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    padding: 20px;
    min-width: 180px;
    flex: 1 1 200px;
    text-align: center;
  }
  </style>