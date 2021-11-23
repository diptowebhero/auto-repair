import React from "react";
import { Button, Card, Container} from "react-bootstrap";
import useAuth from "../../../Hook/useAuth";
import './Profile.css'
import userImg from '../../../assets/images/user.png';
const Profile = () => {
  const { AllContext } = useAuth();
  const { user ,logOut} = AllContext;
  const { email, displayName, photoURL } = user;
  return (
    <Container style={{ maxWidth: "26rem"}}>
        <Card className="border-0 shadow-lg mt-5 cards">
            <Card.Header as={"h4"} className="text-center border-0 mt-1">Profile</Card.Header>
            <Card.Body className="">
                <div className="d-flex flex-column align-items-center text-center">
                    {!photoURL?<img src={userImg} alt="..." className="rounded-circle" width="100" style={{boxShadow:'0 8px 20px -4px #95abbb'}} />
                    :
                    <img src={photoURL} alt="..." className="rounded-circle" width="100" style={{boxShadow:'0 8px 20px -4px #95abbb'}} />
                    }
                    <div className="mt-3">
                        <h4>{displayName}</h4>
                        <p style={{height:'34px'}} className="text-secondary mb-1">{email}</p>
                    </div>
                    <Button onClick={logOut} variant='info' className='main-button'>Log Out</Button>
                </div>
            </Card.Body>
        </Card>
    </Container>
  );
};

export default Profile;
