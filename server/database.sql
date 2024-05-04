

-- CREATE DATABASE perntodo;

-- CREATE TABLE todo(
--   todo_id SERIAL PRIMARY KEY,
--   description VARCHAR(255)
-- );

CREATE DATABASE attendancesystem;

CREATE TABLE University (
    University_ID SERIAL PRIMARY KEY,
    University_Name VARCHAR(255),
    University_Address VARCHAR(255),
    University_Contact_Info VARCHAR(255)
);

CREATE TABLE Department (
    Department_ID SERIAL PRIMARY KEY,
    University_ID INT REFERENCES University(University_ID),
    Department_Name VARCHAR(255),
    Department_Head VARCHAR(255),
    Department_Contact_Info VARCHAR(255)
);

CREATE TABLE Semester (
    Semester_ID SERIAL PRIMARY KEY,
    Department_ID INT REFERENCES Department(Department_ID),
    Semester_Number INT,
    Semester_Start_Date DATE,
    Semester_End_Date DATE
);

CREATE TABLE Course (
    Course_ID SERIAL PRIMARY KEY,
    Semester_ID INT REFERENCES Semester(Semester_ID),
    Course_Name VARCHAR(255),
    Course_Description TEXT,
    Course_Credits INT
);

CREATE TABLE Teacher (
    Teacher_ID SERIAL PRIMARY KEY,
    Teacher_Name VARCHAR(255),
    Department_ID INT REFERENCES Department(Department_ID),
    Teacher_Contact_Info VARCHAR(255),
    Teacher_Specialization VARCHAR(255),
    Teacher_Email VARCHAR(255) UNIQUE
);

CREATE TABLE Teacher_Course (
    Teacher_ID INT REFERENCES Teacher(Teacher_ID),
    Course_ID INT REFERENCES Course(Course_ID),
    PRIMARY KEY (Teacher_ID, Course_ID)
);

CREATE TABLE Student (
    Student_ID SERIAL PRIMARY KEY,
    Student_Name VARCHAR(255),
    Student_Contact_Info VARCHAR(255),
    Department_ID INT REFERENCES Department(Department_ID),
    -- Semester_ID INT REFERENCES Semester(Semester_ID),
    Student_Email VARCHAR(255) UNIQUE
    REQUIRED_IMAGE_NUMBER INT DEFAULT 5,  -- Add this line
    MAX_IMG_REACHED BOOLEAN DEFAULT FALSE  -- Add this line
    IMG_COUNT INT DEFAULT 0
);

CREATE TABLE Enrollment (
    Enrollment_ID SERIAL PRIMARY KEY,
    Student_ID INT REFERENCES Student(Student_ID),
    Course_ID INT REFERENCES Course(Course_ID),
    Enrollment_Date DATE
);



CREATE TABLE Attendance (
    Attendance_ID SERIAL PRIMARY KEY,
    Student_ID INT REFERENCES Student(Student_ID),
    Course_ID INT REFERENCES Course(Course_ID),
    Attendance_Date DATE,
    Attendance_Status BOOLEAN
);

CREATE TABLE Attendance3 (
    Attendance_ID SERIAL PRIMARY KEY,
    Student_ID INT REFERENCES Student(Student_ID),
    Attendance_Timestamp TIMESTAMP,
    Attendance_Status BOOLEAN
);



















