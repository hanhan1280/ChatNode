const clients = [];

const addClient = ({id,name,room}) =>{
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const exists = clients.find((c)=>c.room === room && c.name === name)
    if(!name || !room) return { error: 'Username and room are required.' };
    if(exists){
        return {error: "User already exists"};
    }

    const client = {id,name,room};
    clients.push(client);
    return {client};
}

const removeClient = (id) =>{
    const index = clients.findIndex((c)=>c.id === id);
    if(index!=-1){
        return clients.splice(0,1)[0];
    }
}

const getClient = (id) => clients.find((c)=>c.id === id);

const getClientRoom = (room) => clients.filter((c) => c.room === room);

module.exports = {addClient,removeClient,getClient,getClientRoom};