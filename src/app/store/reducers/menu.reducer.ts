import  {Action, createReducer, on}  from  '@ngrx/store'
import * as MenuActions from '../actions/menu.actions'
import {MenuState} from '../../models/menu.model'

export const MenuInitial : MenuState = {
    menuItems:[{"id":1,"name":"odzież","param":"subcategory","child":null},{"id":2,"name":"akcesoria","param":"subcategory","child":null},{"id":3,"name":"trendy","param":"trend: true","child":null},{"id":4,"name":"marki","param":"brand","child":null}],
    loaded: false,
    loading: false
}

const menuReducer = createReducer(
    MenuInitial,
    on(MenuActions.menuRequest, state => ({ ...state })),
    on(MenuActions.menuFail,    state => ({ ...state, loading: false })),
    on(MenuActions.menuSuccess, (state, {menu}) => ({ ...state, loading: false, menuItems: menu, loaded: true}))
);
  
export function reducer(state: MenuState | undefined, action: Action) {
    return menuReducer(state, action);
}