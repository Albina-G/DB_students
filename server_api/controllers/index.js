'use strict';

const mongoose = require('mongoose');
const Student = require('../models/student');

(async () => {
    await mongoose.connect('mongodb://localhost/StudentsDB');

    const queries = new Student(mongoose, {
        studentsCollection: 'Students'
    });

    try {
        // Здесь можно делать запросы, чтобы проверять, что они правильно работают
        
        // добваление нового студента
        // const newStudent = await queries.addNewStudent({
        //     firstName: 'Student 1',
        //     lastName: 'Student 1(1)',
        //     rating: 4
        // });
        // console.info('newStudent', newStudent);

        // // Список всех студентов
        // let allStudents = await queries.getAllStudents();
        // console.info('allStudents', allStudents);

        // // изменение студента
        // const createStudent = await queries.createStudent({
        //     id: allStudents[0]._id,
        //     firstName: 'Student 1_v1',
        //     lastName: 'Student 1(1)_v1',
        //     rating: 5
        // });
        // console.info('createStudent', createStudent);

        // Удаление студента
        // const deleteStudent = await queries.deleteStudent(allStudents[0]._id);
        // console.info('deleteStudent', deleteStudent);

        // Список всех студентов
        // allStudents = await queries.getAllStudents();
        // console.info('allStudents', allStudents);


        // Для 'Мода' - верно
        // Для 'мода' - верно
        // Для 'мод' - верно
        // Для '' - выводит все
        // Без параметра, ошибка
        // const searchSouvenirs = await queries.searchSouvenirs();
        // console.info('searchSouvenirs', searchSouvenirs);
    } catch (error) {
        console.error(error);
    }

    await mongoose.disconnect(); // !!! потом убрать
})();
