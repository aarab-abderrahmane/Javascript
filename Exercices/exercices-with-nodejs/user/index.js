const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // استبدال body-parser بـ express.json()

let users = []; // Temporary in-memory storage
let id = 1; // Auto-increment ID

// Create (Add User)
app.post("/users", (req, res) => {
    const { firstName, lastName, age } = req.body;
    if (!firstName || !lastName || !age) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const newUser = { id: id++, firstName, lastName, age };
    users.push(newUser);
    res.status(201).json(newUser);
    res.json("user add successfully!")
});

// Read (Get All Users)
app.get("/users", (req, res) => {
    res.json(users);
});

// Update (Edit User)
app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const { firstName, lastName, age } = req.body;
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.age = age || user.age;

    res.json(user);
});

// Delete (Remove User)
app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);
    res.json({ message: "User deleted successfully" });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
