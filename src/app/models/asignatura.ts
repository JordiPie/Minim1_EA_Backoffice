import { ISchedule } from "./schedule";
import { IProfessor } from "./professor";

export interface IAsignatura {
    _id: string;
    name: string;
    schedule?: ISchedule[];
    professor?: IProfessor[];
}