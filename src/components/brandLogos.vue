<template>
    <div class="brandLogosContainer">
        <h1>We’ve helped these partners to build their digital products</h1>
        <div class="logos">
            <img v-for="(logo, index) in logos" :key="index" :src="logo">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logos: [require('@/assets/img/logo1.png'), require('@/assets/img/logo3.png'), require('@/assets/img/logo4.png'), require('@/assets/img/logo5.png'), require('@/assets/img/logo6.png'), require('@/assets/img/logo7.png'),]
        }
    },

    methods: {
        scrollReveal() {
            if(window.pageYOffset > document.querySelector('.brandLogosContainer').offsetTop - (window.innerHeight/3)) {
                document.querySelector('.brandLogosContainer').classList.add('show-brandLogosContainer')
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

.brandLogosContainer
    background: $backgroundColor
    width: 100vw
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    h1, .logos
        transition: all 1s ease
        opacity: 0
        transform: translateY(30%)
    .logos
        transition-delay: .5s
    h1
        text-align: center
        font-size: 27px
        @media (max-width: $tabletWidth)
            font-size: 22px
            width: 80%
        @media (max-width: $smartphoneWidth)
            font-size: 18px
    .logos
        margin-top: 40px
        width: 36vw
        display: flex
        flex-wrap: wrap
        @media (max-width: $tabletWidth)
            width: 45vw
        @media (max-width: $smartphoneWidth)
            width: 66vw
        img
            width: 12vw
            height: 7vw
            @media (max-width: $tabletWidth)
                width: 15vw
                height: 8vw
            @media (max-width: $smartphoneWidth)
                width: 22vw
                height: 12vw
            opacity: .8
            transition: 1s ease
            &:hover
                opacity: 1

.show-brandLogosContainer
    h1, .logos
        opacity: 1 !important
        transform: translateY(0) !important
</style>