import { Box } from "@mui/material";

export default function TabPanel({ value, children, index, mt = 4 }) {
  return (
    <div hidden={value !== index} id={`simple-tabpanel-${index}`}>
      {value === index && <Box sx={{ mt }}>{children}</Box>}
    </div>
  );
}
