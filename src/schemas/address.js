export const address = {
    legend: "Address details",
    fields: [
        {
            type: "input",
            inputType: "text",
            label: "Line 1",
            model: "line1",
            placeholder: 'Address line 1',
            featured: true,
            required: true
        },
        {
            type: "input",
            inputType: "text",
            label: "Line 2",
            model: "line2",
            placeholder: 'Address line 2',
            featured: true,
            required: true
        },
        {
            type: "input",
            inputType: "text",
            label: "Postcode",
            model: "postcode",
            placeholder: "Your postcode",
            featured: true,
            required: true
        },
        {
            type: "input",
            inputType: "text",
            label: "City",
            model: "city",
            placeholder: "City",
            featured: true,
            required: true
        },
        {
            type: "input",
            inputType: "text",
            label: "State / Region",
            model: "region",
            placeholder: "State / Region",
            featured: true,
            required: false
        },
        {
            type: "input",
            inputType: "text",
            label: "Country",
            model: "country",
            disabled: true,
            required: false
        },
    ]
}