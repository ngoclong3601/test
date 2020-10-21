import axios from 'axios';

const posts = ()=>{
    axios({
        method: "GET",
        url : "http://localhost:3000/posts",
        data:null
      }).then(res => {
        console.log(res)
      }).catch(err =>{
        console.log(err);
      });
    return(
        <div>

        </div>
    );
}
export default posts;