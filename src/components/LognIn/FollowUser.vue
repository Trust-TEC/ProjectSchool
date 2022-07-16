<template>
   <div>
      <div class="min-h-screen flex items-center justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-10 rounded shadow-2xl ">
                  <h1 class=" text-center font-bold text-3xs">Top User </h1>
                     
                                 <div class="  bg-gray-100 rounded-lg  flex flex-rows items-center justify-between my-5 p-3">
                            <div class=" flex ">
                                <div class="shrink-0">
                                    <img class="h-16 w-16 rounded-full" :src="perlog" alt="ChitChat Logo">
                                </div>
                                <div class="">
                                    
                                    <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2">
                                        Jason Hander
                                    </h1>
                                    <p class="text-slate-500 text-sm pl-2">Teacher and Researcher</p>
                                </div>
                            </div>
                            <div>
                                <button class="w-24 p-2  bg-indigo-500 text-white rounded-full text-sm cursor-pointer">Follw</button>
                            </div>
                        </div>
                                 <div class="  bg-gray-100 rounded-lg  flex flex-rows items-center justify-between my-5 p-3">
                            <div class=" flex ">
                                <div class="shrink-0">
                                    <img class="h-16 w-16 rounded-full" :src="perlog" alt="ChitChat Logo">
                                </div>
                                <div class="">
                                    
                                    <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2">
                                        Jason Hander
                                    </h1>
                                    <p class="text-slate-500 text-sm pl-2">Teacher and Researcher</p>
                                </div>
                            </div>
                            <div>
                                <button class="w-24 p-2  bg-indigo-500 text-white rounded-full text-sm cursor-pointer">Follw</button>
                            </div>
                        </div>
                                 <div class="  bg-gray-100 rounded-lg  flex flex-rows items-center justify-between my-5 p-3">
                            <div class=" flex ">
                                <div class="shrink-0">
                                    <img class="h-16 w-16 rounded-full" :src="perlog" alt="ChitChat Logo">
                                </div>
                                <div class="">
                                    
                                    <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2">
                                        Jason Hander
                                    </h1>
                                    <p class="text-slate-500 text-sm pl-2">Teacher and Researcher</p>
                                </div>
                            </div>
                            <div>
                                <button class="w-24 p-2  bg-indigo-500 text-white rounded-full text-sm cursor-pointer">Follw</button>
                            </div>
                        </div>
                  <router-link to="Homepage"><input type="submit" value="Send" class="w-full p-2 bg-indigo-600 text-white rounded-full text-xl mt-5 cursor-pointer"></router-link>
            </div>  
        </div>
   </div>
</template>
<script>
export default{
   name: 'FollowUser',
   data: function(){
      return{
         perlog: 'https://pbs.twimg.com/profile_images/1247016785108447234/LEPENTy__400x400.jpg',
      }
   }
}
</script>