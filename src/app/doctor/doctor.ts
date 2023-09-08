import { Consultation } from "../consultation/consultation";
import { DoctorInformation } from "./doctor-information";

export interface Doctor {
    id: number;
    firstName:string;
    lastName: string;
    proficiency: string;
    price: number;
    email: string;
    password: string;
    confirm: string;
    createdAt:Date;
    updatedAt:Date;
    doctorConsultations: Consultation [];
    doctorInformation: DoctorInformation
}