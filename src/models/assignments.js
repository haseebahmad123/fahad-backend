module.exports = (sequelize, DataTypes) => {
    const Assignment = sequelize.define('Assignment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      instructor_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    }, {
      paranoid: true,
      timestamps: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    });
  
    Assignment.associate = (models) => {
      // Define associations here
      Assignment.belongsTo(models.User, {
        foreignKey: 'instructor_id',
        as: 'assignemnt',
      });

      

    };
  
    return Assignment;
  };
  