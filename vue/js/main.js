
(function() {
    'use strict';
    let vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: [{
                title: 'task 1',
                isDone: false,
            }, {
                title: 'task 2',
                isDone: false,
            }, {
                title: 'task 3',
                isDone: true,
            },
            ],
        },
        methods: {
            addItem: function() {
                let item = {
                    title: this.newItem,
                    isDone: false,
                };
                this.todos.push(item);
                this.newItem = '';
            },
            deleteItem: function(i) {
                if (confirm('are you sure?')) {
                    this.todos.splice(i, 1);
                }
            }
        }
    });
})();
