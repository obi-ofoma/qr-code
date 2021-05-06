import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const HelloWorld10: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [link, setLink] = useState('');

    const changeLink = (event: any) => {
        setLink(event.target.value);
    }
    // SET LINK will change the string to what you typed. 
    return (
        <div>
            <div className="field">
                <label className="label">URL</label>
                <p></p>
                <div className="control">
                    <input className="input" type="text" placeholder="Enter Any Url" onInput= {changeLink} />
                </div>
                <p>

                </p>
            </div>


                {/* Besides size, you can set more properties for QRCode, including logo image overlay. See  https://www.npmjs.com/package/qrcode.react*/}
                {/* The size={256} prop passed above is to specify the size of the qrcode displayed which defaults to 128*/}
                 {/* <QRCode value="This is just an ordinary string example" /> */}
                <QRCode value={link} size={256} fgColor="green" /> 

                {/* Additional useful reference: https://github.com/zxing/zxing/wiki/Barcode-Contents */}

            </div>
    )
}
export default HelloWorld10;