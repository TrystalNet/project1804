import Dexie from 'dexie'
const db = new Dexie('project1804')
db.version(1).stores({local:`name`})

const debounce = (fn, seconds) => {
  let timeout
  return function() {
    const functionCall = () => fn.apply(this, arguments)
    clearTimeout(timeout)
    timeout = setTimeout(functionCall, seconds * 1000)
  }
}

export const saveIt = debounce((db, name, content) => {
  console.log('saving at', Date.now)
  db.local.put({name, content})
    .then(res => console.log('saved the content, we think'))
    .catch(err => console.log('the err is ', err))
}, 5)

export default db
