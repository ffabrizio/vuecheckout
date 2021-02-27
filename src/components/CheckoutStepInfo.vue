<template>
    <article>
        <form action="" @submit.prevent="continueCheckout">
            <vue-form-generator 
                :schema="schema" 
                :model="model" 
                :options="formOptions">
            </vue-form-generator>
            <button type="submit">Continue</button>
        </form>
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
            model: this.$store.state.checkout.intro.info,
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
            this.$store.dispatch("setPersonalInfo", this.model)
        }
    }
}
</script>