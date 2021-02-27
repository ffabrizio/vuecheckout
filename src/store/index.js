import Vue from "vue"
import Vuex from "vuex"
import cartStore from "./modules/cartStore"
import checkoutStore from "./modules/checkoutStore"

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        cart: cartStore,
        checkout: checkoutStore
    }
})