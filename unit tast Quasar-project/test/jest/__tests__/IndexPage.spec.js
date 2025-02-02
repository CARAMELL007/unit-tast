import IndexPage from 'src\pages\IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  })
});

it('ตรวจสอบตัวแปรtitle', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'I love Vue.'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('I love Vue.')
  })