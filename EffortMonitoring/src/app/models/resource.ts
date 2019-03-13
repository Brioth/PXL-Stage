import { Opdracht } from "./opdracht";

export class Resource {
    id: number;
    naam: string;
    maxEffort: number;
    opdrachten: Opdracht[];
}