import * as db from "./modules/dbConnection.js"

export default defineEventHandler((event) => {
  const query = useQuery(event)
  db.leave(query.name)

  return {leave: query.name}
})