import React from 'react'

 const TimeBody=()=>  {
    var month1 = ['01','02','03','04','05','06','07','08','09','10','11','12']
    var date = {
        day: new Date().getDate(),
        month: month1[new Date().getMonth()],
        year: new Date().getFullYear(),
    }
    var time = {
        hour: new Date().getHours().toLocaleString(),
        minute: new Date().getMinutes().toLocaleString(),
        second : new Date().getSeconds().toLocaleString(),
    }
  return (
    <div className='mt-9 h-[60vh] w-[80vw] bg-yellow-200 '>
        <p className='text-center'><span className='text-4xl font-bold text-red-800'> Today is </span><span className='text-4xl font-semibold text-black text'>{date.day}/{date.month}/{date.year} </span> </p>
        <p className='pl-[40vw] font-bold text-5xl text-red-900 pt-[20vh] '>{time.hour}:{time.minute}:{time.second} </p>
    </div>
  )
}
export default TimeBody

