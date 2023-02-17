import { templateApi as api } from './templateApi.base';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query<GetAllUsersApiResponse, GetAllUsersApiArg>({
      query: () => ({ url: `/user/all` }),
    }),
    createUser: build.mutation<CreateUserApiResponse, CreateUserApiArg>({
      query: (queryArg) => ({
        url: `/user`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getUser: build.query<GetUserApiResponse, GetUserApiArg>({
      query: () => ({ url: `/user` }),
    }),
    login: build.mutation<LoginApiResponse, LoginApiArg>({
      query: (queryArg) => ({
        url: `/auth`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    sendLogout: build.mutation<SendLogoutApiResponse, SendLogoutApiArg>({
      query: () => ({ url: `/auth/logout`, method: 'POST' }),
    }),
    register: build.mutation<RegisterApiResponse, RegisterApiArg>({
      query: (queryArg) => ({
        url: `/auth/register`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    verifyEmail: build.mutation<VerifyEmailApiResponse, VerifyEmailApiArg>({
      query: (queryArg) => ({
        url: `/auth/verify-email`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    setPassword: build.mutation<SetPasswordApiResponse, SetPasswordApiArg>({
      query: (queryArg) => ({
        url: `/auth/set-password`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    adminApproveAccount: build.mutation<
      AdminApproveAccountApiResponse,
      AdminApproveAccountApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/approve-account`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getAuthRefresh: build.query<
      GetAuthRefreshApiResponse,
      GetAuthRefreshApiArg
    >({
      query: () => ({ url: `/auth/refresh` }),
    }),
    getAllProducts: build.query<
      GetAllProductsApiResponse,
      GetAllProductsApiArg
    >({
      query: () => ({ url: `/product` }),
    }),
    createOrder: build.mutation<CreateOrderApiResponse, CreateOrderApiArg>({
      query: (queryArg) => ({
        url: `/order`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getOrders: build.query<GetOrdersApiResponse, GetOrdersApiArg>({
      query: () => ({ url: `/order` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as templateApi };
export type GetAllUsersApiResponse = /** status 200  */ {
  users?: User[];
};
export type GetAllUsersApiArg = void;
export type CreateUserApiResponse = /** status 200 User Created */ {
  user: User;
};
export type CreateUserApiArg = {
  /** Post the necessary fields for the API to create a new user. */
  body: {
    email: string;
    password: string;
  };
};
export type GetUserApiResponse = /** status 200 OK */ {
  user?: User;
};
export type GetUserApiArg = void;
export type LoginApiResponse = /** status 200 OK */ {
  accessToken: string;
  user?: User;
};
export type LoginApiArg = {
  body: {
    email: string;
    password: string;
  };
};
export type SendLogoutApiResponse = /** status 200 OK */
  | {
      message?: string;
    }
  | /** status 204 No Content */ undefined;
export type SendLogoutApiArg = void;
export type RegisterApiResponse = /** status 200 OK */ {
  message?: string;
};
export type RegisterApiArg = {
  body: {
    email: string;
    company?: string;
    phoneNumber?: string;
  };
};
export type VerifyEmailApiResponse = /** status 200 OK */ {
  user?: User;
};
export type VerifyEmailApiArg = {
  body: {
    emailToken?: string;
  };
};
export type SetPasswordApiResponse = /** status 200 OK */ {
  message?: string;
};
export type SetPasswordApiArg = {
  body: {
    userId: string;
    password: string;
  };
};
export type AdminApproveAccountApiResponse = /** status 201 Created */ {
  message?: string;
};
export type AdminApproveAccountApiArg = {
  body: {
    userId: string;
  };
};
export type GetAuthRefreshApiResponse = unknown;
export type GetAuthRefreshApiArg = void;
export type GetAllProductsApiResponse = /** status 200 OK */ {
  products?: Product[];
};
export type GetAllProductsApiArg = void;
export type CreateOrderApiResponse = /** status 201 Created */ {
  order: Order;
};
export type CreateOrderApiArg = {
  body: {
    orderItems: OrderItem[];
  };
};
export type GetOrdersApiResponse = /** status 200 OK */ {
  orders?: Order[];
};
export type GetOrdersApiArg = void;
export type User = {
  email: string;
  password?: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  emailVerified: boolean;
  admin?: boolean;
  approved?: boolean;
  company?: string;
  phoneNumber?: string;
};
export type Product = {
  _id: string;
  itemId: string;
  description: string;
  casePack: string;
  caseWeight: string;
  price: number;
};
export type OrderItem = {
  quantity: number;
  product: string;
  description: string;
};
export type Order = {
  _id: string;
  customer: User;
  orderItems: OrderItem[];
  createdAt: string;
  updatedAt: string;
};
