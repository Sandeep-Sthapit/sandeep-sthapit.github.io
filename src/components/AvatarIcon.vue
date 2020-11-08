<template>
    <div class="avatar">
        <img :src="imageItem.src" :alt="imageItem.alt"/> 
    </div>
</template>

<script>
export default {
    props: {
        imageItem: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .avatar{
        border-radius: 50%;
        margin: 1rem;
        overflow: hidden;
        width: 12rem;
        height: 12rem;
    }
    .avatar>img{
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
    }
</style>