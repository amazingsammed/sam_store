import React from 'react';
import Mainbody from "@/app/agra/_component/mainbody";
import {MdFacebook} from "react-icons/md";
const d5 =[1,1,1,1,1];
function Footer(props) {
    return (
        <div>
            <div className="bg-gray-400  w-full">
                <Mainbody className="py-5 grid grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <p>Follow Us On Social Media</p>
                        <div>
                            <MdFacebook/>


                        </div>
                    </div>
                    <div>
                        <h1>Links</h1>
                        <ul>
                            {d5.map((item, i) => (
                                <li key={i}>links</li>
                            ))}

                        </ul>
                    </div>
                    <div>
                        <h1>Links</h1>
                        <ul>
                            {d5.map((item, i) => (
                                <li key={i}>links</li>
                            ))}

                        </ul>
                    </div>
                    <div>
                        <h1>Links</h1>
                        <ul>
                            {d5.map((item, i) => (
                                <li key={i}>links</li>
                            ))}

                        </ul>
                    </div>

                </Mainbody>

            </div>
            <div className="bg-green-600">
                <Mainbody className="flex flex-row gap-4 text-white py-5">
                    <p>CopyRight 2024</p>
                    <p>Agrapro.org - All Rights Reserved</p>
                </Mainbody>
            </div>
        </div>
    );
}

export default Footer;