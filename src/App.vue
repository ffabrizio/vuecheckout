<template>
    <div>
    <h1>Checkout</h1>
    <checkout />
    </div>
</template>

<script>
import "vue-form-generator/dist/vfg.css"
import Vue from "vue"
import VueFormGenerator from "vue-form-generator"
import Checkout from "./components/Checkout.vue"

Vue.use(VueFormGenerator)

export default {
  name: "App",
  components: {
    Checkout
  }
}
</script>