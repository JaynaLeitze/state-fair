const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", customEvent => {
    


    if (customEvent.target.id === ("rideTicket")) {

        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticket: rideTicket
            }
        })
        console.log(rideEvent)
        eventHub.dispatchEvent(rideEvent)
    }
    if (customEvent.target.id === ("foodTicket")) {

        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                ticket: foodTicket
            }
        })
        eventHub.dispatchEvent(foodEvent)
    }
    if (customEvent.target.id === ("gameTicket")) {

        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                ticket: foodTicket
            }
        })
        eventHub.dispatchEvent(gameEvent)
    }
    if (customEvent.target.id === ("showTicket")) {

        const showEvent = new CustomEvent("showTicketPurchased", {
            detail: {
                ticket: showTicket
            }
        })
        eventHub.dispatchEvent(showEvent)
    }

   
})


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
           <button id="rideTicket">Ride Ticket</button>
           <button id="foodTicket">Food Ticket</button>
           <button id="gameTicket">Game Ticket</button>
           <button id="showTicket">Sideshow Ticket</button>
        </div>
        
    `
}

