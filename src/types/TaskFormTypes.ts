import { CategoriesTypes } from "./Categories";
export type TaskFormTypes = {
  id: number;
  title: string;
  description?: string;
  source?: "";
  createdIn: string;
  category: string;
};
export type TasksFormTypes = {
  tasks: TaskFormTypes[] | [];
};

export const InitialFormValues: TaskFormTypes = {
  id: Math.random() * 10000,
  title: "",
  description: "",
  source: "",
  createdIn: `${new Date()}`,
  category: "optional",
};
