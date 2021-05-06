import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const HelloWorld11: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [mailto, setMailto] = useState('');

    const changeMailto = (event: any) => {
        setMailto(event.target.value);
    }



    const [subject, setSubject] = useState('');

    const changeSubject = (event: any) => {
        setSubject(event.target.value);
    }


    const [body, setBody] = useState('');

    const changeBody = (event: any) => {
        setBody(event.target.value);
    }

    // SET PHONENUM WILL CHANGE THE EMPTY STRING TO CONTAIN WHATEVER WE HAVE TYPED. 
    return (
        <div>
            <div className="field">
                <label className="label">Mail To:</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Enter Receipient" onInput={changeMailto} />
                </div>
            </div>

            <div>
                <div className="field">
                    <label className="label">Subject: </label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Enter Subject" onInput={changeSubject} />
                    </div>
                </div>
            </div>

            <div>
                <div className="field">
                    <label className="label"> Body: </label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Enter Message" onInput={changeBody} />
                    </div>
                </div>
            </div>
            <p>
                
            </p>

            <div>
                {<QRCode value={`mailto: ${mailto}?subject=${subject}&body=${body}`} size={256} fgColor="blue" />}
            </div>

        </div>
    )
}
export default HelloWorld11;

