

const Card = ({ data }) => {
    return (
        <div>
            {data.map((student, index) => (
                <div key={index}>
                    <h3>{student.name}</h3>
                    <p>Age: {student.age}</p>
                    <p>Branch: {student.branch}</p>
                    <p>College: {student.college}</p>
                    <p>Location: {student.location}</p>
                </div>
            ))}
        </div>
    );
}

export default Card;
