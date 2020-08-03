
module.exports = (app)=>{
     
     
     app.get('/', (req,res)=>{
          res.render("home")
      });

      app.get('/sign-up', (req,res)=>{
          res.render("sign-up")
      });
};