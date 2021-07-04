import React from 'react'
import styled from "styled-components";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SidebarOption from './SidebarOption';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { useCollection } from "react-firebase-hooks/firestore";
import {db} from "../firebase";
 

function Sidebar() {

    const [channels,loading,error] = useCollection(db.collection('rooms'));

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Rampion HQ</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Benjamin
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Channel browser"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="People & user groups"/>
            <SidebarOption Icon={PeopleAltIcon} title="People"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>

            {channels?.docs.map(doc => (<SidebarOption key={doc.id} id={doc.id} title={doc.data().name}/>
))}


        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
color: white;
flex: 0.3;
background-color: var(--slack-color);
border-top: 1px solid #421f44;
max-width: 260px;
margin-top: 60px;

>hr {
    margin-top:10px;
    margin-bottom:10px;
    border: 1px solid #49274b;
}
`;

const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #421f44;
padding: 13px;

> .MuiSvgIcon-root {
padding:8px;
font-size: 18px;
color: #49274b;
background-color: white;
border-radius: 999px;
}
`;

const SidebarInfo = styled.div`
flex: 1;
>h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
    font-family: 'Arial';
}

>h3 {
    font-size: 12px;
    font-weight: 400;
    font-family: 'Arial';
    align-items: center;
}

>h3 >.MuiSvgIcon-root{
    font-size: 12px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
}
`;