import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect} from "react";

function AllMeetupsPage() {

  const [isLoading, setisLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);


  useEffect(() => {
    setisLoading(true);
    fetch('https://react-meetup-642b7-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
  ).then(response => {
    return response.json();
  }).then (data => {
    const meetups = [];
    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key]
      };

      meetups.push(meetup);
    }
    setisLoading(false)
    setLoadedMeetups(meetups)
  });
  }, []);

  if (isLoading) {
    return <section> <p>Loading...</p> </section>
  };

return (
    <div>
        <h1> All Meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
    </div>
)
}

export default AllMeetupsPage;