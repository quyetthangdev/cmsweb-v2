export interface IEnv {
  port: string;
  dataSource: {
    hostMySql: string;
    userMySql: string;
    passwordMySql: string;
    databaseMySql: string;
  };
  token: {
    hashSalt: string;
    jwtSecret: string;
  };
  passport: {
    passportSecret: string;
  };
}

export interface IApiResponse<T> {
  result?: T;
  code: number;
  message: string;
  error: boolean;
  method: string;
  path: string;
}

export interface IPageOption {
  builderFor: string;
  orderBy: string;
  skip: number;
  take: number;
}

export interface ICreateUserRequestDto {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export interface IStatusResponse {
  code: number;
  message: string;
}

export interface IUser {
  id?: string;
  password?: string;
  username?: string;
}
