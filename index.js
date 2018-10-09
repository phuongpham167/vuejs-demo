var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: "#app-2",
  data: {
  	message: "You loaded this page on" + new Date().toLocaleString()
  }
})

var app3 = new Vue({
	el: "#app-3",
	data: {
		seen: true
	}
})

var app4 = new Vue({
	el: "#app-4",
	data:{
		todos: [
          { text: "Pham Thi Thu Phuong" },
          { text: "Nguyen Thanh Cong" },
          { text: "Vu Hoang Long" }
		]
	}
})

var app5 = new Vue({
	el: "#app-5",
    data: {
      message: "qua lai khach cho song lang song"
    },
    methods: {
      reverseMessage: function(){
        this.message = this.message.split(" ").reverse().join(" ")
      }
    }
})