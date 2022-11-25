import { Stack, Button, Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

import styled from "styled-components";

const Image = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 750px;
`;

function ProjectShowCase({ img, link, git }) {
  return (
    <Paper>
      <Stack>
        <Image img={img} alt="" />
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
