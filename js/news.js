function display_news(newid, btnid) {
    // Pourquoi le site ne se mets plus à jour ?
    let actu = document.getElementById(newid);
    let btn = document.getElementById(btnid);
    if(actu.style.display === "none") {
        actu.style.display = "block";
        btn.innerHTML = "<<<";
    } else {
        actu.style.display = "none";
        btn.innerHTML = ">>>";
    }
}