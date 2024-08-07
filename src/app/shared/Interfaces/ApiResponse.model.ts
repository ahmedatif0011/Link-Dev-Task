export interface ApiResponse<T> {
  result: number;
  data: T[];
  message?: string;
  totalData :number;
}
