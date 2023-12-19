module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    task_comment: DataTypes.STRING,
    task_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  });
  
  return Comment;
};
