export const shippingMethod = {
    legend: "Shipping method",
    fields: [
        {
            type: "radios",
            label: "Shipping method",
            model: "shippingMethod",
            radiosOptions: {
                value: "id",
                name: "name"
            }
        }
    ]
}