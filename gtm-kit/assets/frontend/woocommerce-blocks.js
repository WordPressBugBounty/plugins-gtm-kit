(()=>{"use strict";const t=window.wp.i18n,i=window.wp.hooks,e="gtmkit-woocommerce-google-analytics",n="experimental__woocommerce_blocks",c=(t,i)=>{window[window.gtmkit_settings.datalayer_name].push({ecommerce:null}),window[window.gtmkit_settings.datalayer_name].push({event:t,...i}),!0===window.gtmkit_settings.console_log&&console.log(`Pushing event ${t}`)},a=()=>{if(!0===window.gtmkit_data.wc.add_shipping_info.fired)return;const t={ecommerce:{currency:window.gtmkit_data.wc.currency,value:window.gtmkit_data.wc.cart_value,shipping_tier:window.gtmkit_data.wc.chosen_shipping_method,items:window.gtmkit_data.wc.cart_items}};c("add_shipping_info",t),window.gtmkit_data.wc.add_shipping_info.fired=!0},o=()=>{if(!0===window.gtmkit_data.wc.add_payment_info.fired)return;const t={ecommerce:{currency:window.gtmkit_data.wc.currency,value:window.gtmkit_data.wc.cart_value,payment_type:window.gtmkit_data.wc.chosen_payment_method,items:window.gtmkit_data.wc.cart_items}};c("add_payment_info",t),window.gtmkit_data.wc.add_payment_info.fired=!0},d=(t,i="")=>{const e=t.extensions.gtmkit.item;return i&&(e.item_list_name=i),e};(0,i.addAction)(`${n}-checkout-set-selected-shipping-rate`,e,(({shippingRateId:t})=>{window.gtmkit_data.wc.chosen_shipping_method=t,0!==window.gtmkit_settings.wc.add_shipping_info.config&&!1!==window.gtmkit_data.wc.is_checkout&&2===window.gtmkit_settings.wc.add_shipping_info.config&&a()})),(0,i.addAction)(`${n}-checkout-set-active-payment-method`,e,(({value:t})=>{window.gtmkit_data.wc.chosen_payment_method=t,0!==window.gtmkit_settings.wc.add_payment_info.config&&2===window.gtmkit_settings.wc.add_payment_info.config&&o()})),(0,i.addAction)(`${n}-checkout-submit`,e,(()=>{0!==window.gtmkit_settings.wc.add_shipping_info.config&&a(),0!==window.gtmkit_settings.wc.add_payment_info.config&&o()})),(0,i.addAction)(`${n}-cart-set-item-quantity`,e,(({product:t,quantity:i=1})=>{if(t.quantity<i){const e=i-t.quantity,n=JSON.parse(t.extensions.gtmkit.item);n.quantity=e;const a={ecommerce:{currency:window.gtmkit_data.wc.currency,value:t.prices.sale_price/100*e,items:[n]}};c("add_to_cart",a)}else{const e=t.quantity-i,n=JSON.parse(t.extensions.gtmkit.item);n.quantity=e;const a={ecommerce:{currency:window.gtmkit_data.wc.currency,value:t.prices.sale_price/100*e,items:[n]}};c("remove_from_cart",a)}})),(0,i.addAction)(`${n}-cart-remove-item`,e,(({product:t,quantity:i})=>{const e=JSON.parse(t.extensions.gtmkit.item),n={ecommerce:{currency:window.gtmkit_data.wc.currency,value:t.prices.sale_price/100*i,items:[e]}};c("remove_from_cart",n)})),(0,i.addAction)(`${n}-cart-add-item`,e,(({product:t,quantity:i=1})=>{const e=JSON.parse(t.extensions.gtmkit.item),n={ecommerce:{currency:window.gtmkit_data.wc.currency,value:t.prices.sale_price/100*i,items:[e]}};c("add_to_cart",n)}));const s=[];(0,i.addAction)(`${n}-product-list-render`,e,(({products:i,listName:e=(0,t.__)("Product List","gtm-kit")})=>{if(0===i.length||!0===window.gtmkit_data.wc.is_cart)return;if(1===window.gtmkit_settings.wc.view_item_list.config&&Object.values(window.gtmkit_data.wc.blocks).includes("filter-wrapper")){if(s.includes(e))return;s.push(e)}const n={ecommerce:{items:i.map(((t,i)=>({...d(t,e),index:i})))}};c("view_item_list",n)})),(0,i.addAction)(`${n}-product-view-link`,e,(({product:t,listName:i=""})=>{const e={ecommerce:{item_list_name:i,items:[d(t,i)]}};c("select_item",e)})),(0,i.addAction)(`${n}-product-search`,e,(({searchTerm:t})=>{c("search",{search_term:t})}))})();