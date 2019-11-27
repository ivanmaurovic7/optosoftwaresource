<template>
    <div class="btn" :class="{isHovered}" @mouseover="isHoveredMeth" @mouseout="isHovered = false" :style="{boxShadow: 'inset 0px 0px 0px 2px '+(btnColor || '#fff'), width: width+'px', height: (height || 55)+'px', marginTop: (marginTop || 0)+'px'}">
        <div :style="{background: (btnColor || '#fff'), transform: (isHovered ? 'scaleX(1)' : 'scaleX(0)')}"></div>
        <span :style="{color: (isHovered ? (textColorOnHover || '#573df3') : (btnColor || '#fff')), fontSize: (textSize || 18)+'px'}">{{btnText || 'My button'}}</span>
    </div>
</template>

<script>
export default {
    props: ['btnColor', 'textColorOnHover', 'btnText', 'marginTop', 'textSize', 'width', 'height'],
    data() {
        return {
            isHovered: false
        }
    },
    methods: {
      isHoveredMeth() {
        if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
          this.isHovered = true
        }
      },
      isNotHoveredMeth() {
        if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
          this.isHovered = false
        }
      }
    }
}
</script>

<style lang="sass">
@import '@/assets/style/variables.sass'

.btn
  border-radius: 30px
  margin: 0 auto
  overflow: hidden
  position: relative
  display: flex
  flex-direction: column
  justify-content: center
  transition: all .8s ease
  width: 180px
  @media (max-width: $smartphoneWidth)
    width: 150px
  div
    position: absolute
    width: 100%
    height: 100%
    transform-origin: left
    transition: all .8s ease
  span
    font-size: 17px
    margin: auto
    font-weight: bold
    transition: all 1s ease
    position: relative
    top: 2.7%
</style>