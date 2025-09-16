import express from "express";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

const students = [];
const subjects = [];

// ===== SIGNUP =====
app.post("/signup", async (req, res) => {
    const { fname, lname, age, username, password } = req.body;

    if (students.find((u) => u.username === username)) {
        return res.status(400).json({ error: "Username already taken!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = {
        id: students.length + 1,
        fname,
        lname,
        age,
        username,
        password: hashedPassword
    };

    students.push(newStudent);
    res.status(201).json({ message: "Student successfully created!", id: newStudent.id });
});

// ===== LOGIN =====
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const student = students.find((u) => u.username === username);
    if (!student) return res.status(401).json({ error: "User not found" });

    const valid = await bcrypt.compare(password, student.password);
    if (!valid) return res.status(401).json({ error: "Wrong password" });

    res.json({ 
        message: "Login successful", 
        id: student.id, 
        lname: student.lname, 
        fname: student.fname 
    });
});

// ===== ADD SUBJECT =====
app.post("/addSubject", (req, res) => {
    const { studentId, subject1, subject2, subject3 } = req.body;
    const studentIdNum = Number(studentId);
    const targetStudent = students.find((u) => u.id === studentIdNum);

    if (!targetStudent) {
        return res.status(404).json({ error: "Student not found" });
    }

    const newStudentSubjects = {
        studentId: studentIdNum,   // ✅ fixed property name
        subject1,
        subject2,
        subject3
    };

    subjects.push(newStudentSubjects);
    res.status(201).json({ 
        message: `Subjects successfully added for student ${studentIdNum}!` 
    });
});

// ===== DISPLAY SUBJECT =====
app.post("/displaySubject", (req, res) => {
    const { studentId } = req.body;
    const studentIdNum = Number(studentId); 

    const studentSubjects = subjects.find((s) => s.studentId === studentIdNum);
    if (!studentSubjects) {
        return res.status(404).json({ error: "Subjects not found for this student" });
    }

    res.json({
        message: "Subjects on this student:",
        id: studentSubjects.studentId,
        subject1: studentSubjects.subject1,
        subject2: studentSubjects.subject2,
        subject3: studentSubjects.subject3
    });
});


app.listen(3000, () => {
    console.log("server running at localhost:3000");
});
