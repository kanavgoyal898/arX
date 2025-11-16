import "./page.css";

import Image from "next/image";

export default function Instructor() {
    return (
        <div className="instructor-container">
            <div className="instructor-profile">
                <div className="instructor-image">
                    <Image src="https://cs.harvard.edu/malan/malan.jpg" alt="Instructor Profile Picture" fill className="object-cover"/>
                </div>
                <div className="instructor-details">
                    <div className="instructor-name-title">
                        <p className="instructor-name">David J. Malan</p>
                        <span className="instructor-title">Gordon McKay Professor of the Practice of Computer Science</span>
                    </div>
                    <div className="instructor-contact">
                        <p className="instructor-email">malan@harvard.edu</p>
                        <div className="instructor-socials">
                            <a href="https://youtu.be/dQw4w9WgXcQ?si=OiouV8H_nwvLmJYH" target="_blank">
                                <i className="fa-brands fa-facebook instructor-social" alt="facebook" />
                            </a>
                            <a href="https://youtu.be/dQw4w9WgXcQ?si=OiouV8H_nwvLmJYH" target="_blank">
                                <i className="fa-brands fa-twitter instructor-social" alt="twitter" />
                            </a>
                            <a href="https://youtu.be/dQw4w9WgXcQ?si=OiouV8H_nwvLmJYH" target="_blank">
                                <i className="fa-brands fa-github instructor-social" alt="github" />
                            </a>
                            <a href="https://youtu.be/dQw4w9WgXcQ?si=OiouV8H_nwvLmJYH" target="_blank">
                                <i className="fa-brands fa-linkedin instructor-social" alt="linkedin" />
                            </a>
                        </div>
                    </div>
                    <div className="instructor-contact">
                        <p className="instructor-address">
                            Harvard University,  
                            Science and Engineering Complex,
                            150 Western Avenue,
                            Allston, Massachusetts 02134 USA
                        </p>
                        <p className="instructor-phone">
                            +xx xx xxx xx xxx
                        </p>
                    </div>
                </div>
            </div>
            <div className="instructor-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </div>
        </div>
    )
}