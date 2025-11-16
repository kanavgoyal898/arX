import "./page.css";

import Image from "next/image";

const instructor = {
    name: "Lorem Ipsum",
    title: "Lorem Ipsum, Dolor Sit Amet",
    email: "lorem@ipsum.com",
    address: "Lorem Ipsum, Dolor Sit Amet, Consectetur Adipiscing Elit, 12345",
    phone: "+xx xx xxx xx xxx",
    profile_picture: "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=uS4knmZ88zNA_OjNaE_JCRuq9qn3ycgtHKDKdJSnGdY=",
    socials: [
        {
            title: "Facebook",
            faImage: "fa-brands fa-facebook",
            link: "https://youtu.be/dQw4w9WgXcQ?si=OiouV8H_nwvLmJYH",
        },
        {
            title: "Twitter",
            faImage: "fa-brands fa-twitter",
            link: "https://youtu.be/dQw4w9WgXcQ?si=OiouV8H_nwvLmJYH",
        },
        {
            title: "GitHub",
            faImage: "fa-brands fa-github",
            link: "https://youtu.be/dQw4w9WgXcQ?si=OiouV8H_nwvLmJYH",
        },
        {
            title: "LinkedIn",
            faImage: "fa-brands fa-linkedin",
            link: "https://youtu.be/dQw4w9WgXcQ?si=OiouV8H_nwvLmJYH",
        },
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
}

export default function Instructor() {
    return (
        <div className="instructor-container">
            <div className="instructor-profile">
                <div className="instructor-image">
                    <Image src={ instructor.profile_picture } alt="Instructor Profile Picture" fill className="object-cover"/>
                </div>
                <div className="instructor-details">
                    <div className="instructor-name-title">
                        <p className="instructor-name">{ instructor.name }</p>
                        <span className="instructor-title">{ instructor.title }</span>
                    </div>
                    <div className="instructor-contact">
                        <p className="instructor-email">{ instructor.email }</p>
                        <div className="instructor-socials">
                            { instructor.socials.map((social, index) => (
                                <a key={ index } href={ social.link } target="_blank">
                                    <i className={ social.faImage + " instructor-social" } alt={ social.title.toLowerCase() } />
                                </a>
                            )) }
                        </div>
                    </div>
                    <div className="instructor-contact">
                        <p className="instructor-address">
                            { instructor.address }
                        </p>
                        <p className="instructor-phone">
                            { instructor.phone }
                        </p>
                    </div>
                </div>
            </div>
            <div className="instructor-description">
                { instructor.description }
            </div>
        </div>
    )
}