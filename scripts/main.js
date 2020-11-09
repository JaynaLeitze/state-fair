// Import and invoke the ticket booth component function

import { FoodTicketHolders } from "./food/FoodTicketHolders.js"
import { FullPackageHolders } from "./FullPackage/FullPackageTickets.js"
import { GameTicketHolders } from "./games/GameTicketHolder.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { SideshowTicketHolders } from "./sideshows/SideshowTickets.js"
import { TicketBooth } from "./TicketBooth.js"

TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolders()
FullPackageHolders()