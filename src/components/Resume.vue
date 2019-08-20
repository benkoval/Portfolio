<template>
<section id='resume'>
    <h1 
    data-aos="fade-up"
    data-aos-duration="500"
    class='placeholder-res'>A resume will live here, at some point.</h1>
</section>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'About',
  mounted() {
    AOS.init()
  }
};

</script>