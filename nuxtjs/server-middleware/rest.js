// const bodyParser = require('body-parser')
const app = require('express')()
const db = require("./dbConnection")

// app.use(bodyParser.json())

// app.all('/test', (req, res) => {
//   res.json({ data: db.test("aaa") })
// })

app.get("/enter", async (req, res) => {
  await db.enter(req.query.name)
  res.send(`ENTER : ${req.query.name}`)
})

app.get("/leave", async (req, res) => {
  await db.leave(req.query.name)
  res.send(`LEAVE : ${req.query.name}`)
})

app.get("/attend", async (req, res) => {
  let attendees = await db.attendees()
  // console.log(attendees[0].enter_time)
  // console.log(typeof attendees[0].enter_time)
  // console.log(JSON.stringify(attendees[0]))
  // console.log(JSON.stringify(attendees[0].enter_time))
  // attendees = attendees.map(attendee => console.log(attendee))
  // res.send(attendees)
  res.send(attendees)
  // res.send(attendees.map((attendee) => {attendee.enter_time.match(/T[0-9]{2}:[0-9]{2}/), attendee.name}))
})

app.get("/history", async (req, res) => {
  res.send(await db.history(req.query.name))
})

module.exports = app