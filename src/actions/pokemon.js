const loadedAction = (result) => ({
  type: 'LOADED',
  payload: result,
});

const filterChangeAction = (result) => ({
  type: 'FILTER_CHANGE',
  payload: result,
});

export { loadedAction, filterChangeAction };
