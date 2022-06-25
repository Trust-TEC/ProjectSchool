<template>
    <div></div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default{
    name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        }

}
</script>