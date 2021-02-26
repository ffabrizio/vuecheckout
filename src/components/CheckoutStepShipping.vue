<template>
    <article>
        <h2>Shipping information</h2>
        <vue-form-generator 
            :schema="schema" 
            :model="model" 
            :options="formOptions">
        </vue-form-generator>
        <button v-if="model" v-on:click="continueCheckout(model)">Continue</button>
    </article>
</template>

<script>
import VueFormGenerator from "vue-form-generator"
import {address} from "../schemas/address"
import {shippingMethod} from "../schemas/shippingMethod"

export default {
    name: "CheckoutStepShipping",
    components: {
        "vue-form-generator": VueFormGenerator.component
    },
    data() {
        shippingMethod.fields[0].values = this.$store.state.checkout.steps.shipping.shippingMethods
        return {
            model: { 
                address: this.$store.state.checkout.steps.shipping.address,
                shippingMethod: this.$store.state.checkout.steps.shipping.shippingMethods
            },
            schema: { 
                groups: [ 
                    address, shippingMethod
                ]
            },
            formOptions: {
                validateAfterLoad: true,
                validateAfterChanged: true,
                validateAsync: true
            }
        }
    },
    methods: {
        continueCheckout(model) {
            console.log("Changing", model)
            //if (VueFormGenerator.isValid()) {
                this.$store.dispatch("setShippingInfo", model)
            //}
        }
    }
}
</script>