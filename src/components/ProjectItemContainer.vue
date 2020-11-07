<template>
    <li class='project-container'>
        <a :href="projectItem.url" class="green-link" v-if="projectItem.url" target="_blank">
            <h2 class='title'>{{ projectItem.title }}</h2>
        </a>
        <p class='title title-no-link' v-else>{{ projectItem.title }}</p>
        <div class="details"  v-for="(item, idx) in projectItem.details" :key="idx">
            <p class='detail' v-html="item"></p>
        </div>
        <div class="samples" v-if="projectItem.samples">
            <div class="sample-item"  v-for="(item, idx) in projectItem.samples" :key="idx">
                <p class='img-tag'>{{ item.text }}</p>
                <img :src="item.image" :alt="item.text">
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        projectItem:{
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
.project-container{
    list-style: none;
    margin:auto;
    margin-bottom: 2rem;
}
.project-container:last-child{
    margin-bottom: 1rem;
}

.title{
    font-size: 1.3rem;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
    font-weight: normal;
    font-family: 'Open Sans', sans-serif;
}
.title-no-link{
    color: #666;
}
.details{
    font-family: 'Quicksand', sans-serif;
    margin-top: 0.5rem;
    padding: 0 2rem;
}
.detail{
    font-size: 0.9rem;
    color: #444;
    text-align: justify;
    margin-top: 0.25rem;
}
.samples{
    display: flex;
    width: 100%;
    padding: 0.5rem 2rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.sample-item{
    margin: 0.5rem 0.5rem;
    cursor: pointer;
}
.sample-item:hover .img-tag{
    opacity: 1;
}
.sample-item img{
    height: 12rem;
}
.img-tag{
    position: absolute;
    padding: 0.5rem;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #eee;
    z-index: 2;
    margin: 0;
    color: #3e3e3e;
    opacity: 0;
    transition: 0.4s ease-in-out;
}
</style>