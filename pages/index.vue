<!--
frt-index.vue
此文件为前端首页页面，负责展示 JISHI Studio 的介绍和 Three.js 动画背景。
-->
<template>
  <div class="home-page">
    <div id="bg-canvas"></div>
    <nav class="navigation">
      <div class="nav-left">
        <a href="/" class="active">JISHI</a>
      </div>
      <div class="nav-center">
        <a href="/works">WORKS</a>
      </div>
      <div class="nav-right">
        <a href="/about">ABOUT</a>
      </div>
    </nav>
    <main class="home-container">
      <div class="home-content">
        <p class="main-text">即是设计，是由刘鑫和星陈发起的双人合作设计工作室，专注于品牌设计及网站建设。</p>
        <p class="main-text">我们没有复杂的公司层级，每一次联络、提案、创作，都是由我们直接参与，与您共同经历。</p>
        <p class="main-text">设计理然如此，每个项目，即是唯一。</p>
      </div>
    </main>
  </div>
</template>

<script setup>
// 导入 Three.js
import * as THREE from 'three'
import { onMounted, onBeforeUnmount } from 'vue'
import { useHead } from '#imports'

// 设置页面头部信息
useHead({
  title: 'JISHI Studio',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { charset: 'UTF-8' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/images/jishi/Untitled.svg' }
  ]
})

let renderer, scene, camera, torus
let animationId

onMounted(() => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById('bg-canvas').appendChild(renderer.domElement)

  const torusGeometry = new THREE.TorusGeometry(7.5, 0.2, 30, 100)
  const metalMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.9,
    roughness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    reflectivity: 1.0
  })
  torus = new THREE.Mesh(torusGeometry, metalMaterial)
  scene.add(torus)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)

  camera.position.z = 20

  let targetRotationX = 0
  let targetRotationY = 0
  let currentRotationX = 0
  let currentRotationY = 0

  function onMouseMove(event) {
    targetRotationX = (event.clientY / window.innerHeight - 0.5) * 0.5
    targetRotationY = (event.clientX / window.innerWidth - 0.5) * 0.5
  }
  window.addEventListener('mousemove', onMouseMove)

  function onResize() {
    const width = window.innerWidth
    const height = window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }
  window.addEventListener('resize', onResize)

  function animate() {
    currentRotationX += (targetRotationX - currentRotationX) * 0.05
    currentRotationY += (targetRotationY - currentRotationY) * 0.05
    torus.rotation.x = currentRotationX
    torus.rotation.y = currentRotationY
    torus.rotation.z += 0.001
    renderer.render(scene, camera)
    animationId = requestAnimationFrame(animate)
  }
  animate()

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('resize', onResize)
    if (renderer) {
      renderer.dispose()
    }
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
    // 清理 Three.js 场景
    if (scene && torus) {
      scene.remove(torus)
      torus.geometry.dispose()
      torus.material.dispose()
    }
  })
})
</script>

<style scoped>
/* @import url('/css/style.css'); */
</style>