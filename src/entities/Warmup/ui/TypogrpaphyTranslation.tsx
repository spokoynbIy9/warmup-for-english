import { Typography } from "@mui/material";
import { useGetVerbsQuery } from "../api/warmupApi";
import { getRandomIndex } from "@/shared/helpers/getRandomIndex";

// @todo
// придумать логику получше

const TypogrpaphyTranslation = () => {
  const { data } = useGetVerbsQuery();
  const min = 0;
  const max = data?.length ?? 0;
  const randomIndex = getRandomIndex(min, max - 1);

  return (
    <Typography>
      {data ? data[randomIndex].translation : "У слова сегодня выходной"}
    </Typography>
  );
};

export default TypogrpaphyTranslation;
