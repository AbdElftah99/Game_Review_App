import UserInterfaceHandler from "./HtmlPageManger.js";
import Details from "./details.js";

let menu = document.querySelectorAll(".menu a");
let games = document.querySelector(".games");
let details = document.querySelector(".details");
let loading = document.querySelector(".loading");
const apiKey = '85e1c56754msh4b6f48a53c0ed9ap182589jsn7870c39ddd59'

export default class Game{
    constructor(){
        this.getGames("mmorpg");

        menu.forEach((item)=>{
            item.addEventListener("click", (e)=>{
                document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.getAttribute("data-category"));
            });
        });

        this.ui = new UserInterfaceHandler();
    }

    async getGames(category) {

        console.log(category);

        loading.classList.remove("d-none");

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
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
            this.ui.displayData(result);
            this.addItemsEvent();
        } catch (error) {
            console.error(error);
        }
        finally{
            loading.classList.add("d-none");
        }
    }

    addItemsEvent(){
        document.querySelectorAll(".card").forEach((item)=>{
            item.addEventListener("click",()=>{
                const id = item.getAttribute("data-id");
                this.showDetails(id);
            });
        });
    }

    showDetails(id){
        const theDetails = new Details(id);
        games.classList.add("d-none");
        details.classList.remove("d-none");
    }
}