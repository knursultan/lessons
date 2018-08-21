let user = {
    firstName: 'John',
    lastName: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

let {firstName: first, lastName: last, social: {facebook}, age = 25} = user;

console.log(first, last, facebook, age);

function post(url, {data: {firstName, lastName}, cache}) {
    console.log(firstName, lastName, cache);
}

let result = post('api/users', {data: user, cache: false});

function getUserInfo() {
    return {
        firstName: 'John',
        lastName: 'Doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    };
}

let { firstName, lastName, social: {twitter} } = getUserInfo();

console.log(firstName, lastName, twitter )