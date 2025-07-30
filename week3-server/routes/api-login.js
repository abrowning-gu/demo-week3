/*  
    Author: Allan Browning 
    Subject: 3813ICT
    Route: Checks user credentials and reports .valid as true or false.
*/
module.exports = {
 route:(app)=>{
    const User = require('../user-class.js');
    const bcrypt = require('bcrypt');
    let user = new User('','','','',false);
    //Route to manage user logins
     app.post('/api/login',function(req,res){
     
      //passwords have been created with https://bcrypt-generator.com/
      //Password is the same for all "123"
      let users = [
        {'email':'abc@com.au','pwd':'$2a$10$mYOYyrv0GshoPrEU8JlwpOBZH0K6T6rroysXfwBd4shZnrTX4IIIi','id':'1'},
        {'email':'abd@com.au','pwd':'$2a$10$mYOYyrv0GshoPrEU8JlwpOBZH0K6T6rroysXfwBd4shZnrTX4IIIi','id':'2'},
        {'email':'abe@com.au','pwd':'$2a$10$mYOYyrv0GshoPrEU8JlwpOBZH0K6T6rroysXfwBd4shZnrTX4IIIi','id':'3'}];
        
        if (!req.body){
          //console.log('no post body');
          res.sendStatus(400);
        }
        let user = new User(req.body.id,req.body.email,'','',false);
        
        for (let i=0;i<users.length;i++){
         //Match email and compare bcrypt stored value with actual password.
          if (req.body.email == users[i].email && bcrypt.compareSync(req.body.pwd, users[i].pwd)){
            user.valid = true;
          }   
        }
         res.send(user); 
      });
 }
}  
       
       
    