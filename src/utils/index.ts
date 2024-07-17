import axios from "axios";
import { ResponseAPI } from "../interface";
import { AxiosError } from "axios";

const ACCESS_KEY =
  "Client-ID vGj0Ajmw-yf-2esp6cKS9pFfYN2wq5cPJ-ewit6SM1U" as string;

export const getImages = async (query: string): Promise<ResponseAPI> => {
  const url = `https://api.unsplash.com/search/photos?per_page=20&query=${query}`;
  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};
