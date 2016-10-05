angular.module('webapp', [])

.component('studentList', {
    templateUrl: 'template/student-list.html',
    controller: function StudentListController() {
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