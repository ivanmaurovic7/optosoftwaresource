<template>
    <div class="container">
        <div class="section s1-careers">
            <h1>If you think you'd be a good fit for our team, send us your CV at <a href="mailto:careers@opto-software.com">careers@opto-software.com</a></h1>
            <my-footer @changeRoute="$emit('changeRoute', $event)"/>
        </div>
    </div>
</template>

<style lang="sass">
@import '@/assets/style/variables.sass'
.s1-careers
    height: 1000px
    @media (max-width: $tabletWidth)
        height: 100vh
    h1
        margin-top: 40vh
        text-align: center
        font-size: 25px
        width: 60vw
        position: relative
        left: 20vw
        @media (max-width: $tabletWidth)
            width: 90vw
            left: 5vw
            font-size: 20px
        @media (max-width: $tabletWidth) and (orientation: landscape)
            margin-top: 30vh
        a
            text-decoration: none
            color: #a923ff
</style>