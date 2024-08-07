import { environment } from "./environment";

export const APIRoutes = {
  GetListOfBranches: environment.API_URL_Base + "Branches/GetListOfBranches",
  AddBranch : environment.API_URL_Base + "Branches/GetListOfBranches",
  updateBranch : environment.API_URL_Base+ "Branches/updateBranch",
  deleteBranch : environment.API_URL_Base + "Branches/deleteBranch",
};

