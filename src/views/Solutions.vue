<template>
  <div class="container">
    <div class="section s1-solutions">
      <div class="solutionsTopContent">
        <div class="solutionsTopText">
          <h1>We build successful digital <br><span>products that stand out</span></h1>
          <div class="textContainer">
            <p>Our main focus is to create reliable, performant and most importantly, profitable digital products.</p>
          </div>
          <div class="textContainer">
            <p>We believe that pleasant and seamless user experience is the most valuable trait of a high quality digital product.</p>
          </div> 
        </div>
        <img src="@/assets/img/solutions-illustration.png" class="illustration1">
      </div>
      <div class="services">
        <div class="service" v-for="(service, index) in services" :key="index">
          <div class="imgContainer">
            <div class="serviceContent">
            <div class="textContainer">
              <h4>{{service.title}}</h4>
            </div>
            <p>{{service.content}}</p>
            </div>
            <img :src="service.img">
          </div>
          <div class="textContainer">
            <h2>{{service.title}}</h2>
          </div>
        </div>
        <my-footer @changeRoute="$emit('changeRoute', $event)"/>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import '@/assets/style/variables.sass'
.s1-solutions
  .solutionsTopContent
    display: flex
    padding: 16vh 12vw 20px 12vw
    @media (max-width: $tabletWidth)
      padding: 150px 10vw 50px 10vw
    @media (min-width: $tabletWidth)
      justify-content: space-between
      align-items: center
    @media (max-width: $tabletWidth)
      flex-direction: column
    .illustration1
      margin-top: 20px
      border-radius: 20px
      width: 32vw
      height: 34vw
      @media (max-width: $tabletWidth)
        margin-top: 50px
        width: 85vw
        height: 92vw
    .solutionsTopText
      h1
        opacity: 0
        animation: fade-up 1s 1s ease-out forwards
        margin-bottom: 30px
        font-size: 40px
        @media (min-width: $smallLaptopWidth)
          width: 700px
        @media (max-width: $smallLaptopWidth)
          width: 600px
        @media (max-width: $tabletWidth)
          font-size: 30px
          margin-bottom: 20px
          width: 600px
        @media (max-width: $smartphoneWidth)
          font-size: 18px
          width: 90vw
        span
          text-decoration: underline #573df3
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
  .services
    display: flex
    flex-wrap: wrap
    justify-content: center
    background: $themeGradient
    margin-top: 100px
    padding: 125px 12vw 400px 12vw
    @media (max-width: $tabletWidth)
      margin-top: 100px
      padding: 100px 10vw 300px 10vw
    .service
      width: 220px
      height: 220px
      margin: 80px
      transform: scale(0)
      padding-bottom: 150px
      @media (max-width: $tabletWidth)
        width: 30vw
        height: 30vw
        margin: 100px 10vw
      @media (max-width: $smartphoneWidth)
        width: 60vw
        height: 60vw
        margin: 120px 3vw
      animation: fade-in .75s 1.65s ease forwards
      .imgContainer
        width: 100%
        height: 100%
        border-radius: 50%
        background: $backgroundColor
        transition: all .7s cubic-bezier(1,.005,.37,1)
        .serviceContent
          position: absolute
          top: 0
          bottom: 0
          left: 0
          right: 0
          width: 75%
          height: 95%
          margin: auto
          .textContainer
            h4
              text-align: center
              transition: all .7s cubic-bezier(1,.005,.37,1)
              transform: translateY(100%)
              opacity: 0
              font-size: 12px
              margin-bottom: 5px
          p
            transition: all .7s cubic-bezier(1,.005,.37,1)
            font-size: 8.5px
            font-weight: bold
            width: 100%
            margin: 0 auto
            text-align: center
            opacity: 0
            @media (max-width: $tabletWidth) and (orientation: landscape)
              font-size: 8px
            @media (max-width: $smallSmartphoneWidth)
              font-size: 7.25px
        img
          transition: all .7s cubic-bezier(1,.005,.37,1)
          transform: scale(1.24)
          width: 100%
          height: 100%
          display: block
          margin: auto
      .textContainer
        margin-top: 30px
        h2
          transition: all .7s cubic-bezier(1,.005,.37,1)
          text-align: center
          color: #fff
          font-size: 20px
          @media (max-width: $smartphoneWidth)
            font-size: 20px
      &:hover
        .imgContainer
          transform: scale(1.6)
          .serviceContent
            h4
              transform: translateY(0)
              opacity: 1
              font-size: 13px
          p
            opacity: 1
          img
            transform: scale(.25) translateY(190%)
        .textContainer
          h2
            opacity: 0
            transform: translateY(-100%)
  #footer
    background: transparent !important
</style>

<script>

export default {
  computed: {
    services() {
      return this.$store.state.services
    },

    companyName() {
      return this.$store.state.companyName
    },
  }
}
</script>