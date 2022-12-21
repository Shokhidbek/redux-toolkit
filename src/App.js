import React , {useEffect}  from 'react'
import {useSelector , useDispatch} from 'react-redux'
import axios from 'axios'
import { getPosts } from './features/postsSlice'
const App = () => {
    const {posts} = useSelector(state => state.posts )
    const dispatch = useDispatch()

    useEffect(() => {
       const fetchPost = async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = response.data
         dispatch(getPosts(data))
       }
      fetchPost()
    }, [])
  return (
    <div>
        {
            posts && posts.map(post => {
                return(
                    <div key={post.id}>
                        <h1>
                            {post.name}
                        </h1>
                    </div>
                )
            })
        }
    </div>
  )
}
export default App