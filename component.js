angular.module('webapp', [])

.component('studentList', {
    templateUrl: 'template/phone-list.html',
    controller: function PhoneListController() {
        this.students = [{
            name: 'Duck',
            age: '12'
        }, {
            name: 'Bunny',
            age: '13'
        }, {
            name: 'Rabbit',
            age: '14'
        }];
    }
});