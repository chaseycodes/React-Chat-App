const uuidv4 = require('uuid/v4')

//CREATE USER
const createUser = ({name=""} = {})=>(
    {
        id:uuidv4(),
        name
    }
)

//CREATE MESSAGE
const createMessage = ({message="", sender=""} = {})=>(
    {
        id:uuidv4(),
        time:getTime(new Date(Date.now())),
        message,
        sender
    }
)

//CREATE CHAT
const createChat = ({messages=[], name="Community", users=[]} = {})=>(
    {
        id:uuidv4(),
        name,
        messages,
        users,
        typeingUsers:[]
    }
)


//GET DATE in formate '19:30'
const getTime = (date)=>{
    return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}


module.exports = {
    createMessage,
    createChat,
    createUser
}