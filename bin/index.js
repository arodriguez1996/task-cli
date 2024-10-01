#!/usr/bin/env node
const { create } = require('domain');
const fs = require('fs');

const [_, __, command, ...args] = process.argv;

const commandList = ['add', 'update', 'delete', 'mark-in-progress', 'mark-done', 'list', 'help'];
const fileName = 'tasks.json';

// Validate the commands
if (!commandList.includes(command) || command === 'help') {
    console.log(`
        ${!commandList.includes(command) ? 'Invalid command\n' : ''}
        Usage of task-cli:
        
            task-cli help                   Get available commands
            task-cli add <task>             Adding a new task
            task-cli update <id> <task>     Updating tasks
            task-cli delete <id>            Delete tasks
            task-cli mark-in-progress <id>  Mark tasks in progress
            task-cli mark-done <id>         Mark tasks done
            task-cli list                   List all tasks
            task-cli list <status>          List tasks by status 'done', 'todo' and 'in-progress'
        `);
    process.exit(1);
}

let tasks = [];

// obtain the tasks from the file
try {
    const json = fs.readFileSync(fileName, 'utf8');
    tasks = JSON.parse(json);
} catch (error) {
    if (error.code !== 'ENOENT') {
        console.log('Error reading file', error);
        process.exit(1);
    }
}

const updateFile = () => {
    fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2), { encoding: 'utf8', flag: 'w' });
}

const findTask = (id) => { }


if (command === 'add') {

    const taskDescription = args[0];

    if (!taskDescription || taskDescription.trim() === '') {
        console.log('Task is required');
        process.exit(1);
    }

    const date = new Date().toISOString();

    const task = {
        id: tasks.length + 1,
        task: taskDescription,
        status: 'todo',
        createdAt: date,
        updatedAt: date
    };

    tasks.push(task);
    updateFile();
    console.log(`Task added successfully (ID: ${tasks.length})`);
    process.exit(1);
}

if (command === 'update') {
    const [id, taskDescription] = args;



    console.log(`Task updated successfully (ID: ${id})`);
    process.exit(1);
}




