<template>
    <li class='container'>
        <h2 class='title'>{{ educationItem.title }}</h2>
        <p class='institution' v-if="educationItem.institution">{{ educationItem.institution }}</p>
        <p class='date' v-if="educationItem.date">{{ educationItem.date }}</p>
        <p class='location' v-if="educationItem.location">{{ educationItem.location }}</p>
        <p class='detail' v-for="(detail, idx) in educationItem.details" :key="idx">
            {{ detail }}
        </p>
    </li>
</template>

<script>
export default {
    props: {
        educationItem:{
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
.container{
    list-style: none;
    margin:auto;
}
.title{
    color: #3F3F3F;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-family: 'Open Sans', sans-serif;
}
.institution{
    font-size: 1.3rem;
    color: #444;
    margin-top: 0;
    font-family: 'Open Sans', sans-serif;
}
.date{
    color: #7f7f7f;
    font-family: 'Open Sans', sans-serif;
}
.detail{
    color: #666;
    font-size: 0.9rem;
    font-family: 'Quicksand', sans-serif;
}

</style>