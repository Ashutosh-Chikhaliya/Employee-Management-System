const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
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
            },
            {
                "taskTitle": "Client Follow-up",
                "taskDescription": "Follow up with clients regarding feedback",
                "taskDate": "2024-10-13",
                "category": "Sales",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Inventory Check",
                "taskDescription": "Verify the product inventory for next month's sale",
                "taskDate": "2024-10-14",
                "category": "Logistics",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Prepare Budget",
                "taskDescription": "Create the budget plan for Q4",
                "taskDate": "2024-10-15",
                "category": "Finance",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
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
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
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
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
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
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
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
            }
        ]
    }
]

const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}


export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))

}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    console.log(employees, admin)

}