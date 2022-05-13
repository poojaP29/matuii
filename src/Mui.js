import * as React from 'react';
import {Avatar,Typography,TextField,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel,Stack,Button,Grid,styled,Paper,Card,CardContent,CardActions,CardHeader} from '@mui/material';
import { useState } from 'react';
import img from './hero.jpg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#3cb371' : '#3cb371',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Mui()
{
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [gender,setGender] = useState("");
    const [place,setPlace] = useState("");
    const [data,setData] = useState([]);
    const [num,setNum] = useState(1);
    const [id,setId] = useState("");
    const [flag,setFlag] = useState("false"); 
    const submit = () => {
        if(flag==="false")
        {
            let newData = {id:num,name,description,gender,place};
            setData([...data,newData])
            setNum(num+1)
        }
        else
        {
            let replaceData = data.filter(findData => findData.id !== id)
            let updateData = {id,name,description,gender,place}
            setData([...replaceData,updateData])
        }
        setFlag("false") 
        setName("")
        setDescription("")
        setGender("")
        setPlace("")
    }
    const remove = (id) =>{
        let deleteData = data.filter(findData => findData.id !== id)
        setData(deleteData)
    } 
    const edit = (id) =>{
        let editData = data.filter(findData => findData.id === id)
        setName(editData[0].name)
        setDescription(editData[0].description)
        setGender(editData[0].gender)
        setPlace(editData[0].place)
        setId(editData[0].id)
        setFlag("true")
    }
    console.log(data)
    return(
        <div className="form">
            <Grid container spacing = {1} >
            <Grid item xs={6}>
            <Item>
            <FormControl sx={{width:"100%",height:"100%"}}>
            {/* Name field */}
                <div>
                    <TextField sx={{width:"100%",}} id="name" label="Name" value={name} variant="outlined" onChange={(n) => setName(n.target.value)}/>
                </div>
                <br></br>
                <br></br>
                
            {/* Description */}
                <div>
                    <TextField sx={{width:"100%",}} id="description" label="Description" multiline rows={4} value={description} onChange={(f) => setDescription(f.target.value)}/>
                </div>
                <br></br>
                <br></br>

            {/* Gender */}
                <div>
                <FormControl>
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup aria-labelledby="gender" name="Gander" value={gender} onChange={(g) => setGender(g.target.value)}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                </div>

                <br></br>
                <br></br>

                {/* place */}

                <div>
                    <TextField sx={{width:"100%",}} id="place" label="Place" value={place} variant="outlined" onChange={(n) => setPlace(n.target.value)}/>
           </div>

           <br></br>
            <br></br>
            
           {/* submit  */}
                
                <div>
                
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained"  onClick={() => submit()}>Submit </Button>
                    </Stack>
                </div>
                
            </FormControl>
            </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                <div>
                    {
                        data && data.map(final => {
                            return(
                                <Card sx={{minWidth:100}}>
                                    <CardHeader avatar={
                                        <Avatar alt="hero" src={img} sx={{width:100,height:100,}} />
                                    }
                                    />
                                    <CardContent> 
                                        <Typography gutterBottom variant="h5">Name:{final.name}</Typography>
                                        <Typography gutterBottom variant="h5">Description:{final.description}</Typography>
                                        <Typography gutterBottom variant="h5">Gender:{final.gender}</Typography>
                                        <Typography gutterBottom variant="h5">Place:{final.place}</Typography>
                                    </CardContent>
                                    <CardActions> 
                                        <Button size="small" onClick={() => edit(final.id)}>Edit</Button>
                                        <Button size="small" onClick={() => remove(final.id)}>Delete</Button>
                                    </CardActions>
                                </Card>
                                
                            )
                        }) 
                    }
                </div>
                </Item>
            </Grid>
            </Grid>
        </div>
    );
}
export default Mui;