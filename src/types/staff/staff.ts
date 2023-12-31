import { IPerson } from '../characters';

export interface IStaffData {
    person: IPerson;
    positions: string[];
}

export interface IStaffApiRes {
    data: IStaffData[];
}
