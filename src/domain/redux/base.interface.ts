interface IRespSuccess {
  status?: number;
  message?: string;
  success?: boolean;
  data?: any;
}

interface IRespError {
  status?: number;
  success?: boolean;
  error?: {
    errors?: any;
    message?: string;
  };
}

export type { IRespSuccess, IRespError };
