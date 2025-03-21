import { s as supabase } from '../../chunks/supabase_DplbVH3Z.mjs';
export { renderers } from '../../renderers.mjs';

async function post({ request }) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.resourceId || !data.rating || !data.email) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Check if user has already rated this resource
    const { data: existingRating, error: checkError } = await supabase
      .from("ratings")
      .select("id")
      .eq("resource_id", data.resourceId)
      .eq("user_email", data.email)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 means no rows returned, which is expected if user hasn't rated yet
      throw checkError
    }

    let ratingResult;

    if (existingRating) {
      // Update existing rating
      ratingResult = await supabase
        .from("ratings")
        .update({
          rating: Number.parseInt(data.rating),
          comment: data.comment || null,
        })
        .eq("id", existingRating.id);
    } else {
      // Insert new rating
      ratingResult = await supabase.from("ratings").insert({
        resource_id: data.resourceId,
        user_email: data.email,
        rating: Number.parseInt(data.rating),
        comment: data.comment || null,
      });
    }

    if (ratingResult.error) {
      throw ratingResult.error
    }

    // Update the average rating and count in the resources table
    const { data: ratingsData, error: ratingsError } = await supabase
      .from("ratings")
      .select("rating")
      .eq("resource_id", data.resourceId);

    if (ratingsError) {
      throw ratingsError
    }

    const totalRatings = ratingsData.length;
    const averageRating = totalRatings > 0 ? ratingsData.reduce((sum, r) => sum + r.rating, 0) / totalRatings : 0;

    const { error: updateError } = await supabase
      .from("resources")
      .update({
        average_rating: averageRating,
        ratings_count: totalRatings,
      })
      .eq("id", data.resourceId);

    if (updateError) {
      throw updateError
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error submitting rating:", error);
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
