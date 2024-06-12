import '../../styles/kits.css'
import Plate from './kit_images/Build_Plate.png'
import Heart from './kit_images/Heart_Demo.png'
import Complex_Gear from './kit_images/Complex_Gear.png'
import Compound_Gear from './kit_images/Compound_Gear.png'
import Gears from './kit_images/Gear_Parts.png'
import Spool from './kit_images/Spool.png'

const Kits = () => {
    return (
        <div className="kits">
            <div className="eng_kit">
                <div className="kit1_eng">
                    <center>
                        <h1>Gears/Torque</h1>
                        <img src={Gears} width="300px" />
                        <p>
                            In this kit, students will understand the importance of angular velocity and torque, and how gears are able to transfer rotation to different joints. Students will be able to tinker with compounded gears as well as gear chains, where they can see how gear ratios can compound. 
                        </p>
                    </center>
                    <div className='gear_img'>
                        <img src={Complex_Gear} width="275px;" />
                        <img src={Compound_Gear} width="275px" />
                    </div>
                        <center>
                            <button>Order</button>
                        </center>
                </div>
                <div className="kit2_eng">
                    <center>
                        <h1>Spool/Torque</h1>
                        <img src={Spool} width="300px" />
                        <p>
                            With this, students will be able to understand the physics and math behind the simple concept that a longer lever makes it easier to turn an object. The kit uses a spool and different sized levers to lift various weights with a spool and pulley system.
                        </p>
                        <button>Order</button>
                    </center>

                </div>
            </div>
            <div className="med_kit">
                <div className="kit1_med">
                    <center>
                        <h1>Heart</h1>
                        <img src={Heart} width="300px" />
                        <p>
                            This kit comprises several pieces of 3D printed blocks representing the 4 main sections of the heart and a base model with an indent for each section of the heart to fit into. The students will be given the separated pieces inside the kits and asked to fit each section into its corresponding indent. They will be guided by the instructions pamphlet so that they are also learning which section is which. Once they are done with this step, they will be tasked with connecting each section in terms of where blood while flow and what kind of blood is flowing using the other connect pieces that represent the blood flow between the atriums and ventricles. This kit is essential in the process of learning about the heart since it allows students to physically see the flow of blood while making the students think critically about where blood is flowing.
                        </p>
                        <button>Order</button>
                    </center>
                </div>
                <div className="kit2_med">
                    <center>
                        <h1>Coming Soon</h1>
                        <img src={Plate} width="300px" />
                        <p>We are currently in the development phase and still designing more kits. We are also planning on adding kits for several other fields in the near future.</p>
                    </center>

                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Kits