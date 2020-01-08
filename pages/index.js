import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import theme from '../src/theme';

import { i18n, Link, withTranslation } from '../i18n'
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import './index.css';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Index({t}) {
  const [currentTab, setCurrentTab] = useState(0);
  const [textData, setTextData] = useState('');

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleChangeIndex = (index) => {
    setCurrentTab(index);
  };

  // draft
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(),
  );

  // slate
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);

  return (
    <Grid container>
      <Grid item xs={3} style={{paddingLeft: '1em'}}>
        <h2>{t('Instructions')}:</h2>
        <ol>
          <li>{t('Select a textbox.')}</li>
          <li>Click on textbox.</li>
          <li>Write text.</li>
        </ol>
        <Button
          type='button'
          variant="contained"
          color="primary"
          size="small"
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >Change Language</Button>
      </Grid>
      <Grid item xs={6}>
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              {t('Textbox Comparison')}
            </Typography>
            <Paper>
              <Tabs
                value={currentTab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="HTML" />
                <Tab label="Draft" />
                <Tab label="Slate" />
              </Tabs>
            </Paper>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={currentTab}
              onChangeIndex={handleChangeIndex}
              className="tab-content"
            >

              <TextField id="standard-basic" multiline rows="3" fullWidth/>
              <Editor editorState={editorState} onChange={setEditorState} />

              <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
                <Editable />
              </Slate>
              {/* <div>
                Item Three
              </div> */}
            </SwipeableViews>
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
}
Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Index)