import "./page.css";

const course = {
    title: "CS50 Introduction to Computer Science",
    school: "Harvard School of Engineering and Applied Sciences",
    instructor: {
        name: "David J. Malan",
        profile_link: "/instructor"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    materials: [
        {
            week: 1,
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            resources: [
                {
                    title: "Lorem ipsum",
                    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
                {
                    title: "Dolor sit amet",
                    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
                {
                    title: "Consectetur adipiscing",
                    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
            ],
        },
        {
            week: 2,
            title: "Dolor sit amet",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            resources: [
                {
                    title: "Lorem ipsum",
                    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
                {
                    title: "Dolor sit amet",
                    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
            ],
        },
        {
            week: 3,
            title: "Consectetur adipiscing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            resources: [
                {
                    title: "Lorem ipsum",
                    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
                {
                    title: "Dolor sit amet",
                    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
                {
                    title: "Consectetur adipiscing",
                    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
                {
                    title: "Elit sed do",
                    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
            ],
        },
    ],
    assignments: [
        {
            title: "Lorem ipsum",
            start_date: "01/01/2025",
            end_date: "15/01/2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            title: "Dolor sit amet",
            start_date: "16/01/2025",
            end_date: "31/01/2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
    ],
}

export default function Course() {
    return (
        <div className="course-container">
            <div className="course-header">
                <p className="course-title">{ course.title }</p>
                <span className="course-school">{ course.school }</span>
            </div>
            <div className="course-instructor">
                <a href={ course.instructor.profile_link }>{ course.instructor.name }</a>
            </div>
            <div className="course-description">
                { course.description }
            </div>
            <div className="course-materials">
                <p className="course-headers">Course Materials</p>
                { course.materials.map((material, index) => (
                    <div key={ index } className="course-material">
                        <div className="course-material-container">
                            <div className="course-material-title">
                                Week { material.week }: { material.title }
                            </div>
                            <div className="course-material-description">
                                { material.description }
                            </div>
                        </div>
                        <div className="course-material-resources">
                            { material.resources.map((resource, index_) => (
                                <div key={ index_ } className="course-material-resource">
                                    <a href={ resource.link } target="_blank">{ resource.title }</a>
                                </div>
                            )) }
                        </div>
                    </div>
                )) }
            </div>
            <div className="course-assignments">
                <p className="course-headers">Assignments</p>
                { course.assignments.map((assignment, index) => (
                    <div key={ index } className="course-assignment">
                        <div className="course-assignment-container">
                            <div className="course-assignment-header">
                                <div className="course-assignment-title">
                                    Assignment { index + 1 }: { assignment.title }
                                </div>
                                <div className="course-assignment-dates">
                                    { assignment.start_date } - { assignment.end_date }
                                </div>
                            </div>
                            <div className="course-assignment-description">
                                { assignment.description }
                            </div>
                        </div>
                        <div className="course-assignment-actions">
                            <a href={ assignment.link } target="_blank">
                                <button className="button-filled">View Details</button>
                            </a>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}