<template>
  <div class="container">
    <Header  />
    <AboutMe />
    <Education />
    <Experience />
    <Projects />
    
  </div>
</template>

<script>
import Header from './components/Header';
import AboutMe from './components/AboutMe/AboutMe.vue';
import Experience from './components/Experience/Experience.vue';
import Projects from './components/Projects/Projects.vue';
import Education from './components/Education/Education.vue';



export default {
  name: "App",
  components: {
    Header,
    AboutMe,
    Experience,
    Projects,
    Education,
    
  }
};
</script>

<style scoped>

</style>