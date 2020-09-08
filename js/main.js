Vue.component('async-component', function(resolve, reject) {
    setTimeout(function() {
        resolve({
            template: `<div> Async component <slot> </slot></div> 
                        
                        `
        })
    }, 1000)
})

Vue.component('new-component', {
    data: function () {
        return {
            count: 0
        } 
    },
    props: ['title'],
    template: `
        <div class="blog-post">
            <button @click="$emit('enlarge-text', 0.1)" >  
                {{ title }}  
            </button> 
            <button @click="$emit('down')" >  
                {{ title }}  
            </button> 
        </div>
    `
})

var mixin = {
    data: {
        mix: true,
    }
}


var ComponentA = {
    template: `
        <div class="blog-post">
            Cục bộ
        </div>
    `

}
var vm = new Vue({
    el: "#app",
    mixins: [mixin],
    data: {
        content : "new",
        interval: "",
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10],
        hasActive: true,
        activeClass: 'active',
        errorClass: 'text-danger',
        input: '',
        styleObject: {},
        loginType: 'username',
        postFontSize: 1,
        title: 'oayijio'
    },	
    computed: {
        
        evenNumbers () {
            return this.numbers.filter(function (number) {
                return number % 2 == 0
            })
        },
        oldNumbers () {
            return this.numbers.filter(function (number) {
                return number % 2 != 0
            })
        },
        contentToUpper: {
            // getter
            get: function () {
                return this.content.toUpperCase()
            },
            // setter
            set: function (newValue) {
                return this.content = "hihiw"
            }
          }
       
    },
    methods: {
        changeLoginType() {
            return this.loginType == 'username' ? this.loginType = 'email' : this.loginType = 'username'
        }, 
        alertPost () {
            alert(this.postFontSize)
        },
        up (e) {
            return this.postFontSize += e
        }
    },
    watch: {
        input: function() {

        }
    },
    components: { 'component-a' : ComponentA } 
})