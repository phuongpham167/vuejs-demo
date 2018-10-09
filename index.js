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

var app6 = new Vue({
	el: "#app-6",
	data: {
		message: "Sua noi dung input nay"
	}
})

// component
Vue.component("todo-item", {
  //prop: la mot thuoc tinh tuy bien
  props: ["todo"],
  template: "<li>{{ todo.text }} with id: {{ todo.id }}</li>" 
})

var app7 = new Vue({
	el: "#app-7",
	data: {
		groceryList: [
          { id: 0, text: "ca phao"},
          { id: 1, text: "mam tom"},
          { id: 2, text: "mien an duoc la duoc"},
		]
	}
})

// doi tuong 

//khoi tao 1 object data
var data = { a: 1}
//object data duoc truyen vao mot doi tuong Vue
var vm = new Vue({
	data: data
})
//truy xuat den thuoc tinh cua doi tuong vm.a
//gia tri cua object data: data.a
vm.a == data.a
// khi thay doi thuoc tinh cua vm se anh huong den du lieu ban dau
vm.b = "abc"

var obj = {
	foo: "bar"
}

//freeze ngan cho nhung thuoc tinh co san khong bi sua
Object.freeze(obj)
new Vue({
	el: "#app-obj",
	data: obj
})

//thuoc tinh va phuong thuc doi tuong( instance method va instance properties)
//ki hieu la $
vm.$data === data
vm.$e1 === document.getElementById("example")


//vong doi cua mot doi tuong
new Vue({
	data: {
	  a: 1
	},
	created: function(){
		console.log('gia tri cua a la: ' + this.a)
	}
})
