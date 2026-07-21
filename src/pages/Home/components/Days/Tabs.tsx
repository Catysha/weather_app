import React from 'react';
import s from './Days.module.scss';

interface Props {
    daysCount: number;
    setDaysCount: (count: number) => void;
}

export const Tabs = ({ daysCount, setDaysCount }: Props) => {
    const tabs = [
        {
            value: 'На неделю',
            count: 7,
        },
        {
            value: 'На 10 дней',
            count: 10,
        },
        {
            value: 'На 2 недели',
            count: 14,
        },
    ];

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map(tab => (
                    <div
                        className={`${s.tab} ${daysCount === tab.count ? s.active : ''}`}
                        key={tab.value}
                        onClick={() => setDaysCount(tab.count)}
                        style={{ cursor: 'pointer' }}
                    >
                        {tab.value}
                    </div>
                ))}
            </div>
        </div>
    );
};