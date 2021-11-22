// export const ApiClient = createContext({});

import {AxiosResponse} from 'axios';
import {useQuery, UseQueryResult} from 'react-query';
import {apiDataType, apiEndpoints} from '..';
import {axiosInstance} from '../axiosProvider';

// export const ApiClientProvider = ({children}: {children: React.ReactNode}) => {
//   const {axios} = useContext(AxiosContext);
//   const queryClient = useQueryClient();

//   const apiClient = {
//     getImage: useQuery({
//       queryKey: ['dog', 'image'],
//       queryFn: () => axios.get(apiEndpoints.IMAGE()),
//     }),
//     mutation: useMutation({
//       mutationFn: params => axios.post(apiEndpoints.IMAGE(), params),
//       onMutate: respond => console.log(respond),
//       onSuccess: () => {
//         queryClient.invalidateQueries(['dog', 'image']);
//       },
//     }),
//   };

//   return <ApiClient.Provider value={apiClient}>{children}</ApiClient.Provider>;
// };

export const useGetImage = (): UseQueryResult<
  AxiosResponse<any, any>,
  unknown
> =>
  useQuery({
    queryKey: ['dog', 'image'],
    queryFn: () => axiosInstance.get(apiEndpoints.IMAGE_SEARCH()),
  });

export const useGetAllImage = () =>
  useQuery({
    queryKey: ['dog', 'image'],
    queryFn: () => axiosInstance.get(apiEndpoints.IMAGE_SEARCH()),
  });

export const useGetImageParams = (
  limit: number,
  page: number,
  order: 'DESC' | 'ASC',
) =>
  useQuery({
    queryKey: ['dog', 'image', 'params'],
    queryFn: () =>
      axiosInstance.get<apiDataType.IMAGE_SEARCH[]>(
        apiEndpoints.IMAGE_SEARCH_PARAMS(limit, page, order),
      ),
  });
