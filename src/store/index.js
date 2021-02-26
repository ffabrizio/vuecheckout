import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cart: {
            lineItems: [
                // { 
                //     id: "",
                //     product: "",
                //     description: "",
                //     price: 0,
                //     discounts: 0,
                //     sku: ""
                // }
            ],
            subtotal: 0,
            discounts: 0,
            vouchers: [
                // {
                //     name: "",
                //     discount: 0
                // }
            ],
            tax: 0,
            total: 0
        },
        checkout: {
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
        }
    },
    mutations: {
        setPersonalInfo(state, info) {
            state.checkout.steps.intro.isComplete = true
            state.checkout.steps.intro.info = info
            state.checkout.steps.intro.isCurrentStep = false;

            state.checkout.steps.shipping.isCurrentStep = true;

        },
        setShippingInfo(state, info) {
            state.checkout.steps.shipping.isComplete = true
            state.checkout.steps.shipping.address = info.address
            state.checkout.steps.shipping.shippingMethod = info.shippingMethod
            state.checkout.steps.shipping.isCurrentStep = false;

            state.checkout.steps.billing.isCurrentStep = true;
        },
        setBillingInfo(state) {
            state.checkout.steps.billing.isComplete = true
            state.checkout.steps.billing.isCurrentStep = false;

            state.checkout.steps.confirmation.isCurrentStep = true;
        }
    },
    actions: {
        setPersonalInfo({ commit }, payload) { commit("setPersonalInfo", payload) },
        setShippingInfo({ commit }, payload) { commit("setShippingInfo", payload) },
        setBillingInfo({ commit }, payload) { commit("setBillingInfo", payload) }
    }
})