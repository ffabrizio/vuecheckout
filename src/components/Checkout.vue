<template>
    <div>
        <checkout-step-info v-if="showInfoStep" />
        <checkout-step-shipping v-if="showShippingStep" />
        <checkout-step-billing v-if="showBillingStep" />
        <checkout-step-confirmation v-if="showConfirmationStep" />
    </div>
</template>
<script>
import CheckoutStepInfo from "./CheckoutStepInfo"
import CheckoutStepShipping from "./CheckoutStepShipping"
import CheckoutStepBilling from "./CheckoutStepBilling"
import CheckoutStepConfirmation from "./CheckoutStepConfirmation"
import {store} from "../store/index"

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
            return !store.state.checkout.steps.intro.done &&
                store.state.checkout.intro.current
        },
        showShippingStep() {
            return !store.state.checkout.steps.shipping.done &&
                store.state.checkout.shipping.current
        },
        showBillingStep() {
            return !store.state.checkout.steps.billing.done &&
                store.state.checkout.billing.current
        },
        showConfirmationStep() {
            return !store.state.checkout.steps.confirmation.done &&
                store.state.checkout.confirmation.current
        }
    }
}
</script>