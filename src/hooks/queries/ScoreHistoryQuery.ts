import { CustomUseQueryOptions, ScoreHistory } from "@types";
import axios from "axios";
import { DateTime } from "luxon";
import { useQuery, UseQueryResult } from "react-query";

export type ScoreHistoryParams = {
  start?: string;
  end?: string;
  select?: string;
  desc?: boolean;
};

export const fetchScoreHistory = async (
  clanId: string,
  params?: ScoreHistoryParams
): Promise<ScoreHistory[]> => {
  const { data } = await axios.get<ScoreHistory[]>(
    `/helo-api/clan/${clanId}/score_history`,
    { params }
  );
  return data.map((dataPoint) => {
    dataPoint.date = DateTime.fromMillis(
      parseInt(dataPoint._created_at.$date, 10)
    ).toISODate();
    return dataPoint;
  });
};

export const useScoreHistory = <T = ScoreHistory[]>(
  clanId: string,
  params?: ScoreHistoryParams,
  options?: CustomUseQueryOptions<ScoreHistory[], T>
): UseQueryResult<T> =>
  useQuery(
    ["clan", clanId, "score_history", params],
    () => fetchScoreHistory(clanId, params),
    options
  );
