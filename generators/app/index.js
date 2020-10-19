const generator = require('yeoman-generator')

module.exports = class extends generator {
    prompting() {
        return this.prompt([{
            type: "input",
            name: 'name',
            message: 'your project name',
            default: this.appname,
        }]).then(answer => {
            this.answer = answer;
        });
    }

    writing() {
        // this.fs.write(this.destinationPath('readme.txt'), 'okk.')
        const temp = this.templatePath('index.html')
        const output = this.destinationPath('index.html')
        console.log(this.answer)
        this.fs.copyTpl(temp, output, this.answer);
    }
}