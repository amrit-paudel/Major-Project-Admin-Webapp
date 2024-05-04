
const express = require("express");
const app = express(); // app is going to run the express library

const cors = require("cors");
const pool = require("./db"); // With this, by using pool we can run postgress queries 


//middleware
app.use(cors());
app.use(express.json()); //we have to get data from client side via req.body object


// RESTFUL API Routes //

//***** TEACHER START *****/
// Add Teacher 
app.post("/teachers", async (req, res) => {
    try {
      const { Teacher_Name, Department_ID, Teacher_Contact_Info, Teacher_Specialization, Teacher_Email } = req.body;
      console.log( req.body ) // TESTING
      const newTeacher = await pool.query(
        "INSERT INTO Teacher (Teacher_Name, Department_ID, Teacher_Contact_Info, Teacher_Specialization, Teacher_Email) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [Teacher_Name, Department_ID, Teacher_Contact_Info, Teacher_Specialization, Teacher_Email]
      );
      res.json(newTeacher.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

// View Teachers
app.get("/teachers", async (req, res) => {
    try {
      const allTeachers = await pool.query("SELECT * FROM Teacher");
      res.json(allTeachers.rows);
      console.log( allTeachers ); // TESTING 
    } catch (err) {
      console.error(err.message);
    }
});

// View Teacher Details
app.get("/teachers/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const teacher = await pool.query("SELECT * FROM Teacher WHERE Teacher_ID = $1", [id]);
      res.json(teacher.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

// Edit Teacher
app.put("/teachers/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { Teacher_Name, Department_ID, Teacher_Contact_Info, Teacher_Specialization, Teacher_Email } = req.body;
      const updateTeacher = await pool.query(
        "UPDATE Teacher SET Teacher_Name = $1, Department_ID = $2, Teacher_Contact_Info = $3, Teacher_Specialization = $4, Teacher_Email = $5 WHERE Teacher_ID = $6",
        [Teacher_Name, Department_ID, Teacher_Contact_Info, Teacher_Specialization, Teacher_Email, id]
      );
      res.json("Teacher was updated!");
    } catch (err) {
      console.error(err.message);
    }
});

// Delete Teacher 
app.delete("/teachers/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTeacher = await pool.query("DELETE FROM Teacher WHERE Teacher_ID = $1", [id]);
      res.json("Teacher was deleted!");
    } catch (err) {
      console.error(err.message);
    }
});

//***** TEACHER END *****/



// API Routes

//***** STUDENT START*****//

// Add new student 
app.post("/students", async (req, res) => {
    try {
      const { Student_Name, Student_Contact_Info, Department_ID, Student_Email } = req.body;
      console.log( req.body ) // TESTING PURPOSE
      const newStudent = await pool.query(
        "INSERT INTO Student (Student_Name, Student_Contact_Info, Department_ID, Student_Email) VALUES($1, $2, $3, $4) RETURNING *",
        [Student_Name, Student_Contact_Info, Department_ID, Student_Email]
      );
      res.json(newStudent.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});


// View Student
app.get("/students", async (req, res) => {
    try {
      const allStudents = await pool.query("SELECT * FROM Student");
      res.json(allStudents.rows);
    } catch (err) {
      console.error(err.message);
    }
});

// Edit Student 
app.put("/students/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { Student_Name, Student_Contact_Info, Department_ID, Student_Email } = req.body;
      const updateStudent = await pool.query(
        "UPDATE Student SET Student_Name = $1, Student_Contact_Info = $2, Department_ID = $3, Student_Email = $4 WHERE Student_ID = $5",
        [Student_Name, Student_Contact_Info, Department_ID, Student_Email, id]
      );
      res.json("Student was updated!");
    } catch (err) {
      console.error(err.message);
    }
});

// Delete Student 
app.delete("/students/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteStudent = await pool.query("DELETE FROM Student WHERE Student_ID = $1", [id]);
      res.json("Student was deleted!");
    } catch (err) {
      console.error(err.message);
    }
});

// View Student Details 
app.get("/students/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const student = await pool.query("SELECT * FROM Student WHERE Student_ID = $1", [id]);
      res.json(student.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});


//***** STUDENT END*****//


// FURTHER FEW MORE STUDENTS API
app.put("/students/:id/max_img_reached", async (req, res) => {
  try {
    const { id } = req.params;
    const { MAX_IMG_REACHED } = req.body;
    const updateStudent = await pool.query(
      "UPDATE Student SET MAX_IMG_REACHED = $1 WHERE Student_ID = $2",
      [MAX_IMG_REACHED, id]
    );
    res.json("Student was updated!");
  } catch (err) {
    console.error(err.message);
  }
});




// API ROUTES
//***** DEPARTMENT START *****/

// Add new department 
app.post("/departments", async (req, res) => {
    try {
      const { University_ID, Department_Name, Department_Head, Department_Contact_Info } = req.body;
      console.log( req.body ) // TESTING PURPOSE
      const newDepartment = await pool.query(
        "INSERT INTO Department (University_ID, Department_Name, Department_Head, Department_Contact_Info) VALUES($1, $2, $3, $4) RETURNING *",
        [University_ID, Department_Name, Department_Head, Department_Contact_Info]
      );
      res.json(newDepartment.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

// View all departments
app.get("/departments", async (req, res) => {
    try {
      const allDepartments = await pool.query("SELECT * FROM Department");
      res.json(allDepartments.rows);
    } catch (err) {
      console.error(err.message);
    }
});


// Edit Department Details 
app.put("/departments/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { University_ID, Department_Name, Department_Head, Department_Contact_Info } = req.body;
      
      const updateDepartment = await pool.query(
        "UPDATE Department SET University_ID = $1, Department_Name = $2, Department_Head = $3, Department_Contact_Info = $4 WHERE Department_ID = $5",
        [University_ID, Department_Name, Department_Head, Department_Contact_Info, id]
      );
      res.json("Department was updated!");
    } catch (err) {
      console.error(err.message);
    }
});

// Delete a Department 
app.delete("/departments/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteDepartment = await pool.query("DELETE FROM Department WHERE Department_ID = $1", [id]);
      res.json("Department was deleted!");
    } catch (err) {
      console.error(err.message);
    }
});

//***** DEPARTMENT END *****/




// API Routes
//***** University START *****/

// Create the University
app.post("/universities", async (req, res) => {
    try {
      const { University_Name, University_Address, University_Contact_Info } = req.body;
      console.log( req.body ) // TESTING PURPOSE
      const newUniversity = await pool.query(
        "INSERT INTO University (University_Name, University_Address, University_Contact_Info) VALUES($1, $2, $3) RETURNING *",
        [University_Name, University_Address, University_Contact_Info]
      );
      res.json(newUniversity.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

// Edit the university 
app.put("/universities/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { University_Name, University_Address, University_Contact_Info } = req.body;
      const updateUniversity = await pool.query(
        "UPDATE University SET University_Name = $1, University_Address = $2, University_Contact_Info = $3 WHERE University_ID = $4",
        [University_Name, University_Address, University_Contact_Info, id]
      );
      res.json("University was updated!");
    } catch (err) {
      console.error(err.message);
    }
});

// View all universities
app.get("/universities", async (req, res) => {
  try {
    const allUniversities = await pool.query("SELECT * FROM University");
    res.json(allUniversities.rows);
  } catch (err) {
    console.error(err.message);
  }
});


// View a University Details 
app.get("/universities/:id", async (req, res) => {
    try {
      const { id } = req.params;
      // const university = await pool.query("SELECT * FROM University WHERE University_ID = $1", [id]);
      const university = await pool.query("SELECT * FROM University ");
      res.json(university.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});




// Delete a University 
app.delete("/universities/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUniversity = await pool.query("DELETE FROM University WHERE University_ID = $1", [id]);
    res.json("University was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

  

//***** University END *****/





app.post("/teachers/login", async (req, res) => {
  try {
    const { email } = req.body;
    const teacher = await pool.query("SELECT * FROM Teacher WHERE Teacher_Email = $1", [email]);
    if (teacher.rows.length > 0) {
      // The email exists in the database
      // Generate and send OTP here
      res.json({ message: "Email found, OTP sent." });
    } else {
      // The email does not exist in the database
      res.status(400).json({ error: "Email not found." });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error." });
  }
});

// View Attendance Records
app.get("/attendanceRecords", async (req, res) => {
  try {
    const allAttendanceRecords = await pool.query("SELECT * FROM Attendance3");
    res.json(allAttendanceRecords.rows);
  } catch (err) {
    console.error(err.message);
  }
});








// app.listen(8000, () => {
//     console.log("server has started on port 8000");
//   });





// REACT NATIVE
// Mobile App

// End points for the mobile user to log in in to the app










// END POINTS TO RUN PYTHON SCRIPTS





//  SETTING UP WEB SOCKETS TO COMMUNICATE WITH PYTHON
const WebSocket = require('ws');

// Set up a WebSocket server
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', message => {
    console.log(`Received message => ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

const server = app.listen(8000, () => {
  console.log("server has started on port 8000");
});

// Integrate WebSocket server with HTTP server
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, ws => {
    wss.emit('connection', ws, request);
  });
});




// app.post('/takeImages', (req, res) => {
//   // Broadcast the 'takeImages' event to all connected WebSocket clients
//   wss.clients.forEach(client => {
//     if (client.readyState === WebSocket.OPEN) {
//       client.send('takeImages');
//     }
//   });

//   res.send('Event sent to Python script');
// });



