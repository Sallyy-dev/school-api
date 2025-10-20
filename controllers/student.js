function createStudent(req, res) {
  // Simulate creating a student
  res.status(201).json({ success: true, message: "Student created" });
}

function getAllStudents(req, res) {
  // Simulate fetching students
  res.json({ success: true, students: [] });
}

function getStudentById(req, res) {
  const { id } = req.params;
  res.json({ success: true, student: { id } });
}

function updateStudent(req, res) {
  const { id } = req.params;
  res.json({ success: true, message: `Student ${id} updated` });
}

function deleteStudent(req, res) {
  const { id } = req.params;
  res.json({ success: true, message: `Student ${id} deleted` });
}
module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
