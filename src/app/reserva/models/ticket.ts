export class Ticket{

    static ticketJson(obj: any){
        return new Ticket(
            obj['id_ticket'],
            obj['user_ticket'],
            obj['Producto'],
            obj['create_at'],
            obj['id_pedido'],
            obj['estado'],
            obj['name'],
            obj['valor'],
            obj['descripcion'],
            obj['image'],
            obj['producto_tipo'],
        );
    }

    constructor(
        public id_ticket?: number,
        public user_ticket?: number,
        public Producto?: number,
        public create_at?: Date,
        public id_pedido?: number,
        public estado?: true,
        public name?: string,
        public valor?: number,
        public descripcion?: string,
        public image?: string,
        public producto_tipo?: number,
    ){}
}