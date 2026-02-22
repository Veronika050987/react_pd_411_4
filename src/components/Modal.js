import './Modal.css';
import { useState } from 'react';

function Modal()
{
    let [open, setOpen] = useState(false);
    let image = "https://www.ixbt.com/cpu/images/cpu-digest-2009/ext-vs-int.png";

    return(
        <div>
            <img src={image} className='small' 
                style={{display: open ? "none" : "block"}}
                onClick={() => setOpen(true)}
            />
            {
                open && 
                (
                    <div>
                        <div>
                            <img src={image} className='big' onClick={()=>setOpen(false)}/>
                        </div>
                    </div>

                )
            }
        </div>
    )
}
export default Modal;