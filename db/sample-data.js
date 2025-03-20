// This file contains sample data to populate your database for testing
// You can run this file with Node.js after setting up your database schema

import { createClient } from "@supabase/supabase-js"
import dotenv from "dotenv"

dotenv.config()

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL
const supabaseKey = process.env.PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function seedDatabase() {
  console.log("Seeding database with sample data...")

  // Sample categories
  const categories = [
    {
      name: "UI Components",
      slug: "ui-components",
      description: "Pre-built UI components and libraries",
    },
    {
      name: "Design Systems",
      slug: "design-systems",
      description: "Complete design systems and guidelines",
    },
    {
      name: "Icons",
      slug: "icons",
      description: "Icon sets and libraries",
    },
    {
      name: "Illustrations",
      slug: "illustrations",
      description: "Illustration libraries and assets",
    },
    {
      name: "Fonts",
      slug: "fonts",
      description: "Typography and font resources",
    },
  ]

  // Insert categories
  const { data: categoriesData, error: categoriesError } = await supabase
    .from("categories")
    .upsert(categories, { onConflict: "slug" })

  if (categoriesError) {
    console.error("Error inserting categories:", categoriesError)
    return
  }

  console.log("Categories inserted successfully")

  // Sample resources
  const resources = [
    {
      name: "Tailwind CSS",
      slug: "tailwind-css",
      url: "https://tailwindcss.com",
      description: "A utility-first CSS framework for rapidly building custom designs.",
      image_url: "https://tailwindcss.com/img/card-top.jpg",
      category_id: 1, // UI Components
      tags: "CSS, Framework, Utility",
      pricing: "Free",
    },
    {
      name: "Figma",
      slug: "figma",
      url: "https://figma.com",
      description: "A collaborative interface design tool.",
      image_url:
        "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format",
      category_id: 2, // Design Systems
      tags: "Design, Collaboration, Prototyping",
      pricing: "Freemium",
    },
    {
      name: "Heroicons",
      slug: "heroicons",
      url: "https://heroicons.com",
      description: "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",
      image_url: "https://heroicons.com/social-card.jpg",
      category_id: 3, // Icons
      tags: "SVG, Icons, Open Source",
      pricing: "Free",
    },
    {
      name: "unDraw",
      slug: "undraw",
      url: "https://undraw.co",
      description: "Open-source illustrations for any idea you can imagine and create.",
      image_url: "https://undraw.co/illustrations/undraw_design_components_9vy6.svg",
      category_id: 4, // Illustrations
      tags: "SVG, Illustrations, Open Source",
      pricing: "Free",
    },
    {
      name: "Google Fonts",
      slug: "google-fonts",
      url: "https://fonts.google.com",
      description: "Making the web more beautiful, fast, and open through great typography.",
      image_url: "https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/opengraph_color.png",
      category_id: 5, // Fonts
      tags: "Typography, Fonts, Web",
      pricing: "Free",
    },
  ]

  // Insert resources
  const { data: resourcesData, error: resourcesError } = await supabase
    .from("resources")
    .upsert(resources, { onConflict: "slug" })

  if (resourcesError) {
    console.error("Error inserting resources:", resourcesError)
    return
  }

  console.log("Resources inserted successfully")

  // Sample ratings
  const ratings = [
    {
      resource_id: 1, // Tailwind CSS
      user_email: "user1@example.com",
      rating: 5,
      comment: "Absolutely love Tailwind CSS! It has completely changed how I approach CSS.",
    },
    {
      resource_id: 1, // Tailwind CSS
      user_email: "user2@example.com",
      rating: 4,
      comment: "Great framework, but the learning curve can be steep for beginners.",
    },
    {
      resource_id: 2, // Figma
      user_email: "user1@example.com",
      rating: 5,
      comment: "Figma has revolutionized our design workflow. The collaboration features are amazing!",
    },
    {
      resource_id: 3, // Heroicons
      user_email: "user3@example.com",
      rating: 4,
      comment: "Beautiful icons that work perfectly with Tailwind.",
    },
  ]

  // Insert ratings
  const { data: ratingsData, error: ratingsError } = await supabase.from("ratings").upsert(ratings)

  if (ratingsError) {
    console.error("Error inserting ratings:", ratingsError)
    return
  }

  console.log("Ratings inserted successfully")

  // Update average ratings
  for (const resource of resources) {
    const { data: resourceRatings, error: fetchError } = await supabase
      .from("ratings")
      .select("rating")
      .eq("resource_id", resource.id)

    if (fetchError) {
      console.error(`Error fetching ratings for resource ${resource.id}:`, fetchError)
      continue
    }

    if (resourceRatings && resourceRatings.length > 0) {
      const totalRatings = resourceRatings.length
      const averageRating = resourceRatings.reduce((sum, r) => sum + r.rating, 0) / totalRatings

      const { error: updateError } = await supabase
        .from("resources")
        .update({
          average_rating: averageRating,
          ratings_count: totalRatings,
        })
        .eq("id", resource.id)

      if (updateError) {
        console.error(`Error updating average rating for resource ${resource.id}:`, updateError)
      }
    }
  }

  console.log("Database seeding completed successfully!")
}

seedDatabase().catch(console.error)

