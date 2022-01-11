export class Producto {

    static productoJson(obj: any){
        return new Producto(
            obj['id'],
            obj['name'],
            obj['valor'],
            obj['create_at'],
            obj['image'],
            obj['descripcion'],
            obj['producto_tipo'],
            obj['menu'],
        );
    }
    
    constructor(
        public id: number,
        public name: string,
        public valor: number,
        public create_at: Date,
        public image: string,
        public descripcion: string,
        public producto_tipo: number,
        public menu:boolean,
        ){}
}