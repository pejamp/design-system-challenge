import{_ as i}from"./iframe-8426b678.js";import{R as t,r as p}from"./index-e03f90b5.js";import{r as l,u}from"./react-18-a312ee67.js";import{C as h,A as E,H as d,D as x}from"./index-1dff5dfd.js";var D={code:h,a:E,...d},_=class extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:t.createElement(t.Fragment,null,e)}},R=class{constructor(){this.render=async(r,e,o)=>{let n={...D,...e==null?void 0:e.components},s=x;return new Promise((a,c)=>{i(()=>import("./index-b53ccd4d.js"),["assets/index-b53ccd4d.js","assets/index-e8c3912b.js","assets/index-e03f90b5.js","assets/_commonjsHelpers-725317a4.js"]).then(({MDXProvider:m})=>l(t.createElement(_,{showException:c,key:Math.random()},t.createElement(m,{components:n},t.createElement(s,{context:r,docsParameter:e}))),o)).then(()=>a())})},this.unmount=r=>{u(r)}}};export{R as D,D as d};
