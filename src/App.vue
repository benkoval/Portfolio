<template>
  <main role='main'>
   <VueScrollProgress>
    <div id="app">
      <header>
        <Home/>
      </header>
        <Resume/>
        <About/>
        <Projects/>
     </div>
    </VueScrollProgress>
  </main>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Resume from './components/Resume.vue'

export default {
  name: 'app',
  components: {
    Home,
    Projects,
    About,
    Resume
  }
}
</script>