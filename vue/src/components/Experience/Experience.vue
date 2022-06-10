<template>
    <section>
        <div class="wrapper">
                <div class="headerTextExperience">
                    <div class="line"></div>
                    <h1 class="text">EXPERIENCE</h1>
                    <div class="line"></div>
                </div>
                <div class="sectionContent">
                    <ExperineceList :alldata="alldata"/>
                </div>
        </div>
    </section>
</template>

<script>
import ExperineceList from './ExperineceList.vue';

export default {
  name: "Experience",
  components: {
      ExperineceList,
  },
  data(){
      return {
          alldata: []
      }
  },
  methods: {
      async fetchData() {
          const res = await fetch('http://localhost:5000/experience')
          const data = res.json()   

          return data

          
      }
      
  },
  async created() {
      this.alldata = await this.fetchData()
    }
};

</script>

<style scoped>
.headerTextExperience {
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
    background-color: white;
    max-width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.sectionContent {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 70px;
    text-align: center;
    
}

.text {
    font-weight: 800;
    font-size: 2.5rem;
    -webkit-text-stroke: 1.5px #0c2119;
    -webkit-text-fill-color: transparent;
}

@media (min-width: 650px) {
    .text {
        font-size: 4rem;
        -webkit-text-stroke: 2px #0c2119;
    }
    
}

@media (min-width: 650px) {
    
    .sectionContent {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

</style>