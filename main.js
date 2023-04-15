function project1Details(){
    if (document.getElementById("project1").style.display == "none"){
        document.getElementById("project1").style.display = "flex"
        document.getElementById("project1Button").innerHTML = "▲"

    } else {
        document.getElementById("project1").style.display = "none"
        document.getElementById("project1Button").innerHTML = "▼"
    }
    
}

function project2Details(){
    if (document.getElementById("project2").style.display == "none"){
        document.getElementById("project2").style.display = "flex"
        document.getElementById("project2Button").innerHTML = "▲"

    } else {
        document.getElementById("project2").style.display = "none"
        document.getElementById("project2Button").innerHTML = "▼"
    }
    
}

document.getElementById("project1Button").addEventListener("click" , project1Details) 
document.getElementById("project2Button").addEventListener("click" , project2Details) 