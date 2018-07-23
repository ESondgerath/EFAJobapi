'use strict'

const JobType = (sequelize, DataTypes) => {
    return sequelize.define('jobType', {
        Id: {
            type: DataType.INTEGER,
            primaryKey: true
        },
       Enum: {
            type : DataTypes.ENUM,
            values: ['Full Time', 'Part Time', 'Contract', 'Internship', 'Collaborative', 'Volunteer'] 
       },
       Model: associate = (models) => {
           JobType.belongsTo(models.job)
       }
    })
}


    
    


export default JobType;
