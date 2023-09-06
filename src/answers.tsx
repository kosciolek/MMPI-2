import { Box, Button, Link, Stack, ToggleButtonGroup, Typography, useTheme } from "@mui/joy";
import { useStore } from "./store";
import * as Icons from "@mui/icons-material";
import React, { memo, useMemo, useRef } from "react";
import { questionCount } from "./mmpi-2/utils";

export const Answers = memo(() => {
  const page = useStore((x) => x.page);

  const array = useMemo(() => {
    const arr: React.ReactNode[][] = [];

    for (let i = 0; i < questionCount; i++) {
      if (i % 100 === 0) {
        arr.push([]);
      }
      arr[arr.length - 1]!.push(<Answer key={i} index={i} />);
    }

    return arr;
  }, []);

  const pages = useMemo(
    () =>
      array.map((chunk, i) => (
        <div key={i} style={{ display: i === page ? "contents" : "none" }}>
          {chunk}
        </div>
      )),
    [array, page]
  );

  const answers = useStore((x) => x.answers);
  const remaining = useMemo(() => {
    let remaining = 0;

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === null) {
        remaining += 1;
      }
    }
    return remaining;
  }, [answers]);

  const pagesRef = useRef<HTMLDivElement | null>(null);

  const theme = useTheme();
  const setPageToUnanswered = useStore((x) => x.setPageToFirstQuestionWithoutAnswer);
  const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null);
  const highlightUnanswered = () => {
    setPageToUnanswered();
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    pagesRef.current?.scrollIntoView({ block: "center" });
    document.querySelectorAll("[data-unanswered=true]").forEach((el) => {
      (el as HTMLElement).style.outlineColor = theme.palette.danger[400];
      timeoutRef.current = setTimeout(() => {
        (el as HTMLElement).style.outlineColor = "transparent";
        timeoutRef.current = null;
      }, 1500);
    });
  };

  return (
    <Stack alignItems="center" spacing={4}>
      <Typography textAlign="center">
        {remaining === 0 ? (
          "Podano odpowiedzi na wszystkie pytania."
        ) : (
          <>
            Zostało{" "}
            <Typography component="span" color="primary">
              {remaining}
            </Typography>{" "}
            pytań bez odpowiedzi. <Link onClick={() => highlightUnanswered()}>Kliknij, by podświetlić.</Link>
          </>
        )}
      </Typography>
      <Pagination />
      <Box
        ref={pagesRef}
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "8px",
        }}
      >
        {pages}
      </Box>
      <Pagination />
    </Stack>
  );
});

const Answer = memo(({ index }: { index: number }) => {
  const answer = useStore((x) => x.answers[index]);
  const setAnswer = useStore((x) => x.setAnswer);

  const readableIndex = index + 1;
  const padding = readableIndex < 100 && (
    <Typography component="span" fontFamily="monospace" sx={{ color: (t) => t.palette.neutral[300] }}>
      {readableIndex < 10 ? "00" : "0"}
    </Typography>
  );

  return (
    <Stack direction="row" spacing={1} alignItems="baseline" flexGrow={1}>
      <Typography fontFamily="monospace">
        {padding}
        {readableIndex.toString()}.
      </Typography>
      <ToggleButtonGroup
        data-unanswered={answer === null}
        sx={{
          transition: "outline-color 200ms",
          outlineStyle: "solid",
          outlineWidth: "2px",
          outlineColor: "transparent",
        }}
        aria-label={`Pytanie numer ${readableIndex}`}
        value={answer === null ? "null" : answer.toString()}
        onChange={(_, newValue) => setAnswer(index, newValue === null ? null : newValue === "true" ? true : false)}
      >
        <Button color={answer === true ? "primary" : undefined} value="true">
          Tak
        </Button>
        <Button color={answer === false ? "primary" : undefined} value="false">
          Nie
        </Button>
      </ToggleButtonGroup>
    </Stack>
  );
});

const Pagination = memo(() => {
  const page = useStore((x) => x.page);
  const setPage = useStore((x) => x.setPage);

  const pageSize = useStore((x) => x.pageSize);
  const maxPage = Math.floor(questionCount / pageSize);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button
        disabled={page === 0}
        startDecorator={<Icons.KeyboardArrowLeft />}
        onClick={() => setPage(Math.max(0, page - 1))}
      >
        -{pageSize}
      </Button>
      <Typography minWidth={100} textAlign="center">
        {(page * pageSize).toString().padStart(3, "0")} - {Math.min((page + 1) * pageSize, questionCount)}
      </Typography>
      <Button
        disabled={page === maxPage}
        endDecorator={<Icons.KeyboardArrowRight />}
        onClick={() => setPage(Math.min(page + 1, maxPage))}
      >
        +{pageSize}
      </Button>
    </Stack>
  );
});
