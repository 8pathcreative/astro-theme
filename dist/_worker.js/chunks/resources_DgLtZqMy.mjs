globalThis.process ??= {}; globalThis.process.env ??= {};
// import { supabase } from './supabase';

// Mock data for resources
const mockResources = [
  {
    id: 1,
    title: "Sample Resource 1",
    description: "This is a placeholder resource",
    url: "https://example.com",
    image: "https://via.placeholder.com/600x400",
    category_id: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: "Sample Resource 2",
    description: "Another placeholder resource",
    url: "https://example.com",
    image: "https://via.placeholder.com/600x400",
    category_id: 2,
    created_at: new Date().toISOString()
  }
];

// Mock data for categories
const mockCategories = [
  { id: 1, name: "Design", slug: "design", color: "#FF5A5F" },
  { id: 2, name: "Development", slug: "development", color: "#3490DC" },
  { id: 3, name: "Marketing", slug: "marketing", color: "#38C172" }
];

async function getAllResources() {
  // Comment out Supabase code
  // try {
  //   const { data, error } = await supabase
  //     .from('resources')
  //     .select('*')
  //     .order('created_at', { ascending: false });
  //
  //   if (error) throw error;
  //   return data || [];
  // } catch (error) {
  //   console.error('Error fetching resources:', error);
  //   return [];
  // }
  
  // Return mock data instead
  return mockResources;
}

async function getResourcesByCategory(categorySlug) {
  const { data, error } = await supabase
    .from("resources")
    .select("*, categories!inner(id, name, slug), average_rating, ratings_count")
    .eq("categories.slug", categorySlug)
    .order("created_at", { ascending: false }); // CORRECT METHOD: .order()

  if (error) {
    console.error("Error fetching resources by category:", error);
    return []
  }

  return data
}

async function getAllCategories() {
  // Comment out Supabase code
  // try {
  //   const { data, error } = await supabase
  //     .from('categories')
  //     .select('*')
  //     .order('name');
  //
  //   if (error) throw error;
  //   return data || [];
  // } catch (error) {
  //   console.error('Error fetching categories:', error);
  //   return [];
  // }
  
  // Return mock data instead
  return mockCategories;
}

// Add any other functions that might be using Supabase
// with similar mock data

export { getAllCategories as a, getAllResources as b, getResourcesByCategory as g };
