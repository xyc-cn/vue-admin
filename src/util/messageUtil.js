/**
 * Created by Administrator on 2016/9/2.
 */
import Vue from 'vue'
import Message from '../components/Message'
const MessageComponent = Vue.extend(Message);
const openMessage = (propsData = {}) => {
  return new MessageComponent({
    el: document.createElement('div'),
    propsData
  })
};

export default openMessage
