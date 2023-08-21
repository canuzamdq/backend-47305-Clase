class TicketManager {
    #precioBaseDeGanancia = 0.15;
    #newID;

    constructor() {
        this.eventos = [];
    }

    getEventos() {
        console.log(this.eventos);
    }

    agregarEvento(nombre, lugar, precio, capacidad=50, fecha= new Date()) {
        if (this.eventos.length == 0) {
            this.#newID = 1;
        } else {
            this.#newID = this.eventos[this.eventos.length-1].id+1;
        }
        const evento = {
            id : this.#newID,
            nombre, 
            lugar,
            precio : precio + (precio * this.#precioBaseDeGanancia),
            capacidad,
            fecha,
            participantes : []
        }

        this.eventos.push(evento);
    }

    agregarUsuario(idEvento, idUsuario){
        const eventoExist = this.eventos.find((elem)=> elem.id === idEvento);
        if (eventoExist) {
            const participanteExist = eventoExist.participantes.find((elem)=> elem === idUsuario)
            if (participanteExist) {
                console.log("El usuario ya se encuentra registrado en el evento");
            } else {
                eventoExist.participantes.push(idUsuario);
            }
           
        } else {
            console.log ("El evento indicado no existe");
        }
    }

    ponerEventoEnGira(idEvento, localidad, nuevaFecha= new Date()){
        const eventoExist = this.eventos.find((elem)=> elem.id === idEvento);
        if (eventoExist) {
                this.#newID = this.eventos[this.eventos.length-1].id+1;
                const eventoEnGira = {
                    ...eventoExist,
                    lugar : localidad ?? this.evento.lugar,
                    fecha: nuevaFecha ?? this.evento.fecha,
                    id : this.#newID,
                    participantes : []
                }

                this.eventos.push(eventoEnGira);
            } else {
                console.log("No se encontró evento con el ID indicado.")
            }

        }
    }



const eventos = new TicketManager();
eventos.agregarEvento("Recital", "Mar del plata", 100, 60);
eventos.agregarEvento("Cine", "Balcarce", 100, 60);
eventos.agregarUsuario(1,2);
eventos.agregarUsuario(1,44);
eventos.agregarUsuario(1,2);
eventos.ponerEventoEnGira(1,"Pinamar,", new Date(2023-12-10));

eventos.getEventos();