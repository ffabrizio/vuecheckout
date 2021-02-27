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
import {address} from "../schemas/address"
import {shippingMethod} from "../schemas/shippingMethod"

export default {
    name: "CheckoutStepShipping",
    components: {
        "vue-form-generator": VueFormGenerator.component
    },
    data() {
        shippingMethod.fields[0].values = this.$store.state.checkout.shipping.shippingMethods
        return {
            model: { 
                address: this.$store.state.checkout.shipping.address,
                shippingMethod: this.$store.state.checkout.shipping.shippingMethods
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
        continueCheckout() {
            this.$store.dispatch("setShippingInfo", this.model)
        }
    }
}
</script>