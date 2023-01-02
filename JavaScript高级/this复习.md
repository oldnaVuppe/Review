### 全局环境

```js
console.log(this) ==> winsow
```

### 普通函数

​		// 箭头函数的this 指向上层作用域的this

```js
(function fn(){
	console.log(this); ==> window
}
)();

(() => {
	console.log(this); ==> window
})();
```

### 函数作为对象

````js
const obj = {
	name: 'qwer',
	fn() {
		console.log(this); ==> obj
	}, 
	fn1 : () => {
		console.log(this); ==> window
	}
}
obj.fn();
obj.fn1();

var x = 1
var obj = {
  x: 3,
  fun: function(){
    var x = 5
    return this.x
  }
}
var fun = obj.fun
console.log(obj.fun(), fun()) => 3,1
````

### 事件绑定 

```js
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    console.log(this); ==> btn
    const obj = {
        fn2: () => {
            console.log(this); ==> btn
        }
    }
    obj.fn2();
});

btn.addEventListener('click', () => {
    console.log(this); ==> window
    const obj = {
        fn2: () => {
            console.log(this); ==> window
        }
    }
    obj.fn2();
});
```

### 定时器

```js
setInterval(function () {
		console.log(this)  // ==> window
	}, 1000);

const div = document.querySelector('div')
div.addEventListener('click', function () {
    const timeId = setInterval(() => {
        console.log(this); ==> btn
    }, 1000)
})
const div = document.querySelector('div')
div.addEventListener('click', function () {
    const timeId = setInterval(function() {
        console.log(this); 	==> window
    }, 1000)
})
```

### d全局环境

```js
console.log(this) ==> winsow
// 箭头函数的this 指向上层作用域的this
```

### 普通函数

```js
(function fn(){
	console.log(this); ==> window
}
)();

(() => {
	console.log(this); ==> window
})();
```

### 函数作为对象

````js
const obj = {
	name: 'qwer',
	fn() {
		console.log(this); ==> obj
	}, 
	fn1 : () => {
		console.log(this); ==> window
	}
}
obj.fn();
obj.fn1();

var x = 1
var obj = {
  x: 3,
  fun: function(){
    var x = 5
    return this.x
  }
}
var fun = obj.fun
console.log(obj.fun(), fun()) => 3,1
````

### 事件绑定 

```js
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    console.log(this); ==> btn
    const obj = {
        fn2: () => {
            console.log(this); ==> btn
        }
    }
    obj.fn2();
});

btn.addEventListener('click', () => {
    console.log(this); ==> window
    const obj = {
        fn2: () => {
            console.log(this); ==> window
        }
    }
    obj.fn2();
});
```

### 定时器

```js
setInterval(function () {
		console.log(this)  // ==> window
	}, 1000);

const div = document.querySelector('div')
div.addEventListener('click', function () {
    const timeId = setInterval(() => {
        console.log(this); ==> btn
    }, 1000)
})
const div = document.querySelector('div')
div.addEventListener('click', function () {
    const timeId = setInterval(function() {
        console.log(this); 	==> window
    }, 1000)
})
```

### d

```js
var a = 10
;(function(){
  console.log(a)   
  var a = 5
  console.log(this.a)          
})();
```

### d

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .div {
            position: fixed;
            left: 0;
            top: 0;
            width: 40px;
            height: 24px;
            background-color: aqua;
            text-align: center;
            line-height: 24px;
            display: none;
            animation: move .5s linear;
        }
        @keyframes move {
            0% {}

            100% {
                transform: translateY(-20px);
            }
        }
        body {
            height: 5000px;
        }
    </style>
</head>
<body>
    <div class="div">富强</div>
    <script>
        let i = 0, arr1 = [], num = 0;
        //Math.floor(Math.random() * (M - N + 1)) + N
        const arr = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善'];
        const div = document.querySelector('div');
        document.addEventListener('click', function (e) {
            while (num === i) {
                num = Math.floor(Math.random() * 12);
            }
            i = num;
            for (let i = 0; i < 3; i++) {
                arr1[i] = Math.floor(Math.random() * 256);
            }
            Vue.createApp({
                data() {
                    return {
                        res: arr[num],
                        open: 'block',
                        X : e.pageX + 'px',
                        Y : (e.pageY - document.documentElement.scrollTop) + 'px',
                        color : `rgba(${arr1[0]},${arr1[1]},${arr1[2]},.5)`,
                    }
                },
                mounted() {
                    div.style.display = this.open;
                    div.style.left = this.X;
                    div.style.top = this.Y;
                    div.style.backgroundColor = this.color;
                    setTimeout(function () {
                        div.style.display = 'none';
                    }, 400);
                },
                template:
                    `
                    <div>{{res}}</div>
                    `,
            }).mount('.div');
        });
        div.addEventListener('selectstart', (e) => e.preventDefault());
    </script>
</body>
</html>
```

### d

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .div {
            position: fixed;
            left: 0;
            top: 0;
            width: 40px;
            height: 24px;
            background-color: aqua;
            text-align: center;
            line-height: 24px;
            display: none;
            animation: move .5s linear;
        }

        @keyframes move {
            0% {}

            100% {
                transform: translateY(-20px);
            }
        }

        body {
            height: 5000px;
        }
    </style>
</head>

<body>
    <div class="div">富强</div>
    <button class="btn1">qwe</button>
    <button class="btn2">qwer</button>
    <script>
        // 箭头函数的this 指向上层作用域的this


      
 

        // 函数作为对象
        (function () {
            const obj = {
                name: 'qwer',
                fn() {
                    console.log(this); //==> obj
                },
                fn1: () => {
                    console.log(this); //==> window
                }
            }
            obj.fn();
            obj.fn1();
        })();

        // 考试题
        (function(){
            var x = 1
            var obj = {
                x: 3,
                fun: function () {
                    var x = 5
                    return this.x
                }
            }
            var fun = obj.fun
            console.log(obj.fun(), fun()); // => 3, 1
        })();


        // 事件绑定
        (function () {
            const btn = document.querySelector('button');
            btn.addEventListener('click', function () {
                console.log(this); //==> btn
                const obj = {
                    fn2: () => {
                        console.log(this); //==> btn
                    }
                }
                obj.fn2();
            });

            btn.addEventListener('click', () => {
                console.log(this); //==> window
                const obj = {
                    fn2: () => {
                        console.log(this); //==> window
                    }
                }
                obj.fn2();
            });
        })();


        // 定时器
        (function () {
            setTimeout(function () {
                console.log(this)  //==> window
            }, 1000);

            const btn = document.querySelector('button')
            btn.addEventListener('click', function () {
                const timeId = setTimeout(() => {
                    console.log(this); //==> btn
                }, 1000)
            })

            btn.addEventListener('click', function () {
                const timeId = setTimeout(function () {
                    console.log(this); 	//==> window
                }, 1000)
            })
        })();


        // d
        var a = 10
        ; (function () {
            console.log(a)
            var a = 5
            console.log(this.a)
        })();









        let i = 0, arr1 = [], num = 0;
        //Math.floor(Math.random() * (M - N + 1)) + N
        const arr = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善'];
        const div = document.querySelector('div');
        document.addEventListener('click', function (e) {
            while (num === i) {
                num = Math.floor(Math.random() * 12);
            }
            i = num;
            for (let i = 0; i < 3; i++) {
                arr1[i] = Math.floor(Math.random() * 256);
            }
            Vue.createApp({
                data() {
                    return {
                        res: arr[num],
                        open: 'block',
                        X: e.pageX + 'px',
                        Y: (e.pageY - document.documentElement.scrollTop) + 'px',
                        color: `rgba(${arr1[0]},${arr1[1]},${arr1[2]},.5)`,
                    }
                },
                mounted() {
                    div.style.display = this.open;
                    div.style.left = this.X;
                    div.style.top = this.Y;
                    div.style.backgroundColor = this.color;
                    setTimeout(function () {
                        div.style.display = 'none';
                    }, 400);
                },
                template:
                    `
                    <div>{{res}}</div>
                    `,
            }).mount('.div');
        });
        div.addEventListener('selectstart', (e) => e.preventDefault());
    </script>
</body>

</html>
```

