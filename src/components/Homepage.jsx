import * as React from 'react';
import { Box, Drawer, Typography, Grid, List, ListItem, InputBase, ListItemText, Avatar, Icon, ListItemButton } from '@mui/material';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';

const drawerWidth = 240;

const items = [
  {
    id: 1,
    icon: <SpaceDashboardOutlinedIcon />,
    name: 'Dashboard'
  },
  {
    id: 2,
    icon: <ViewInArOutlinedIcon />,
    name: 'Product'
  },
  {
    id: 3,
    icon: <AccountBoxOutlinedIcon />,
    name: 'Customers'
  },
  {
    id: 4,
    icon: <AccountBalanceWalletOutlinedIcon />,
    name: 'Income'
  },
  {
    id: 5,
    icon: <StarsOutlinedIcon />,
    name: 'Promot'
  },
  {
    id: 6,
    icon: <FeedbackOutlinedIcon />,
    name: 'Help'
  },
]

const carditems = [
  {
    id: 1,
    bgclr: '#b9f6ca',
    clr: '#1b5e20',
    icon: <CurrencyExchangeOutlinedIcon sx={{ fontSize: 40 }} />,
    name1: 'Earning',
    name2: '$198k',
    name3icn: <NorthOutlinedIcon sx={{ fontSize: 12 }} />,
    name3clr: 'green',
    name31: '37.8%',
    name32: 'this month'
  },
  {
    id: 2,
    bgclr: '#e1bee7',
    clr: '#4a148c',
    icon: <ArticleOutlinedIcon sx={{ fontSize: 40 }} />,
    name1: 'Orders',
    name2: '$2.4k',
    name3icn: <SouthOutlinedIcon sx={{ fontSize: 12 }} />,
    name3clr: 'red',
    name31: '2%',
    name32: 'this month'
  },
  {
    id: 3,
    bgclr: '#bbdefb',
    clr: '#0d47a1',
    icon: <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 40 }} />,
    name1: 'Balance',
    name2: '$2.4k',
    name3icn: <SouthOutlinedIcon sx={{ fontSize: 12 }} />,
    name3clr: 'red',
    name31: '2%',
    name32: 'this month'
  },
  {
    id: 4,
    bgclr: '#f8bbd0',
    clr: '#880e4f',
    icon: <ShoppingBagOutlinedIcon sx={{ fontSize: 40 }} />,
    name1: 'Total Sales',
    name2: '$89k',
    name3icn: <NorthOutlinedIcon sx={{ fontSize: 12 }} />,
    name3clr: 'green',
    name31: '11%',
    name32: 'this month'
  },
]
//bar chart
const data = [0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0]
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//pie chart
const piedata = [
  { value: 5 },
  { value: 10 },
  { value: 15 },
];

const size = {
  width: 230,
  height: 200,
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));


function Dashboard() {
  const width=useDrawingArea().width;
  const height=useDrawingArea().height;
  const left=useDrawingArea().left;
  const top=useDrawingArea().top;
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: '#4a148c',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Grid container display={'flex'} flexDirection={'column'}>
          <Grid item>
            <Grid item container display={'flex'} flexDirection={'column'} rowSpacing={0.1}>
              <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} columnGap={1} px={3} pb={2} mt={3}>
                <TokenOutlinedIcon sx={{ color: 'white', fontSize: '30px' }} />
                <Typography variant='h5' color={'white'} fontWeight={'bolder'}>Dashboard</Typography>
              </Grid>
              {items.map((item) => (
                <List key={item.id} disablePadding>
                  {generate(
                    <ListItemButton sx={{height:'50px'}}>
                      <ListItem
                        secondaryAction={
                          <Icon edge="end" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '20px', color: 'white' }}>
                            <KeyboardArrowRightOutlinedIcon />
                          </Icon>
                        }>
                        <Icon sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '25px', color: 'white' }}>{item.icon}</Icon>
                        <ListItemText
                          primary={item.name}
                          primaryTypographyProps={{ color: 'white', pl: 1, fontSize: '12px' }}
                        />
                      </ListItem>
                    </ListItemButton>,
                  )}
                </List>
              ))}
            </Grid>
          </Grid>
          <Grid item>

          </Grid>
        </Grid>
      </Drawer>
      <Box component="main" sx={{ px: 5, py: 3, background: '#cfd8dc' }}>
        <Grid container display={'flex'} flexDirection={'column'} rowGap={3}>
          <Grid item>
            <Grid container display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
              <Grid item>
                <Typography variant='20px' fontWeight={'bold'}>Hello, Rakshitha👋</Typography>
              </Grid>
              <Grid item>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                  />
                </Search>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container display={'flex'} flexDirection={'row'} columnGap={5.6}>
              {carditems.map((item) => (
                <Grid item sx={{ boxShadow: 2, borderRadius: '5px', bgcolor: 'white' }}>
                  <Grid container display={'flex'} flexDirection={'row'} alignItems={'center'} columnGap={3} p={2} key={item.id}>
                    <Grid item>
                      <Avatar sx={{ width: 80, height: 80, background: item.bgclr, color: item.clr }}>{item.icon}</Avatar>
                    </Grid>
                    <Grid item>
                      <Typography color={'#455a64'} fontSize={'10px'}>{item.name1}</Typography>
                      <Typography fontSize={'20px'} fontWeight={'bold'}>{item.name2}</Typography>
                      <Typography fontSize={'12px'}><span style={{ color: item.name3clr, fontWeight: 'bolder' }}>{item.name3icn}</span>
                        <span style={{ color: item.name3clr, fontWeight: 'bolder' }}>{item.name31}</span>
                        {item.name32}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container display={'flex'} flexDirection={'row'} columnGap={5}>
              <Grid item>
                <Grid container display={'flex'} flexDirection={'column'}
                  sx={{ boxShadow: 2, borderRadius: '5px', bgcolor: 'white', p: 3 }}>
                  <Grid item display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                    <Grid item>
                      <Typography fontSize={'18px'} fontWeight={'bolder'}>Overview</Typography>
                      <Typography fontSize={'12px'} color={'#607d8b'}>Monthly Earning</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>Quaterly</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <BarChart
                      width={680}
                      height={200}
                      series={[
                        { data: data, type: 'bar' }
                      ]}
                      xAxis={[{ data: labels, scaleType: 'band' }]}
                      yAxis={[{ data: data }]}
                    />
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item display={'flex'} flexDirection={'column'} alignContent={'center'}
                sx={{ background: 'white', borderRadius: '5px', boxShadow: 2, p: 3 }}>
                <Typography fontSize={'18px'} fontWeight='bold'>Customers</Typography>
                <Typography fontSize={'10px'} color={'#757575'}>Customers that buy the products</Typography>
                <PieChart series={[{ data: piedata, innerRadius: 40 }]} {...size}>
                <StyledText x={left + width / 2} y={top + height / 2}>
                   <Typography>65%</Typography>
                </StyledText>
                </PieChart>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
