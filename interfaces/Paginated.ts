export interface IPaginatedList<T> {
  totalCount: number,
  pages: number,
  data: T[]
}
