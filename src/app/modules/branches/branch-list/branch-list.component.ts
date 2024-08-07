import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/shared/Interfaces/ApiResponse.model';
import { BranchElement } from 'src/app/shared/Interfaces/BranchElement.model';
import { APIServiceService } from 'src/app/shared/Services/api-service.service';
import { CalculationsService } from 'src/app/shared/Services/calculations.service';
import { APIRoutes } from 'src/environments/ApiRoutes';
import { PageRoutes } from 'src/environments/PageRoutes';
import { SubSink } from 'subsink';

@Component({
  selector: 'branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})

export class BranchListComponent implements OnInit,AfterViewInit,OnDestroy{
  private subs = new SubSink()
  _BranchElement!: BranchElement[];
  searchCriteria: string = '';
  pageSize:number = 3;
  totalPages :number =0;
  currentPage:number = 1;
  pages :number[]=[];

  constructor(private Http: APIServiceService,private Calculations: CalculationsService) { }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.GetData();
  }

  ngOnInit(): void {
  }

  GetData(PageNumber: number = this.currentPage): void {
    this.currentPage = PageNumber;
    this.subs.sink =  this.Http.Get<BranchElement>(
      APIRoutes.GetListOfBranches,
      {},
      { searchCriteria: this.searchCriteria, pageNumber: this.currentPage.toString(), pageSize: this.pageSize.toString() }
    ).subscribe({
      next: (response: ApiResponse<BranchElement>) => {
        this._BranchElement = response.data;
        this.totalPages = response.totalData;
        this.pages = this.Calculations.CalcPagesCount(response.totalData,this.pageSize,this.currentPage)
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }

  NextPage(){
    debugger;
    let newPage = (this.totalPages < this.currentPage ? this.currentPage : this.currentPage +1);
    if(newPage > (Math.ceil(this.totalPages / this.pageSize)))
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
    this.currentPage= pageNumber;
    this.GetData();
  }


  //page urls
  BranchModify = PageRoutes.branchModify;
}
