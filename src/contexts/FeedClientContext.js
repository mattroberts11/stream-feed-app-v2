import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { connect } from "getstream";
import { UserContext } from "../contexts/UserContext";

const api_key = process.env.REACT_APP_API_KEY;
// const api_secret = process.env.REACT_APP_API_SECRET;
const app_id = process.env.REACT_APP_APP_ID;


export const FeedClientContext = createContext();

export const FeedClientProvider = (props) => {

  const [feedClient, setFeedClient] = useState();
  const [globalClient, setGlobalClient] = useState();
  const [notificationsClient, setNotificationsClient] = useState();
  const [timelineClient, setTimelineClient] = useState();
  const [token, setToken] = useState();

  const userContext = useContext(UserContext);
  
  const client = connect(api_key, token, app_id);

  const createFeed = async (event) => {
    event.preventDefault();

    const response = await axios.post('http://localhost:4141/token')
    
    const token = response.data;

    const userFeed = client.feed('user', userContext.userId, token);
    const timelineFeed = client.feed('timeline', userContext.userId, token);
    const globalFeed = client.feed('global', 'all', token);
    const notificationsFeed = client.feed('notifications', userContext.userId, token);

    setFeedClient(userFeed);
    setTimelineClient(timelineFeed);
    setGlobalClient(globalFeed);
    setNotificationsClient(notificationsFeed);

  }

  // const client = connect(api_key, api_secret);
  useEffect( ()=> {
    axios.post('http://localhost:4141/token').then( res => {
      // const client = res.data;
      console.log("GET RES", res.data)
    })
  })

  // const [feedClient] = useState(connect(api_key, api_secret));

  // console.log("FeedClientContext=", feedClient);
  // value={{feedType: userEvent, feedDispatch: dispatch}}
  return (
    <FeedClientContext.Provider value={"feedClient"}>
      {props.children}
    </FeedClientContext.Provider>
  )

}