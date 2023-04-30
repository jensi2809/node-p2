const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE)

mongoose.connect("mongodb+srv://admin:admin@cluster0.4lm4ky3.mongodb.net/mernstack?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('mongoose is connected');
})

const db = mongoose.connection;

db.on("error", err => {
  console.log("err", err)
})