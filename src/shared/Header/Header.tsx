import React, { useState } from "react";
import s from "./Header.module.scss";
import Select from 'react-select'
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeContext";
import { useCustomDispatch } from "../../hooks/store";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { fetchForecastWeather } from "../../store/thunks/fetchForecastWeather";
import { cities } from "../../utils/constants/constants";

interface Props { }

export const Header = (props: Props) => {
    const theme = useTheme();
    const dispatch = useCustomDispatch();

    const options = cities;
    const [selectedCity, setSelectedCity] = useState(cities[0]);

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
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

    const handleCityChange = (option: any) => {
        if (option) {
            setSelectedCity(option);
            dispatch(fetchCurrentWeather(option.value));
            dispatch(fetchForecastWeather(option.value, 14));
        }
    };

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id="header-logo" /></div>
                <div className={s.title}>Weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                <Select
                    value={selectedCity}
                    onChange={handleCityChange}
                    styles={colorStyles}
                    options={options}
                    isSearchable={false}
                />
            </div>
        </header>
    );
};