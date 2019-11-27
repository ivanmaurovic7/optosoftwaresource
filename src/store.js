import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [
      {
        title: 'Home',
        route: {name: 'home'}
      },
      {
        title: 'Solutions',
        route: {name: 'solutions'}
      },
      {
        title: 'About us',
        route: {name: 'about-us'}
      },
      {
        title: 'Blog',
        route: {name: 'blog'}
      },
      {
        title: 'Careers',
        route: {name: 'careers'}
      }
    ],
    companyName: 'Opto Software',
    services: [
      {
        img: require('./assets/img/graphics.png'), 
        title: 'Content creation',
        content: 'Do you need branding or marketing assets, illustrations or animations? Our team has specialized in content creation and completed all kinds of projects, from writing and illustrations to animations and 3D modelling for big brands.'
      },
      {
        img: require('./assets/img/web.png'), 
        title: 'Web development',
        content: 'Our passionate development team creates award winning websites. We\'ve created numerous stunning websites, webportals and webapps for our clients all around the globe. Don\'t waste your precious time and reach out to us, so we can create a top-notch solution for you too.'
      },
      {
        img: require('./assets/img/mobile.png'), 
        title: 'Mobile apps',
        content: 'Have a great app idea that you want bring to life? Need an app to supplement your businesss? Want Native or ReactNative app, integrated payment gateway, bespoke CMS, API driven apps or anything else mobile app relevant? We’ve done it all.'
      },
      {
        img: require('./assets/img/ecom.png'), 
        title: 'eCommerce',
        content: 'Are you looking to get into eCommerce? Have an existing store and want to migrate to Shopify? Do you need a custom Shopify app developed? Something else? We are Shopify and WooCommerce experts and we can do pretty much anything you can imagine.'
      },
      {
        img: require('./assets/img/marketing.png'), 
        title: 'Marketing campaigns',
        content: 'Looking for a way to get more clients? Do you want to get the best results from paid advertising? Our digital marketing experts have completed over 100 advertising campaigns. Let us handle your online advertising campaigns and watch your business grow.'
      },
    ],
    links: [
        // {
        //   href: 'http://facebook.com/opto.software1',
        //   src: require('@/assets/img/fb.png')
        // },
        // {
        //   href: 'https://twitter.com/OptoSoftware',
        //   src: require('@/assets/img/tw.png')
        // },
        // {
        //   href: 'https://www.instagram.com/opto.software',
        //   src: require('@/assets/img/inst.png')
        // },
        // {
        //   href: 'https://www.linkedin.com/company/opto-software1',
        //   src: require('@/assets/img/linkedin.png')
        // },
        {
          href: 'mailto:optodoo@gmail.com',
          src: require('@/assets/img/email.png')
        }
    ],
    showContactForm: false,
  },
  mutations: {
    changeContactFormState(state) {
      state.showContactForm = !state.showContactForm
    }
  },
  actions: {

  }
})
