(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{204:function(e,t,n){"use strict";n.r(t);n(4);var o=n(2),a=n(19),i=n(155);window._info=window._info||{};const s=[],l=Array.isArray(window.modulesToFetch)?window.modulesToFetch:[{endpoint:"list_payments"},{endpoint:"calculate_shipping"}];Object.keys(i.a).length&&l.push({endpoint:"apply_discount",reqOptions:{method:"post",data:{utm:i.a}}}),l.forEach((e=>{let{endpoint:t,reqOptions:n}=e;const i={};window._info[t]=i;const l=new Promise((e=>{Object(o.c)({url:`/${t}.json`,...n,axiosConfig:{timeout:1e4}}).then((e=>{let{data:n}=e;const{result:o}=n;Array.isArray(o)&&o.forEach((e=>{let{error:n,response:o}=e;if(!n){let e,n;switch(t){case"calculate_shipping":e="free_shipping_from_value",n=o[e],"number"==typeof n&&(void 0===i[e]||n<i[e])&&(i[e]=n);break;case"list_payments":e="installments_option",n=o[e],n&&(!i[e]||n.monthly_interest<i[e].monthly_interest||n.max_number>i[e].max_number)&&(i[e]=n),e="discount_option",n=o[e],n&&(!i[e]||n.value>i[e].value)&&o.payment_gateways.forEach((t=>{let{discount:o}=t;o&&"freight"!==o.apply_at&&o.value===n.value&&(i[e]={apply_at:o.apply_at,...n})})),e="loyalty_points_programs",n=o[e],n&&(i[e]={...i[e],...n});break;default:e="available_extra_discount",n=o[e],n&&(!i[e]||n.value>i[e].value)&&(i[e]=n)}}})),a.a.emit(`info:${t}`,i)})).catch((e=>{console.error(e),a.a.emit(`info:${t}`,e)})).finally(e)}));s.push(l)})),Promise.all(s).then((()=>a.a.emit("info",window._info)))}}]);