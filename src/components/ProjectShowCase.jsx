import { Stack, Button, Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectShowCase({ img, link, git }) {
  return (
    <Paper>
      <Stack>
        <img src={img} alt="" />
        <Stack
          justifyContent="space-around"
          alignItems="center"
          py={2}
          direction="row"
        >
          <Button
            href={link}
            target="_blank"
            startIcon={<VisibilityIcon />}
            variant="contained"
          >
            Live View
          </Button>
          <Button
            href={git}
            startIcon={<GitHubIcon />}
            variant="contained"
            target="_blank"
          >
            Repo
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
export default ProjectShowCase;
