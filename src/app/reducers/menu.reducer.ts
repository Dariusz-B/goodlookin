import  {Action, createReducer, on}  from  '@ngrx/store'
import * as MenuActions from '../actions/menu.actions'
import {MenuState} from './../models/menu.model'

export const MenuInitial : MenuState = {
    menuItems: [],
    loaded: false,
    loading: false
}

const menuReducer = createReducer(
    MenuInitial,
    on(MenuActions.menuRequest, state => ({ ...state, loading: true })),
    on(MenuActions.menuFail,    state => ({ ...state, loading: false })),
    on(MenuActions.menuSuccess, (state, {menu}) => ({ ...state, loading: false, loaded: true, menuItems: menu})),
);
  
export function reducer(state: MenuState | undefined, action: Action) {
    return menuReducer(state, action);
}