// // const submitButton = document.getElementById("submit-button");
// // submitButton.addEventListener("click", (event) => {
// //   event.preventDefault();
 
// //   const designerNote2 = document.getElementById("designer-note2").value;
// //   const emailBody = `Нотатка до дизайнера: ${designerNote2}`;
// //   const emailSubject = "Нова нотатка до дизайнера";
// //   const emailRecipient = "baryliaknastja@gmail.com";
// //   const emailLink = `mailto:${emailRecipient}?subject=${emailSubject}&body=${emailBody}`;
// //   window.open(emailLink);
// // });

// //current date
// // function getCurrentDate() {
//   // Отримати поточну дату
//   var currentDate = new Date();

//   // Отримати рік, місяць та день з дати
//   var year = currentDate.getFullYear();
//   var month = currentDate.getMonth() + 1; // Місяці починаються з 0
//   var day = currentDate.getDate();

//   // Створити рядок у форматі 'рік-місяць-день'
//   var dateString = year + '-' + month + '-' + day;

//   // Вивести рядок у текстове поле
//   document.getElementById("outputField").value = dateString;
// // }

// // const Pool = require('pg').Pool
// // const pool = new Pool({
// //   user: 'postgres',
// //   host: 'localhost',
// //   database: 'nastyabaryliak',
// //   password: '123321',
// //   port: 5432
 
// // });



// // pool.query('SELECT designer FROM customers', (err, result) => {
// //   if (err) {
// //     return console.error('Error executing query', err.stack);
// //   }
// //   result.rows.forEach(row => {
// //     const designer = row.designer;
// //     const paragraph = document.createElement('p');
// //     paragraph.innerText = designer;
// //     document.body.appendChild(paragraph);
// //   });
// // });
// // Виконання запиту до бази даних
// // pool.query('SELECT designer FROM customers WHERE id = 1', (err, res) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }

//   // Отримання даних та їх виведення на сторінці
// //   const designer = res.rows[0].designer;
// //   const paragraph = document.getElementById("designer");
// //   paragraph.innerText = `Designer with id 1: ${designer}`;
// //   document.body.appendChild(paragraph);
// // });

// // const express = require('express')
// // const PORT = process.env.PORT || 8080
// // const app = express()
// // app.listen(PORT, ()=> console.log('server started on port ${PORT}'))

// // const { Client } = require('pg');

// // const client = new Client({
// //   user: 'postgres',
// //   host: 'localhost',
// //   database: 'nastyabaryliak',
// //   password: '123321',
// //   port: 5432 ,
// // });

// // client.connect();

// // const query = 'SELECT designer FROM customers WHERE id = $1';
// // const values = [1];

// // client.query('SELECT * FROM customers ', (err, res) => {
// //   if (!err) {
// //     console.log(res.rows);
// //   } else {
// //     console.log(err.message);
// //   }

// //   client.end();
// // });


// // Get the canvas element and context
// const canvas = document.getElementById('hot-ball');
// const context = canvas.getContext('2d');

// // Set the fill style to a gradient
// const gradient = context.createRadialGradient(100, 100, 0, 100, 100, 100);
// gradient.addColorStop(0, '#a29399');
// gradient.addColorStop(1, '#b3cbd4');
// context.fillStyle = gradient;

// // Define the circle properties
// let x = 100;
// let y = 100;
// let radius = 80;
// let speed = 2;

// // Define the animation loop
// function animate() {
//   // Clear the canvas
//   context.clearRect(0, 0, canvas.width, canvas.height);

//   // Draw the circle
//   context.beginPath();
//   context.arc(x, y, radius, 0, 2 * Math.PI);
//   context.fill();

//   // Update the circle properties
//   x += speed;
//   if (x + radius > canvas.width || x - radius < 0) {
//     speed = -speed;
//   }

//   // Request the next animation frame
//   requestAnimationFrame(animate);
// }

// // Start the animation loop
// animate();

// function goToDesign() {
//   window.location.href = 'index.html';
// }

