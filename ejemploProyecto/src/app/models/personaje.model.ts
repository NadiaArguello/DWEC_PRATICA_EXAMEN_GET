export interface Personaje{
    id:number; //CUIDADO!!! En algunas páginas el id es un número, pero tratado como un string
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}