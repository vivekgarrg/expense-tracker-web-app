import { baseUrl, getFetcher } from "./fetcher";
import axios from "axios";
import useSWR from "swr";

export const useExpenses = () => {
  const { data, error } = useSWR([`${baseUrl}/expense`], getFetcher, {
    refreshInterval: 500,
  });
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useExpenseById = (id) => {
  const { data, error } = useSWR([`${baseUrl}/expense/${id}`], getFetcher, {
    refreshInterval: 500,
  });
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

export const updateExpense = async (id, amount, date, remarks) => {
  const { data, error } = await axios.put(`${baseUrl}/expense`, {
    amount,
    date,
    remarks,
    id,
  });
  return { data, error };
};

export const deleteExpense = async (id) => {
  const { data, error } = await axios.delete(`${baseUrl}/expense`, {
    data: { id: id },
  });
  return { data, error };
};
