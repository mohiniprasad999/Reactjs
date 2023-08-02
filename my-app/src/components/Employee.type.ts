export interface IEmployee {
  [x: string]: any;
  id: String;
  firstname: String;
  lastname: String;
  email: String;
}

export const dummyEmployeList: IEmployee[] = [
  {
    id: new Date().toJSON().toString(),
    firstname: "Dummy",
    lastname: "Dummy",
    email: "dummy@gmail.com",
  },
];

export enum PageEnum {
  list,
  add,
}
