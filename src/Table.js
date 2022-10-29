import React, { useEffect, useState } from 'react'

const Table = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(`https://api.twelvedata.com/time_series?symbol=AAPL&interval=1month&apikey=demo&source=docs`)
            .then((res) => res.json())
            .then(data => {
                // console.log(data.values);
                setData(data.values)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <table cellPadding="10" cellSpacing="10">
            <thead>
                <tr>
                    <th>DATETIME</th>
                    <th>OPEN</th>
                    <th>HIGH</th>
                    <th>LOW</th>
                    <th>CLOSE</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.datetime}</td>
                        <td>{item.open}</td>
                        <td>{item.high}</td>
                        <td>{item.low}</td>
                        <td>{item.close}</td>
                        <td>{item.volume}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Table