const db = {
    'user': [
        {
            id: '1',
            name: 'Giovanni'
        }
    ]
}

async function list(table) {
    return db[table] || []
}
async function get(table, id) {
    const col = await list(table)
    return col.filter( item => item.id === id)[0] || null
}

async function upsert(table, data) {
    if (!db[table]) {
        db[table] = [];
    }

    db[table].push(data)

    console.log(db)
}

async function remove(table, id) {
    return true
}

async function query(table, q) {
    const col = await list(table)
    let keys = Object.keys(q)
    let key = keys[0]
    return col.filter(item => item[keys[0]] === q[key])[0] || null
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query
}