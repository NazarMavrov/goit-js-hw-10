import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-9808d4ac.js";function m(e,s){return new Promise((i,t)=>{setTimeout(s==="fulfilled"?()=>{i(e)}:()=>{t(e)},e)})}document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();const s=parseInt(this.elements.delay.value),i=this.elements.state.value;m(s,i).then(t=>{r.success({message:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{r.error({message:`❌ Rejected promise in ${t}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
