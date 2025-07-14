'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function SearchPage() {
  const router = useRouter()           // To change URL programmatically
  const searchParams = useSearchParams()   // To read current query parameters
  const q = searchParams.get('q') || ''    // Get the value of ?q= from URL or empty string

  const handleSearch = () => {
    // Change URL to /search?q=laptop without full page reload
    router.replace('/search?q=laptop', { scroll: false })
  }

  return (
    <main>
      <h1>Search Page</h1>
      <p>Current query: {q}</p>
      <button onClick={handleSearch}>Search for Laptop</button>
    </main>
  )
}
