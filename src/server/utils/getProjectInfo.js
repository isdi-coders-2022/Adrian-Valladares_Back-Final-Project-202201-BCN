const { Project } = require("../../database/models/Project");

const getProjectInfo = async (projectId) => {
  const project = await Project.findById(projectId);
  await project.populate("users");
  const users = [];
  project.users.forEach((user) => {
    const { name, surname, _id: id } = user;
    users.push({ name, surname, id });
  });

  const { title, dueDate, _id: id } = project;

  return { title, dueDate, id, users };
};

module.exports = getProjectInfo;
