import * as db from "./modules/dbConnection.js"

export default defineEventHandler((event) => {
  const query = useQuery(event)

  // db.create()
  // db.insert()
  // db.select()

  return {aa: query.name}
})