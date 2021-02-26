<template>
    <article>
        <h2>Personal information</h2>
        <vue-form-generator 
            :schema="schema" 
            :model="model" 
            :options="formOptions">
        </vue-form-generator>
        <button v-on:click="continueCheckout(model)">Continue</button>
    </article>
</template>

<script>
import VueFormGenerator from "vue-form-generator"
import {store} from "../store/index"
import {info} from "../schemas/info"
export default {
    name: "CheckoutStepInfo",
    components: {
        "vue-form-generator": VueFormGenerator.component
    },
    data() {
        return {
            model: store.state.checkout.steps.info,
            schema: info,
            formOptions: {
                validateAfterLoad: true,
                validateAfterChanged: true,
                validateAsync: true
            }
        }
    },
    methods: {
        continueCheckout: (model) => {
            store.commit("setPersonalInfo", model)
            
            console.log(store.state.checkout)
        }
    }
}
</script>