const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.TESTING ? ':memory:' : 'marksheet.db'
})

const Student = db.define('student', {
  name: DataTypes.STRING
})

const Subject = db.define('subject', {
  name: DataTypes.STRING,
  maxMarks: DataTypes.INTEGER
})

const Exam = db.define('exam', {
  name: DataTypes.STRING,
  year: {
    type: DataTypes.INTEGER,
    validate: {
      max: 2050,
      min: 2010
    }
  },
  month: {
    type: DataTypes.INTEGER,
    validate: {
      max: 12,
      min: 1
    }
  }
})

const Paper = db.define('paper', {
  weightage: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1
    }
  }
})

const Marks = db.define('marks', {
  amount: DataTypes.FLOAT
}, {
  freezeTableName: true
})

Paper.belongsTo(Subject)
Subject.hasMany(Paper)

Paper.belongsTo(Exam)
Exam.hasMany(Paper)

Marks.belongsTo(Student)
Marks.belongsTo(Paper)
Student.hasMany(Marks)
Paper.hasMany(Marks)


module.exports = {
  db,
  Student, Marks,
  Exam, Paper, Subject
}

