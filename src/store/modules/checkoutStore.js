export default {
    state: {
        steps: {
            intro: {
                isCurrentStep: true,
                isComplete: false,
                info: {
                    title: "",
                    firstName: "",
                    lastName: "",
                    emailAddress: "",
                    poNumber: "",
                    notes: ""
                }
            },
            shipping: {
                isCurrentStep: false,
                isComplete: false,
                address: {
                    line1: "",
                    line2: "",
                    postcode: "",
                    city: "",
                    region: "",
                    country: "United Kingdom"
                },
                shippingMethod: "",
                shippingMethods: [
                    {
                        id: "standard",
                        name: "Standard delivery",
                        description: "Usually ships within 2 days"
                    },
                    {
                        id: "express",
                        name: "Express delivery",
                        description: "Usually ships within 24 hours"
                    }
                ]
            },
            billing: {
                isCurrentStep: false,
                isComplete: false,
                address: {
                    line1: "",
                    line2: "",
                    postcode: "",
                    city: "",
                    region: "",
                    country: "United Kingdom"
                },
                paymentMethod: {
                    type: "",
                    reference: "",

                }
            },
            confirmation: {
                isCurrentStep: false,
                isComplete: false,
                info: {
                    id: "",
                    message: ""
                }
            }
        }
    },
    mutations: {
        setPersonalInfo(state, payload) {
            state.steps.intro.isComplete = true
            state.steps.intro.info = payload
            state.steps.intro.isCurrentStep = false;

            state.steps.shipping.isCurrentStep = true;
        },
        setShippingInfo(state, payload) {
            state.steps.shipping.isComplete = true
            state.steps.shipping.address = payload.address
            state.steps.shipping.shippingMethod = payload.shippingMethod
            state.steps.shipping.isCurrentStep = false;

            state.steps.billing.isCurrentStep = true;
        },
        setBillingInfo(state) {
            state.steps.billing.isComplete = true
            state.steps.billing.isCurrentStep = false;

            state.steps.confirmation.isCurrentStep = true;
        }
    },
    actions: {
        setPersonalInfo({ commit }, payload) { commit("setPersonalInfo", payload) },
        setShippingInfo({ commit }, payload) { commit("setShippingInfo", payload) },
        setBillingInfo({ commit }, payload) { commit("setBillingInfo", payload) }
    }
}