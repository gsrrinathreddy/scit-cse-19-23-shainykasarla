import express from 'express';
const app = express()

app.get('/',(req,res)=>{
    res.send("I have created my first api")
})
app.get("/AboutMe",(req,res)=>{
    res.json({
        Name:"Kasarla Akshara",
        FatherName:"Ravi",
        MotherName:"Vanitha",
        MobileNumber:7396982880
        
    })
})
app.get("/Skills",(req,res)=>{
    res.json({
        Frontend:"React",
        Languages:"Javascript",
        Componentlibraries:"MUI"
    })
})
app.get("/Qualifications",(req,res)=>{
    res.json({
        School:"Krishnaveni talent school",
        Intermediate:"sree venkateshwara junior college",
        BTech:"Sree Chaitanya Institute Of Technological Sciences"
    })
})        
app.get("/Projects",(req,res)=>{
    res.json({
        CapstoneProject:"Insurance Decisioning system",
        MiniProject:"Friendbook:A Semantic-based friend Recommendation system for social network"
    })
})        
app.get("/Experiences",(req,res)=>{
    res.json({
        PowerBI:"I have experience in PowerBI and certified by Microsoft",
        Python:"I have completed python course in ByteXL"
    })
})   
app.get("/Workshops",(req,res)=>{
    res.json({  
        Python:"Completed python workshop from ByteXl",
        PowerBI:"Completed PowerBi workshop from ICT Academy",
        ArficialIntellegence:"I have completed this workshop from Edunet Foundation"
    })
})
app.get("/Certifications",(req,res)=>{
    res.json({
        1:"Certificate of Partification in Flipkart Grid 4.0",
        2:"Certificate in participation in ReImagine Challenge organised by Swiss Me",
        3:"Certificate in PowerBI Data Analyst Associate by Microsoft"
    })
})        
app.get("/Hobbies",(req,res)=>{
    res.json({
        1:"Dancing",
        2:"Cooking",
        3:"Playing Badminton",
        4:"Singing"
    })
})       
app.get("/ContactMe",(req,res)=>{
    res.json({
        Email:"shainykasrla@gmail.com",
        PhoneNumber:7396982880,
        Address:"2-2-105/2,Ramagundam,Peddapalli",
        Pincode:505208
    })
})

    app.listen(8000,()=>{
    console.log("Server runnig on port 8000")
})