const express =require ('express');
const app=express();
const path=require('path');

let port=3000;
app.listen(port,function(){
    console.log(`chal rha hai${port}`);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

//setup ejs

app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("index.ejs"); 
});

app.get("/doctors/pallavi", function(req, res) {
  res.render("pallavi.ejs"); // this will render views/drPallavi.ejs
});

app.get("/doctors/rahul", function(req, res) {
  res.render("rahul.ejs"); // this will render views/drrahul.ejs
});


app.get("/doctors/anjali", function(req, res) {
  res.render("anjali.ejs"); // this will render views/drrahul.ejs
});

// Render the contact form
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// Handle form submission
app.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.send("Thank you! Your message has been sent.");
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).send("Something went wrong.");
  }
});




