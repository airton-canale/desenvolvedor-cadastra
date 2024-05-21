import axios from "axios";

import db from "../../db.json";
interface DatabaseMock {
  products: Product[];
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
});

const mockInstance = async ({
  url,
}: {
  url: string;
}): Promise<{ data: Product[] }> => {
  const dbMock = db as DatabaseMock;

  const brokenDownUrl = url.split("/")[1] as keyof typeof dbMock;

  return {
    data: dbMock[brokenDownUrl],
  };
};

export default process.env.NODE_ENV === "production"
  ? mockInstance
  : axiosInstance;
