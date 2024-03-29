import React from 'react'

const Test = () => {
  return (
    <div>
   {/* <div className="w-full min-h-screen bg-zinc-900 text-white py-5 flex flex-col items-center justify-center">
    <div className="flex flex-col items-center gap-5 px-4">
       <form className="w-full">
        <input className="px-3 mt-2 py-2 border-2 border-zinc-800 rounded-md block w-full bg-zinc-900" type="text" placeholder="username" name="username"></input>
        <input className="px-3 mt-2 py-2 border-2 border-zinc-800 rounded-md block w-full bg-zinc-900" type="text" placeholder="password" name="password"></input>
        <input className="w-full bg-blue-500 px-3 py-3 rounded-md mt-2" type="submit" value="Log In"></input>
       </form>
    </div>
   </div> */}

<div class="w-full min-h-screen bg-zinc-900 text-white py-5">
    <div class="w-full px-4 flex items-center justify-between">
      <img class="w-1/4" src="/images/logo.png" alt=""></img>
      <div class="icons -mt-2 flex gap-5 items-center">
        <i class="text-[1.4rem] ri-heart-3-line"></i>
        <i class="text-[1.4rem] ri-messenger-line"></i>
      </div>
    </div>
    <div class="story px-3 flex gap-3 overflow-auto mt-5">
      <div class="circle flex-shrink-0">
        <div
          class="gradient w-[18vw] h-[18vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center">
          <div class="inner w-[92%] h-[92%] rounded-full overflow-hidden">
            <img class="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""></img>
          </div>
        </div>
      </div>
      <div class="circle flex-shrink-0">
        <div
          class="gradient w-[18vw] h-[18vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center">
          <div class="inner w-[92%] h-[92%] rounded-full overflow-hidden">
            {/* <img class="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""> */}
          </div>
        </div>
      </div>
      <div class="circle flex-shrink-0">
        <div
          class="gradient w-[18vw] h-[18vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center">
          <div class="inner w-[92%] h-[92%] rounded-full overflow-hidden">
            <img class="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""></img>
          </div>
        </div>
      </div>
      <div class="circle flex-shrink-0">
        <div
          class="gradient w-[18vw] h-[18vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center">
          <div class="inner w-[92%] h-[92%] rounded-full overflow-hidden">
            {/* <img class="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""> */}
          </div>
        </div>
      </div>
      <div class="circle flex-shrink-0">
        <div
          class="gradient w-[18vw] h-[18vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center">
          <div class="inner w-[92%] h-[92%] rounded-full overflow-hidden">
            {/* <img class="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""> */}
          </div>
        </div>
      </div>
      <div class="circle flex-shrink-0">
        <div
          class="gradient w-[18vw] h-[18vw] bg-sky-100 rounded-full bg-gradient-to-r from-purple-700 to-orange-500 flex items-center justify-center">
          <div class="inner w-[92%] h-[92%] rounded-full overflow-hidden">
            {/* <img class="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""> */}
          </div>
        </div>
      </div>
    </div>
    <div class="posts mb-20">
      <div class="post mt-10 w-full min-h-[50vh]">
        <div class="title px-4 flex items-center gap-2">
          <div class="w-[8vw] h-[8vw] bg-sky-100 rounded-full"></div>
          <h4 class="text-sm">someusername</h4>
          <h6 class="text-xs opacity-30">1d</h6>
        </div>
        <div class="w-full h-96 mt-4 bg-sky-100"></div>
        <div class="options w-full px-4 flex justify-between items-center text-[1.4rem]">
          <div class="flex gap-3 mt-2">
            <i class="ri-heart-3-line"></i>
            <i class="ri-chat-3-line"></i>
            <i class="ri-share-circle-line"></i>
          </div>
          <i class="ri-bookmark-line"></i>
        </div>
        <h3 class="px-4 mt-2 text-sm leading-none tracking-tight">23,332 likes</h3>
        <h2 class="text-white font-light text-sm mt-2"><span class="font-semibold pl-4 pr-2">someusername</span>some
          caption with details.</h2>
      </div>
      <div class="post mt-10 w-full min-h-[50vh]">
        <div class="title px-4 flex items-center gap-2">
          <div class="w-[8vw] h-[8vw] bg-sky-100 rounded-full"></div>
          <h4 class="text-sm">someusername</h4>
          <h6 class="text-xs opacity-30">1d</h6>
        </div>
        <div class="w-full h-96 mt-4 bg-sky-100"></div>
        <div class="options w-full px-4 flex justify-between items-center text-[1.4rem]">
          <div class="flex gap-3 mt-2">
            <i class="ri-heart-3-line"></i>
            <i class="ri-chat-3-line"></i>
            <i class="ri-share-circle-line"></i>
          </div>
          <i class="ri-bookmark-line"></i>
        </div>
        <h3 class="px-4 mt-2 text-sm leading-none tracking-tight">23,332 likes</h3>
        <h2 class="text-white font-light text-sm mt-2"><span class="font-semibold pl-4 pr-2">someusername</span>some
          caption with details.</h2>
      </div>
    </div>
  </div>


    </div>
  )
}

export default Test