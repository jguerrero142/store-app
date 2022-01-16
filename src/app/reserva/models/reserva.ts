import { Ticket } from './ticket';


export class Reserva {

        static reservaJson(obj: any){
                return new Reserva(
                    obj['id_pedido'],
                    obj['id_user'],
                    obj['valor'],
                    obj['created_at'],
                    obj['value_pedido'],
                    obj['servicio'],
                    obj['metodo_pago'],
                    obj['estado_valor'],
                    obj['pedido_estado'],
                    obj['name'],
                    obj['user_update'],
                    obj['user_update'],
                );
            }

    constructor(

        public id_pedido: number,
        public id_user: number,
        public valor: number,
        public created_at?: Date,
        public value_pedido?: boolean,
        public servicio?: boolean,
        public metodo_pago?: number,
        public estado_valor?: number,
        public pedido_estado?: number,
        public name?: string,
        public user_update?: number,
        public ticket?: Ticket[],
        ){
            this.ticket = []
        }
}