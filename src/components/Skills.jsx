import { Stack, Typography, Paper } from "@mui/material";
import HtmlIcon from "../Icons/html.png";
import CssIcon from "../Icons/css.png";
import JsIcon from "../Icons/javascript.png";
import ReactIcon from "../Icons/react.png";
import GitIcon from "../Icons/git.png";
import NodeJsIcon from "../Icons/nodejs.png";
import MySqlIcon from "../Icons/mysql.png";
import MuiIcon from "../Icons/mui.png";
import GitHubIcon from "../Icons/github.png";

function Skills() {
  const Icons = [
    { icon: HtmlIcon, name: "HTML" },
    { icon: CssIcon, name: "CSS" },
    { icon: JsIcon, name: "JavaScript" },
    { icon: ReactIcon, name: "React" },
    { icon: GitIcon, name: "Git" },
    { icon: NodeJsIcon, name: "NodeJs" },
    { icon: MySqlIcon, name: "MySql" },
    { icon: MuiIcon, name: "Material-UI" },
    { icon: GitHubIcon, name: "GitHub" },
  ];
  return (
    <Stack
      justifyContent="center"
      p={3}
      gap={3}
      direction="row"
      flexWrap="wrap"
    >
      {Icons.map(({ icon, name }, index) => (
        <Paper sx={{ p: 1 }}>
          <Stack key={index}>
            <img src={icon} height="100px" alt="" />
            <Typography sx={{ userSelect: "none" }} align="center">
              {name}
            </Typography>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
}

export default Skills;
