import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
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
                info: {
                    title: "",
                    firstName: "",
                    lastName: "",
                    emailAddress: "",
                    poNumber: "",
                    notes: ""
                },
                shipping: {
                    address: {
                        line1: "",
                        line2: "",
                        postcode: "",
                        city: "",
                        region: "",
                        country: "United Kingdom"
                    },
                    shippingMethods: [
                        {
                            selected: false,
                            id: "standard",
                            name: "Standard delivery",
                            description: "Usually ships within 2 days"
                        },
                        {
                            selected: false,
                            id: "express",
                            name: "Express delivery",
                            description: "Usually ships within 24 hours"
                        }
                    ]
                },
                billing: {
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
                    id: "",
                    message: "",
                }
            }
        }
    },
    mutations: {
        setPersonalInfo(state, info) {
            state.checkout.steps.info = info
        },
        setShippingInfo(state, info) {
            state.checkout.steps.shipping.address = info.address
            state.checkout.steps.shipping.shippingMethod = info.shippingMethod
        }
    }
})