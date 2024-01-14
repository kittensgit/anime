import { FC } from 'react';

import { IPerson, IPersonImage } from 'types/characters';
import { IStaffData } from 'types/staff/staff';

import styles from './StaffCard.module.css';

interface StaffCardProps {
    staffImg: IPersonImage['jpg'];
    name: IPerson['name'];
    positions: IStaffData['positions'];
}

const StaffCard: FC<StaffCardProps> = ({ name, positions, staffImg }) => {
    return (
        <div className={styles.card}>
            <div className={styles.front}>
                <img
                    className={styles.img}
                    src={staffImg.image_url}
                    alt={name}
                />
                <h5 className={styles.name}>{name}</h5>
                <p className={styles.caption}>{positions[0]}</p>
            </div>
            <div className={styles.back}>
                <h5 className={styles.name}>{name}</h5>
                <p className={styles.caption}>
                    {positions
                        ? positions.map((position, index) => (
                              <span key={index}>{position} </span>
                          ))
                        : ''}
                </p>
            </div>
        </div>
    );
};

export default StaffCard;
