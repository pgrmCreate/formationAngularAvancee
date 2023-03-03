import {createAction, props} from "@ngrx/store";

export const initAction = createAction('init');

export const addAction = createAction('add', props<{name: string}>());
