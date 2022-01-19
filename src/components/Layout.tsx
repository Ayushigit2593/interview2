import Box from "@mui/material/Box";
const Layout: React.FC<{}> = (props) => {
  return <Box sx={{ width: 500, height: 500 }}>{props.children}</Box>;
};

export default Layout;
