export const info = {
    legend: "Information",
    fields: [
        {
            type: "select",
            label: "Title",
            model: "title",
            values: ["", "Mr", "Mrs", "Miss", "Dr", "Prof"]
        }, 
        {
            type: "input",
            inputType: "text",
            label: "First name",
            model: "firstName",
            placeholder: 'Your first name',
            featured: true,
            required: true
        },
        {
            type: "input",
            inputType: "text",
            label: "Last name",
            model: "lastName",
            placeholder: "Your last name",
            featured: true,
            required: true
        },
        {
            type: "input",
            inputType: "email",
            label: "Email",
            model: "emailAddress",
            placeholder: "Your email address",
            featured: true,
            required: true
        },
        {
            type: "input",
            inputType: "text",
            label: "PO number",
            model: "poNumber",
            placeholder: "Your PO number",
            featured: true,
            required: false
        },
        {
            type: "input",
            inputType: "text",
            label: "Notes",
            model: "notes",
            placeholder: "Notes",
            featured: true,
            required: false
        }
    ]
}