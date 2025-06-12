import { sortAndFilterLaunches } from '../utils/sortAndFilter';

const mockLaunches = [
  {
    id: '1',
    name: 'Falcon 1',
    rocket: 'Falcon',
    date_utc: '2023-01-01T00:00:00Z',
    success: true,
  },
  {
    id: '2',
    name: 'Starlink',
    rocket: 'Falcon 9',
    date_utc: '2024-01-01T00:00:00Z',
    success: false,
  },
  {
    id: '3',
    name: 'Dragon',
    rocket: 'Falcon Heavy',
    date_utc: '2022-01-01T00:00:00Z',
    success: true,
  },
];

describe('sortAndFilterLaunches', () => {
  it('filtra por éxito', () => {
    const result = sortAndFilterLaunches(mockLaunches, {
      search: '',
      order: 'desc',
      filterStatus: 'success',
    });
    expect(result.every((r) => r.success === true)).toBe(true);
  });

  it('filtra por texto de búsqueda', () => {
    const result = sortAndFilterLaunches(mockLaunches, {
      search: 'star',
      order: 'desc',
      filterStatus: 'all',
    });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Starlink');
  });

  it('ordena por fecha ascendente', () => {
    const result = sortAndFilterLaunches(mockLaunches, {
      search: '',
      order: 'asc',
      filterStatus: 'all',
    });
    const dates = result.map((r) => new Date(r.date_utc).getTime());
    expect(dates).toEqual([...dates].sort((a, b) => a - b));
  });

  it('excluye lanzamientos futuros', () => {
    const result = sortAndFilterLaunches(mockLaunches, {
      search: '',
      order: 'desc',
      filterStatus: 'all',
    });
    const now = new Date();
    expect(result.every((r) => new Date(r.date_utc) < now)).toBe(true);
  });
});
