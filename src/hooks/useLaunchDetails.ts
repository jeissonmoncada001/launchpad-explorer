import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const useLaunchDetails = (id: string) => {
  const [launch, setLaunch] = useState<any>(null);
  const [launchpad, setLaunchpad] = useState<any>(null);
  const [payloads, setPayloads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDetails = useCallback(async () => {
    try {
      setLoading(true);

      const launchRes = await axios.get(`https://api.spacexdata.com/v5/launches/${id}`);
      const launchData = launchRes.data;
      setLaunch(launchData);

      const [launchpadRes, payloadsRes] = await Promise.all([
        axios.get(`https://api.spacexdata.com/v4/launchpads/${launchData.launchpad}`),
        Promise.all(
          launchData.payloads.map((pid: string) =>
            axios.get(`https://api.spacexdata.com/v4/payloads/${pid}`).then((res) => res.data)
          )
        ),
      ]);

      setLaunchpad(launchpadRes.data);
      setPayloads(payloadsRes);
    } catch (error) {
      console.error('Error fetching launch details:', error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return { launch, launchpad, payloads, loading };
};
