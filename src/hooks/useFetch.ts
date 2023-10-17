import { supabase } from "../utils/supabase/supabase.utils";
export const useFetchData = async () => {
  try {
    //passing the returned value from this function to the context

    const { data: tasks, error } = await supabase.from("tasks").select("*");
    return { tasks, error };
  } catch {}
};
