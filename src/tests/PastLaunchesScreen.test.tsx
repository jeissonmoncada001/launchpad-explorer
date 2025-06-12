import { sortAndFilterLaunches } from '../utils/sortAndFilter';

describe('PastLaunchesScreen - lógica', () => {
  const mockLaunches = [
    {
      id: '1',
      name: 'Mission A',
      rocket: 'Falcon 1',
      date_utc: '2022-01-01T00:00:00Z',
      success: true,
    },
    {
      id: '2',
      name: 'Mission B',
      rocket: 'Falcon 9',
      date_utc: '2023-01-01T00:00:00Z',
      success: false,
    },
  ];

  it('filtra por éxito correctamente', () => {
    const result = sortAndFilterLaunches(mockLaunches, {
      search: '',
      order: 'desc',
      filterStatus: 'success',
    });

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Mission A');
  });

  it('ordena por fecha ascendente', () => {
    const result = sortAndFilterLaunches(mockLaunches, {
      search: '',
      order: 'asc',
      filterStatus: 'all',
    });

    expect(result[0].name).toBe('Mission A');
    expect(result[1].name).toBe('Mission B');
  });

  it('busca por texto', () => {
    const result = sortAndFilterLaunches(mockLaunches, {
      search: 'B',
      order: 'desc',
      filterStatus: 'all',
    });

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Mission B');
  });
});
