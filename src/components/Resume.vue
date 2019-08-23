<template>
<section id='resume'>
    <h2
    data-aos="fade-up"
    data-aos-duration="500"
    class='placeholder-res'>Check out my resume <a id='resume-link' target='blank' rel='noopener' href='https://drive.google.com/file/d/1fY8yCFVSzb8AIpc2H0LnXV0Pczdg2LLm/view?usp=sharing'>here</a></h2>
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