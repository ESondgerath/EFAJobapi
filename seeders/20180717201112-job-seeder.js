'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('job', [{
        Job_role: "Junior developer",
        Job_experience: "JavaScript, 2 yrs.",
        Job_description: "Android burn rate user experience business plan MVP ecosystem holy grail pitch entrepreneur. User experience crowdsource client vesting period termsheet investor. Investor customer assets disruptive backing partnership branding seed round iteration strategy startup. Bootstrapping traction buyer handshake learning curve interaction design stock lean startup direct mailing.",
        Job_salary: "55,000"
      },{
        Job_role: "Backend developer",
        Job_experience: "Node.js, 2 yrs.",
        Job_description: "Handshake series A financing scrum project. Non-disclosure agreement social media market hypotheses interaction design handshake branding gamification validation iPad. Prototype iPhone buzz. Hypotheses sales creative beta first mover advantage.",
        Job_salary: "70,000"
      },{
        Job_role: "Fullstack developer",
        Job_experience: "P.E.R.N., 2 yrs.",
        Job_description: "Twitter infrastructure social proof burn rate customer low hanging fruit research & development sales innovator infographic client iteration pivot. Android twitter burn rate vesting period user experience business model canvas first mover advantage client ramen. Growth hacking prototype virality bandwidth MVP. Supply chain iPhone alpha low hanging fruit beta assets.",
        Job_salary: "75,000"
      },{
        Job_role: "UI/UX Engineer",
        Job_experience: "Bootstrap, Material, CSS, 3 yrs.",
        Job_description: "Buzz social proof buyer focus bootstrapping founders channels investor MVP infrastructure rockstar. Analytics direct mailing branding metrics success market scrum project. Angel investor marketing freemium pitch. Founders iPhone buzz lean startup.",
        Job_salary: "60,000"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('job', null, {});
  }
};
