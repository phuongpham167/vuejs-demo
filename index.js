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
// new Vue({
// 	data: {
// 	  a: 1
// 	},
// 	created: function(){
// 		console.log('gia tri cua a la: ' + this.a)
// 	}
// })


//template sytax
//
//v-once: khong cap nhap lai du lieu khi thay doi
//v-html: bien dich ra html thuan tuy
//cu phap mustache: thong dich du lieu ra ban ban thuan tuy plain text


//computed property
var vm = new Vue({
	el: "#example1",
	data: {
	  mess: "pham thi thu phuong"
	},
	computed: {
		reverseMessage: function(){
			return this.mess.split(' ').reverse().join(' ')
		}
	}
})

//watch => tuy bien giup phan ung lai thay doi du lieu
var watchExampleVm = new Vue({
	el: "#watch-example",
	data: {
		question: '',
		answer: 'khong the tra loi cau hoi neu ban chua dat cau hoi!'
	},
	watch: {
		//bat cu khi nao cau hoi thay doi ham ben duoi se chay
		question: function(newQuestion, oldQuestion){
			this.answer = 'Dang cho ban dat cau hoi xong...'
			this.getAnswer()
		}
	},
	methods: {
		getAnswer: _.debounce(
        	function(){
        		if(this.question.indexOf('?') === -1){
                	this.answer = 'Cau hoi phai chua dau cuoi cung la ?'
                	return
        		}
        		this.answer = 'Dang suy nghi'
        		var vm = this
        		axios.get('https://yesno.wtf/api')
        		  .then(function(response){
        		  	  vm.answer = _.capitalize(response.data.answer)
        		  })
        		  .catch(function(error){
        		  	vm.answer = "Loi khong the truy cap API"
        		  })
        	},
        	500
		)
	}
})



var test1 = new Vue({
	el: "#hhi",
	data: {
	    isActive: false,
		// error: null
		styleObject: {
			color: 'red',
			fontSize: 40
		}
	},
	computed: {
		classObject: function(){
			return {
				active: this.isActive
			}
		}
	}
})

var test2 = new Vue({
	el: "#test2",
	data: {
		type: 'A',
		vs: 0
	}
})

//v-show chi bat tat tinh nang dislay cua phan tu con n van render 
//va co the nhin thay o dev-tool con v-if kiem tra that neu false n se k render ra nua

Vue.component("todo-item", {
	 template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
	el: "#todo-list-example",
	data: {
		newTodoText: "",
		todos: [
             {
             	id: 1,
             	title: 'luoc khoai',
             },
             {
             	id: 2,
             	title: 'cung chi gia gao',
             },
             {
             	id: 3,
             	title: 'nhp co vuon',
             }
		],
		newTodoText: 5
	},
	methods: {
		addNewTodo: function(){
			this.todos.push({
				id: this.newTodoId++,
				title: this.newTodoText
			})
			this.newTodoText = ''
		}
	}
})

var example1 = new Vue({
	el: "#example-1",
	data: {
		counter: 0,
		name: "Vue.js"
	},
	methods: {
		greet: function(event){
			alert("xin chao" + this.name + "!")
			// if (event) {
			// 	alert(event.target.tagName)
			// }
		}
	}
})

////////////
//COMPONENT trong vue.js
Vue.component('button-counter',{
  
  //luu y khi dinh nghia component
  //data khong truyen la object maf la 1 ham function
  data: function(){
  	return{
  		count: 0
  	}
  },
  template: '<button v-on:click="count++"> Ban da bam {{ count }} lan.</button>'
})
new Vue({ el: '#components-demo' })

Vue.component('blog-post',{
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

new Vue({
	el: '#demo-1',
	data: {
		posts: [
          { id: 1, title: 'Gioi thieu Vue' },
          { id: 2, title: 'Cac khai niem ve Vue' },
          { id: 3, title: 'Vue can ban va nag cao' },
		]
	}
})

Vue.component('alert-box', {
  //slot giup lay noi dung ben trong cua khai bao su dung component tuong tu noi dung ben trong the html
  template: `
    <div class="demo-alert-box">
      <strong>Lỗi!</strong>
      <slot></slot> 
    </div>
  `
})


//DYNAMIC COMPONENT
var tabs = [
  {
  	name: "Home",
  	component: function(){
  		template: "<p>Trang chu home</p>"
  	}
  },
  {
  	name: "Posts",
  	component: function(){
  		template: "<p>Nhung bai post</p>"
  	}
  },
  {
  	name: "About",
  	component: function(){
  		template: "<p>Contact Me</p>"
  	}
  }
]
new Vue({
	el: '#dynamic-component-demo',
	data:{
		tabs: tabs,
		currentTab: tabs[1]
	}
})