import React from 'react/addons'
import Icon from '../Icon'
import { assert } from 'chai'

const TestUtils = React.addons.TestUtils;

describe(__filename, function () {

  it('Icon should be render', function () {

    const instance = TestUtils.renderIntoDocument(
      <Icon type='cloud'/>
    );

    assert.equal(instance.getDOMNode().className, 'cloud icon');

  })

});
