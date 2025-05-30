/*
Create and Query a MySQL Table Using Node.js**

Objective:

Write a Node.js script to perform the following operations with a MySQL database:  
1. Connect to a database using given credentials.  
2. Create a table named `employees` with the following structure:
   - `id` (Primary Key, Auto Increment)
   - `name` (VARCHAR, NOT NULL)
   - `position` (VARCHAR, NOT NULL)
   - `salary` (FLOAT, NOT NULL)
   - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)  
3. Insert three records into the table:
   - `Alice, Manager, 75000`
   - `Bob, Engineer, 65000`
   - `Charlie, Technician, 45000`  
4. Fetch all records from the table and display them in the console as a formatted table.  

Input:

There is no input; use the given data and structure.  

Output:

A formatted table with the inserted data, for example:

```plaintext
┌─────┬─────────┬────────────┬──────────┬──────────────────────────┐
│ id  │ name    │ position   │ salary   │ created_at               │
├─────┼─────────┼────────────┼──────────┼──────────────────────────┤
│ 1   │ Alice   │ Manager    │ 75000.0  │ 2024-12-21 10:00:00      │
│ 2   │ Bob     │ Engineer   │ 65000.0  │ 2024-12-21 10:01:00      │
│ 3   │ Charlie │ Technician │ 45000.0  │ 2024-12-21 10:02:00      │
└─────┴─────────┴────────────┴──────────┴──────────────────────────┘
```

**Constraints:**  
- Use the `mysql` Node.js module for all operations.
- Handle potential connection and query errors gracefully.

**Task:**  
Complete the Node.js script to achieve the desired operations and output.  

---

*/

// Solution
const mysql = require('mysql');
const tableName = 'employees';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
   //  ! Make sure to replace 'your_password' with your actual MySQL password
    database: 'your_database'
});
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');

    // Create table
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS ${tableName} (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            position VARCHAR(100) NOT NULL,
            salary FLOAT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    connection.query(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating table:', err);
            return;
        }
        console.log(`Table ${tableName} created or already exists.`);

        // Insert records
        const insertRecordsQuery = `
            INSERT INTO ${tableName} (name, position, salary) VALUES
            ('Alice', 'Manager', 75000),
            ('Bob', 'Engineer', 65000),
            ('Charlie', 'Technician', 45000)
        `;

        connection.query(insertRecordsQuery, (err) => {
            if (err) {
                console.error('Error inserting records:', err);
                return;
            }
            console.log('Records inserted successfully.');

            // Fetch all records
            const fetchRecordsQuery = `SELECT * FROM ${tableName}`;
            connection.query(fetchRecordsQuery, (err, results) => {
                if (err) {
                    console.error('Error fetching records:', err);
                    return;
                }

                // Display results in a formatted table
                console.table(results);

                // Close the connection
                connection.end((err) => {
                    if (err) {
                        console.error('Error closing the connection:', err);
                    } else {
                        console.log('Connection closed.');
                    }
                });
            });
        });
    });
});


