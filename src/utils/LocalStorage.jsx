const employees = [
    {
        "id": 1,
        "name": "Virat Kohli",
        "email": "virat@bcci.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Complete Report",
                "taskDescription": "Prepare the monthly financial report by compiling all necessary financial data, analyzing trends, and presenting insights to the management team. Ensure accuracy and attention to detail, as this report will guide strategic decisions.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati ea earum magnam assumenda explicabo minus inventore minima consectetur. Voluptatem a numquam fugit!",
                "taskDate": "2024-10-10",
                "category": "Finance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the weekly team sync-up where project statuses are discussed, challenges are addressed, and plans for the upcoming week are outlined. Collaboration and input from all team members are crucial for effective planning.",
                "taskDate": "2024-10-11",
                "category": "Meeting",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Product Update",
                "taskDescription": "Update product features on the website based on user feedback and recent developments. This includes reviewing current features, identifying areas for improvement, and implementing changes to enhance user experience.",
                "taskDate": "2024-10-12",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": {
            "activeTasks": 1,
            "newTasks": 1,
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
                "taskDescription": "Prepare comprehensive slides for the client presentation scheduled next week. Ensure that the content is engaging and visually appealing, highlighting key metrics and project milestones to instill confidence in our clients.",
                "taskDate": "2024-10-12",
                "category": "Sales",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Strategy",
                "taskDescription": "Develop innovative strategies for the project, focusing on enhancing team productivity and collaboration. This involves brainstorming sessions, researching industry best practices, and proposing actionable plans.",
                "taskDate": "2024-10-13",
                "category": "Management",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Weekly Report",
                "taskDescription": "Submit the weekly progress report to the management team. This includes an overview of completed tasks, ongoing projects, and any roadblocks faced during the week, ensuring transparency and accountability.",
                "taskDate": "2024-10-14",
                "category": "Operations",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCount": {
            "activeTasks": 1,
            "newTasks": 1,
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
                "taskDescription": "Address and resolve bugs reported in the latest software release. This includes debugging code, conducting tests to ensure functionality, and implementing fixes that improve overall performance.",
                "taskDate": "2024-10-13",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review code submitted by team members for the latest release. Ensure adherence to coding standards, identify potential improvements, and provide constructive feedback to promote coding best practices.",
                "taskDate": "2024-10-14",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Team Coordination",
                "taskDescription": "Coordinate with the team for the sprint planning meeting. This includes discussing priorities, allocating tasks, and setting deadlines to ensure a smooth workflow during the sprint.",
                "taskDate": "2024-10-15",
                "category": "Management",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Testing",
                "taskDescription": "Conduct testing for new features implemented in the latest release. This includes creating test cases, executing tests, and reporting any discrepancies to ensure high-quality deliverables.",
                "taskDate": "2024-10-16",
                "category": "Quality Assurance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": {
            "activeTasks": 2,
            "newTasks": 1,
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
                "taskDescription": "Perform regular backups of the database to ensure data integrity and prevent loss of critical information. This involves scheduling backups and verifying the success of each backup operation.",
                "taskDate": "2024-10-14",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Server Maintenance",
                "taskDescription": "Check server maintenance logs and perform necessary updates to ensure the servers are running optimally. This includes monitoring performance metrics and addressing any identified issues.",
                "taskDate": "2024-10-15",
                "category": "IT",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "System Upgrade",
                "taskDescription": "Upgrade the IT systems to meet the requirements for the new quarter. This includes evaluating current systems, identifying necessary upgrades, and implementing changes to enhance functionality and security.",
                "taskDate": "2024-10-16",
                "category": "IT",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": {
            "activeTasks": 1,
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
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Social Media Plan",
                "taskDescription": "Create a new social media strategy",
                "taskDate": "2024-10-16",
                "category": "Marketing",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Market Research",
                "taskDescription": "Research new target markets",
                "taskDate": "2024-10-17",
                "category": "Research",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": {
            "activeTasks": 1,
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