<template>
    <div class="whoAreWeContainer">
        <h1>Who are we?</h1>
        <h2>We are a business idea delivery company.</h2>
        <h2>We provide you with the expertise, tools, infrastructure, brand development and professional services you need to prosper and be different.</h2>
    </div>
</template>

<script>
export default {
    
    methods: {
        scrollReveal() {
            if(window.pageYOffset > document.querySelector('.whoAreWeContainer').offsetTop - (window.innerHeight/3)) {
                document.querySelector('.whoAreWeContainer').classList.add('show-whoAreWeContainer')
            }
        },
    },

    mounted() {
        window.addEventListener('scroll', this.scrollReveal)
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollReveal)
    },
}
</script>

<style lang="sass">
@import '@/assets/style/variables.sass'

.whoAreWeContainer
    background: $themeGradient
    width: 100vw
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    h1, h2
        opacity: 0
        transform: translateY(30px)
        margin-top: 20px
        color: #fff
        text-align: center
        width: 40%
        transition: all 1s ease
        @media (max-width: $tabletWidth)
            width: 80%
            font-size: 21px
    h2
        transition-delay: .5s
        font-size: 20px
        @media (max-width: $tabletWidth)
            font-size: 16px

.show-whoAreWeContainer
    h1, h2
        opacity: 1 !important
        transform: translateY(0) !important

</style>