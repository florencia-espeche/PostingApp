module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    "Posts", // Model name table
    {
      title: { type: DataTypes.STRING, allowNull: false },
      post: { type: DataTypes.STRING, allowNull: false },
      username: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  return Posts;
};
