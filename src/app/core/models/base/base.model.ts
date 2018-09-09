export class Base<T>{
    
    id: string;
    created: Date;

    constructor(partial?: Partial<T>){
        Object.assign(this,partial);
    }

}