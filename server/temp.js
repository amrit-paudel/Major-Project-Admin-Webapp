


const { spawn } = require('child_process');

console.log("temp")

const python = spawn('C:\\Users\\HP\\.conda\\envs\\VisionAttendanceSystem\\python.exe', ['C:\\Users\\HP\\Desktop\\SCHOLARSHIPS\\tempp.py']);

python.stdout.on('data', function (data) {
  console.log("Inside");
  console.log('results:', data.toString());
});

python.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

python.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


