import {useEffect, useState} from 'react';
import '../App.css';
import axios from 'axios'
import Loading from './Loading';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Unstable_Grid2'

const options = [
    "Back",
    "Cardio",
    "Chest",
    "Lower arms",
    "Lower legs",
    "Shoulders",
    "Upper arms",
    "upper legs",
    "waist"
]
const defaultOption = options[0];
const options1 = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
        'X-RapidAPI-Key': '0754928690mshb7a7766a9ac26fdp1ac6e3jsn9b2b8353b7c0',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

function Gym_wokrout() {
    const [value1, setvalue1] = useState('')
    const [Hworkout, setHworkout] = useState()
    const [loading, setloading] = useState(false)
    const val = async () => {
        try {
            const data1 = await axios
                .request(options1)
                .then(res => {
                    console.log(res)
                    setHworkout(res.data)
                })
                .catch(function (error) {
                    console.error(error);
                });
            setloading(true)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        val()
    }, [])
    const valchange = (e) => {
        setvalue1(e.target.id.toLowerCase())
    }
    const valchangedrop = (e) => {
        setvalue1(e.value.toLowerCase())
        console.log(e.value.toLowerCase())
    }
    return (
        <div className="App">

            <ButtonGroup variant="outlined" aria-label="outlined button group" id='buttons'>
                <Button onClick={valchange} id='Back'>Back</Button>
                <Button onClick={valchange} id='Cardio'>Cardio</Button>
                <Button onClick={valchange} id='Lower arms'>Lower arms</Button>
                <Button onClick={valchange} id='Lower legs'>Lower legs</Button>
                <Button onClick={valchange} id='Shoulders'>Shoulders</Button>
                <Button onClick={valchange} id='Upper arms'>Upper arms</Button>
                <Button onClick={valchange} id='upper legs'>upper legs</Button>
                <Button onClick={valchange} id='waist'>waist</Button>
            </ButtonGroup>
            <div className='drop'>
                <Dropdown
                    options={options}
                    onChange={valchangedrop}
                    value={defaultOption}
                    placeholder="Select an option"
                    className='dropdown'/>
            </div>
            <p>{
                    loading
                        ? <div>
                                <Grid container="container" spacing={2}>{
                                        Hworkout
                                            .filter((data) => {
                                                return data.bodyPart === value1 && data.equipment !== "assisted" && data.equipment !== "band" && data.equipment !== "body weight" && data.equipment !== "resistance band" && data.equipment !== "stability ball" && data.equipment !== "upper body ergometer"
                                            })
                                            .map((data) => {
                                                return (
                                                    <Grid item="item" lg={4} xs={6} className="exercise">
                                                        <figure className='exercise_desc'>
                                                            <img src={data.gifUrl}></img>
                                                            <figcaption>{data.name}</figcaption>
                                                        </figure>
                                                    </Grid>
                                                )
                                            })

                                    }
                                </Grid>
                            </div>
                        : <Loading/>
                }</p>
        </div>
    );
}

export default Gym_wokrout;
