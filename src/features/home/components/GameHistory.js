import { DataGrid } from "@mui/x-data-grid";

const GameHistory = (props) => {
  const columns = [
    {
      field: "game",
      headerName: "Game",
      flex: 1,
    },
    {
      field: "input",
      headerName: "Input",
      flex: 1,
    },
    {
      field: "points",
      headerName: "Points",
      flex: 1,
    },
    {
      field: "created_at",
      headerName: "Created At",
      flex: 1,
    },
  ];

  return (
      <DataGrid
        rows={props.scores}
        columns={columns.map((column) => ({
          ...column,
          sortable: false,
        }))}
        loading={props.loading}
        rowsPerPageOptions={[]}
        hideFooterPagination
        maxColumns={6}
        autoHeight
        density="compact"
        disableColumnMenu
        disableColumnSelector
      />
  );
};

export default GameHistory;
