/**
 * Created by Administrator on 2016/8/25.
 */
export default{
  components: [[
    {
      componentType: 'input',
      placeholder: '我爱你',
      desc: '昵称',
      type: 'text',
      name: 'name'
    },
    {
      componentType: 'select',
      value: 1,
      label: '多选',
      name: 'type',
      options: [{text: '男神', value: 1}, {text: '女神', value: 2}]
    },
    {
      componentType: 'checkBox',
      value: true,
      label: '加精',
      name: 'isStar'
    },
    {
      componentType: 'button',
      text: '过滤',
      type: 'primary'
    }
  ], [
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
      type: 'primary'
    }
  ]]
}
