import { useState } from 'react';
import styles from '../styles/components/Accordion.module.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';

// TODO: animate the content expanding?

export default function Accordion({ label, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const iconProps = {
        onClick: () => setIsOpen(!isOpen),
        className: styles['icon'],
        color: 'white',
        size: 20,
    };

    return (
        <div className={styles['accordion']}>
            {/* TODO: make only the text wrap, so the plus sign stays to the right on mobile */}
            <div className={styles['label-container']}>
                <h4>{label}</h4>
                {isOpen ? (
                    <FaMinus {...iconProps} />
                ) : (
                    <FaPlus {...iconProps} />
                )}
            </div>
            {isOpen && <div className={styles['content']}>{children}</div>}
        </div>
    );
}