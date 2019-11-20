//Import sqlite to read database
const sqlite3 = require('sqlite3').verbose();
//Connect to database
let db = new sqlite3.Database('./history/poloniex_0.1.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});


// get columns start and label it as startval, open-> openval, etc from the appropriate table
// when the id = what we define it as below
let sql = `SELECT start startval,
                  open openval,
                  high highval
           FROM candles_USDT_ETH
           WHERE id = ?`;

let id = 2;
 
// Get only [id] row (in this case 2nd row)
db.get(sql, [id], (err, row) => {
  if (err) {
    return console.error(err.message);
  }
  return row
    ? console.log(row.startval, row.openval, row.highval)
    : console.log(`No values found with the id ${id}`);
 
});


// Close the database
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});


Converting the Table to CSV
Another useful thing I stumbled upon was how to convert a database from SQL to CSV in order to import it into some other program (in my case MATLAB). For my MATLAB example, I did not have the database toolbox, so this allowed me to play with this data without it. I copied THIS tutorial. It is more thorough, but here is the highlight. To save the start, open, and high columns from the candles_USDT_ETH table, use the following code.


sqlite3 ./history/poloniex_0.1.db
.headers on
.mode csv
.output data.csv
SELECT start,
       open, 
       high
FROM candles_USDT_ETH;
.quit


//function for connecting with SQLite
function fetchDataFromSQLiteDB() {
    //used http://sqlitebrowser.org/ for creating database
    var conn = SQL.connect( { Driver: "SQLite",
    Database: "C:\\Users\\franke\\Desktop\\squish.db"} );
    var result = conn.query("SELECT id, forename, surname, email, phone FROM addressbook;");
    if(result.isValid == false) {
        test.log("Result is not valid, maybe no entries in database?")
    } else {
        while (result.isValid) {
            // do something with the result
            var id = result.value(0)
            var forename = result.value(1)
            var surname = result.value(2)
            var email = result.value(3)
            var phone = result.value(4)
            //test.log(id + forename + surname + email + phone)
            addEntry(forename, surname, email, phone)
            result.toNext();
        }
    test.log("added " + id + " entries in the addressbook application")
 }

