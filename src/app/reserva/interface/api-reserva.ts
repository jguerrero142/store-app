import { ApiTicket } from './';
export interface ApiReserva {

    id_pedido?: number,
    id_user?: number,
    valor?: number,
    created_at?: Date,
    value_pedido?: boolean,
    servicio?: boolean,
    metodo_pago?: number,
    estado_valor?: number,
    pedido_estado?: number,
    name?: string,
    user_update?: number,
    ticket?: ApiTicket [],
}