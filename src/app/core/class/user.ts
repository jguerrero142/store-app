export class User {


    static userJson(obj: any){
        return new User(
            obj['id_user'],
            obj['sub'],
            obj['name'],
            obj['picture'],
            obj['email'],
            obj['id_role'],
            obj['role_user'],
            obj['contacto'],
            obj['name_enterprise'],
            obj['id_enterprise'],
        );
    }

    constructor(
        public id_user?: number,
        public sub?: string,
        public name?: string,
        public picture?: string,
        public email?: string,
        public id_role?: number,
        public role_user?: string,
        public contacto?:string,
        public name_enterprise?: string,
        public id_enterprise?: string,
    ){ }
    
}