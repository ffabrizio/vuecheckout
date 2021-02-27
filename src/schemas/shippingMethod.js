export const shippingMethod = {
    legend: "Shipping method",
    fields: [
        {
            required: true,
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