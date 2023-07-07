export type Vehicle = {
  ID: number;
  city_mpg?: number;
  class?: string;
  combination_mpg?: number;
  cylinders?: number;
  displacement?: number;
  drive?: string;
  fuel_type?: string;
  highway_mpg?: number;
  make: string;
  model: string;
  transmission?: string;
  year: number;
};

export type VehicleEdit = {
  id: number;
  make: string;
  model: string;
  year: number;
};
