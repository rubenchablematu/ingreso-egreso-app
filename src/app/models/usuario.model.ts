export class Usuario {


    static fromFirebase({ uid, email,  nombre }: { uid:string, email: string, nombre: string}){

        return new Usuario( uid, nombre, email);
    }

    constructor(
        public uid:string | any,
        public nombre: string | any,
        public email: string | any
    ){}
}