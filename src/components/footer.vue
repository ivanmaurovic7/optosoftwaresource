<template>
<div id="footer">
    <div class="footerTop">
        <h2>{{companyName}}</h2>
        <div class="footer-col">
            <span>COMPANY</span>
            <small v-for="(link, index) in links" :key="index" @click="$emit('changeRoute', link.route)">{{link.title}}</small>
        </div>
        <div class="footer-col">
            <span>SERVICES</span>
            <small v-for="(service, index) in services" :key="index" @click="$emit('changeRoute', {name: 'solutions'})">{{service.title}}</small>
        </div>
        <div class="footer-col">
            <span>TECHNOLOGIES</span>
            <small>JavaScript</small>
            <small>Node.js</small>
            <small>Golang</small>
            <small>Flutter</small>
            <div class="footerIcons">
                <a v-for="(link, index) in smLinks" :key="index" :href="link.href">
                    <img :src="link.src">
                </a>
            </div>
        </div>
        <div class="footer-col">
            <my-button @click.native="$store.commit('changeContactFormState')" class="contactBtn" :marginTop="0" :btnText="'Get in touch'" :btnColor="'#fff'" :textColorOnHover="'#573df3'" :height="50" :width="180" :textSize="17"/>
        </div>
    </div>
    <hr>
    <small>© {{companyName}} 2019. All rights served.</small>
</div>
</template>

<script>
export default {
    computed: {
        companyName() {
            return this.$store.state.companyName
        },
        smLinks() {
            return this.$store.state.links
        },
        links() {
            return this.$store.state.routes
        },
        services() {
            return this.$store.state.services
        },
    }
}
</script>

<style lang="sass">
@import '@/assets/style/variables.sass'

#footer
  width: 100vw
  position: absolute
  left: 0
  bottom: 0
  background: $themeGradient
  display: flex
  flex-direction: column
  align-items: center
  justify-content: flex-end
  hr
    border-bottom: 2px solid #fff
    width: 80vw
    max-width: 1200px
  small
    margin: 12px 0 10px 0
    color: #fff
  .footerTop
    width: 80vw
    max-width: 1200px
    h2
      color: #fff
    .footer-col
        margin: 0 40px 0 70px
        display: flex
        flex-direction: column
        @media (max-width: $tabletWidth)
            display: none
        span
            color: #fff
            font-weight: bold
            font-size: 15px
            margin-bottom: 12px
        small
            margin: 4px 0
    padding: 60px 0 30px 0
    display: flex
    @media (max-width: $tabletWidth)
      flex-direction: column
      align-items: center
      padding: 20px 0 0 0
    margin-bottom: 15px
    .footerIcons
      display: flex
      margin: 10px 0
      @media (max-width: $tabletWidth)
        margin: 10px 10px 0 10px
      a
        cursor: none
        width: 30px
        height: 30px
        margin: 0 7px 0 0
        transition: transform .5s ease-in-out
        &:hover
          transform: scale(1.2)
        img
          width: 100%
          height: 100%
</style>