import React from 'react'
import { GoLocation } from 'react-icons/go'
import { useSystem } from '../../context/SystemContext'

const Events = () => {
  const { events } = useSystem()

  const eventCardStyle = 'w-[258px] h-[270px] min-w-[258px] min-h-[270px] rounded-sm bg-blue-500 text-white flex flex-col justify-between p-5'


  return (
    <div className='my-6 mx-12'>
      <h1 className='text-2xl font-bold py-2'>Lastest events...</h1>
      <div className='flex flex-row w-full gap-2 overflow-y-auto py-2'>

        {
          events.map((sched, idx) => (
            <div key={idx} className={eventCardStyle}>
              <div>
                <h3 className='text-2xl font-semibold'>{ sched.title }</h3>
                <p className='text-xs'>{ sched.when }</p>
              </div>
              <p className='h-[53%] overflow-y-auto text-sm'>{ sched.description }</p>
              <div className='flex items-center gap-1'>
                <p className='text-sm'><GoLocation /></p>
                <p className='text-xs italic font-medium'>{ sched.campus }</p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Events