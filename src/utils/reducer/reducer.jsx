export function withMatcher(actionCreator) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action) {
      return action.type === type;
    },
  });
}

export function createAction(type, payload) {
  if (payload !== undefined) {
    return { type, payload };
  }
  return { type };
}
