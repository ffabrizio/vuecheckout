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
                    current: true,
                    done: false,
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
                    current: false,
                    done: false,
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
                    current: false,
                    done: false,
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
                    current: false,
                    done: false,
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
            state.checkout.steps.intro.done = true
            state.checkout.steps.intro.info = info
        },
        setShippingInfo(state, info) {
            state.checkout.steps.shipping.done = true
            state.checkout.steps.shipping.address = info.address
            state.checkout.steps.shipping.shippingMethod = info.shippingMethod
        }
    }
})