import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { peopleDisplayField } from "../helper/helper";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { getSwapApiData } from "../helper/helper";
import { dataSliceAction } from "../store/dataslice";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
const DetailData: React.FC<{}> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [detailData, setDetailData] = useState({});
  const { type, page } = useParams();
  useEffect(() => {
    getSwapApiData(type, page)
      .then((data) => {
        setDetailData(data);
        dispatch(dataSliceAction.setDetailData(data));
      })
      .catch((e) => console.log(e.message));
    dispatch(dataSliceAction.setCategory({ type, page }));
  }, [type, page, dispatch]);
  return (
    <>
      {Object.entries(detailData).map(([key, value], index) => {
        const labelValue: string = `${value}`;
        if (peopleDisplayField.includes(key)) {
          if (key === "name" || key === "title") {
            return (
              <Typography key={index + 1} variant="h5" component="h6">
                {labelValue}
              </Typography>
            );
          }
          return (
            <TextField
              key={index + 1}
              disabled
              id="standard-disabled"
              label={(key[0].toUpperCase() + key.slice(1)).replace("_", " ")}
              defaultValue={labelValue}
              variant="standard"
            />
          );
        }
      })}
    </>
  );
};

export default DetailData;
