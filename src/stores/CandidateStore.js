
import { defineStore } from "pinia";
import axios from 'axios'
import router from '../router/index.js'

export const CandidateStore =defineStore("CandidateStore",
{
    state: () => {
        return{
            wasSuccessful: false,
        };
    },
    actions: {
        async addCandidate(name, email, address, partyname, image) {
            let path="http://127.0.0.1:5000/candidates/add";
            await axios.post(path, {
                name: name,
                email: email,
                address: address,
                partyname: partyname,
                image: image
            },
            ).then(res => {
                // check whether the res is empty
                if (res.data.length === 0) {
                    console.log("No user found");
                }
                // if code 200 then data posted successfully
                if (res.status === 200) {
                    // set wasSuccessful
                    this.wasSuccessful = true;
                }
                else {
                    console.log("else");
                    this.wasSuccessful = false;
                }

                    

    }
    ).catch(err => {
        console.log(err);
        this.wasSuccessful = false;
    }
    );
}
}
}
);
