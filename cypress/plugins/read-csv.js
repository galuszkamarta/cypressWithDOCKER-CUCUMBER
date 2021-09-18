const parse = require('csv-parse')
const fs = require('fs')
 
function read(file){
 const data = fs.readFileSync(file,
 {encoding:'utf8', flag:'r'});
 parse(data, {columns: true, trim: true}, function(err, rows) {
 })
 return data.split(",")
}
 
module.exports = {
  read,
}