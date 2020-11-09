const peopleTarget = document.querySelectorAll(".people")

const eventHub = document.querySelector("#state-fair")

export const FullPackageHolders = ( ) => {
    eventHub.addEventListener("fullPackagePurchased", clickEvent  => {
       for (const person of peopleTarget ){
           person.innerHTML += `
           <div class="person bigSpender"></div>
           `
       }
    }
    )}