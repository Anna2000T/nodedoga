import express from 'express';
import path from 'path';
import { json } from 'stream/consumers';
import { fileURLToPath } from 'url';


const PORT = 3000;
const app = express()


const root = path.dirname(fileURLToPath(import.meta.url))


const users = [
    { id: "1",  name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Sam Johnson" },
  ];




app.use(express.json())

app.use(express.static(path.join(root,'public')))


/*app.get('/',(req,res)=>
    {
        res.send("Hi there!")
    
    })
*/


app.get('/express',(req,res)=>
{
    res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült")

})

app.get('/greeting',(req,res)=>
    {
        res.send("Hello,  Anna!")
    })

    
app.get('/nodejs',(req,res)=>
    {
        res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.") 
    })
        



app.get('/',(req,res)=>
    {
            res.sendFile(root,'index.html')
            
    })


    // userek lekérdezése

    app.get('/api/users',(req,res)=>
        {
                res.status(200).json(users)
                
        })



        // USer megkeresése id szerint

app.get('/api/users:id',(req,res)=>
        {
            const id = req.params.id

            const [user] = users.filter(e => e.id == id)

            if(!user)
            {
                return res.status(404).json({message: "Tut mir leid, but this id does not exists"})
            }

            res.status(200).json(user)

            
                   
        })
    

        
// User kitörlése

app.delete('/api/user:id',(req,res)=>
        {
            const id = req.params.id
    
            const [user] = users.filter(e => e.id == id)
    
            if(!user)
            {
                    return res.status(404).json({message: "Tut mir leid, but this id does not exists"})
            }
         
             res.status(204).json(user)                              
         })



    

app.listen(PORT, ()=>{

    console.log(`Server is running on ${PORT}`)

})






