import inquirer from 'inquirer';
import chalk from "chalk";
// Define a class representing a person
class Person {
    personality = '';
    name = '';
    constructor() { }
    // Set the personality type based on user input
    async setPersonalityType() {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'personality',
                message: 'Do you like to share things with others or keep them to yourself?',
                choices: ['Share', 'Keep'],
            },
        ]);
        if (answers.personality == "keep") {
            this.personality = "Secret";
        }
        else {
            this.personality = "Open-minded";
        }
    }
    // Set the person's name based on user input
    async setName() {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
        ]);
        this.name = answers.name;
    }
    // Display the person's personality type
    displayPersonalityType() {
        console.log(`\n${chalk.dim(this.name)}, your personality type is: ${chalk.blue(this.personality)}\n`);
    }
    // Run the entire process
    async run() {
        await this.setPersonalityType();
        await this.setName();
        this.displayPersonalityType();
    }
}
// Create an instance of the Person class
const person = new Person();
// Run the personality assessment process
person.run();
