import UserInterfaceHandler from "./HtmlPageManger.js";

let closeBtn = document.querySelector(".btn-close");
let games = document.querySelector(".games");
let details = document.querySelector(".details");
let loading = document.querySelector(".loading");
const apiKey = '85e1c56754msh4b6f48a53c0ed9ap182589jsn7870c39ddd59'

export default class Details{
    constructor(id){
        this.ui = new UserInterfaceHandler();

        closeBtn.addEventListener("click",function(){
            details.classList.add("d-none");
            games.classList.remove("d-none");
        });

        this.getDetails(id);
    }

    async getDetails(id) {
        loading.classList.remove("d-none");
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            this.ui.displayDetails(result);
        } catch (error) {
            console.error(error);
        }
        finally{
            loading.classList.add("d-none");
        }
    }
}