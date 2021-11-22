export const apiEndpoints = {
  // AUTH
  REGISTER: () => '/register',
  LOGIN: () => '/login',
  // Payment
  ADD_SETUP_INTENT: () => '/ADD_SETUP_INTENT',
  GET_PAYMENT_METHODS: () => '/GET_PAYMENT_METHODS',
  ADD_PAYMENT_METHOD: () => '/ADD_PAYMENT_METHOD',
  // SEARCH
  IMAGE_SEARCH: () => '/images/search',
  IMAGE_SEARCH_PARAMS: (limit: number, page: number, order: 'DESC' | 'ASC') =>
    `/images/search?limit=${limit}&page=${page}&order=${order}`,
};
