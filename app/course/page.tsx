import "./page.css";

export default function Course() {
    return (
        <div className="course-container">
            <div className="course-header">
                <p className="course-title">CS50 Introduction to Computer Science</p>
                <span className="course-school">Harvard School of Engineering and Applied Sciences</span>
            </div>
            <div className="course-instructor">
                <a href="/instructor">David J. Malan</a>
            </div>
            <div className="course-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="course-materials">
                <p className="course-headers">Course Materials</p>
                <div className="course-material">
                    <div className="course-material-container">
                        <div className="course-material-title">
                            Week X: Lorem ipsum
                        </div>
                        <div className="course-material-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div className="course-material-resources">
                        <div className="course-material-resource">
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Lorem ipsum</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course-assignments">
                <p className="course-headers">Assignments</p>
                <div className="course-assignment">
                    <div className="course-assignment-container">
                        <div className="course-assignment-header">
                            <div className="course-assignment-title">
                                Assignment X: Lorem ipsum
                            </div>
                            <div className="course-assignment-dates">
                                DD MM YYYY - DD MM YYYY
                            </div>
                        </div>
                        <div className="course-assignment-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div className="course-assignment-actions">
                        <button className="button-filled">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}