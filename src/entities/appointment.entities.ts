export class Appointment {
  id: string;
  id_patient: string;
  id_professional: string;
  date: Date;
  status: boolean;
  type: string;
  payment: boolean;
  in_person: boolean;
  multiple_users: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
