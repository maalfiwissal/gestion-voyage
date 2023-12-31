import { Time } from "@angular/common";

export class Vol {

  numVol !: number;
  dateDepart !: Date;
  heureDepart !: Time;
  dateArrive !: Date;
  heureArrive !: Time;
  avion !: String;
  prix !: number;
  etat !: boolean;
  nbrePlace !: number;
  nbrePlaceRestant !: number;
  villeDepart !: String;
  villeArrive !: String;

}
