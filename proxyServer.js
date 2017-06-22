http.createServer(function(req, res){
  var request = url.parse(req.url, true);
  var action = request.pathname;

  if (action == '/alhandra.jpg') {
     var img = fs.readFileSync('./alhandra.jpg');
     res.writeHead(200, {'Content-Type': 'image/jpg' });
     res.end(img, 'binary');
  } else {
     res.writeHead(200, {'Content-Type': 'text/plain' });
     res.end('Alhandra not found! \n');
  }
}).listen(8083, '95.85.48.230');
