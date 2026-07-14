import React from "react";
import s from "./ChooseMonth.module.scss";
import Select from 'react-select';
import { useTheme } from "../../../../hooks/useTheme";
import { Theme } from "../../../../context/ThemeContext";

interface Props {
    selectedMonth: string;
    onMonthChange: (month: string) => void;
}

export const ChooseMonth = ({ selectedMonth, onMonthChange }: Props) => {
    const theme = useTheme();
    const currentYear = new Date().getFullYear();
    const [year, month] = selectedMonth.split('-').map(Number);

    const months = [
        { value: 1, label: "Январь" },
        { value: 2, label: "Февраль" },
        { value: 3, label: "Март" },
        { value: 4, label: "Апрель" },
        { value: 5, label: "Май" },
        { value: 6, label: "Июнь" },
        { value: 7, label: "Июль" },
        { value: 8, label: "Август" },
        { value: 9, label: "Сентябрь" },
        { value: 10, label: "Октябрь" },
        { value: 11, label: "Ноябрь" },
        { value: 12, label: "Декабрь" },
    ];

    const years = [];
    for (let i = currentYear - 26; i <= currentYear; i++) {
        years.push({ value: i, label: i.toString() });
    }

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '150px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
        }),
        menu: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : '#fff',
            zIndex: 1000,
        }),
        option: (styles: any, { isFocused, isSelected }: any) => ({
            ...styles,
            backgroundColor: isSelected
                ? '#4793FF'
                : isFocused
                    ? theme.theme === Theme.DARK ? '#5F5F5F' : '#f0f0f0'
                    : theme.theme === Theme.DARK ? '#4F4F4F' : '#fff',
            color: isSelected ? '#fff' : theme.theme === Theme.LIGHT ? '#000' : '#fff',
            cursor: 'pointer',
        }),
    };

    return (
        <div className={s.header}>
            <div className={s.title}>Статистика погоды</div>
            <div className={s.monthSelector}>
                <Select
                    value={months.find(m => m.value === month)}
                    options={months}
                    styles={colorStyles}
                    isSearchable={false}
                />

                <Select
                    value={years.find(y => y.value === year)}
                    options={years}
                    styles={colorStyles}
                    isSearchable={false}
                />
            </div>
        </div>
    );
};