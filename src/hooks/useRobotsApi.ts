import { useCallback } from "react";
import axios from "axios";
import { RobotStructure } from "../store/features/robots/types";

const useRobotsApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getRobots = useCallback(async () => {
    const { data: robots } = await axios.get<RobotStructure[]>("/robots");

    return robots;
  }, []);

  return { getRobots };
};

export default useRobotsApi;
