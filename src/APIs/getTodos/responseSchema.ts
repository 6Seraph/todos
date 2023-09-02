export default interface ITodosResponse {
  readonly userId: string;
  readonly id: string;
  readonly title: string;
  readonly completed: boolean;
}
