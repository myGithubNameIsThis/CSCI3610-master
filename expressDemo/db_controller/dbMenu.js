var server=require("../server.js")

function updateMenu(res, query, update)
{
	var db=server.getDb()
	db.collection("menu").update(query,update,function(err, results){
		if(err) throw err
			else
			{
				console.log("updated  " + results.result.n)
				res.send("item has been updated!")
			}
	})
	//res.writeHead(200);
	//res.end(JSON.stringify("Update is done!"))
}
module.exports.updateMenu=updateMenu