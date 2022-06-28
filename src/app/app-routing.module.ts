import { ChildAComponent } from './first/child-a/child-a.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { Injectable, NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { ChildBComponent } from './first/child-b/child-b.component';

const routes: Routes = [
  { 
    path: 'first-component', 
    component: FirstComponent,
    children: [
      { path: 'child-a', component: ChildAComponent, title: 'Child A' },
      { path: 'child-b', component: ChildBComponent, title: 'Child B' },
    ] 
  },
  { path: 'second-component', component: SecondComponent },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@Injectable({providedIn: 'root'})
export class ResolvedChildATitle implements Resolve<string> {
  resolve() {
    return Promise.resolve('child a');
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
