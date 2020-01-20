import React from 'react'
import '../../asets/css/alert/Alert.css'


const Alert = () => {
    return (

        <div id="alert">
            <div id="overlay">
                <div className="alert-message">
                    <h1 className="tittle">Delete Product</h1>
                    <p>You are about to delete this product. Are you sure you wish to continue?</p>

                    <div className="buttons-alert">
                        <button className="cancel-button">CANCEL</button>
                        <button className="delete-button">DELETE</button>
                    </div>


                </div>
            </div>

        </div>

    )
}

export default Alert