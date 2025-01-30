import { getRandomTime } from "@/shared/helpers/getRandomTime";
import { Typography } from "@mui/material";

const TypographyTime = () => {
  const englishTime = getRandomTime();

  return <Typography>{englishTime}</Typography>;
};

export default TypographyTime;
