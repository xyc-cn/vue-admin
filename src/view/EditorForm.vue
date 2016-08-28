<template>
  <v_nav></v_nav>
    <div style="margin:10px;">
    <div class="panel panel-default">
      <div class="panel-body"><v_textarea></v_textarea>
        <v_input :type="'file'"></v_input>
    </div>
    </div>
    </div>
</template>
<script>
  import Nav from './../components/Nav'
  import textarea from './../components/textarea'
  import input from './../components/Input'
  import Message from './../components/Message'
  export default{
    data () {
      return {
        msg: {color: 'red', width: '599px'}
      }
    },
    components: {
      v_textarea: textarea,
      v_nav: Nav,
      v_input: input,
      v_message: Message
    }
  }
</script>
