<template>
    <div>
        <checkout-step-info />
        <checkout-step-shipping />
        <checkout-step-billing />
        <checkout-step-confirmation />
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
            return !this.$store.state.checkout.steps.intro.done &&
                this.$store.state.checkout.intro.isCurrentStep
        },
        showShippingStep() {
            return !this.$store.state.checkout.steps.shipping.done &&
                this.$store.state.checkout.shipping.isCurrentStep
        },
        showBillingStep() {
            return !this.$store.state.checkout.steps.billing.done &&
                this.$store.state.checkout.billing.isCurrentStep
        },
        showConfirmationStep() {
            return !this.$store.state.checkout.steps.confirmation.done &&
                this.$store.state.checkout.confirmation.isCurrentStep
        }
    }
}
</script>