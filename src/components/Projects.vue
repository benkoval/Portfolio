<template>
    <section class='projects-sect' id="projects">
        <h2 data-aos="fade-up"
        data-aos-duration="500"
        class='scroll-to-see'>
        Scroll to see</h2>

        <h2 data-aos="fade-up"
        data-aos-duration="500" 
        class='projects-head'>My projects</h2>

        <a data-aos="fade-up" 
        data-aos-duration="500" 
        target='blank' class='link-txt' href="https://decidor.herokuapp.com/">DecidOR</a>
        <div data-aos="fade-up"
        data-aos-duration="800" 
        class='carousel-container'>
            <carousel class='carousel'
            :scrollPerPage="true"
            :autoplay="true"
            :loop="true"
            paginationPosition="bottom"
            perPage=1
            paginationActiveColor="#42b983" 
            paginationColor="#b2ebd1">
                <slide>
                    <div class='first-img'></div>
                </slide>
                <slide>
                    <div class='second-img'></div>
                </slide>
                    <slide>
                    <div class='third-img'></div>
                </slide>
                <slide>
                    <div class='fourth-img'></div>
                </slide>
            </carousel>
        </div>

         <p data-aos="fade-up"
        data-aos-duration="500" 
        class='slide-instructions'>Hover over an image to pause the slideshow; swipe or drag through at your own speed.</p>
        <p data-aos="fade-up"
        data-aos-duration="500" 
        class='proj-description'>Over the course of two weeks, I collaborated with three of my fellow developers at Momentum Learning to build DecidOR, a web application which helps users handle the overwhelming experience of having too many decisions to make.
        We utilised various technoligies, including <span class='blue'>Django/Python, </span> <span class='green'>Vue/JavaScript, </span> <span class='pink'>Sassy CSS, </span> <span class='purple'>Axios, </span> and more.</p>

        <a data-aos="fade-up" target="blank" href="https://github.com/momentum-cohort-2019-05/w7-itunes-search-bennykoval" class='link-txt'>iPreview</a>
        <div class='pic-container'>    
            <div data-aos="fade-up"
            data-aos-duration="800"
            class='itunes-pic'></div>
        </div>
        <p data-aos="fade-up"
        data-aos-duration="500" 
        class='proj-description'>iPreview is a <span class='green'>JavaScript</span> project for fast-paced listeners who want only 30-second snippets of songs. I used <span class='purple'>Fetch</span> to retrieve data from the iTunes API.</p>

        <h3 data-aos="fade-up"
        data-aos-duration="500" 
        class='plain-txt'>Calculator</h3>
        <Calculator />
        <p data-aos="fade-up" 
        data-aos-duration="500" 
        class='proj-description'>A quick calculator which I initially built in vanilla JavaScript, then reworked into a <span class='green'>Vue component,</span> so that you can make calculations right here. Don't be shy - click some buttons!</p>
    
    <a data-aos="fade-up" 
        data-aos-duration="500" 
        target='blank' class='link-txt' href="http://freeshelf-benny.herokuapp.com">Freeshelf</a>

      <div data-aos="fade-up"
        data-aos-offset="150"
        data-aos-duration="800" 
        class='carousel-container'>
            <carousel class='carousel'
            paginationPosition="bottom"
            :scrollPerPage="true"
            :autoplay="true"
            :loop="true"
            perPage=1
            paginationActiveColor="#42b983" 
            paginationColor="#b2ebd1">
                <slide>
                    <div class='free-1'></div>
                </slide>
                <slide>
                    <div class='free-2'></div>
                </slide>
                    <slide>
                    <div class='free-3'></div>
                </slide>
            </carousel>
        </div>
    <p data-aos="fade-up"
    data-aos-duration="500" 
    class='slide-instructions'>Hover over an image to pause the slideshow; swipe or drag through at your own speed.</p>

     <p data-aos="fade-up" 
        data-aos-duration="500" 
        class='proj-description'>Built in <span class='blue'>Django,</span> Freeshelf is an online collection of free educational resources pertaining to programming. Books are categorised by language or framework; users can favourite books for later reference.</p>
    </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Calculator from "./Calculator";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'Projects',
  components: {
    Carousel,
    Slide,
    Calculator
  },
  mounted() {
    AOS.init()
  }
//    props: {
    // loop: {
    //   type: Boolean,
    //   default: true
    // },
    // navigationClickTargetSize: {
    //   type: Number,
    //   default: 10
    // },
//     perPage: {
//       type: Number,
//       default: 1
//     }
//    }
};
</script>