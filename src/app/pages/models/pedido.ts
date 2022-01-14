import { Producto } from ".";

export class Pedido{

    static pedidoJson(obj: any){
        return new Pedido(
            obj['id_user'],
            obj['name'],
            obj['estado_valor'],
            obj['id_pedido'],
            obj['created_at'],
            obj['pedido_estado'],
            obj['servicio'],
            obj['update_at'],
            obj['user_update'],
            obj['valor'],
            obj['value_pedido'],
        );
    }


    constructor( 
        public id_user?: number,
        public name?: string,
        public estado_valor?: number,
        public id_pedido?: number,
        public created_at?: string,
        public pedido_estado?: number,
        public servicio?:number,
        public update_at?: string,
        public user_update?: number,
        public valor?: number,
        public value_pedido?: number,
        public productos: Producto[] = []
        ){}
}