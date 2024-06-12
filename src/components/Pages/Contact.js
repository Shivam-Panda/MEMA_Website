import '../../styles/contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <div className='forms'>
                <div className='feedback'>
                    <center>
                        <h1>Workshop Feedback</h1>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeI4K39n7R5xl3o8udAgf8ixoH5jF18hsQnKSDUFgCe5V9u1Q/viewform?embedded=true" width="500" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </center>
                </div>
                <div className='form'>
                    <center>
                        <h1>Contact Form</h1>
                        <ul>
                            <li>
                                <p><b>School: </b><input type="text" placeholder="Leave Black if N/A" /> </p>
                            </li>
                            <li>
                                <p><b>Student Count: </b><input type="number" placeholder="Student Count" /> </p>
                            </li>
                            <li>
                                <p><b>Student Average Age: </b><input type="number" placeholder="Rough Age" /> </p>
                            </li>
                            <li>
                                <p><b>Email: </b><input type="text" placeholder="Email" /> </p>
                            </li>
                            <li>
                                <p><b>Phone Number: </b><input type="number" placeholder="" /> </p>
                            </li>
                            <li>
                                <p><b>City: </b><input type="text" placeholder="Ex. Troy" /> </p>
                            </li>
                            <li>
                                <p><b>State: </b><input type="text" placeholder="Ex. Michigan" /> </p>
                            </li>
                            <li>
                                <button className='submit'>Submit</button>
                            </li>
                        </ul>
                    </center>
                </div>
            </div>
            <div className='info'>
                <center>
                    <h1>Contact Info</h1>
                </center>
                <div className='people'>
                    <div className='om'>
                        <center>
                            <h1>Shivam Panda</h1>
                            <ul>
                                <li><b>Email: </b>ompanda0910@gmail.com</li>
                                <li><b>Phone:</b> +17327615302</li>
                            </ul>
                        </center>
                    </div>
                    <div className='ritesh'>
                        <center>
                            <h1>Ritesh Palla</h1>
                            <ul>
                                <li><b>Email: </b>pallaritesh@gmail.com</li>
                                <li><b>Phone:</b> +12485251684</li>
                            </ul>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact