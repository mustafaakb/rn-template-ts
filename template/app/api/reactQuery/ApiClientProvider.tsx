// export const ApiClient = createContext({});

import {useQuery} from 'react-query';
import {apiEndpoints} from '..';
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

export const useGetImage = () =>
  useQuery({
    queryKey: ['dog', 'image'],
    queryFn: () => axiosInstance.get(apiEndpoints.IMAGE_SEARCH()),
  });

export const useGetAllImage = () =>
  useQuery({
    queryKey: ['dog', 'image'],
    queryFn: () => axiosInstance.get(apiEndpoints.IMAGE_SEARCH()),
  });
