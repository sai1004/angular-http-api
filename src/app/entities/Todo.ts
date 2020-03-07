export interface Todo {
  id: number;
  title: string;
  description: string;
  show: boolean;
  done?: "yes" | "nope";
}
