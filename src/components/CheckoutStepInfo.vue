<template>
    <article>
        <vue-form-generator 
            :schema="schema" 
            :model="model" 
            :options="formOptions">
        </vue-form-generator>
        <button v-on:click="continueCheckout">Continue</button>
    </article>
</template>

<script>
import VueFormGenerator from "vue-form-generator"
import {info} from "../schemas/info"
export default {
    name: "CheckoutStepInfo",
    components: {
        "vue-form-generator": VueFormGenerator.component
    },
    data() {
        return {
            model: this.$store.state.checkout.steps.intro.info,
            schema: info,
            formOptions: {
                validateAfterLoad: true,
                validateAfterChanged: true,
                validateAsync: true
            }
        }
    },
    methods: {
        continueCheckout() {
            //if (VueFormGenerator.isValid()) {
                this.$store.dispatch("setPersonalInfo", this.model)
            //}
        }
    }
}
</script>