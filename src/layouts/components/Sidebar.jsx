import { CategoryOutlined } from "@mui/icons-material";
import { Wallet } from "@mui/icons-material";
import { Dashboard } from "@mui/icons-material";
import { DashboardOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <List>
      <Box>
        <ListItem>
          <ListItemButton
            component={Link}
            to="/"
            selected={location.pathname === "/"}
            onClick={() => navigate("/")}
          >
            <ListItemIcon>
              {location.pathname === "/" ? (
                <Dashboard />
              ) : (
                <DashboardOutlined />
              )}
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            to="/wallets"
            selected={location.pathname === "/wallets"}
            onClick={() => navigate("/wallets")}
            component={Link}
          >
            <ListItemIcon>
              <Wallet />
            </ListItemIcon>
            <ListItemText>Wallets</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            to="/categories"
            selected={location.pathname === "/categories"}
            onClick={() => navigate("/categories")}
            component={Link}
          >
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
        </ListItem>
      </Box>
    </List>
  );
};
export default Sidebar;
