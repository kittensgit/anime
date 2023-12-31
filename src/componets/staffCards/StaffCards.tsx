import { FC } from 'react';

import { IStaffData } from '../../types/staff/staff';

import StaffCard from './staffCard/StaffCard';

import styles from './StaffCards.module.css';

interface StaffCardsProps {
    stafflist: IStaffData[];
}

const StaffCards: FC<StaffCardsProps> = ({ stafflist }) => {
    return (
        <div className={styles.cards}>
            {stafflist.map((staff) => (
                <StaffCard
                    key={staff.person.mal_id}
                    name={staff.person.name}
                    positions={staff.positions}
                    staffImg={staff.person.images.jpg}
                />
            ))}
        </div>
    );
};

export default StaffCards;
