<template>
<section id='about-me'>
    <h2 
    data-aos="fade-up" 
    data-aos-offset="100"
    data-aos-duration="500" 
    class='about-head-txt'>Hi, I'm Benny.</h2>
    <div class='pic'></div>
        <!-- <a href='#' class='ghost'>LinkedIn</a>
        <a href='#' class='ghost'>GitHub</a> -->

    <h3 
    data-aos="fade-up" 
    data-aos-offset="100"
    data-aos-duration="500" 
    class='about-info'>I'm a full-stack developer seeking new opportunities in the Triangle area of North Carolina.</h3>
    <p 
    data-aos="fade-up" 
    data-aos-offset="100"
    data-aos-duration="500" 
    class='about-more-txt'>I found my passion for web development as a teenager editing the stylesheet on my Tumblr blog.
    Today, I enjoy building with a variety of technologies, including:</p>
    <ul 
    class='list-of-tech'>
        <li
        data-aos="fade-up" 
        data-aos-offset="100"
        data-aos-duration="500">
        HTML</li>
        <li
        data-aos="fade-up" 
        data-aos-offset="100"
        data-aos-duration="500">CSS</li>
        <li
        data-aos="fade-up" 
        data-aos-offset="100"
        data-aos-duration="500">Sass</li>
        <li
        data-aos="fade-up" 
        data-aos-offset="100"
        data-aos-duration="500">JavaScript</li>
        <li
        data-aos="fade-up" 
        data-aos-offset="100"
        data-aos-duration="500">Python</li>
        <li
        data-aos="fade-up" 
        data-aos-offset="100"
        data-aos-duration="500">Django</li>
        <li
        data-aos="fade-up" 
        data-aos-offset="100"
        data-aos-duration="500">Vue</li>
    </ul>

    <p 
    data-aos="fade-up" 
    data-aos-offset="100"
    data-aos-duration="500"
    class='about-more-more-txt'>Those are just the languages and frameworks I know. The list of technologies I'm excited to learn would be too long to display here.</p>
    
    <a 
    data-aos="fade-up" 
    data-aos-offset="100"
    data-aos-duration="500"
    href='#projects' id="cool-stuff" class='ghost'>Enjoy all the cool stuff I've built</a>
</section>
</template>

<script>

export default {
  name: 'About',
  mounted() {
    AOS.init()
  }
};

</script>