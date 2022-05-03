import * as db from "./modules/dbConnection.js"

export default defineEventHandler(async (event) => {

  return await db.attendees()
})