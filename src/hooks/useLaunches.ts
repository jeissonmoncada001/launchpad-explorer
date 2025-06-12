import { useEffect, useState } from 'react';
import { Launch } from '../types/Launch';
import { LaunchRepository } from '../repositories/LaunchRepository';

export const useLaunches = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LaunchRepository.getAll()
      .then(setLaunches)
      .finally(() => setLoading(false));
  }, []);

  return { launches, loading };
};
