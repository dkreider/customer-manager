import { Customer } from "./models/customer";

export var Customers: Array<Customer> = [
    {
        _id: "1233",
        name: "Sarah W",
        email: "sarah@sarah.com",
        phoneNumber: "443-098-9043",
        notes: "This is a test.",
        invoices: [{
            _id: "1",
            created: new Date(),
            due: new Date(),
            service: "Web Development",
            value: 4500,
            additionalNotes: "Adding the 3 new pages."
        }, {
            _id: "2",
            created: new Date(),
            due: new Date(),
            service: "Web App Fixes",
            value: 2500,
            additionalNotes: "Fixing the bug that caused a $55000 drop in profit."
        }]
    },
    {
        _id: "1234",
        name: "Daniel K",
        email: "daniel@daniel.com",
        phoneNumber: "123-567-9023",
        notes: "This is a test.",
        invoices: [{
            _id: "1",
            created: new Date(),
            due: new Date(),
            service: "Web Development",
            value: 4500,
            additionalNotes: "Adding the 3 new pages."
        }, {
            _id: "2",
            created: new Date(),
            due: new Date(),
            service: "Web App Fixes",
            value: 2500,
            additionalNotes: "Fixing the bug that caused a $55000 drop in profit."
        }]
    },
    {
        _id: "1235",
        name: "Adam N",
        email: "adam@adam.com",
        phoneNumber: "187-896-7854",
        notes: "This is a test.",
        invoices: [{
            _id: "1",
            created: new Date(),
            due: new Date(),
            service: "Web Development",
            value: 4500,
            additionalNotes: "Adding the 3 new pages."
        }, {
            _id: "2",
            created: new Date(),
            due: new Date(),
            service: "Web App Fixes",
            value: 2500,
            additionalNotes: "Fixing the bug that caused a $55000 drop in profit."
        }]
    },
    {
        _id: "1236",
        name: "Ronald A",
        email: "ronald@ronald.com",
        phoneNumber: "457-781-9871",
        notes: "This is a test.",
        invoices: [{
            _id: "1",
            created: new Date(),
            due: new Date(),
            service: "Web Development",
            value: 4500,
            additionalNotes: "Adding the 3 new pages."
        }, {
            _id: "2",
            created: new Date(),
            due: new Date(),
            service: "Web App Fixes",
            value: 2500,
            additionalNotes: "Fixing the bug that caused a $55000 drop in profit."
        }]
    },
    {
        _id: "1237",
        name: "Genesis U",
        email: "genesis@genesis",
        phoneNumber: "564-327-8906",
        notes: "This is a test.",
        invoices: [{
            _id: "1",
            created: new Date(),
            due: new Date(),
            service: "Web Development",
            value: 4500,
            additionalNotes: "Adding the 3 new pages."
        }, {
            _id: "2",
            created: new Date(),
            due: new Date(),
            service: "Web App Fixes",
            value: 2500,
            additionalNotes: "Fixing the bug that caused a $55000 drop in profit."
        }]
    },
    {
        _id: "1238",
        name: "Rodrigo S",
        email: "rod@rod.com",
        phoneNumber: "125-672-9023",
        notes: "This is a test.",
        invoices: [{
            _id: "1",
            created: new Date(),
            due: new Date(),
            service: "Web Development",
            value: 4500,
            additionalNotes: "Adding the 3 new pages."
        }, {
            _id: "2",
            created: new Date(),
            due: new Date(),
            service: "Web App Fixes",
            value: 2500,
            additionalNotes: "Fixing the bug that caused a $55000 drop in profit."
        }]
    },
    {
        _id: "1239",
        name: "Mr Nick",
        email: "nick@nick.com",
        phoneNumber: "765-092-8971",
        notes: "This is a test.",
        invoices: [{
            _id: "1",
            created: new Date(),
            due: new Date(),
            service: "Web Development",
            value: 4500,
            additionalNotes: "Adding the 3 new pages."
        }, {
            _id: "2",
            created: new Date(),
            due: new Date(),
            service: "Web App Fixes",
            value: 2500,
            additionalNotes: "Fixing the bug that caused a $55000 drop in profit."
        }]
    },
    {
        _id: "1240",
        name: "Shawn O",
        email: "shawn@shawn.com",
        phoneNumber: "672-098-7123",
        notes: "This is a test.",
        invoices: [{
            _id: "1",
            created: new Date(),
            due: new Date(),
            service: "Web Development",
            value: 4500,
            additionalNotes: "Adding the 3 new pages."
        }, {
            _id: "2",
            created: new Date(),
            due: new Date(),
            service: "Web App Fixes",
            value: 2500,
            additionalNotes: "Fixing the bug that caused a $55000 drop in profit."
        }]
    },
];