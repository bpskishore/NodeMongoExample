var {mongoose} = require('../db/mongoose');
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    require: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: 999999999
  }
});

module.exports = {
  Todo
}
