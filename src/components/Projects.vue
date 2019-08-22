<template>
    <section class='projects-sect' id="projects">
        <h2 data-aos="fade-up"
        data-aos-duration="500"
        class='scroll-to-see'>
        Scroll to see</h2>

        <h2 data-aos="fade-up"
        data-aos-duration="500" 
        class='projects-head'>My projects</h2>

        <h3 data-aos="fade-up" 
        data-aos-duration="500" class='plain-txt'>decidOR</h3>

        <div data-aos="fade-up"
        data-aos-duration="800" 
        class='carousel-container'>
            <carousel class='carousel'
            :scrollPerPage="true"
            :autoplay="true"
            :loop="true"
            :autoplayHoverPause="false"
            :paginationEnabled="false"
            perPage=1
            speed=1000>
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

         <div class='code-live-container'
            data-aos="fade-up" 
            data-aos-duration="500">
            <a class='linky-links' target='blank' rel='noopener' href='https://decidor.herokuapp.com/'>Live</a>
            <a class='linky-links' target='blank' rel='noopener' href='https://github.com/decider-team/decidr'>Code</a>
        </div>

        <p data-aos="fade-up"
        data-aos-duration="500" 
        class='proj-description'>Over the course of two weeks, I collaborated with three of my fellow developers at Momentum Learning to build decidOR, a web application which helps users handle the overwhelming experience of having too many decisions to make.
        We utilised various technoligies, including <span class='blue'>Django/Python, </span> <span class='green'>Vue/JavaScript, </span> <span class='pink'>SCSS, </span> <span class='purple'>Axios, </span> and more.</p>

        <h3 data-aos="fade-up" class='plain-txt'>iPreview</h3>
        <div class='pic-container'>    
            <div data-aos="fade-up"
            data-aos-duration="800"
            class='itunes-pic'></div>
        </div>

         <div class='code-live-container'
            data-aos="fade-up" 
            data-aos-duration="500">
            <a class='linky-links' target='blank' rel='noopener' href='https://ipreview.surge.sh/'>Live</a>
            <a class='linky-links' target='blank' rel='noopener' href='https://github.com/momentum-cohort-2019-05/w7-itunes-search-bennykoval'>Code</a>
        </div>

        <p data-aos="fade-up"
        data-aos-duration="500" 
        class='proj-description'>iPreview is a <span class='green'>JavaScript</span> project for fast-paced listeners who want only 30-second snippets of songs. I used <span class='purple'>Fetch</span> to retrieve data from the iTunes API.</p>

        <h3 data-aos="fade-up"
        data-aos-duration="500" 
        class='plain-txt'>Calculator</h3>
        <div
        data-aos="fade-up" 
        data-aos-duration="500" 
        class='banner'>
            <svg viewBox="0 12 400 200">
                <path id="curve" d=
                "M 90,50 
                C 200,100  
                500,20  
                200,30"/>/>
                <text width="500">
                    <textPath xlink:href="#curve">
                    Interactive
                    </textPath>
                </text>
            </svg>
        </div>
        <Calculator />

        <div
        data-aos="fade-up" 
        data-aos-duration="500" 
        id='calc-txt-container' class='code-live-container'>
            <a class='linky-links' target='blank' rel='noopener' href='https://github.com/bennykoval/Portfolio/blob/master/src/components/Calculator.vue'>Code</a>
        </div>

        <p data-aos="fade-up" 
        data-aos-duration="500" 
        class='proj-description'>A quick calculator which I initially built in vanilla JavaScript, then reworked into a <span class='green'>Vue component,</span> which means you can make calculations right on this page. Don't be shy - click some buttons!</p>
    
    <h3 data-aos="fade-up" 
        data-aos-duration="500" 
        class='plain-txt'>Freeshelf</h3>

      <div data-aos="fade-up"
        data-aos-offset="150"
        data-aos-duration="800" 
        class='carousel-container'>
           <carousel class='carousel'
            :scrollPerPage="true"
            :autoplay="true"
            :loop="true"
            :autoplayHoverPause="false"
            :paginationEnabled="false"
            perPage=1
            speed=1000>
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


    <div class='code-live-container'
    data-aos="fade-up" 
    data-aos-duration="500">
        <a class='linky-links' target='blank' rel='noopener' href='http://freeshelf-benny.herokuapp.com'>Live</a>
        <a class='linky-links' target='blank' rel='noopener' href='https://github.com/momentum-cohort-2019-05/w5-freeshelf-bennykoval'>Code</a>
    </div>

     <p data-aos="fade-up" 
        data-aos-duration="500" 
        class='proj-description'>Built in <span class='blue'>Django,</span> Freeshelf is an online collection of free educational resources pertaining to programming. Books are categorised by language or framework; users can favourite books for later reference.</p>
    
    <footer>
      <h4
        class='footer-txt'>You made it to the end - cheers! Send me a message on <a class='link pink' href="https://www.linkedin.com/in/benny-koval/" target="blank">LinkedIn</a> for a congratulatory cat photo.</h4>
    </footer>
    
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