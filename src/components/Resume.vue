<template>
<section id='resume'>
    <h2
    data-aos="fade-up"
    data-aos-duration="500"
    class='placeholder-res'>Check out my resume <a id='resume-link' target='blank' rel='noopener' href='https://drive.google.com/file/d/1jCwsBUc1jylW0Rcd-E8000Ljd5RghCHp/view?usp=sharing'>here</a></h2>
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