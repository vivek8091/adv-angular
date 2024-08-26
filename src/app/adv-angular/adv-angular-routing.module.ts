import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Route for the login page
  {
    path: '', canActivate: [authGuard],
    children: [
      { path: 'parent', component: ParentComponent },
      { path: 'child', component: ChildComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvAngularRoutingModule { }
