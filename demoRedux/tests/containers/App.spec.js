import React from 'react'
import TestUtils from 'react-addons-test-utils'
import App from 'containers/App'

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<App {...props} />)
}

describe('(Layout) Core', function () {
  let _component
  let _props
  let _child

  beforeEach(function () {
    _props = { }

    _component = shallowRenderWithProps(_props)
  })

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div')
  })
})
