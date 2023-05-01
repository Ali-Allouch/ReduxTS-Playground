interface IProduct {
  Id?: number
  Name: string
  Description: string
  Picture: string
  Price: string
  CategoryId: number
  CreatedBy?: number
  ModifiedBy?: number | null
  CreationDate?: number
  ModifiedDate?: number | null
}

export default IProduct
