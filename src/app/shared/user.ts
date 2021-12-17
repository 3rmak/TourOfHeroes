let _id = 1;

export class User {
  public id: number = _id;
  constructor(
    public username: string,
    public password: string,
    public role: string
  ) {
    _id++;
  }
}
