export const createActionRequest = (name) => ({
  success: (data) => ({type: name + '/SUCCESS', payload: data}),
  SUCCESS: name + '/SUCCESS',
  request: (data) => ({type: name + '/REQUEST', payload: data}),
  REQUEST: name + '/REQUEST',
  failure: (data) => ({type: name + '/FAILURE', payload: data}),
  FAILURE: name + '/FAILURE',
});
