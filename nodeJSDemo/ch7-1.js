var url=require('url')
var urlStr="https://invest.ameritrade.com/grid/p/login?dboxId=grdLogout&logout=L"
var urlObj=url.parse(urlStr,true, false)
console.log(urlObj.path)
console.log(urlObj.pathname)
console.log(urlObj.query)
console.log(urlObj.parse)
console.log(urlObj.format)
console.log(urlObj.resolve)
for(var p in urlObj)
 	console.log(p+urlObj[p])