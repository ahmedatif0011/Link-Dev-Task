import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { BranchListComponent } from './branch-list/branch-list.component';
import { APIServiceService } from 'src/app/shared/Services/api-service.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BranchListComponent
  ],
  imports: [
    CommonModule,
    BranchesRoutingModule,
    FormsModule

  ],
  providers:[APIServiceService]
})
export class BranchesModule { }
