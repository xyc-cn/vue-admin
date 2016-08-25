/**
 * Created by Administrator on 2016/8/25.
 */
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
  list: [{id: 1, name: '小结结', sex: '男', age: '12', birthday: '2016-12-10', hobby: '打球', img: 'http://imgcache.gtimg.cn/club/mobile/qq_comic/comic_category/img/upload_365ef666d4c949333c0306b6a3ca5131.jpg?max_age=31536000&styleVersion=0', height: '172cm', home: '山东'},
    {id: 1, name: '小结结', sex: '男', age: '12', birthday: '2016-12-10', hobby: '打球', imgList: ['http://imgcache.gtimg.cn/club/mobile/qq_comic/comic_category/img/upload_365ef666d4c949333c0306b6a3ca5131.jpg?max_age=31536000&styleVersion=0', 'http://imgcache.gtimg.cn/club/mobile/qq_comic/comic_category/img/upload_868645da375d140436226b7fcfcde992.jpg?max_age=31536000&styleVersion=0'], height: '172cm', home: '广东'}],
  operation: [{type: 'danger', text: '删除', callback: buttonHandle.del}, {type: 'success', text: '通过', callback: buttonHandle.pass}, {type: 'warning', text: '下架', callback: buttonHandle.ban}]
}
