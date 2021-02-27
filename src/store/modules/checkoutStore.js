export default {
    state: {
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
    },
    mutations: {
        setPersonalInfo(state, payload) {
            state.intro.isComplete = true
            state.intro.info = payload
            state.intro.isCurrentStep = false;

            state.shipping.isCurrentStep = true;
        },
        setShippingInfo(state, payload) {
            state.shipping.isComplete = true
            state.shipping.address = payload.address
            state.shipping.shippingMethod = payload.shippingMethod
            state.shipping.isCurrentStep = false;

            state.billing.isCurrentStep = true;
        },
        setBillingInfo(state) {
            state.billing.isComplete = true
            state.billing.isCurrentStep = false;

            state.confirmation.isCurrentStep = true;
        }
    },
    actions: {
        setPersonalInfo({ commit }, payload) { commit("setPersonalInfo", payload) },
        setShippingInfo({ commit }, payload) { commit("setShippingInfo", payload) },
        setBillingInfo({ commit }, payload) { commit("setBillingInfo", payload) }
    }
}