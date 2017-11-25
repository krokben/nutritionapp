export default function rdiReducer(rdi = {}, action) {
  switch (action.type) {
    case 'CHANGE_RDI':
      return {
        ...rdi,
        kcal: action.payload.value
      };
    default:
      return rdi;
  }
}
