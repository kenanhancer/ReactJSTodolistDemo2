import React from 'react';
import { shallow, mount } from 'enzyme';
import Delete from '../index';

const defaultProps = {
  disabled: false,
  onClick: () => { }
};

describe('DeleteButton', () => {
  it('renders without crashing', () => {
    shallow(<Delete {...defaultProps} />);
  });

  it('should call onClick when disabled prop is false', () => {
    const onClickMock = jest.fn();
    const renderedItem = mount(
      <Delete {...defaultProps} onClick={onClickMock} />
    );
    const btn = renderedItem.find('button');
    btn.simulate('click');
    expect(onClickMock.mock.calls.length).toBe(1);
    expect(btn.node.disabled).toBe(false);
  });

  it('should not call onClick when disabled prop is true', () => {
    const onClickMock = jest.fn();
    const renderedItem = mount(
      <Delete disabled={true} onClick={onClickMock} />
    );
    const btn = renderedItem.find('button');
    btn.simulate('click');
    expect(onClickMock.mock.calls.length).toBe(0);
    expect(btn.node.disabled).toBe(true);
  });
});