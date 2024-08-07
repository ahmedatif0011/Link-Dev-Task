import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchListComponent } from './branch-list/branch-list.component';
import { BranchModifyComponent } from './branch-modify/branch-modify.component';

const routes: Routes = [
  {path:'',component:BranchListComponent},
  {path:'branch-list',component:BranchListComponent},
  {path:'BranchModify',component:BranchModifyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
