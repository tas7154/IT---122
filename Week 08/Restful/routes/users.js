import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];

// all routes here start with /users
router.get('/', (req,res) =>{
    //console.log(users)
    res.send(users);
    
});

router.post('/', (req,res) => {
    //console.log('POST ROUTE REACHED')
    const user = req.body;

    users.push({ ...user, id: uuidv4()})

    res.send(`User with the name ${user.firstName} added to the database!`);
});

export default router;