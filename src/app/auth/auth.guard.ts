import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const custService = inject(AuthService);
  const router = inject(Router);
  if (custService.isLoggedIn) {
    return true;
  } else {
    return router.navigate(['/adv-angular/login']);
  }
};
