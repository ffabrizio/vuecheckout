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
    }
}
</script>