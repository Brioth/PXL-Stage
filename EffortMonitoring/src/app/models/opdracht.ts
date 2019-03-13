export enum OpdrachtType{
    vast,
    variabel
}

export class Opdracht {
    id: number;
    beschrijving: string;
    type: OpdrachtType;
    effort: number;
}