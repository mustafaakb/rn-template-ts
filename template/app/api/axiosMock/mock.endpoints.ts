import MockAdapter from 'axios-mock-adapter/types';
import {apiEndpoints} from '..';

export const mockEndpoints = (mock: MockAdapter): void => {
  mock.onGet(apiEndpoints.LOGIN()).reply(200, {
    user: {
      name: 'Jane',
      mail: 'ifo@demo.com',
    },
    error: false,
    message: '',
  });

  mock.onPost(apiEndpoints.REGISTER()).reply(200, {
    user: {
      name: 'Jane',
      mail: 'ifo@demo.com',
    },
    error: false,
    message: '',
  });
};
