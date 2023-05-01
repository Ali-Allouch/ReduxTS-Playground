interface IUser {
  Id?: number
  Name: string
  Email: string
  Password: string
  CreatedAt?: number
  CreatedBy?: number
  ModifiedAt?: number | null
  ModifiedBy?: number | null
}

export default IUser
