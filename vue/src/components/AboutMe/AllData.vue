<template>
  <div>
    <div v-for="data in alldata" :key="data.id">
      <p class="paragraph">{{data.text}}</p>
    </div>
  </div>
</template>

<script>


export default {
  name: "AllData",
  props: {
    alldata: Array,
  }
  
};
</script>

<style>
.paragraph {
    border: 1px solid #0c2119;
    border-radius: 2rem;
    padding: 20px;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.25rem;
    box-shadow: -20px 20px 10px rgba(0,0,0,0.3);
    transition-duration: 300ms;
    cursor: pointer;
}


.paragraph:hover {
    transform: scale(1.05);
}
</style>