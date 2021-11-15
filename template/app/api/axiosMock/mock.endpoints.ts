import {AxiosInstance} from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {apiEndpoints} from '..';
import * as SUCCESS from './mock.success';

export const setMockInUse = async (setMock: boolean, axios: AxiosInstance) => {
  const mock = await new MockAdapter(axios, {
    onNoMatch: 'throwException',
    delayResponse: 1000,
  });
  if (setMock) {
    mockEndpoints(mock);
  }
};

export const mockEndpoints = (mock: MockAdapter): void => {
  mock.onGet(apiEndpoints.LOGIN()).reply(200, SUCCESS.LOGIN);
  mock.onPost(apiEndpoints.REGISTER()).reply(200, SUCCESS.REGISTER);
};
