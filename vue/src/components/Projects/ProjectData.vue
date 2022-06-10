<template>
    <div class='projectComponent'>
        <h1 class='name'>{{data.name}}</h1>
        <h2 class='technologies'>{{data.technologies}}</h2>
        <p class='description'>{{data.description}}</p>
    </div>
</template>

<script>
export default {
    name: 'ProjectsData',
    props: {
        data: Object,
    },
}
</script>

<style>
.projectComponent {
    border: 1px solid whitesmoke;
    border-radius: 2rem;
    padding: 4px;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.25rem;
    background-color: #0c2119;
    box-shadow: -30px 30px 20px rgba(0, 0, 0, 0.662);
    transition-duration: 300ms;
    cursor: pointer;
}

.name,
.technologies,
.description {
    color: rgb(233, 232, 232);
    padding: 5px;
    text-align: center;
}

.projectComponent:hover {
    
    transform: scale(1.05);
    
}
</style>