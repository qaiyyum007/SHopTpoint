import bcrypt from 'bcryptjs'


const users=[{
    name:"Admin User",
    email:"admin@example.com",
    password:bcrypt.hashSync('12345678',10),
    isAdmin:true
},
{
    name:"John Doe",
    email:"John@example.com",
    password:bcrypt.hashSync('12345678',10)
    
}
,
{
    name:"Jone Doe",
    email:"Jone@example.com",
    password:bcrypt.hashSync('12345678',10)
   
}

]

export default users