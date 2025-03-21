import { supabase } from './supabase';

export async function getAllResources() {
  try {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .orderBy('created_at', { ascending: false }); // Fixed: changed .order() to .orderBy()

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching resources:', error);
    return [];
  }
}

export async function getResourcesByCategory(categorySlug) {
  const { data, error } = await supabase
    .from("resources")
    .select("*, categories!inner(id, name, slug), average_rating, ratings_count")
    .eq("categories.slug", categorySlug)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching resources by category:", error)
    return []
  }

  return data
}

export async function getResourceBySlug(slug) {
  const { data, error } = await supabase
    .from("resources")
    .select("*, categories(id, name, slug), average_rating, ratings_count")
    .eq("slug", slug)
    .single()

  if (error) {
    console.error("Error fetching resource by slug:", error)
    return null
  }

  return data
}

export async function getAllCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("*, resources(count)")
    .order("name", { ascending: true })

  if (error) {
    console.error("Error fetching categories:", error)
    return []
  }

  return data
}

export async function searchResources(query) {
  const { data, error } = await supabase
    .from("resources")
    .select("*, categories(id, name, slug), average_rating, ratings_count")
    .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error searching resources:", error)
    return []
  }

  return data
}

