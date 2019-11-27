<template>
    <div class="container">
        <div class="section s1-about-us">
            <div class="aboutUsTopContent">
              <div class="aboutUsTopText">
                <h1>We are <span>{{companyName}}</span></h1>
                <div class="textContainer">
                    <p>{{companyName}} is a team of innovative and talented individuals who work hard together to push the standards of web and mobile products.</p>
                </div>
                <div class="textContainer">
                    <p>With our 10+ years of professional experience, you don't have to worry about anything. Just relax and let us make things work out for you.</p>
                </div>
              </div>
              <img src="@/assets/img/about-us-illustration.png" class="illustration2">
            </div>
        </div>
        <div class="section s2-about-us">
            <div class="about-us-contact">
                <div class="contactContent">
                <div class="textContainer">
                  <h2 class="contactTitle">Let's work together</h2>
                </div>
                <my-button @click.native="$store.commit('changeContactFormState')" class="contactBtn" :marginTop="30" :btnText="'Contact us'" :btnColor="'#fff'" :textColorOnHover="'#573df3'" :height="54" :textSize="18"/>
                </div>
                <div class="contactAnimation">
                <img src="@/assets/img/mail.png">
                </div>
                <my-footer @changeRoute="$emit('changeRoute', $event)"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    companyName() {
      return this.$store.state.companyName
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/style/variables.sass'
.s1-about-us
  .aboutUsTopContent
    display: flex
    @media (min-width: $smallLaptopWidth)
      padding: 25vh 12vw 295px 12vw
      align-items: center
    @media (min-width: $extraSmallLaptopWidth)
      justify-content: space-between
    @media (max-width: $smallLaptopWidth)
      padding: 35vh 0 295px 8vw
    @media (max-width: $tabletWidth)
      flex-direction: column
      padding: 150px 10vw 50px 10vw
    .illustration2
      border-radius: 20px
      width: 750px
      height: 410px
      position: relative
      @media (max-width: $smallLaptopWidth) and (min-width: $extraSmallLaptopWidth)
        width: 700px
        height: 380px
        right: 100px
        bottom: 70px
      @media (max-width: $extraSmallLaptopWidth) and (min-width: $tabletWidth)
        width: 620px
        height: 340px
        right: 120px
        bottom: 50px
      @media (max-width: $tabletWidth)
        right: 0
        margin-top: 50px
        width: 85vw
        height: 48vw
    .aboutUsTopText
      h1
        width: 600px
        opacity: 0
        animation: fade-up 1s 1s ease-out forwards
        margin-bottom: 20px
        font-size: 40px
        @media (max-width: $tabletWidth)
          font-size: 30px
          margin-bottom: 20px
        @media (max-width: $smartphoneWidth)
          font-size: 21px
        span
          background: $aboutUsTextColor
          -webkit-background-clip: text
          -webkit-text-fill-color: transparent
      .textContainer
          margin-bottom: 20px
          p
            transition: none !important
            opacity: 0
            font-weight: bold
            width: 600px
            @media (min-width: $tabletWidth) and (max-width: $smallLaptopWidth)
              width: 450px
            animation: fade-up .75s 1.65s ease-out forwards
            font-size: 15px
            @media (max-width: $tabletWidth)
              font-size: 13px
              width: 80vw

.s2-about-us
  height: 1100px
  @media (max-width: $tabletWidth)
    height: 100vh
  .about-us-contact
    #footer
      background: transparent !important
    background: $themeGradient
    width: 100%
    height: 100%
    position: relative
    display: flex
    justify-content: space-between
    align-items: center
    @media (max-width: $tabletWidth)
      justify-content: center
    @media (max-width: $tabletWidth) and (orientation: portrait)
      flex-direction: column-reverse
    @media (max-width: $tabletWidth) and (orientation: landscape)
      flex-direction: column
  .contactContent
    padding-bottom: 20vh
    @media (min-width: $tabletWidth)
      padding-left: 12vw
      margin-top: -300px
    @media (min-width: $tabletWidth)
      padding-bottom: 0
    @media (max-width: $tabletWidth)
      position: relative
    @media (max-width: $tabletWidth) and (orientation: landscape)
      bottom: 13vh
    @media (max-width: $tabletWidth) and (orientation: portrait)
      bottom: 12vh
    .textContainer
      @media (max-width: $tabletWidth) and (orientation: landscape)
        margin-top: 15px
      .contactTitle
        transition: none !important
        color: #fff
        opacity: 0
        animation: fade-up .75s 2.5s ease-out forwards
        font-size: 30px
        @media (min-width: $tabletWidth) and (max-width: $smallLaptopWidth)
          font-size: 25px
        @media (max-width: $tabletWidth)
          font-size: 20px
          text-align: center
    .contactBtn
      opacity: 0
      animation: fade-up .75s 2.5s ease-out forwards
      @media (min-width: $smallLaptopWidth)
        margin-top: 20px !important
      @media (min-width: $tabletWidth) and (max-width: $smallLaptopWidth)
        margin-top: 10px !important
      @media (max-width: $tabletWidth) and (orientation: landscape)
        margin-top: 5px !important
        margin-bottom: 10px !important
      @media (max-width: $tabletWidth) and (orientation: portrait)
        margin-top: 20px !important
      @media (min-width: $tabletWidth)
        margin-left: 0
  .contactAnimation
    padding-bottom: 20vh
    @media (min-width: $tabletWidth)
      padding-right: 12vw
    @media (max-width: $tabletWidth)
      padding-bottom: 0
      padding-top: 20vh
    animation: float-y 3s ease-in-out infinite
    margin-top: 0
    width: 600px
    @media (min-width: $tabletWidth) and (max-width: $smallLaptopWidth)
      width: 500px
    height: auto
    @media (max-width: $tabletWidth) and (orientation: portrait)
      width: 70vw
      max-width: 250px
      position: relative
      right: 3vw
      bottom: 20vh
    img
      width: 100%
      height: 100%
      @media (max-width: $tabletWidth) and (orientation: landscape)
        display: none
</style>