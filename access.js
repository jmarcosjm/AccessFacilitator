onload = () => {
    
    document.getElementById("go").onclick = () => {
        let database = document.getElementById("db").value
        let perms = document.getElementById("perm").value
        let schemas = document.getElementById("schema").value
        inputHander(database,perms,schemas)
    }
}

function inputHander(database, perms, schemas){
    perms = perms.split(",")
    schemas = schemas.split(",")
    outputHandler(database,perms,schemas)
}

function outputHandler(database, perms, schemas){
    let screen = document.getElementById("screen")
    screen.innerHTML = ""
    schemas.forEach(schema => {
        if(schema != "") schema = "_"+schema.toUpperCase();
        perms.forEach(perm => {
            screen.innerHTML += 
                `
                <p>${("PG_"+perm.toUpperCase()+schema+"_"+database.toUpperCase()).replaceAll(" ","")}</p>
                `
        })    
    })
}