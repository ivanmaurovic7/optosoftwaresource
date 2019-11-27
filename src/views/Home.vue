<template>
  <div class="container">
    <div class="section s1-home">
      <div class="section-wrapper">
        <div class="bgAnimation bgAnim1">
          <div class="part1">
            <div class="innerPart"></div>
          </div>
          <div class="part2">
            <div class="innerPart"></div>
          </div>
        </div>
        <div class="bgAnimation bgAnim2">
          <div class="part1">
            <div class="innerPart"></div>
          </div>
          <div class="part2">
            <div class="innerPart"></div>
          </div>
          <div class="part3">
            <div class="innerPart"></div>
          </div>
        </div>
        <div class="textSplitAnimation">
          <h1 class="landingPageTextAnimation" :id="'landingPageTextAnimation' + index" v-for="(item, index) in landingPageContent.landingPageText" :key="item" v-show="index == landingPageCurrentText">{{item}}</h1>
          <div class="bgAnim3">
            <div class="innerPart"></div>
          </div>
          <transition name="fade">
            <p v-if="showSubtext" class="subText">{{landingPageContent.landingPageSubtext[landingPageCurrentSubtext]}}</p>
          </transition>
        </div>
        <transition name="fade">
          <a v-if="showDownBtn" href="#scrollTarget" id="arrowDown">
            <img src="@/assets/img/arrowDown.png">
          </a>
        </transition>
      </div>
    </div>
    <whoAreWe id="scrollTarget"/>
    <brandLogos/>
    <div class="section s2-home">
      <div class="section-wrapper">
        <h2 class="servicesTitle">What we can do for you or your business</h2>
        <div class="services">
          <div class="service" v-for="(service, index) in services" :key="index">
            <img :src="service.img">
            <div class="textContainer">
              <h2>{{service.title}}</h2>
            </div>
          </div>
        </div>
        <my-button @click.native="$emit('changeRoute', {name: 'solutions'})" :marginTop="30" :width="180" :height="50" :textSize="16" :btnText="'Find out more'"/>
      </div>
    </div>
    <div class="section s3-home">
      <div class="section-wrapper">
        <div class="contactContent">
          <div class="textContainer">
            <h2 class="contactTitle">Let's work together</h2>
          </div>
          <my-button @click.native="$store.commit('changeContactFormState')" class="contactBtn" :marginTop="30" :btnText="'Get in touch'" :btnColor="'#573df3'" :textColorOnHover="'#fff'" :height="52" :width="170" :textSize="17"/>
        </div>
        <div class="contactAnimation">
          <img src="@/assets/img/mail.png">
        </div>
        <my-footer @changeRoute="$emit('changeRoute', $event)"/>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import '@/assets/style/variables.sass'
// .s{x} represents a section
.s1-home
  height: 100vh
  .section-wrapper
    .bgAnim1
      left: 0
      top: 25vh
      .innerPart
        transform-origin: left
    .bgAnim2
      right: 0
      top: 60vh
      .innerPart
        transform-origin: right
    .bgAnimation
      width: 75px
      height: 75px
      position: absolute
      @media (max-width: $tabletWidth)
        width: 45px
        height: 45px
      div
        background-color: #e0e0e0
        width: 100%
        height: 23%
        margin-bottom: 15%
        .innerPart
          width: 100%
          height: 100%
          background: $themeGradient
      .part1, .part3
        .innerPart
          animation: landing-page-shape-animation 2.5s ease-in-out infinite
      .part2
        .innerPart
          animation: landing-page-shape-animation 2.5s 1.25s ease-in-out infinite
    .textSplitAnimation
      padding: 40vh 0 0 16vw
      @media (min-width: $tabletWidth) and (max-width: $smallLaptopWidth)
        padding: 42vh 0 0 18vw
      @media (max-width: $tabletWidth)
        padding: 40vh 0 0 0
      .bgAnim3
        width: 600px
        height: 5px
        background-color: #e0e0e0
        @media (max-width: $tabletWidth)
          width: 60vw
          height: 5px
          margin: 3px auto 12px auto
        .innerPart
          width: 100%
          height: 100%
          background: $themeGradient
          transform-origin: left
          transition: all 6.6s ease-in-out
        .showLoadAnim3
          transition-duration: 1s
          transform: scaleX(1) !important
        .hideLoadAnim3
          transform: scaleX(0)
      .landingPageTextAnimation
        font-size: 90px
        @media (min-width: $tabletWidth) and (max-width: $smallLaptopWidth)
          font-size: 60px
        @media (max-width: $tabletWidth)
          font-size: 50px
          text-align: center
        @media (max-width: $tabletWidth) and (orientation: landscape)
          font-size: 40px
        @media (max-width: $smartphoneWidth)
          font-size: 25px
      .subText
        margin-top: 50px
        text-align: center
        font-size: 30px
        font-weight: bold
        @media (min-width: $tabletWidth) and (max-width: $smallLaptopWidth)
          margin-top: 35px
          font-size: 25px
        @media (max-width: $tabletWidth)
          padding: 0 20vw
          margin-top: 0
          font-size: 25px
        @media (max-width: $tabletWidth) and (orientation: landscape)
          font-size: 18px
        @media (max-width: $smartphoneWidth)
          font-size: 16px
    #arrowDown
      position: absolute
      display: block
      left: 0
      right: 0
      bottom: 50px
      margin: 0 auto
      z-index: $navAndArrDownIndex
      width: 30px
      height: 30px
      padding: 30px
      animation: float-y 3s ease-in-out infinite
      @media (max-width: $smartphoneWidth)
        width: 20px
        height: 20px
        bottom: 15vh
      @media (max-width: $tabletWidth) and (orientation: landscape)
        width: 20px
        height: 20px
        bottom: 10px
      img
        width: 100%
        height: 100%

.show-s2-home
  .section-wrapper
    .servicesTitle
      opacity: 1 !important
      transform: translateY(0) !important
    .services
      .service
        img
          transform: scale(1) !important
        .textContainer
          h2
            transform: translateY(0) !important
            opacity: 1 !important
    .btn
      transform: translateY(0) !important
      opacity: 1 !important

.s2-home
  height: 100vh
  .section-wrapper
    background: $themeGradient
    display: flex
    flex-direction: column
    justify-content: center
    .servicesTitle
      transition: all .5s
      transform: translateY(100%)
      opacity: 0
      color: #fff
      text-align: center
      font-size: 1.5vw
      margin-top: 80px
      @media (max-width: $tabletWidth) and (min-width: $smartphoneWidth)
        font-size: 20px
      @media (max-width: $smartphoneWidth)
        font-size: 17px
      @media (max-width: $smartphoneWidth)
        padding: 0 20px
        margin-top: 40px
      @media (max-width: $tabletWidth) and (orientation: landscape)
        margin-top: 60px
    .services
      display: flex
      justify-content: center
      flex-wrap: wrap
      @media (max-width: $tabletWidth) and (orientation: portrait)
        margin-bottom: 30px
      @media (max-width: $smartphoneWidth) and (orientation: portrait)
        margin-bottom: 20px
      @media (max-width: $tabletWidth) and (orientation: landscape)
        margin-bottom: 25px
      .service
        width: 12vw
        height: 12vw
        margin: 3vw 2.5vw 4vw 2.5vw
        @media (max-width: $tabletWidth) and (orientation: portrait)
          width: 21vw
          height: 21vw
        @media (max-width: $smartphoneWidth) and (orientation: portrait)
          width: 25vw
          height: 25vw
          margin: 25px 10px
        img
          width: 100%
          height: 100%
          transition: all 1s ease
          transform: scale(0)
        .textContainer
          h2
            transform: translateY(100%)
            opacity: 0
            color: #fff
            text-align: center
            font-size: 1.1vw
            @media (max-width: $tabletWidth)
              font-size: 17px
              margin-top: 10px
            @media (max-width: $smartphoneWidth)
              font-size: 12px
              margin-top: 0
            @media (max-width: $tabletWidth) and (orientation: landscape)
              margin-top: 0
              font-size: 12px
    .btn
      transition-delay: .7s
      opacity: 0
      transform: translateY(100%)

.show-s3-home
  .section-wrapper
    .contactContent
      .textContainer
        .contactTitle
          transform: translateY(0) !important
          opacity: 1 !important
      .contactBtn
        transform: translateY(0) !important
        opacity: 1 !important

.s3-home
  height: 1100px
  @media (max-width: $tabletWidth)
    height: 100vh
  .section-wrapper
    position: relative
    display: flex
    justify-content: space-around
    align-items: center
    @media (max-width: $tabletWidth)
      justify-content: center
    @media (max-width: $tabletWidth) and (orientation: portrait)
      flex-direction: column-reverse
    @media (max-width: $tabletWidth) and (orientation: landscape)
      flex-direction: column
  .contactContent
    @media (min-width: $tabletWidth)
      margin-top: -300px
    @media (max-width: $tabletWidth)
      position: relative
    @media (max-width: $tabletWidth) and (orientation: landscape)
      bottom: 13vh
    @media (max-width: $tabletWidth) and (orientation: portrait)
      bottom: 12vh
    .textContainer
      .contactTitle
        transition: all 1s
        opacity: 0
        transform: translateY(100%)
        font-size: 30px
        @media (min-width: $tabletWidth) and (max-width: $smallLaptopWidth)
          font-size: 25px
        @media (max-width: $tabletWidth)
          font-size: 20px
          text-align: center
        @media (max-width: $smartphoneWidth)
          padding: 0 10px
    .contactBtn
      transition: all 1s .5s
      opacity: 0
      transform: translateY(100%)
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
    margin-top: 0
    height: auto
    margin-bottom: 20px
    animation: float-y 3s ease-in-out infinite
    width: 600px
    @media (min-width: $tabletWidth)
      margin-top: -300px
    @media (min-width: $tabletWidth) and (max-width: $smallLaptopWidth)
      width: 500px
    @media (max-width: $tabletWidth) and (orientation: portrait)
      width: 70vw
      max-width: 250px
      position: relative
      right: 3vw
      bottom: 13vh
    img
      width: 100%
      height: 100%
      @media (max-width: $tabletWidth) and (orientation: landscape)
        display: none
</style>

<script>

import {TimelineLite, Back} from 'gsap'
import {SplitText} from 'gsap/SplitText'

import brandLogos from '@/components/brandLogos.vue'
import whoAreWe from '@/components/whoAreWe.vue'

export default {
  components: {
    brandLogos,
    whoAreWe
  },

  data() {
    return {
      // Landing page text animation
      loadAnim: null,
      landingPageContent: {
        landingPageText: ["Digital solutions", "Web development", "Mobile apps", "eCommerce", "Enterprise solutions", "Need a custom software?"],
        landingPageSubtext: ["We create remarkable digital products", "We develop breathtaking websites", "We develop unique mobile experiences", "Want to migrate your store to Shopify?", "Want to rebuild or upgrade your system?", "Let us develop a custom solution for your needs"]
      },
      landingPageCurrentText: 0,
      landingPageCurrentSubtext: 0,
      showSubtext: true,
      showDownBtn: false,
    }
  },

  computed: {
    services() {
      return this.$store.state.services
    }
  },

  methods: {
    scrollReveal() {
      if(window.pageYOffset > document.querySelector('.s2-home').offsetTop - (window.innerHeight/3)) {
        document.querySelector('.s2-home').classList.add('show-s2-home')
      }
      if(window.pageYOffset > document.querySelector('.s3-home').offsetTop - (window.innerHeight/3)) {
        document.querySelector('.s3-home').classList.add('show-s3-home')
      }
    },
  },

  mounted() {
    // Display down button after 10 seconds
    setTimeout(() => {
      this.showDownBtn = true
    }, 10000)

    // Home page scroll reveal effect
    window.addEventListener('scroll', this.scrollReveal)

    // Landing page text animation
    let timelines = []
    this.landingPageContent.landingPageText.forEach(() => {
      let timeline =  new TimelineLite
      let mySplitText = new SplitText(`#landingPageTextAnimation${timelines.length}`, {type:"chars"})
      let chars = mySplitText.chars
      timeline.staggerFrom(chars, .5, {opacity:0, y:5, transformOrigin:"0% 50% -50",  ease:Back.linear}, .04, "+=0");
      timelines.push(timeline)
    })

    setTimeout(() => {
      document.querySelector('.bgAnim3 > .innerPart').classList.add('hideLoadAnim3')
      this.loadAnim = setInterval(() => {
          timelines[this.landingPageCurrentText].reverse()
          this.showSubtext = false
          document.querySelector('.bgAnim3 > .innerPart').classList.add('showLoadAnim3')
          setTimeout(() => {
            this.landingPageCurrentSubtext = this.landingPageCurrentSubtext == this.landingPageContent.landingPageSubtext.length - 1 ? 0 : this.landingPageCurrentSubtext + 1
            this.showSubtext = true
            this.landingPageCurrentText = this.landingPageCurrentText < this.landingPageContent.landingPageText.length - 1 ? this.landingPageCurrentText + 1 : 0
            timelines[this.landingPageCurrentText].restart()
            document.querySelector('.bgAnim3 > .innerPart').classList.remove('showLoadAnim3')
          }, 1300)
      }, 8000)
    }, 2000)
    //
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollReveal)
    clearInterval(this.loadAnim)
  },
}
</script>