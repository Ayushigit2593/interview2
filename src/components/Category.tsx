import { useParams } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListItemText from "@mui/material/ListItemText";
import { getSwapApiData } from "../helper/helper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataSliceAction } from "../store/dataslice";
import type { RootState, AppDispatch } from "../store/store";
import React from "react";
import { useNavigate } from "react-router-dom";
import PublicIcon from "@mui/icons-material/Public";
import MovieIcon from "@mui/icons-material/Movie";
const Category: React.FC<{}> = () => {
  type dataModel = {
    birth_year: string;
    name: string;
    title: string;
  };
  const { type } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const categoryData = useSelector(
    (state: RootState) => state.storedata.categoryData
  );
  useEffect(() => {
    getSwapApiData(type)
      .then((data) => dispatch(dataSliceAction.setCategoryData(data.results)))
      .catch((e) => console.log(e.message));
    dispatch(dataSliceAction.setCategory({ type }));
  }, []);
  const history = useNavigate();
  const listClickHandler = (page: string) => {
    history(`/${type}/${page}`);
  };
  return (
    <>
      <List>
        {categoryData.map((item: dataModel, index) => (
          <ListItem
            disablePadding
            key={index + 1}
            onClick={() => listClickHandler(`${index + 1}`)}
          >
            <ListItemButton>
              <ListItemIcon>
                {type === "people" && <AccountCircleIcon></AccountCircleIcon>}
                {type === "planets" && <PublicIcon></PublicIcon>}
                {type === "films" && <MovieIcon></MovieIcon>}
              </ListItemIcon>
              <ListItemText>
                {type === "films" ? item.title : item.name}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Category;
