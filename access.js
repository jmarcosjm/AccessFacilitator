onload = () => {
    
    document.getElementById("go").onclick = () => {
        let database = document.getElementById("db").value
        let perms = document.getElementById("perm").value
        let schemas = document.getElementById("schema").value
        inputHander(database,perms,schemas)
    }
}

function inputHander(database, perms, schemas){
    database = database.replaceAll(" ", "")
    perms = perms.replaceAll(" ", "").split(",")
    schemas = schemas.replaceAll(" ", "").split(",")
    outputHandler(database,perms,schemas)
}

function outputHandler(database, perms, schemas){
    let screen = document.getElementById("screen")
    screen.innerHTML = ""
    schemas.forEach(schema => {
        perms.forEach(perm => {
            screen.innerHTML += 
                `
                <p>PG_${perm.toUpperCase()}_${schema.toUpperCase()}_${database.toUpperCase()}</p>
                `
        })    
    })
}