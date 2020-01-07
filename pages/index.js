import React, { useState, useMemo } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import theme from '../src/theme';

import HTMLTextbox from '../src/components/HTMLTextbox';

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

export default function Index() {
  const [currentTab, setCurrentTab] = useState(0);
  const [textData, setTextData] = useState('');

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleChangeIndex = (index) => {
    setCurrentTab(index);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
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
        >

          <HTMLTextbox text={textData} />
          {/* <Editor editorState={editorState} onChange={setEditorState} /> */}

          {/* <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
            <Editable />
          </Slate> */}
          {/* <div>
            Item Three
          </div> */}
          <div>
            Item Three
          </div>
          <div>
            Item Three
          </div>
        </SwipeableViews>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
