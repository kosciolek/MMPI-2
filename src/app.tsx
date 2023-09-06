import { Box, Button, Container, Divider, Stack, ToggleButtonGroup } from "@mui/joy";
import { useStore } from "./store";
import * as Icons from "@mui/icons-material";
import { Results } from "./results";
import { Answers } from "./answers";

export const App = () => {
  const gender = useStore((x) => x.gender);
  const setGender = useStore((x) => x.setGender);
  const mode = useStore((x) => x.mode);
  const setMode = useStore((x) => x.setMode);
  const reset = useStore((x) => x.reset);

  return (
    <Container sx={{ userSelect: "none" }}>
      <Stack pt={4} direction="row" justifyContent="space-between" gap={2}>
        <ToggleButtonGroup
          value={gender}
          onChange={(_, newValue) => {
            if (newValue !== null) {
              setGender(newValue);
            }
          }}
        >
          <Button color={gender === "female" ? "primary" : undefined} value="female" startDecorator={<Icons.Female />}>
            Kobieta
          </Button>
          <Button color={gender === "male" ? "primary" : undefined} value="male" startDecorator={<Icons.Male />}>
            Mężczyzna
          </Button>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={mode}
          onChange={(_, newValue) => {
            if (newValue !== null) {
              setMode(newValue);
            }
          }}
        >
          <Button color={mode === "ten" ? "primary" : undefined} value="ten">
            Skala tenowa (T)
          </Button>
          <Button color={mode === "k" ? "primary" : undefined} value="k">
            Skala kontrolna (K)
          </Button>
          <Button color={mode === "raw" ? "primary" : undefined} value="raw">
            Surowe wyniki
          </Button>
        </ToggleButtonGroup>
        <Button
          variant="outlined"
          onClick={() => {
            const confirmed = window.confirm("Czy jesteś pewien? Wszystkie odpowiedzi zostaną wyzerowane.");
            if (confirmed) {
              reset();
            }
          }}
        >
          Reset
        </Button>
      </Stack>
      <Divider sx={{ my: 4 }} />
      <Results />
      <Divider sx={{ my: 4 }} />
      <Answers />
      <Box mb={4} />
    </Container>
  );
};
