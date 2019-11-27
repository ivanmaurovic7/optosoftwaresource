<template>
  <div id="app">
    <div id="nav" :style="{boxShadow: windowOffsetTop > 100 ? '0 0 30px rgba(18, 28, 37, .25)' : ''}">
      <img id="logo" src="./assets/img/logoOpto.png" @click="changeRoute({name: 'home'})">
      <div @click="showMobileMenu = !showMobileMenu" class="icon" :class="{active: showMobileMenu}">
        <div class="hamburger"></div>
      </div>
      <transition name="menu-mobile">
        <div id="menuMobile" v-show="showMobileMenu">
          <div class="link" v-for="(link, index) in links" :key="index" @click="changeRoute(link.route)">
            <span>{{link.title}}</span>
          </div>
          <my-button @click.native="$store.commit('changeContactFormState')" :marginTop="20" :btnText="'Get a quote'" :width="150" :height="45" :textSize="15" :btnColor="'#e6e6e6'" :textColorOnHover="'#573df3'"/>
          <div class="socialMedia">
            <a v-for="(link, index) in socialMediaLinks" :key="index" :href="link.href">
                <img :src="link.src">
            </a>
          </div>
        </div>
      </transition>
      <div id="menu">
        <div class="link" v-for="(link, index) in links" :key="index" @click="changeRoute(link.route)">
          <span>{{link.title}}</span>
          <div class="linkUnderline" :style="{transform: ($route.name == link.route.name) ? 'scaleX(1)' : ''}"></div>
        </div>
        <my-button @click.native="$store.commit('changeContactFormState')" :style="{marginLeft: '30px'}" :btnText="'Get a quote'" :width="150" :height="45" :textSize="15" :btnColor="'#573df3'" :textColorOnHover="'#fff'"/>
      </div>
    </div>
    <div id="cursor" :style="{transform: 'translate(' + cursorX + 'px,' + cursorY + 'px)'}"></div>
    <transition name="contactContainer">
      <div class="formContainer" v-if="showContactForm">
        <div class="formCloseArea" @click="$store.commit('changeContactFormState')">
        </div>
        <div id="contactForm">
          <div id="closeFormBtn" @click="$store.commit('changeContactFormState')">
            <img src="@/assets/img/closeForm.png">
          </div>
          <div class="contactContent">
            <h1>Let's get in touch</h1>
            <small>Want to discuss about your idea or product? Have a question? Our team is here to give you 24/7 support.</small>
          </div>
          <hr>
          <div class="contactContent">
            <div class="inputContent">
              <transition name="fade">
                <h2 class="submitMsg" :class="{fadeOutClass: true, fadeOut: (contactStep != 4)}">
                  We'll reach back to you within 24 hours.
                </h2>
              </transition>
              <transition name="contactFormAnim">
                <div v-show="contactStep == 1" class="step1">
                  <label for="">What do you want to build?</label>
                  <input v-model="contactFormData.projectType" type="text" placeholder="Is it a website, store, app or something else?">
                  <br>
                  <label for="">What are the functionalities of this product?</label>
                  <textarea v-model="contactFormData.projectFunctionalities" style="resize: none;" cols="30" rows="5" placeholder="What features do you need, all the little details you'd like us to incorporate into your product..."></textarea>
                </div>
              </transition>
              <transition name="contactFormAnim">
                <div v-show="contactStep == 2" class="step2">
                  <!-- <label for="">What is your budget?</label>
                  <div class="radiosContainer">
                    <label class="radioSingle"><span>&lt; 5k$</span>
                      <input type="radio" name="radio" v-model="contactFormData.projectBudget" value="< 5k$">
                      <span class="checkmark"></span>
                    </label>
                    <label class="radioSingle"><span>5 - 25k$</span>
                      <input type="radio" name="radio" v-model="contactFormData.projectBudget" value="5 - 25k$">
                      <span class="checkmark"></span>
                    </label>
                    <label class="radioSingle"><span>> 25k$</span>
                      <input type="radio" name="radio" v-model="contactFormData.projectBudget" value="> 25k$">
                      <span class="checkmark"></span>
                    </label>
                    <label class="radioSingle"><span class="specialSpan">Not sure yet</span>
                      <input type="radio" name="radio" v-model="contactFormData.projectBudget" value="Not sure yet">
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <br><br> -->
                  <label for="">Estimated launch date</label>
                  <input v-model="contactFormData.projectDeadline" type="text" placeholder="By when do you need this done?">
                </div>
              </transition>
              <transition name="contactFormAnim">
                <div v-show="contactStep == 3" class="step3">
                  <label for="">How can we contact you?</label>
                  <input v-model="contactFormData.customerName" type="text" placeholder="Name">
                  <br>  
                  <input v-model="contactFormData.customerEmail" type="text" placeholder="Email">
                  <br>
                  <input v-model="contactFormData.customerSkype" type="text" placeholder="Skype (not required)">
                </div>
              </transition>
            </div>
            <!-- <transition name="fade">
              <div class="stepsWidget" v-if="contactStep != 4">
                <div class="step" v-for="index in 3" :key="index" :style="{backgroundColor: index == contactStep ? '#573df3' : (contactStep < index ? '#dedede'  : '#50C878')}" @click="index < contactStep || index == (contactStep + 1) ? contactStep = index : contactStep = contactStep"></div>
              </div>
            </transition> -->
            <div class="formButtons">
              <!-- <div>
                <transition name="fade">
                  <my-button v-if="contactStep != 1 && contactStep != 4" @click.native="contactPreviousStep()" class="contactBtn" :width="100" :height="45" :textSize="17" :marginTop="30" :btnText="'Back'" :btnColor="'#573df3'" :textColorOnHover="'#fff'"/>
                </transition>
                </div> -->
                <div>
                  <transition name="fade">
                    <my-button v-if="contactStep != 4" @click.native="contactNextStep()" class="contactBtn" :width="100" :height="45" :textSize="17" :marginTop="30" :btnText="contactStep < 3 ? 'Next' : 'Submit'" :btnColor="'#573df3'" :textColorOnHover="'#fff'"/>
                  </transition>
                </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div id="loader" v-if="showLoader">
      <div class="coloredPart"></div>
    </div>
    <transition name="welcome">
      <div class="welcomeScreen" v-if="showWelcome">
        <h1>Welcome to {{companyName}}</h1>
      </div>
    </transition>
    <router-view id="routerView" @changeRoute="changeRoute($event)"/>
  </div>
</template>

<style lang="sass">
@import '@/assets/style/variables.sass'
@import '@/assets/style/general_style.sass'
</style>

<script>
import axios from 'axios'

export default {
  // Fix for reloading router bug
  beforeCreate() {
    if(this.$route.name !== 'home') {
      this.$router.push({name: this.$route.name})
    }
  },

  mounted() {
    // Initialize smooth scroll
    document.documentElement.classList.add('smoothScroll')

    // Welcome screen
    setTimeout(() => {
      this.showWelcome = false
    }, 2000)

    // Track Window Offset Top
    window.onscroll = () => {
      this.windowOffsetTop = window.pageYOffset
    }

    // Check if mobile / remove cursor
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      document.querySelector('#cursor').style.display = 'none'
    } else {
      let cursor = document.querySelector('#cursor')
      window.onmousemove = () => {
        cursor.style.top = event.clientY + 'px'
        cursor.style.left = event.clientX + 'px'
      }
    }
  },

  data() {
    return {
      windowOffsetTop: 0,
      contactFormData: {
        // projectType: '',
        // projectFunctionalities: '',
        // projectBudget: '',
        // projectDeadline: '',
        customerName: '',
        customerEmail: '',
        customerSkype: '',
      },
      showWelcome: true,
      showLoader: false,
      stopSpammyBehaviour: false,
      contactStep: 3,
      showMobileMenu: false,
      translateContentY: 0,
      cursorX: 0,
      cursorY: 0
    }
  },

  computed: {
    showContactForm() {
      return this.$store.state.showContactForm
    },

    links() {
      return this.$store.state.routes
    },

    companyName() {
      return this.$store.state.companyName
    },
    
    socialMediaLinks() {
      return this.$store.state.links
    }
  },

  methods: {
    changeRoute(x) {
      // If router link selected points at current route
      if(x.name !== this.$route.name && !this.stopSpammyBehaviour) {
        document.documentElement.classList.remove('smoothScroll')
        this.stopSpammyBehaviour = true
        this.showLoader = true
        setTimeout(() => {
          this.$router.push(x)
          // Scroll to top and hide mobile menu
          window.scrollTo(0, 0)
          this.showMobileMenu = false
        }, 1500)
        setTimeout(() => {
          document.documentElement.classList.add('smoothScroll')
          this.showLoader = false
          this.stopSpammyBehaviour = false
        }, 3000)
      }
    },

    contactNextStep() {
      if(!this.stopSpammyBehaviour) {
        this.contactStep < 4 ? this.contactStep += 1 : this.contactStep = this.contactStep
        this.stopSpammyBehaviour = true
        setTimeout(() => {
          this.stopSpammyBehaviour = false
        }, 1000)
      }
    },

    contactPreviousStep() {
      if(!this.stopSpammyBehaviour) {
        this.contactStep > 1 ? this.contactStep -= 1 : this.contactStep = this.contactStep
        this.stopSpammyBehaviour = true
        setTimeout(() => {
          this.stopSpammyBehaviour = false
        }, 1000)
      }
    },

    changeCursorCoords() {
      this.cursorX = event.clientX
      this.cursorY = event.clientY
    }
  },

  watch: {
    contactStep() {
      // Used to submit the form
      if(this.contactStep >= 4) {
        // Google ads conversion tracker
        // eslint-disable-next-line
        window.gtag_report_conversion()
        // Reset the form
        setTimeout(() => {
          this.$store.state.showContactForm = false
        }, 2800)
        setTimeout(() => {
          this.contactStep = 1
        }, 3400)
        // Submit code here
        axios.post(
          "https://formcarry.com/s/9JJ5L8WQDi_", 
          this.contactFormData, 
          {headers: {"Accept": "application/json"}}
        )
      }
    },
  }
}
</script>