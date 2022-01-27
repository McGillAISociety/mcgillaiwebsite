import React from 'react';
import Link from 'next/link';

class NotFound extends React.Component {
    render() {
        return (
            <div className="section">
                <h2>
                    Page not found. <Link href="/">Return to homepage.</Link>
                </h2>
            </div>
        );
    }
}

export default NotFound;
