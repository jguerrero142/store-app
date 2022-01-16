export class MetodoPago {

    static metodoJson(obj: any){
        return new MetodoPago(
            obj['id_metodo'],
            obj['metodo_name'],
            obj['image']
        );
    }

    constructor(
        public id_metodo?: number,
        public metodo_name?: string,
        public image?: string,
    ){}
}