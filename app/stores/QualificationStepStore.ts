import { makeAutoObservable, runInAction } from "mobx";

const baseUrl = process.env.NODE_ENV === 'development' ? 
    "https://test-app.donor.4a4b.dk/" : 
    ""; //Check if dev environment

class QualificationStepStore {
    donorStep = [];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        this.fetchDonor();
    }

    async fetchDonor() {
        try {
            const response = await fetch(baseUrl + "api/qualificationstep");
            const json = await response.json();
            runInAction(() => {
                this.donorStep = json;
            });
        } catch (error) {
            console.error("Failed to fetch donor:", error);
        }
    }
}

export default new QualificationStepStore();
