/*! For license information please see vendors.baed7f0c98cd04b43d24.bundle.js.LICENSE.txt */
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,P=A`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,N=A`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${N} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Y=A`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,j=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Y} 1s linear infinite;
`,$=A`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,z=A`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,U=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${z} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,H=v("div")`
  position: absolute;
`,q=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,W=A`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${W} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=({toast:e})=>{let{icon:n,type:t,iconTheme:o}=e;return void 0!==n?"string"==typeof n?r.createElement(V,null,n):n:"blank"===t?null:r.createElement(q,null,r.createElement(j,{...o}),"loading"!==t&&r.createElement(H,null,"error"===t?r.createElement(F,{...o}):r.createElement(U,{...o})))},K=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,J=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Q=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Z=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=r.memo((({toast:e,position:n,style:t,children:o})=>{let i=e.height?((e,n)=>{let t=e.includes("top")?1:-1,[r,o]=x()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[K(t),J(t)];return{animation:n?`${A(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${A(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||n||"top-center",e.visible):{opacity:0},a=r.createElement(G,{toast:e}),s=r.createElement(Z,{...e.ariaProps},y(e.message,e));return r.createElement(Q,{className:e.className,style:{...i,...t,...e.style}},"function"==typeof o?o({icon:a,message:s}):r.createElement(r.Fragment,null,a,s))}));!function(e,n,t,r){c.p=n,h=e,g=t,b=r}(r.createElement);var ee=({id:e,className:n,style:t,onHeightUpdate:o,children:i})=>{let a=r.useCallback((n=>{if(n){let t=()=>{let t=n.getBoundingClientRect().height;o(e,t)};t(),new MutationObserver(t).observe(n,{subtree:!0,childList:!0,characterData:!0})}}),[e,o]);return r.createElement("div",{ref:a,className:n,style:t},i)},ne=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,te=({reverseOrder:e,position:n="top-center",toastOptions:t,gutter:o,children:i,containerStyle:a,containerClassName:s})=>{let{toasts:l,handlers:c}=O(t);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map((t=>{let a=t.position||n,s=((e,n)=>{let t=e.includes("top"),r=t?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:x()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${n*(t?1:-1)}px)`,...r,...o}})(a,c.calculateOffset(t,{reverseOrder:e,gutter:o,defaultPosition:n}));return r.createElement(ee,{id:t.id,key:t.id,onHeightUpdate:c.updateHeight,className:t.visible?ne:"",style:s},"custom"===t.type?y(t.message,t):i?i(t):r.createElement(X,{toast:t,position:a}))})))},re=L},38776:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r="Invariant failed";function o(e,n){if(!e){false;var t="function"==typeof n?n():n,o=t?"".concat(r,": ").concat(t):r;throw new Error(o)}}}}]);
//# sourceMappingURL=vendors.baed7f0c98cd04b43d24.bundle.js.map