export type Person = {
  id: number;
  firstName: string;
  lastName: string;
};

export type CreatePerson = Omit<Person, 'id'>;
