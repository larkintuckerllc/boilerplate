const find = require('lodash/find');
const fakeDatabase = {
  screens: [{
    id: 'gcat',
    order: 0,
    description: 'grumpy cat'
  }, {
    id: 'sdog',
    order: 2,
    description: 'super dog'
  },{
    id: 'cbird',
    order: 3,
    description: 'chirpy bird'
  },{
    id: 'llizard',
    order: 1,
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
export const put = (id, description, order) =>
  delay(2000).then(() => {
    /*
    throw new Error('500'); // SERVER ERROR
    */
    let newScreen;
    const screen = find(fakeDatabase.screens, { id });
    if (screen === undefined) {
      throw new Error('404');
    }
    const oldOrder = screen.order;
    if (order < oldOrder) {
        fakeDatabase.screens = fakeDatabase.screens.map(
          o => {
            const newO = Object.assign(
              {},
              o
            );
            newO.order = (o.order >= order && o.order < oldOrder) ?
              o.order + 1 : o.order;
            if (o.order === oldOrder) {
              newO.order = order;
              newO.description = description;
              newScreen = newO;
            }
            return newO;
          }
        );
    }
    if (order > oldOrder) {
        fakeDatabase.screens = fakeDatabase.screens.map(
          o => {
            const newO = Object.assign(
              {},
              o
            );
            newO.order = (o.order > oldOrder && o.order <= order) ?
              o.order - 1 : o.order;
            if (o.order === oldOrder) {
              newO.order = order;
              newO.description = description;
              newScreen = newO;
            }
            return newO;
          }
        );
    }
    return newScreen;
  });
