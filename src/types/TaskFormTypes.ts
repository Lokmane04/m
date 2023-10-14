import { CategoriesTypes } from "./Categories";
export type TaskFormTypes = {
  title: string;
  description?: string;
  source?: URL | "";
  date: Date;
  categories: CategoriesTypes;
};
export type TasksFormTypes = {
  tasks: TaskFormTypes[] | [];
};

export const InitialFormValues: TaskFormTypes = {
  title: "",
  description: "",
  source: "",
  date: new Date(),
  categories: {
    tags: "optional",
  },
};
