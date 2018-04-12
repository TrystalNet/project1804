import Dexie from 'dexie'
const db = new Dexie('project1804')
db.version(1).stores({local:`name`})

export const debounce = (fn, seconds) => {
  let timeout
  return function() {
    const functionCall = () => fn.apply(this, arguments)
    clearTimeout(timeout)
    timeout = setTimeout(functionCall, seconds * 1000)
  }
}

export const saveIt = (db, name, content) => {
  db.local.put({name, content})
    .then(res => console.log('saved'))
    .catch(err => console.log('err:', err))
}

export default db
