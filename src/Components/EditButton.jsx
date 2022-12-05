import React from "react";

import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "#ED6E52",
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
    <StyledIconButton {...props} disableRipple={true}>
      <EditIcon className="editIcon" />
    </StyledIconButton>
  );
}
