import { Ticket } from ".";

export class Factura {

    static facturaJson(obj: any){
        return new Factura(
            obj['id_factura'],
            obj['id_user'],
            obj['id_pedido'],
            obj['valor'],
            obj['id_metodo'],
            obj['estado_valor'],
            obj['estado_factura'],
            obj['user_update'],
            obj['create_at'],
            obj['update_at'],
            obj['observacion'],
            obj['name'],
        );
    }

    constructor(
        public id_factura: number,
        public id_user: number,
        public id_pedido: number,
        public valor: number,
        public id_metodo?: number,
        public estado_valor?: number,
        public estado_factura?: number,
        public user_update?: number,
        public create_at?: string,
        public update_at?: string,
        public observacion?: string,
        public name?: string,
        public ticket?: Ticket[],
    ){
        this.ticket = []
    }
}