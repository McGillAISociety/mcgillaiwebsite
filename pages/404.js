import React from 'react';
import Link from 'next/link';

class NotFound extends React.Component {
    render() {
        return (
            <section>
                <h2>
                    Page not found. <Link href="/">Return to homepage.</Link>
                </h2>
            </section>
        );
    }
}

export default NotFound;
