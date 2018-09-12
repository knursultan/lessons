function greet(name) {
    console.log(`Hello ${name}`.toUpperCase());
}

greet("Bill");

function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}

createEmail('john@mail.com', 'jane@mail.com', 'Hello', 'How are you doing?');

let name = 'Bill';
console.log(upperName`Hello ${name}`);

// function upperName(literals, ...values)
// don't know amount of values

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}
