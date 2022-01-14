import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from './Header';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import HousesList from './HousesList';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const houses = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];

const Main = () => {
    const [page, setPage] = useState(1);
    const [fromPrice, setFromPrice] = useState();
    const [toPrice, setToPrice] = useState();
    const [itemData, setItemData] = useState(houses.slice(0, 9));
    const handleChange = (event, value) => {
        setPage(value);
        setItemData(houses.slice((value - 1) * 9, (value - 1) * 9 + 9));
    };
    const resto = houses.length % 9;
    const [count, setCount] = useState(resto === 0 ? parseInt(houses.length / 9) : parseInt(houses.length / 9) + 1);

    const handleChangeFromPrice = (e) => {
      setFromPrice(e.target.value);
    };
    const handleChangeToPrice = (e) => {
      setToPrice(e.target.value);
    };

    return (
        <>
            <Header />
            <Box sx={{ p: 1, backgroundColor: '#9E9E9E'}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                        <Box height="88vh" display="flex" flexDirection="column" backgroundColor="#FAFAFA" sx={{ border: '1px solid grey', borderRadius: 2, alignItems: 'center'  }}>
                          <div>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#9E9E9E", fontWeight: 'bold'}}>
                              Filtros
                            </Typography>
                          </div>
                          <div>
                          <Grid container spacing={1} sx={{alignItems: 'center'}}>
                            <Grid item xs={3} style={{paddingLeft: 16}}>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 'small', marginTop: 1}}>
                                Price:
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                margin="normal"
                                fullWidth
                                hiddenLabel
                                id="fromPrice"
                                label="From"
                                name="fromPrice"
                                autoComplete="fromPrice"
                                size="small"
                                value={fromPrice}
                                onChange={handleChangeFromPrice}
                              />
                            </Grid>
                            <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                fullWidth
                                hiddenLabel
                                id="toPrice"
                                label="To"
                                name="toPrice"
                                autoComplete="toPrice"
                                size="small"
                                value={toPrice}
                                onChange={handleChangeToPrice}
                              />
                            </Grid>
                          </Grid>
                          </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box height="88vh" display="flex" flexDirection="column" backgroundColor="#FAFAFA" sx={{ border: '1px solid grey', borderRadius: 2, justifyContent: 'center', alignItems: 'center' }}>
                            {
                                itemData.length === 0 ? <div>No hay Viviendas</div> :
                                <>
                                    <HousesList itemData={itemData}/>
                                    <Stack spacing={2} style={{alignItems: 'center', marginBottom: 4}}>
                                        <Pagination count={count} page={page} onChange={handleChange} variant="outlined" color="primary"/>
                                    </Stack>
                                </>
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Main;