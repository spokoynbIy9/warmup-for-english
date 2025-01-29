import TypogrpaphyTranslation from "@/entities/Warmup/ui/TypogrpaphyTranslation";
import { getRandomTime } from "@/shared/helpers/getRandomTime";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

// @todo
// генерировать вновь и вновь не только englishTime,
// но TypogrpaphyTranslation

const WarmupPage = () => {
  const [englishTime, setEnglishTime] = useState("");

  const generateRandomTime = () => {
    setEnglishTime(getRandomTime());
  };

  return (
    <Stack>
      <Typography>{englishTime}</Typography>
      <TypogrpaphyTranslation />
      <Button onClick={generateRandomTime}>Сгенерировать</Button>
    </Stack>
  );
};

export default WarmupPage;
