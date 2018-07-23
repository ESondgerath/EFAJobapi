module.exports = (sequelize, DataTypes) => {
    return sequelize.define ("job", {
        job_role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,40],
            }
        },
        job_experience: {
            type: DataTypes.ARRAY,
            allowNull: false,
            validate: {
                len: [1,120],
            }
        },
        job_description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,240],
            }
        },
        job_salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1,10],
            }
        },

    Model: associate = (models) => {
            job.belongsTo(models.Employer_account),
            job.hasOne(models.jobType);
        }
    })
}

