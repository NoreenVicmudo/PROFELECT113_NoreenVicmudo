export async function fetchRandomJoke() {
  try {
    const res = await fetch('https://api.jokes.one/jod'); // Correct API endpoint
    if (!res.ok) {
      throw new Error(`Failed to fetch joke, ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch joke:', error.message);
    throw error;
  }
}
