var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'https://scarvite.6te.net/pma',
  user     : 'mypersonaldbuser',
  password : 'mypersonaldbpassword',
  database : '1351064'
});
 
connection.connect();

module.exports = {
    insert: function(users, cord){
        //if atendee then cord = false, if cordinator cord = true, so we can make injesting by ids easier
        
    },
    getdb : function(){

    }
}