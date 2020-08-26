// clases

// interfaces

// p.o.o

export interface Ordenable {
  ordernar(): void;
}

//abstract
export abstract class BuscadorBase implements Ordenable {

  // atributo
  protected clave: string;
  private id: number;
  private flag: boolean;
  private padre: any;

  // contructor
  public constructor(
    clave: string
  ) {
    this.clave = clave;
  }

  ordernar(): void {
    console.log('ordenando...');
  }

  // métodos
  public getClave(): string {
    return this.clave;
  }

  // método abstracto
  protected abstract getName(): string;

  public buscar(): any[] {
    const res = {
      id: 1,
      titulo: 'hp y la pp..'
    };

    let array = [];
    array.push(res);
    return array;
  }
}

// herencia de clases
export class BuscadorLibro extends BuscadorBase {

  protected getName(): string {
    return 'buscador de libros';
  }

}

let buscador = new BuscadorLibro('harry potter');

let resultados = buscador.buscar();

resultados.forEach(element => {
  console.log(element);
});

