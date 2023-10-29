import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Switch } from "@mui/material";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="mb-10">
        <Toolbar>
          <Switch
            checked={darkMode}
            onChange={handleThemeChange}
            defaultChecked
          />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Hello</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
