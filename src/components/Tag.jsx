export default function Tag({ children }) {
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$,', children)
  if (children == 'Mediafire') {
    return (
      <div className="bg-blue-600 rounded-full h-fit text-white text-[10px] p-1 px-2">
        {children + ' yo'}
      </div>
    )
  }
  if (children === 'Mega')
    return (
      <div className="bg-red-600 rounded-full h-fit text-white text-xs p-1 px-2">
        {children}
      </div>
    )
  if (children === 'eroge')
    return (
      <div className="bg-pink-600 rounded-full h-fit text-white text-xs p-1 px-2">
        {children}
      </div>
    )

  if (children === 'romance')
    return (
      <div className="bg-fuchsia-500 rounded-full h-fit text-white text-xs p-1 px-2">
        {children}
      </div>
    )

  if (children === 'novela cinetica')
    return (
      <div className="bg-yellow-500 rounded-full h-fit text-white text-xs p-1 px-2">
        {children}
      </div>
    )
  if (children === 'sin h')
    return (
      <div className="bg-green-500 rounded-full h-fit text-white text-xs p-1 px-2">
        {children}
      </div>
    )

  return (
    <div className="bg-slate-400/10 rounded-full h-fit text-white text-xs p-1 px-2">
      {children}
    </div>
  )
}
