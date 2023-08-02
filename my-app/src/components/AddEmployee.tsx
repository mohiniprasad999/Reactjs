import React from "react";

const AddEmployee = () => {
    return (
        <>
            <form>
                <div>
                    <label>First Name :</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Last Name :</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Email :</label>
                    <input type="text" />
                </div>
            </form>
        </>
    )

}

export default AddEmployee;