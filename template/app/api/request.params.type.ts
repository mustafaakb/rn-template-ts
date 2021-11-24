export type LOGINParams = {
  email: string;
  password: string;
};

export type REGISTERParams = {
  email: string;
  password: string;
  name?: string;
};

export type VOTEParams = {
  image_id: string;
  value: number;
  sub_id: string;
};
