import { supabase } from "../../utils/supabase/supabase.utils";

const useGetCategories = async () => {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");
  return {
    categories,
    error,
  };
};

export default useGetCategories;
