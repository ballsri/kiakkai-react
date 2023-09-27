import { CircularProgress } from "@mui/material";
export const Loading: React.FC = (props: any) => {

    return (
      <div
        className="flex justify-center items-center align-middle"
        style={{ height: "100%" }}
        {...props}
      >
        <CircularProgress />
      </div>
    );
    }