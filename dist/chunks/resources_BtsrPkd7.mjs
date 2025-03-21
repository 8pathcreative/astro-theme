import { s as supabase } from './supabase_DplbVH3Z.mjs';

async function getAllResources() {
  const { data, error } = await supabase
    .from("resources")
    .select("*, categories(id, name, slug), average_rating, ratings_count")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching resources:", error);
    return []
  }

  return data
}

async function getResourcesByCategory(categorySlug) {
  const { data, error } = await supabase
    .from("resources")
    .select("*, categories!inner(id, name, slug), average_rating, ratings_count")
    .eq("categories.slug", categorySlug)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching resources by category:", error);
    return []
  }

  return data
}

async function getAllCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("*, resources(count)")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error fetching categories:", error);
    return []
  }

  return data
}

export { getAllCategories as a, getAllResources as b, getResourcesByCategory as g };
