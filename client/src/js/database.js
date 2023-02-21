import { openDB } from 'idb';

const initdb = async () =>
  //creating a new db called jate here, version 1
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      //creating a new obj store
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// //post method
// export const postDb = async (text) => {
//   console.log('POST to the db');

//   //creates the connection to the db that we created in line 5
//   const jateDb = await openDB('jate', 1);

//   //create a new transaction
//   const tx = jateDb.transaction('jate', 'readwrite');

//   //opens up the desired obj store
//   const store = tx.objectStore('jate');

//   //.add() method to pass in the text we want to enter in the editor
//   const request = store.add({ text });

//   // confirm that everything went through
//   const result = await result;
//   console.log('🚀 - data saved to the database', result);
// }

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jateDb = await openDB('jate', 1).transaction('jate', 'readwrite').objectStore('jate').put({ id: 1, value: content });
  const result = await request;
  console.log('result.value', result);
  return result.value;
  // console.error('putDb not implemented');
}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const contactDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = contactDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result?.value;
  // console.error('getDb not implemented');
}
initdb();
