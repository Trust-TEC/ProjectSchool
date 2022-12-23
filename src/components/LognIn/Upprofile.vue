<template>
   <div id="Upprofile">
      <div class="min-h-screen flex items-center bg-gray-100 justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-5 px-10 rounded-lg shadow-2xl w-1/3">
                <div class="flex justify-start items-start float-left mt-3">
                    <div>
                        <a href="" id="back5"><i class="fa-solid fa-arrow-left-long text-xl"></i></a>
                    </div>
               </div>
                <h2 class=" items-center pr-5 justify-center flex text-indigo-600 font-bold mb-5 text-2xl">Profile</h2>
                <div class=" justify-center flex mt-10">
                  <i class="fa-solid fa-circle-user text-9xl text-gray-500"></i>
               </div>
               <div class=" justify-center flex mt-10">
                     <label for="upprofile" class=" text-md pr-3"> <p>Input your profile picture here:</p></label>
                     <div> <a href="#">
                        <button class="h-8 w-8 border-2 border-indigo-600 hover:bg-gray-200 rounded-md"><i class="fa-solid fa-upload text-center text-indigo-600"></i></button>
                        </a>
                     </div>
               </div>
               <!--Back and next-->  
                 <div class=" float-right mt-10 pr-5">
                    <router-link to="/followtage">
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
   name:'UploadProfile',
   data: function(){
      return{

      }
   }
}
</script>