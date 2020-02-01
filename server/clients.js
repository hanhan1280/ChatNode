const clients = [];

const addClient = ({id,name,room}) =>{
    name = name.trim().toLowercase();
    room = room.trim().toLowercase();

    const exists = clients.find((c)=>c.room === room && c.name === name)
    if(exists){
        return {error: "User already exists"};
    }

    const c = {id,name,room};
    clients.push(c);
    return {c};
}

const removeClient = (id) =>{
    const index = clients.findIndex((c)=>c.id === id);
    if(index!=-1){
        return clients.splice(0,1)[0];
    }
}

const getClient = (id) => clients.find((c)=>c.id === id);

const getClientRoom = (room) => clients.filter((c)=>c.room === room)

module.exports = {addClient,removeClient,getClient,getClientRoom};