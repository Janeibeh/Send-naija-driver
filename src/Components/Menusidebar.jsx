import React from 'react'

import {Menu} from 'antd'

const Menusidebar = () => {
    return (
        <>
            <div className='side-bar'>
            <Menu mode="inline"
            
            items={[

                {label: "Abia ======== Umuahia", key:"au", 
                children:[
                    {label:"Proceed to booking", key:"proceed"}
                ]
            },

                {label: "Adamawa ===== Yola", key:"ay",
                children:[
                    {label:"Proceed to booking", key:"proceed"}
                ]},

                {label: "Akwaibom ==== Uyo", key:"aku",
                children:[
                    {label:"Proceed to booking", key:"proceed"}
                ]
            },
                {label: "Anambra ===== Awka", key:"aa",
                children:[
                    {label:"Proceed to booking", key:"proceed"}
                ]
            },
            
            ]}

            ></Menu>
        
            </div>
        </>
    )
}

export default Menusidebar