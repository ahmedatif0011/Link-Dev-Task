import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  constructor() { }

  CalcPagesCount(totalCount: number, pageSize: number, currentPage: number): number[] {
    const totalPages = Math.ceil(totalCount / pageSize);
    const pageRange = 2; // Number of pages to show before and after the current page
    let startPage: number, endPage: number;

    if (totalPages <= 5) {
      // If there are 5 or fewer pages, show all pages
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= pageRange) {
        // If current page is near the beginning
        startPage = 1;
        endPage = 5;
      } else if (currentPage + pageRange >= totalPages) {
        // If current page is near the end
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        // Normal case
        startPage = currentPage - pageRange;
        endPage = currentPage + pageRange;
      }
    }

    // Create an array of page numbers to display
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }


}
