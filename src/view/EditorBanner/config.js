import handle from './handle'
export default{
  upload: [{
    id: 'bgImg',
    upload: handle.upload,
    name: 'bgImg',
    desc: '背景图'
  }],
  name: '轮播上传',
  form: [[
    {
      componentType: 'input',
      placeholder: '请填写跳转链接',
      desc: '链接',
      type: 'text',
      name: 'url',
      callback: handle.change
    }
  ], [
    {
      componentType: 'input',
      placeholder: '请填写标题',
      desc: '标题',
      type: 'text',
      name: 'name',
      callback: handle.change
    },
    {
      componentType: 'button',
      text: '提交',
      type: 'primary',
      callback: handle.submit
    }
  ]]
}
