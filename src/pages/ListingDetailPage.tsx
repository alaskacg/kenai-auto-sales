import { useParams } from 'react-router-dom'

export default function ListingDetailPage() {
  const { id } = useParams()

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Vehicle Details</h1>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <p className="text-gray-600">Loading vehicle listing {id}...</p>
        <p className="text-sm text-gray-500 mt-4">Full vehicle details will display here</p>
      </div>
    </div>
  )
}
