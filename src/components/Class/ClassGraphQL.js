import "./Class.css";
import React, {useState, useEffect} from 'react';

function ClassGraphQL(props) {

    const [classInfo, setClassInfo] = useState ({});

    const url = "https://api.peterportal.org/graphql"

    useEffect(() => {
        const fetchData = async () => {
            const query = `
                query {
                    course(id:"${props.name}") {
                        title
                        instructor_history {
                            name
                        }
                        department_name
                        description
                    }
                }
            `

            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({query}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
            setClassInfo(data.data.course);
        }
        fetchData();
    }, [props.name])

    let info;
    if(classInfo) {
        info = <div className="information">
            <p>{props.name}</p>
            <p>{classInfo.title}</p>
            <p>{classInfo.department_name}</p>
            <p>{classInfo.description}</p>
        </div>
    } else if (classInfo == null) {
        info = <p>Class not found.</p>
    } else {
        info = <p>Loading...</p>
    }

    return (
        <div class="container">
            <div className="clsas">
                {props.name}
                <div>
                    {info}
                </div>
            </div>
        </div>
    )
}

export default ClassGraphQL;