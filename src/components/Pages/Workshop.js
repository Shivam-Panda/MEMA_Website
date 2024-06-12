import '../../styles/workshop.css';
import shop from './shop.jpg'
import workshop_med from './workshop_med.jpg'

const Workshop = () => {
    return (
        <div className="workshop">
            <div className="eng">
                <center>
                    <h1>Engineering</h1>
                    <img src={shop} width='500px' />
                    <p>
                        Our robotics team, Benzene Bots, has lots of machinery, including 3D printers, CNC routers, mills, drill presses, belt sanders, and a huge workshop inside of Martinrea. Some of the workshops that MEMA will host will teach students important skills like using basic machinery, designing small 3D printable souvenirs, learning how pneumatics, hydraulics, and complex gear chains work. In addition to mechanical and design skills, students will get hands-on experience with robotics programming (Java) and electrical wiring of an FRC robot. They will be able to test and execute different programs on an example robot that they will wire as a group.
                    </p>
                </center>
            </div>
            <div className="med">
                <center>
                    <h1>Medicine</h1>
                    <img src={workshop_med} width="500px" />
                </center>
                    <p className='med_desc_work' >
                        Our school has a well-equipped biology laboratory where there are several anatomical structures that show different organs and organ systems. A workshop can be hosted at our school or the models can be taken to host schools. This workshop specifically would be beneficial for students since they will be immersed in an environment that shows the anatomical structures and students can physically understand how their organs work. But, to take this understanding to a higher level, we have designed and 3D printed a large heart puzzle. This puzzle is made up of different labeled segments of the heart and students have to understand the direction of blood flow and then piece the puzzle together. This demonstration is too complicated and large to be shipped out in kits and thus is an ideal demonstration to do during our workshops. We have also prepared a presentation to accompany this puzzle that explains the biology concept behind the puzzle and connects their physical application to their theoretical knowledge. 
                    </p>
            </div>
        </div>
    )
}

export default Workshop;