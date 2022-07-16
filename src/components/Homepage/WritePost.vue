<template>
    <div id="love">
    <div class="min-h-screen bg- flex text-bluck flex-col bg-gray-50">
        <div class="">
            <!--Text header-->
            <div class="text-[#5b21b6] pr-15 pt-10 bold font-monomt-3 font-bold text-3xl">
                <h2 class="ml-10">Reab Rob</h2>
            </div>
            <!--Write area-->
            <div class="flex items-center justify-center flex-col">
                <div class="bg-blue p-5 rounded-lg w-2/5" style="width:550px;">
                    <h2 class="text-left ml-1 text-blue text-xl">Create Your Post</h2>
                <div class=" border-2 rounded-md"> 
                    <div class=" bg-white"><textarea aria-label="Tittle" class=" bg-white text-2xl text-bold font-serif py-3 px-5 w-full outline-none rounded" placeholder="Write your tittle..."></textarea></div>
                        
                    <div class=" h-96 bg-white rounded-md">
                        <div id="app">
                          <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                        </div>
                    </div>
                </div>
                <div>
                    <!--Push button to upload-->
                <button class=" bg-indigo-600 text-white droop-shadow-xl py-1 mt-2 px-6 rounded-md hover:bg-sky-700 float-right ">Upload</button>
                </div>
                </div>
            </div>
        </div>
     </div>
    </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    export default{
    name:'Tittle',
    data: function(){
        return{
            Tittle: '',
            editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
            }
        };
    }
}
</script>