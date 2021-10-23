import React from 'react';
import "./sidebar.css";
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StoreIcon from '@material-ui/icons/Store';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ReportIcon from '@material-ui/icons/Report';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Dashboard</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyleIcon className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Quick Menu</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <AccountCircleIcon className="sidebarIcon" />
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <StoreIcon className="sidebarIcon" />
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <ReceiptIcon className="sidebarIcon" />
                            Transcripts
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentIcon className="sidebarIcon" />
                            Assessment
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Notification</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineIcon className="sidebarIcon" />
                            Mails
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <QuestionAnswerIcon className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Stuff</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <SupervisedUserCircleIcon className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportIcon className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;
