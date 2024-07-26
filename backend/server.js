const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
const Jobs=require("./model")
app.use(express.json())
app.use(cors({
    origin:"*"
}))

app.get("/",async (req,res)=>{
    try{
        const data=await Jobs.find()
        console.log("fetch request received")
        res.status(201).json(data);

    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
})

app.post("/",async (req,res)=>{
    try {
        const { company, companyLogo, timeAgo, title, experience, type, salary, description, additionalDescription, location } = req.body;
    
        const newJob = new Jobs({
          company,
          companyLogo,
          timeAgo,
          title,
          experience,
          type,
          salary,
          description,
          additionalDescription,
          location,
        });
    
        await newJob.save();
        res.status(201).json(newJob);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
})
app.post('/api/jobs', async (req, res) => {
    try {
      const jobsData = req.body;
      
      const result = await Jobs.insertMany(jobsData);
      res.status(201).json({ message: 'Data inserted successfully', data: result });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ message: 'Error inserting data', error });
    }
  });

mongoose.connect("mongodb+srv://chandu:8500@orders.xsbqmon.mongodb.net/?retryWrites=true&w=majority&appName=Orders")
.then(()=>{
  console.log("Database Connected")
  app.listen(5000,()=>{console.log("server is running ")})

})
.catch(()=>{
    console.log("failed to establish the connection to database")
})
