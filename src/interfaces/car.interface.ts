// Una interface es una declaracion de una propiedad y tipo de dato
export interface Car {
  type: "Automobiles" | "Trucks" | "Pick-up";
  model: string;
  color: string;
  cylinder: string;
  gas: "Gasoline" | "Electric" | "Diesel";
  descripcion: string;
  price: number;
}
