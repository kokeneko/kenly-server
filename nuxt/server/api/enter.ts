import * as db from "./modules/dbConnection.js"

export default defineEventHandler((event) => {
  const query = useQuery(event)
  db.enter(query.name)

  return {enter: query.name}
})