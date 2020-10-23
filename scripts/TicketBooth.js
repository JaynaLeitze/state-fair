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

   
})


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
           <button id="rideTicket">Ride Ticket</button>
           <button id="foodTicket">Food Ticket</button>
        </div>
        
    `
}

