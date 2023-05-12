const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

const bodyParser = require('body-parser');


// додавання middleware body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/offers', (req, res) => {
  res.sendFile(__dirname + '/offers.html');
});
app.get('/IMG_6330.png', (req, res) => {
  res.sendFile(__dirname + '/IMG_6330.png');
});
app.get('/IMG_6331.png', (req, res) => {
  res.sendFile(__dirname + '/IMG_6331.png');
});
app.get('/IMG_6332.png', (req, res) => {
  res.sendFile(__dirname + '/IMG_6332.png');
});
app.get('/IMG_6334.png', (req, res) => {
  res.sendFile(__dirname + '/IMG_6334.png');
});
app.get('/IMG_6335.png', (req, res) => {
  res.sendFile(__dirname + '/IMG_6335.png');
});
app.get('/IMG_6336.png', (req, res) => {
  res.sendFile(__dirname + '/IMG_6336.png');
});
app.get('/IMG_6329.png', (req, res) => {
  res.sendFile(__dirname + '/IMG_6329.png');
});
app.get('/logo.svg', (req, res) => {
  res.sendFile(__dirname + '/logo.svg');
});
app.get('/hall.png', (req, res) => {
  res.sendFile(__dirname + '/hall.png');
});
app.get('/page.JPG', (req, res) => {
  res.sendFile(__dirname + '/page.JPG');
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/authorization.html');
    });
    const pool = require('./db');

    app.post('/authorization', (req, res) => {
    
      const password = req.body.password;
      
      const passwordAdmin = 'admin';
      console.log(password);
      if(password===passwordAdmin){
        console.log(`Admin here`);
        res.sendFile(__dirname + '/admin.html');
        app.post('/admin', (req, res) => {
          const cusId = req.body.cusId;
         
      const cusTable = req.body.cusTable;
      const cusCol = req.body.cusCol;
      const cusVal = req.body.cusVal;
        // const query = {
        //   text: 'UPDATE $1 SET $2 = $3 WHERE id = $4',
        //   values: [cusTable, cusCol, cusVal, cusId]
        // }
        const query = {
          text: 'UPDATE ' + cusTable + ' SET ' + cusCol + ' = $1 WHERE id = $2',
          values: [cusVal, cusId]
        }
        console.log(cusTable + cusCol + cusVal + cusId);
        // const query = {
        //   text: 'UPDATE customer_levels SET first_level = true WHERE id = 5'
          
        // }
        // let myVariable = ' ';
        pool.query(query)
          .then(res => console.log('Дані оновлені успішно'))
          .catch(err => console.error('Помилка при оновленні даних:', err.stack))
        });
        
          //full table
          
app.get('/customer-levels', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM customer_levels');
    const table = generateTable(rows);
    res.send(table);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

function generateTable(rows) {
  let table = '<table><thead><tr><th>id</th><th>First Level</th><th>Second Level</th><th>Third Level</th><th>Fourth Level</th><th>Fifth Level</th><th>Sixth Level</th></tr></thead><tbody>';
  for (const row of rows) {
    table += `<tr><td>${row.customer_id}</td><td>${row.first_level}</td><td>${row.second_level}</td><td>${row.third_level}</td><td>${row.fourth_level}</td><td>${row.fifth_level}</td><td>${row.sixth_level}</td></tr>`;
  }
  table += '</tbody></table>';
  return table;
}
app.get('/customer', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM customers');
    const table1 = generateTableCustomer(rows);
    res.send(table1);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

function generateTableCustomer(rows) {
  let table1 = '<table><thead><tr><th>id</th><th>name</th><th>password</th><th>designer</th><th>start_date</th><th>finish_date</th></tr></thead><tbody>';
  for (const row of rows) {
    table1 += `<tr><td>${row.id}</td><td>${row.name}</td><td>${row.password}</td><td>${row.designer}</td><td>${new Date(row.start_date).toLocaleDateString()}</td><td>${new Date(row.finish_date).toLocaleDateString()}</td></tr>`;
  }
  table1 += '</tbody></table>';
  return table1;
}
app.get('/customer-areas', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM customer_areas');
    const table2 = generateTableCustomerAreas(rows);
    res.send(table2);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

function generateTableCustomerAreas(rows) {
  let table2 = '<table><thead><tr><th>id</th><th>bathroom</th><th>hall</th><th>rooms</th><th>kitchen</th><th>others</th></tr></thead><tbody>';
  for (const row of rows) {
    table2 += `<tr><td>${row.customer_id}</td><td>${row.bathroom}</td><td>${row.hall}</td><td>${row.rooms}</td><td>${row.kitchen}</td><td>${row.others}</td></tr>`;
  }
  table2 += '</tbody></table>';
  return table2;
}
          //---
      }else{
      
      // Виконати запит до бази даних
       pool.query('SELECT id  FROM customers WHERE password = $1', [password], (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
          return;
        }
    
        if (result.rows.length === 0) {
                console.log("Incorrect password. Please try again.");
                
              } else {
                const customerId = result.rows[0].id;
                console.log(`Correct password for customer with id ${customerId}.`);
                
                res.sendFile(__dirname + '/index.html');
                // res.sendFile(__dirname +  '/index.html');
                console.log(customerId);
                // module.exports = customerId;
                
                pool.query('SELECT * FROM customer_levels WHERE customer_id = $1', [customerId], (err, result) => {
                  if (err) {
                    console.error(err);
                    return;
                  }


                  const customerLevels = result.rows[0];
                  if (customerLevels.first_level) {
                    const first = 1;
                    // module.exports = first;
                    console.log('Виконано');
                      } else {
                        console.log('Не виконано');
                      }
                  if (customerLevels.second_level) {
                    const second = 1;
                    console.log('Виконано');
                      } else {
                        console.log('Не виконано');
                      }
                  if (customerLevels.third_level) {
                    const third = 1;
                    console.log('Виконано');
                      } else {
                     
                        console.log('Не виконано');
                      }
                      
                      if (customerLevels.fourth_level) {
                        const fourth = 1;
                        console.log('Виконано');
                          } else {
                            console.log('Не виконано');
                          }
                      if (customerLevels.fifth_level) {
                        const fifth = 1;
                        console.log('Виконано');
                          } else {
                            console.log('Не виконано');
                          }
                      if (customerLevels.sixth_level) {
                        const sixth = 1;
                        console.log('Виконано');
                          } else {
                            console.log('Не виконано');
                          }
                          
                    
                  console.log(customerLevels);
                });
                
                // замовник-дизайнер-start
                app.get('/who', (req, res) => {
                  pool.query('SELECT * FROM customers WHERE id = $1', [customerId], (err, result) => {
                    if (err) {
                      console.error(err);
                      res.send({ error: 'Помилка запиту до бази даних' });
                      return;
                    }
                
                    const customer_designer = result.rows[0];
                    const who = {
                      name: customer_designer.name,
                      designer: customer_designer.designer ,
                      start_date: new Date(customer_designer.start_date).toLocaleDateString(), 
                      finish_date: new Date(customer_designer.finish_date).toLocaleDateString()
                    };
                    res.send(who);
                  });
                });
                // замовник-дизайнер-end

                // епати-start
                app.get('/levels', (req, res) => {
                  pool.query('SELECT * FROM customer_levels WHERE customer_id = $1', [customerId], (err, result) => {
                    if (err) {
                      console.error(err);
                      res.send({ error: 'Помилка запиту до бази даних' });
                      return;
                    }
                
                    const customerLevels = result.rows[0];
                    const levels = {
                      first: customerLevels.first_level ? 'Виконано!' : 'У процесі',
                      second: customerLevels.second_level ? 'Виконано!' : 'У процесі',
                      third: customerLevels.third_level ? 'Виконано!' : 'У процесі',
                      fourth: customerLevels.fourth_level ? 'Виконано!' : 'У процесі',
                      fifth: customerLevels.fifth_level ? 'Виконано!' : 'У процесі',
                      sixth: customerLevels.sixth_level ? 'Виконано!' : 'У процесі'
                    };
                    res.send(levels);
                  });
                });
                 // епати-end

                 //цін-start
                 app.get('/prices', (req, res) => {
                  pool.query('SELECT * FROM customer_areas WHERE customer_id = $1', [customerId], (err, result) => {
                    if (err) {
                      console.error(err);
                      res.send({ error: 'Помилка запиту до бази даних' });
                      return;
                    }
                
                    const customer_prices = result.rows[0];
                    const prices = {
                      bathroom: customer_prices.bathroom ,
                      hall: customer_prices.hall ,
                      rooms: customer_prices.rooms,
                      kitchen: customer_prices.kitchen,
                      others: customer_prices.others
                      
                    };
                    res.send(prices);
                  });
                });
                //цін-end
                }
              });
     }
          }); 
        
    app.get('/customer_id', (req, res) => {
      // get the customerId from the database or wherever it's stored
      const customerId = 1; // for example
      
      res.json({ customerId });
    });
    
app.get('/koshtoris', (req, res) => {
  res.sendFile(__dirname + '/koshtoris.html');
});


 //-----
app.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:8080`)
});



