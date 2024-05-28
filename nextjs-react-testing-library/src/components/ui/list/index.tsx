'use client';
import {Children, CSSProperties, useEffect, useState} from "react";

const List = ({listData}: { listData: Array<{ title: string, style?: CSSProperties }> }) => {
    const [data, setData] = useState<Array<{ title: string, style?: CSSProperties }>>([])

    const [toggled, setToggled] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setData(listData)
        }, 100)

    }, [listData])

    return <div>
        {toggled && <span data-testid="toggle-elem">Toggled</span>}
        <button onClick={() => setToggled(toggle => !toggle)} data-testid="toggle-btn">
            Toggle
        </button>
        {
            data && <div>
                <ul>
                    {
                        Children.toArray(
                            data.map(item => (
                                <li style={item.style}>{item.title}</li>
                            ))
                        )
                    }
                </ul>
            </div>
        }
    </div>
}
export default List;