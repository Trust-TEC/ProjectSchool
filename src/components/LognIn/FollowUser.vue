<template>
   <div>
      <div class="min-h-screen flex items-center bg-gray-100 justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-5 px-10 rounded-lg shadow-2xl w-1/3">
                <div class="flex justify-start items-start float-left mt-3">
                    <div>
                        <a href="" id="back5"><i class="fa-solid fa-arrow-left-long text-xl"></i></a>
                    </div>
               </div>
                <h2 class="text-center pr-5 text-indigo-600 font-bold text-blue mb-5 text-2xl">Follow user</h2>
                <!--Follow user-->
                    <div>
                    <div class="flex flex-col mt-5 px-3">
                        <div class="flex flex-col justify-center items-center">
                                
                            <div class=" text-center">
                                 <div class="rounded-2xl bg-gray-200 flex flex-rows items-center justify-between m-1 p-3 w-96">
                                <div class=" flex ">
                                     <div class="shrink-0">
                                         <img class="h-16 w-16 rounded-full" :src="put" alt="ChitChat Logo">
                                    </div>
                                    <div class="">
                                            
                                        <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2 pl-5">
                                                Ampraham kountic
                                        </h1>
                                            <p class="text-slate-500 text-sm pl-2">Professor of ITI and Founder</p>
                                    </div>
                                </div>
                                <div>
                                    <button class="w-20 h-8 p-1  bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm cursor-pointer">Follw</button>
                                 </div>
                                </div>
                            </div>
                        <div class=" rounded-2xl bg-gray-200 flex flex-rows items-center justify-between m-1 p-3 w-96">
                            <div class=" flex ">
                                <div class="shrink-0">
                                    <img class="h-16 w-16 rounded-full" :src="puser" alt="ChitChat Logo">
                                </div>
                                <div class="">
                                    
                                    <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2 pl-5">
                                        Ariah bubble
                                    </h1>
                                    <p class="text-slate-500 text-sm pl-2">Teacher and Researcher</p>
                                </div>
                            </div>
                            <div>
                                <button class="w-20 h-8 p-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm cursor-pointer">Follw</button>
                            </div>
                        </div>
                        <div class=" rounded-2xl bg-gray-200 flex flex-rows items-center justify-between m-1 p-3 w-96">
                            <div class=" flex ">
                                <div class="shrink-0">
                                    <img class="h-16 w-16 rounded-full" :src="beliget" alt="ChitChat Logo">
                                </div>
                                <div class="">
                                    
                                    <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2 pl-5">
                                        Bill Gates
                                    </h1>
                                    <p class="text-slate-500 text-sm pl-2">Founder of Microsoft</p>
                                </div>
                            </div>
                            <div>
                                <button class="w-20 h-8 p-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm cursor-pointer">Follw</button>
                            </div>
                        </div>

                        <div class=" rounded-2xl bg-gray-200 flex flex-rows items-center justify-between m-1 p-3 w-96">
                            <div class=" flex ">
                                <div class="shrink-0">
                                    <img class="h-16 w-16 rounded-full" :src="avd" alt="ChitChat Logo">
                                </div>
                                <div class="">
                                    
                                    <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2 pl-5">
                                        Akshat Bordia
                                    </h1>
                                    <p class="text-slate-500 text-sm pl-2">Advisor of team Developer</p>
                                </div>
                            </div>
                            <div>
                                <button class="w-20 h-8 p-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm cursor-pointer">Follw</button>
                            </div>
                        </div>
                    </div>
                </div>
			</div> 
            <!--Back and next-->  
                 <div class=" float-right mt-10 pr-5">
                    <router-link to="/Tage">
                    <input type="submit" value="Continue" id="continue5" class=" w-20  h-7 text-center rounded-md text-md text-white bg-indigo-600 cursor-pointer">
                    </router-link>
                </div>
            <!--****************-->
        </div>
   </div>
   </div>
</template>
<script>
export default{
   name: 'FollowUser',
   data: function(){
      return{
            PhoneLog: 'https://healthvoices.org.au/wp-content/uploads/2020/11/ideas-2500.jpg',
            puser: 'https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg',
            beliget: 'https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg',
            perlog: 'https://www.brooksschool.org/uploaded/News/new-faculty-2019-federico.gif',
            dtc: 'https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/747/original/Data_Science.jpg',
            avd: 'https://www.citrix.com/blogs/wp-content/upload/2018/03/slack_compressed-e1521621363404-360x360.jpg',
            logo: 'photo_2022-04-21_19-18-59.png',
            put: 'https://pbs.twimg.com/profile_images/1247016785108447234/LEPENTy__400x400.jpg',
         
      }
   }
}
</script>