import { spacexApi } from '../api/spacexApi';
import { LaunchDTO } from '../types/Launch';

export const getAllLaunches = async (): Promise<LaunchDTO[]> => {
  const res = await spacexApi.get<LaunchDTO[]>('/launches');
  return res.data;
};
