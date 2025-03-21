globalThis.process ??= {}; globalThis.process.env ??= {};
import { s as supabase } from '../../chunks/supabase_BaUhCRiX.mjs';
export { renderers } from '../../renderers.mjs';

async function post({ request }) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.url || !data.description || !data.category_id || !data.email) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Generate a slug from the name
    const slug = data.name
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-");

    // Insert into the pending_resources table (for moderation)
    const { error } = await supabase.from("pending_resources").insert({
      name: data.name,
      slug: slug,
      url: data.url,
      description: data.description,
      category_id: data.category_id,
      image_url: data.image_url || null,
      tags: data.tags || null,
      pricing: data.pricing || "Free",
      submitter_email: data.email,
    });

    if (error) {
      throw error
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error submitting resource:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
