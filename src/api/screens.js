const find = require('lodash/find');
const fakeDatabase = {
  screens: [{
    id: 'gcat',
    description: 'grumpy cat'
  }, {
    id: 'sdog',
    description: 'super dog'
  },{
    id: 'cbird',
    description: 'chirpy bird'
  },{
    id: 'llizard',
    description: 'lounging lizard'
  }]
}
const delay = (ms) =>
  new Promise(resolve => window.setTimeout(resolve, ms));
export const get = () =>
  delay(2000).then(() => {
    /*
    throw new Error('500'); // SERVER ERROR
    */
    return fakeDatabase.screens
  });
export const post = (id, description) =>
  delay(2000).then(() => {
    /*
    throw new Error('500'); // SERVER ERROR
    */
    if (find(fakeDatabase.screens, { id }) !== undefined) {
      throw new Error('409'); // CONFLICTING ID
    }
    const screen = { id, description };
    fakeDatabase.screens.push(screen);
    return screen;
  });
