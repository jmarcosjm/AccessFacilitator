onload = () => {
    
    document.getElementById("go").onclick = () => {
        let database = document.getElementById("db").value
        let perms = document.getElementById("perm").value
        let schemas = document.getElementById("schema").value
        let user = document.getElementById("user").value
        inputHander(database, perms, schemas, user)
    }
}

function inputHander(database, perms, schemas, user){
    perms = perms.split(",")
    schemas = schemas.split(",")
    outputHandler(database, perms, schemas, user)
}

function outputHandler(database, perms, schemas, user){
    let screen = document.getElementById("screen")
    screen.innerHTML = ""
    let access = "GRANT"
    let i = 0;
    schemas.forEach(schema => {
        if(schema != "") schema = "_"+schema.toUpperCase();
        perms.forEach(perm => {
            access += (i == 0)? ` ${('"PG_'+perm.toUpperCase()+schema+"_"+database.toUpperCase()).replaceAll(" ","")+'"'}` : `, ${('"PG_'+perm.toUpperCase()+schema+"_"+database.toUpperCase()).replaceAll(" ","")+'"'}`
            i++
        })   
    })
    access += ` TO "${user}";`
    screen.innerHTML += 
    `
    <p>${access}</p>
    ` 
}