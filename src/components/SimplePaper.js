import * as React from 'react';
import Paper from '@mui/material/Paper';

export default function SimplePaper({classComponent, children}) {
  return (
      <Paper className={`${classComponent}`} elevation={3}>{children}</Paper>
  );
}