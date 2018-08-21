'use strict';

var user = {
    firstName: 'John',
    lastName: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

var first = user.firstName,
    last = user.lastName,
    facebook = user.social.facebook,
    _user$age = user.age,
    age = _user$age === undefined ? 25 : _user$age;


console.log(first, last, facebook, age);

function post(url, _ref) {
    var _ref$data = _ref.data,
        firstName = _ref$data.firstName,
        lastName = _ref$data.lastName,
        cache = _ref.cache;

    console.log(firstName, lastName, cache);
}

var result = post('api/users', { data: user, cache: false });

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

var _getUserInfo = getUserInfo(),
    firstName = _getUserInfo.firstName,
    lastName = _getUserInfo.lastName,
    twitter = _getUserInfo.social.twitter;

console.log(firstName, lastName, twitter);