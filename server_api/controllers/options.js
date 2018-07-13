'use strict';

const { addNewStudent } = require('../models/student');

exports.create = async (req, res, collection) => {
    const { firstName, lastName, rating } = req.body;
    const newStudent = await collection.addNewStudent({ firstName, lastName, rating });
    if (newStudent.result.ok === 1) {
        res.sendStatus(201);
    } else {
        res.sendStatus(409);
    }
};

exports.list = async (req, res, collection) => {
    try {
    const allStudents = await collection.getAllStudents();
    res.json(allStudents);
    } catch(err) {
        console.error(err);
    }
};

exports.deleteItem = async (req, res, collection) => {
    const id = req.params.id;
    const deleteStudent = await collection.deleteStudent(id);
    if (deleteStudent.ok === 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
};
