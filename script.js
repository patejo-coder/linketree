const btnGit = document.getElementById("github");
btnGit.addEventListener("mouseover", overMouse0);
btnGit.addEventListener("mouseout", resetOver0);

function overMouse0() {
    document.getElementsByClassName("btn")[0].style.scale = "1.1";
    document.getElementsByClassName("btn")[0].style.border = "1px solid white";
    document.getElementsByClassName("btn")[0].style.backgroundColor = "rgba(255, 255, 255, .3)";
    document.getElementsByClassName("btn")[0].style.boxShadow = "0px 0px 10px black";
    document.getElementsByClassName("icon")[0].style.opacity = "100%";
    document.getElementsByClassName("text")[0].style.opacity = "100%";
}

function resetOver0() {
    document.getElementsByClassName("btn")[0].style.scale = "1";
    document.getElementsByClassName("btn")[0].style.border = "1px solid rgba(0, 0, 0, .8)";
    document.getElementsByClassName("btn")[0].style.backgroundColor = "transparent";
    document.getElementsByClassName("btn")[0].style.boxShadow = "none";
    document.getElementsByClassName("icon")[0].style.opacity = "0%";
    document.getElementsByClassName("text")[0].style.opacity = "50%";
}

const meuSite = document.getElementById("meu-site");
meuSite.addEventListener("mouseover", overMouse1);
meuSite.addEventListener("mouseout", resetOver1);

function overMouse1() {
    document.getElementsByClassName("btn")[1].style.scale = "1.1";
    document.getElementsByClassName("btn")[1].style.border = "1px solid white";
    document.getElementsByClassName("btn")[1].style.backgroundColor = "rgba(255, 255, 255, .3)";
    document.getElementsByClassName("btn")[1].style.boxShadow = "0px 0px 10px black";
    document.getElementsByClassName("icon")[1].style.opacity = "100%";
    document.getElementsByClassName("text")[1].style.opacity = "100%";
}

function resetOver1() {
    document.getElementsByClassName("btn")[1].style.scale = "1";
    document.getElementsByClassName("btn")[1].style.border = "1px solid rgba(0, 0, 0, .8)";
    document.getElementsByClassName("btn")[1].style.backgroundColor = "transparent";
    document.getElementsByClassName("btn")[1].style.boxShadow = "none";
    document.getElementsByClassName("icon")[1].style.opacity = "0%";
    document.getElementsByClassName("text")[1].style.opacity = "50%";
}

const linkd = document.getElementById("linkedin");
linkd.addEventListener("mouseover", overMouse2);
linkd.addEventListener("mouseout", resetOver2); 

function overMouse2() {
    document.getElementsByClassName("btn")[2].style.scale = "1.1";
    document.getElementsByClassName("btn")[2].style.border = "1px solid white";
    document.getElementsByClassName("btn")[2].style.backgroundColor = "rgba(255, 255, 255, .3)";
    document.getElementsByClassName("btn")[2].style.boxShadow = "0px 0px 10px black";
    document.getElementsByClassName("icon")[2].style.opacity = "100%";
    document.getElementsByClassName("text")[2].style.opacity = "100%";
}

function resetOver2() {
    document.getElementsByClassName("btn")[2].style.scale = "1";
    document.getElementsByClassName("btn")[2].style.border = "1px solid rgba(0, 0, 0, .8)";
    document.getElementsByClassName("btn")[2].style.backgroundColor = "transparent";
    document.getElementsByClassName("btn")[2].style.boxShadow = "none";
    document.getElementsByClassName("icon")[2].style.opacity = "0%";
    document.getElementsByClassName("text")[2].style.opacity = "50%";
}