const appActions = {
  toggleMenu(payload) {
    return {
      type: 'TOGGLE_MENU'
    }
  },
  toggleRdiSettings(payload) {
    return {
      type: 'TOGGLE_RDI_SETTINGS'
    }
  }
}

export default appActions;
