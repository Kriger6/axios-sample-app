import React from 'react'

const UsersList = ({ list }) => {

    const mapList = list.map((x, i) => {
        return (<div key={i}>{x}</div>)
    })

    return (
        <div>
            {mapList}
        </div>
    )
}

export default UsersList