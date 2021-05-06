import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const HelloWorld11: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [mobilenum, setMobilenum] = useState(0);

    const changeMobilenum = (event: any) => {
        setMobilenum(event.target.value);
    }

    const [message, setmessage] = useState('');

    const changemessage = (event: any) => {
        setmessage(event.target.value);
    }
    // SET mobileNUM WILL CHANGE THE EMPTY STRING TO CONTAIN what has been TYPED. 
    return (
        <div>
            <div className="field">
                <label className="label">Mobile Number</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Enter a phone number" onInput={changeMobilenum} />
                    <p>
                
                </p>
                </div>
            </div>
            <p>

            </p>

            <div>
                <div className="field">
                    <label className="label">Message </label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Enter Message here" onInput={changemessage} />
                    </div>
                </div>
            </div>
            <p>

            </p>
            <div>
                <QRCode value={`SMS: ${mobilenum}:${message}`} size={256} fgColor="red"  />
            </div>



        </div>
    )
}
export default HelloWorld11;

