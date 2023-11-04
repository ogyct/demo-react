import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {useGetPostsQuery} from "../redux/PostsApi.ts";
import {useState} from "react";


const columns: GridColDef[] = [
    {field: 'title', headerName: 'Title', width: 150},
    {field: 'body', headerName: 'Body', width: 150},
    {field: 'publicId', headerName: 'PublicId', width: 300},
];

export default function PostTable() {
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 5,
    });
    const {data: posts, isLoading} = useGetPostsQuery({
        pageNumber: paginationModel.page,
        pageSize: paginationModel.pageSize
    });
    if (isLoading || !posts) {
        return <>Loading data</>
    }
    return (
        <div style={{height: '100%', width: '100%'}}>
            <DataGrid rows={posts.content}
                      columns={columns}
                      getRowId={row => row.publicId}
                      paginationMode='server'
                      rowCount={posts.totalElements}
                      loading={isLoading}
                      pageSizeOptions={[5, 20, 50]}
                      paginationModel={paginationModel}
                      onPaginationModelChange={setPaginationModel}
            />
        </div>
    );
}
