import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnkoDetailComponent } from './unko-detail/unko-detail.component';
import { UnkosComponent } from './unkos/unkos.component';

const routes: Routes = [
  { path: '', redirectTo: '/unkos', pathMatch: 'full' },
  { path: 'unkos', component: UnkosComponent },
  { path: 'unko/:id', component: UnkoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
