/**
 * Hello Node
 * @author Fernando
 */

const http = require('http')
http.createServer((req,res)=>{
    res.write("Bem vindo ao Node")
    res.end()
}).listen(4040)