import { s as supabase } from '../../chunks/supabase_DplbVH3Z.mjs';
export { renderers } from '../../renderers.mjs';

async function post({ request }) {
  try {
    const { id, action } = await request.json();

    if (!id || !["approve", "reject"].includes(action)) {
      return new Response(JSON.stringify({ error: "Invalid parameters" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    if (action === "approve") {
      // Get the pending resource
      const { data: pendingResource, error: fetchError } = await supabase
        .from("pending_resources")
        .select("*")
        .eq("id", id)
        .single();

      if (fetchError) {
        throw fetchError
      }

      // Insert into the resources table
      const { error: insertError } = await supabase.from("resources").insert({
        name: pendingResource.name,
        slug: pendingResource.slug,
        url: pendingResource.url,
        description: pendingResource.description,
        category_id: pendingResource.category_id,
        image_url: pendingResource.image_url,
        tags: pendingResource.tags,
        pricing: pendingResource.pricing,
      });

      if (insertError) {
        throw insertError
      }

      // Update the pending resource status
      const { error: updateError } = await supabase
        .from("pending_resources")
        .update({ status: "approved" })
        .eq("id", id);

      if (updateError) {
        throw updateError
      }
    } else if (action === "reject") {
      // Update the pending resource status to rejected
      const { error: updateError } = await supabase
        .from("pending_resources")
        .update({ status: "rejected" })
        .eq("id", id);

      if (updateError) {
        throw updateError
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error processing resource:", error);
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
