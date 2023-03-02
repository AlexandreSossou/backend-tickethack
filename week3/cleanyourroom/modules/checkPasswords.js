function checkModeratorPassword(mdp){
    if(mdp==="modpwd123"){
        return true 
    }
    else{
        return false
    }
}

function checkAdminPassword(mdp){
    if(mdp==="adminazerty123"){
        return true 
    }
    else{
        return false
    }
}


module.exports = { checkAdminPassword,checkModeratorPassword };