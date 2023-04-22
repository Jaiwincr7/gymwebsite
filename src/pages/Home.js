import '../App.css';
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import { Link,Outlet } from "react-router-dom"
import backgroundImage from "../background.jpg"

function Home() {
    return (
        <div className="App">
        <ul>
        <li><Link to="/home" className='nav-link'>Home</Link></li>
        <li><Link to="/workout" className='nav-link'>Workout</Link></li>
        <li><Link to="/about" className='nav-link'>About</Link></li>
      </ul>
                <Parallax pages={3} className='para'>
                    <ParallaxLayer
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundPosition: 'top',
                            backgroundSize: 'cover',
                        }}></ParallaxLayer>
                    <ParallaxLayer
                        sticky={{
                            start: 0.3,
                            end: 0.3    
                        }}>
                        <div className='home_quote'>Nothing will <span className='work'>work</span><br/> unless you do</div>
                        <p className='home_para'><hr></hr>Start the Journey</p>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={1.15}
                        speed={0.3}
                        style={{
                            backgroundImage: `url('https://th.bing.com/th/id/R.c3abf75548cc467eb02c7b0b5d779c4e?rik=WhyEnibkj1q%2fRQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffitness%2ffitness_PNG91.png&ehk=W6mPf%2bpun4ldabrOydF11IJUcCV2aEbrufm7PBGW4FI%3d&risl=&pid=ImgRaw&r=0')`,
                            backgroundPosition: 'center'
                        }}></ParallaxLayer>
                    <ParallaxLayer
                        sticky={{
                            start: 1.5,
                            end: 1.5
                        }}>
                        <h2
                            style={{
                                color: '#7862F8'
                            }}>Guide for every Exercise</h2>
                    </ParallaxLayer>

                    
                    <ParallaxLayer
                        offset={2}
                        speed={0.3}
                        style={{
                            backgroundImage: `url('back_gym.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}></ParallaxLayer>
                    <ParallaxLayer
                    offset={2.7}
                        >
                        <p style={{color:'#7862F8'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.</p>
                    </ParallaxLayer>
                    
                </Parallax> 
            </div>
    );
}

export default Home;
