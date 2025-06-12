type Launch = {
  id: string;
  name: string;
  rocket?: string;
  date_utc: string;
  success?: boolean | null;
};

export type FilterOptions = {
  search: string;
  order: 'asc' | 'desc';
  filterStatus: 'all' | 'success' | 'failed';
};

export const sortAndFilterLaunches = (
  launches: Launch[],
  { search, order, filterStatus }: FilterOptions
): Launch[] => {
  return launches
    .filter((launch) => new Date(launch.date_utc) < new Date())
    .filter(
      (launch) =>
        launch.name.toLowerCase().includes(search.toLowerCase()) ||
        (launch.rocket?.toLowerCase() || '').includes(search.toLowerCase())
    )
    .filter((l) =>
      filterStatus === 'all'
        ? true
        : filterStatus === 'success'
          ? l.success === true
          : l.success === false
    )
    .sort((a, b) =>
      order === 'asc'
        ? new Date(a.date_utc).getTime() - new Date(b.date_utc).getTime()
        : new Date(b.date_utc).getTime() - new Date(a.date_utc).getTime()
    );
};
