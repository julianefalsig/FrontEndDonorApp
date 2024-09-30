import { makeAutoObservable, runInAction } from "mobx";

const baseUrl = process.env.NODE_ENV === 'development' ? 
    "http://localhost:8080/" : 
    ""; //Check if dev environment

class GiraffeStore {
    giraffes = ["Loading giraffes"];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        this.fetchGiraffes();
    }

    async fetchGiraffes() {
        try {
            const response = await fetch(baseUrl + "api/giraffes");
            const json = await response.json();
            runInAction(() => {
                this.giraffes = json;
            });
        } catch (error) {
            console.error("Failed to fetch giraffes:", error);
        }
    }
}

export default new GiraffeStore();

