!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=132)}({129:function(t,e,n){var i;t.exports=((i=function(){function t(t){return o.appendChild(t.dom),t}function e(t){for(var e=0;e<o.children.length;e++)o.children[e].style.display=e===t?"block":"none";n=t}var n=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(t){t.preventDefault(),e(++n%o.children.length)},!1);var r=(performance||Date).now(),s=r,a=0,l=t(new i.Panel("FPS","#0ff","#002")),c=t(new i.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=t(new i.Panel("MB","#f08","#201"));return e(0),{REVISION:16,dom:o,addPanel:t,showPanel:e,begin:function(){r=(performance||Date).now()},end:function(){a++;var t=(performance||Date).now();if(c.update(t-r,200),t>s+1e3&&(l.update(1e3*a/(t-s),100),s=t,a=0,u)){var e=performance.memory;u.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t},update:function(){r=this.end()},domElement:o,setMode:e}}).Panel=function(t,e,n){var i=1/0,o=0,r=Math.round,s=r(window.devicePixelRatio||1),a=80*s,l=48*s,c=3*s,u=2*s,h=3*s,f=15*s,p=74*s,d=30*s,v=document.createElement("canvas");v.width=a,v.height=l,v.style.cssText="width:80px;height:48px";var y=v.getContext("2d");return y.font="bold "+9*s+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=n,y.fillRect(0,0,a,l),y.fillStyle=e,y.fillText(t,c,u),y.fillRect(h,f,p,d),y.fillStyle=n,y.globalAlpha=.9,y.fillRect(h,f,p,d),{dom:v,update:function(l,m){i=Math.min(i,l),o=Math.max(o,l),y.fillStyle=n,y.globalAlpha=1,y.fillRect(0,0,a,f),y.fillStyle=e,y.fillText(r(l)+" "+t+" ("+r(i)+"-"+r(o)+")",c,u),y.drawImage(v,h+s,f,p-s,d,h,f,p-s,d),y.fillRect(h+p-s,f,s,d),y.fillStyle=n,y.globalAlpha=.9,y.fillRect(h+p-s,f,s,r((1-l/m)*d))}}},i)},130:function(t){t.exports=[["#0ad7d7","#232832","#ff2d64","#e6e6e6"],["#ffdc00","#f5508c","#9f19a4","#462d46"],["#fa5555","#f5fa78","#8ceb8c","#2d7d91"],["#004182","#0e8cf0","#faffa4","#ff4b69"],["#3c1e69","#5a3c87","#e65a87","#ffaaaa"]]},131:function(t,e,n){t.exports=n.p+"afed1de9751e0c13b643fe72fe7d10a2.png"},132:function(t,e,n){"use strict";n.r(e);n(137);var i=n(131),o=n.n(i),r=n(93),s=n.n(r);var a=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=document.createElement("div"),this.element.className=s.a.badge,this.element.innerHTML='\n      <img src="'+o.a+'" class="'+s.a.badge__image+'">\n    ',document.body.appendChild(this.element)},l=n(42),c=n.n(l),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=document.createElement("nav"),this.element.className=c.a.navigation,this.element.innerHTML='\n      <ul class="'+c.a.navigation__list+'">\n        '+e.map(function(t){return'\n          <li class="'+c.a.navigation__item+'">\n            <a href="#'+t+'" class="'+c.a.navigation__button+'">\n              '+t+"\n            </a>\n          </li>\n          "}).join("")+"\n      </ul>\n    ",this.elements={buttons:this.element.querySelectorAll("a")},document.body.appendChild(this.element)}return u(t,[{key:"onHashChange",value:function(t){this.elements.buttons.forEach(function(e){e.getAttribute("href")===t?e.classList.add(c.a["navigation__button--active"]):e.classList.remove(c.a["navigation__button--active"])})}}]),t}(),f=n(130),p=n(129),d=n.n(p),v=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n,this.z=i}return v(t,[{key:"set",value:function(e,n,i){return e instanceof t?(this.x=e.x||0,this.y=e.y||0,this.z=e.z||0,this):(this.x=e||0,this.y=n||0,this.z=i||0,this)}},{key:"copy",value:function(){return new t(this.x,this.y,this.z)}},{key:"add",value:function(e,n,i){return e instanceof t?(this.x+=e.x||0,this.y+=e.y||0,this.z+=e.z||0,this):(this.x+=e||0,this.y+=n||0,this.z+=i||0,this)}},{key:"sub",value:function(e,n,i){return e instanceof t?(this.x-=e.x||0,this.y-=e.y||0,this.z-=e.z||0,this):(this.x-=e||0,this.y-=n||0,this.z-=i||0,this)}},{key:"mult",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.x*=t,this.y*=t,this.z*=t,this}},{key:"div",value:function(t){return this.x/=t,this.y/=t,this.z/=t,this}},{key:"mag",value:function(){return Math.sqrt(this.magSq())}},{key:"magSq",value:function(){var t=this.x,e=this.y,n=this.z;return t*t+e*e+n*n}},{key:"dot",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e instanceof t?this.dot(e.x,e.y,e.z):this.x*e+this.y*n+this.z*i}},{key:"cross",value:function(e){return new t(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)}},{key:"dist",value:function(t){return t.copy().sub(this).mag()}},{key:"normalize",value:function(){return this.div(this.mag())}},{key:"limit",value:function(t){var e=this.magSq();return e>t*t&&(this.div(Math.sqrt(e)),this.mult(t)),this}},{key:"setMag",value:function(t){return this.normalize().mult(t)}},{key:"heading",value:function(){return Math.atan2(this.y,this.x)}},{key:"rotate",value:function(t){var e=this.heading()+t,n=this.mag();return this.x=Math.cos(e)*n,this.y=Math.sin(e)*n,this}},{key:"lerp",value:function(e,n,i,o){return e instanceof t?this.lerp(e.x,e.y,e.z,n):(this.x+=(e-this.x)*o||0,this.y+=(n-this.y)*o||0,this.z+=(i-this.z)*o||0,this)}},{key:"array",value:function(){return[this.x||0,this.y||0,this.z||0]}},{key:"equals",value:function(e,n,i){var o=void 0,r=void 0,s=void 0;return e instanceof t?(o=e.x||0,r=e.y||0,s=e.z||0):(o=e||0,r=n||0,s=i||0),this.x===o&&this.y===r&&this.z===s}}],[{key:"fromAngle",value:function(e){return new t(Math.cos(e),Math.sin(e),0)}},{key:"random2D",value:function(){return this.fromAngle(Math.random()*Math.PI*2)}},{key:"random3D",value:function(){var e=Math.random()*Math.PI*2,n=2*Math.random()-1;return new t(Math.sqrt(1-n*n)*Math.cos(e),Math.sqrt(1-n*n)*Math.sin(e),n)}},{key:"add",value:function(t,e,n){return n?n.set(t):n=t.copy(),n.add(e),n}},{key:"sub",value:function(t,e,n){return n?n.set(t):n=t.copy(),n.sub(e),n}},{key:"mult",value:function(t,e,n){return n?n.set(t):n=t.copy(),n.mult(e),n}},{key:"div",value:function(t,e,n){return n?n.set(t):n=t.copy(),n.div(e),n}},{key:"dot",value:function(t,e){return t.dot(e)}},{key:"cross",value:function(t,e){return t.cross(e)}},{key:"dist",value:function(t,e){return t.dist(e)}},{key:"lerp",value:function(t,e,n,i){return i?i.set(t):i=t.copy(),i.lerp(e,n),i}},{key:"angleBetween",value:function(t,e){return Math.acos(t.dot(e)/(t.mag()*e.mag()))}}]),t}(),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var b=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.colors=f,this.stats=null,this.canvas=null,this.context=null,this.center=new y(window.innerWidth/2,window.innerHeight/2),this.mouse=new y(window.innerWidth/2,window.innerHeight/2),this.eventDown=this.mousedown.bind(this),this.eventMove=this.mousemove.bind(this),this.eventUp=this.mouseup.bind(this),this.eventClick=this.click.bind(this),this.eventClickDouble=this.dblclick.bind(this),this.eventResize=this.resize.bind(this),this.eventUpdate=this.update.bind(this),this.animationFrame=null,this.createStats(),this.createCanvas(),this.createContext(),this.createEvents()}return m(t,[{key:"createStats",value:function(){var t=this;this.stats=new d.a,this.stats.domElement.style.display="none",this.stats.domElement.style.left=0,this.stats.domElement.style.position="absolute",this.stats.domElement.style.top=0,this.stats.domElement.style.zIndex=50,window.addEventListener("keydown",function(e){68===e.keyCode&&(t.stats.domElement.style.display="block"===t.stats.domElement.style.display?"none":"block")}),document.body.appendChild(this.stats.domElement)}},{key:"createCanvas",value:function(){this.canvas=document.createElement("canvas"),this.canvas.classList.add("canvas"),this.canvas.height=window.innerHeight,this.canvas.width=window.innerWidth,document.body.appendChild(this.canvas)}},{key:"createContext",value:function(){this.context=this.canvas.getContext("2d"),this.context.fillStyle="#050505",this.context.fillRect(0,0,window.innerWidth,window.innerHeight)}},{key:"createEvents",value:function(){this.canvas.addEventListener("mousedown",this.eventDown),this.canvas.addEventListener("mousemove",this.eventMove),this.canvas.addEventListener("mouseup",this.eventUp),this.canvas.addEventListener("touchstart",this.eventDown),this.canvas.addEventListener("touchmove",this.eventMove),this.canvas.addEventListener("touchend",this.eventUp),this.canvas.addEventListener("click",this.eventClick),this.canvas.addEventListener("dblclick",this.eventClickDouble),window.addEventListener("resize",this.eventResize)}},{key:"click",value:function(t){}},{key:"dblclick",value:function(t){this.context.globalAlpha=1,this.context.globalCompositeOperation="source-over",this.context.fillStyle="#050505",this.context.fillRect(0,0,window.innerWidth,window.innerHeight)}},{key:"mousedown",value:function(t){}},{key:"mousemove",value:function(t){t.touches?this.mouse.set(t.touches[0].pageX,t.touches[0].pageY):this.mouse.set(t.pageX,t.pageY)}},{key:"mouseup",value:function(t){}},{key:"resize",value:function(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.center.set(window.innerWidth/2,window.innerHeight/2)}},{key:"update",value:function(){this.animationFrame=window.requestAnimationFrame(this.update.bind(this))}},{key:"destroyStats",value:function(){this.stats.domElement.parentNode.removeChild(this.stats.domElement)}},{key:"destroyCanvas",value:function(){this.canvas.parentNode.removeChild(this.canvas)}},{key:"destroyContext",value:function(){this.context=null}},{key:"destroyEvents",value:function(){this.canvas.removeEventListener("mousedown",this.eventDown),this.canvas.removeEventListener("mousemove",this.eventMove),this.canvas.removeEventListener("mouseup",this.eventUp),this.canvas.removeEventListener("touchstart",this.eventDown),this.canvas.removeEventListener("touchmove",this.eventMove),this.canvas.removeEventListener("touchend",this.eventUp),this.canvas.removeEventListener("click",this.eventClick),this.canvas.removeEventListener("dblclick",this.eventClickDouble),window.removeEventListener("resize",this.eventResize)}},{key:"destroy",value:function(){window.cancelAnimationFrame(this.animationFrame),this.destroyEvents(),this.destroyCanvas(),this.destroyContext(),this.destroyStats()}}]),t}();function w(t,e){return Math.random()*(e-t)+t}function g(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function k(){var t=void 0,e=void 0,n=void 0;do{n=(t=2*Math.random()-1)*t+(e=2*Math.random()-1)*e}while(n>=1||0===n);return t*Math.sqrt(-2*Math.log(n)/n)}var x=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var _=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=e,this.x=n,this.y=i}return x(t,[{key:"step",value:function(){var t=g(0,3);0===t?this.x++:1===t?this.x--:2===t?this.y++:this.y--}},{key:"draw",value:function(t){t.lineWidth=1,t.strokeStyle=this.color,t.beginPath(),t.moveTo(this.x,this.y),this.step(),t.lineTo(this.x,this.y),t.stroke()}}]),t}(),O=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),E=function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0};var C=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.walkers=null,t.walkersLength=null,t.walkersColor=null,t.createWalkers(),t.update(),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,b),O(e,[{key:"createWalker",value:function(){var t=g(0,this.colors.length-1),e=this.colors[this.walkersColor][t],n=g(0,window.innerWidth),i=g(0,window.innerHeight),o=new _(e,n,i);this.walkers.push(o)}},{key:"createWalkers",value:function(){this.walkers=[],this.walkersLength=2500,this.walkersColor=g(0,this.colors.length-1);for(var t=0;t<=this.walkersLength;t++)this.createWalker()}},{key:"update",value:function(){var t=this;E(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"update",this).call(this),this.stats.begin(),this.walkers.forEach(function(e){return e.draw(t.context)}),this.context.globalAlpha=.1,this.context.globalCompositeOperation="lighter",this.stats.end()}},{key:"dblclick",value:function(){E(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"dblclick",this).call(this),this.createWalkers()}},{key:"resize",value:function(){E(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"resize",this).call(this),this.createWalkers()}}]),e}();function j(t,e,n){return Math.max(Math.min(t,n),e)}function M(t,e,n){return n*(e-t)+t}function P(t,e,n,i,o){return(t-e)/(n-e)*(o-i)+i}var L=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var z=function(){function t(e,n,i,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.radius=i,this.color=o,this.x=e,this.y=n,this.opacity=0,this.lerp=w(.05,.1)}return L(t,[{key:"move",value:function(t,e){this.opacity=j(this.opacity+.1,0,1),this.radius=M(this.radius,0,this.lerp),this.x=M(this.x,t,this.lerp),this.y=M(this.y,e,this.lerp),this.alive=this.radius>.01}},{key:"draw",value:function(t){t.lineWidth=2,t.globalAlpha=this.opacity,t.globalCompositeOperation="lighter",t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.closePath(),t.strokeStyle=this.color,t.stroke()}}]),t}(),S=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),T=function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0};var R=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.circles=null,t.circlesLength=null,t.circlesColor=null,t.createCircles(),t.update(),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,b),S(e,[{key:"createCircle",value:function(){var t=this.mouse.x+200*k(),e=this.mouse.y+200*k(),n=10+Math.abs(10*k()),i=this.colors[this.circlesColor][g(0,this.colors.length-1)],o=new z(t,e,n,i);this.circles.push(o)}},{key:"destroyCircle",value:function(t){this.circles.splice(t,1)}},{key:"createCircles",value:function(){this.circles=[],this.circlesLength=500,this.circlesColor=g(0,this.colors.length-1);for(var t=0;t<=this.circlesLength;t++)this.createCircle()}},{key:"update",value:function(){var t=this;T(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"update",this).call(this),this.stats.begin(),this.circles.forEach(function(e,n){e.move(t.mouse.x,t.mouse.y),e.draw(t.context),e.alive||(t.destroyCircle(n),t.createCircle())}),this.context.globalAlpha=1,this.context.globalCompositeOperation="source-over",this.context.fillStyle="rgba(0, 0, 0, 0.1)",this.context.fillRect(0,0,window.innerWidth,window.innerHeight),this.stats.end()}},{key:"dblclick",value:function(){T(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"dblclick",this).call(this),this.createCircles()}},{key:"resize",value:function(){T(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"resize",this).call(this),this.createCircles()}}]),e}(),W=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var A=function(){function t(e,n,i,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.radius=i,this.color=o,this.position=new y(e,n),this.velocity=new y(0,0),this.acceleration=new y(0,0),this.direction=new y(0,0),this.multiplier=w(.5,1)}return W(t,[{key:"check",value:function(){this.position.x>window.innerWidth?this.position.x=0:this.position.x<0&&(this.position.x=window.innerWidth),this.position.y>window.innerHeight?this.position.y=0:this.position.y<0&&(this.position.y=window.innerHeight)}},{key:"update",value:function(t,e){this.direction=y.sub(t,this.position),this.direction.normalize(),this.direction.mult(this.multiplier),this.direction.mult(e),this.acceleration=this.direction,this.velocity.add(this.acceleration),this.velocity.limit(15),this.position.add(this.velocity)}},{key:"draw",value:function(t){this.check(),t.globalCompositeOperation="lighter",t.beginPath(),t.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI),t.closePath(),t.fillStyle=this.color,t.fill()}}]),t}(),H=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),F=function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0};var U,D=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.movers=null,t.moversLength=null,t.moversColor=null,t.moversMultiply=null,t.createMovers(),t.update(),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,b),H(e,[{key:"createMover",value:function(){var t=g(0,this.colors.length-1),e=g(0,window.innerWidth),n=g(0,window.innerHeight),i=g(1,5),o=this.colors[this.moversColor][t],r=new A(e,n,i,o);this.movers.push(r)}},{key:"createMovers",value:function(){this.movers=[],this.moversLength=250,this.moversColor=g(0,this.colors.length-1),this.moversMultiply=1;for(var t=0;t<=this.moversLength;t++)this.createMover()}},{key:"update",value:function(){var t=this;F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"update",this).call(this),this.stats.begin(),this.movers.forEach(function(e,n){e.update(t.mouse,t.moversMultiply),e.draw(t.context)}),this.context.globalAlpha=1,this.context.globalCompositeOperation="source-over",this.context.fillStyle="rgba(0, 0, 0, 0.1)",this.context.fillRect(0,0,window.innerWidth,window.innerHeight),this.stats.end()}},{key:"dblclick",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"dblclick",this).call(this),this.createMovers()}},{key:"mousedown",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mousedown",this).call(this),this.moversMultiply*=-1}},{key:"mouseup",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mouseup",this).call(this),this.moversMultiply*=-1}},{key:"resize",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"resize",this).call(this),this.createMovers()}}]),e}(),I=4,B=1<<I,N=8,q=1<<N,Q=4095,Z=4,Y=.5,J=function(t){return.5*(1-Math.cos(t*Math.PI))};function V(t,e,n){if(e=e||0,n=n||0,null==U){U=new Array(Q+1);for(var i=0;i<Q+1;i++)U[i]=Math.random()}t<0&&(t=-t),e<0&&(e=-e),n<0&&(n=-n);for(var o,r,s,a,l,c=Math.floor(t),u=Math.floor(e),h=Math.floor(n),f=t-c,p=e-u,d=n-h,v=0,y=.5,m=0;m<Z;m++){var b=c+(u<<I)+(h<<N);o=J(f),r=J(p),s=U[b&Q],s+=o*(U[b+1&Q]-s),a=U[b+B&Q],s+=r*((a+=o*(U[b+B+1&Q]-a))-s),a=U[(b+=q)&Q],a+=o*(U[b+1&Q]-a),l=U[b+B&Q],a+=r*((l+=o*(U[b+B+1&Q]-l))-a),v+=(s+=J(d)*(a-s))*y,y*=Y,c<<=1,u<<=1,p*=2,h<<=1,d*=2,(f*=2)>=1&&(c++,f--),p>=1&&(u++,p--),d>=1&&(h++,d--)}return v}var G=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();!function(t){var e=function(){var t,e,n=4294967296;return{setSeed:function(i){e=t=(null==i?Math.random()*n:i)>>>0},getSeed:function(){return t},rand:function(){return(e=(1664525*e+1013904223)%n)/n}}}();e.setSeed(t),U=new Array(Q+1);for(var n=0;n<Q+1;n++)U[n]=e.rand()}(Math.floor(100*Math.random()));var $=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolution=10,this.columns=Math.ceil(window.innerWidth/this.resolution),this.rows=Math.ceil(window.innerHeight/this.resolution),this.field=[];for(var e=this.columns;e>=0;e--)this.field.push([]);this.noise=0,this.create()}return G(t,[{key:"create",value:function(){for(var t=0,e=0;t<this.columns;t++){for(var n=0,i=0;n<this.rows;n++){var o=P(V(e,i,this.noise),0,1,0,2*Math.PI);this.field[t][n]=new y(Math.cos(o),Math.sin(o)),i+=.1}e+=.1}}},{key:"update",value:function(){for(var t=0,e=0;t<this.columns;t++){for(var n=0,i=0;n<this.rows;n++){var o=P(V(e,i,this.noise),0,1,0,2*Math.PI);this.field[t][n].set(Math.cos(o),Math.sin(o)),i+=.1}e+=.1}this.noise+=.01}},{key:"lookup",value:function(t){var e=Math.floor(j(t.x/this.resolution,0,this.columns-1)),n=Math.floor(j(t.y/this.resolution,0,this.rows-1));return this.field[e][n].copy()}}]),t}(),X=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var K=function(){function t(e,n,i,o,r,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=i,this.position=new y(e,n),this.acceleration=new y(0,0),this.velocity=new y(0,0),this.radius=o,this.speed=r,this.force=s}return X(t,[{key:"follow",value:function(t){var e=t.lookup(this.position);e.mult(this.speed);var n=y.sub(e,this.velocity);n.limit(this.force),this.apply(n)}},{key:"apply",value:function(t){this.acceleration.add(t)}},{key:"update",value:function(){this.velocity.add(this.acceleration),this.velocity.limit(this.speed),this.position.add(this.velocity),this.acceleration.mult(0)}},{key:"check",value:function(){this.position.x>window.innerWidth?this.position.x=0:this.position.x<0&&(this.position.x=window.innerWidth),this.position.y>window.innerHeight?this.position.y=0:this.position.y<0&&(this.position.y=window.innerHeight)}},{key:"draw",value:function(t){t.lineWidth=2,t.globalCompositeOperation="lighter",t.beginPath(),t.arc(this.position.x,this.position.y,1,0,2*Math.PI),t.closePath(),t.fillStyle=this.color,t.fill()}}]),t}(),tt=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),et=function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0};var nt=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.field=null,t.particles=null,t.particlesLength=null,t.particlesColor=null,t.createField(),t.createParticles(),t.update(),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,b),tt(e,[{key:"createField",value:function(){this.field=new $}},{key:"createParticle",value:function(){var t=g(0,this.colors.length-1),e=g(0,window.innerWidth),n=g(0,window.innerHeight),i=this.colors[this.particlesColor][t],o=w(1,6),r=g(4,12),s=w(.4,1),a=new K(e,n,i,o,r,s);this.particles.push(a)}},{key:"createParticles",value:function(){this.particles=[],this.particlesLength=1e3,this.particlesColor=g(0,this.colors.length-1);for(var t=0;t<=this.particlesLength;t++)this.createParticle()}},{key:"update",value:function(){var t=this;et(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"update",this).call(this),this.stats.begin(),this.field.update(),this.particles.forEach(function(e,n){e.follow(t.field),e.update(),e.check(),e.draw(t.context)}),this.context.globalAlpha=1,this.context.globalCompositeOperation="source-over",this.context.fillStyle="rgba(0, 0, 0, 0.1)",this.context.fillRect(0,0,window.innerWidth,window.innerHeight),this.stats.end()}},{key:"dblclick",value:function(){et(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"dblclick",this).call(this),this.createField(),this.createParticles()}},{key:"resize",value:function(){et(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"resize",this).call(this),this.createField(),this.createParticles()}}]),e}(),it=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.experiments={root:C,neon:R,atom:D,flow:nt},this.names=Object.getOwnPropertyNames(this.experiments),this.badge=new a,this.navigation=new h(this.names),this.addEventListeners()}return it(t,[{key:"onHashChange",value:function(){var t=window.location.hash.replace("#","");this.experiment&&this.experiment.destroy();var e=this.names.indexOf(t)>-1?t:"root";this.experiment=new this.experiments[e],this.navigation.onHashChange("#"+e)}},{key:"addEventListeners",value:function(){this.onHashChangeEvent=this.onHashChange.bind(this),window.addEventListener("hashchange",this.onHashChangeEvent),window.addEventListener("load",this.onHashChangeEvent)}}]),t}())},133:function(t,e,n){(e=t.exports=n(65)(!1)).push([t.i,'._396UQu5Q04j2f_Q45d3-ek{bottom:25px;left:50%;position:absolute;transform:translateX(-50%)}._3yF-53cuRbGBjl1Ofk31Bz{font-size:0;white-space:nowrap}._2o2YamTOOZOc41o5SumB2p{display:inline-block;vertical-align:middle}._2o2YamTOOZOc41o5SumB2p:not(:first-child){margin-left:10px}._37lp7E5NBFZQbFlr5hEVPh{border:none;display:block;font-size:0;height:55px;outline:none;position:relative;width:40px}._37lp7E5NBFZQbFlr5hEVPh:after{border-top:1px solid hsla(0,0%,100%,.5);content:"";display:block;left:0;position:absolute;top:50%;transition:border .4s ease;width:100%}._37lp7E5NBFZQbFlr5hEVPh:hover:after{border-color:hsla(0,0%,100%,.75)}._3DD_J8cbnO8W4cE5jCC9Io:after{border-color:#fff}',""]),e.locals={navigation:"_396UQu5Q04j2f_Q45d3-ek",navigation__list:"_3yF-53cuRbGBjl1Ofk31Bz",navigation__item:"_2o2YamTOOZOc41o5SumB2p",navigation__button:"_37lp7E5NBFZQbFlr5hEVPh","navigation__button--active":"_3DD_J8cbnO8W4cE5jCC9Io"}},134:function(t,e,n){(e=t.exports=n(65)(!1)).push([t.i,"._3S-CYc1g61ZlfW4WEvyjwn{bottom:10px;left:10px;position:absolute}@media (max-width:767px){._3S-CYc1g61ZlfW4WEvyjwn{display:none}}.T8_pLEAbu1CFLT9D0cF4b{display:block}",""]),e.locals={badge:"_3S-CYc1g61ZlfW4WEvyjwn",badge__image:"T8_pLEAbu1CFLT9D0cF4b"}},135:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},136:function(t,e,n){(t.exports=n(65)(!1)).push([t.i,"html{box-sizing:border-box}body,html{position:fixed;height:100%;width:100%}body{background:#000;user-select:none}*,:after,:before{box-sizing:inherit}*{margin:0;padding:0}canvas{display:block}",""])},137:function(t,e,n){var i=n(136);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(64)(i,o);i.locals&&(t.exports=i.locals)},42:function(t,e,n){var i=n(133);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(64)(i,o);i.locals&&(t.exports=i.locals)},64:function(t,e,n){var i,o,r={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,c=0,u=[],h=n(135);function f(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(b(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(b(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function d(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function y(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),m(e,t.attrs),d(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,i,o,r;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var s=c++;n=l||(l=y(e)),i=k.bind(null,n,s,!1),o=k.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),d(t,e),e}(e),i=function(t,e,n){var i=n.css,o=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=h(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return f(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}t&&f(p(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete r[a.id]}}}};var w,g=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function k(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}},65:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(r).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},93:function(t,e,n){var i=n(134);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(64)(i,o);i.locals&&(t.exports=i.locals)}});