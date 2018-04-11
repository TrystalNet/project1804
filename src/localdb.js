import Dexie from 'dexie'
const db = new Dexie('project1804')
db.version(1).stores({local:`name`})

export const saveIt = (db, name, content) => {
  db.local.put({name, content})
    .then(res => console.log('saved the content, we think'))
    .catch(err => console.log('the err is ', err))
}

export default db
