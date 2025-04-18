import React from 'react'

export default function TodoFilterTap() {
       
  return (
<div className="flex justify-center gap-2.5 mb-4">
  <button className="px-4 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
    오늘 할일
  </button>
  <button className="px-4 py-4 bg-gray-500 text-white rounded-lg transition-colors">
    완료한일
  </button>
</div>
  )
}
