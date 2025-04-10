let eventsItens = ''
user.events.forEach(element => {
    if(element.type === 'PushEvent') {
        eventsItens += `
        <li>
            <h3>${element.repo.name}</h3>
            <p> -- ${element.payload.commits[0].message}</p>
        </li>`
    } else {
        eventsItens += `
        <li>
            <h3>${element.repo.name}</h3>
            <p> -- Criado um ${element.payload.ref_type}</p>
        </li>`
    }
});

export { eventsItens }