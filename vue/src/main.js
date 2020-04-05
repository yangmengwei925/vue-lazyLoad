import Vue from 'vue'
import App from './App.vue'
import LazyLoad from "vue-lazyload"
// import Vant from "vant"
// import 'vant/lib/index.css'
Vue.config.productionTip = false
    // Vue.use(Vant)
Vue.use(LazyLoad, {
    //懒加载
    loading: 'https://img.zcool.cn/community/014bcb56469e6c32f87512f6251bfd.gif',
    //     //图片错误时
    //error: "https://pb.sogou.com/cl.gif?uigs_productid=pic&uigs_t=1567753896612362&uigs_uuid=1567753875601966&query=%25B4%25ED%25CE%25F3%25CD%25BC%25C6%25AC&screen_width=1366&screen_height=768&showShopRecom=false&time=1567753874867&policyType=0&detail=1&cur_doc=b37d57d0bbfab194-9429aa682b55e7aa-2e43e913625025562a60cdf28b7fe1c5&uigs_version=v1.1&uigs_refer=&uigs_st=21&uigs_cl=enteroripage_http%3A%2F%2F90sheji.com%2Fsucai%2F15026861.html"
    error: "https://pb.sogou.com/cl.gif?uigs_productid=pic&uigs_t=1567753896612362&uigs_uuid=1567753875601966&query=%25B4%25ED%25CE%25F3%25CD%25BC%25C6%25AC&screen_width=1366&screen_height=768&showShopRecom=false&time=1567753874867&policyType=0&detail=1&cur_doc=b37d57d0bbfab194-9429aa682b55e7aa-2e43e913625025562a60cdf28b7fe1c5&uigs_version=v1.1&uigs_refer=&uigs_st=21&uigs_cl=enteroripage_http%3A%2F%2F90sheji.com%2Fsucai%2F15026861.html"
})
new Vue({
    render: h => h(App),
}).$mount('#app')