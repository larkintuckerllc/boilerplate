const expect = require('expect');
const deepFreeze = require('deep-freeze');
const { screens } = require('../app/reducers/screensReducer');
const testAddScreen = () => {
  const stateBefore = {
    byId: {},
    allIds: []
  };
  const action = {
    type: 'ADD_SCREEN',
    id: 'gcat',
    description: 'Grumpy Cat'
  };
  const stateAfter = {
    byId: {
      gcat: {
        id: 'gcat',
        description: 'Grumpy Cat'
      }
    },
    allIds: ['gcat']
  };
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(
    screens(stateBefore, action)
  ).toEqual(stateAfter);
}
module.exports = testAddScreen;
