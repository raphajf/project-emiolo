declare namespace Express {
  export interface Request {
    user: {
      _id: any;
      email: string;
      name: string;
      photo: string;
      createdAt: Date;
      updatedAt: Date;
      __v: number;
    };
  }
}
