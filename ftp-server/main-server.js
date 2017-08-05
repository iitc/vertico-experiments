var http = require("http");
var request = require('request');
var progress = require('request-progress');
var pre = '.';
const fs = require('fs-extra');
const debug = require('debug')('ftp-server')
const PATH = '/Users/air/Projects/iitc/har-file.zip';
//const PATH = '/Volumes/Capsule/vertico-images/windows/Windows10.zip'
var PORT = 9000;


exports.download = function (URL,filename) {
    debug('Downloading started %s, file = %s',URL, filename)  
    downloadManager(URL, filename);
}


exports.fileServer = function () {
    fileServerInit(PATH, PORT);
}



var fileServerInit = function (loc, port) {
    debug('Loc %s:%s',loc, port)  
    var serv = http.createServer(function (req, res) {
        var stat = fs.statSync(loc);
        res.writeHeader(200, {
            "Content-Length": stat.size
        });
        var fReadStream = fs.createReadStream(loc);
        fReadStream.on('data', function (chunk) {
            if (!res.write(chunk)) {
                fReadStream.pause();
            }
        });
        fReadStream.on('end', function () {
            console.log("File is uploaded")
            serv.close();
        });
        res.on("drain", function () {
            fReadStream.resume();
        });
    });
    console.log("File is ready " + loc + "\nListening for incoming connection....");
    serv.listen(port);
}




var downloadManager = function (url, filename) {
    progress(request(url), {
        throttle: 3000
    }).on('progress', function (state) {
         debug('Progress',pre + '' + (Math.round(state.percent * 100)) + "%")  
    })
        .on('error', function (err) {
            debug('error :( ' + err)  
        })
        .on('end', function () {
            console.log(pre + '100% \n Download Completed');
        })
        .pipe(fs.createWriteStream(filename));
};


