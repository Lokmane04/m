import { CategoriesTypes } from "./Categories";
export type TaskFormTypes = {
  title: string;
  description?: string;
  date: Date;
  tags: CategoriesTypes;
};
export type TasksFormTypes = {
  tasks: TaskFormTypes[] | [];
};
