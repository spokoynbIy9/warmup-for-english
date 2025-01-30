import { getRandomTime } from "@/shared/helpers/getRandomTime";
import { Typography } from "@mui/material";
const TypographyTime = () => {
  const englishTime = getRandomTime();

  return <Typography variant="h4">{englishTime}</Typography>;
};

export default TypographyTime;
