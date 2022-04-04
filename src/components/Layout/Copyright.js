import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

const Copyright = (props) => {
  return (
    <Box component="footer" sx={{mt:5}}>
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {"Copyright © "}
        <Link color="inherit" href="#">
          Sasa Sladic
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      </Box>
  );
};

export default Copyright;
