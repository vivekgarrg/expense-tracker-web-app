import React from "react";

import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderRadius: 0,
  padding: "0",
  margin: 0,
  "& .editIcon": {
    fontSize: "1.1rem",
    [theme.breakpoints.down("xl")]: {
      fontSize: "0.9rem",
    },
  },
}));

export default function EditButton(props) {
  return (
    <StyledIconButton {...props} disableRipple>
      <EditIcon className="editIcon" />
    </StyledIconButton>
  );
}
