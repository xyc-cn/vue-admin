/**
 * Created by easonxie on 2016/8/29.
 */
import handle from './handle'
export default{
  table: {
    key: ['name', 'sex', 'age', 'birthday', 'hobby', 'img', 'height', 'home', 'imgList', 'status'], // api数据返回的每个json对象的key
    th: ['用户名', '性别', '年龄', '生日', '爱好', '头像', '身高', '籍贯', '状态', '操作'], // 列表的th
    operation: [ // 操作按钮
      {type: 'info', text: '查看', callback: handle.detail},
      {type: 'danger', text: '删除', callback: handle.del},
      {type: 'success', text: '通过', callback: handle.pass},
      {type: 'warning', text: '下架', callback: handle.ban}
    ],
    render: { // key里面特殊字段的渲染方法
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
        const ret = `<img class="img-thumbnail" width="100px" src="${value}">`;
        return ret;
      },
      imgList: function (value) {
        var tpl = '';
        value.forEach(function (v) {
          var dom = `<img class="img-thumbnail" width="100px" src="${v}">`;
          tpl = tpl + dom;
        });
        return tpl;
      }
    }
  },
  form: [// 搜索框和筛选框
    [
      {
        componentType: 'input',
        placeholder: '请填写搜索内容',
        desc: '搜索',
        type: 'text',
        name: 'search'
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
        name: 'name'
      },
      {
        componentType: 'select',
        value: -1,
        label: '状态',
        name: 'status',
        options: [{text: '全部', value: -1}, {text: '未审核', value: 0}, {text: '已通过', value: 1}, {text: '已屏蔽', value: 2}]
      },
      {
        componentType: 'datePicker',
        placeholder: '起始时间',
        name: 'startTime'
      },
      {
        componentType: 'datePicker',
        placeholder: '结束时间',
        name: 'endTime'
      },
      {
        componentType: 'button',
        text: '过滤',
        type: 'primary',
        callback: handle.filter
      }
    ]],
  url: '#!/list/'// 跳转url
}
