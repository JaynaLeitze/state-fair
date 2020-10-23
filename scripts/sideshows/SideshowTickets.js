const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = ( ) => {
    eventHub.addEventListener("showTicketPurchased", clickEvent  => {
        contentTarget.innerHTML += `
        
         <div class="gawker person">
         </div>
         
        `
    }
    )}