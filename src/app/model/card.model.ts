export default class CardModel{
    id!:number;
    name!:string;
    src!:string;
    alt!:string;
    descriptif!:string;
    titre!:string;

    constructor(
        id:number,
        name:string,
        src:string,
        alt:string,
        descriptif:string,
        titre:string
    ){
        this.id = id;
        this.name = name;
        this.src = src;
        this.alt = alt;
        this.descriptif = descriptif;
        this.titre = titre;

    }
}