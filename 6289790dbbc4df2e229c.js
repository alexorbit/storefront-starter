(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{422:function(t,e,a){"use strict";a.r(e);a(131);var c=a(49),n=a(129);e.default=(t={})=>{const{ebitStoreId:e}=t;if(e){const t=window.storefrontApp&&window.storefrontApp.router;if(t){const a=({name:t,params:a})=>{"confirmation"===t&&n.a.fetchOrder(a.id).then(t=>{const a=n.a.getCustomer();let o="storeId=".concat(e,"&mktSaleId=0&platform=ecomplus")+"&totalSpent=".concat(t.amount.total)+"&deliveryTax=".concat(t.amount.freight||0)+"&transactionId=".concat(t.number||t._id)+"&email=".concat(a.main_email);if(a.gender&&(o+="&gender=".concat(a.gender.toUpperCase())),a.birth_date){const{day:t,month:e,year:c}=a.birth_date;o+="&birthday=".concat(t.toString().padStart(2,"0"))+"-".concat(e.toString().padStart(2,"0"),"-").concat(c)}const{items:r}=t;if(r&&r.length){let t=r[0].sku,e=Object(c.a)(r[0]),a=r[0].quantity,n=encodeURIComponent(r[0].name);for(let o=1;o<r.length;o++)t+="|".concat(r[o].sku),e+="|".concat(Object(c.a)(r[o])),a+="|".concat(r[o].quantity),n+="|".concat(encodeURIComponent(r[o].name));o+="&sku=".concat(t,"&value=").concat(e,"&quantity=").concat(a,"&productName=").concat(n)}if(t.shipping_lines&&t.shipping_lines[0]){const e=t.shipping_lines[0];o+="&deliveryTime=".concat(e.delivery_time.days||0)+"&zipCode=".concat(e.to.zip)}if(t.transactions&&t.transactions[0]){const e=t.transactions[0];switch(o+="&parcels=".concat(e.installments&&e.installments.number||1),o+="&paymentType=",e.payment_method.code){case"credit_card":o+="05";break;case"banking_billet":o+="08";break;case"debit_card":case"online_debit":case"account_deposit":o+="28";break;case"loyalty_points":o+="24";break;default:o+="14"}if(e.credit_card&&e.credit_card.company)switch(o+="&cardFlag=",e.credit_card.company.toLowerCase()){case"visa":o+=6;break;case"mastercard":o+=5;break;case"american express":case"amex":o+=1;break;case"elo":o+=8;break;case"aura":o+=2;break;case"hipercard":o+=4;break;case"diners club":o+=3;break;default:o+=7}}const i=setInterval(()=>{const t=document.getElementById("confirmation");if(t){t.insertAdjacentHTML("beforeend",'<div> <param id="ebitParam" value="'.concat(o,'"> <a id="bannerEbit"></a> </div>'));const a=document.createElement("script");a.id="getSelo",a.type="text/javascript",a.src="https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js"+"?".concat(e,"&lightbox=true"),document.body.appendChild(a),clearInterval(i)}},200)}).catch(console.error)};t.currentRoute&&a(t.currentRoute),t.afterEach(a)}}else console.error(new Error("Can't show lightbox without `ebitStoreId` option"))}}}]);
//# sourceMappingURL=6289790dbbc4df2e229c.js.map