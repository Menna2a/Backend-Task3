//1- package
const express= require("express")
const app =express()



//2-declare port
const port=process.env.PORT || 3000 //port of the company 



const path=require("path")//not installed because it is a core module



const x=path.join(__dirname,"../public")//.. to go back
app.use(express.static(x))//responsivle for viewing my project

const hbs=require("hbs")
const partialpath=path.join(__dirname,"../partials")
hbs.registerPartials(partialpath)

app.set('view engine','hbs')
app.get('/',(req,res)=>{
    res.render('index',{//anything i want to send to hbs file
        title:"Home",
        desc:"this is home page",
        img:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    })
})

app.get('/service',(req,res)=>{
    res.render('service',{//anything i want to send to hbs file
        title:"service file",
        desc:"this is service page",
        img1:"images/image1.png"
    })
})
app.get('/teams',(req,res)=>{
    res.render('teams',{//anything i want to send to hbs file
        title:"Teams file",
        name:"Menna Mohamed",
        desc:"this is Teams page",
        city:"cairo",
        img2:"https://assets.entrepreneur.com/content/3x2/2000/20151215195453-business-leader-group-front-leadership-team-professionals-businesspeople.jpeg?format=pjeg&auto=webp"
    })
})
app.get('/fourth',(req,res)=>{
    res.render('fourth',{//anything i want to send to hbs file
        title:"Fourth file",
        name:"Alia Mohamed",
        desc:"this is The Fourth Page",
        city:"Alex",
        img2:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
    })
})
app.get('/fifth',(req,res)=>{
    res.render('fifth',{//anything i want to send to hbs file
        title:"Fifth file",
        name:"Mohamed Abdelrahman",
        desc:"this is The Fifth Page",
        city:"Egypt",
        img2:"https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
    })
})

//4- display website
app.listen(port,()=>{
    console.log("app listening on port 3000 ")
})
