<template>
    <section>
        <div class="wrapper">
                <div class="headerTextEducation">
                    <div class="line"></div>
                    <h1 class="text">EDUCATION</h1>
                    <div class="line"></div>
                </div>
                <div class="sectionContent">
                    <EducationList :alldata="alldata"/>
                </div>
        </div>
    </section>
</template>

<script>
import EducationList from './EducationList.vue';

export default {
    name: "Education",
    components: {
    EducationList,
  },
  data() {
    return {
      alldata: [],
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch("http://localhost:5000/education");
      const data = res.json();

      return data;
    },
  },
  async created() {
    this.alldata = await this.fetchData();
  },
}
</script>

<style scoped>
.headerTextEducation {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 40px 20px;
}
.wrapper {
    background-color: #0c2119;
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
.line {
    height: 2px;
    background: white;;
    flex: 1;
}
.text {
    font-weight: 800;
    font-size: 2.5rem;
    -webkit-text-stroke: 1.5px white;
    -webkit-text-fill-color: transparent;
}

@media (min-width: 650px) {
    .text {
        font-size: 4rem;
        -webkit-text-stroke: 1px white;
    }
    
}

</style>