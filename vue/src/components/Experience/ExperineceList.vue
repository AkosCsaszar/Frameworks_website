<template>
    <div>
        <div v-for="data in alldata" :key="data.id">
            <ExperinceData :data="data"/>
        </div>
    </div>
</template>



<script>
import ExperinceData from './ExperinceData.vue';

export default {
    name: "ExperienceList",
    components: {
        ExperinceData,
    },
    props: {
        alldata: Array,
    }
};
</script>