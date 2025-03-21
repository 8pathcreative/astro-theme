globalThis.process ??= {}; globalThis.process.env ??= {};
const supabase = {
  from: () => ({
    select: () => ({
      order: () => ({ data: [], error: null })
    })
  })
};

export { supabase as s };
