import data from "./DataTeam";
import { useState } from "react";
import back from "./img/back.png";
import next from "./img/next.png";
import './style.css';

function Team () {
    const [member, setMember] = useState(0);
    const { teamName, teamPost, teamQual, teamImage } = data[member];
    const memberNext = () => {
        setMember((item => {
            item++;
            if (item > data.length - 1) {
                item = 0;
            }
            return item;
        }))
    }
    const memberBack = () => {
        setMember((item => {
            item--;
            if (item < 0) {
                return data.length - 1;
            }
            return item;
        }))
    }
    console.log(data[member])
    return (
        <div className='containerTeam'>
            <div className='team-wrapper'>
                <div className='team-member'>
                    <img src={teamImage} className='team-photo' alt='pic' />
                    <div className='team-arrow'>
                        <button onClick={memberBack}>
                            <img src={back} className='back' alt='arrow' />
                        </button>
                        <button onClick={memberNext}>
                            <img src={next} className='next' alt='arrow' />
                        </button>
                    </div>
                </div>
                <div className='team-desc'>
                    <p className='team-forname'>{teamName}</p>
                    <p className='team-post'>{teamPost}</p>
                    <p className='team-qual'>{teamQual}</p>
                </div>
            </div>
        </div>
    )
}
export default Team;