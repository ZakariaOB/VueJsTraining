Vue.component('my-cmp', {
    data: function() {
        return {
            status: 'Critical'
        }
    },
    template: '<div>Server status : {{status}}</div>'
});

new Vue({
    el : '#app',
    data : {
        title: 'Hello VueJs',
        link : 'https://www.google.com/'
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value;
        }
    }
});