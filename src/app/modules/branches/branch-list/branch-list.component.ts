import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/shared/Interfaces/ApiResponse.model';
import { BranchElement } from 'src/app/shared/Interfaces/BranchElement.model';
import { APIServiceService } from 'src/app/shared/Services/api-service.service';
import { CalculationsService } from 'src/app/shared/Services/calculations.service';
import { APIRoutes } from 'src/environments/ApiRoutes';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})

export class BranchListComponent implements OnInit,AfterViewInit{
  _BranchElement!: BranchElement[];
  searchCriteria: string = '';
  pageSize:number = 3;
  totalPages :number =0;
  currentPage:number = 1;
  pages :number[]=[];

  constructor(private Http: APIServiceService,private Calculations: CalculationsService) { }
  ngAfterViewInit(): void {
    this.GetData();
  }

  ngOnInit(): void {
  }

  GetData(): void {
    this.Http.Get<BranchElement>(
      APIRoutes.GetListOfBranches,
      {},
      { searchCriteria: this.searchCriteria, pageNumber: this.currentPage.toString(), pageSize: this.pageSize.toString() }
    ).subscribe({
      next: (response: ApiResponse<BranchElement>) => {
        this._BranchElement = response.data;
        this.totalPages = response.totalData;
        this.pages = this.Calculations.CalcPagesCount(response.totalData,this.pageSize,this.currentPage)
        console.log(this.totalPages);

      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }

  NextPage(){
    debugger;
    let newPage = (this.totalPages < this.currentPage ? this.currentPage : this.currentPage +1);
    if(newPage == this.currentPage)
      return;
    this.currentPage = newPage;
    this.GetData();
  }
  PreviousPage(){
    let newPage = (1 === this.currentPage ? this.currentPage : this.currentPage -1);
    if(newPage == this.currentPage)
      return;
    this.currentPage = newPage;
    this.GetData();
  }
  GoToPage(pageNumber:number){
    debugger;
    this.currentPage= pageNumber;
    this.GetData();
  }
}
