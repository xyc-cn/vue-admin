/* eslint-disable */
import buttonHandle from './handle/buttonHandle'
export default{
  multiType: {
    img: {
      key: 'img'
    },
    imgList: {
      key: 'imgList'
    }
  },
  th: ['id', '用户名', '性别', '年龄', '生日', '爱好', '头像', '身高', '籍贯', '操作'],
  operation: [{type: 'info', text: '查看', callback: buttonHandle.detail}, {type: 'danger', text: '删除', callback: buttonHandle.del},{
    type: 'success',
    text: '通过',
    callback: buttonHandle.pass
  }, {type: 'warning', text: '下架', callback: buttonHandle.ban}]
}
