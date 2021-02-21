import { createAction, props } from '@ngrx/store';
import { MenuItem } from '../../models/menu.model';

export const menuRequest = createAction(
    '[Backend API] Get menu request'
  );

export const menuSuccess = createAction(
    '[Backend API] Get menu success',
    props<{ menu: MenuItem[]}>()
  );

export const menuFail = createAction(
    '[Backend API] Get menu fail'
  );