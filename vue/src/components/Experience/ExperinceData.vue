<template>
    <div class="experienceComponent">
        <h1 class="company">{{data.company}}</h1>
        <h2 class="type">{{data.type}}</h2>
        <ul class="description">{{data.description}}</ul>
        <p class="date">{{data.date}}</p>
    </div>
</template>

<script>
export default {
    name: 'ExperinceData',
    props: {
        data: Object,
    },
}
</script>

<style>
.experienceComponent {
    border: 1px solid;
    border-radius: 2rem;
    padding: 4px;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.25rem;
    background-color: #0c2119;
    box-shadow: -20px 20px 10px rgba(0,0,0,0.3);
    transition-duration: 300ms;
    cursor: pointer;
}

.experienceComponent:hover {
    transform: scale(1.05);
    
}


.company,
.type,
.description,
.date {
    color: white;
}

.type {
    font-weight: 300;
    font-size: smaller;
}

.date {
    font-size: smaller;
}
</style>