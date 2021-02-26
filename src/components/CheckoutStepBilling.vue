<template>
    <article>
        <button v-on:click="continueCheckout">Finish</button>
    </article>
</template>

<script>
export default {
    name: "CheckoutStepBilling",
    methods: {
        continueCheckout(model) {
            //if (VueFormGenerator.isValid()) {
                this.$store.dispatch("setBillingInfo", model)
            //}
        }
    }
}
</script>