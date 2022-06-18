<template>
   <div>
      <div class="min-h-screen flex items-center bg-gray-100 justify-center bg-blue text-bluck flex-col">
         <div class="bg-white p-5 px-10 rounded-lg shadow-2xl w-1/3">
            <div class="flex justify-start items-start float-left mt-3">
                    <div>
                        <a href="" id="back5"><i class="fa-solid fa-arrow-left-long text-xl"></i></a>
                    </div>
               </div>
            <h2 class="text-center pr-5 text-indigo-600 font-bold text-blue mb-5 text-2xl">Select your favorite tags</h2>
            <div class=" flex flex-col gap-3 space-y-2 pl-8 mt-10">
               <div class="#"> 
                  <div class=" flex gap-2">
                     <button class=" bg-gray-300 hover:bg-gray-400 drop-shadow-xl py-2 px-3 flex text-md rounded-3xl text-black">Math Lab Engineering</button>                           
                     <button class=" bg-gray-300 hover:bg-gray-400 drop-shadow-xl py-2 px-3 flex text-md rounded-3xl text-black">Data Engineering</button> 
                  </div>
               </div>
               <div> 
                  <div class=" flex gap-2">
                     <button class=" bg-gray-300 hover:bg-gray-400 drop-shadow-xl p-2 w-24 text-md rounded-3xl text-black">Math Lab</button>
                     <button class=" bg-gray-300 hover:bg-gray-400 drop-shadow-xl py-2 px-3 flex text-md rounded-3xl text-black">Programming</button>
                     <button class=" bg-gray-300 hover:bg-gray-400 drop-shadow-xl py-2 px-3 flex text-lg rounded-3xl text-black">C++ </button>
                            
                  </div>
               </div>
               <div>
                  <div class=" flex gap-2">
                     <button class=" bg-gray-300 hover:bg-gray-400 drop-shadow-xl p-2 w-24  text-md rounded-3xl text-black">Java</button>
                     <button class=" bg-gray-300 hover:bg-gray-400 drop-shadow-xl py-2 px-3 flex text-md rounded-3xl text-black">calculus</button>
                     <button class=" bg-gray-300 hover:bg-gray-400 drop-shadow-xl py-2 px-3 flex text-md rounded-3xl text-black">Electromagnetic</button>
                   </div>
               </div>
            </div>   
           <!--Back and next-->  
                 <div class=" float-right mt-10 pr-5">
                    <router-link to="/Homepage">
                    <input type="submit" value="Continue" id="continue5" class=" w-20  h-7 rounded-md text-md text-white bg-indigo-600 cursor-pointer">
                    </router-link>
                </div>
            <!--****************-->
         </div>  
      </div>
   </div>
</template>
<script>
export default{
   name: 'Tage',
   data: function(){

   }
}
</script>