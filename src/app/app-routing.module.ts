import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VbsComponent } from './vbs/vbs.component'

const routes: Routes = [
  {path: '', component: VbsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
