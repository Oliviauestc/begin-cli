const inquirer = require('inquirer');

function Project() {
}

Project.prototype.ask = function() {
  const prompts = [];
  prompts.push({
    type: 'input',
    name: 'projectName',
    message: '请输入项目名：'
  });
  prompts.push({
    type: 'input',
    name: 'projectDesc',
    message: '请输入项目描述：'
  });
  inquirer.prompt(prompts)
    .then((answer) => {
      console.log(answer);
    });
};

module.exports = Project;