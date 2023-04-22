import '../App.css';
import {Link,Outlet} from "react-router-dom"

function Workout() {
    return (
        <div className='workout_section'>
            <ul>
                <li>
                    <Link to="/home" className='nav-link'>Home</Link>
                </li>
                <li>
                    <Link to="/workout" className='nav-link'>Workout</Link>
                </li>
                <li>
                    <Link to="/about" className='nav-link'>About</Link>
                </li>
            </ul>
            <div>
            <div className='back'>
                <h2>Choose your Workout</h2>
                <div className='choosing'>
                    <Link to="/gworkout" className='nav-link'> 
                    <div className='choosing-box'>
                        <h2>GYM workout</h2>
                        <img
                            src='https://png.pngtree.com/png-vector/20191001/ourmid/pngtree-fitness-gym-equipment-silhouettes-png-image_1773986.jpg'
                            alt="React Logo"/>
                    </div>
                    </Link>
                    <Link to="/hworkout" className='nav-link'>
                    <div className='choosing-box'>
                        <h2>Home workout</h2>
                        <img
                            src='https://images.everydayhealth.com/images/strength-training-health-benefits-1440x810.jpg?w=1110'
                            alt="React Logo"/>
                    </div>
                    </Link>
                </div>
            </div>
            <div className='region-section'>
            <h2>Choose the Body-Part</h2>
                <div className='region-class'>
                    <div className='region'>
                        <img
                            src="https://media.istockphoto.com/id/479009194/photo/handsome-muscular-bodybuilder-turned-back.jpg?s=612x612&w=0&k=20&c=O33UJKKOSN1ey7D5wNG8WGISCRn39leFnXA08XHVXPc="/>
                        <p className="legend">Back</p>
                    </div>
                    <div className='region'>
                        <img src="https://cdn2.hubspot.net/hubfs/419889/HIIT_and_Cardio.jpg"/>
                        <p className="legend">Cardio</p>
                    </div>
                    <div className='region'>
                        <img src="https://st4.depositphotos.com/10252254/25266/i/450/depositphotos_252669574-stock-photo-male-athlete-bodybuilder-posing-black.jpg"/>
                        <p className="legend">Chest</p>
                    </div>
                </div>
                <div className='region-class'>
                    <div className='region'>
                        <img
                            src="https://media.istockphoto.com/id/530117889/photo/close-up-of-athletic-muscular-arm-and-torso.jpg?s=612x612&w=0&k=20&c=hduwzs96og9qQb517K7HfS8W8Cz8dXDgCF2TxeO0M4c="/>
                        <p className="legend">Lower arms</p>
                    </div>
                    <div className='region'>
                        <img src="https://img.freepik.com/premium-photo/strong-mans-calves-with-black-background_475667-373.jpg"/>
                        <p className="legend">Lower legs</p>
                    </div>
                    <div className='region'>
                        <img
                            src="https://cdn.shopify.com/s/files/1/1497/9682/articles/1_990c9ea0-ad2e-408a-803e-c3477b02f4be.jpg?v=1658839221"/>
                        <p className="legend">Shoulders</p>
                    </div>
                </div>
                <div className='region-class'>
                    <div className='region'>
                        <img src="https://www.bodybuilding.com/images/2021/march/tripple-threat-arm-assault-header-400x225.jpg"/>
                        <p className="legend">Upper arms</p>
                    </div>
                    <div className='region'>
                        <img src="https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_749160127_1000x.jpg?v=1625421239"/>
                        <p className="legend">upper legs</p>
                    </div>
                    <div className='region'>
                        <img src="https://media.istockphoto.com/id/503704962/photo/muscular-male-torso.jpg?s=612x612&w=0&k=20&c=haZhKDvPCq7B6wiwMqeoIWuxaGdjnvhTDzt1YNdNDYk="/>
                        <p className="legend">waist</p>
                    </div>
                </div>
            </div>
            {/* <Outlet/> */}
        </div>
        </div>
    );
}

export default Workout;
