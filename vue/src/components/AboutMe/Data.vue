<template>
    <p>{{ data.text }}</p>
</template>


<script>
export default {
    name: 'Data',
    props: {
        data: Object
    }
}
</script>