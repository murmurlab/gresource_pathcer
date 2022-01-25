const fs = require("fs")

const dir = process.argv[2]
let arr = []

const getFiles = p=>{
	let res = ""
	fs.readdirSync( p, { withFileTypes:true } ).filter(e=>e.isFile())
	.forEach(e=>{
		res+=`<file>${e.name}</file>
`
	})
	if (res!=undefined) {
		return res
	}else{
		return "\n\n"
	}
}

const a = ldir=>{
	let d = fs.readdirSync(ldir,{ withFileTypes: true })

	d.forEach(element => {
		if(element.isDirectory()){
			arr.push(`
				<gresource prefix="${"/"+ldir+"/"+element.name}">
					${getFiles(ldir+"/"+element.name)}
				</gresource>
				`)
			a(ldir+"/"+element.name)
		}
	})
	
}

a(dir)
console.log(`
<?xml version="1.0" encoding="UTF-8"?>
<gresources>
	${arr.join("")}
</gresources>
`);
/* a(dir).then(d=>{
	console.log(arr);
	console.log(`
	<?xml version="1.0" encoding="UTF-8"?>
	<gresources>
		${arr}
	</gresources>
	`)
}) */
