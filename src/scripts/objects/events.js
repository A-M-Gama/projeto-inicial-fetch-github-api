const events = {
    allEvents: [],
    setEvents(events) {
        this.allEvents = events.map(event => ({
            type: event.type,
            name: event.repo.name,
            url: `https://github.com/${event.repo.name}`,
            comment: pushOrCreate(event)
        }));
    },
    getRecentEvents(limit = 10) {
        return this.allEvents.slice(0, limit);
    }
}

function pushOrCreate(event){
    if(event.type === "CreateEvent"){
        return 'Sem mensagem de commit'
    } else if (event.type === "PushEvent"){
        return event.payload.commits?.[0]?.message || 'Sem mensagem';
    } else {
        return 'Descrição não disponível'
    }
}

export { events }