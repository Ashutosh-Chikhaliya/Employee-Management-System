const employees = [
    {
        "id": 1,
        "name": "Virat Kohli",
        "email": "virat@bcci.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Complete Report",
                "taskDescription": "Prepare the monthly financial report",
                "taskDate": "2024-10-10",
                "category": "Finance",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the weekly team sync-up",
                "taskDate": "2024-10-11",
                "category": "Meeting",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Product Update",
                "taskDescription": "Update product features on the website",
                "taskDate": "2024-10-12",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": {
            "activeTasks": 2,
            "newTasks": 2,
            "completedTasks": 1,
            "failedTasks": 0,
            "totalTasks": 3
        }
    },
    {
        "id": 2,
        "name": "Rohit Sharma",
        "email": "rohit@bcci.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Client Presentation",
                "taskDescription": "Prepare slides for client presentation",
                "taskDate": "2024-10-12",
                "category": "Sales",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Strategy",
                "taskDescription": "Develop new team strategies for the project",
                "taskDate": "2024-10-13",
                "category": "Management",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Weekly Report",
                "taskDescription": "Submit weekly progress report",
                "taskDate": "2024-10-14",
                "category": "Operations",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false
            }
        ],
        "taskCount": {
            "activeTasks": 2,
            "newTasks": 2,
            "completedTasks": 1,
            "failedTasks": 0,
            "totalTasks": 3
        }
    },
    {
        "id": 3,
        "name": "Hardik Pandy",
        "email": "hardik@bcci.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Bug Fixes",
                "taskDescription": "Fix bugs from the latest release",
                "taskDate": "2024-10-13",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review the code for the latest release",
                "taskDate": "2024-10-14",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Team Coordination",
                "taskDescription": "Coordinate with the team for the sprint plan",
                "taskDate": "2024-10-15",
                "category": "Management",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Testing",
                "taskDescription": "Test the new features",
                "taskDate": "2024-10-16",
                "category": "Quality Assurance",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": {
            "activeTasks": 3,
            "newTasks": 3,
            "completedTasks": 1,
            "failedTasks": 0,
            "totalTasks": 4
        }
    },
    {
        "id": 4,
        "name": "Jasprit Bumrah",
        "email": "jasprit@bcci.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Database Backup",
                "taskDescription": "Perform regular backup of the database",
                "taskDate": "2024-10-14",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Server Maintenance",
                "taskDescription": "Check server maintenance logs",
                "taskDate": "2024-10-15",
                "category": "IT",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "System Upgrade",
                "taskDescription": "Upgrade the IT systems for the new quarter",
                "taskDate": "2024-10-16",
                "category": "IT",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": {
            "activeTasks": 2,
            "newTasks": 1,
            "completedTasks": 1,
            "failedTasks": 0,
            "totalTasks": 3
        }
    },
    {
        "id": 5,
        "name": "Ravindra Jadeja",
        "email": "ravindra@bcci.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Marketing Campaign",
                "taskDescription": "Launch the new marketing campaign",
                "taskDate": "2024-10-15",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Social Media Plan",
                "taskDescription": "Create a new social media strategy",
                "taskDate": "2024-10-16",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Market Research",
                "taskDescription": "Research new target markets",
                "taskDate": "2024-10-17",
                "category": "Research",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": {
            "activeTasks": 3,
            "newTasks": 2,
            "completedTasks": 0,
            "failedTasks": 0,
            "totalTasks": 3
        }
    }
];

const admin = [
    {
        "id": 1,
        "name": "Rahul Dravid",
        "email": "rahul@bcci.com",
        "password": "123"
    },
];




export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return { employees, admin }
}