webpackJsonp([8],{ETM2:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("v2ns");var s=i("DNVT"),r={data:function(){return{demodata:[1,2,3,4,5,6,7,8,9,10]}},mounted:function(){var e=window.innerHeight||document.documetElement.clientHeight||window.screen.availHeight||window.screen.height;this.$refs.box.style.height=e+"px";var t=!1,i=0;new s.a(".swiper-container",{speed:300,slidesPerView:"auto",freeMode:!0,direction:"vertical",setWrapperSize:!0,scrollbar:{el:".swiper-scrollbar"},on:{touchEnd:function(){var e=this,s=e.$el.find(".refresh"),r=e.$el.find(".loadmore");e.translate>100&&(e.setTransition(this.params.speed),e.setTranslate(100),e.touchEventsData.isTouched=!1,s.html("刷新中"),e.allowTouchMove=!1,setTimeout(function(){e.removeAllSlides();for(var i=0;i<20;i++)e.appendSlide('<div style="font-size:0.18rem;height:1rem;background:#fff;line-height:1rem" class="swiper-slide">New Slide'+(i+1)+"</div>"),s.html("刷新完成"),t=!0,e.allowTouchMove=!0},1e3));for(var a=0,n=0;n<e.slides.length;n++)a+=e.slides[n].offsetHeight;var l=e.height-a-20;console.log(e.translate,l),e.translate<l?(r.html("刷新中"),e.allowTouchMove=!1,e.params.virtualTranslate=!0,setTimeout(function(){for(var t=0;t<20;t++)e.appendSlide('<div style="font-size:0.18rem;height:1rem;background:#fff;line-height:1rem" class="swiper-slide">moreSlide'+(20*i+t+1)+"</div>"),r.html("刷新完成"),e.params.virtualTranslate=!1,e.allowTouchMove=!0;i++},1e3)):this.$el.find(".loadmore").html("释放刷新")},touchStart:function(){1==t&&(this.$el.find(".refresh").html("释放刷新"),t=!1)},momentumBounce:function(){}}})}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"box",staticStyle:{background:"#ccc"}},[i("div",{staticClass:"swiper-container"},[i("div",{staticClass:"swiper-wrapper"},[i("div",{staticClass:"refresh"},[e._v("释放刷新")]),e._v(" "),e._l(e.demodata,function(t,s){return i("div",{staticClass:"swiper-slide"},[e._v("Slide "+e._s(t))])}),e._v(" "),i("div",{staticClass:"loadmore"},[e._v("加载更多")])],2),e._v(" "),i("div",{staticClass:"swiper-scrollbar"})])])},staticRenderFns:[]};var n=i("VU/8")(r,a,!1,function(e){i("c83f")},"data-v-2fa636b2",null);t.default=n.exports},c83f:function(e,t){}});
//# sourceMappingURL=8.25616fe268da042df78b.js.map