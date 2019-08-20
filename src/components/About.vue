<template>
<section id='about-me'>
    <h2 
    data-aos="fade-up" 
    data-aos-duration="500" 
    class='about-head-txt'>Hi, I'm Benny.</h2>
    <div 
    data-aos="fade-up" 
    data-aos-duration="500" 
    class='pic'></div>
        <!-- <a href='#' class='ghost'>LinkedIn</a>
        <a href='#' class='ghost'>GitHub</a> -->
      <div 
      data-aos="fade-up" 
      data-aos-duration="500" 
      class='social-container'>
        <a href="https://github.com/bennykoval" class='ghost-smol' target="blank">GitHub</a>
        <a href="https://www.linkedin.com/in/benny-koval/" class='ghost-smol' target="blank">LinkedIn</a>
        <a href="mailto:bethanykoval@gmail.com" class='ghost-smol' target="blank">Email</a>
      </div>
    <h3 
    data-aos="fade-up" 
    data-aos-duration="500" 
    class='about-info'>I'm a full-stack developer seeking new opportunities and thrilling challenges in the Triangle area of North Carolina.</h3>
    <p 
    data-aos="fade-up" 
    data-aos-duration="500" 
    class='about-more-txt'>I found my passion for web development as a teenager editing the stylesheet on my Tumblr blog.
    Today, I work with a variety of technologies, including:</p>
    <ul 
    class='list-of-tech'>
        <li
        data-aos="fade-up" 
  
        data-aos-duration="500">
        HTML</li>
        <li
        data-aos="fade-up" 
  
        data-aos-duration="500">CSS</li>
        <li
        data-aos="fade-up" 
  
        data-aos-duration="500">Sass</li>
        <li
        data-aos="fade-up" 
  
        data-aos-duration="500">JavaScript</li>
        <li
        data-aos="fade-up" 
  
        data-aos-duration="500">Python</li>
        <li
        data-aos="fade-up" 
  
        data-aos-duration="500">Django</li>
        <li
        data-aos="fade-up" 
  
        data-aos-duration="500">Vue</li>
    </ul>

    <p 
    data-aos="fade-up" 
    data-aos-duration="500"
    class='about-more-more-txt'>I'm beyond excited to learn even more new frameworks and languages.</p>
    
    <a 
    data-aos="fade-up" 
    data-aos-duration="500"
    href='#projects' id="cool-stuff" class='ghost'>Enjoy all the cool stuff I've built</a>
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