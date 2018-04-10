import Dexie from 'dexie'
const db = new Dexie('project1804')
db.version(1).stores({local:`name`})
// db.open().catch(function(e) { console.error("Open failed: " + e)})

export default db
