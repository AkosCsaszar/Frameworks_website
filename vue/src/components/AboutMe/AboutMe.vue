<template>
    <section id="about">
            <div class="wrapper">
                <div class="headerTextAbout">
                    <div class="line"></div>
                    <h1 class="text">ABOUT ME</h1>
                    <div class="line"></div>
                </div>
                <div class="sectionContent">
                    <AllData :alldata="alldata"/>
                </div>
            </div>
    </section>
</template>

<script>

import AllData from './AllData.vue';


export default {
  name: "AboutMe",
  components: {
    AllData,
},
  data(){
      return {
          alldata: []
      }
  },
  methods: {
      async fetchData() {
          const res = await fetch('http://localhost:5000/aboutmeData')
          const dataFromServer = res.json()

          return dataFromServer

          
      }
      
  },
  async created() {
      this.alldata = await this.fetchData()
    }
};
</script>

<style scoped>
.headerTextAbout {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 40px 20px;
    
}

.line {
    height: 2px;
    background: #0c2119;
    flex: 1;
}

.wrapper {
    max-width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.text {
    font-weight: 800;
    font-size: 2.5rem;
    -webkit-text-stroke: 1.5px #0c2119;
    -webkit-text-fill-color: transparent;
}

.sectionContent {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 10px;
    text-align: center;
}



@media (min-width: 650px) {
    .text {
        font-size: 4rem;
        -webkit-text-stroke: 2px #0c2119;
    }
    
}
</style>