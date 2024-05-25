export default function (Model, sequelize, DataTypes) {
  class Task extends Model {}
  Task.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "task",
    }
  );
  return Task;
}
