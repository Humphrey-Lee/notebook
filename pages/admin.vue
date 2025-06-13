<!--
  frtAdmin.vue
  作用：博客文章发布页面，供管理员发布新文章。
  包含：标题、内容、作者输入框，发布按钮。点击发布后通过$fetch提交到后端。
-->
<template>
  <div class="blog-publish-container">
    <h2>发布新博客文章</h2>
    <!-- 标题输入框 -->
    <label>
      标题：
      <input v-model="title" type="text" placeholder="请输入文章标题" />
    </label>
    <!-- 作者输入框 -->
    <label>
      作者：
      <input v-model="author" type="text" placeholder="请输入作者名" />
    </label>
    <!-- 内容输入框 -->
    <label>
      内容：
      <textarea v-model="content" placeholder="请输入文章内容"></textarea>
    </label>
    <!-- 发布按钮 -->
    <button @click="publishBlog" :disabled="loading">
      {{ loading ? '发布中...' : '发布' }}
    </button>
    <!-- 发布成功提示 -->
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    <!-- 错误提示 -->
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
// 引入Vue的响应式API
import { ref } from 'vue'

// 定义表单数据的响应式变量
const title = ref('')
const content = ref('')
const author = ref('')
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// 发布博客文章的方法
const publishBlog = async () => {
  // 清空提示信息
  successMessage.value = ''
  errorMessage.value = ''

  // 简单校验，防止空内容提交
  if (!title.value || !content.value || !author.value) {
    errorMessage.value = '请填写所有字段！'
    return
  }

  loading.value = true
  try {
    // 使用$fetch向后端POST数据
    await $fetch('http://localhost:8000/api/bacBlog', {
      method: 'POST',
      body: {
        title: title.value,
        content: content.value,
        author: author.value
        // 不需要传递时间，后端自动生成
      }
    })
    // 发布成功，清空表单
    title.value = ''
    content.value = ''
    author.value = ''
    successMessage.value = '发布成功！'
  } catch (err) {
    // 捕获错误并提示
    errorMessage.value = '发布失败，请稍后重试。'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.blog-publish-container {
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fafbfc;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
label {
  display: block;
  margin-bottom: 16px;
  font-weight: bold;
}
input, textarea {
  width: 100%;
  margin-top: 4px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}
textarea {
  min-height: 100px;
  resize: vertical;
}
button {
  padding: 10px 24px;
  background: #409eff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}
button:disabled {
  background: #a0cfff;
  cursor: not-allowed;
}
.success-message {
  color: #52c41a;
  margin-top: 16px;
}
.error-message {
  color: #ff4d4f;
  margin-top: 16px;
}
</style>

<!--
更改次数：1
主要内容：实现了博客文章发布表单，包含标题、内容、作者输入框，点击发布按钮后用$fetch以POST方式提交到/api/bacBlog，发布成功后清空表单并提示用户。
用途：供管理员发布新博客文章。
-->
