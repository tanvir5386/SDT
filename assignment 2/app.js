const SearchByName = () => {
    const input = document.getElementById("input-container").value;
    console.log(input);
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${input}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.player);
            displayPlayer(data.player);
        })


}

const displayPlayer = (players) => {
    // console.log(players);

    const mainContainer = document.getElementById("main-container");

    mainContainer.innerHTML="";

    players.forEach(player => {

        const div = document.createElement("div");

        div.classList.add("card");


        div.innerHTML = `
        <img class="card-img-top w-50 m-auto card-img" onclick="Details(${player.idPlayer})" src="${player.strCutout}" alt="img..." >
        <div class="card-body p-3">
            <h5 class="card-title">Name:- <span class="fw-normal">${player.strPlayer}</span></h5>
            <h5 class="mt-2">Nationality:- <span class="fw-normal">${player.strNationality}</span></h5>
            <h5 class="mt-2">Sports:- <span class="fw-normal">${player.strSport}</span></h5>
            <h5 class="mt-2">Team:- <span class="fw-normal">${player.strTeam}</span></h5>
            <h5 class="mt-2">Player Description:- <span class="fw-normal"> ${player.strDescriptionEN.slice(1, 40)}..</span></h5>

            <div class="d-flex align-items-center justify-content-center mb-3">
            <a href="${player.strInstagram}" target="_blank" class="me-3">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="${player.strTwitter}" target="_blank">
                    <i class="fa-brands fa-twitter"></i>
            </div>

            
            
            
            <div class="text-center">

            <div class="mb-2"><button type="button" class="btn btn-primary" onclick="showDetails(${player.idPlayer})">Details</button>
            
            </div>

            <button class="btn btn-outline-info" onclick="handleAddtoCart('${player.strPlayer}')"> Add to Cart </button>
            
            </div>
            </div>
 
            
            </div>
        `;
        mainContainer.appendChild(div);
    });

}


const showDetails = (playerid) => {

    event.preventDefault();

    fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${playerid}`)
        .then(res => res.json())
        .then(data => {
            const player = data.players[0];
            const div = document.getElementById('modalBody');

            div.innerHTML = `
                <img src="${player.strThumb}" class="img-fluid mb-3" alt="Player Image">
                <h5>Name: ${player.strPlayer}</h5>
                <p>Nationality: ${player.strNationality}</p>
                <p>Sport: ${player.strSport}</p>
                <p>Team: ${player.strTeam}</p>
                <p>Description: ${player.strDescriptionEN}</p>
            `;


            const playerDetailsModal = new bootstrap.Modal(document.getElementById('playerDetailsModal'));
            playerDetailsModal.show();



        });
}

const handleAddtoCart = (info) => {

    event.preventDefault();

    const countCart = document.getElementById("counted").innerText;

    let convertCount = parseInt(countCart);

    if (convertCount < 11) {

        convertCount += 1;
        // console.log(convertCount);

        document.getElementById("counted").innerText = convertCount;


        const contaienr = document.getElementById("cart-main-container");

        const div = document.createElement("div");
        div.classList.add("card-info")

        div.innerHTML = `
    <p>${info}</p>
    `;
        contaienr.appendChild(div);
    }
    else {
        const NotAllowed = document.getElementById("notallowed");
        NotAllowed.innerHTML="";
        const div = document.createElement("div");
        div.classList.add("card-info")

        div.innerHTML = `
    <p>You can't select more: ${info}</p>
    `;
        NotAllowed.appendChild(div);
    }
}


SearchByName();