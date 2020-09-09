#VueJS
# 1 . Computed, watcher
### Computed: 
- Is Computed Property
- you can write the expression in template like: 
```
<div id = "example">
	{{ message.split(' ').reverse().join(' ') }} 
</div>
```
- But above, we see that it is so urgly. Because it so difficult to maintain.
so we use Computed . :
```
<div id = "example">
	{{ message.reverse }} 
</div>
var vm = new Vue({
  el: '#example',
  data: {
    message: 'người đông bến đợi thuyền xuôi ngược'
  },
  computed: {
    // một computed getter
    reversedMessage: function () {
      return this.message.split(' ').reverse().join(' ')
    }
  }
})
```
### Computed và Method:
	Computed sẽ lưu vào cache, computed không thể có tham số. sử dụng getter, setter 
	Method k lưu vào cache 
	-> khi có thay đổi ở các thuộc tính phụ thuộc computed thì computed mới chạy lại . còn khoog sẽ lấy dữ liệu từ trong cache
	-> chạy mỗi lần khi gọi . 
 
### Watcher : 
theo dõi mỗi khi có thay đổi thuộc tính. phải đặt trong watch và có tên trùng với properties
vd: 
	``` 
	data: {
		content : 'new'		
	}
	watch: {
		content : function() {
			alert(content) //Khi co thay doi content thi se alert 		
		}
	}
	```

# 2 . Binding class, style: 
### Binding class: 
Sử dụng cú pháp v-bind:class : 
- sử dụng cú pháp thường : v-bind:class="{active: isActive, text-danger: hasError}"
	nếu isActive & hasError 
	->render: class="active text-danger"
- sử dụng cú pháp điều kiện: v-bind:class="{isActive ? active: ' '}
	nếu is Active 
	->render: class="active"
- sử dụng cú pháp mảng: v-bind:class="[activeClass, errorClass]"

	activeClass: active,
	errorClass: text-danger
	->render: class="active text-danger"
- sử dụng object.
### Binding style : 
Sử dụng v-bind:style : 
	tương tự binding classs.

### Render theo điều kiện : 

- v-if, v-else-if, v-else 

- v-if tái sử dụng với key : 
	Vue sử dụng lại những giá trị đã nhập để làm dữ liệu cũ 
	Nếu k muốn tái sử dụng , sử dụng key để thực hiện.
	 ```
	<div v-if="loginType === 'username'">
                <label>Username</label>
                <input placeholder="Nhập username" key="user_name">
            </div>
            <div v-else>
               <label>Email</label>
             <input placeholder="Nhập địa chỉ email" key="email">
         </div>
	```
	
- v-show sẽ hiển thị , ẩn bằng CSS bất kể điều kiện đúng hay sai
- v-show nội dung vẫn render ra và ẩn đi bằng CSS
- v-if thì không render ra khi không hợp lệ

- Ki cần ẩn hiện thường xuyên dùng v-show
- nếu điều kiện ít thay đổi sử dụng v-ìf

#### v-for: 

v-for với mảng :
	```
	v-for= "item in items"
	v-for= "(item, index) in items" 
	```
v -for với object: 
	```
	v-for= "value in obj"
	v-for = "(value, key) in obj"
	```
	

sử dụng thêm :key="item.id" 

### component: 
 - trong component data phải là một hàm . 
Đăng ký ở cấp toàn cục : Vue.component('name', {
	props:
})

Truyền dữ liệu từ cha vào component thông qua **props**

Gửi thông tin đến cha bằng sự kiện: $emit()

Lưu ý : Khi dùng trong những tag đặc biệt như ul, li, table , render component sẽ lỗi khi sử dụng : 
```
<component></component>
```
thay vào đấy ta sử dụng is="component"
```
	<table> 
		<tr is="component"></tr>
	</table> 
```


### event handle: 
v-on:click

v-on:keyup.up (arrow up)


