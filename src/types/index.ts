export type ResponseTemplate<T> = {
  data: T;
  error: string[] | null;
  message: string[] | null;
};
