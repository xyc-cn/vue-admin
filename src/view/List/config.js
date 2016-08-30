/**
 * Created by easonxie on 2016/8/29.
 */
import handle from './handle'
export default{
  table: {
    key: ['name', 'sex', 'age', 'birthday', 'hobby', 'img', 'height', 'home', 'imgList', 'status'],
    th: ['用户名', '性别', '年龄', '生日', '爱好', '头像', '身高', '籍贯', '状态', '操作'],
    operation: [{type: 'info', text: '查看', callback: handle.detail}, {
      type: 'danger',
      text: '删除',
      callback: handle.del
    }, {type: 'success', text: '通过', callback: handle.pass}, {type: 'warning', text: '下架', callback: handle.ban}],
    render: {
      status: function (value) {
        if (value === 0) {
          return '未审核'
        } else if (value === 1) {
          return '已审核'
        } else if (value === 2) {
          return '已屏蔽'
        }
      },
      img: function (value) {
        return '<img class="img-thumbnail" width="100px" src="' + value + '">';
      },
      imgList: function (value) {
        var tpl = '';
        value.forEach(function (v) {
          var dom = '<img class="img-thumbnail" width="100px" src="' + v + '">';
          tpl = tpl + dom;
        });
        return tpl;
      }
    }
  },
  form: [[
    {
      componentType: 'input',
      placeholder: '请填写搜索内容',
      desc: '搜索',
      type: 'text',
      name: 'search',
      callback: handle.change
    },
    {
      componentType: 'button',
      text: '搜索',
      type: 'primary',
      callback: handle.search
    },
    {
      componentType: 'button',
      text: '复位',
      type: 'success',
      callback: handle.refresh
    }
  ], [
    {
      componentType: 'input',
      placeholder: '我爱你',
      desc: '昵称',
      type: 'text',
      name: 'name',
      callback: handle.change
    },
    {
      componentType: 'select',
      value: -1,
      label: '状态',
      name: 'status',
      value_type: 'Number',
      options: [{text: '全部', value: -1}, {text: '未审核', value: 0}, {text: '已通过', value: 1}, {text: '已屏蔽', value: 2}],
      callback: handle.change
    },
    {
      componentType: 'checkBox',
      value: true,
      label: '加精',
      name: 'isStar',
      callback: handle.change
    },
    {
      componentType: 'button',
      text: '过滤',
      type: 'primary',
      callback: handle.filter
    }
  ]],
  url: '#!/list/'
}
