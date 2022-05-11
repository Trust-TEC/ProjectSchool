<template>
    <div>
        <div class="min-h-screen flex items-center justify-center  text-bluck flex-col mb-3">
            <div class="bg-white p-5 px-10 rounded-lg shadow-2xl w-1/3 mt-10">
                <h2 class=" text-bold text-3xl text-blue mb-8 font-bold text-indigo-600 text-center">LogIn</h2>
                <form action="" class="space-y-5">
               <div class=" mt-2 mb-2">
                   <label for="" class="block mb-1 text-sm text-gray-500">Acccount</label>
                   <input v-model="email" type="email" class="py-3 px-4 w-full outline-none border border-blue" placeholder="Email or Phone Number">
               </div>
               <div class=" mt-2 mb-1">
                   <label for="" class="block mb-1 text-sm text-gray-500">Password</label>
                   <input v-model="password" type="password" class="py-3 px-4 w-full outline-none border border-blue" placeholder="Password">
               </div>
               <div class="flex flex-row">
                <div><input type="checkbox" :disabled="disabled" id="toggle_button" v-model="checkedValue"></div>
                <div class="pl-2 text-sm text-gray-500"><p>Remember me</p></div>

                <div class="text-sm text-gray-500 underline cursor-pointer pl-40 hover:text-black"><p>Forgot password?</p></div>
                </div>
               <router-link to="Homepage"><input @click="signin" type="submit" value="Log in" class=" w-full p-2 bg-indigo-500  text-white rounded-full text-lg mt-5 cursor-pointer font-bold"></router-link>
               <div class="flex flex-row items-center justify-center">
                    <div class=" text-sm"><p>Don't have an acccount?</p></div>
                    <router-link to="SignIn">
                    <div class="text-indigo-500 font-bold pl-1"><p>Sign up</p></div>
                    </router-link>
               </div>
               <div class="text-center text-sm">Or continue with</div>
           </form>
        </div>
        
        <div class="w-1/3 flex flex-col items-center">
                <button class=" w-2/4 p-1 bg-indigo-300 text-white hover:bg-indigo-600 rounded-full text-lg mt-2 cursor-pointer text-center">
                    <div class="flex flex-row items-center ">
                        <div class=" basis-1/4"><i class="fa-brands fa-google text-xl float-left pl-3"></i></div>
                        <div class=" basis-1/2">Google</div>
                    </div>
                </button>
                <button class="w-2/4 p-1 bg-indigo-300 text-white hover:bg-indigo-600 rounded-full text-lg mt-2 cursor-pointer text-center">
                    <div class="flex flex-row items-center">
                        <div class=" basis-1/4"><i class="fa-brands fa-facebook text-xl float-left pl-3"></i></div>
                        <div class=" basis-1/2">Facebook</div>
                    </div>
                </button>
                <button class="w-2/4 p-1 bg-indigo-300 text-white hover:bg-indigo-600 rounded-full text-lg mt-2 cursor-pointer text-center">
                    <div class="flex flex-row items-center">
                        <div class="basis-1/4"><i class="fa-brands fa-github text float-left pl-3"></i></div>
                        <div class="basis-1/2">Git hub</div>
                    </div>
                </button>
                
        </div>
           
        </div>
    </div>
</template>
<script>
//import firebase from "firebase/app"

export default{
    name: 'LogIn',
    data: function(){
        return{
            email: "",
            password: "",
            initail: "",
            nameuser: "",
            currentState: this.defaultState
        }
    },
    methods: {
        singnin(){
            /*firebase.auth().signInWithEmailAndPassword(this.email, this.password, this.nameuser).then(
                (user) =>{
                    console.log(user)
                },
                (err) =>{
                    alert(err)
                }
            )*/
        }
    }
}
</script>