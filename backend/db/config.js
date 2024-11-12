const mongoose = require("mongoose");

const MONGO_URI = 'mongodb+srv://pd4008208:RIYA-143@cluster0.pqg7g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Connection successful`);
}).catch((e) => {
    console.log(`No connection: ${e}`);
});

