<template>
   <div>
      <div class="min-h-screen flex items-center justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-10 rounded shadow-2xl w-1/3 text-center space-y-2">
               <h2 class="text-center font-bold text-3xl text-blue mb-3">Upload Profile</h2>
               <i class="fa-solid fa-user w-1/2 bg-gray-300 text-9xl p-5"></i>
               <p class=" text-2xl font-medium">Select Picture</p>
               <i class="fa-solid fa-upload bg-indigo-500 text-white w-24 p-2 text-2xl"></i>
               <router-link to="Tage"><p class="mt-2 underline text-lg">Skip</p></router-link>
            </div>   
      </div>
   </div>
</template>
<script>
export default{
   name:'UploadProfile',
   data: function(){
      return{

      }
   }
}
</script>