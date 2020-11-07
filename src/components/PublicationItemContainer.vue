<template>
    <li class='pub-container'>
        <h2 class='category'>{{ publicationItem.category }}</h2>
        <div class="pub-items"  v-for="(item, idx) in publicationItem.items" :key="idx">
            <a :href="item.titleLink" class="green-link" v-if="item.titleLink" target="_blank">
                <p class='title'>{{ item.title }}</p>
            </a>
            <p class='title title-no-link' v-else>{{ item.title }}</p>
            <p class='authors' v-if="item.authors">{{ item.authors }}</p>
            <p class='institution' v-if="item.institution">{{ item.institution }}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        publicationItem:{
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
.pub-container{
    list-style: none;
    margin:auto;
    margin-bottom: 2rem;
}
.pub-container:last-child{
    margin-bottom: 1rem;
}
.category{
    color: #3F3F3F;
    font-size: 1.2rem;
    margin: 0;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    font-family: 'Open Sans', sans-serif;
}
.pub-items{
    color: #444;
}
.title{
    font-size: 1.2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
    font-family: 'Open Sans', sans-serif;
}
.authors{
    margin: 0.25rem 0;
    font-family: 'Quicksand', sans-serif;
}
.title-no-link{
    color: #666;
}
.institution{
    font-size: 0.9rem;
    color: #444;
    margin-top: 0.25rem;
    font-family: 'Quicksand', sans-serif;
}

</style>