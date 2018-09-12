"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// let xmen = ['Cyclops', 'Wolverine', 'Rogue'];
//
// for (let xman of xmen) {
//     console.log(xman);
// }
//
// let iterator = xmen[Symbol.iterator]();
//
// let next = iterator.next();
//
// while (!next.done) {
//     console.log(next.value);
//     next = iterator.next();
// }

var randomGenerator = _defineProperty({
    generate: function generate() {
        return this[Symbol.iterator]();
    }
}, Symbol.iterator, function () {
    var count = 0;
    return {
        next: function next() {
            var value = Math.ceil(Math.random() * 100);
            var done = count > 9;
            count += 1;
            return { value: value, done: done };
        }
    };
});

var random = randomGenerator[Symbol.iterator]();
console.log(random.next().value);

var TaskList = function () {
    function TaskList() {
        _classCallCheck(this, TaskList);

        this.tasks = [];
    }

    _createClass(TaskList, [{
        key: "addTasks",
        value: function addTasks() {
            for (var _len = arguments.length, tasks = Array(_len), _key = 0; _key < _len; _key++) {
                tasks[_key] = arguments[_key];
            }

            this.tasks = this.tasks.concat(tasks);
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            var tasks = this.tasks;
            var index = 0;

            return {
                next: function next() {
                    var result = {
                        value: undefined,
                        done: true
                    };
                }
            };
        }
    }]);

    return TaskList;
}();