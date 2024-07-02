let rowCard = document.querySelector("main .row");
let detailsContent = document.querySelector("#detailsContent");

export default class UserInterfaceHandler{
    displayData(data){
        let container = ``;
        for (let i = 0; i < data.length; ++i) {
            container +=
                `
            <div class="col">
                    <div data-id="${data[i].id}" role="button" class="h-100 card bg-transparent">
                        <div class="card-body">
                            <figure>
                                <img class="object-fit-cover w-100" src="${data[i].thumbnail}" alt="${data[i].title}">
                            </figure>
                            <figcaption>
                                <div class="hstack justify-content-between">
                                    <h3 class="h6 small">${data[i].title}</h3>
                                    <span class="badge text-bg-primary p-2">Free</span>
                                </div>
    
                                <p class="card-text small text-center opacity-50">
                                    ${(data[i].short_description).slice(0, 50)}
                                </p>
                            </figcaption>
                        </div>

                        <footer class="card-footer small hstack justify-content-between">
                            <span class="badge badge-color">${data[i].genre}</span>
                            <span class="badge badge-color">${data[i].platform}</span>
                        </footer>
                    </div>
                </div>
        `
        }

        rowCard.innerHTML = container;
    }

    displayDetails(data){

        console.log(data);
        let container = 
        `
             <div class="col-md-4">
                    <img class="w-100" src="${data.thumbnail}" alt="image details">
                </div>
                <div class="col-md-8">
                    <h3>Title: ${data.title}</h3>
                    <p>
                        Categroy: <span class="badge">${data.genre}</span>
                    </p>
                    <p>
                        Platform: <span class="badge">${data.platform}</span>
                    </p>
                    <p>
                        Status: <span class="badge">${data.status}</span>
                    </p>

                    <p class="small">${data.description}</p>

                    <a class="btn btn-outline-warning" href ="${data.game_url}" target="_blank">Show Game</a>
                </div>
        `;

        detailsContent.innerHTML = container;   
    }

}