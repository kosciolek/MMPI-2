import { Box, Table } from "@mui/joy";
import { useResults, useStore } from "./store";
import { memo, useMemo } from "react";
import { scaleHierarchy } from "./mmpi-2/scale-hierarchy";

export const Results = memo(() => {
  const results = useResults();
  const hierarchy = Object.entries(scaleHierarchy);

  const answers = useStore((x) => x.answers);
  const isDone = useMemo(() => {
    for (const answer of answers) {
      if (answer === null) {
        return false;
      }
    }
    return true;
  }, [answers]);

  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: `repeat(${hierarchy.length}, minmax(70px, 1fr))`,
        alignItems: "flex-start",
        gap: ["4px", "8px", "32px"],
        userSelect: "text",
      }}
    >
      {hierarchy.map(([group, scales]) => (
        <Table size="sm" aria-label={`Wyniki dla ${group}`} key={group}>
          {/*   <thead>
              <tr>
                <th style={{ width: "40%" }}>Skala</th>
                <th>Wartość</th>
              </tr>
            </thead> */}
          <caption style={{ minHeight: "80px" }}>{group}</caption>
          <tbody>
            {scales.map((scale) => (
              <tr key={scale}>
                <td style={{ fontWeight: "bold" }}>{scale}</td>
                <td>{isDone ? results[scale] : "--"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
    </Box>
  );
});
