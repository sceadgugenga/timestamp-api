var express = require('express')
var app = express();
const url = require('url');
var pn;
//var md = Date.parse(1450137600)
app.use(function (req, res) {
  pn = url.parse(req.url).pathname
  ur = decodeURIComponent(pn).replace('/','')
 // console.log(parseDate(ur))
  res.send(parseDate(ur))
  
  
  })

app.listen(8080, function () {
  console.log('  Example app listening on port 3000!')
})

function parseDate(mydate) {
	var dateNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  
	
	
	var date = new Date(mydate)
	if (date != 'Invalid Date') {
		return {'unix': date.getTime()/1000, 'natural': mydate }
		//console.log(date)
	} else {
	// set date using milliseconds
	date.setTime(mydate*1000)
		if (date != 'Invalid Date') {
			var myYear = date.getFullYear()
	var myMonth = date.getMonth()
	var myDay = date.getDate()
	var myNewDate = dateNames[myMonth]+" "+myDay+", "+myYear
			
			
		return {'unix': parseInt(mydate), 'natural': myNewDate }
			
		} else {
			return {'unix': null, 'natural': null }
			
		}
	}
	
	
	
	
	
}