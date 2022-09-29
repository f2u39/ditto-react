import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Badge, Box, Divider, Grid, InputAdornment, Tabs, TextField } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Boxes, Tablet, PcDisplay, NintendoSwitch, Playstation, Xbox } from 'react-bootstrap-icons';
import { Code, CodeSlash } from 'react-bootstrap-icons';
import { Battery, BatteryCharging, BatteryFull } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CusTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Game2() {
    const [status, setStatus] = useState('0');
    const [value, setValue] = useState('1');
  
    const handleStatusChange = (event: React.SyntheticEvent, newValue: string) => {
      setStatus(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={status}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleStatusChange}>
              <Tab label="Item One" value="1" />
              <Tab label="Item Zero" value="0" />
              <Tab label="Item Minus One" value="-1" />
            </TabList>
          </Box>
          <TabPanel value={status}>
            <Game3 />
          </TabPanel>
        </TabContext>
      </Box>
    );
  }

function Game3() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
        
    return(
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab icon={<Boxes color="green" size={5} />} {...a11yProps(0)} />
                <Tab icon={<PcDisplay color="orange" size={5} />} {...a11yProps(1)} />
                <Tab icon={<Playstation color="skyblue" size={5} />} {...a11yProps(2)} />
                <Tab icon={<NintendoSwitch color="red" size={5} />} {...a11yProps(3)} />
                <Tab icon={<Xbox color="green" size={5} />} {...a11yProps(4)} />
                <Tab icon={<Tablet color="green" size={5} />} {...a11yProps(5)} />
            </Tabs>
            <CusTabPanel value={value} index={0}>
                PC
            </CusTabPanel>
            <CusTabPanel value={value} index={1}>
                PlayStation
            </CusTabPanel>
            <CusTabPanel value={value} index={2}>
                Nintendo Switch
            </CusTabPanel>
            <CusTabPanel value={value} index={3}>
                Xbox
            </CusTabPanel>
        </Box>
    )
}