import MainNavigation from "./MainNavigation";
import Copyright from "./Copyright";
import Container from '@mui/material/Container';

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <Container maxWidth="md" component="main" sx={{ pt: 8 }}>
      {props.children}
      </Container>
      <Copyright />
    </div>
  );
};

export default Layout;
