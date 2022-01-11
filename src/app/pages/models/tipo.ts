export class Tipo{

    static tipoJson(obj: any){
        return new Tipo(
            obj['id_tipo'],
            obj['name_tipo'],
            obj['create_at']
        );
    }

    constructor(
        public id_tipo: number,
        public name_tipo: string,
        public create_at: Date,
    ){}
}