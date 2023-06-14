const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

class CLI {
    constructor() {
        this.questions = [
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like?',
                choices: ['Circle', 'Square', 'Triangle']
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color would you like the font?'
            },
            {
                type: 'input',
                name: 'text',
                message: 'What letters would you like to display? (Limit 3)',
                validate: (input) => input.length <= 3
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like for your shape?'
            }
        ];
    }

    run() {
        inquirer.prompt(this.questions).then((answers) => {
            let shape;

            switch (answers.shape) {
                case 'Circle':
                    shape = new Circle(
                        answers.text,
                        answers.textColor,
                        answers.shapeColor
                    );
                    break;
                case 'Square':
                    shape = new Square(
                        answers.text,
                        answers.textColor,
                        answers.shapeColor
                    );
                    break;
                case 'Triangle':
                    shape = new Triangle(
                        answers.text,
                        answers.textColor,
                        answers.shapeColor
                    );
                    break;
                default:
                    console.log('Invalid selection');
                    return;
            }

            const svgFinal = shape.render();
            fs.writeFileSync('logo.svg', svgFinal);
            console.log('Logo saved to output folder');
        });
    }
}

module.exports = CLI;