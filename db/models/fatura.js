export default (Model, sequelize, DataTypes) => {
  class Fatura extends Model {}
  Fatura.init(
    {
      numero_cliente: DataTypes.STRING,
      mes_referencia: DataTypes.DATE,
      energia_eletrica: DataTypes.ARRAY(DataTypes.DECIMAL),
      energia_sceee: DataTypes.ARRAY(DataTypes.DECIMAL),
      energia_compensada: DataTypes.ARRAY(DataTypes.DECIMAL),
      contrib_ilumn_publica_municipal: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Fatura",
    }
  );
  return Fatura;
};
