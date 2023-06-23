import * as React from 'react';
import Paper from '@mui/material/Paper';

export default function SimplePaper({children}) {
  return (
      <Paper elevation={3}>{children}</Paper>
  );
}