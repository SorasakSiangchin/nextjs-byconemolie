import { Button, Stack } from '@mui/material';
import * as React from 'react';


export default function MuiPage() {
  return (
    <>
      <BasicButtons label='ClickMe' color='pink'/>
    </>
    
  );
}

type BasicButtonsProps = {
  label : string ,
  color : string
};

function BasicButtons({ label , color } : BasicButtonsProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" style={{ backgroundColor : color }}>{label}</Button>
    </Stack>
  );
}