module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define('student', {
        Uid: {
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                len: [1, 30],
                isLowercase: true
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                len: [1, 50],
                isLowercase: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                len: [1, 30],
                isAlphanumeric: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 30]
            }
        },
        resume: {
            type: DataTypes.STRING,
            validate: {
                isURL: true
            }
        },
        Model: associate = (models) => {
            student.hasOne(models.socialMedia)
            student.hasMany(models.jobApplied)
        }
    })

    return student;
}