// app/blog/[slug]/page.tsx
export default async function BlogPost({ params }) {
  const now = new Date().toLocaleTimeString();
  console.log('⏰ Blog rendered at:', now);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`, {
    cache: 'force-cache', // default behavior
  });
  const post = await res.json();

  return (
    <main>
      <h1>📝 Blog Post</h1>
      <p><strong>Rendered at:</strong> {now}</p>
      <h2>{post.title}</h2>
      <article>{post.body}</article>
    </main>
  );
}
