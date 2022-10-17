// Una interface es una declaracion de una propiedad y tipo de dato
export interface Car {
  type: "Automobiles" | "Trucks" | "Pick-up" | "Wagon";
  model: string;
  year: number;
  color: string;
  cylinder: number;
  gas: "Gasoline" | "Electric" | "Diesel" | "Hybrid";
  descripcion: string;
  price: number;
}
