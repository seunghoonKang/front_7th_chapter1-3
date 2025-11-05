import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';

import { Event } from '../types';

interface OverlappingDialogProps {
  isOverlapDialogOpen: boolean;
  handleClose: () => void;
  handleContinue: () => void;
  overlappingEvents: Event[];
}

export const OverlappingDialog = ({
  isOverlapDialogOpen,
  handleClose,
  handleContinue,
  overlappingEvents,
}: OverlappingDialogProps) => {
  return (
    <Dialog open={isOverlapDialogOpen} onClose={handleClose}>
      <DialogTitle>일정 겹침 경고</DialogTitle>
      <DialogContent>
        <DialogContentText>다음 일정과 겹칩니다:</DialogContentText>
        {overlappingEvents.map((event) => (
          <Typography key={event.id} sx={{ ml: 1, mb: 1 }}>
            {event.title} ({event.date} {event.startTime}-{event.endTime})
          </Typography>
        ))}
        <DialogContentText>계속 진행하시겠습니까?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button color="error" onClick={handleContinue}>
          계속 진행
        </Button>
      </DialogActions>
    </Dialog>
  );
};
