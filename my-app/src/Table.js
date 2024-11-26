function Table(){
    return(
        <><h2>My Movie List</h2>

        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Release Year</th>
                    <th>Director</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The Shawshank Redemption</td>
                    <td>Drama</td>
                    <td>1994</td>
                    <td>Frank Darabont</td>
                </tr>
                <tr>
                    <td>The Godfather</td>
                    <td>Crime, Drama</td>
                    <td>1972</td>
                    <td>Francis Ford Coppola</td>
                </tr>
                <tr>
                    <td>The Dark Knight</td>
                    <td>Action, Crime, Drama</td>
                    <td>2008</td>
                    <td>Christopher Nolan</td>
                </tr>
                <tr>
                    <td>Forrest Gump</td>
                    <td>Drama, Romance</td>
                    <td>1994</td>
                    <td>Robert Zemeckis</td>
                </tr>
                <tr>
                    <td>Inception</td>
                    <td>Action, Adventure, Sci-Fi</td>
                    <td>2010</td>
                    <td>Christopher Nolan</td>
                </tr>
            </tbody>
        </table>
    </>
)
}
export default Table;