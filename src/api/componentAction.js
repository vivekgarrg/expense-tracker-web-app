import { baseUrl, getFetcher } from "./fetcher";
import axios from "axios";
import useSWR from "swr";

export const useExpenses = () => {
  const { data, error } = useSWR([`${baseUrl}/expense`], getFetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const postExpense = async (amount, date, remarks) => {
  const { data, error } = await axios.post(`${baseUrl}/expense`, {
    amount,
    date,
    remarks,
  });
  return { data, error };
};
