<template>
   <div>
      <div class="min-h-screen flex items-center justify-center bg-blue text-bluck flex-col">
         <div class="bg-white p-10 rounded shadow-2xl ">
            <div class=" flex flex-col space-y-3">
               <div class=" ">
                  <h2>Engineering</h2>
                  <div class=" flex gap-2">
                     <button class=" bg-indigo-600 py-2 px-3  flex  text-lg rounded-3xl text-white">Math Lab Engineering</button>
                     
                     <button class=" 
                     bg-indigo-600 py-2 px-3  
                     flex  text-lg rounded-3xl 
                     text-white">Data Engineering</button>
                     
                  </div>
               </div>
               <div>
                  <h2>Engineering</h2>
                  <div class=" flex gap-2">
                     <button class=" bg-indigo-600 p-2 w-24  text-lg rounded-3xl text-white">Math Lab</button>
                     <button class=" 
                     bg-indigo-600 py-2 px-3  
                     flex  text-lg rounded-3xl 
                     text-white">Programming</button>
                     <button class=" 
                     bg-indigo-600 py-2 px-3  
                     flex  text-lg rounded-3xl 
                     text-white">C++ </button>
                     
                  </div>
               </div>
                <div>
                  <h2>Engineering</h2>
                  <div class=" flex gap-2">
                     <button class=" bg-indigo-600 p-2 w-24  text-lg rounded-3xl text-white">Math Lab</button>
                     <button class=" 
                     bg-indigo-600 py-2 px-3  
                     flex  text-lg rounded-3xl 
                     text-white">calculus</button>
                     <button class=" 
                     bg-indigo-600 py-2 px-3  
                     flex  text-lg rounded-3xl 
                     text-white">Electromagnetic</button>
                  </div>
               </div>
            </div>
           <router-link to="followtage"><input type="submit" value="Next" class="w-full p-2  bg-indigo-600 text-white rounded-full text-xl mt-5 cursor-pointer"></router-link>
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