import React from 'react'

type Props = {}

const Exchange = (props: Props) => {
  return (
    <div>
                 
    <div className="lg:w-1/4 bg-white rounded shadow p-6">
    <h2 className="text-lg font-semibold border-b pb-2 mb-4">Live Exchange Rates</h2>
    <div className="space-y-2">
        <div className="flex justify-between">
        <span>USD/EUR</span><span className="text-blue-600 font-medium">0.92</span>
        </div>
        <div className="flex justify-between">
        <span>USD/GBP</span><span className="text-blue-600 font-medium">0.79</span>
        </div>
        <div className="flex justify-between">
        <span>USD/JPY</span><span className="text-blue-600 font-medium">151.42</span>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Exchange