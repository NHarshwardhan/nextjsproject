'use client';
import { useState } from 'react';

export default function ClientComponent({ initialData }) {
  const [data, setData] = useState(initialData);

  return (
    <div>
      <h2>Client Data</h2>
      <ul>{data.map(post => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
}