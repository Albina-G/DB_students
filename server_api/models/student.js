'use strict';

module.exports = class Student {
  constructor(mongoose, { studentsCollection }) {
    const studentSchema = mongoose.Schema({ // eslint-disable-line new-cap
      firstName: String,
      lastName: String,
      rating: { type: Number, min: 1, max: 10 },
      date: Date
    });
    // Модели в таком формате нужны для корректного запуска тестов
    // this._SchemaType = mongoose.Schema.Types;
    this._Student = mongoose.model('Student', studentSchema, studentsCollection);
    this._StudentCollection = mongoose.connection.collection('students');
  }

  addNewStudent({ firstName, lastName, rating }) {
    return this._StudentCollection.insert({ firstName, lastName, rating, date: new Date() });
  }

  getAllStudents() {
    return this._Student.find();
  }

  // async createStudent({ id, firstName, lastName, rating }) {
  //     const student = await this._Student.findById(id);
  //     student.rating = rating ? (student.rating + rating) : student.rating;
  //     student.firstName = firstName ? firstName : student.firstName;
  //     student.lastName = lastName ? lastName : student.lastName;
  //     student.date = new Date();

  //     return student.save();
  // }

  deleteStudent(id) {
    return this._Student.remove({ '_id': id });
  }
};
