import { spacexApi } from '../api/spacexApi';
import { LaunchSchema } from '../schemas/launchSchema';

export const LaunchRepository = {
  getAll: async () => {
    const res = await spacexApi.get('/launches/past');
    return res.data.map((item: any) => LaunchSchema.parse(item));
  },
};
