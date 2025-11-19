import { useState, useEffect } from "react";


export default function AllNotices() {

    const [notices, setNotices] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(
        () => {
            fetch(import.meta.env.VITE_API_URI + '/notice')
                .then(res => res.json())
                .then(data => {
                    setNotices(data)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setLoading(false)
                })
        }
        , []
    )
if (loading) {
        return <p>Loading notices...</p>
    }

    return (
        <section>
            <h2>Notices from Backend:</h2>
            <div>

                {notices.length===0 ? <p>No notices found.</p> :
                notices.map((notice) => {
                    console.log(notice)
                    if (!notice) return null;
                    return (
                        <div key={notice.id}>
                            <h3>{notice.title}</h3>
                            <p>{notice.description}</p>
                            <p>{notice.date}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )

}