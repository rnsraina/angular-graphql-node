import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  //window.alert('You are not allowed to view this');
  return true;
};
