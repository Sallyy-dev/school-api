function createTeacher(req, res) {
  res.status(201).json({ success: true, message: "teacher created" });
}

function getAllTeachers(req, res) {
  res.json({ success: true, teachers: [] });
}

function getTeacherById(req, res) {
  const { id } = req.params;
  res.json({ success: true, teacher: { id } });
}

function updateTeacher(req, res) {
  const { id } = req.params;
  res.json({ success: true, message: `Teacher ${id} updated` });
}

function deleteTeacher(req, res) {
  const { id } = req.params;
  res.json({ success: true, message: `Teacher${id} deleted` });
}
module.exports = {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};
