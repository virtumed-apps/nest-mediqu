export class Appointment {
  id: string;
  id_patient: string;
  id_professional: string;
  date: string;
  status: boolean;
  type: string;
  payment: boolean;
  in_person: boolean;
  multiple_users: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
