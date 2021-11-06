import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Tesseract from 'tesseract.js';

import { RecognizedStore } from './RecognizedStore'

let rs = new RecognizedStore("");

function recognize(file: File, lang: string) {
    return Tesseract.recognize(file, lang, {
        logger: data => console.log(data),
      })
     .then(({ data: {text }}) => {
       return text;
     })
  }

const styles = {
    root: {
      background: 'linear-gradient(45deg, #283872 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  };
  let selectedFile: File;

  function fileUploadAction() {
    rs.sendMessage("recognizing...");
    recognize(selectedFile, "eng").then((data) => {
        rs.sendMessage(data);
        console.log(data);
      })
  }

    function onFileChange(event: any) {
        selectedFile = event.target.files[0]; 
    }
  
  function ContainedButtons(props: any) {
    const { classes } = props;
    return (
        <div>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={onFileChange} />
            <label htmlFor="contained-button-file">
                <Button 
                    className={classes.root}
                    onClick={fileUploadAction}>Upload</Button>
            </label>
            <br/>
            <div>
                <pre>
                    {rs.state}
                </pre>
            </div>
        </div>
    );
  }
  
  ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ContainedButtons);