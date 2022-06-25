import React from "react";
import Box from "@mui/material/Box";
import FileUpload from "react-mui-fileuploader";
import Modal from "@mui/material/Modal";
import {TextField,Button} from "@mui/material"

const CreateAdvertisementModal = ({ 
  open, 
  handleClose ,
}) => {
    const handleFileUploadError = (error) => {
        // Do something...
      };
    
      const handleFilesChange = (files) => {
        // Do something...
      };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #FFF",
    borderRadius: "0.5rem",
    p: 4,
    overflowY: "auto",
    maxHeight: "calc(100vh - 100px)",
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField
              sx={{ width: "100%", marginBottom: 2 }}
              id="outlined-helperText"
              label="title"
            />
        <FileUpload
              multiFile={true}
              disabled={false}
              title="photo upload"
              header="Drag to drop"
              leftLabel="or"
              rightLabel="to select photo"
              buttonLabel="click here"
              buttonRemoveLabel="Remove all"
              maxFileSize={10}
              maxUploadFiles={0}
              maxFilesContainerHeight={357}
              errorSizeMessage={
                "fill it or move it to use the default error message"
              }
              allowedExtensions={["jpg", "jpeg"]}
              onFilesChange={handleFilesChange}
              onError={handleFileUploadError}
              bannerProps={{ elevation: 0, variant: "outlined" }}
              containerProps={{ elevation: 0, variant: "outlined" }}
            />
            
           
            <div style={{display:"flex",justifyContent:"flex-end",alignItem:"center",marginTop:20}}>
                <Button variant="contained" size="small">ဖန်တီးရန်</Button>
            </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateAdvertisementModal;