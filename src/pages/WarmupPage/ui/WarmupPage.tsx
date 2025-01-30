import TypographyTime from "@/entities/Warmup/ui/TypographyTime";
import TypogrpaphyTranslation from "@/entities/Warmup/ui/TypogrpaphyTranslation";
import { Button, Stack } from "@mui/material";
import { useState } from "react";

// @todo
// генерировать вновь и вновь не только englishTime,
// но TypogrpaphyTranslation

const WarmupPage = () => {
  const [, setKey] = useState(0);

  const trigger = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <Stack>
      <TypographyTime />
      <TypogrpaphyTranslation />
      <Button onClick={trigger}>Сгенерировать</Button>
    </Stack>
  );
};

export default WarmupPage;
