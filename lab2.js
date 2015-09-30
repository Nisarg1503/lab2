// http require
var http = require('http');
//url require
var url = require('url');

//Creating server to pass function request and response
http.createServer(function (req, res) {

    // get variables from url querystring
    var qs = url.parse(req.url, true).query;

    var method = (qs.method);
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);
    
    //check method and calculate that methods
    if (method == "add")
    {
        var total = x + y;
        res.write('<h1>Addition</h1>Output : ' + x + ' + ' + y + ' = ' + total);
    
    }

     else if (method == "subtract")
    {
        var total = x - y;
        res.write('<h1>Subtraction</h1>Output : ' + x + ' - ' + y + ' = ' + total);
    
    }
    
     else if (method == "multiply")
    {
        var total = x * y;
        res.write('<h1>Multiplication</h1>Output : ' + x + ' * ' + y + ' = ' + total);
    
    }
    
     else if (method == "divide")
    {
        var total = x / y;
        res.write('<h1>Division</h1>Output : ' + x + ' / ' + y + ' = ' + total);
   
    }
    // invalid method call error message
    else
    {
		res.write('Invalid Method');
    }
    res.end();
}).listen(3000);

// page run at http://localhost:3000/lab2.js?method=?&x=?&y=?