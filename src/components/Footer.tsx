import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      className="no-print"
      sx={{
        px: 3,
        py: 2,
        mt: "auto",
        borderTop: "1px solid var(--color-border)",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Built with React &amp; Material UI &middot; Hosted on GitHub Pages
      </Typography>
    </Box>
  );
}
