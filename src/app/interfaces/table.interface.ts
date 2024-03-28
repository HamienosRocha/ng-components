export interface HeaderTable<T> {
  label: string;
  value: keyof T;
}