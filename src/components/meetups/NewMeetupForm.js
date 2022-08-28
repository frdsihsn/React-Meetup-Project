import { useRef } from 'react';
import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const userTitle = titleInputRef.current.value;
        const userImage = imageInputRef.current.value;
        const userAddress = addressInputRef.current.value;
        const userDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: userTitle,
            image: userImage,
            address: userAddress,
            description: userDescription
        };

        props.onAddMeetup(meetupData);
    }

return (
    <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type="url" required id="image" ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type="text" required id="address" ref ={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea required id="description" rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
)

}

export default NewMeetupForm;