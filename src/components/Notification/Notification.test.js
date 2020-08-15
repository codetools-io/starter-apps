import React from 'react';
import Notification from './Notification';

jest.useFakeTimers();

describe('Notification', () => {
  test('can render children', () => {
    const { container } = renderComponent(
      <Notification>
        <p>Content for the Notification</p>
      </Notification>
    );

    expect(container).toMatchSnapshot();
  });
  test('can render message', () => {
    const { container } = renderComponent(
      <Notification message={'Content for the Notification'} />
    );

    expect(container).toMatchSnapshot();
  });

  test('can handle expirations', () => {
    const callback = jest.fn();
    renderComponent(
      <Notification
        message={'Content for the Notification'}
        expiration={1000}
        onExpire={callback}
      />
    );

    expect(callback).not.toBeCalled();
    jest.runAllTimers();
    expect(callback).toBeCalled();
  });
});
