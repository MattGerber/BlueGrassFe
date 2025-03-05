import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({
  progress = "0.75",
  size = "40",
  text = "Pending",
  color = "",
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box display="flex" justifyContent="space-between" gap="40px">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: `radial-gradient(${colors.primary[500]} 55%, transparent 56%),
          conic-gradient(transparent 0deg ${angle}deg, #efefef ${angle}deg 360deg),
          ${color}`,
          borderRadius: "50%",
          width: `80px`,
          height: `80px`,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          {size}%
        </Typography>
      </Box>
      <Box>
        <Typography
          fontWeight="700"
          fontSize="24px"
          pb="8px"
          sx={{ color: colors.grey[100] }}
        >
          {size}%
        </Typography>
        <Typography fontSize="14px" pb="8px" sx={{ color: colors.grey[200] }}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressCircle;
