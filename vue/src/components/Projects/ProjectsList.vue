<template>
    <div>
        <div v-for="data in alldata" :key="data.id">
            <ProjectData :data="data"/>
        </div>
    </div>
</template>



<script>
import ProjectData from './ProjectData.vue';

export default {
    name: "ProjectsList",
    components: {
        ProjectData,
    },
    props: {
        alldata: Array,
    }
};
</script>