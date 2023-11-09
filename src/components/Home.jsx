import React from 'react'
import { Card, Grid, Paper, Stack, Typography, Box, BottomNavigation } from '@mui/material'
import  BrainIcon  from '../components/assets/images/icon-memory.svg'
import  ReactionIcon  from '../components/assets/images/icon-reaction.svg'
import  VerbalReaction  from '../components/assets/images/icon-verbal.svg'
import  VisualIcon  from '../components/assets/images/icon-visual.svg'

import '../components/Home.css'

const Home = (props) => {
  
  return (
    <div>
        <div>
             
           <Stack component='div' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
           <Paper component='div' sx={{height: 'auto', width: 'auto', marginTop: '10%',
           borderRadius: '30px'
           
          }}
           
          >
              <Grid container spacing={4} width='700px' alignSelf='center' justifySelf='center'>
                <Grid item sx={12} sm={12} md={6} lg={6}>
                <Box component='div' className='box-item ' id='box1' sx={{
                    width: 'auto', 
                    height: '500px',
                    background: '', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'


                  }}>
                    <Typography variant='h3' color='hsl(241, 100%, 89%)' marginTop='20px'>
                      Your result
                    </Typography>

                    <Stack className='circle' component='div' width='200px' height='200px' borderRadius='50%' display='flex' flexDirection='column' alignContent='center' justifyContent='center'>
                      <Typography variant='h1'  color='#fff'>
                        76
                      </Typography>
                      <Typography variant='h6' color='hsl(241, 100%, 89%)'>
                        of 100
                      </Typography>
                    </Stack>
                    <br />

                    <Stack width='80%'> 
                    <Typography color='#fff' variant='h2'>
                      Great
                    </Typography>
                    <br/>

                    <Typography color='hsl(241, 100%, 89%)' variant='h6'>
                      You scored higher than 65% of the people who have taken the tests.
                    </Typography>
                    <br/>
                    <br/>
                    </Stack>
                  </Box>
                </Grid>

                <Grid item sx={12} sm={12} md={6} lg={6} className='summary-grid'>
                  <Box sx={{padding: '15px 15px', display: 'flex', flexDirection: 'column', justifyContent:'center', alignContent: 'center', paddingTop: '', gap: '30px'}}>
                    <Typography variant='h3'>
                      Summary
                    </Typography>
                    <Stack direction='column' className='summary-group' spacing={2}>
                      <Stack direction='row' className='summary first' sx={{background: "hsla(241, 100%, 89%, 0.5)"}}>
                        <Stack direction='row' spacing={3}>
                        <img src={BrainIcon} alt='should be here'/>
                        <Typography className='summary-text'>
                          Memory
                        </Typography>

                        </Stack>
                        <Typography className='summary-score'>
                          92 / 100
                        </Typography>
                      </Stack>

                      <Stack direction='row' className='summary first' sx={{background: "hsla(256, 72%, 46%, 0.3)"}}>
                        <Stack direction='row' spacing={3}>
                        <img src={VisualIcon} alt='should be here'/>
                        <Typography className='summary-text'>
                          Visual
                        </Typography>

                        </Stack>
                        <Typography className='summary-score'>
                          70 / 100
                        </Typography>
                      </Stack>

                      <Stack direction='row' className='summary first' sx={{background: "hsla(221, 100%, 96%, 1)"}}>
                        <Stack direction='row' spacing={3}>
                        <img src={ReactionIcon} alt='should be here'/>
                        <Typography className='summary-text'>
                          Reaction
                        </Typography>

                        </Stack>
                        <Typography className='summary-score'>
                          92 / 100
                        </Typography>
                      </Stack>

                      <Stack direction='row' className='summary first' sx={{background: "hsla(241, 100%, 89%, 0.5)"}}>
                        <Stack direction='row' spacing={3}>
                        <img src={VerbalReaction} alt='should be here'/>
                        <Typography className='summary-text'>
                          Memory
                        </Typography>

                        </Stack>
                        <Typography className='summary-score'>
                         80 / 100
                        </Typography>
                      </Stack>
                    </Stack>
                    <button className='continue-btn'>Continue</button>

                  </Box>

                  
                 
                </Grid>

              </Grid>

            </Paper>


           </Stack>
        </div>
    </div>
  )
}

export default Home
