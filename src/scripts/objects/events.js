const events = {
    allEvents: [],
    setEvents(events) {
        this.allEvents = events.map(event => ({
            type: event.type,
            name: event.repo.name,
            url: `https://github.com/${event.repo.name}`,
            comment: event.type === 'CreateEvent' ? 'Sem mensagem de commit' 
                   : event.payload.commits?.[0]?.message
        }));
    },
    getRecentEvents(limit = 10) {
        return this.allEvents.slice(0, limit);
    }
}

export { events }