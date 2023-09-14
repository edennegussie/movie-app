export default function MovieDetail (props){

    return (
        <div>

            <strong>{props.mov.title}</strong>

            <ul>
                <li>Year: {props.mov.year} </li>
                <li>Stars: {props.mov.stars} </li>
                <li>Type: {props.mov.q} </li>
                <li>Image:  <img src={props.mov.image}  width="250" height="300" /> </li>
               

            </ul>
        </div>
    );
}