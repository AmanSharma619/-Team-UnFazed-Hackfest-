const express = require('express')
const mongoose =require("mongoose")
const app = express()
const port = 3000
const path=require('path')
const User=require("../Backend/db/schemas")
app.use(express.static(path.join(__dirname,'public')))

let conn=mongoose.connect("mongodb://localhost:27017/CampusTrade")


app.get('/Home', (req, res) => {
  res.sendFile(path.join('C:\\Users\\AMAN\\Desktop\\project\\CampusTrade\\FrontEnd\\HTML','homepage.html'))
})
app.get('/AboutUs', (req, res) => {
  res.sendFile(path.join('C:\\Users\\AMAN\\Desktop\\project\\CampusTrade\\FrontEnd\\HTML','AboutUs.html'))
})
app.get('/Faqs', (req, res) => {
  res.sendFile(path.join('C:\\Users\\AMAN\\Desktop\\project\\CampusTrade\\FrontEnd\\HTML','Faqs.html'))
})
app.get('/BuyOrSell', (req, res) => {
  res.sendFile(path.join('C:\\Users\\AMAN\\Desktop\\project\\CampusTrade\\FrontEnd\\HTML','BuySell.html'))
})
app.get('/FillForm', async(req, res) => {
  
  res.sendFile(path.join('C:\\Users\\AMAN\\Desktop\\project\\CampusTrade\\FrontEnd\\HTML','SellForm.html'))
})
// app.post('/FillForm', (req, res) => {
//   res.sendFile(path.join('C:\\Users\\AMAN\\Desktop\\project\\CampusTrade\\FrontEnd\\HTML','SellForm.html'))
// })
app.get('/Register', (req, res) => {
  res.sendFile(path.join('C:\\Users\\AMAN\\Desktop\\project\\CampusTrade\\FrontEnd\\HTML','register.html'))
})
app.get('/UserDashBoard', (req, res) => {
  res.sendFile(path.join('C:\\Users\\AMAN\\Desktop\\project\\CampusTrade\\FrontEnd\\HTML','profile.html'))
})
app.post('/FillForm', async (req, res) => {
  // try {
  //     const { items, prices } = req.body;

  //     // Check if the email already exists
      

  //     // Create a new user
  //     const newreq = new User({ items, prices });
  //     const savedUser = await newreq.save();

  //     // Respond with the saved user
  //     res.status(201).json(savedUser);
  // } catch (error) {
  //     res.status(500).json({ error: 'An error occurred while saving the user' });
  // }
  console.log("app running in post")
});
let hostname = "127.0.0.1"
app.listen(port, () => {
  console.log(`Example app listening on port http://${hostname}:${port}/Home`)
})

