import { RoutesPath } from "@/shared/Router/config/RouterConfig";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Stack>
      <Link to={RoutesPath.WarmupPage}>Warmup Page</Link>
    </Stack>
  );
};

export default HomePage;
