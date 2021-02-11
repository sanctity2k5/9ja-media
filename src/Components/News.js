import React from "react";

function News(props) {
    return(
        <div className = "news-border">
        <table>

        <tr>
        <th><img className = "news-img" src = {props.img} alt = "News-img" /></th>
        <td><a href = "/" className = "note">{props.title}</a></td>
        </tr>
        </table>
         </div>



    )
}







export default News;