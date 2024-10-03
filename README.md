# Task Tracker CLI

This is a command-line interface (CLI) task tracker application built with Node.js (v20). The tool allows users to efficiently manage tasks from the terminal.

## Project Overview

This project is part of the [Task Tracker project](https://roadmap.sh/projects/task-tracker) from [roadmap.sh](https://roadmap.sh/), a learning resource for developers.

## Features

- Add new tasks
- Update existing tasks
- Delete tasks
- View all tasks

## Prerequisites

Before using this project, ensure you have the following installed:

- **Node.js v20**  
  You can download and install Node.js from the official website [here](https://nodejs.org/).

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arodriguez1996/task-cli.git
   cd task-cli
   ```

2. **Install the necessary dependencies globally:**

   ```bash
   npm install -g
   ```

## Usage

Once installed, you can use the CLI directly from the terminal:

```bash
task-cli <command> [options]
```

### Available Commands:

- `task-cli add <task>` - Adds a new task
- `task-cli update <task_id> <new_task>` - Updates an existing task
- `task-cli delete <task_id>` - Deletes a task by its ID
- `task-cli list <task_status>` - Displays all tasks, also filter them by the statuses 'all', 'in-progress' and 'done'

### Example:

```bash
task-cli add "Complete project"
task-cli list
task-cli list todo
task-cli update 1 "Complete task tracker project"
task-cli delete 1
```

## License

This project is licensed under the MIT License.
