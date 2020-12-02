import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import DarkBluePaper from '../styles/paper';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function PolicyDialog({ content, data }): ReactElement {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <span>
      <Button
        style={{ color: '#12a8f3' }}
        type="button"
        onClick={handleClickOpen}
      >
        {data.shortTitle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        PaperComponent={DarkBluePaper}
        aria-labelledby={data.slug}
        aria-describedby={`${data.slug}-description`}
        fullScreen={fullScreen}
      >
        <DialogTitle id={data.slug}>{data.title}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText
            id={`${data.slug}-description`}
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <ReactMarkdown source={content} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </span>
  );
}

export default PolicyDialog;
