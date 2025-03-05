import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, subtitle, icon, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between">
        <Box justifyContent="space-between" mt="2px">
          <Typography variant="h4" pb="8px" sx={{ color: colors.grey[100] }}>
            {title}
          </Typography>
          <Box display="flex" columnGap="14px">
            <img
              alt="profile-user"
              width="24px"
              height="24px"
              src={`../../assets/rising.svg`}
            />
            <Typography pb="8px" variant="h5">
              {increase}
            </Typography>
          </Box>

          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {subtitle}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          {icon}
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
