<template>
    <div class="avatar">
        <img src="https://res.cloudinary.com/sandeepsthapit/image/upload/v1604657547/Website/sandeep_pp.jpg"/> 
    </div>
</template>

<script>
export default {
    
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