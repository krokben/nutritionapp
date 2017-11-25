export default function appReducer(app = {}, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...app,
        menu: !app.menu
      };
    case 'TOGGLE_RDI_SETTINGS':
      return {
        ...app,
        rdiSettings: !app.rdiSettings
      };
    default:
      return app;
  }
}
