const JobApplied = (sequelize, DataTypes) => {
    return sequelize.define("jobApplied", {
        mailed = DataTypes.BOOLEAN 
    },
    {
        Model: associate = (models) => {
                jobApplied.belongsTo(models.job),
                jobApplied.belongsTo(models.student);
            }
        
    })
}

export default JobApplied;