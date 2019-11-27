<template>
    <div class="container">
        <div class="section s1-blog">
            <div class="blogContent">
                <div class="posts">
                    <small>Most recent</small>
                    <div class="postSelector" v-for="(post, index) in posts" :key="index" @click="changePost(index)" :style="{backgroundColor: currentPostIndex == index ? '#573df3' : ''}">
                        <h5 :style="{color: currentPostIndex == index ? '#fff' : ''}">{{post.title}}</h5>
                    </div>
                </div>
                <div class="currentPost">
                    <h2>{{posts[currentPostIndex].title}}</h2>
                    <p v-for="(postContent, index) in posts[currentPostIndex].content" :key="index">{{postContent}}</p>
                </div>
            </div>
            <my-footer @changeRoute="$emit('changeRoute', $event)"/>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        changePost(index) {
            window.scrollTo(0, 0)
            this.currentPostIndex = index
        }
    },

    data() {
        return {
            currentPostIndex: 0,
            posts: [
                {
                    title: 'The Future of Web Development',
                    content: [
                        'Prophesizing is no easy task — when looking at web development, we cannot expect a simple linear projection from current events into the future.',
                        'Gathering data and observing trends will always leave some unnoticed details, some overlooked trends, and may very well include unnecessary data that should have been ignored. Having said that, making a guess will probably be more beneficial than choosing to remain completely indifferent and oblivious to the future.',
                        'It’s our responsibility as software developers to anticipate what’s to come and to deliver long term solutions accordingly.',
                        'Web development, as a set of technologies, practices, and institutes, is formed mainly by two forces: hardware, or more specifically, consumer devices, and the same old eternal pursuit of financial gain. When taking the task of predicting the future of web dev, an investigation of these two should be our starting point.',
                        'In the last years we’ve seen numerous new gadgets on a market — smart watches, smart glasses, smart speakers, smart TVs, foldable smartphones, etc. — in this age of IoT (internet of things), we are hardly surprised when a new ‘thing’ puts the “smart” hat on and joins the club.',
                        'What does it all mean for us as web development industry? More devices means a more diversity of platforms and of types and shapes of inputs and outputs. This means the demand for web development is about to increase.',
                        'If our aim is to get the maximum usage for our web apps, we must plan for the future and make them available to all available devices, building them in such a way that would enable us to modify them easily to any existing device but also, to be prepared for the next innovation.'
                    ]
                },
                {
                    title: 'What is software as a service (SaaS)?',
                    content: [
                        'Software as a service (SaaS) is a software distribution model where a provider hosts applications and makes them available to end users over the Internet. SaaS is one of main categories of cloud computing, alongside infrastructure as a service (IaaS) and platform as a service (PaaS).',
                        'SaaS is closely related to the application service provider (ASP) and on demand computing software delivery models. The hosted application management model of SaaS is similar to ASP, where the provider hosts the customer’s software and delivers it to approved end users over the internet.  In the software on demand SaaS model, the provider gives customers access to a single copy of an application that the provider created specifically for SaaS distribution. The application’s source code is the same for all customers and when new features or functionalities are rolled out, they are rolled out to all customers.',
                        'Depending upon the service level agreement (SLA), the customer’s data for each model may be stored locally, in the cloud or both locally and in the cloud. Organizations can integrate SaaS applications with other software using APIs. For example, a business can write its own software tools and use the SaaS provider\'s APIs to integrate those tools with the SaaS offering.',
                        'There are SaaS applications for fundamental business technologies, such as email, sales management, customer relationship management (CRM), financial management, human resource management (HRM), billing and collaboration. Leading SaaS providers include Salesforce, Oracle, SAP, Intuit and Microsoft.'
                    ]
                },
                {
                    title: 'Let\'s explain what Vue.js is.',
                    content: [
                        'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.',
                        'If you’d like to learn more about Vue before diving in, we created a video walking through the core principles and a sample project.',
                        'If you are an experienced frontend developer and want to know how Vue compares to other libraries/frameworks, check out the Comparison with Other Frameworks.'
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="sass">
@import '@/assets/style/variables.sass'
.s1-blog
    .blogContent
        margin: 8vw
        display: flex
        @media (max-width: $tabletWidth)
            flex-direction: column-reverse
        .posts
            width: 450px
            height: 60vh
            overflow: scroll
            border-right: 2px #573df3 solid
            padding: 50px
            @media (max-width: $tabletWidth)
                width: 80%
                box-sizing: border-box
                border: 0
                margin: 0 auto 200px auto
                height: auto
            @media (max-width: $smartphoneWidth)
                width: 100%
                padding: 20px
            small
                display: block
                margin-bottom: 15px
                font-weight: bold
                font-size: 15px
                color: #573df3
            .postSelector
                transition: all 1s
                border: 1px #573df3 solid
                border-radius: 20px
                padding: 12px 12px 10px 12px
                margin-bottom: 15px
                h5
                    color: #573df3
                    transition: all 1s
                    font-size: 14px
                    text-align: center
        .currentPost
            height: auto
            width: 100%
            padding: 5vw 10vw 300px 10vw
            box-sizing: border-box
            @media (max-width: $tabletWidth)
                padding: 100px 20px
            @media (max-width: $smartphoneWidth)
                padding: 100px 0
            h2
                text-align: center
                margin-bottom: 50px
                @media (max-width: $smartphoneWidth)
                    font-size: 19px
                    margin-bottom: 30px
            p
                font-size: 14px
                letter-spacing: 1px
                word-spacing: 4px
                margin-bottom: 30px
                @media (max-width: $smartphoneWidth)
                    font-size: 13px
</style>