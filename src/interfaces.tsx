import SimpleValue from './SimpleValue';

export interface IState
{
  current_view: string;
  map: any;
  map_view: any;
}

export interface IAction
{
  type: string
  payload: any
}