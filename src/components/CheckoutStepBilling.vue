<template>
    <article>
         <form action="" @submit.prevent="continueCheckout">
            <button type="submit">Finish</button>
         </form>
    </article>
</template>

<script>
export default {
    name: "CheckoutStepBilling",
    methods: {
        continueCheckout(model) {
            this.$store.dispatch("setBillingInfo", model)
        }
    }
}
</script>