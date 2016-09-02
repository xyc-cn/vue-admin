<template>
    <div style="margin:10px;">
    <div class="panel panel-default">
      <div class="panel-body">
        <h3>{{name}}</h3>
        <template v-for="item in upload">
          <h4>{{item.desc}}</h4>
          <img id="{{item.name}}" style="height: 200px; display: block;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTU2ZGY0YjQwYjEgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTZkZjRiNDBiMSI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS41IiB5PSIxMDUuNyI+MjQyeDIwMDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true">
          <div style="width:200px;">
            <v_input type="file" :name="item.name" :upload="item.upload" :style="item.style" :value="item.value"></v_input>
          </div>
          <br>
        </template>
        <v_form_inline v-for="item in form":components="item"></v_form_inline>
    </div>
    </div>
    </div>
</template>
<script>
  import Input from './../../components/Input'
  import textarea from './../../components/textarea'
  import formInline from '../../components/formInline'
  import button from './../../components/button'
  import Message from './../../components/Message'
  import config from './config'

  export default{
    data () {
      return {
        name: config.name,
        form: config.form,
        upload: config.upload
      }
    },
    components: {
      v_textarea: textarea,
      v_message: Message,
      v_button: button,
      v_form_inline: formInline,
      v_input: Input
    },
    route: {
      canReuse: false
    }
  }
</script>
