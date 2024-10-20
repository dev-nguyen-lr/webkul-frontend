import React, { useState } from 'react'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = ['企業情報', 'サロン', 'スタッフ']

  return (
    <div className="border-b border-gray-300">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`min-w-[20%] py-2 px-6 focus:outline-none text-center ${
              activeTab === index
                ? 'border-b-4 border-black bg-white text-black'
                : 'bg-gray-800 text-white'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tabs
