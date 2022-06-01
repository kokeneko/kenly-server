import * as db from "./modules/dbConnection.js"

export default defineEventHandler(async (event) => {
  const query = useQuery(event)

  return await db.history(query.name)
})