<template>
  <div id="app">
    <Home/>
    <About/>
    <Projects/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'app',
  components: {
    Home,
    About,
    Projects
  }
}
</script>