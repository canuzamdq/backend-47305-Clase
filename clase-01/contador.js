class Contador {
    constructor(nombre){
        this.nombre = nombre;
        this.counter = 0;
    }

    static globalCount = 0;

    getResponsable = ()=> {
        console.log(this.nombre);
    
    }

    contar = () => {
        this.counter++;
        Contador.globalCount++;
    }

    getCuentaIndividual = () => {
        console.log(this.counter);
    }

    getCuentaGlobal = () => {
        console.log(`Contador global: ${Contador.globalCount}`);
    }
     
}

let contador1 = new Contador('Martin');
let contador2 = new Contador('Euge');

contador1.getResponsable();
contador1.contar();
contador1.contar();
contador1.contar();
contador1.getCuentaIndividual();

contador2.getResponsable();
contador2.contar();
contador2.getCuentaIndividual();
contador2.getCuentaGlobal();