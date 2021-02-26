<template>
    <div>
        <h2>1. Personal information</h2>
        <checkout-step-info v-if="showInfoStep" />
        <h2>2. Shipping information</h2>
        <checkout-step-shipping v-if="showShippingStep" />
        <h2>3. Billing information</h2>
        <checkout-step-billing v-if="showBillingStep" />
        <h2>4. Confirmation</h2>
        <checkout-step-confirmation v-if="showConfirmationStep" />
    </div>
</template>
<script>
import CheckoutStepInfo from "./CheckoutStepInfo"
import CheckoutStepShipping from "./CheckoutStepShipping"
import CheckoutStepBilling from "./CheckoutStepBilling"
import CheckoutStepConfirmation from "./CheckoutStepConfirmation"

export default {
    name: "Checkout",
    components: {
        CheckoutStepInfo,
        CheckoutStepShipping,
        CheckoutStepBilling,
        CheckoutStepConfirmation
    },
    computed:{
        showInfoStep() {
            return this.$store.state.checkout.steps.intro.isCurrentStep
        },
        showShippingStep() {
            return this.$store.state.checkout.steps.shipping.isCurrentStep
        },
        showBillingStep() {
            return this.$store.state.checkout.steps.billing.isCurrentStep
        },
        showConfirmationStep() {
            return this.$store.state.checkout.steps.confirmation.isCurrentStep
        }
    }
}
</script>